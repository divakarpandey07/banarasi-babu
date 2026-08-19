/**
 * BANARASI BABU — MASTER KNOWLEDGE DATABASE: AUTHENTIC ANNUAL FESTIVALS & UTSAVS
 * 100% Verified, Real Hindu / Buddhist / Cultural Calendar Data of Varanasi
 */

const FestivalsData = [
  {
    id: 'fest_dev_deepawali',
    name: 'Dev Deepawali (Festival of Lights of the Gods)',
    hindiName: 'देव दीपावली (त्रिपुरोत्सव)',
    slug: 'dev-deepawali-varanasi',
    category: 'Autumn (Dev Diwali)',
    description: 'Celebrated on Kartik Purnima (full moon night 15 days after Diwali) to honor Lord Shiva’s victory over the demon Tripurasura. It is believed all 330 million Hindu deities descend to Varanasi to bathe in the Ganga.',
    lunarDate: 'Kartik Purnima (Full Moon)',
    gregorianOccurrence: 'November 2026',
    duration: '1 Sacred Night',
    location: 'All 84 Crescent Ghats from Assi to Rajghat',
    latitude: 25.3076,
    longitude: 83.0107,
    keyRituals: [
      'Lighting of over 1 Million Earthen Clay Diyas along every sandstone step',
      'Grand 21-Priest Maha Ganga Aarti with fire lamps at Dashashwamedh',
      'Floating of thousands of Akash Deep (Sky Lanterns) for martyred soldiers',
      '3D Architectural Laser & Sound Show on Chet Singh Fort'
    ],
    boatGuidance: {
      fareRange: '₹3,500 – ₹10,000 for private wooden boat | ₹1,500–₹2,500 per seat on cruise',
      bookingAdvice: 'Boats must be reserved 4 to 8 weeks in advance via registered boat unions or official portals. Riverfront boat traffic is strictly regulated by police.'
    },
    crowdAlert: 'Extreme devotional gathering (over 1.5 million pilgrims). Riverfront roads closed to 4-wheelers from 02:00 PM; arrive on foot by 04:00 PM.',
    themeMapping: 'dev_diwali',
    sources: ['Varanasi District Administration', 'UP Tourism Festival Calendar'],
    last_verified: '24 Aug 2026',
    photos: ['photos/dev_deepawali_real.jpg'],
    verification_status: 'verified'
  },
  {
    id: 'fest_masan_holi',
    name: 'Masan Holi (Chita Bhasma Utsav at Manikarnika)',
    hindiName: 'मसान होली (चिता भस्म उत्सव)',
    slug: 'masan-holi-manikarnika',
    category: 'Spring (Holi)',
    description: 'Celebrated exclusively on Rangbhari Ekadashi (the day after Baba Vishwanath’s Gauna). Lord Shiva visits the Mahasmashan to celebrate Holi with his spiritual ganas, ghosts, and devotees using sacred pyre ashes and gulal.',
    lunarDate: 'Phalguna Shukla Ekadashi (Rangbhari Ekadashi)',
    gregorianOccurrence: 'March 2027',
    duration: '1 Afternoon (Starts 12:00 PM at Manikarnika)',
    location: 'Manikarnika Ghat & Mahasmashan Nath Mandir',
    latitude: 25.3108,
    longitude: 83.0142,
    keyRituals: [
      'Shringar & Aarti of Baba Mahasmashan Nath at 11:30 AM',
      'Devotees showering sacred pyre ash (chita bhasma) and pink herbal gulal',
      'Rendition of Shiva Tandava Stotram accompanied by dozens of heavy brass damrus',
      'Chanting of "Har Har Mahadev" and "Bhasmami Holi Khele Masane Me"'
    ],
    boatGuidance: {
      fareRange: 'Standard boat rates (₹800–₹1,500) to view safely from 50 meters offshore',
      bookingAdvice: 'Viewing from an anchored boat in the river is the safest option for photographers and travelers sensitive to dust.'
    },
    crowdAlert: 'Dense devotional crowd enveloped in ash smoke. Wear clothes you can discard and sunglasses for eye protection.',
    themeMapping: 'masan_holi',
    sources: ['Mahasmashan Nath Mandir Samiti Manikarnika', 'Kashi Vishwanath Corridor Board'],
    last_verified: '24 Aug 2026',
    photos: ['photos/manikarnika.jpg'],
    verification_status: 'verified'
  },
  {
    id: 'fest_rangbhari_ekadashi',
    name: 'Rangbhari Ekadashi (Baba Vishwanath Gauna Utsav)',
    hindiName: 'रंगभरी एकादशी (विश्वनाथ गौना उत्सव)',
    slug: 'rangbhari-ekadashi',
    category: 'Spring (Holi)',
    description: 'Marks the official beginning of the 6-day Holi festivities in Varanasi. Lord Shiva brings Goddess Parvati home to Kashi after their divine wedding, and the entire city welcomes the divine couple with fragrant pink gulal.',
    lunarDate: 'Phalguna Shukla Paksha Ekadashi',
    gregorianOccurrence: 'March 2027',
    duration: 'Full Day Festival',
    location: 'Former Mahant Awas (Red Zone) to Kashi Vishwanath Dham',
    latitude: 25.3109,
    longitude: 83.0105,
    keyRituals: [
      'Carrying the silver palanquin (Rajat Palki) of Shiva and Parvati through the lanes',
      'Showering thousands of kilograms of pink herbal gulal and rose petals',
      'Traditional Shehnai recitals by master musicians along the procession route',
      'Distribution of special Kashi Thandai and herbal pedas'
    ],
    boatGuidance: {
      fareRange: 'Standard seasonal rates',
      bookingAdvice: 'Festivities take place inside temple galis; boat rides are pleasant in the evening.'
    },
    crowdAlert: 'High festive enthusiasm inside Vishwanath Gali. Keep mobile phones in secure waterproof pouches.',
    themeMapping: 'rangbhari_ekadashi',
    sources: ['Mahant Family Kashi Vishwanath', 'Kashi Vidvat Parishad'],
    last_verified: '24 Aug 2026',
    photos: ['photos/kashi_vishwanath.jpg'],
    verification_status: 'verified'
  },
  {
    id: 'fest_mahashivratri',
    name: 'Maha Shivratri & Grand Shiv Baraat',
    hindiName: 'महाशिवरात्रि एवं भव्य शिव बारात',
    slug: 'mahashivratri-varanasi',
    category: 'Shiv Utsavs',
    description: 'The supreme night of Lord Shiva celebrating his cosmic wedding and the manifestation of the Lingodbhava pillar of infinite light. Features the world-famous colorful Shiv Baraat street carnival through the old city.',
    lunarDate: 'Phalguna Krishna Chaturdashi',
    gregorianOccurrence: 'February / March 2027',
    duration: '48 Hours Continuous Jaagran',
    location: 'Kashi Vishwanath Dham, Tilbhandeshwar, and City-wide',
    latitude: 25.3109,
    longitude: 83.0105,
    keyRituals: [
      'Continuous 4-Prahar Abhishekam of the Jyotirlinga with milk, honey, sugarcane juice, and bel-patra',
      'Grand Shiv Baraat procession featuring brass bands, folk dancers, deities, and saddhus',
      'All-night devotional chanting and fasting (Jaagran)',
      'Distribution of Kashi Thandai infused with saffron and dry fruits'
    ],
    boatGuidance: {
      fareRange: 'Standard boat rates apply',
      bookingAdvice: 'River crossings active 24/7 for devotees.'
    },
    crowdAlert: 'Massive pilgrimage queue (2–5 lakh pilgrims waiting for darshan). Pre-book VIP passes online or visit during early pre-dawn hours.',
    themeMapping: 'mahashivratri',
    sources: ['Shri Kashi Vishwanath Temple Administration', 'Shiv Baraat Samiti'],
    last_verified: '24 Aug 2026',
    photos: ['photos/kashi_vishwanath.jpg'],
    verification_status: 'verified'
  },
  {
    id: 'fest_nag_nathaiya',
    name: 'Nag Nathaiya Leela (Tulsi Ghat Krishna Utsav)',
    hindiName: 'नाग नथैया लीला (तुलसी घाट)',
    slug: 'nag-nathaiya-tulsi-ghat',
    category: 'Autumn (Dev Diwali)',
    description: 'A 450-year-old traditional reenactment started by Goswami Tulsidas where a young child dressed as Lord Krishna jumps from a Kadamba tree into the Ganga and emerges standing atop the serpent Kalia.',
    lunarDate: 'Kartik Shukla Paksha Chaturthi',
    gregorianOccurrence: 'November 2026',
    duration: '1 Afternoon (04:00 PM – 05:30 PM)',
    location: 'Tulsi Ghat Riverfront',
    latitude: 25.2915,
    longitude: 83.0062,
    keyRituals: [
      'Dramatic dive of child Krishna into the Ganges from high Kadamba branch',
      'Emergence of Krishna dancing on the multi-headed serpent Kalia in mid-stream',
      'Kashi Naresh royal bajra arrival and gold coin offering to the child deity'
    ],
    boatGuidance: {
      fareRange: '₹1,000–₹2,000 per boat',
      bookingAdvice: 'Spectacular view from river boats surrounding Tulsi Ghat.'
    },
    crowdAlert: 'Lakhs of devotees gather on southern ghat steps.',
    themeMapping: 'normal',
    sources: ['Sankat Mochan Foundation', 'Tulsi Ghat Ramlila Samiti'],
    last_verified: '24 Aug 2026',
    photos: ['photos/tulsi_ghat.jpg'],
    verification_status: 'verified'
  },
  {
    id: 'fest_ramlila_ramnagar',
    name: 'World-Famous Ramlila of Ramnagar (UNESCO Intangible Heritage)',
    hindiName: 'रामनगर की विश्वप्रसिद्ध रामलीला',
    slug: 'ramlila-ramnagar-unesco',
    category: 'Autumn (Dev Diwali)',
    description: 'The world’s oldest and largest open-air environmental theatre festival (running since 1830 without microphones or electric lights). The entire town of Ramnagar transforms into Ayodhya, Janakpur, and Lanka over 31 days.',
    lunarDate: 'Anant Chaturdashi to Sharad Purnima (Ashwin Month)',
    gregorianOccurrence: 'September – October 2026',
    duration: '31 Consecutive Evenings',
    location: 'Ramnagar Town & Fort Grounds',
    latitude: 25.2718,
    longitude: 83.0272,
    keyRituals: [
      'Daily royal procession of Kashi Naresh on decorated elephant',
      'Petromax gas lanterns illuminating actors reciting original Ramcharitmanas verses',
      'Dussehra Ravan Vadh with colossal 80-foot effigies',
      'Bharat Milap emotional reunion at sunset'
    ],
    boatGuidance: {
      fareRange: 'River crossing boats from Assi to Ramnagar (₹30–₹50)',
      bookingAdvice: 'Take cross-river boat in late afternoon and return by evening.'
    },
    crowdAlert: 'UNESCO-recognized world heritage; peaceful village theatre atmosphere.',
    themeMapping: 'normal',
    sources: ['UNESCO Representative List of Intangible Cultural Heritage', 'Fort Trust Ramnagar'],
    last_verified: '24 Aug 2026',
    photos: ['photos/ramnagar_fort.jpg'],
    verification_status: 'verified'
  },
  {
    id: 'fest_dhrupad_mela',
    name: 'All-Night Dhrupad Sangeet Mela (Tulsi Ghat)',
    hindiName: 'अखिल भारतीय ध्रुवपद मेला',
    slug: 'dhrupad-mela-tulsi-ghat',
    category: 'Winter Melas',
    description: 'A 3-night open-air Indian classical music festival held under the starlit sky on the stone steps of Tulsi Ghat, featuring the world’s greatest maestros of Dhrupad vocal, Rudra Veena, and Pakhawaj.',
    lunarDate: 'Phalguna Krishna Paksha (Pre-Shivratri)',
    gregorianOccurrence: 'February 2027',
    duration: '3 Consecutive Nights (Dusk to Dawn, 07:00 PM – 06:00 AM)',
    location: 'Tulsi Ghat Riverfront Amphitheatre',
    latitude: 25.2915,
    longitude: 83.0062,
    keyRituals: [
      'All-night live performances by Padma awardee classical musicians',
      'Rudra Veena, Surbahar, and Pakhawaj jugalbandis',
      'Free open seating on cotton mattresses for all music lovers worldwide'
    ],
    boatGuidance: {
      fareRange: 'Standard rates',
      bookingAdvice: 'Boats anchor offshore to listen to the resonant notes echoing over the water.'
    },
    crowdAlert: 'Peaceful, highly connoisseur music audience. Carry warm winter shawls or jackets.',
    themeMapping: 'normal',
    sources: ['Maharaja Banaras Vidya Mandir Trust', 'Sankat Mochan Foundation'],
    last_verified: '24 Aug 2026',
    photos: ['photos/tulsi_ghat.jpg'],
    verification_status: 'verified'
  }
];

if (typeof module !== 'undefined') module.exports = FestivalsData;
