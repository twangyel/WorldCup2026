// ============================================================
// BONUS CALCULATION ENGINE v1.1
// Layer 1: Streak Bonus | Layer 2: Combo Bonus | Layer 3: Stage Multiplier
// Integrates with existing calculatePoints(predHome, predAway, actualHome, actualAway)
// ============================================================

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
      'Round of 32': 1,
      'Round of 16': 1.5,
      'Quarter Final': 1.5,
      'Quarter-Final': 1.5,
      'Semi Final': 2,
      'Semi-Final': 2,
      'Final': 2.5,
      'Third Place': 1.5,
      '3rd Place': 1.5
    },
    roundToNearest: 1  // 7.5 stays 7.5, or set to 1 to round to whole numbers
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
  basePoints,  // From calculatePoints()
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
    base_points: basePoints,
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

  // Apply multiplier to base points
  let multiplied = matchResult.base_points * multiplier;

  // Round if configured
  const roundTo = BONUS_CONFIG.stageMultiplier.roundToNearest;
  if (roundTo) {
    multiplied = Math.round(multiplied / roundTo) * roundTo;
  }

  matchResult.multiplied_base = multiplied;

  if (multiplier !== 1) {
    matchResult.bonus_breakdown.push({
      type: 'stage_multiplier',
      label: `${stage} Multiplier`,
      emoji: '🏆',
      value: multiplied - matchResult.base_points,
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
    stats.combo_count = 0;
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
async function awardPointsWithBonuses(fixtureId, actualHome, actualAway) {
  // 1. Get fixture details
  const { data: fixture, error: fixtureError } = await supabaseClient
    .from('fixtures')
    .select('*')
    .eq('id', fixtureId)
    .single();

  if (fixtureError || !fixture) {
    console.error('Failed to load fixture:', fixtureError);
    return;
  }

  // 2. Get all predictions for this fixture
  const { data: predictions, error: predError } = await supabaseClient
    .from('predictions')
    .select('*')
    .eq('fixture_id', fixtureId);

  if (predError || !predictions?.length) {
    console.error('No predictions found:', predError);
    return;
  }

  const matchdayKey = getMatchdayKey(fixture.kickoff);

  // 3. For each prediction, calculate full points with bonuses
  for (const pred of predictions) {
    try {
      // Calculate base points using existing function
      const basePoints = calculatePoints(
        pred.home_prediction, 
        pred.away_prediction,
        actualHome, 
        actualAway
      );

      // Get user\'s match history for streak/combo calculation
      const { data: userHistory, error: histError } = await supabaseClient
        .from('prediction_results') // or your results table
        .select('*')
        .eq('user_id', pred.user_id)
        .lt('kickoff', fixture.kickoff)
        .order('kickoff', { ascending: true });

      if (histError) {
        console.error(`History load failed for user ${pred.user_id}:`, histError);
        continue;
      }

      // Calculate full points with bonuses
      const fullResult = calculateFullPoints({
        fixtureId: fixtureId,
        userId: pred.user_id,
        stage: fixture.stage,
        kickoff: fixture.kickoff,
        matchdayKey: matchdayKey,
        predHome: pred.home_prediction,
        predAway: pred.away_prediction,
        actualHome: actualHome,
        actualAway: actualAway,
        basePoints: basePoints
      }, userHistory || []);

      // 4. Save to database
      const { error: upsertError } = await supabaseClient
        .from('prediction_results')
        .upsert({
          prediction_id: pred.id,
          user_id: pred.user_id,
          fixture_id: fixtureId,
          home_prediction: pred.home_prediction,
          away_prediction: pred.away_prediction,
          stage: fixture.stage,                    // FIX (Bug 1): persist stage so recalc preserves multiplier
          base_points: fullResult.base_points,
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
        }, { 
          onConflict: 'prediction_id' // or your unique constraint column
        });

      if (upsertError) {
        console.error(`Upsert failed for user ${pred.user_id}:`, upsertError);
     } else {
        // Only recalc if this user has LATER resolved matches than the one we just scored.
        // In the common case (admin scores fixtures in order), there are none → skip the
        // O(n) chain rewrite. Heals the out-of-order case without the quadratic hit. (Bug 6)
        //
        // gte + neq catches simultaneous-kickoff fixtures too (Bug 7b). Slightly over-triggers
        // on same-kickoff fixtures scored in order, but recalc is idempotent so it's harmless.
        try {
          const { count: laterCount } = await supabaseClient
            .from('prediction_results')
            .select('prediction_id', { count: 'exact', head: true })
            .eq('user_id', pred.user_id)
            .gte('kickoff', fixture.kickoff)
            .neq('fixture_id', fixtureId);

          if ((laterCount || 0) > 0) {
            await recalculateUserBonuses(pred.user_id);
          }
        } catch (recalcErr) {
          console.error(`[recalc] downstream heal failed for ${pred.user_id}:`, recalcErr);
        }
      }
    } catch (err) {
      console.error(`Failed to process prediction ${pred.id}:`, err);
    }
  }
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
        basePoints: r.base_points
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
          fixtures!inner(home_score, away_score, stage, kickoff)
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
          const basePoints = calculatePoints(
            m.home_prediction, m.away_prediction,
            f.home_score, f.away_score
          );
          const matchdayKey = getMatchdayKey(f.kickoff);

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
            basePoints
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