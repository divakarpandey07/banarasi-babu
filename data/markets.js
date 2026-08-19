/**
 * BANARASI BABU — MASTER KNOWLEDGE DATABASE: MARKETS, SHOPPING & GI CRAFTS
 * Standardized Schema: Traditional Markets, Sub-Markets, Products, Bargaining, Parking, and Walking Difficulty
 */

const MarketsData = {
  products: [
    {
      id: 'prod_banarasi_saree',
      name: 'Pure Katan & Kora Silk Banarasi Saree with Real Zari',
      slug: 'pure-banarasi-silk-saree',
      category: 'Textiles & Silk',
      craftType: 'Handloom Silk Weaving (GI Tagged)',
      description: 'Master handloom brocades woven with metallic gold and silver threads (Zari) depicting Mughal floral motifs (butidar, jhallar, bel, shikargah). An essential heritage heirloom.',
      priceRange: 'Powerloom: ₹2,500–₹8,000 | Pure Handloom Silk: ₹12,000–₹1,50,000+',
      buyingAdvice: 'Always look for the Silk Mark India tag and check the reverse side of the zari warp for authentic handloom knots.',
      photos: ['photos/banarasi_sari.jpg'],
      topMarkets: ['mkt_chowk', 'mkt_godowlia'],
      sources: ['Silk Mark Organisation of India', 'Handloom Export Promotion Council'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'prod_beaten_brass',
      name: 'Handcrafted Brass & Copper Sacred Vessels',
      slug: 'handcrafted-brass-vessels',
      category: 'Metal Handicrafts',
      craftType: 'Metal Repoussé & Engraving (Thathera Art - GI Registered)',
      description: 'Traditional Ganga water vessels (gangajali, lotas), tiered brass aarti lamps (diya stand), dhoop-daan, and hand-chiseled resonant temple bells.',
      priceRange: '₹200 to ₹15,000 (Sold primarily by raw metal weight per kg plus artisanship)',
      buyingAdvice: 'Best bought directly from hereditary craftsmen in Thatheri Bazaar by checking the weight.',
      photos: ['photos/galiyan.jpg'],
      topMarkets: ['mkt_thatheri_bazaar', 'mkt_chowk'],
      sources: ['Thathera Artisan Union', 'UP Handicrafts'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'prod_rudraksha_sphatik',
      name: 'Natural Nepali Rudraksha & Sphatik Malas',
      slug: 'rudraksha-sphatik-malas',
      category: 'Spiritual Artifacts',
      craftType: 'Sacred Beads & Gemstones',
      description: 'Authentic 1 to 14 Mukhi Nepali Rudraksha beads, quartz crystal (Sphatik) Shiva Lingams, sandalwood beads, and pure camphor (Bhimseni Kapoor).',
      priceRange: '₹100 to ₹10,000+ (Based on mukhis and laboratory authenticity certification)',
      buyingAdvice: 'Buy only with lab authenticity certificates or from established traditional temple stalls.',
      photos: ['photos/kashi_vishwanath.jpg'],
      topMarkets: ['mkt_vishwanath_gali', 'mkt_godowlia'],
      sources: ['Vedic Gemological Society'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    }
  ],

  markets: [
    {
      id: 'mkt_chowk',
      name: 'Chowk Wholesale Silk Market',
      slug: 'chowk-silk-market',
      area: 'Chowk',
      latitude: 25.3119,
      longitude: 83.0094,
      timings: '11:00 AM – 08:30 PM (Closed Sundays)',
      famousFor: ['Pure Banarasi Silk Sarees', 'Brocade Fabrics', 'Zari Dupattas', 'Wholesale Handlooms'],
      description: 'The ancient historic nerve-center of Banarasi silk trade with multi-generational Gaddis (weaver sales floors) tucked inside labyrinthine stone lanes.',
      bargainingDifficulty: 'Moderate (Fixed wholesale rates in authentic master weaver cooperatives)',
      walkingDifficulty: 'Pedestrian only; stone-paved lanes, vehicles prohibited',
      parkingInfo: 'Park at Maidagin Multi-level Parking (600m walk) or Godowlia Parking',
      photos: ['photos/banarasi_sari.jpg'],
      sources: ['Varanasi Vastra Vyapar Mandal'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'mkt_thatheri_bazaar',
      name: 'Thatheri Bazaar (Metal Crafts)',
      slug: 'thatheri-bazaar',
      area: 'Chowk',
      latitude: 25.3112,
      longitude: 83.0088,
      timings: '10:30 AM – 08:00 PM (Closed Sundays)',
      famousFor: ['Brass Pooja Utensils', 'Copper Pitchers', 'Temple Bells', 'Aarti Lamps', 'Gulabi Meenakari'],
      description: 'Centuries-old metal-beating bazaar where hereditary Thatheras hand-forge sacred ritual vessels.',
      bargainingDifficulty: 'Low (Pricing is directly determined by the raw metal weight per kilogram plus labor)',
      walkingDifficulty: 'Very narrow historical pedestrian alley',
      parkingInfo: 'Park at Maidagin Town Hall parking and walk 400m',
      photos: ['photos/galiyan.jpg'],
      sources: ['UP Handicrafts Board'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'mkt_vishwanath_gali',
      name: 'Vishwanath Gali Bazaar',
      slug: 'vishwanath-gali-market',
      area: 'Godowlia / Dashashwamedh',
      latitude: 25.3095,
      longitude: 83.0098,
      timings: '06:00 AM – 09:30 PM (Open All 7 Days)',
      famousFor: ['Rudraksha Mala Beads', 'Brass Shiva Idols', 'Camphor & Chandan', 'Glass Bangles', 'Local Sweets'],
      description: 'The buzzing spiritual bazaar leading to the Golden Temple filled with sacred souvenir stalls, glass bangles, and street food.',
      bargainingDifficulty: 'High (Bargaining customary for souvenir stalls)',
      walkingDifficulty: 'Crowded pedestrian corridor with security checks',
      parkingInfo: 'Godowlia Multi-level Parking (200m)',
      photos: ['photos/kashi_vishwanath.jpg'],
      sources: ['Dashashwamedh Vyapar Mandal'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'mkt_godowlia',
      name: 'Godowlia Crossing Market',
      slug: 'godowlia-market-varanasi',
      area: 'Godowlia',
      latitude: 25.3085,
      longitude: 83.0060,
      timings: '10:00 AM – 09:30 PM (Daily)',
      famousFor: ['Readymade Silk Sarees', 'Brocade Suit Materials', 'Footwear', 'Street Chaat & Sweets'],
      description: 'The liveliest commercial heartbeat connecting Dashashwamedh Ghat to the city. Lined with premier retail saree showrooms, street stalls, and historic sweet shops.',
      bargainingDifficulty: 'Moderate (Showrooms fixed, street vendors negotiable)',
      walkingDifficulty: 'Pedestrian plaza (Vehicles restricted after 04:00 PM)',
      parkingInfo: 'Godowlia Multi-level Car Parking adjacent to crossing',
      photos: ['photos/galiyan.jpg'],
      sources: ['Godowlia Traders Association'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    }
  ]
};

if (typeof module !== 'undefined') module.exports = MarketsData;
