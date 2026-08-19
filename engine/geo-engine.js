/**
 * BANARASI BABU — SPATIAL & MAP GEOGRAPHIC ENGINE (GeoEngine)
 * Haversine Distance, Multi-Layer Spatial Filters, and "Explore Nearby" Interconnected Graph
 */

const GeoEngine = (() => {
  const EARTH_RADIUS_KM = 6371;

  function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
  }

  function formatDistance(distKm) {
    if (distKm < 1) {
      return `${Math.round(distKm * 1000)} m`;
    }
    return `${distKm.toFixed(1)} km`;
  }

  function findWithinRadius(centerLat, centerLng, radiusKm = 1.0, entityList = []) {
    if (!entityList || !Array.isArray(entityList)) return [];
    return entityList
      .map(item => {
        const lat = item.location?.lat || item.latitude || item.lat;
        const lng = item.location?.lng || item.longitude || item.lng;
        if (typeof lat !== 'number' || typeof lng !== 'number') return null;
        const distKm = calculateDistanceKm(centerLat, centerLng, lat, lng);
        return { ...item, distanceKm: distKm, formattedDistance: formatDistance(distKm) };
      })
      .filter(item => item !== null && item.distanceKm <= radiusKm)
      .sort((a, b) => a.distanceKm - b.distanceKm);
  }

  // Interconnected "Explore Nearby" Radial Knowledge Graph
  function getExploreNearbyGraph(centerLat, centerLng, currentId = '') {
    const allPlaces = typeof PlacesData !== 'undefined' ? PlacesData : [];
    const allGhats = typeof GhatsData !== 'undefined' ? GhatsData : [];
    const allFood = typeof FoodData !== 'undefined' ? FoodData.vendors : [];
    const allMarkets = typeof MarketsData !== 'undefined' ? MarketsData.markets : [];
    const allHotels = typeof HotelsData !== 'undefined' ? HotelsData : [];

    const combinedPlaces = [...allPlaces, ...allGhats].filter(p => p.id !== currentId);

    return {
      within500m: {
        places: findWithinRadius(centerLat, centerLng, 0.5, combinedPlaces),
        food: findWithinRadius(centerLat, centerLng, 0.5, allFood),
        markets: findWithinRadius(centerLat, centerLng, 0.5, allMarkets),
        hotels: findWithinRadius(centerLat, centerLng, 0.5, allHotels)
      },
      within1km: {
        places: findWithinRadius(centerLat, centerLng, 1.2, combinedPlaces),
        food: findWithinRadius(centerLat, centerLng, 1.2, allFood),
        markets: findWithinRadius(centerLat, centerLng, 1.2, allMarkets),
        hotels: findWithinRadius(centerLat, centerLng, 1.5, allHotels)
      },
      within2km: {
        all: findWithinRadius(centerLat, centerLng, 2.0, [...combinedPlaces, ...allFood, ...allMarkets, ...allHotels])
      }
    };
  }

  return {
    calculateDistanceKm,
    formatDistance,
    findWithinRadius,
    getExploreNearbyGraph
  };
})();

if (typeof module !== 'undefined') module.exports = GeoEngine;
