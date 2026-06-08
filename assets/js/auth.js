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
    // Only fetch profiles where fee_paid = true (plus admin can see all, handled by RLS or app layer)
    const [{ data: profiles }, { data: allResults }] = await Promise.all([
        supabaseClient
            .from('profiles')
            .select('*')
            .eq('fee_paid', true),  // ← ONLY PAID USERS
        supabaseClient
            .from('prediction_results')
            .select('*')
    ])

    if (!profiles) return { data: [], error: new Error('No profiles') }

    let stats

    if (allResults && allResults.length > 0) {
        const userIds = [...new Set(allResults.map(r => r.user_id))]
        stats = userIds.map(uid => {
            const userResults = allResults.filter(r => r.user_id === uid)
            const profile = profiles.find(p => p.id === uid) || {}
            // Skip if no paid profile found (safety check)
            if (!profile.id) return null
            const engineStats = BonusEngine.aggregateUserStats(uid, userResults)
            return {
                ...profile,
                ...engineStats,
                points: engineStats.points,
                exact: engineStats.exact,
                gd: engineStats.gd,
                result: engineStats.result
            }
        }).filter(Boolean)  // ← Remove nulls (unpaid users with results but no profile)
    } else {
        const { data: allPredictions } = await supabaseClient.from('predictions').select('*')
        stats = profiles.map(p => {
            const userPreds = allPredictions?.filter(pred => pred.user_id === p.id) || []
            const points = userPreds.reduce((sum, pred) => sum + (pred.points_awarded || 0), 0)
            const exact = userPreds.filter(pred => pred.points_awarded === 5).length
            const gd = userPreds.filter(pred => pred.points_awarded === 3).length
            const result = userPreds.filter(pred => pred.points_awarded === 2).length
            return { ...p, points, exact, gd, result }
        })
    }

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

// Add to auth.js (or as a script block in index.html before index.js)
window.getSystemSettings = async function() {
  try {
    const { data, error } = await supabaseClient
      .from('system_settings')
      .select('*')
      .limit(1)
    if (error) throw error
    return { data: data?.[0] || { private_leagues_enabled: false }, error: null }
  } catch (e) {
    return { data: { private_leagues_enabled: false }, error: e }
  }
}

// =====================
// PRIVATE LEAGUES
// =====================
async function createLeague(name) {
    if (!currentUser) return { data: null, error: new Error('Not authenticated') }

    // Generate a unique 6-character invite code
    let code
    let attempts = 0
    do {
        code = Math.random().toString(36).substring(2, 8).toUpperCase()
        attempts++
        // Check if code already exists
        const { data: existing } = await supabaseClient
            .from('leagues')
            .select('id')
            .eq('invite_code', code)
            .single()
        if (!existing) break
    } while (attempts < 10)

    if (attempts >= 10) {
        return { data: null, error: new Error('Failed to generate unique invite code. Please try again.') }
    }

    const { data, error } = await supabaseClient
        .from('leagues')
        .insert({
            name: name,
            created_by: currentUser.id,
            invite_code: code
        })
        .select()
        .single()

    if (error) return { data: null, error }

    // Auto-add creator as first member
    await supabaseClient
        .from('league_memberships')
        .insert({
            league_id: data.id,
            user_id: currentUser.id
        })

    return { data, error: null }
}

async function joinLeagueByCode(code) {
    if (!currentUser) return { data: null, error: new Error('Not authenticated') }

    const cleanCode = code.trim().toUpperCase()

    // Find league by invite code
    const { data: league, error: leagueError } = await supabaseClient
        .from('leagues')
        .select('*')
        .eq('invite_code', cleanCode)
        .single()

    if (leagueError || !league) {
        return { data: null, error: new Error('Invalid invite code. Please check and try again.') }
    }

    // Check if already a member
    const { data: existing } = await supabaseClient
        .from('league_memberships')
        .select('*')
        .eq('league_id', league.id)
        .eq('user_id', currentUser.id)
        .single()

    if (existing) {
        return { data: null, error: new Error('You are already a member of this league.') }
    }

    // Add membership
    const { data, error } = await supabaseClient
        .from('league_memberships')
        .insert({
            league_id: league.id,
            user_id: currentUser.id
        })
        .select()
        .single()

    if (error) return { data: null, error }

    return { data: { ...data, league }, error: null }
}

async function getMyLeagues() {
    if (!currentUser) return { data: [], error: new Error('Not authenticated') }

    const { data, error } = await supabaseClient
        .from('league_memberships')
        .select('league_id, leagues(*)')
        .eq('user_id', currentUser.id)

    if (error) return { data: [], error }

    // Extract league data from the joined query
    const leagues = (data || []).map(m => m.leagues).filter(Boolean)
    return { data: leagues, error: null }
}

async function getLeagueMembers(leagueId) {
    const { data, error } = await supabaseClient
        .from('league_memberships')
        .select('user_id, profiles(*)')
        .eq('league_id', leagueId)

    if (error) return { data: [], error }

    const members = (data || []).map(m => m.profiles).filter(Boolean)
    return { data: members, error: null }
}

async function leaveLeague(leagueId) {
    if (!currentUser) return { error: new Error('Not authenticated') }

    const { error } = await supabaseClient
        .from('league_memberships')
        .delete()
        .eq('league_id', leagueId)
        .eq('user_id', currentUser.id)

    return { error }
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