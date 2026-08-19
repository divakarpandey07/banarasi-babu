/**
 * BANARASI BABU — FESTIVAL CONTEXT & THEME ENGINE (FestivalEngine)
 * Translates active festival/theme selection into contextual data, safety advisories, and map highlights
 */

const FestivalEngine = (() => {
  function getFestivalContext(themeId, festivalsList = []) {
    const festival = festivalsList.find(f => f.id === themeId);
    if (!festival) {
      return {
        isFestival: false,
        themeId: themeId,
        advisory: null,
        keyLocations: [],
        highlights: []
      };
    }

    return {
      isFestival: true,
      festivalId: festival.id,
      name: festival.name,
      hindiName: festival.hindiName,
      nextOccurrence: festival.nextDate,
      keyLocations: festival.keyLocations,
      highlights: festival.highlights,
      boatGuidance: festival.boatGuidance,
      safetyAdvice: festival.safetyAdvice,
      foodAssociated: festival.foodAssociated,
      source: festival.source
    };
  }

  return {
    getFestivalContext
  };
})();

if (typeof module !== 'undefined') module.exports = FestivalEngine;
