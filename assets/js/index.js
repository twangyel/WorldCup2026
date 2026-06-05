
    // =====================
    // CONFIG
    // =====================
    const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co'
    const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY'
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    
    let currentUser = null
    let currentProfile = null
    let fixtures = []
    let predictions = []
    const pendingPredictions = {}

    // =====================
    // AUTH
    // =====================
    async function initAuth() {
      const { data: { session } } = await supabaseClient.auth.getSession()
      if (session) {
        currentUser = session.user
        await loadProfile()
        showApp()
      } else {
        showAuth()
      }
      
      supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
          currentUser = session.user
          loadProfile().then(() => showApp())
        }
        if (event === 'SIGNED_OUT') {
          currentUser = null
          showAuth()
        }
      })
    }

    document.getElementById('auth-form').addEventListener('submit', async (e) => {
      e.preventDefault()
      const email = document.getElementById('email').value
      const msg = document.getElementById('auth-message')
      
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: true }
      })
      
      if (error) {
        msg.textContent = 'Error: ' + error.message
        msg.className = 'mt-4 text-sm text-center text-red-600'
      } else {
        msg.textContent = '✅ Magic link sent! Check your email.'
        msg.className = 'mt-4 text-sm text-center text-emerald-600'
      }
      msg.classList.remove('hidden')
    })

    async function logout() {
      await supabaseClient.auth.signOut()
    }

    // =====================
    // PROFILE
    // =====================
    async function loadProfile() {
      const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .single()
      
      if (data) {
        currentProfile = data
        document.getElementById('user-name').textContent = data.name || 'Player'
        document.getElementById('profile-name').value = data.name || ''
        document.getElementById('profile-dept').value = data.department || ''
        document.getElementById('profile-phone').value = data.phone || ''
      }
    }

    async function saveProfile() {
      const updates = {
        name: document.getElementById('profile-name').value,
        department: document.getElementById('profile-dept').value,
        phone: document.getElementById('profile-phone').value
      }
      
      const { error } = await supabaseClient
        .from('profiles')
        .update(updates)
        .eq('id', currentUser.id)
      
      const msg = document.getElementById('profile-message')
      if (error) {
        msg.textContent = 'Error saving profile'
        msg.className = 'text-sm text-center text-red-600 mt-2'
      } else {
        msg.textContent = 'Profile saved!'
        msg.className = 'text-sm text-center text-emerald-600 mt-2 saved-indicator'
        currentProfile = { ...currentProfile, ...updates }
        document.getElementById('user-name').textContent = updates.name || 'Player'
      }
      msg.classList.remove('hidden')
    }

    // =====================
    // FIXTURES & PREDICTIONS
    // =====================
    async function loadFixtures() {
      const { data: fixturesData } = await supabaseClient
        .from('fixtures')
        .select('*')
        .order('kickoff', { ascending: true })
      
      const { data: predictionsData } = await supabaseClient
        .from('predictions')
        .select('*')
        .eq('user_id', currentUser.id)
      
      fixtures = fixturesData || []
      predictions = predictionsData || []
      
      renderFixtures()
      updatePredictionCount()
    }

    function getPrediction(fixtureId) {
      return predictions.find(p => p.fixture_id === fixtureId)
    }

    function isLocked(kickoff) {
      return new Date() >= new Date(kickoff)
    }

    function renderFixtures() {
      const container = document.getElementById('fixtures-list')
      if (!fixtures.length) {
        container.innerHTML = '<div class="text-center py-12 text-gray-400">No fixtures scheduled yet.</div>'
        return
      }
      
      container.innerHTML = fixtures.map(fixture => {
        const pred = getPrediction(fixture.id)
        const locked = isLocked(fixture.kickoff)
        const hasScore = fixture.home_score !== null && fixture.away_score !== null
        
        const homePred = pred ? pred.home_prediction : ''
        const awayPred = pred ? pred.away_prediction : ''
        
        let statusBadge = ''
        if (hasScore) {
          statusBadge = `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">FT ${fixture.home_score}-${fixture.away_score}</span>`
        } else if (locked) {
          statusBadge = `<span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">🔒 Locked</span>`
        } else {
          statusBadge = `<span class="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">Open</span>`
        }
        
        const pointsBadge = pred && pred.points_awarded > 0 
          ? `<span class="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md z-10">+${pred.points_awarded}</span>` 
          : ''
        
        return `
        <div class="fixture-card bg-white rounded-xl shadow-sm p-4 relative" data-fixture="${fixture.id}">
          ${pointsBadge}
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">${fixture.stage}</span>
            ${statusBadge}
          </div>
          
          <div class="flex items-center gap-3">
            <div class="flex-1 text-center min-w-0">
              <div class="font-bold text-lg truncate">${fixture.home_team}</div>
              <div class="text-xs text-gray-500">Home</div>
            </div>
            
            <div class="flex items-center gap-2 shrink-0">
              ${locked ? `
                <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xl text-gray-700">${homePred !== '' ? homePred : '-'}</div>
                <span class="text-gray-400 font-bold">:</span>
                <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-xl text-gray-700">${awayPred !== '' ? awayPred : '-'}</div>
              ` : `
                <input type="number" min="0" inputmode="numeric" pattern="[0-9]*"
                  class="w-12 h-12 text-center bg-gray-50 border-2 border-gray-200 rounded-lg font-bold text-xl focus:border-emerald-500 focus:bg-white outline-none transition"
                  value="${homePred}" onchange="updatePrediction('${fixture.id}', 'home', this.value)">
                <span class="text-gray-400 font-bold">:</span>
                <input type="number" min="0" inputmode="numeric" pattern="[0-9]*"
                  class="w-12 h-12 text-center bg-gray-50 border-2 border-gray-200 rounded-lg font-bold text-xl focus:border-emerald-500 focus:bg-white outline-none transition"
                  value="${awayPred}" onchange="updatePrediction('${fixture.id}', 'away', this.value)">
              `}
            </div>
            
            <div class="flex-1 text-center min-w-0">
              <div class="font-bold text-lg truncate">${fixture.away_team}</div>
              <div class="text-xs text-gray-500">Away</div>
            </div>
          </div>
          
          <div class="mt-3 text-center text-xs text-gray-400 font-medium">
            ${new Date(fixture.kickoff).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </div>
          
          ${!locked ? `
            <button onclick="savePrediction('${fixture.id}')" 
              class="mt-3 w-full bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-800 active:scale-95 transition save-btn-${fixture.id}">
              Save Prediction
            </button>
          ` : ''}
          
          <div class="saved-msg-${fixture.id} text-center text-xs text-emerald-600 mt-2 h-4"></div>
        </div>
        `
      }).join('')
    }

    function updatePrediction(fixtureId, side, value) {
      if (!pendingPredictions[fixtureId]) pendingPredictions[fixtureId] = {}
      pendingPredictions[fixtureId][side] = value
    }

    async function savePrediction(fixtureId) {
      const card = document.querySelector(`[data-fixture="${fixtureId}"]`)
      const inputs = card.querySelectorAll('input')
      const pending = pendingPredictions[fixtureId] || {}
      
      // Fallback to input values if not in pending
      const homeVal = pending.home !== undefined ? pending.home : inputs[0]?.value
      const awayVal = pending.away !== undefined ? pending.away : inputs[1]?.value
      
      if (homeVal === '' || homeVal === undefined || awayVal === '' || awayVal === undefined) {
        const msgEl = document.querySelector(`.saved-msg-${fixtureId}`)
        msgEl.textContent = 'Enter both scores'
        msgEl.className = `saved-msg-${fixtureId} text-center text-xs text-red-600 mt-2 h-4`
        return
      }
      
      const home = parseInt(homeVal)
      const away = parseInt(awayVal)
      
      const existing = getPrediction(fixtureId)
      let error
      
      if (existing) {
        const { error: e } = await supabaseClient
          .from('predictions')
          .update({ home_prediction: home, away_prediction: away })
          .eq('id', existing.id)
        error = e
      } else {
        const { error: e } = await supabaseClient
          .from('predictions')
          .insert({
            user_id: currentUser.id,
            fixture_id: fixtureId,
            home_prediction: home,
            away_prediction: away
          })
        error = e
      }
      
      const msgEl = document.querySelector(`.saved-msg-${fixtureId}`)
      if (error) {
        msgEl.textContent = 'Error: ' + error.message
        msgEl.className = `saved-msg-${fixtureId} text-center text-xs text-red-600 mt-2 h-4`
      } else {
        msgEl.textContent = 'Saved!'
        msgEl.className = `saved-msg-${fixtureId} text-center text-xs text-emerald-600 mt-2 h-4 saved-indicator`
        if (existing) {
          existing.home_prediction = home
          existing.away_prediction = away
        } else {
          predictions.push({
            user_id: currentUser.id,
            fixture_id: fixtureId,
            home_prediction: home,
            away_prediction: away,
            points_awarded: 0
          })
        }
        updatePredictionCount()
      }
    }

    function updatePredictionCount() {
      const count = predictions.length
      const total = fixtures.length
      document.getElementById('prediction-count').textContent = `${count}/${total}`
    }

    // =====================
    // LEADERBOARD
    // =====================
    async function loadLeaderboard() {
      const { data: profiles } = await supabaseClient.from('profiles').select('*')
      const { data: allPredictions } = await supabaseClient.from('predictions').select('*')
      
      if (!profiles) return
      
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
      
      const container = document.getElementById('leaderboard-list')
      container.innerHTML = stats.map((stat, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `<span class="w-6 text-center inline-block text-gray-400 font-bold">${index + 1}</span>`
        
        return `
        <div class="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">
          <div class="text-2xl shrink-0">${medal}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="font-bold text-gray-900 truncate">${stat.name || 'Anonymous'}</span>
              ${stat.department ? `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full truncate">${stat.department}</span>` : ''}
            </div>
            <div class="text-xs text-gray-500 mt-0.5">
              ${stat.exact} exact • ${stat.gd} GD • ${stat.result} result
            </div>
          </div>
          <div class="text-right shrink-0">
            <div class="text-2xl font-bold text-emerald-600">${stat.points}</div>
            <div class="text-xs text-gray-400">pts</div>
          </div>
        </div>
        `
      }).join('')
    }

    // =====================
    // UI
    // =====================
    function showAuth() {
      document.getElementById('auth-screen').classList.remove('hidden')
      document.getElementById('app-shell').classList.add('hidden')
    }

    function showApp() {
      document.getElementById('auth-screen').classList.add('hidden')
      document.getElementById('app-shell').classList.remove('hidden')
      loadFixtures()
      loadLeaderboard()
    }

    function switchTab(tab) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'))
      document.getElementById(`tab-${tab}`).classList.remove('hidden')
      
      document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tab) {
          btn.classList.remove('tab-inactive')
          btn.classList.add('tab-active')
        } else {
          btn.classList.remove('tab-active')
          btn.classList.add('tab-inactive')
        }
      })
      
      if (tab === 'leaderboard') loadLeaderboard()
      if (tab === 'predictions') loadFixtures()
    }

    // Start
    initAuth()