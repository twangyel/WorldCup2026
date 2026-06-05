    const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co'
    const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY'
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    
    const pendingScores = {}

    async function init() {
      const { data: { session } } = await client.auth.getSession()
      if (!session) {
        window.location.href = 'index.html'
        return
      }
      
      const { data: profile } = await client
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()
      
      document.getElementById('loading').classList.add('hidden')
      
      if (profile?.role === 'admin') {
        document.getElementById('admin-content').classList.remove('hidden')
        loadFixtures()
      } else {
        document.getElementById('access-denied').classList.remove('hidden')
      }
    }

    async function loadFixtures() {
      const { data } = await client.from('fixtures').select('*').order('kickoff')
      const container = document.getElementById('admin-fixtures')
      
      if (!data?.length) {
        container.innerHTML = '<p class="text-gray-500 py-4">No fixtures yet.</p>'
        return
      }
      
      container.innerHTML = data.map(f => `
        <div class="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4">
          <div class="flex-1">
            <div class="font-bold text-lg">${f.home_team} vs ${f.away_team}</div>
            <div class="text-sm text-gray-500">${f.stage} • ${new Date(f.kickoff).toLocaleString()}</div>
          </div>
          <div class="flex items-center gap-2">
            <input type="number" min="0" placeholder="H" 
              class="w-16 text-center border border-gray-300 rounded-lg py-2 font-bold" 
              value="${f.home_score !== null ? f.home_score : ''}" 
              onchange="updateScore('${f.id}', 'home', this.value)">
            <span class="text-gray-400 font-bold">-</span>
            <input type="number" min="0" placeholder="A" 
              class="w-16 text-center border border-gray-300 rounded-lg py-2 font-bold" 
              value="${f.away_score !== null ? f.away_score : ''}" 
              onchange="updateScore('${f.id}', 'away', this.value)">
          </div>
          <button onclick="saveScore('${f.id}')" 
            class="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 active:scale-95 transition">
            Save
          </button>
        </div>
      `).join('')
    }

    function updateScore(id, side, val) {
      if (!pendingScores[id]) pendingScores[id] = {}
      pendingScores[id][side] = val === '' ? null : parseInt(val)
    }

    async function saveScore(id) {
      const s = pendingScores[id] || {}
      const updates = {}
      if (s.home !== undefined) updates.home_score = s.home
      if (s.away !== undefined) updates.away_score = s.away
      
      if (Object.keys(updates).length === 0) return
      
      const { error } = await client.from('fixtures').update(updates).eq('id', id)
      
      if (error) {
        alert('Error: ' + error.message)
      } else {
        alert('✅ Score saved! Points auto-calculated.')
        pendingScores[id] = {}
        loadFixtures()
      }
    }

    document.getElementById('add-fixture-form').addEventListener('submit', async (e) => {
      e.preventDefault()
      const { error } = await client.from('fixtures').insert({
        home_team: document.getElementById('home-team').value,
        away_team: document.getElementById('away-team').value,
        kickoff: new Date(document.getElementById('kickoff').value).toISOString(),
        stage: document.getElementById('stage').value
      })
      
      if (error) {
        alert('Error: ' + error.message)
      } else {
        alert('✅ Fixture added!')
        e.target.reset()
        loadFixtures()
      }
    })

    init()