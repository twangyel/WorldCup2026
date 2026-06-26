// =============================================================================
// knockout-scoring.js
// =============================================================================
// Pure helper functions for knockout-stage scoring. No DOM, no Supabase calls,
// no side effects — just predictable input/output logic that can be:
//   - imported by bonus-engine.js (for writing scores)
//   - used by index.js (for displaying predictions and match results)
//   - unit-tested in isolation
//
// Design principles:
//   - Group-stage behavior is UNCHANGED. Every helper short-circuits to
//     standard logic when stage === 'group' or penalty_winner is null.
//   - The ONLY signal that matters for scoring is penalty_winner ('home'/'away').
//     Pen scores (4-2, etc.) are display-only.
//   - In knockouts, "winner" = whoever advances = pen winner if shootout,
//     otherwise the team with more goals at end of ET.
//
// Wire-in:
//   <script src="assets/js/knockout-scoring.js"></script>
//   ...attaches to window.KnockoutScoring for browser use.
// =============================================================================

(function (global) {
  'use strict';

  // ---------------------------------------------------------------------------
  // Stage detection
  // ---------------------------------------------------------------------------
  // Knockout stages as stored in the fixtures table:
  //   'Round of 32', 'Round of 16', 'Quarterfinal', 'Semifinal',
  //   'Third Place', 'Final'
  // Group stages: 'Group A' through 'Group L'.
  // Values are compared case-insensitively (lowercased + trimmed).
  // Add alternate slug forms below if seed scripts or imports ever use them.
  // normalizeStage collapses case, dashes, underscores, and runs of
  // whitespace to a single canonical form. This is what lets a single set
  // entry like 'quarter final' match 'Quarter-Final', 'Quarter_Final',
  // 'quarter   final', etc. — so a seed/import that writes a spaced or
  // hyphenated variant can never silently fall back to legacy scoring.
  function normalizeStage(stage) {
    return String(stage || '')
      .toLowerCase()
      .trim()
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ');
  }

  const KNOCKOUT_STAGES = new Set([
    // All values are stored post-normalizeStage (lowercased, dashes/underscores
    // → space, collapsed whitespace). Production values plus every alias seen
    // in the wild; both the compact ('quarterfinal') and spaced
    // ('quarter final') forms are listed because they normalize differently.
    'round of 32', 'r32',
    'round of 16', 'r16',
    'quarterfinal', 'quarter final', 'qf',
    'semifinal', 'semi final', 'sf',
    'third place', '3rd place',
    'final'
  ]);

  function isKnockoutStage(stage) {
    if (!stage) return false;
    return KNOCKOUT_STAGES.has(normalizeStage(stage));
  }

  // ---------------------------------------------------------------------------
  // isShootoutMatch(fixture)
  // ---------------------------------------------------------------------------
  // True iff this fixture was decided by a penalty shootout.
  // Strict guard: requires both a pen winner AND a recorded draw at full time.
  function isShootoutMatch(fixture) {
    if (!fixture) return false;
    if (!fixture.penalty_winner) return false;
    // Defensive: pens only happen after a draw at end of ET.
    const h = numOrNull(fixture.home_score);
    const a = numOrNull(fixture.away_score);
    if (h === null || a === null) return false;
    return h === a;
  }

  // ---------------------------------------------------------------------------
  // getEffectiveWinner(fixture)
  // ---------------------------------------------------------------------------
  // Returns the team that "wins" the match for prediction-scoring purposes.
  //   'home' | 'away' | 'draw'
  //
  // Group stage: standard logic (more goals wins, else draw).
  // Knockout:    pen winner takes precedence if shootout; else standard.
  // No-result:   returns null if the match hasn't been scored yet.
  function getEffectiveWinner(fixture) {
    if (!fixture) return null;

    const h = numOrNull(fixture.home_score);
    const a = numOrNull(fixture.away_score);
    if (h === null || a === null) return null; // match not yet resolved

    // Knockout + shootout: pen winner is the effective winner
    if (isKnockoutStage(fixture.stage) && isShootoutMatch(fixture)) {
      return fixture.penalty_winner; // 'home' or 'away'
    }

    // Standard: more goals wins
    if (h > a) return 'home';
    if (a > h) return 'away';
    return 'draw';
  }

  // ---------------------------------------------------------------------------
  // getPredictedWinner(prediction, fixture)
  // ---------------------------------------------------------------------------
  // Returns what the player effectively "predicted" as the winner.
  //   'home' | 'away' | 'draw' | null
  //
  // Non-draw prediction: implied by the scoreline (more goals wins).
  // Draw prediction:
  //   - Group stage: returns 'draw' (no advance pick concept).
  //   - Knockout: returns advance_pick ('home'/'away') if set; else 'draw'.
  //     (Returning 'draw' for an unset advance_pick means the player
  //     failed to make the required pick — they'll miss the winner tier.
  //     The UI should prevent submission without an advance_pick, but the
  //     scoring engine handles it gracefully if one slips through.)
  function getPredictedWinner(prediction, fixture) {
    if (!prediction) return null;

    const h = numOrNull(prediction.home_prediction);
    const a = numOrNull(prediction.away_prediction);
    if (h === null || a === null) return null;

    if (h > a) return 'home';
    if (a > h) return 'away';

    // Draw prediction
    if (fixture && isKnockoutStage(fixture.stage) && prediction.advance_pick) {
      return prediction.advance_pick; // 'home' or 'away'
    }
    return 'draw';
  }

  // ---------------------------------------------------------------------------
  // computeBasePoints(prediction, fixture)
  // ---------------------------------------------------------------------------
  // Returns the base points the prediction earns, using the same 5/3/2/0
  // tier logic as group stage — but with "winner" redefined for knockouts.
  //
  //   5 = exact scoreline match (home_score AND away_score)
  //   3 = correct goal difference (and correct winner)
  //   2 = correct winner only
  //   0 = wrong winner
  //
  // Mutually exclusive — higher tiers subsume lower ones. The function
  // returns at most one tier value.
  function computeBasePoints(prediction, fixture) {
    const ph = numOrNull(prediction && prediction.home_prediction);
    const pa = numOrNull(prediction && prediction.away_prediction);
    const ah = numOrNull(fixture && fixture.home_score);
    const aa = numOrNull(fixture && fixture.away_score);

    if (ph === null || pa === null || ah === null || aa === null) return 0;

    const isKO = isKnockoutStage(fixture && fixture.stage);
    const actualDraw = (ah === aa);
    const predDraw = (ph === pa);

    // Guard A — knockout draw with no recorded pen winner is incomplete/unsafe
    // data: we cannot know who advanced, so nothing scores. Prevents an exact
    // 1-1 collecting 5 before a pen winner has been entered.
    if (isKO && actualDraw && !fixture.penalty_winner) return 0;

    // Guard B — a DRAW prediction on a DECISIVE knockout result scores 0.
    // advance_pick only adjudicates an actual shootout; it cannot rescue a draw
    // prediction when the match did not end level. (e.g. predict 1-1 + home,
    // match ends 2-1 → 0, NOT 2.)
    if (isKO && predDraw && !actualDraw) return 0;

    // WINNER GATE FIRST — before the exact tier. This is the critical ordering
    // fix: on a shootout, an exact recorded draw (1-1) with a wrong or missing
    // advance_pick must score 0, never 5. We therefore confirm the predicted
    // advancing team matches the effective (pen) winner BEFORE awarding exact.
    const predictedWinner = getPredictedWinner(prediction, fixture);
    const effectiveWinner = getEffectiveWinner(fixture);

    if (!predictedWinner || !effectiveWinner) return 0;
    if (predictedWinner !== effectiveWinner) return 0; // wrong winner → 0

    // Tier 1: Exact scoreline (5 pts).
    // Uses the RECORDED scoreline (90'/ET), so pen results never grant exact.
    // Reached only once the winner gate has passed, so a 1-1 exact only earns 5
    // when the player also picked the correct pen winner.
    if (ph === ah && pa === aa) return 5;

    // Tier 2: Goal difference (3 pts).
    // Compares recorded GDs. In shootout matches, actual GD is always 0,
    // so only draw predictions can qualify for GD tier in shootouts.
    const predictedGd = ph - pa;
    const actualGd = ah - aa;
    if (predictedGd === actualGd) return 3;

    // Tier 3: Correct winner only (2 pts).
    return 2;
  }

  // ---------------------------------------------------------------------------
  // getMatchResultDisplay(fixture)
  // ---------------------------------------------------------------------------
  // Returns a human-readable string describing the match result for UI use.
  // Examples:
  //   "2 - 1"
  //   "1 - 1 (Argentina won 4-2 on pens)"
  //   "0 - 0 (France won on pens)"
  //
  // Pass team names via the second arg when calling from a context that
  // has them; falls back to "Home"/"Away" labels otherwise.
  function getMatchResultDisplay(fixture, opts) {
    if (!fixture) return '';
    const h = numOrNull(fixture.home_score);
    const a = numOrNull(fixture.away_score);
    if (h === null || a === null) return '';

    const base = `${h} - ${a}`;
    if (!isShootoutMatch(fixture)) return base;

    const homeName = (opts && opts.homeName) || fixture.home_team || 'Home';
    const awayName = (opts && opts.awayName) || fixture.away_team || 'Away';
    const winnerName = fixture.penalty_winner === 'home' ? homeName : awayName;

    const ph = numOrNull(fixture.penalty_home_score);
    const pa = numOrNull(fixture.penalty_away_score);

    if (ph !== null && pa !== null) {
      const winScore = Math.max(ph, pa);
      const loseScore = Math.min(ph, pa);
      return `${base} (${winnerName} won ${winScore}-${loseScore} on pens)`;
    }
    return `${base} (${winnerName} won on pens)`;
  }

  // ---------------------------------------------------------------------------
  // shouldShowAdvancePickUI(prediction, fixture)
  // ---------------------------------------------------------------------------
  // True iff the player UI should reveal the "Who wins on pens?" toggle.
  // This is the rule the prediction-card UI binds to whenever the score
  // inputs change.
  function shouldShowAdvancePickUI(prediction, fixture) {
    if (!fixture || !isKnockoutStage(fixture.stage)) return false;
    const h = numOrNull(prediction && prediction.home_prediction);
    const a = numOrNull(prediction && prediction.away_prediction);
    if (h === null || a === null) return false;
    return h === a; // draw prediction → show pen pick
  }

  // ---------------------------------------------------------------------------
  // isPredictionValid(prediction, fixture)
  // ---------------------------------------------------------------------------
  // Form validation: returns { ok: boolean, reason?: string }.
  // Used by the submit handler to block invalid submissions.
  function isPredictionValid(prediction, fixture) {
    if (!prediction || !fixture) return { ok: false, reason: 'Missing data' };
    const h = numOrNull(prediction.home_prediction);
    const a = numOrNull(prediction.away_prediction);
    if (h === null || a === null) return { ok: false, reason: 'Enter a score' };
    if (h < 0 || a < 0) return { ok: false, reason: 'Scores cannot be negative' };

    // Draw prediction in a knockout requires an advance_pick
    if (shouldShowAdvancePickUI(prediction, fixture) && !prediction.advance_pick) {
      return { ok: false, reason: 'Pick who wins on penalties' };
    }
    return { ok: true };
  }

  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  function numOrNull(v) {
    if (v === null || v === undefined || v === '') return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  const KnockoutScoring = {
    isKnockoutStage,
    isShootoutMatch,
    getEffectiveWinner,
    getPredictedWinner,
    computeBasePoints,
    getMatchResultDisplay,
    shouldShowAdvancePickUI,
    isPredictionValid
  };

  // Attach for browser
  if (typeof global !== 'undefined') {
    global.KnockoutScoring = KnockoutScoring;
  }
  // Export for Node-style consumers (tests, edge functions if applicable)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = KnockoutScoring;
  }
})(typeof window !== 'undefined' ? window : globalThis);