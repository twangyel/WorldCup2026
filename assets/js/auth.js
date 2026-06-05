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
    // Handle magic link / OAuth callback (PKCE flow)
    const query = new URLSearchParams(window.location.search)
    const code = query.get('code')
    
    if (code) {
        const { data, error } = await supabaseClient.auth.exchangeCodeForSession(code)
        if (!error && data.session) {
            // Clean the URL so refresh doesn't re-exchange
            window.history.replaceState({}, document.title, window.location.pathname)
        }
    }
    
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

async function signInWithMagicLink(email) {
    const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: true }
    })
    return { error }
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

// =====================
// EXPOSE TO WINDOW (guarantees global access)
// =====================
window.supabaseClient = supabaseClient
window.initAuth = initAuth
window.signInWithMagicLink = signInWithMagicLink
window.signOut = signOut
window.getUser = getUser
window.getProfile = getProfile
window.isAdmin = isAdmin
window.updateProfile = updateProfile
window.getSupabase = getSupabase
window.getFixtures = getFixtures
window.getMyPredictions = getMyPredictions
window.savePrediction = savePrediction
window.getLeaderboard = getLeaderboard
window.addFixture = addFixture
window.updateFixtureScore = updateFixtureScore

console.log('✅ auth.js loaded, functions exposed to window')