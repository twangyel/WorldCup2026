// backfill-fd-ids.js — one-time generator
// Usage:
//   $env:FD_TOKEN = "your_token_here"
//   node backfill-fd-ids.js
// Output: writes backfill.sql in the current directory (UTF-8)

const fs = require('fs')

const FD_TOKEN = process.env.FD_TOKEN
if (!FD_TOKEN) {
  console.error('ERROR: Set FD_TOKEN env var first.')
  console.error('  PowerShell: $env:FD_TOKEN = ""')
  console.error('  Then:       node backfill-fd-ids.js')
  process.exit(1)
}

// football-data.org name → your DB name. Extend if backfill leaves rows unmapped.
const FD_TO_DB = {
  'United States': 'USA',
  'Bosnia-Herzegovina': 'Bosnia and Herzegovina',
  'Curaçao': 'Curacao',
  'Cape Verde Islands': 'Cape Verde',
  'Congo DR': 'DR Congo',
}

const out = []
const log = (s = '') => out.push(s)

async function main() {
  const res = await fetch(
    'https://api.football-data.org/v4/competitions/WC/matches',
    { headers: { 'X-Auth-Token': FD_TOKEN } }
  )
  if (!res.ok) {
    console.error(`API request failed: ${res.status} ${res.statusText}`)
    process.exit(1)
  }
  const data = await res.json()

  // Skip knockout placeholders (teams still TBD)
  const matches = data.matches.filter(m => m.homeTeam.name && m.awayTeam.name)

  const esc = s => s.replace(/'/g, "''")
  const rows = matches.map(m => {
    const home = FD_TO_DB[m.homeTeam.name] || m.homeTeam.name
    const away = FD_TO_DB[m.awayTeam.name] || m.awayTeam.name
    return `  (${m.id}, '${esc(home)}', '${esc(away)}', '${m.utcDate}'::timestamptz)`
  })

  log(`-- ${rows.length} fixtures to map`)
  log(`-- Generated ${new Date().toISOString()}`)
  log()
  log('WITH fd_map(fd_id, home, away, kick) AS (VALUES')
  log(rows.join(',\n'))
  log(')')
  log('UPDATE fixtures f')
  log('SET fd_match_id = m.fd_id')
  log('FROM fd_map m')
  log('WHERE f.home_team = m.home')
  log('  AND f.away_team = m.away')
  log('  AND f.kickoff   = m.kick;')

  fs.writeFileSync('backfill.sql', out.join('\n'), 'utf8')
  console.error(`Wrote ${out.length} lines to backfill.sql (${rows.length} fixtures)`)
}

main().catch(e => {
  console.error('Script failed:', e)
  process.exit(1)
})