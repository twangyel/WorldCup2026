// js/auth.js — Shared Supabase Auth & Data Layer

const SUPABASE_URL = 'https://ftgfbyfhuhpbwrevcsve.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Z2ZieWZodWhwYndyZXZjc3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTYzNjUsImV4cCI6MjA5NjIzMjM2NX0.UJ2HDtmFpXwAz3pZERKsv0Mi_kFDFJG3SKemikq5rW8'

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let currentUser = null
let currentProfile = null

// =====================
// WHATSAPP HELPERS
// =====================
// We store auth identity in Supabase as a synthesized email derived from the
// user's WhatsApp number. The real WhatsApp number lives in profiles.whatsapp
// so it can be used for sending template messages.
const WA_EMAIL_DOMAIN = 'wa.predict.local'
const DEFAULT_COUNTRY_CODE = '975' // Bhutan

// Strip everything except digits. If the result is short (local number without
// country code), prepend the default country code.
function normalizeWhatsapp(raw) {
    if (!raw) return ''
    let digits = String(raw).replace(/\D/g, '')
    if (!digits) return ''
    // Local numbers (e.g. "17123456" in Bhutan) -> add country code
    // Heuristic: anything under 10 digits is treated as local
    if (digits.length < 10) digits = DEFAULT_COUNTRY_CODE + digits
    return digits
}

function whatsappToEmail(raw) {
    const d = normalizeWhatsapp(raw)
    return d ? `${d}@${WA_EMAIL_DOMAIN}` : ''
}

function isValidWhatsapp(raw) {
    const d = normalizeWhatsapp(raw)
    // Reasonable bounds: 10-15 digits per E.164
    return d.length >= 10 && d.length <= 15
}

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

async function signInOrSignUp(name, whatsapp, password) {
    if (!isValidWhatsapp(whatsapp)) {
        return { data: null, error: { message: 'Enter a valid WhatsApp number' } }
    }
    const email = whatsappToEmail(whatsapp)

    // 1. Try to sign in
    const { data: signInData, error: signInError } = await supabaseClient.auth.signInWithPassword({ email, password })

    if (signInData?.session) {
        currentUser = signInData.user
        await loadProfile()
        return { data: signInData, error: null }
    }

    // 2. If sign-in failed, try sign up
    if (signInError) {
        return signUpUser(name, whatsapp, password)
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

// =====================
// AUTH HELPERS
// =====================



async function checkEmailExists(email) {
    // Uses the public.email_exists(check_email text) RPC defined in Supabase.
    // This is safer than selecting from profiles directly: it doesn't expose
    // any columns to anon, and works regardless of RLS on the profiles table.
    const { data, error } = await supabaseClient.rpc('email_exists', { check_email: email })
    if (error) {
        console.warn('email_exists RPC failed:', error)
        return { exists: false, error }
    }
    return { exists: !!data, error: null }
}

async function checkWhatsappExists(whatsapp) {
    if (!isValidWhatsapp(whatsapp)) return { exists: false, error: null }
    return checkEmailExists(whatsappToEmail(whatsapp))
}

async function signInUser(whatsapp, password) {
    if (!isValidWhatsapp(whatsapp)) {
        return { data: null, error: { message: 'Enter a valid WhatsApp number' } }
    }
    const email = whatsappToEmail(whatsapp)
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password })
    if (data?.session) {
        currentUser = data.user
        await loadProfile()
        return { data, error: null }
    }
    return { data: null, error }
}

async function signUpUser(name, whatsapp, password) {
    const cleanName = (name || '').trim()
    const wa = normalizeWhatsapp(whatsapp)
    if (!cleanName) return { data: null, error: { message: 'Name is required' } }
    if (!isValidWhatsapp(whatsapp)) return { data: null, error: { message: 'Enter a valid WhatsApp number' } }

    const email = whatsappToEmail(wa)

    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: { data: { name: cleanName, whatsapp: wa } }
    })

    if (error) return { data: null, error }

    if (!data.session) {
        return {
            data: null,
            error: { message: 'Sign up succeeded but no session was returned. In Supabase, turn OFF "Confirm email" in Auth > Providers > Email.' }
        }
    }

    currentUser = data.user
    await loadProfile()
    if (!currentProfile) {
        const { data: newProfile } = await supabaseClient
            .from('profiles')
            .insert({
                id: data.user.id,
                email,           // synthesized — keeps the column populated
                name: cleanName,
                whatsapp: wa,
                fee_paid: false,
                role: 'user'
            })
            .select()
            .single()
        if (newProfile) currentProfile = newProfile
    } else {
        // Profile row already existed (e.g. trigger created it) — make sure
        // name and whatsapp are filled in.
        await supabaseClient
            .from('profiles')
            .update({ name: cleanName, whatsapp: wa })
            .eq('id', data.user.id)
        await loadProfile()
    }
    return { data, error: null }
}

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
    const wa = normalizeWhatsapp(payload.whatsapp || payload.phone)
    const { data, error } = await supabaseClient.from('profiles').insert({
        name: payload.name,
        email: payload.email || (wa ? whatsappToEmail(wa) : null),
        whatsapp: wa || null,
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

// =====================
// PRIVATE LEAGUES
// =====================

async function getSystemSettings() {
    try {
        const { data, error } = await supabaseClient
            .from('system_settings')
            .select('*')
            .eq('id', 1)
            .single()
        if (error) throw error
        return { data: data || { private_leagues_enabled: false }, error: null }
    } catch (e) {
        return { data: { private_leagues_enabled: false }, error: e }
    }
}

async function setSystemSettings(payload) {
    try {
        const { data, error } = await supabaseClient
            .from('system_settings')
            .upsert({ id: 1, ...payload }, { onConflict: 'id' })
            .select()
            .single()
        return { data, error }
    } catch (e) {
        return { data: null, error: e }
    }
}

async function createLeague(name) {
    const user = getUser()
    if (!user) return { data: null, error: new Error('Not authenticated') }

    // Check if private leagues are enabled globally
    const { data: sys } = await getSystemSettings()
    if (!sys?.private_leagues_enabled) {
        return { data: null, error: new Error('Private leagues are currently disabled') }
    }

    // Only paid users can create leagues
    if (!currentProfile?.fee_paid) {
        return { data: null, error: new Error('Complete your entry fee to create private leagues') }
    }

    const code = 'WC26-' + Math.random().toString(36).substring(2, 6).toUpperCase()

    const { data, error } = await supabaseClient
        .from('leagues')
        .insert({
            name: name.trim(),
            created_by: user.id,
            invite_code: code,
            is_private: true
        })
        .select()
        .single()

    if (!error && data) {
        await supabaseClient
            .from('league_memberships')
            .insert({ league_id: data.id, user_id: user.id })
    }

    return { data, error }
}

async function joinLeagueByCode(code) {
    const user = getUser()
    if (!user) return { data: null, error: new Error('Not authenticated') }

    // Check if private leagues are enabled globally
    const { data: sys } = await getSystemSettings()
    if (!sys?.private_leagues_enabled) {
        return { data: null, error: new Error('Private leagues are currently disabled') }
    }

    const cleanCode = code.trim().toUpperCase()

    const { data: league, error: findErr } = await supabaseClient
        .from('leagues')
        .select('id, name')
        .eq('invite_code', cleanCode)
        .single()

    if (findErr || !league) {
        return { data: null, error: new Error('Invalid invite code') }
    }

    const { error } = await supabaseClient
        .from('league_memberships')
        .insert({ league_id: league.id, user_id: user.id })

    return { data: league, error }
}

async function getMyLeagues() {
    const user = getUser()
    if (!user) return { data: [], error: new Error('Not authenticated') }

    const { data, error } = await supabaseClient
        .from('league_memberships')
        .select('league_id, leagues(id, name, invite_code, created_by, created_at)')
        .eq('user_id', user.id)

    if (error) return { data: [], error }

    const leagues = (data || []).map(m => ({
        ...m.leagues,
        membership_id: m.league_id
    }))

    return { data: leagues, error: null }
}

async function getLeagueMembers(leagueId) {
    const { data, error } = await supabaseClient
        .from('league_memberships')
        .select('user_id, profiles(id, name, department, fee_paid)')
        .eq('league_id', leagueId)

    if (error) return { data: [], error }

    const members = (data || []).map(m => m.profiles).filter(Boolean)
    return { data: members, error: null }
}

async function getLeagueLeaderboard(leagueId) {
    const { data: members, error: mErr } = await getLeagueMembers(leagueId)
    if (mErr) return { data: [], error: mErr }

    const memberIds = members.map(m => m.id)
    const { data: allStats } = await getLeaderboard()

    const filtered = (allStats || []).filter(s => 
        memberIds.includes(s.user_id) || memberIds.includes(s.id)
    )

    filtered.forEach((s, i) => {
        s.league_rank = i + 1
        s.total_in_league = filtered.length
    })

    return { data: filtered, error: null }
}

async function leaveLeague(leagueId) {
    const user = getUser()
    if (!user) return { error: new Error('Not authenticated') }

    const { error } = await supabaseClient
        .from('league_memberships')
        .delete()
        .eq('league_id', leagueId)
        .eq('user_id', user.id)

    return { error }
}