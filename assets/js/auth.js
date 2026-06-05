// js/auth.js — Shared Supabase Auth & Data Layer

const SUPABASE_URL = 'https://ftgfbyfhuhpbwrevcsve.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Z2ZieWZodWhwYndyZXZjc3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTYzNjUsImV4cCI6MjA5NjIzMjM2NX0.UJ2HDtmFpXwAz3pZERKsv0Mi_kFDFJG3SKemikq5rW8'

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let currentUser = null
let currentProfile = null

// =====================
// AUTH
// =====================
async function initAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession()
    
    if (session) {
        currentUser = session.user
        await loadProfile()
        return { user: currentUser, profile: currentProfile }
    }
    
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
            currentUser = session.user
            await loadProfile()
            window.location.reload()
        }
        if (event === 'SIGNED_OUT') {
            currentUser = null
            currentProfile = null
        }
    })
    
    return null
}

async function loadProfile() {
    if (!currentUser) return null
    
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .single()
    
    if (data) currentProfile = data
    return currentProfile
}

async function signInOrSignUp(email, password) {
    // 1. Try to sign in
    const { data: signInData, error: signInError } = await supabaseClient.auth.signInWithPassword({ email, password })
    
    if (signInData?.session) {
        return { data: signInData, error: null }
    }
    
    // 2. If sign-in failed, try sign up
    if (signInError) {
        const { data: signUpData, error: signUpError } = await supabaseClient.auth.signUp({
            email,
            password,
            options: { data: { name: email.split('@')[0] } }
        })
        
        if (signUpError) {
            // User might already exist from OTP/magic link
            if (signUpError.message.includes('already registered') || signUpError.message.includes('already exists')) {
                return { 
                    data: null, 
                    error: { message: 'Account exists but has no password. Ask admin to reset it, or use a different email.' } 
                }
            }
            return { data: null, error: signUpError }
        }
        
        // If signUp succeeded but no session, email confirmation is likely enabled
        if (!signUpData.session) {
            return { 
                data: null, 
                error: { message: 'Sign up succeeded but login blocked. In Supabase, turn OFF "Confirm email" in Auth > Providers > Email.' } 
            }
        }
        
        return { data: signUpData, error: null }
    }
    
    return { data: null, error: signInError }
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut()
    if (!error) {
        currentUser = null
        currentProfile = null
        window.location.reload()
    }
    return { error }
}

// =====================
// PROFILE
// =====================
function getUser() { return currentUser }
function getProfile() { return currentProfile }
function isAdmin() { return currentProfile?.role === 'admin' }

async function updateProfile(updates) {
    if (!currentUser) return { error: new Error('Not authenticated') }
    
    const { data, error } = await supabaseClient
        .from('profiles')
        .update(updates)
        .eq('id', currentUser.id)
        .select()
        .single()
    
    if (!error && data) currentProfile = { ...currentProfile, ...data }
    return { data, error }
}

// =====================
// DATA
// =====================
function getSupabase() { return supabaseClient }

async function getFixtures() {
    const { data, error } = await supabaseClient
        .from('fixtures')
        .select('*')
        .order('kickoff', { ascending: true })
    return { data: data || [], error }
}

async function getMyPredictions() {
    if (!currentUser) return { data: [], error: new Error('Not authenticated') }
    
    const { data, error } = await supabaseClient
        .from('predictions')
        .select('*')
        .eq('user_id', currentUser.id)
    return { data: data || [], error }
}

async function savePrediction(fixtureId, home, away) {
    if (!currentUser) return { error: new Error('Not authenticated') }
    
    const { data: existing } = await supabaseClient
        .from('predictions')
        .select('id')
        .eq('user_id', currentUser.id)
        .eq('fixture_id', fixtureId)
        .single()
    
    if (existing) {
        const { error } = await supabaseClient
            .from('predictions')
            .update({ home_prediction: home, away_prediction: away })
            .eq('id', existing.id)
        return { error }
    } else {
        const { error } = await supabaseClient
            .from('predictions')
            .insert({
                user_id: currentUser.id,
                fixture_id: fixtureId,
                home_prediction: home,
                away_prediction: away
            })
        return { error }
    }
}

async function getLeaderboard() {
    const { data: profiles } = await supabaseClient.from('profiles').select('*')
    const { data: allPredictions } = await supabaseClient.from('predictions').select('*')
    
    if (!profiles) return { data: [], error: new Error('No profiles') }
    
    const stats = profiles.map(p => {
        const userPreds = allPredictions?.filter(pred => pred.user_id === p.id) || []
        const points = userPreds.reduce((sum, pred) => sum + (pred.points_awarded || 0), 0)
        const exact = userPreds.filter(pred => pred.points_awarded === 5).length
        const gd = userPreds.filter(pred => pred.points_awarded === 3).length
        const result = userPreds.filter(pred => pred.points_awarded === 2).length
        
        return { ...p, points, exact, gd, result }
    })
    
    stats.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points
        if (b.exact !== a.exact) return b.exact - a.exact
        if (b.gd !== a.gd) return b.gd - a.gd
        return b.result - a.result
    })
    
    return { data: stats, error: null }
}

// =====================
// ADMIN
// =====================
async function addFixture(fixture) {
    const { data, error } = await supabaseClient
        .from('fixtures')
        .insert(fixture)
        .select()
    return { data, error }
}

async function updateFixtureScore(id, homeScore, awayScore) {
    const updates = {}
    if (homeScore !== undefined) updates.home_score = homeScore
    if (awayScore !== undefined) updates.away_score = awayScore
    
    const { error } = await supabaseClient
        .from('fixtures')
        .update(updates)
        .eq('id', id)
    return { error }
}