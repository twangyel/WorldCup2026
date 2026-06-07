// ============================================================
// BONUS CALCULATION ENGINE v1.0
// Layer 1: Streak Bonus | Layer 2: Combo Bonus | Layer 3: Stage Multiplier
// Integrates with existing calculatePoints(predHome, predAway, actualHome, actualAway)
// ============================================================

// ============== CONFIGURATION ==============
const BONUS_CONFIG = {
  // --- Layer 1: Streak Bonus ---
  streak: {
    enabled: true,
    // Consecutive matches with ANY points (>0)
    tiers: [
      { minStreak: 3, bonus: 2,  label: 'Hot Streak',      emoji: '🔥' },
      { minStreak: 5, bonus: 5,  label: 'On Fire',         emoji: '🔥🔥' },
      { minStreak: 7, bonus: 10, label: 'Unstoppable',    emoji: '🔥🔥🔥' },
      { minStreak: 10, bonus: 15, label: 'Legendary',     emoji: '👑' }
    ],
    // Cap at highest tier reached (don't stack tiers)
    stackTiers: false
  },

  // --- Layer 2: Combo Bonus ---
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
      enabled: true,
      // 2 correct GDs (but not exact) in a row
      trigger: 2,
      bonus: 2,
      label: 'GD Combo',
      emoji: '🎯'
    },
    perfectDay: {
      enabled: true,
      // All predictions on a single matchday are exact scores
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
    roundToNearest: 0.5 // 7.5 stays 7.5, or set to 1 to round to whole numbers
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
 * @returns {Object} { currentStreak, tier, bonus }
 */
function calculateStreak(userHistory) {
  if (!BONUS_CONFIG.streak.enabled) {
    return { currentStreak: 0, tier: null, bonus: 0, label: '', emoji: '' };
  }

  // Sort by kickoff to ensure chronological order
  const sorted = [...userHistory].sort((a, b) => 
    new Date(a.kickoff) - new Date(b.kickoff)
  );

  // Count consecutive matches with final_points > 0 from the END
  let currentStreak = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i].final_points > 0) {
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
 */
function applyStreakBonus(matchResult, userHistory) {
  const streak = calculateStreak(userHistory);

  matchResult.streak_count = streak.currentStreak;
  matchResult.streak_tier = streak.tier ? {
    label: streak.tier.label,
    emoji: streak.tier.emoji,
    min_streak: streak.tier.minStreak
  } : null;

  // Only apply bonus if this match COMPLETES a streak tier
  // i.e., current streak count equals exactly a tier threshold
  // OR if stackTiers is true, apply highest tier reached
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

  const sorted = [...userHistory, currentMatch].sort((a, b) => 
    new Date(a.kickoff) - new Date(b.kickoff)
  );

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

  const sorted = [...userHistory, currentMatch].sort((a, b) => 
    new Date(a.kickoff) - new Date(b.kickoff)
  );

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
 */
function checkPerfectDay(userHistory, currentMatch) {
  if (!BONUS_CONFIG.combo.perfectDay.enabled) return null;

  const matchdayKey = currentMatch.matchday_key;

  // Get all matches on this matchday (including current)
  const matchdayMatches = [...userHistory, currentMatch].filter(m => 
    m.matchday_key === matchdayKey
  );

  // Need at least 2 matches on the day to qualify
  if (matchdayMatches.length < 2) return null;

  // All must be exact scores
  const allExact = matchdayMatches.every(m => m.base_points === 5);

  if (allExact) {
    return {
      type: 'perfect_day',
      label: BONUS_CONFIG.combo.perfectDay.label,
      emoji: BONUS_CONFIG.combo.perfectDay.emoji,
      value: BONUS_CONFIG.combo.perfectDay.bonus,
      description: `All ${matchdayMatches.length} predictions exact on ${matchdayKey}`
    };
  }
  return null;
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
  // Step 0: Create base result
  let result = createMatchResult(params);

  // Step 1: Apply stage multiplier to base points
  result = applyStageMultiplier(result);

  // Step 2: Apply streak bonus (based on history BEFORE this match)
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

  // Sort by kickoff for streak calculation
  const sorted = [...userMatches].sort((a, b) => 
    new Date(a.kickoff) - new Date(b.kickoff)
  );

  for (const m of sorted) {
    // Base tier counts
    if (m.base_points === 5) stats.exact++;
    else if (m.base_points === 3) stats.gd++;
    else if (m.base_points === 2) stats.result++;
    else stats.wrong++;

    // Streak tracking
    if (m.final_points > 0) {
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
 * Used for Perfect Day combo detection
 */
function getMatchdayKey(kickoff) {
  const d = new Date(kickoff);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ============== INTEGRATION WITH EXISTING CODE ==============

/**
 * Hook this into your existing score-saving flow in admin.html
 * Replace the simple points_awarded update with this full calculation
 */
async function awardPointsWithBonuses(fixtureId, actualHome, actualAway) {
  // 1. Get fixture details
  const { data: fixture } = await supabaseClient
    .from('fixtures')
    .select('*')
    .eq('id', fixtureId)
    .single();

  if (!fixture) return;

  // 2. Get all predictions for this fixture
  const { data: predictions } = await supabaseClient
    .from('predictions')
    .select('*')
    .eq('fixture_id', fixtureId);

  if (!predictions?.length) return;

  // 3. For each prediction, calculate full points with bonuses
  for (const pred of predictions) {
    // Calculate base points using existing function
    const basePoints = calculatePoints(
      pred.home_prediction, 
      pred.away_prediction,
      actualHome, 
      actualAway
    );

    // Get user's match history for streak/combo calculation
    const { data: userHistory } = await supabaseClient
      .from('prediction_results') // or your results table
      .select('*')
      .eq('user_id', pred.user_id)
      .lt('kickoff', fixture.kickoff)
      .order('kickoff', { ascending: true });

    // Calculate full points with bonuses
    const matchdayKey = getMatchdayKey(fixture.kickoff);
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
    await supabaseClient
      .from('prediction_results')
      .upsert({
        prediction_id: pred.id,
        user_id: pred.user_id,
        fixture_id: fixtureId,
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
      });
  }
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
  awardPointsWithBonuses
};

// Browser global
if (typeof window !== 'undefined') {
  window.BonusEngine = BonusEngine;
}

// Module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BonusEngine;
}
