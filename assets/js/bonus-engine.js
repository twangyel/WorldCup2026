// ============================================================
// BONUS CALCULATION ENGINE v1.1
// Layer 1: Streak Bonus | Layer 2: Combo Bonus | Layer 3: Stage Multiplier
// Integrates with existing calculatePoints(predHome, predAway, actualHome, actualAway)
// ============================================================

// ============== KNOCKOUT-AWARE BASE-POINTS HELPERS ==============
// Loaded once per scoring run from system_settings.knockout_scoring_enabled.
// When true AND the fixture is a knockout stage, base points are computed by
// KnockoutScoring.computeBasePoints (which understands penalty_winner and
// advance_pick). Otherwise, standard 5/3/2/0 logic runs inline below.
//
// Self-sufficient: does NOT depend on the calculatePoints() function in
// admin.html. Works on any page (admin or player-facing).
//
// Requires window.KnockoutScoring to be loaded BEFORE this file (only for
// the knockout-flag-on path):
//   <script src="assets/js/knockout-scoring.js"></script>
//   <script src="assets/js/bonus-engine.js"></script>
// If KnockoutScoring is missing, _computeBase still works — it falls back
// to standard 5/3/2/0 scoring regardless of stage.

/**
 * Load the knockout-scoring feature flag from system_settings.
 * Returns false on any error or missing row (fail-safe to legacy scoring).
 */
async function _loadKnockoutFlag() {
  try {
    const { data, error } = await supabaseClient
      .from('system_settings')
      .select('knockout_scoring_enabled')
      .eq('id', 1)
      .single();
    if (error) {
      console.warn('[bonus-engine] knockout flag load failed, defaulting OFF:', error);
      return false;
    }
    return Boolean(data && data.knockout_scoring_enabled);
  } catch (err) {
    console.warn('[bonus-engine] knockout flag load threw, defaulting OFF:', err);
    return false;
  }
}

/**
 * Compute base points for a prediction against a fixture.
 *
 * Self-sufficient: does NOT depend on calculatePoints (which lives only on
 * admin.html). The standard 5/3/2/0 logic is inlined below, mirroring
 * calculatePoints in admin.html exactly. If you ever change calculatePoints,
 * update the inline logic here too (or vice versa).
 *
 * Branches:
 *   - Flag ON AND fixture is a knockout stage AND KnockoutScoring available:
 *       → delegates to KnockoutScoring.computeBasePoints, which handles
 *         penalty_winner and advance_pick.
 *   - Otherwise:
 *       → standard 5/3/2/0 logic inlined below (exact / GD / winner / miss).
 *
 * @param {Object} prediction - { home_prediction, away_prediction, advance_pick? }
 *                              Can be a synthetic object (e.g. for Double Pick alt).
 * @param {Object} fixture    - The full fixture row (must include stage,
 *                              home_score, away_score, penalty_winner).
 * @param {Boolean} knockoutEnabled - The cached flag value for this scoring run.
 * @returns {Number} base points: 5, 3, 2, or 0
 */
function _computeBase(prediction, fixture, knockoutEnabled) {
  // Knockout-aware path: only when flag is ON, fixture is a knockout stage,
  // and KnockoutScoring is loaded. Handles pen winner and advance_pick.
  if (knockoutEnabled &&
      typeof window !== 'undefined' &&
      window.KnockoutScoring &&
      window.KnockoutScoring.isKnockoutStage(fixture.stage)) {
    return window.KnockoutScoring.computeBasePoints(prediction, fixture);
  }

  // Standard path: 5/3/2/0 logic — mirrors calculatePoints() in admin.html.
  // Inlined here so bonus-engine.js works on any page (admin or player-facing).
  const ph = Number(prediction.home_prediction);
  const pa = Number(prediction.away_prediction);
  const ah = Number(fixture.home_score);
  const aa = Number(fixture.away_score);

  if (ph === ah && pa === aa) return 5;                       // Exact score
  const predDiff = ph - pa;
  const actualDiff = ah - aa;
  if (predDiff === actualDiff) return 3;                       // Correct GD
  if (Math.sign(predDiff) === Math.sign(actualDiff)) return 2; // Correct winner
  return 0;                                                    // Miss
}

// ============== CONFIGURATION ==============
const BONUS_CONFIG = {
  // --- Layer 1: Streak Bonus ---
  streak: {
    enabled: true,
    // Consecutive matches with ANY points (>0)
    // Trimmed to 3 tiers: Hot Streak (3), On Fire (5), Legendary (8).
    // Dropped the old 7-match "Unstoppable" (redundant with 5/8) and the
    // 10-match Legendary (almost never triggers in a 64-match tournament).
    tiers: [
      { minStreak: 3, bonus: 2,  label: 'Hot Streak', emoji: '🔥' },
      { minStreak: 5, bonus: 5,  label: 'On Fire',    emoji: '🔥🔥' },
      { minStreak: 8, bonus: 10, label: 'Legendary',  emoji: '👑' }
    ],
    // Cap at highest tier reached (don't stack tiers)
    // If true, applies the highest tier bonus on EVERY match once reached
    // If false, only applies when the tier threshold is first crossed
    stackTiers: false
  },

  // --- Layer 2: Combo Bonus ---
  // Only Exact Combo is active. GD Combo and Perfect Day are intentionally
  // disabled — GD Combo overlapped with streak rewards (just noise), and
  // Perfect Day requires all-exact-on-one-day which essentially never fires.
  combo: {
    enabled: true,
    exactCombo: {
      enabled: true,
      // 2 exact scores in a row
      trigger: 2,
      bonus: 3,
      label: 'Exact Combo',
      emoji: '⚡'
    },
    gdCombo: {
      enabled: false, // DROPPED — too similar to streak bonus
      trigger: 2,
      bonus: 2,
      label: 'GD Combo',
      emoji: '🎯'
    },
    perfectDay: {
      enabled: false, // DROPPED — virtually unattainable in practice
      bonus: 5,
      label: 'Perfect Day',
      emoji: '✨'
    },
    upsetCall: {
      enabled: false, // Requires FIFA ranking data — enable if you have it
      bonus: 1,
      label: 'Upset Call',
      emoji: '😱'
    }
  },

  // --- Layer 3: Stage Multiplier ---
  stageMultiplier: {
    enabled: true,
    // Applied to BASE points only (before bonuses)
    // Bonuses are added AFTER multiplier
    multipliers: {
      'Group A': 1, 'Group B': 1, 'Group C': 1, 'Group D': 1,
      'Group E': 1, 'Group F': 1, 'Group G': 1, 'Group H': 1,
      'Group I': 1, 'Group J': 1, 'Group K': 1, 'Group L': 1,
      'Round of 32': 1.5,
      'Round of 16': 1.5,
      'Quarter Final': 1.5,
      'Quarter-Final': 1.5,
      'Semi Final': 2,
      'Semi-Final': 2,
      'Final': 2.5,
      'Third Place': 1.5,
      '3rd Place': 1.5
    },
    roundToNearest: 1  // 1 = round to nearest whole point. All fractional values are X.5, so Math.round always rounds UP (7.5→8, 12.5→13). Set to 0 to preserve half-points.
  }
};

// ============== DATA STRUCTURES ==============

/**
 * Per-match result with all bonus metadata
 * This is what gets stored/returned after each match resolves
 */
function createMatchResult({
  fixtureId,
  userId,
  stage,
  kickoff,
  matchdayKey, // e.g., "2026-06-15" for grouping matchdays
  predHome,
  predAway,
  actualHome,
  actualAway,
  basePoints,  // From calculatePoints() — ALWAYS raw/undoubled
  doublePointsApplied = false,  // Double Points card: 2x is applied at the multiplied_base layer
  timestamp = new Date().toISOString()
}) {
  // Input validation
  if (typeof basePoints !== 'number' || isNaN(basePoints)) {
    throw new Error(`Invalid basePoints: ${basePoints}. Must be a number.`);
  }
  if (!fixtureId || !userId) {
    throw new Error('fixtureId and userId are required');
  }

  return {
    fixture_id: fixtureId,
    user_id: userId,
    stage,
    kickoff,
    matchday_key: matchdayKey,
    prediction: { home: predHome, away: predAway },
    result: { home: actualHome, away: actualAway },
    base_points: basePoints,                       // raw, never doubled
    double_points_applied: !!doublePointsApplied,  // carried into applyStageMultiplier
    stage_multiplier: 1,
    multiplied_base: basePoints,
    streak_bonus: 0,
    combo_bonus: 0,
    total_bonus: 0,
    final_points: basePoints,
    streak_count: 0,
    streak_tier: null,
    combos_earned: [],
    bonus_breakdown: [],
    timestamp
  };
}

// ============== LAYER 1: STREAK BONUS ==============

/**
 * Calculate current streak for a user
 * Streak = consecutive finished matches where points > 0 (any tier)
 * Resets to 0 on any 0-point match
 * 
 * @param {Array} userHistory - Array of match results, sorted by kickoff ASC
 * @param {Object} currentMatch - The match being evaluated (optional)
 * @returns {Object} { currentStreak, tier, bonus }
 */
function calculateStreak(userHistory, currentMatch = null) {
  if (!BONUS_CONFIG.streak.enabled) {
    return { currentStreak: 0, tier: null, bonus: 0, label: '', emoji: '' };
  }

  // Build full history including current match if provided
  const allMatches = currentMatch ? [...userHistory, currentMatch] : [...userHistory];

  // Sort by kickoff to ensure chronological order (deterministic for simultaneous kickoffs — Bug 7)
  const sorted = allMatches.sort((a, b) => {
    const dt = new Date(a.kickoff) - new Date(b.kickoff);
    return dt !== 0 ? dt : String(a.fixture_id).localeCompare(String(b.fixture_id));
  });

  // Count consecutive matches with base_points > 0 from the END
  let currentStreak = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i].base_points > 0) {
      currentStreak++;
    } else {
      break; // Streak broken
    }
  }

  // Find highest applicable tier
  let tier = null;
  let bonus = 0;

  for (const t of BONUS_CONFIG.streak.tiers) {
    if (currentStreak >= t.minStreak) {
      tier = t;
      bonus = t.bonus;
    }
  }

  return {
    currentStreak,
    tier,
    bonus,
    label: tier ? tier.label : '',
    emoji: tier ? tier.emoji : ''
  };
}

/**
 * Apply streak bonus to a new match result
 * The bonus is applied ONCE when the streak threshold is crossed
 * (applied to the match that completes the streak)
 * 
 * BUG FIXES:
 * - Current match is now included in streak count
 * - Bonus only awarded if current match has base_points > 0
 * - Bonus only awarded on the match that FIRST reaches the tier threshold
 */
function applyStreakBonus(matchResult, userHistory) {
  // FIX: Streak bonus should not apply to 0-point matches
  if (matchResult.base_points === 0) {
    matchResult.streak_count = 0;
    return matchResult;
  }

  // FIX: Include current match in streak calculation
  const streak = calculateStreak(userHistory, matchResult);

  matchResult.streak_count = streak.currentStreak;
  matchResult.streak_tier = streak.tier ? {
    label: streak.tier.label,
    emoji: streak.tier.emoji,
    min_streak: streak.tier.minStreak
  } : null;

  // Only apply bonus if this match COMPLETES a streak tier
  // i.e., current streak count equals exactly a tier threshold
  // OR if stackTiers is true, apply highest tier reached on every match
  if (streak.tier) {
    const isThresholdMatch = streak.currentStreak === streak.tier.minStreak;
    const shouldApply = BONUS_CONFIG.streak.stackTiers 
      ? streak.currentStreak >= streak.tier.minStreak 
      : isThresholdMatch;

    if (shouldApply) {
      matchResult.streak_bonus = streak.bonus;
      matchResult.bonus_breakdown.push({
        type: 'streak',
        label: streak.tier.label,
        emoji: streak.tier.emoji,
        value: streak.bonus,
        description: `${streak.currentStreak} match streak`
      });
    }
  }

  return matchResult;
}

// ============== LAYER 2: COMBO BONUS ==============

/**
 * Check for exact score combos (consecutive exact predictions)
 */
function checkExactCombo(userHistory, currentMatch) {
  if (!BONUS_CONFIG.combo.exactCombo.enabled) return null;

  const sorted = [...userHistory, currentMatch].sort((a, b) => {
    const dt = new Date(a.kickoff) - new Date(b.kickoff);
    return dt !== 0 ? dt : String(a.fixture_id).localeCompare(String(b.fixture_id));
  });

  // Look at last N matches (where N = trigger)
  const trigger = BONUS_CONFIG.combo.exactCombo.trigger;
  const recent = sorted.slice(-trigger);

  // All must be exact scores (base_points === 5)
  const allExact = recent.every(m => m.base_points === 5);

  if (allExact && recent.length === trigger) {
    return {
      type: 'exact_combo',
      label: BONUS_CONFIG.combo.exactCombo.label,
      emoji: BONUS_CONFIG.combo.exactCombo.emoji,
      value: BONUS_CONFIG.combo.exactCombo.bonus,
      description: `${trigger} exact scores in a row`
    };
  }
  return null;
}

/**
 * Check for GD combos (consecutive correct GD, not exact)
 */
function checkGDCombo(userHistory, currentMatch) {
  if (!BONUS_CONFIG.combo.gdCombo.enabled) return null;

  const sorted = [...userHistory, currentMatch].sort((a, b) => {
    const dt = new Date(a.kickoff) - new Date(b.kickoff);
    return dt !== 0 ? dt : String(a.fixture_id).localeCompare(String(b.fixture_id));
  });

  const trigger = BONUS_CONFIG.combo.gdCombo.trigger;
  const recent = sorted.slice(-trigger);

  // All must be GD correct (base_points === 3) but NOT exact
  const allGD = recent.every(m => m.base_points === 3);

  if (allGD && recent.length === trigger) {
    return {
      type: 'gd_combo',
      label: BONUS_CONFIG.combo.gdCombo.label,
      emoji: BONUS_CONFIG.combo.gdCombo.emoji,
      value: BONUS_CONFIG.combo.gdCombo.bonus,
      description: `${trigger} correct GDs in a row`
    };
  }
  return null;
}

/**
 * Check for Perfect Day (all exact on same matchday)
 * 
 * BUG FIX: Now prevents multiple awards for the same matchday.
 * Only awards if not already earned on this matchday.
 */
function checkPerfectDay(userHistory, currentMatch) {
  if (!BONUS_CONFIG.combo.perfectDay.enabled) return null;

  const matchdayKey = currentMatch.matchday_key;
  if (!matchdayKey) return null;

  // Get all matches on this matchday (including current)
  const matchdayMatches = [...userHistory, currentMatch].filter(m => 
    m.matchday_key === matchdayKey
  );

  // Need at least 2 matches on the day to qualify
  if (matchdayMatches.length < 2) return null;

  // All must be exact scores
  const allExact = matchdayMatches.every(m => m.base_points === 5);

  if (!allExact) return null;

  // FIX: Check if Perfect Day was already awarded for this matchday
  const alreadyAwarded = userHistory.some(m => 
    m.matchday_key === matchdayKey &&
    m.combos_earned &&
    m.combos_earned.some(c => c.type === 'perfect_day')
  );

  if (alreadyAwarded) return null;

  return {
    type: 'perfect_day',
    label: BONUS_CONFIG.combo.perfectDay.label,
    emoji: BONUS_CONFIG.combo.perfectDay.emoji,
    value: BONUS_CONFIG.combo.perfectDay.bonus,
    description: `All ${matchdayMatches.length} predictions exact on ${matchdayKey}`
  };
}

/**
 * Apply all combo bonuses to a match result
 */
function applyComboBonuses(matchResult, userHistory) {
  if (!BONUS_CONFIG.combo.enabled) return matchResult;

  const combos = [];

  const exactCombo = checkExactCombo(userHistory, matchResult);
  if (exactCombo) combos.push(exactCombo);

  const gdCombo = checkGDCombo(userHistory, matchResult);
  if (gdCombo) combos.push(gdCombo);

  const perfectDay = checkPerfectDay(userHistory, matchResult);
  if (perfectDay) combos.push(perfectDay);

  // Sum combo bonuses
  const totalComboBonus = combos.reduce((sum, c) => sum + c.value, 0);

  matchResult.combo_bonus = totalComboBonus;
  matchResult.combos_earned = combos;

  combos.forEach(c => {
    matchResult.bonus_breakdown.push({
      type: c.type,
      label: c.label,
      emoji: c.emoji,
      value: c.value,
      description: c.description
    });
  });

  return matchResult;
}

// ============== LAYER 3: STAGE MULTIPLIER ==============

/**
 * Apply stage-based multiplier to base points
 */
function applyStageMultiplier(matchResult) {
  if (!BONUS_CONFIG.stageMultiplier.enabled) return matchResult;

  const stage = matchResult.stage;
  const multiplier = BONUS_CONFIG.stageMultiplier.multipliers[stage] || 1;

  matchResult.stage_multiplier = multiplier;

  // Double Points card: the 2x is applied HERE, at the multiplied_base layer,
  // NOT to base_points. base_points stays raw (so streak/combo logic is
  // unaffected and exact-combo still keys off ===5). A 0-point match can't be
  // doubled (0*2=0), so the flag only matters when base_points > 0.
  const doubleFactor = (matchResult.double_points_applied && matchResult.base_points > 0) ? 2 : 1;

  // Apply stage multiplier AND double factor to raw base points
  let multiplied = matchResult.base_points * multiplier * doubleFactor;

  // Round if configured
  const roundTo = BONUS_CONFIG.stageMultiplier.roundToNearest;
  if (roundTo) {
    multiplied = Math.round(multiplied / roundTo) * roundTo;
  }

  matchResult.multiplied_base = multiplied;

  if (doubleFactor === 2) {
    matchResult.bonus_breakdown.push({
      type: 'double_points',
      label: 'Double Points',
      emoji: '✖️2️⃣',
      value: matchResult.base_points * multiplier, // the extra points the card added
      description: `Double Points card: 2x on ${matchResult.base_points * multiplier} pts`
    });
  }

  if (multiplier !== 1) {
    matchResult.bonus_breakdown.push({
      type: 'stage_multiplier',
      label: `${stage} Multiplier`,
      emoji: '🏆',
      value: (matchResult.base_points * multiplier) - matchResult.base_points,
      description: `${multiplier}x multiplier on base points`
    });
  }

  return matchResult;
}

// ============== MAIN ENGINE ==============

/**
 * Full bonus calculation pipeline
 * Call this AFTER base points are calculated and match is resolved
 * 
 * @param {Object} params - Match parameters
 * @param {Array} userHistory - Previous match results for this user
 * @returns {Object} Complete match result with all bonuses
 */
function calculateFullPoints(params, userHistory = []) {
  // Validate userHistory is an array
  if (!Array.isArray(userHistory)) {
    throw new Error('userHistory must be an array');
  }

  // Step 0: Create base result
  let result = createMatchResult(params);

  // Step 1: Apply stage multiplier to base points
  result = applyStageMultiplier(result);

  // Step 2: Apply streak bonus (includes this match in streak count)
  result = applyStreakBonus(result, userHistory);

  // Step 3: Apply combo bonuses (includes this match in checks)
  result = applyComboBonuses(result, userHistory);

  // Step 4: Calculate final totals
  result.total_bonus = result.streak_bonus + result.combo_bonus;
  result.final_points = result.multiplied_base + result.total_bonus;

  return result;
}

// ============== LEADERBOARD AGGREGATION ==============

/**
 * Aggregate all match results into leaderboard stats
 * Returns the same shape as your current leaderboard row
 */
function aggregateUserStats(userId, allMatchResults) {
  const userMatches = allMatchResults.filter(m => m.user_id === userId);

  if (!userMatches.length) {
    return {
      user_id: userId,
      points: 0,
      exact: 0,
      gd: 0,
      result: 0,
      wrong: 0,
      streak_bonus_total: 0,
      combo_bonus_total: 0,
      multiplier_bonus_total: 0,
      base_points_total: 0,
      final_points_total: 0,
      current_streak: 0,
      best_streak: 0,
      combos_earned: [],
      best_multiplier_match: null
    };
  }

const stats = {
    user_id: userId,
    points: 0,          // Total final points (for leaderboard ranking)
    exact: 0,
    gd: 0,
    result: 0,
    wrong: 0,
    streak_bonus_total: 0,
    combo_bonus_total: 0,
    multiplier_bonus_total: 0,
    base_points_total: 0,
    final_points_total: 0,
    current_streak: 0,
    best_streak: 0,
    combo_count: 0,
    combos_earned: [],
    best_multiplier_match: null
  };

  let currentStreak = 0;
  let bestStreak = 0;

  // Sort by kickoff for streak calculation (deterministic for simultaneous kickoffs — Bug 7)
  const sorted = [...userMatches].sort((a, b) => {
    const dt = new Date(a.kickoff) - new Date(b.kickoff);
    return dt !== 0 ? dt : String(a.fixture_id).localeCompare(String(b.fixture_id));
  });

  for (const m of sorted) {
    // Base tier counts
    if (m.base_points === 5) stats.exact++;
    else if (m.base_points === 3) stats.gd++;
    else if (m.base_points === 2) stats.result++;
    else stats.wrong++;

    // Streak tracking — must use base_points to stay consistent with calculateStreak()
    // (a 0-base-points match shouldn't count toward a streak even if bonuses somehow appear)
    if (m.base_points > 0) {
      currentStreak++;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }

    // Bonus totals
    stats.streak_bonus_total += m.streak_bonus || 0;
    stats.combo_bonus_total += m.combo_bonus || 0;
    stats.multiplier_bonus_total += (m.multiplied_base - m.base_points) || 0;
    stats.base_points_total += m.base_points;
    stats.final_points_total += m.final_points;

    // Collect unique combos
    m.combos_earned?.forEach(c => {
      stats.combo_count++;   // count every instance
      if (!stats.combos_earned.find(ec => ec.type === c.type && ec.description === c.description)) {
        stats.combos_earned.push(c);
      }
    });

    // Best multiplier match
    if (!stats.best_multiplier_match || m.stage_multiplier > stats.best_multiplier_match.stage_multiplier) {
      stats.best_multiplier_match = m;
    }
  }

  stats.points = stats.final_points_total; // Leaderboard uses final points
  stats.current_streak = currentStreak;
  stats.best_streak = bestStreak;

  return stats;
}

// ============== UI HELPERS ==============

/**
 * Format a match result for display (e.g., in prediction history)
 */
function formatMatchResult(result) {
  const parts = [];

  // Base
  parts.push(`${result.base_points}pts base`);

  // Multiplier
  if (result.stage_multiplier !== 1) {
    parts.push(`x${result.stage_multiplier} = ${result.multiplied_base}`);
  }

  // Bonuses
  if (result.total_bonus > 0) {
    const bonusLabels = result.bonus_breakdown.map(b => `${b.emoji} +${b.value}`).join(' ');
    parts.push(bonusLabels);
  }

  return {
    summary: parts.join(' → '),
    final: `${result.final_points} pts`,
    breakdown: result.bonus_breakdown,
    isExact: result.base_points === 5,
    hasBonus: result.total_bonus > 0
  };
}

/**
 * Get active streak display for a user
 */
function getStreakDisplay(userHistory) {
  const streak = calculateStreak(userHistory);
  if (streak.currentStreak === 0) return null;

  return {
    count: streak.currentStreak,
    emoji: streak.emoji,
    label: streak.label,
    nextBonus: streak.tier ? null : '2 more for 🔥 bonus'
  };
}

/**
 * Get matchday key from kickoff date
 * 
 * BUG FIX: Uses UTC methods to avoid timezone shifts.
 * (Bhutan is UTC+6, so a 23:00 UTC kickoff would shift to 05:00 next day locally)
 */
function getMatchdayKey(kickoff) {
  const d = new Date(kickoff);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

// ============== INTEGRATION WITH EXISTING CODE ==============

/**
 * Hook this into your existing score-saving flow in admin.html
 * Replace the simple points_awarded update with this full calculation
 * 
 * BUG FIX: Added per-user try/catch so one failure doesn't block others.
 * Added conflict target hint for upsert.
 */
// ============================================================================
// REPLACEMENT for awardPointsWithBonuses  (bonus-engine.js, lines ~620–728)
// ----------------------------------------------------------------------------
// Why this changes: the old version ran a FULL per-user chain rebuild
// (recalculateUserBonuses) *inside* the per-prediction loop — i.e. once per
// player, ~30x per match. That made one Save Score = hundreds of sequential
// awaited round-trips in the browser, so any interruption (modal close, tab
// background, mobile connection blip) left later players with NO result row
// (+0). It also `continue`d past a player on a history-fetch error, dropping
// their base score entirely.
//
// New design = two phases:
//   PHASE 1  Write base + stage-multiplier rows for ALL predictions in a tight
//            loop. Base points don't depend on history, so a history failure
//            can never block a base write. If Phase 2 is interrupted, every
//            player still has a correct base score (leaderboard stays mostly
//            right, never all-zeros).
//   PHASE 2  Heal each affected player's streak/combo chain exactly once.
// ============================================================================
async function awardPointsWithBonuses(fixtureId, actualHome, actualAway) {
  // 1. Get fixture details
  const { data: fixture, error: fixtureError } = await supabaseClient
    .from('fixtures')
    .select('*')
    .eq('id', fixtureId)
    .single();

  if (fixtureError || !fixture) {
    console.error('[award] Failed to load fixture:', fixtureError);
    return { written: 0, healed: 0, errors: 1 };
  }

  // 2. Get all predictions for this fixture
  const { data: predictions, error: predError } = await supabaseClient
    .from('predictions')
    .select('*')
    .eq('fixture_id', fixtureId);

  if (predError || !predictions?.length) {
    console.error('[award] No predictions found:', predError);
    return { written: 0, healed: 0, errors: predError ? 1 : 0 };
  }

  // 3. Get active card_plays for this fixture (any user)
  const { data: cardPlays, error: cpError } = await supabaseClient
    .from('card_plays')
    .select('id, user_id, card_type, status')
    .eq('fixture_id', fixtureId)
    .neq('status', 'refunded');

  if (cpError) {
    console.error('[award] Failed to load card_plays (continuing without):', cpError);
  }

  // Build lookup: { userId: { double_points: playRow, double_pick: playRow } }
  const cardsByUser = {};
  (cardPlays || []).forEach(cp => {
    if (!cardsByUser[cp.user_id]) cardsByUser[cp.user_id] = {};
    cardsByUser[cp.user_id][cp.card_type] = cp;
  });

  // Knockout flag: cached once per scoring run, passed into _computeBase below.
  // When false, base-points logic is byte-for-byte identical to the pre-patch behavior.
  const knockoutEnabled = await _loadKnockoutFlag();

  const matchdayKey = getMatchdayKey(fixture.kickoff);
  let written = 0, errors = 0;
  const cardUpdates = []; // batch resolution updates

  // ---- PHASE 1: write base rows for EVERY prediction (no history needed) ----
// ---- PHASE 1: write base rows for EVERY prediction (no history needed) ----
  // Streak/combo come out as 0 here (history = []); Phase 2 fills them in.
  for (const pred of predictions) {
    try {
      const userCards = cardsByUser[pred.user_id] || {};
      const hasDoublePick = !!userCards.double_pick &&
                            pred.alt_home_prediction != null &&
                            pred.alt_away_prediction != null;
      const hasDoublePoints = !!userCards.double_points;

      // --- Step 1: base points for primary prediction
      // Routes through KnockoutScoring when flag is ON and fixture is a knockout;
      // otherwise identical to calculatePoints(predHome, predAway, actualHome, actualAway).
      const primaryBase = _computeBase(pred, fixture, knockoutEnabled);

      let basePoints = primaryBase;
      let winningHome = pred.home_prediction;
      let winningAway = pred.away_prediction;
      let winningPick = hasDoublePick ? 'primary' : null;
      let altBaseCached = null;

      // --- Step 2: Double Pick — score alt, take higher
      // For knockouts, the same advance_pick applies to whichever of primary/alt
      // ends up being a draw. The synthetic prediction object below carries it
      // through; _computeBase ignores advance_pick for non-draw scores anyway.
      if (hasDoublePick) {
        const altPrediction = {
          home_prediction: pred.alt_home_prediction,
          away_prediction: pred.alt_away_prediction,
          advance_pick: pred.advance_pick
        };
        const altBase = _computeBase(altPrediction, fixture, knockoutEnabled);
        altBaseCached = altBase;
        if (altBase > primaryBase) {
          basePoints = altBase;
          winningHome = pred.alt_home_prediction;
          winningAway = pred.alt_away_prediction;
          winningPick = 'alt';
        }
      }

      // --- Step 3: Double Points — flag only; the 2x is applied later inside
      // applyStageMultiplier (multiplied_base layer). basePoints stays RAW so it
      // can be persisted cleanly and so streak/combo logic is unaffected.
      const doublePointsApplied = hasDoublePoints && basePoints > 0;

      // --- Step 4: stage multiplier + double + streak + combo via existing pipeline
      const fullResult = calculateFullPoints({
        fixtureId: fixtureId,
        userId: pred.user_id,
        stage: fixture.stage,
        kickoff: fixture.kickoff,
        matchdayKey: matchdayKey,
        predHome: winningHome,
        predAway: winningAway,
        actualHome: actualHome,
        actualAway: actualAway,
        basePoints: basePoints,            // RAW — never pre-doubled
        doublePointsApplied: doublePointsApplied
      }, []); // <-- empty history on purpose; Phase 2 replays the chain

      // --- Step 5: persist winning pick back to predictions (best-effort)
      if (winningPick) {
        try {
          await supabaseClient.from('predictions')
            .update({ winning_pick: winningPick })
            .eq('id', pred.id);
        } catch (e) { /* non-fatal */ }
      }

      const { error: upsertError } = await supabaseClient
        .from('prediction_results')
        .upsert({
          prediction_id: pred.id,
          user_id: pred.user_id,
          fixture_id: fixtureId,
          home_prediction: winningHome,
          away_prediction: winningAway,
          stage: fixture.stage,
          base_points: basePoints,                     // ← raw, undoubled
          double_points_applied: doublePointsApplied,  // ← 2x reapplied on every heal via this flag
          stage_multiplier: fullResult.stage_multiplier,
          multiplied_base: fullResult.multiplied_base,
          streak_bonus: fullResult.streak_bonus,
          combo_bonus: fullResult.combo_bonus,
          total_bonus: fullResult.total_bonus,
          final_points: fullResult.final_points,
          streak_count: fullResult.streak_count,
          streak_tier: fullResult.streak_tier,
          combos_earned: fullResult.combos_earned,
          bonus_breakdown: fullResult.bonus_breakdown,
          kickoff: fixture.kickoff,
          matchday_key: matchdayKey
        }, { onConflict: 'prediction_id' });

      if (upsertError) {
        console.error(`[award] Base upsert failed for user ${pred.user_id}:`, upsertError);
        errors++;
      } else {
        written++;
      }

      // --- Step 7: queue card_plays resolution
      if (hasDoublePick) {
        cardUpdates.push({
          id: userCards.double_pick.id,
          summary: {
            winning_pick: winningPick,
            primary_base: primaryBase,
            alt_base: altBaseCached,
            final_points: fullResult.final_points
          }
        });
      }
      if (hasDoublePoints) {
        cardUpdates.push({
          id: userCards.double_points.id,
          summary: {
            base_before_double: basePoints,
            base_after_double: doublePointsApplied ? basePoints * 2 : basePoints,
            final_points: fullResult.final_points,
            wasted: !doublePointsApplied
          }
        });
      }
    } catch (err) {
      console.error(`[award] Phase 1 failed for prediction ${pred.id}:`, err);
      errors++;
    }
  }

  // ---- Mark card_plays as resolved (batched) ----
  for (const u of cardUpdates) {
    try {
      await supabaseClient.from('card_plays')
        .update({ status: 'resolved', result_summary: u.summary })
        .eq('id', u.id);
    } catch (e) {
      console.error('[award] Failed to resolve card_play', u.id, e);
    }
  }

  // ---- PHASE 2: heal each affected player's chronological chain ONCE ----
  const uniqueUserIds = [...new Set(predictions.map(p => p.user_id))];
  let healed = 0;
  for (const uid of uniqueUserIds) {
    try {
      await recalculateUserBonuses(uid);
      healed++;
    } catch (recalcErr) {
      console.error(`[award] Heal failed for ${uid}:`, recalcErr);
      errors++;
    }
  }

  console.log(`[award] fixture ${fixtureId}: ${written} base rows written, ${healed} chains healed, ${cardUpdates.length} cards resolved, ${errors} errors`);
  return { written, healed, errors };
}

// ============== RECALCULATION (out-of-order scoring fix) ==============

/**
 * Recompute streak + combo + multiplier for ALL of a user's resolved matches
 * in chronological order. Use this after any score entry, or as a manual
 * "Recalculate all bonuses" admin action.
 *
 * Why this exists:
 * Streaks and combos depend on the order matches resolve. If an admin scores
 * Match 5 before Match 4, Match 5's streak was computed without Match 4.
 * This function rebuilds the chain correctly by clearing all bonus fields
 * and replaying every match for the user in kickoff order.
 *
 * @param {string} userId
 * @returns {Promise<{updated: number, errors: number}>}
 */
async function recalculateUserBonuses(userId) {
  // 1. Load all of this user's resolved results, oldest first.
  //    Join fixtures so we always have `stage` available, even if legacy rows
  //    were saved before `stage` was persisted on prediction_results (Bug 1).
  //    Secondary sort on fixture_id keeps simultaneous kickoffs deterministic (Bug 7).
  const { data: results, error } = await supabaseClient
    .from('prediction_results')
    .select('*, fixtures(stage)')
    .eq('user_id', userId)
    .order('kickoff', { ascending: true })
    .order('fixture_id', { ascending: true });

  if (error) {
    console.error(`[recalc] Failed to load results for ${userId}:`, error);
    return { updated: 0, errors: 1 };
  }
  if (!results?.length) return { updated: 0, errors: 0 };

  // 2. Walk through chronologically, rebuilding history as we go
  const rebuiltHistory = [];
  let updated = 0, errors = 0;

  for (const r of results) {
    try {
      const fresh = calculateFullPoints({
        fixtureId: r.fixture_id,
        userId: r.user_id,
        stage: r.stage || r.fixtures?.stage || '',   // fall back to joined fixture (Bug 1)
        kickoff: r.kickoff,
        matchdayKey: r.matchday_key || getMatchdayKey(r.kickoff),
        predHome: r.home_prediction,
        predAway: r.away_prediction,
        actualHome: r.actual_home, // may be null if not stored — base_points already has the answer
        actualAway: r.actual_away,
        basePoints: r.base_points,
        doublePointsApplied: r.double_points_applied  // ← reapply the 2x on heal (was being erased)
      }, rebuiltHistory);

      // Only write back if something actually changed (avoid churn)
      const changed = (
        fresh.streak_bonus !== r.streak_bonus ||
        fresh.combo_bonus !== r.combo_bonus ||
        fresh.multiplied_base !== r.multiplied_base ||
        fresh.final_points !== r.final_points
      );

      if (changed) {
        const { error: upErr } = await supabaseClient
          .from('prediction_results')
          .update({
            stage_multiplier: fresh.stage_multiplier,
            multiplied_base: fresh.multiplied_base,
            streak_bonus: fresh.streak_bonus,
            combo_bonus: fresh.combo_bonus,
            total_bonus: fresh.total_bonus,
            final_points: fresh.final_points,
            streak_count: fresh.streak_count,
            streak_tier: fresh.streak_tier,
            combos_earned: fresh.combos_earned,
            bonus_breakdown: fresh.bonus_breakdown
          })
          .eq('prediction_id', r.prediction_id);

        if (upErr) {
          console.error(`[recalc] Update failed for ${r.prediction_id}:`, upErr);
          errors++;
        } else {
          updated++;
        }
      }

      // Push the FRESH result into history for the next iteration
      rebuiltHistory.push(fresh);
    } catch (err) {
      console.error(`[recalc] Failed on result ${r.prediction_id}:`, err);
      errors++;
      // Still push original into history so chain doesn't break
      rebuiltHistory.push(r);
    }
  }

  return { updated, errors };
}

/**
 * Recalculate bonuses for EVERY user. Use sparingly — this is the
 * "nuclear option" admin button. Safe to run; just slow with many users.
 */
async function recalculateAllBonuses() {
  console.log('[recalc-all] Starting full recalculation…');

  // Source from predictions (not prediction_results) so we catch users
  // whose result rows are missing due to transient errors during awardPointsWithBonuses.
  // .limit(10000) safeguards against PostgREST's default 1000-row cap.
  const { data: users, error } = await supabaseClient
    .from('predictions')
    .select('user_id')
    .limit(10000);

  if (error || !users) {
    console.error('[recalc-all] Failed to load users:', error);
    return { users: 0, created: 0, updated: 0, errors: 1 };
  }

  const uniqueUserIds = [...new Set(users.map(u => u.user_id))];
  console.log(`[recalc-all] Processing ${uniqueUserIds.length} users`);

  // Cache the knockout flag once for the whole recalc run.
  const knockoutEnabled = await _loadKnockoutFlag();
  console.log(`[recalc-all] knockout_scoring_enabled = ${knockoutEnabled}`);

  // Load all active double_points card plays once, so any row we RECREATE from
  // scratch below still carries the 2x flag (closes the prior "recalc-all drops
  // a card" residual). Keyed by `${user_id}|${fixture_id}`.
  const doublePointsKeys = new Set();
  try {
    const { data: dpPlays, error: dpErr } = await supabaseClient
      .from('card_plays')
      .select('user_id, fixture_id, card_type, status')
      .eq('card_type', 'double_points')
      .neq('status', 'refunded')
      .limit(10000);
    if (dpErr) {
      console.warn('[recalc-all] Could not load double_points plays (recreated rows may miss 2x):', dpErr);
    } else {
      (dpPlays || []).forEach(cp => doublePointsKeys.add(`${cp.user_id}|${cp.fixture_id}`));
    }
  } catch (e) {
    console.warn('[recalc-all] double_points play load threw (recreated rows may miss 2x):', e);
  }

  let totalCreated = 0, totalUpdated = 0, totalErrors = 0;

  for (const uid of uniqueUserIds) {
    try {
      // STEP 1 — Find this user's predictions on already-scored fixtures.
      const { data: predsOnScored, error: predsErr } = await supabaseClient
        .from('predictions')
        .select(`
          id,
          user_id,
          fixture_id,
          home_prediction,
          away_prediction,
          advance_pick,
          fixtures!inner(home_score, away_score, stage, kickoff, penalty_winner, penalty_home_score, penalty_away_score)
        `)
        .eq('user_id', uid)
        .not('fixtures.home_score', 'is', null)
        .not('fixtures.away_score', 'is', null)
        .limit(10000);

      if (predsErr) {
        console.error(`[recalc-all] Failed to fetch predictions for ${uid}:`, predsErr);
        totalErrors++;
        continue;
      }

      if (!predsOnScored || predsOnScored.length === 0) continue;

      // STEP 2 — Find which of those already have result rows.
      const fixtureIds = predsOnScored.map(p => p.fixture_id);
      const { data: existingResults, error: existingErr } = await supabaseClient
        .from('prediction_results')
        .select('fixture_id')
        .eq('user_id', uid)
        .in('fixture_id', fixtureIds);

      if (existingErr) {
        console.error(`[recalc-all] Failed to fetch existing results for ${uid}:`, existingErr);
        totalErrors++;
        continue;
      }

      const existingSet = new Set((existingResults || []).map(r => r.fixture_id));
      const missingRows = predsOnScored.filter(p => !existingSet.has(p.fixture_id));

      // STEP 3 — Create the missing rows with correct stage multiplier.
      // Streak/combo bonuses come out as 0 here (history=[]) — recalculateUserBonuses
      // replays full history in Step 4 and fills them in correctly.
      for (const m of missingRows) {
        try {
          const f = m.fixtures;
          // Build a prediction-shaped object so _computeBase can read advance_pick.
          const predForCalc = {
            home_prediction: m.home_prediction,
            away_prediction: m.away_prediction,
            advance_pick: m.advance_pick
          };
          const basePoints = _computeBase(predForCalc, f, knockoutEnabled);
          const matchdayKey = getMatchdayKey(f.kickoff);
          const dpApplied = doublePointsKeys.has(`${uid}|${m.fixture_id}`) && basePoints > 0;

          const fullResult = calculateFullPoints({
            fixtureId: m.fixture_id,
            userId: uid,
            stage: f.stage,
            kickoff: f.kickoff,
            matchdayKey,
            predHome: m.home_prediction,
            predAway: m.away_prediction,
            actualHome: f.home_score,
            actualAway: f.away_score,
            basePoints,
            doublePointsApplied: dpApplied
          }, []);

          // Match the engine's upsert pattern exactly (line 686-709).
          const { error: upsertErr } = await supabaseClient
            .from('prediction_results')
            .upsert({
              prediction_id: m.id,
              user_id: uid,
              fixture_id: m.fixture_id,
              home_prediction: m.home_prediction,
              away_prediction: m.away_prediction,
              stage: f.stage,
              base_points: fullResult.base_points,
              double_points_applied: dpApplied,
              stage_multiplier: fullResult.stage_multiplier,
              multiplied_base: fullResult.multiplied_base,
              streak_bonus: fullResult.streak_bonus,
              combo_bonus: fullResult.combo_bonus,
              total_bonus: fullResult.total_bonus,
              final_points: fullResult.final_points,
              streak_count: fullResult.streak_count,
              streak_tier: fullResult.streak_tier,
              combos_earned: fullResult.combos_earned,
              bonus_breakdown: fullResult.bonus_breakdown,
              kickoff: f.kickoff,
              matchday_key: matchdayKey
            }, {
              onConflict: 'prediction_id'
            });

          if (upsertErr) {
            console.error(`[recalc-all] Upsert failed for prediction ${m.id}:`, upsertErr);
            totalErrors++;
          } else {
            totalCreated++;
          }
        } catch (createErr) {
          console.error(`[recalc-all] Create-row exception for prediction ${m.id}:`, createErr);
          totalErrors++;
        }
      }

      // STEP 4 — Recalculate streaks, combos, and any multiplier corrections
      // across this user's full history (now including any rows we just inserted).
      const { updated, errors } = await recalculateUserBonuses(uid);
      totalUpdated += updated;
      totalErrors += errors;

    } catch (userErr) {
      console.error(`[recalc-all] Unexpected error for user ${uid}:`, userErr);
      totalErrors++;
    }
  }

  const summary = {
    users: uniqueUserIds.length,
    created: totalCreated,
    updated: totalUpdated,
    errors: totalErrors
  };
  console.log('[recalc-all] Complete:', summary);
  return summary;
}

// ============== EXPORTS ==============
const BonusEngine = {
  BONUS_CONFIG,
  calculateFullPoints,
  aggregateUserStats,
  formatMatchResult,
  getStreakDisplay,
  getMatchdayKey,
  calculateStreak,
  createMatchResult,
  awardPointsWithBonuses,
  recalculateUserBonuses,
  recalculateAllBonuses
};

// Browser global
if (typeof window !== 'undefined') {
  window.BonusEngine = BonusEngine;
}

// Module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BonusEngine;
}