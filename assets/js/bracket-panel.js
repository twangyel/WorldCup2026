// ============================================
// BRACKET PANEL UI
// User-facing bracket interaction
// ============================================

// State
let bpState = {
  settings: null,
  slots: [],
  myEntry: null,
  myPicks: new Map(),
  championPick: null,
  championFlag: null,
  isPaid: false,
  isLocked: false,
  hasSubmitted: false,
  currentPhase: 'r32'
}

// ============================================
// INIT
// ============================================
export async function initBracketPanel() {
  try {
    // Load settings
    const { data: settings } = await supabaseClient
      .from('bracket_settings')
      .select('*')
      .single()
    bpState.settings = settings
    bpState.isLocked = ['locked', 'live', 'completed'].includes(settings?.status)

    // Load slots
    const { data: slots } = await supabaseClient
      .from('bracket_slots')
      .select('*')
      .order('round', { ascending: true })
      .order('match_number', { ascending: true })
    bpState.slots = slots || []

    // Load my entry
    const user = supabaseClient.auth.user()
    if (user) {
      const { data: entry } = await supabaseClient
        .from('bracket_entries')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (entry) {
        bpState.myEntry = entry
        bpState.isPaid = entry.payment_status === 'paid'
        bpState.hasSubmitted = !!entry.submitted_at
        bpState.championPick = entry.champion_pick
        bpState.championFlag = entry.champion_pick_flag

        // Load my picks
        const { data: picks } = await supabaseClient
          .from('bracket_picks')
          .select('*')
          .eq('entry_id', entry.id)

        picks?.forEach(p => bpState.myPicks.set(p.slot_id, p.picked_team))
      }
    }

    renderBracketPanel()

  } catch (err) {
    console.error('Bracket panel init error:', err)
    document.getElementById('bracket-content').innerHTML = `
      <div style="text-align:center;padding:40px 20px">
        <div style="font-size:40px;margin-bottom:16px">⚠️</div>
        <h3 style="font-size:18px;font-weight:700;margin-bottom:8px">Something went wrong</h3>
        <p style="color:#64748b">${err.message}</p>
      </div>
    `
  }
}

// ============================================
// RENDER MAIN PANEL
// ============================================
function renderBracketPanel() {
  const container = document.getElementById('bracket-content')
  if (!container) return

  // Not paid → payment gate
  if (!bpState.isPaid) {
    container.innerHTML = renderPaymentGate()
    return
  }

  // Locked and not submitted → too late
  if (bpState.isLocked && !bpState.hasSubmitted) {
    container.innerHTML = renderTooLate()
    return
  }

  // Build the bracket UI
  container.innerHTML = `
    <div class="bp-header">
      <div class="bp-phase-tabs">
        <button class="bp-tab ${bpState.currentPhase === 'r32' ? 'active' : ''}" onclick="bpSwitchPhase('r32')">R32</button>
        <button class="bp-tab ${bpState.currentPhase === 'r16' ? 'active' : ''}" onclick="bpSwitchPhase('r16')">R16</button>
        <button class="bp-tab ${bpState.currentPhase === 'qf' ? 'active' : ''}" onclick="bpSwitchPhase('qf')">QF</button>
        <button class="bp-tab ${bpState.currentPhase === 'sf' ? 'active' : ''}" onclick="bpSwitchPhase('sf')">SF</button>
        <button class="bp-tab ${bpState.currentPhase === 'final' ? 'active' : ''}" onclick="bpSwitchPhase('final')">Final</button>
        <button class="bp-tab ${bpState.currentPhase === 'champion' ? 'active' : ''}" onclick="bpSwitchPhase('champion')">🏆</button>
      </div>
      ${!bpState.isLocked ? `
        <div class="bp-actions">
          <button class="bp-btn-secondary" onclick="bpSaveDraft()">Save Draft</button>
          <button class="bp-btn-primary" onclick="bpSubmitBracket()">Submit Bracket</button>
        </div>
      ` : ''}
    </div>

    <div class="bp-phase-content" id="bpPhaseContent">
      ${renderPhase(bpState.currentPhase)}
    </div>

    ${bpState.hasSubmitted ? `
      <div class="bp-submitted-banner">
        ✓ Your bracket is submitted and locked
      </div>
    ` : ''}
  `
}

// ============================================
// RENDER PHASE
// ============================================
function renderPhase(phase) {
  if (phase === 'champion') {
    return renderChampionPhase()
  }

  const slots = bpState.slots.filter(s => s.round === phase)
  const phaseNames = {
    r32: 'Round of 32', r16: 'Round of 16', qf: 'Quarter-Finals',
    sf: 'Semi-Finals', final: 'Final'
  }

  return `
    <div class="bp-phase-header">
      <h3>${phaseNames[phase]}</h3>
      <span class="bp-points-badge">${getPoints(phase)} pts per correct pick</span>
    </div>
    <div class="bp-matches">
      ${slots.map(slot => renderMatch(slot)).join('')}
    </div>
  `
}

function renderMatch(slot) {
  const myPick = bpState.myPicks.get(slot.id)
  const hasWinner = slot.winner !== ''
  const isCorrect = myPick && myPick === slot.winner
  const isLocked = bpState.isLocked

  let teamAClass = ''
  let teamBClass = ''

  if (hasWinner && myPick) {
    if (myPick === 'team_a') teamAClass = isCorrect ? 'correct' : 'wrong'
    if (myPick === 'team_b') teamBClass = isCorrect ? 'correct' : 'wrong'
  } else if (myPick) {
    if (myPick === 'team_a') teamAClass = 'selected'
    if (myPick === 'team_b') teamBClass = 'selected'
  }

  const canPick = !isLocked && !hasWinner && slot.team_a && slot.team_b

  return `
    <div class="bp-match" data-slot="${slot.id}">
      <div class="bp-match-label">${slot.slot_label}</div>
      <div class="bp-match-teams">
        <button class="bp-team ${teamAClass} ${canPick ? 'pickable' : ''}" 
                onclick="bpPickTeam('${slot.id}', 'team_a')"
                ${!canPick ? 'disabled' : ''}>
          <span class="bp-flag">${slot.team_a_flag || '🏳️'}</span>
          <span class="bp-team-name">${slot.team_a || 'TBD'}</span>
          ${hasWinner && slot.winner === 'team_a' ? '<span class="bp-winner-mark">✓</span>' : ''}
        </button>
        <div class="bp-vs">VS</div>
        <button class="bp-team ${teamBClass} ${canPick ? 'pickable' : ''}" 
                onclick="bpPickTeam('${slot.id}', 'team_b')"
                ${!canPick ? 'disabled' : ''}>
          <span class="bp-flag">${slot.team_b_flag || '🏳️'}</span>
          <span class="bp-team-name">${slot.team_b || 'TBD'}</span>
          ${hasWinner && slot.winner === 'team_b' ? '<span class="bp-winner-mark">✓</span>' : ''}
        </button>
      </div>
      ${hasWinner ? `
        <div class="bp-result">
          ${isCorrect ? `<span class="bp-result-correct">✓ Correct! +${slot.points_value} pts</span>` : ''}
          ${myPick && !isCorrect ? '<span class="bp-result-wrong">✗ Wrong</span>' : ''}
          ${!myPick ? '<span class="bp-result-missed">— No pick</span>' : ''}
        </div>
      ` : ''}
    </div>
  `
}

// ============================================
// CHAMPION PHASE
// ============================================
function renderChampionPhase() {
  const isLocked = bpState.isLocked
  const hasPick = bpState.championPick

  return `
    <div class="bp-phase-header">
      <h3>Champion Pick</h3>
      <span class="bp-points-badge">15 pts bonus</span>
    </div>
    <div class="bp-champion-area">
      ${hasPick ? `
        <div class="bp-champion-selected">
          <div class="bp-champion-flag">${bpState.championFlag || '🏆'}</div>
          <div class="bp-champion-name">${bpState.championPick}</div>
          ${!isLocked ? `<button class="bp-btn-secondary" onclick="bpClearChampion()">Change</button>` : ''}
        </div>
      ` : `
        <div class="bp-champion-picker">
          <div style="font-size:48px;margin-bottom:12px">🏆</div>
          <h4 style="font-size:16px;font-weight:700;margin-bottom:8px">Pick Your Champion</h4>
          <p style="color:#64748b;font-size:13px;margin-bottom:16px">Who will win the World Cup?</p>
          <div class="bp-champion-list">
            ${renderChampionOptions()}
          </div>
        </div>
      `}
    </div>
  `
}

function renderChampionOptions() {
  // Get all teams from R32 slots
  const r32Slots = bpState.slots.filter(s => s.round === 'r32')
  const teams = new Set()

  r32Slots.forEach(s => {
    if (s.team_a) teams.add(JSON.stringify({ name: s.team_a, flag: s.team_a_flag }))
    if (s.team_b) teams.add(JSON.stringify({ name: s.team_b, flag: s.team_b_flag }))
  })

  const teamList = Array.from(teams).map(t => JSON.parse(t)).filter(t => t.name)

  if (!teamList.length) {
    return '<p style="color:#94a3b8">Teams will appear here once Round of 32 matchups are set.</p>'
  }

  return teamList.map(t => `
    <button class="bp-champion-option" onclick="bpPickChampion('${t.name}', '${t.flag}')">
      <span class="bp-flag">${t.flag || '🏳️'}</span>
      <span>${t.name}</span>
    </button>
  `).join('')
}

// ============================================
// PAYMENT GATE
// ============================================
function renderPaymentGate() {
  return `
    <div class="bp-payment-gate">
      <div class="bp-gate-icon">🔒</div>
      <h3>Bracket League Entry Required</h3>
      <p>The Bracket Challenge is a separate paid competition with its own prize pool and leaderboard.</p>

      <div class="bp-gate-features">
        <div class="bp-gate-feature">✓ Predict all knockout matches (Round of 32 to Final)</div>
        <div class="bp-gate-feature">✓ Separate leaderboard and prizes</div>
        <div class="bp-gate-feature">✓ Winner takes the bracket prize pool</div>
        <div class="bp-gate-feature">✓ Maximum 119 points available</div>
      </div>

      <div class="bp-gate-price">
        <span class="bp-price-label">Entry Fee</span>
        <span class="bp-price-amount">Nu. ${bpState.settings?.entry_fee || '500'}</span>
      </div>

      <button class="bp-btn-primary bp-btn-large" onclick="bpPayEntry()">
        Pay Entry Fee →
      </button>

      <p style="font-size:12px;color:#94a3b8;margin-top:12px">
        Already paid? Contact admin to confirm your payment.
      </p>
    </div>
  `
}

// ============================================
// TOO LATE
// ============================================
function renderTooLate() {
  return `
    <div class="bp-too-late">
      <div class="bp-gate-icon">⏰</div>
      <h3>Bracket Submissions Closed</h3>
      <p>The bracket locked before the first knockout match. You can still view the bracket and leaderboard.</p>
      <button class="bp-btn-primary" onclick="bpViewLeaderboard()">
        View Leaderboard →
      </button>
    </div>
  `
}

// ============================================
// INTERACTION HANDLERS
// ============================================
window.bpSwitchPhase = function(phase) {
  bpState.currentPhase = phase
  renderBracketPanel()
}

window.bpPickTeam = function(slotId, team) {
  if (bpState.isLocked) return

  const current = bpState.myPicks.get(slotId)
  if (current === team) {
    bpState.myPicks.delete(slotId)
  } else {
    bpState.myPicks.set(slotId, team)
  }

  // Re-render just the match, or full phase
  renderBracketPanel()
}

window.bpPickChampion = function(name, flag) {
  if (bpState.isLocked) return
  bpState.championPick = name
  bpState.championFlag = flag
  renderBracketPanel()
}

window.bpClearChampion = function() {
  if (bpState.isLocked) return
  bpState.championPick = null
  bpState.championFlag = null
  renderBracketPanel()
}

window.bpSaveDraft = async function() {
  try {
    const user = supabaseClient.auth.user()
    if (!user) throw new Error('Not logged in')

    // Create entry if not exists
    if (!bpState.myEntry) {
      const { data: entry, error } = await supabaseClient
        .from('bracket_entries')
        .insert({ user_id: user.id, payment_status: 'paid' })
        .select()
        .single()
      if (error) throw error
      bpState.myEntry = entry
    }

    // Save picks
    const picksArray = Array.from(bpState.myPicks.entries()).map(([slot_id, picked_team]) => ({
      entry_id: bpState.myEntry.id,
      slot_id,
      picked_team
    }))

    if (picksArray.length) {
      const { error } = await supabaseClient
        .from('bracket_picks')
        .upsert(picksArray, { onConflict: 'entry_id,slot_id' })
      if (error) throw error
    }

    // Save champion
    if (bpState.championPick) {
      const { error } = await supabaseClient
        .from('bracket_entries')
        .update({
          champion_pick: bpState.championPick,
          champion_pick_flag: bpState.championFlag
        })
        .eq('id', bpState.myEntry.id)
      if (error) throw error
    }

    bpShowToast('Draft saved!', 'success')

  } catch (err) {
    bpShowToast('Save failed: ' + err.message, 'error')
  }
}

window.bpSubmitBracket = async function() {
  // Validate
  if (!bpState.championPick) {
    bpShowToast('Please pick a champion first!', 'warning')
    bpSwitchPhase('champion')
    return
  }

  const r32Picks = bpState.slots.filter(s => s.round === 'r32').length
  const myR32Picks = Array.from(bpState.myPicks.keys()).filter(id => {
    const slot = bpState.slots.find(s => s.id === id)
    return slot?.round === 'r32'
  }).length

  if (myR32Picks < r32Picks) {
    if (!confirm(`You've only picked ${myR32Picks}/${r32Picks} Round of 32 matches. Submit anyway?`)) return
  }

  if (!confirm('Submit your bracket? You cannot edit after submission.')) return

  try {
    await bpSaveDraft()

    const { error } = await supabaseClient
      .from('bracket_entries')
      .update({ submitted_at: new Date().toISOString() })
      .eq('id', bpState.myEntry.id)

    if (error) throw error

    bpState.hasSubmitted = true
    renderBracketPanel()
    bpShowToast('Bracket submitted successfully!', 'success')

    // Refresh home card
    if (window.initBracketChallenge) window.initBracketChallenge()

  } catch (err) {
    bpShowToast('Submit failed: ' + err.message, 'error')
  }
}

window.bpPayEntry = function() {
  // Hook into your existing payment flow
  bpShowToast('Redirecting to payment...', 'info')
  // Your payment logic here
}

window.bpViewLeaderboard = function() {
  // Navigate to bracket leaderboard
  bpShowToast('Leaderboard coming soon', 'info')
}

// ============================================
// HELPERS
// ============================================
function getPoints(round) {
  const points = { r32: 2, r16: 3, qf: 5, sf: 8, final: 12, champion: 15 }
  return points[round] || 0
}

function bpShowToast(message, type) {
  // Use your existing toast or console
  console.log(`[${type}] ${message}`)

  // Simple inline toast
  const toast = document.createElement('div')
  toast.style.cssText = `
    position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
    padding:12px 24px;border-radius:12px;font-size:14px;font-weight:600;
    z-index:1000;animation:bpToastIn 0.3s ease;
    ${type === 'success' ? 'background:#22c55e;color:white;' : ''}
    ${type === 'error' ? 'background:#ef4444;color:white;' : ''}
    ${type === 'warning' ? 'background:#f59e0b;color:white;' : ''}
    ${type === 'info' ? 'background:#1e293b;color:white;' : ''}
  `
  toast.textContent = message
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 3000)
}

// Add toast animation
const toastStyle = document.createElement('style')
toastStyle.textContent = `
  @keyframes bpToastIn {
    from { opacity:0;transform:translateX(-50%) translateY(20px); }
    to { opacity:1;transform:translateX(-50%) translateY(0); }
  }
`
document.head.appendChild(toastStyle)