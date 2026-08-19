/**
 * BANARASI BABU — MASTER KNOWLEDGE DATABASE: TRANSPORT & EMERGENCY SAFETY
 * Standardized Schema with Source Tracking, Emergency Helplines, Police, Hospitals, and Boat Fares
 */

const TransportSafetyData = {
  emergencyServices: [
    {
      id: 'emg_police_control',
      name: 'Varanasi Police Control Room & Tourist Police Helpdesk',
      slug: 'tourist-police-varanasi',
      category: 'Emergency Services',
      description: 'Dedicated Tourist Police booths stationed at Dashashwamedh Ghat, Kashi Vishwanath Corridor, Assi Ghat, and Cantt Railway Station.',
      contact: '112 (National Emergency) / 0542-2508000 (Varanasi Tourist Police)',
      address: 'Dashashwamedh Police Station & Cantt Railway Station',
      latitude: 25.3080,
      longitude: 83.0070,
      timings: '24 Hours Open',
      entry_fee: 'Free',
      tags: ['Police', 'Tourist Police', 'Lost & Found', 'Safety Assistance', '24x7'],
      sources: ['Varanasi Police Commissionerate'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'emg_women_helpline',
      name: 'UP Women Powerline & Mission Shakti Helpline',
      slug: 'women-safety-varanasi',
      category: 'Emergency Services',
      description: '24/7 dedicated rapid response and security assistance for women travelers in Varanasi.',
      contact: '1090 (Women Helpline) / 181 (Women in Distress)',
      address: 'All Varanasi Police Circles & Mobile Pink Patrols',
      latitude: 25.3176,
      longitude: 82.9739,
      timings: '24 Hours Open',
      entry_fee: 'Free',
      tags: ['Women Safety', 'Pink Booths', 'Emergency', '24x7'],
      sources: ['UP Police Women Security Wing'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'emg_bhu_trauma',
      name: 'Sir Sunderlal Hospital & BHU Apex Trauma Centre',
      slug: 'bhu-trauma-hospital',
      category: 'Emergency Services',
      description: 'The largest super-specialty tertiary care hospital and emergency trauma centre in Eastern UP with 24/7 emergency ICU and blood bank.',
      contact: '0542-2369299 / 108 (Ambulance)',
      address: 'BHU Campus, Lanka, Varanasi 221005',
      latitude: 25.2750,
      longitude: 82.9980,
      timings: '24 Hours Emergency',
      entry_fee: 'Nominal OPD / Free Emergency Care',
      tags: ['Hospital', 'Emergency ICU', 'Trauma Centre', 'Blood Bank'],
      sources: ['Institute of Medical Sciences BHU'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    },
    {
      id: 'emg_marwari_hospital',
      name: 'Marwari Hindu Hospital (Old City Emergency)',
      slug: 'marwari-hospital-godowlia',
      category: 'Emergency Services',
      description: 'Closest emergency healthcare facility to the ghats, Godowlia, and Kashi Vishwanath Corridor.',
      contact: '0542-2451033',
      address: 'Near Godowlia Crossing, Bangali Tola, Varanasi 221001',
      latitude: 25.3050,
      longitude: 83.0075,
      timings: '24 Hours Emergency',
      entry_fee: 'Charitable / Subsidized',
      tags: ['Hospital', 'Old City Medical', 'Ghat Emergency'],
      sources: ['Marwari Hospital Trust'],
      last_verified: '2026-08-24',
      verification_status: 'verified'
    }
  ],

  transportGuidelines: {
    boatFares: [
      {
        boatType: 'Traditional Hand-Rowed Wooden Boat (Oar Boat)',
        capacity: 'Up to 6 Persons',
        rateStandard: '₹500 – ₹800 / hour (Round trip Assi to Manikarnika)',
        rateAartiSpecial: '₹1,200 – ₹2,500 for entire boat during evening Ganga Aarti',
        safetyTip: 'Life jackets mandatory by law. Board only from designated police-tagged boatmen counters.'
      },
      {
        boatType: 'Motorized Wooden Boat / Bajra',
        capacity: '15 to 35 Persons',
        rateStandard: '₹1,500 – ₹3,000 / hour',
        rateAartiSpecial: '₹3,500 – ₹8,000 during Dev Deepawali / Maha Shivratri',
        safetyTip: 'Verify boat license number before departure.'
      },
      {
        boatType: 'Electric Catamaran & Luxury AC Cruise (Alaknanda / Bhagirathi)',
        capacity: '60 to 100 Persons',
        rateStandard: '₹800 – ₹1,200 per passenger (Includes audio commentary & tea)',
        rateAartiSpecial: '₹1,500 per passenger for evening dinner cruise',
        safetyTip: 'Book in advance via Varanasi Smart City or official cruise portals.'
      }
    ],
    localTransit: [
      {
        mode: 'E-Rickshaw (Toto)',
        route: 'Godowlia – Cantt Station – Lanka – Maidagin',
        fare: '₹15 – ₹30 on shared basis | ₹100 – ₹200 for private hire',
        tip: 'Eco-friendly and fastest way to navigate old city outskirts where cars are banned.'
      },
      {
        mode: 'Auto Rickshaw (Tuk-Tuk)',
        route: 'City-wide connections (Cantt to Assi / Sarnath / Airport)',
        fare: 'Metered / Fixed: ₹150–₹250 for intra-city | ₹800–₹1,000 for Airport (VNS)',
        tip: 'Confirm fare before boarding or book via app services.'
      },
      {
        mode: 'Walking in Historic Lanes (Galis)',
        route: 'Vishwanath Gali, Thatheri Bazaar, Chowk, Bangali Tola',
        fare: 'Free',
        tip: 'Wear comfortable slip-on walking shoes. Follow signboards with QR codes.'
      }
    ]
  },

  touristSafetyTips: [
    { title: 'Temple Dress Code & Valuables', advice: 'Wear traditional or modest clothing covering shoulders and knees. Electronic devices and leather accessories are barred inside Kashi Vishwanath inner sanctum.' },
    { title: 'Scam Awareness (Wood for Cremation)', advice: 'At Manikarnika & Harishchandra Ghats, do not give money to touts asking for "donations to buy wood for poor families". These are known scams.' },
    { title: 'Silk Saree Buying Rule', advice: 'Never let taxi or auto drivers take you to their "commission shops". Visit government-certified weaver cooperatives in Chowk or Pilikothi and demand the Silk Mark tag.' },
    { title: 'Boat Safety & Life Jackets', advice: 'Always demand life jackets from the boatman before pushing off. Do not stand on the boat railing while taking selfies.' }
  ]
};

if (typeof module !== 'undefined') module.exports = TransportSafetyData;
