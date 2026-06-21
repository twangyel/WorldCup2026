// ============================================
// BRACKET DATA LAYER
// All Supabase calls for Bracket League
// Uses global supabaseClient from auth.js
// Uses global getUser() from auth.js for auth
// ============================================

// ============================================
// SETTINGS
// ============================================

async function getBracketSettings() {
  const { data, error } = await supabaseClient
    .from('bracket_settings')
    .select('*')
    .single();
  if (error) throw error;
  return data;
}

async function updateBracketStatus(status) {
  const settings = await getBracketSettings();
  const updates = { status };
  if (status === 'open') updates.opened_at = new Date().toISOString();
  if (status === 'locked') updates.locked_at = new Date().toISOString();
  if (status === 'completed') updates.completed_at = new Date().toISOString();

  const { data, error } = await supabaseClient
    .from('bracket_settings')
    .update(updates)
    .eq('id', settings.id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ============================================
// SLOTS / MATCHES
// ============================================

async function getBracketSlots() {
  const { data, error } = await supabaseClient
    .from('bracket_slots')
    .select('*')
    .order('round', { ascending: true })
    .order('match_number', { ascending: true });
  if (error) throw error;
  return data || [];
}

async function getBracketSlotsByRound(round) {
  const { data, error } = await supabaseClient
    .from('bracket_slots')
    .select('*')
    .eq('round', round)
    .order('match_number', { ascending: true });
  if (error) throw error;
  return data || [];
}

async function updateSlotTeam(slotId, teamField, teamName, teamFlag) {
  const { data, error } = await supabaseClient
    .from('bracket_slots')
    .update({ 
      [teamField]: teamName,
      [teamField + '_flag']: teamFlag,
      is_placeholder: false
    })
    .eq('id', slotId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function setSlotWinner(slotId, winner) {
  // Prefer the RPC because it triggers DB-side auto-advancement and score refresh.
  // Fallback keeps the admin usable if the SQL migration has not been run yet.
  try {
    const { data, error } = await supabaseClient.rpc('set_bracket_slot_winner', {
      p_slot_id: slotId,
      p_winner: winner
    });
    if (!error) return Array.isArray(data) ? data[0] : data;
    console.warn('[Bracket] set_bracket_slot_winner RPC failed, falling back:', error);
  } catch (rpcErr) {
    console.warn('[Bracket] set_bracket_slot_winner RPC unavailable, falling back:', rpcErr);
  }

  const { data, error } = await supabaseClient
    .from('bracket_slots')
    .update({ winner })
    .eq('id', slotId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function configureBracketAdvancementData() {
  const { data, error } = await supabaseClient.rpc('configure_bracket_advancement');
  if (error) throw error;
  return data;
}

// ============================================
// ENTRIES (User registration)
// ============================================

async function getMyBracketEntry() {
  // Use getUser() from auth.js which returns currentUser
  const user = typeof getUser === 'function' ? getUser() : null;
  if (!user) return null;

  const { data, error } = await supabaseClient
    .from('bracket_entries')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle();  // Use maybeSingle instead of single to avoid error when no row
  if (error) throw error;
  return data;
}

async function createBracketEntry() {
  const user = typeof getUser === 'function' ? getUser() : null;
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabaseClient
    .from('bracket_entries')
    .insert({ user_id: user.id })
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function submitBracketPaymentProofData(proofUrl, proofPath, note = '') {
  const { data, error } = await supabaseClient.rpc('submit_bracket_payment_proof', {
    p_proof_url: proofUrl,
    p_proof_path: proofPath,
    p_payment_note: note
  });
  if (error) throw error;
  return Array.isArray(data) ? data[0] : data;
}

async function uploadBracketPaymentProofData(file, bucket = 'bracket-payment-proofs') {
  const user = typeof getUser === 'function' ? getUser() : null;
  if (!user) throw new Error('Not authenticated');
  if (!file) throw new Error('No file selected');

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
  const path = `${user.id}/${Date.now()}-bracket-payment.${ext}`;

  const { error } = await supabaseClient.storage.from(bucket).upload(path, file, {
    cacheControl: '3600',
    upsert: true,
    contentType: file.type
  });
  if (error) throw error;

  const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
  return { path, publicUrl: data?.publicUrl || '' };
}

async function confirmBracketPayment(userId) {
  const { data, error } = await supabaseClient
    .from('bracket_entries')
    .update({ 
      payment_status: 'paid',
      paid_at: new Date().toISOString()
    })
    .eq('user_id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function submitBracket(entryId, championPick, championFlag) {
  const { data, error } = await supabaseClient
    .from('bracket_entries')
    .update({ 
      champion_pick: championPick,
      champion_pick_flag: championFlag,
      submitted_at: new Date().toISOString()
    })
    .eq('id', entryId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ============================================
// PICKS
// ============================================

async function getMyPicks(entryId) {
  const { data, error } = await supabaseClient
    .from('bracket_picks')
    .select('*')
    .eq('entry_id', entryId);
  if (error) throw error;
  return data || [];
}

async function savePick(entryId, slotId, pickedTeam) {
  const { data, error } = await supabaseClient
    .from('bracket_picks')
    .upsert({
      entry_id: entryId,
      slot_id: slotId,
      picked_team: pickedTeam
    }, { onConflict: 'entry_id,slot_id' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function saveAllPicks(entryId, picksArray) {
  const { data, error } = await supabaseClient
    .from('bracket_picks')
    .upsert(
      picksArray.map(p => ({
        entry_id: entryId,
        slot_id: p.slot_id,
        picked_team: p.picked_team
      })),
      { onConflict: 'entry_id,slot_id' }
    );
  if (error) throw error;
  return data;
}

// ============================================
// LEADERBOARD
// ============================================

async function getBracketLeaderboard() {
  const { data, error } = await supabaseClient
    .from('bracket_leaderboard')
    .select('*')
    .order('total_points', { ascending: false });
  if (error) throw error;
  return data || [];
}

// ============================================
// ADMIN: RECALCULATE SCORES
// ============================================

async function recalculateScores() {
  const { data, error } = await supabaseClient
    .rpc('recalculate_bracket_scores');
  if (error) throw error;
  return data;
}

// ============================================
// SEED DATA: World Cup 2026 Round of 32
// Call this once from admin panel
// ============================================

async function seedBracketSlots() {
  const slots = [
    // ROUND OF 32 (16 matches)
    { round: 'r32', match_number: 1,  slot_label: 'R32-M1: 1st A vs 3rd B/C/D',     points_value: 2 },
    { round: 'r32', match_number: 2,  slot_label: 'R32-M2: 2nd C vs 2nd D',          points_value: 2 },
    { round: 'r32', match_number: 3,  slot_label: 'R32-M3: 1st E vs 3rd A/B/C/F',    points_value: 2 },
    { round: 'r32', match_number: 4,  slot_label: 'R32-M4: 2nd G vs 2nd H',          points_value: 2 },
    { round: 'r32', match_number: 5,  slot_label: 'R32-M5: 1st B vs 3rd A/D/E/F',    points_value: 2 },
    { round: 'r32', match_number: 6,  slot_label: 'R32-M6: 2nd A vs 2nd B',          points_value: 2 },
    { round: 'r32', match_number: 7,  slot_label: 'R32-M7: 1st D vs 3rd B/E/F/G',    points_value: 2 },
    { round: 'r32', match_number: 8,  slot_label: 'R32-M8: 2nd E vs 2nd F',          points_value: 2 },
    { round: 'r32', match_number: 9,  slot_label: 'R32-M9: 1st C vs 3rd D/E/F/G',    points_value: 2 },
    { round: 'r32', match_number: 10, slot_label: 'R32-M10: 2nd I vs 2nd J',         points_value: 2 },
    { round: 'r32', match_number: 11, slot_label: 'R32-M11: 1st G vs 3rd A/B/C/H',   points_value: 2 },
    { round: 'r32', match_number: 12, slot_label: 'R32-M12: 2nd K vs 2nd L',         points_value: 2 },
    { round: 'r32', match_number: 13, slot_label: 'R32-M13: 1st F vs 3rd C/D/E/H',   points_value: 2 },
    { round: 'r32', match_number: 14, slot_label: 'R32-M14: 2nd M vs 2nd N',         points_value: 2 },
    { round: 'r32', match_number: 15, slot_label: 'R32-M15: 1st H vs 3rd E/F/G/I',   points_value: 2 },
    { round: 'r32', match_number: 16, slot_label: 'R32-M16: 2nd O vs 2nd P',         points_value: 2 },

    // ROUND OF 16 (8 matches)
    { round: 'r16', match_number: 1,  slot_label: 'R16-M1: W R32-M1 vs W R32-M2',   points_value: 3 },
    { round: 'r16', match_number: 2,  slot_label: 'R16-M2: W R32-M3 vs W R32-M4',   points_value: 3 },
    { round: 'r16', match_number: 3,  slot_label: 'R16-M3: W R32-M5 vs W R32-M6',   points_value: 3 },
    { round: 'r16', match_number: 4,  slot_label: 'R16-M4: W R32-M7 vs W R32-M8',   points_value: 3 },
    { round: 'r16', match_number: 5,  slot_label: 'R16-M5: W R32-M9 vs W R32-M10',  points_value: 3 },
    { round: 'r16', match_number: 6,  slot_label: 'R16-M6: W R32-M11 vs W R32-M12', points_value: 3 },
    { round: 'r16', match_number: 7,  slot_label: 'R16-M7: W R32-M13 vs W R32-M14', points_value: 3 },
    { round: 'r16', match_number: 8,  slot_label: 'R16-M8: W R32-M15 vs W R32-M16', points_value: 3 },

    // QUARTER-FINALS (4 matches)
    { round: 'qf',  match_number: 1,  slot_label: 'QF-M1: W R16-M1 vs W R16-M2',    points_value: 5 },
    { round: 'qf',  match_number: 2,  slot_label: 'QF-M2: W R16-M3 vs W R16-M4',    points_value: 5 },
    { round: 'qf',  match_number: 3,  slot_label: 'QF-M3: W R16-M5 vs W R16-M6',    points_value: 5 },
    { round: 'qf',  match_number: 4,  slot_label: 'QF-M4: W R16-M7 vs W R16-M8',    points_value: 5 },

    // SEMI-FINALS (2 matches)
    { round: 'sf',  match_number: 1,  slot_label: 'SF-M1: W QF-M1 vs W QF-M2',      points_value: 8 },
    { round: 'sf',  match_number: 2,  slot_label: 'SF-M2: W QF-M3 vs W QF-M4',      points_value: 8 },

    // FINAL (1 match)
    { round: 'final', match_number: 1, slot_label: 'Final: W SF-M1 vs W SF-M2',      points_value: 12 },

    // CHAMPION (not a match, just the pick)
    { round: 'champion', match_number: 1, slot_label: 'Champion',                    points_value: 15 }
  ];

  const { data, error } = await supabaseClient
    .from('bracket_slots')
    .insert(slots)
    .select();
  if (error) throw error;

  // Wire R32 → R16 → QF → SF → Final → Champion automatically after seeding.
  try {
    await configureBracketAdvancementData();
  } catch (err) {
    console.warn('[Bracket] Auto-advancement configuration skipped:', err);
  }

  return data;
}