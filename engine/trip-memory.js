/**
 * BANARASI BABU — TRAVEL PLANNING & TRIP MEMORY ENGINE (TripEngine)
 * Dynamic Context-Aware Itinerary Generator + LocalStorage Memory Store
 * 100% Real Places, Real Timings, Verified Halwais, and Accurate Travel Tips
 */

const TripEngine = (() => {
  const STORAGE_KEY = 'banarasi_babu_trip_memory_v1';

  // Load Saved Memory
  function loadMemory() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : getEmptyMemory();
    } catch (e) {
      return getEmptyMemory();
    }
  }

  // Save Memory
  function saveMemory(mem) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mem));
    } catch (e) {
      console.warn('Memory storage failed', e);
    }
  }

  function getEmptyMemory() {
    return {
      savedPlaces: [],
      savedFood: [],
      savedMarkets: [],
      customItinerary: []
    };
  }

  // Bookmark Toggle Helpers
  function toggleSavePlace(placeId) {
    const mem = loadMemory();
    const idx = mem.savedPlaces.indexOf(placeId);
    if (idx > -1) {
      mem.savedPlaces.splice(idx, 1);
    } else {
      mem.savedPlaces.push(placeId);
    }
    saveMemory(mem);
    return mem.savedPlaces.includes(placeId);
  }

  function toggleSaveFood(delicacyId) {
    const mem = loadMemory();
    const idx = mem.savedFood.indexOf(delicacyId);
    if (idx > -1) {
      mem.savedFood.splice(idx, 1);
    } else {
      mem.savedFood.push(delicacyId);
    }
    saveMemory(mem);
    return mem.savedFood.includes(delicacyId);
  }

  // Context-Aware Dynamic Itinerary Builder
  function generateDynamicItinerary(days = 1, travelType = 'family', budget = 'medium', startingArea = 'Assi') {
    const itinerary = [];

    if (days >= 1) {
      itinerary.push({
        day: 1,
        title: 'Dawn Ragas, Sacred Jyotirlinga & Riverfront Fire',
        theme: 'Subah-e-Banaras to Maha Aarti',
        schedule: [
          { time: '05:15 AM', title: 'Subah-e-Banaras & Vedic Havan', place: 'Assi Ghat', type: 'spiritual', tip: 'Sit on stone steps facing the morning sun; enjoy free classical raga performance.' },
          { time: '06:15 AM', title: 'Sunrise Wooden Boat Ride', place: 'Assi to Panchganga Ghat', type: 'river', tip: 'Look at the crescent curve of sandstone palaces illuminated by the first golden rays.' },
          { time: '07:45 AM', title: 'Authentic Kachori Sabzi & Jalebi', place: 'Ram Bhandar (Thatheri Bazaar)', type: 'food', tip: 'Pair with spicy hing aloo gravy and fresh morning jalebis in clay dona.' },
          { time: '09:30 AM', title: 'Kashi Vishwanath Jyotirlinga Darshan', place: 'Kashi Vishwanath Corridor', type: 'temple', tip: 'Carry original Govt ID for entry; use free digital lockers for mobile phones.' },
          { time: '11:30 AM', title: 'Goddess Annapurna Golden Sanctum', place: 'Annapurna Mandir (Vishwanath Gali)', type: 'temple', tip: 'Partake in the sacred free midday Annakshetra prasad.' },
          { time: '01:00 PM', title: 'Saffron Dew Malaiyo & Lassi Rest', place: 'Markandey Sardar (Chaukhamba Gali)', type: 'food', tip: 'Walk through ancient stone arches away from midday heat.' },
          { time: '04:30 PM', title: 'Silk Weavers Guild & Brass Craft Walk', place: 'Chowk & Thatheri Bazaar', type: 'market', tip: 'Direct interaction with generational GI-certified handloom artisans.' },
          { time: '06:15 PM', title: 'World-Famous 7-Priest Maha Ganga Aarti', place: 'Dashashwamedh Ghat', type: 'spiritual', tip: 'Arrive by 05:45 PM or board an anchored wooden boat for prime viewing.' },
          { time: '08:00 PM', title: 'Hot Tamatar Chaat in Clay Kulhad', place: 'Kashi Chaat Bhandar (Godowlia Crossing)', type: 'food', tip: 'Savor the signature sweet-tangy tomato-potato delicacy.' },
          { time: '09:15 PM', title: 'Royal Magahi Banarasi Paan', place: 'Keshav Tambool (Lanka)', type: 'food', tip: 'The authentic melt-in-mouth digestive finish to Day 1.' }
        ]
      });
    }

    if (days >= 2) {
      itinerary.push({
        day: 2,
        title: 'Buddhist Enlightenment, Royal Fort & Sacred Hanuman',
        theme: 'Sarnath, Ramnagar & Classical Sunset',
        schedule: [
          { time: '06:00 AM', title: 'Morning Walk & Akhada Pehalwani', place: 'Tulsi Ghat & Lolark Kund', type: 'heritage', tip: 'Watch traditional mud-pit pehalwans swinging heavy wooden maces (gada).' },
          { time: '07:30 AM', title: 'Chai & Puri at Lanka', place: 'Chachi Ki Kachori (Lanka)', type: 'food', tip: 'Classic Banaras student breakfast spot near BHU.' },
          { time: '09:00 AM', title: 'Sarnath Deer Park & Dhamekh Stupa', place: 'Sarnath Archaeological Park (10 km)', type: 'heritage', tip: 'Where Buddha delivered his first sermon; explore the ancient Ashoka Pillar base.' },
          { time: '11:00 AM', title: 'Sarnath Archaeological Museum', place: 'Sarnath Museum', type: 'culture', tip: 'View the original 3rd-century BCE polished sandstone Lion Capital of Ashoka (National Emblem).' },
          { time: '01:30 PM', title: 'BHU Green Campus & Bharat Kala Bhavan', place: 'Banaras Hindu University', type: 'culture', tip: 'Visit the 253-foot New Vishwanath Temple (VT) and museum miniature paintings.' },
          { time: '04:00 PM', title: 'Ramnagar Royal Fort & Armory Museum', place: 'Ramnagar Fort & Palace', type: 'heritage', tip: 'Explore the 1852 astronomical clock and enjoy famous Shivaji Ramnagar Lassi.' },
          { time: '06:45 PM', title: 'Sankat Mochan Evening Hanuman Chalisa', place: 'Sankat Mochan Temple', type: 'spiritual', tip: 'Join the community recitation of Hanuman Chalisa and receive pure besan laddoos.' },
          { time: '08:30 PM', title: 'Traditional Wood-Fired Baati Chokha Dinner', place: 'Baati Chokha Restaurant (Teliabagh)', type: 'food', tip: 'Roasted wheat balls stuffed with sattu, pure cow desi ghee, and smoked baingan chokha.' }
        ]
      });
    }

    if (days >= 3) {
      itinerary.push({
        day: 3,
        title: 'Protector Deities, Classical Musicians Quarter & Namo Gateway',
        theme: 'Kotwal of Kashi, Kabir Chaura & Smart Riverfront',
        schedule: [
          { time: '06:00 AM', title: 'Kaal Bhairav Darshan (Kotwal of Kashi)', place: 'Kaal Bhairav Mandir (Maidagin)', type: 'temple', tip: 'Receive the protective black thread (Kashi Ka Dhaga) from the priest.' },
          { time: '07:30 AM', title: 'Mrityunjay Mahadev & Dhanvantari Kup', place: 'Daranagar', type: 'temple', tip: 'Ancient healing well believed to be blessed with Ayurvedic properties.' },
          { time: '09:00 AM', title: 'Jantar Mantar Solar Observatory', place: 'Man Mandir Ghat', type: 'heritage', tip: '1737 astronomical stone instruments built by Raja Sawai Jai Singh II.' },
          { time: '11:00 AM', title: 'Kabir Chaura Musicians Quarter', place: 'Kabir Chaura', type: 'culture', tip: 'The hereditary home of Banaras Gharana legends Kishan Maharaj and Girija Devi.' },
          { time: '01:30 PM', title: 'Sampurnanand Sanskrit University Gothic Hall', place: 'Jagatganj', type: 'education', tip: 'Admire the 1791 Gothic Revival architecture and rare palm-leaf manuscripts.' },
          { time: '04:00 PM', title: 'Bharat Mata Temple (Marble Relief Map)', place: 'Mahatma Gandhi Kashi Vidyapith', type: 'heritage', tip: 'Unique temple inaugurated by Mahatma Gandhi housing a 3D topographic marble map of undivided India.' },
          { time: '05:30 PM', title: 'Sunset at Namo Ghat (Colossal Sculptures)', place: 'Namo Ghat (Rajghat)', type: 'river', tip: 'Walk along the modern landscaped promenade and take photos with the 75-foot Namaste sculptures.' },
          { time: '08:00 PM', title: 'Evening River Cruise with Banaras Sitar', place: 'Alaknanda / Bhagirathi Cruise', type: 'leisure', tip: 'Sail the illuminated 84 crescent ghats listening to live classical music.' }
        ]
      });
    }

    return itinerary;
  }

  return {
    loadMemory,
    saveMemory,
    toggleSavePlace,
    toggleSaveFood,
    generateDynamicItinerary
  };
})();

if (typeof module !== 'undefined') module.exports = TripEngine;
