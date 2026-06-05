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
        // Let the UI decide whether to show the payment gate.
        // Do NOT sign the user out just because they haven't paid yet.
        return { user: currentUser, profile: currentProfile }
    }

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
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
        currentUser = signInData.user
        await loadProfile()
        // Let showApp() route unpaid users to the payment gate.
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
            if (signUpError.message.includes('already registered') || signUpError.message.includes('already exists')) {
                return {
                    data: null,
                    error: { message: 'Account exists but password is wrong. Try again or ask admin to reset it.' }
                }
            }
            return { data: null, error: signUpError }
        }

        if (!signUpData.session) {
            return {
                data: null,
                error: { message: 'Sign up succeeded but no session was returned. In Supabase, turn OFF "Confirm email" in Auth > Providers > Email.' }
            }
        }

        // Successful signup with session — set user and make sure a profile row exists.
        currentUser = signUpData.user
        await loadProfile()
        if (!currentProfile) {
            // Create the profile row so the payment gate has something to read/update.
            const { data: newProfile } = await supabaseClient
                .from('profiles')
                .insert({
                    id: signUpData.user.id,
                    email,
                    name: email.split('@')[0],
                    fee_paid: false,
                    role: 'user'
                })
                .select()
                .single()
            if (newProfile) currentProfile = newProfile
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

async function getPrizePool() {
    const { data: settings } = await supabaseClient.from('prize_settings').select('*').eq('id', 1).single()
    const entryFee = settings?.entry_fee || 500
    const currency = settings?.currency || 'Nu.'

    const { data: paidUsers } = await supabaseClient.from('profiles').select('id').eq('fee_paid', true)
    const count = paidUsers?.length || 0
    const amount = count * entryFee

    return { data: { amount, currency, paid_count: count }, error: null }
}

// =====================
// ADMIN
// =====================
async function getAllUsers() {
    const { data, error } = await supabaseClient.from('profiles').select('*').order('created_at', { ascending: false })
    return { data: data || [], error }
}

async function setFeePaid(userId, paid) {
    const { data, error } = await supabaseClient.from('profiles').update({ fee_paid: paid }).eq('id', userId).select().single()
    return { data, error }
}

async function removeUser(userId) {
    // Delete predictions first, then profile (auth user deletion requires service role or admin API)
    await supabaseClient.from('predictions').delete().eq('user_id', userId)
    const { error } = await supabaseClient.from('profiles').delete().eq('id', userId)
    return { error }
}

async function inviteUser(payload) {
    // Insert a profile row; actual auth invite would need admin API or magic link
    const { data, error } = await supabaseClient.from('profiles').insert({
        name: payload.name,
        email: payload.email,
        department: payload.department || null,
        phone: payload.phone || null,
        fee_paid: false,
        role: 'user'
    }).select().single()
    return { data, error }
}

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

async function updateFixtureKickoff(id, kickoff) {
    const { error } = await supabaseClient.from('fixtures').update({ kickoff }).eq('id', id)
    return { error }
}

async function deleteFixture(id) {
    await supabaseClient.from('predictions').delete().eq('fixture_id', id)
    const { error } = await supabaseClient.from('fixtures').delete().eq('id', id)
    return { error }
}

async function getPrizeSettings() {
    const { data, error } = await supabaseClient.from('prize_settings').select('*').eq('id', 1).single()
    return { data, error }
}

async function setPrizeSettings(payload) {
    const { data, error } = await supabaseClient.from('prize_settings').upsert({ id: 1, ...payload }, { onConflict: 'id' }).select().single()
    return { data, error }
}