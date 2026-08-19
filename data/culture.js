/**
 * BANARASI BABU — MASTER KNOWLEDGE DATABASE: ART, MUSIC & CULTURE
 * Banaras Gharana, Bismillah Khan Shehnai, Dhrupad, Akhara Wrestling, Zari Weaving, and Paan Lore
 */

const CultureData = {
  traditions: [
    {
      id: 'culture_music_gharana',
      title: 'Banaras Music Gharana (Tabla, Pakhawaj & Vocal)',
      category: 'Indian Classical Music',
      description: 'One of the most illustrious Indian classical music traditions founded by Pandit Ram Sahai in the late 18th century. Known for dynamic tabla bols, Thumri, Dadra, Chaiti, Kajari, and Hori singing styles.',
      keyLegends: ['Pandit Kishan Maharaj (Tabla)', 'Pandit Samta Prasad / Gudai Maharaj (Tabla)', 'Girija Devi (Queen of Thumri)', 'Pandit Rajan & Sajan Mishra (Vocal)'],
      whereToExperience: 'Sankat Mochan Sangeet Samaroh (Annual April), Ganga Mahotsav (Nov), Kabir Chaura Musicians Quarter.',
      bestTime: 'Evenings during winter music festivals.'
    },
    {
      id: 'culture_shehnai_bismillah',
      title: 'The Sacred Shehnai of Ustad Bismillah Khan',
      category: 'Instrumental Music',
      description: 'Bharat Ratna Ustad Bismillah Khan elevated the humble wedding shehnai to the global concert stage, practicing his daily dawn riyaz for hours at the Balaji Ghat and Vishwanath corridor.',
      keyLegends: ['Bharat Ratna Ustad Bismillah Khan (1916–2006)'],
      whereToExperience: 'Daily dawn and dusk Shehnai recitals at Kashi Vishwanath Dham and Sarai Harha memorial museum.',
      bestTime: 'Dawn during temple Mangala Aarti.'
    },
    {
      id: 'culture_dhrupad_tradition',
      title: 'Dhrupad & Ancient Sound Traditions (Naad Brahma)',
      category: 'Vedic Classical Heritage',
      description: 'The oldest surviving classical vocal and instrumental form in India, invoking meditative Vedic Sanskrit syllables on Rudra Veena, Surbahar, and Pakhawaj.',
      keyLegends: ['Maharaja Banaras Royal Patrons', 'Dagar Vani and Vishnupur Maestros'],
      whereToExperience: 'All-Night Dhrupad Sangeet Mela at Tulsi Ghat (February each year under open starlit skies).',
      bestTime: 'Annual February Mela (All Night).'
    },
    {
      id: 'culture_akhara_wrestling',
      title: 'Ghatside Akhara & Pehalwani Wrestling Culture',
      category: 'Living Martial Heritage',
      description: 'Generations of Banarasi pehalwans (wrestlers) begin their dawn routine at 05:00 AM with mud-pit wrestling, swinging heavy wooden gada (maces), exercising with stone joris, followed by pure milk, almond paste (thandai), and grams.',
      keyLegends: ['Tulsi Akhada (Founded by Goswami Tulsidas in 16th century)', 'Gaya Seth Akhada', 'Swaminath Akhada'],
      whereToExperience: 'Tulsi Ghat and Assi Ghat clay mud pits between 05:30 AM and 07:30 AM.',
      bestTime: 'Early morning sunrise.'
    },
    {
      id: 'culture_silk_zari_craft',
      title: 'Master Handloom Zari Silk Brocade Weaving',
      category: 'GI-Tagged Textile Craft',
      description: 'Centuries-old Persian-Indian handloom art where pure mulberry silk (Katan) is intertwined with real gold and silver threads (Zari) using intricate Jacquard and Naqsha punch-card looms.',
      keyLegends: ['Master Weavers of Madanpura, Chowk, and Pilikothi'],
      whereToExperience: 'Live loom tours in Madanpura & Pilikothi weaver quarters, and Trade Facilitation Centre (TFC) Bada Lalpur.',
      bestTime: '11:00 AM – 05:00 PM.'
    }
  ]
};

if (typeof module !== 'undefined') module.exports = CultureData;
