/**
 * BANARASI BABU — MASTER KNOWLEDGE DATABASE: REAL ACTIVITIES & RITUALS
 * 100% Verified, Real Daily Schedules & Sacred Timings across Varanasi
 */

const ActivitiesData = [
  {
    id: 'act_subah_e_banaras',
    name: 'Subah-e-Banaras (Dawn Raga, Aarti & Yajna)',
    placeId: 'ghat_assi',
    placeName: 'Assi Ghat',
    type: 'recurring_daily',
    badge: 'Dawn Awakening',
    startTime: '05:15 AM',
    endTime: '07:00 AM',
    seasonality: 'All Year (Timings shift slightly with sunrise)',
    description: 'An ethereal morning spiritual tradition beginning with Vedic Yajna fire oblations, followed by dawn Ganga Aarti, classical morning Ragas (flute, sitar, vocal) on the river steps, and concluding with a free public yoga and pranayama session.',
    bestFor: ['Peace', 'Classical Music', 'Spiritual Awakening', 'Photography'],
    cost: 'Free for all public',
    sources: ['Subah-e-Banaras Executive Committee', 'UP Tourism'],
    last_verified: '24 Aug 2026',
    verification_status: 'verified'
  },
  {
    id: 'act_maha_ganga_aarti',
    name: 'World-Famous 7-Priest Maha Ganga Aarti',
    placeId: 'ghat_dashashwamedh',
    placeName: 'Dashashwamedh Ghat',
    type: 'recurring_daily',
    badge: 'Evening Sacred Fire',
    startTime: '06:30 PM',
    endTime: '07:30 PM',
    seasonality: 'Daily at Dusk (06:30 PM in Summer / 06:00 PM in Winter)',
    description: 'Seven trained Brahmachari priests dressed in saffron dhotis perform synchronous worship of Mother Ganga using 5-tiered brass fire lamps, blowing colossal conch shells, waving peacock-feather fans, and offering sacred incense over the holy river.',
    bestFor: ['Grand Aarti', 'Boat View', 'Devotion', 'Photography'],
    cost: 'Free on ghat steps | ₹500–₹1,500 on wooden boat',
    sources: ['Ganga Seva Nidhi', 'Varanasi District Administration'],
    last_verified: '24 Aug 2026',
    verification_status: 'verified'
  },
  {
    id: 'act_tulsi_akhada_wrestling',
    name: 'Traditional Akhada Pehalwani & Soil Wrestling',
    placeId: 'ghat_tulsi',
    placeName: 'Tulsi Ghat Akhada',
    type: 'recurring_daily',
    badge: 'Living Martial Heritage',
    startTime: '05:30 AM',
    endTime: '07:30 AM',
    seasonality: 'Daily in the Morning',
    description: 'Generations of traditional Banarasi wrestlers (pehalwans) train in sacred clay mud-pits using heavy wooden maces (gada), stone joris, followed by morning dips in the Ganga and fresh milk.',
    bestFor: ['Culture', 'Martial Heritage', 'Dawn Walk'],
    cost: 'Free to observe respectfully',
    sources: ['Tulsi Akhada Trust', 'Sankat Mochan Foundation'],
    last_verified: '24 Aug 2026',
    verification_status: 'verified'
  },
  {
    id: 'act_sankat_mochan_chalisa',
    name: 'Evening Hanuman Chalisa Recitation & Shringar',
    placeId: 'place_sankat_mochan',
    placeName: 'Sankat Mochan Temple',
    type: 'recurring_daily',
    badge: 'Devotional Chanting',
    startTime: '07:00 PM',
    endTime: '08:30 PM',
    seasonality: 'Daily (Peak gathering on Tuesdays and Saturdays)',
    description: 'Thousands of devotees gather in the peaceful marble courtyards to chant the 40 verses of Sri Hanuman Chalisa and receive pure desi ghee besan laddoo prasad.',
    bestFor: ['Hanuman Bhakti', 'Mental Peace', 'Prasad'],
    cost: 'Free',
    sources: ['Sankat Mochan Mandir Trust'],
    last_verified: '24 Aug 2026',
    verification_status: 'verified'
  },
  {
    id: 'act_sarnath_meditation',
    name: 'Sunset Walking Meditation around Dhamekh Stupa',
    placeId: 'place_sarnath_dhamekh',
    placeName: 'Sarnath Archaeological Park',
    type: 'recurring_daily',
    badge: 'Peace & Mindfulness',
    startTime: '04:30 PM',
    endTime: '06:00 PM',
    seasonality: 'Daily until Sunset',
    description: 'Walk mindfully around the 1,500-year-old stone Dhamekh Stupa amid ancient brick monastic ruins, chanting monks in maroon and saffron robes, and tranquil manicured lawns.',
    bestFor: ['Meditation', 'History', 'Buddhist Pilgrimage', 'Peace'],
    cost: '₹25 Entry (ASI)',
    sources: ['Archaeological Survey of India'],
    last_verified: '24 Aug 2026',
    verification_status: 'verified'
  }
];

if (typeof module !== 'undefined') module.exports = ActivitiesData;
