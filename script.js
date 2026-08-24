/**
 * BANARASI BABU — MASTER HOMEPAGE CONTROLLER
 * 9 Themes, Living 4K Parallax Background, 7s Poetic Title Rotator,
 * Open-Meteo Live Weather Sync, Multi-Layer Leaflet Map, Food Carousel & Grounded AI Concierge.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. 9-THEME DATASET WITH LOCKED PHOTO MAPPINGS & MULTI-POETIC TITLES (7s)
  // =========================================================================
  const themeData = {
    normal: {
      id: 'normal',
      mode: 'day',
      label: '🏛️ Classic Kashi',
      photo: 'photos/normal.jpg',
      moodTag: 'Classic Kashi · Everyday Living Rhythm',
      rotatingTitles: [
        'काशी को देखो नहीं —<br><i>महसूस करो।</i>',
        'जहां समय गंगा के साथ<br><i>शाश्वत बहता है।</i>',
        'अनादि काल से जाग्रत —<br><i>मुक्ति की पावन नगरी।</i>'
      ],
      subTitle: '88 Crescent Ghats · Ancient Jyotirlingas · Verified Halwais · Master Handlooms · Grounded AI.',
      themeDesc: 'Banaras is not a checklist. It is a morning boat ride into golden mist, a lane that turns into an ancient sanctum, a fragrance of kachori at dawn.',
      coords: '📍 25.3176° N, 82.9739° E · Varanasi, India',
      foodIndex: 0,
      particleType: 'golden_dust'
    },
    ganga: {
      id: 'ganga',
      mode: 'day',
      label: '🌊 Ganga Flow',
      photo: 'photos/ganga%20theme.png',
      moodTag: 'Ganga Flow · Sacred River Waters',
      rotatingTitles: [
        'पतित पावनी माँ गंगा —<br><i>अविरल, निर्मल, अनंत।</i>',
        'उत्तरवाहिनी गंगा का पावन आलिंगन —<br><i>चौरासी घाटों की अमर गाथा।</i>',
        'भोर की सुनहरी धूप और<br><i>नावों की शांत लहरें।</i>'
      ],
      subTitle: 'Where the holy river flows northwards (Uttaravahini) to embrace the crescent ghats of Kashi.',
      themeDesc: 'From dawn rowing into the winter mist at Assi to the quiet ripples beneath Darbhanga Palace, the Ganga is the heartbeat of Varanasi.',
      coords: '📍 84 Crescent Ghats · Uttaravahini Riverfront',
      foodIndex: 0,
      particleType: 'water_mist'
    },
    masan_holi: {
      id: 'masan_holi',
      mode: 'day',
      label: '🕉️ Masan Holi',
      photo: 'photos/masan%20holi.png',
      moodTag: 'Masan Holi · Sacred Pyre Ash Celebration',
      rotatingTitles: [
        'चिता भस्म और डमरू का नाद —<br><i>मृत्यु पर शिवत्व की विजय।</i>',
        'महाश्मशान में महाकाल की होली —<br><i>मुक्ति और अद्वैत का उत्सव।</i>',
        'भस्म, गुलाल और हर हर महादेव —<br><i>काशी का सबसे अलौकिक पर्व।</i>'
      ],
      subTitle: 'On Rangbhari Ekadashi, devotees play Holi with sacred ash (chita bhasma) at Manikarnika.',
      themeDesc: 'At the Mahasmashan, Shiva dances in cosmic bliss. Devotees celebrate with holy ash and gulal to the roar of Har Har Mahadev.',
      coords: '📍 Manikarnika Ghat & Mahasmashan · Rangbhari Ekadashi',
      foodIndex: 3,
      particleType: 'ash_smoke'
    },
    rangbhari_ekadashi: {
      id: 'rangbhari_ekadashi',
      mode: 'day',
      label: '🌸 Rangbhari Ekadashi',
      photo: 'photos/rang%20bhari%20ekadashi.png',
      moodTag: 'Rangbhari Ekadashi · Gauna Utsav & Gulal',
      rotatingTitles: [
        'बाबा विश्वनाथ का गौना —<br><i>काशी में रंगों की पहली पावन फुहार।</i>',
        'गुलाबी अबीर से सजी काशी —<br><i>मां पार्वती का दिव्य आगमन।</i>',
        'शहनाई की गूंज और<br><i>भक्तों का असीम आनंद।</i>'
      ],
      subTitle: 'Lord Shiva brings Goddess Parvati to Kashi in a magnificent palanquin adorned with pink gulal.',
      themeDesc: 'The official beginning of Holi in Banaras. The silver palanquin of Mahadev is showered with aromatic pink gulal across temple lanes.',
      coords: '📍 Mahant Awas to Vishwanath Corridor · Phalguna Shukla Ekadashi',
      foodIndex: 1,
      particleType: 'gulal_dust'
    },
    galiyan: {
      id: 'galiyan',
      mode: 'day',
      label: '🏮 Banaras Ki Galiyan',
      photo: 'photos/galiyan.jpg',
      moodTag: 'Banaras Ki Galiyan · Silk, Brass & Ancient Alleyways',
      rotatingTitles: [
        'बनारस की तंग गलियां —<br><i>जहां हर मोड़ पर इतिहास सांस लेता है।</i>',
        'चौक की कचौड़ी और रेशमी ज़री —<br><i>हज़ारों साल पुराना जीवंत वैभव।</i>',
        'पीतल की खनक और इत्र की महक —<br><i>काशी का असली दिल।</i>'
      ],
      subTitle: 'The labyrinthine stone lanes of Chowk, Vishwanath Gali, and Thatheri Bazaar.',
      themeDesc: 'Centuries-old wooden doorways, scent of boiling hing kachori, clinking sounds of brass artisans, and pure gold zari silks.',
      coords: '📍 Chaukhamba, Thatheri Bazaar & Vishwanath Gali',
      foodIndex: 0,
      particleType: 'golden_dust'
    },
    ganga_aarti: {
      id: 'ganga_aarti',
      mode: 'night',
      label: '🪔 Ganga Aarti',
      photo: 'photos/ganga%20aarti%20.jpg',
      moodTag: 'Maha Aarti · Fire, Bells & Conch Reverberations',
      rotatingTitles: [
        'आरती ॐ जय गंगे माता —<br><i>अग्नि, शंख और श्रद्धा का संगम।</i>',
        'दशाश्वमेध पर दीपों की महाज्वाला —<br><i>संध्या का दिव्य तेज।</i>',
        'सात अर्चकों का लयबद्ध वंदन —<br><i>गंगोत्री से सागर तक की पावन स्तुति।</i>'
      ],
      subTitle: 'Seven rhythmic priests with multi-tiered brass lamps worship the holy Ganga at dusk.',
      themeDesc: 'As the sun dips behind sandstone facades, thousands of floating diyas ignite the river into a sea of light.',
      coords: '📍 Dashashwamedh & Rajendra Prasad Ghats · 06:30 PM Daily',
      foodIndex: 2,
      particleType: 'fire_embers'
    },
    dev_diwali: {
      id: 'dev_diwali',
      mode: 'night',
      label: '✨ Dev Diwali',
      photo: 'photos/dev%20diwali.jpg',
      moodTag: 'Dev Deepawali · 1 Million Earthen Lamps',
      rotatingTitles: [
        'जब गंगा तट पर उतरते हैं<br><i>तैंतीस करोड़ देवी-देवता।</i>',
        'कार्तिक पूर्णिमा की स्वर्णिम रात्रि —<br><i>दस लाख दीपों की असीम आभा।</i>',
        'घाटों पर प्रज्वलित जगमगाता देवलोक —<br><i>काशी का सबसे भव्य प्रकाशोत्सव।</i>'
      ],
      subTitle: 'On Kartik Purnima, all 84 ghats glow with over 1 million hand-lit clay diyas.',
      themeDesc: 'Celebrated fifteen days after Diwali, it is believed that gods descend from heaven to bathe in the Ganga.',
      coords: '📍 84 Illuminated Ghats · Kartik Purnima Full Moon',
      foodIndex: 1,
      particleType: 'diya_sparks'
    },
    bhasma_aarti: {
      id: 'bhasma_aarti',
      mode: 'night',
      label: '🔱 Bhasma Aarti',
      photo: 'photos/bhasma%20aartri.png',
      moodTag: 'Bhasma Aarti · Aghor Shiv Naad & Holy Smoke',
      rotatingTitles: [
        'भस्म से सजे महाकाल —<br><i>आदि और अनंत का साक्षात्कार।</i>',
        'ब्रह्ममुहूर्त का पवित्र शंखनाद —<br><i>दिव्य विभूति का पावन अभिषेक।</i>',
        'कर्पूर गौरं करुणावतारं —<br><i>अघोरेश्वर की दिव्य चेतना।</i>'
      ],
      subTitle: 'The sacred pre-dawn ash offering before first light awakens the sanctum.',
      themeDesc: 'Enveloped in the fragrance of vibhuti, bilva leaves, and camphor, invoking the supreme ascetic aspect of Lord Shiva.',
      coords: '📍 Ancient Shiva Sanctums of Kashi · Pre-Dawn 04:00 AM',
      foodIndex: 0,
      particleType: 'ash_smoke'
    },
    mahashivratri: {
      id: 'mahashivratri',
      mode: 'night',
      label: '🌙 Mahashivratri',
      photo: 'photos/mahashivratri.png',
      moodTag: 'Mahashivratri · Shiv Baraat & All-Night Jaagran',
      rotatingTitles: [
        'जागो महादेव —<br><i>तीनों लोकों के स्वामी की महामंगल रात्रि।</i>',
        'चार प्रहर का दुग्ध व बिल्व अभिषेक —<br><i>अखंड शिव भक्ति का महासागर।</i>',
        'शिव बारात की भव्य शोभा —<br><i>डमरू, शंख और नंदी का नाद।</i>'
      ],
      subTitle: 'The divine marriage of Lord Shiva and Goddess Parvati celebrated through the night.',
      themeDesc: 'All-night continuous Char Prahar Abhishekam with milk, honey, and bel-patra. The grand Shiv Baraat winds through the galis.',
      coords: '📍 Kashi Vishwanath Dham & Tilbhandeshwar',
      foodIndex: 3,
      particleType: 'starlight'
    }
  };

  // DOM Bindings
  const livingPhotoLayer = document.getElementById('living-photo-layer');
  const modeIndicator = document.querySelector('[data-mode-indicator]');
  const activeThemeText = document.querySelector('[data-active-theme-text]');
  const heroMoodTag = document.querySelector('[data-hero-mood-tag]');
  const heroHindiTitle = document.querySelector('[data-hero-hindi-title]');
  const heroSubTitle = document.querySelector('[data-hero-sub-title]');
  const heroThemeDesc = document.querySelector('[data-hero-theme-desc]');
  const heroCoordsLabel = document.querySelector('[data-hero-coords-label]');

  let currentThemeKey = 'normal';
  let titleIndex = 0;
  let titleIntervalId = null;

  // 7-Second Rotating Poetic Title Engine
  function startTitleRotation(themeKey) {
    if (titleIntervalId) clearInterval(titleIntervalId);
    titleIndex = 0;
    const titles = themeData[themeKey]?.rotatingTitles || themeData.normal.rotatingTitles;

    if (heroHindiTitle) {
      heroHindiTitle.classList.remove('fade-out');
      heroHindiTitle.classList.add('fade-in');
      heroHindiTitle.innerHTML = titles[0];
    }

    titleIntervalId = setInterval(() => {
      if (!heroHindiTitle) return;
      heroHindiTitle.classList.remove('fade-in');
      heroHindiTitle.classList.add('fade-out');

      setTimeout(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        heroHindiTitle.innerHTML = titles[titleIndex];
        heroHindiTitle.classList.remove('fade-out');
        heroHindiTitle.classList.add('fade-in');
      }, 500);
    }, 7000);
  }

  // Apply Theme
  function applyTheme(themeKey) {
    const data = themeData[themeKey] || themeData.normal;
    currentThemeKey = data.id;

    if (livingPhotoLayer) livingPhotoLayer.style.backgroundImage = `url('${data.photo}')`;
    document.documentElement.dataset.pageTheme = data.id;
    document.documentElement.dataset.themeMode = data.mode;
    localStorage.setItem('banarasi_babu_active_theme', data.id);

    if (modeIndicator) modeIndicator.textContent = data.mode === 'day' ? '☀️ DAYLIGHT MOOD' : '🌙 NIGHT / DUSK MOOD';
    if (activeThemeText) activeThemeText.textContent = data.label;

    document.querySelectorAll('[data-set-theme]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setTheme === data.id);
    });

    if (heroMoodTag) heroMoodTag.textContent = data.moodTag;
    if (heroSubTitle) heroSubTitle.textContent = data.subTitle;
    if (heroThemeDesc) heroThemeDesc.textContent = data.themeDesc;
    if (heroCoordsLabel) heroCoordsLabel.textContent = data.coords;
    startTitleRotation(data.id);

    initParticles(data.particleType);
    renderFoodItem(data.foodIndex || 0);

    themeDropdownMenu?.classList.remove('open');
    themeDropdownBtn?.setAttribute('aria-expanded', 'false');
  }

  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyTheme(btn.dataset.setTheme);
      setTimeout(() => {
        if (typeof setMobileDrawer === 'function') setMobileDrawer(false);
      }, 220);
    });
  });

  const themeDropdownBtn = document.querySelector('[data-theme-toggle]');
  const themeDropdownMenu = document.querySelector('[data-theme-menu]');

  themeDropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = themeDropdownMenu?.classList.toggle('open');
    themeDropdownBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.theme-picker-container')) {
      themeDropdownMenu?.classList.remove('open');
      themeDropdownBtn?.setAttribute('aria-expanded', 'false');
    }
  });

  // Parallax Motion
  let scrollY = window.scrollY;
  let targetScrollY = scrollY;
  let animTime = 0;

  window.addEventListener('scroll', () => { targetScrollY = window.scrollY; }, { passive: true });

  function updateLivingBackground() {
    scrollY += (targetScrollY - scrollY) * 0.08;
    animTime += 0.012;

    if (livingPhotoLayer) {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      const scale = 1.05 + ratio * 0.08 + Math.sin(animTime * 0.4) * 0.01;
      const translateY = (ratio * -30) + Math.cos(animTime * 0.3) * 3;
      const translateX = Math.sin(animTime * 0.25) * 4;
      livingPhotoLayer.style.transform = `scale(${scale.toFixed(4)}) translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0)`;
    }

    requestAnimationFrame(updateLivingBackground);
  }
  updateLivingBackground();

  // Canvas Particles
  const canvas = document.getElementById('living-particle-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];
  let cw = 0, ch = 0;

  function resizeCanvas() {
    if (!canvas) return;
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initParticles(type) {
    particles = [];
    const count = window.innerWidth < 768 ? 25 : 50;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * cw,
        y: Math.random() * ch,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: -(Math.random() * 0.6 + 0.2),
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        type: type
      });
    }
  }

  function renderParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, cw, ch);
    const isNight = document.documentElement.dataset.themeMode === 'night';

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += 0.025;

      if (p.y < -10) { p.y = ch + 10; p.x = Math.random() * cw; }
      if (p.x < -10) p.x = cw + 10;
      if (p.x > cw + 10) p.x = -10;

      const op = Math.max(0.1, p.opacity + Math.sin(p.pulse) * 0.2);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      if (p.type === 'fire_embers' || p.type === 'diya_sparks') {
        ctx.fillStyle = `rgba(255, ${Math.floor(180 + Math.sin(p.pulse) * 40)}, 40, ${op})`;
      } else if (p.type === 'water_mist') {
        ctx.fillStyle = isNight ? `rgba(126, 224, 234, ${op * 0.6})` : `rgba(20, 120, 140, ${op * 0.4})`;
      } else if (p.type === 'gulal_dust') {
        ctx.fillStyle = `rgba(220, 40, 110, ${op * 0.5})`;
      } else if (p.type === 'starlight') {
        ctx.fillStyle = `rgba(190, 215, 245, ${op * 0.8})`;
      } else if (p.type === 'ash_smoke') {
        ctx.fillStyle = `rgba(220, 210, 205, ${op * 0.4})`;
      } else {
        ctx.fillStyle = isNight ? `rgba(243, 215, 144, ${op * 0.6})` : `rgba(160, 100, 20, ${op * 0.4})`;
      }
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }
  initParticles('golden_dust');
  renderParticles();

  // =========================================================================
  // 2. SMART ITINERARY GENERATOR MODAL
  // =========================================================================
  const itineraryModal = document.querySelector('[data-itinerary-modal]');
  const closeItineraryBtn = document.querySelector('[data-itinerary-close]');
  const itineraryForm = document.querySelector('[data-itinerary-form]');
  const itineraryResult = document.querySelector('[data-itinerary-result]');

  document.querySelectorAll('[data-itinerary-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      itineraryModal?.classList.add('open');
      itineraryModal?.setAttribute('aria-hidden', 'false');
    });
  });

  closeItineraryBtn?.addEventListener('click', () => {
    itineraryModal?.classList.remove('open');
    itineraryModal?.setAttribute('aria-hidden', 'true');
  });

  itineraryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(itineraryForm);
    const days = parseInt(formData.get('duration') || '1', 10);
    const travelType = formData.get('travelType') || 'family';
    const budget = formData.get('budget') || 'medium';
    const startArea = formData.get('startArea') || 'Assi';

    if (typeof TripEngine === 'undefined') return;
    const plan = TripEngine.generateDynamicItinerary(days, travelType, budget, startArea);

    if (itineraryResult) {
      itineraryResult.innerHTML = plan.map(d => `
        <div class="itinerary-day-box">
          <span class="section-kicker">DAY 0${d.day}</span>
          <h3>${d.title}</h3>
          <small style="color: var(--text-accent); font-weight: 700; display: block; margin-bottom: 12px;">${d.theme}</small>
          <div class="itinerary-steps-list">
            ${d.schedule.map(s => `
              <div class="itinerary-step-item">
                <span class="time">${s.time}</span>
                <div>
                  <strong>${s.title} (${s.place})</strong>
                  <small>💡 Tip: ${s.tip}</small>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }
  });

  // =========================================================================
  // 3. LIVE IN KASHI (WEATHER & TABS)
  // =========================================================================
  const weatherTempEl = document.querySelector('[data-weather-temp]');
  const weatherDescEls = document.querySelectorAll('[data-weather-desc]');
  const weatherHumidityEl = document.querySelector('[data-weather-humidity]');
  const weatherWindEl = document.querySelector('[data-weather-wind]');
  const weatherSunsetEl = document.querySelector('[data-weather-sunset]');
  const weatherUpdatedEl = document.querySelector('[data-weather-updated]');
  const nowTempEl = document.querySelector('[data-now-temp]');

  async function syncLiveWeather() {
    if (typeof LiveEngine === 'undefined') return;
    const w = await LiveEngine.getLiveWeather();

    if (weatherTempEl) weatherTempEl.textContent = w.temp;
    weatherDescEls.forEach(el => el.textContent = w.condition);
    if (weatherHumidityEl) weatherHumidityEl.textContent = `${w.humidity}%`;
    if (weatherWindEl) weatherWindEl.textContent = `${w.wind} km/h`;
    if (weatherSunsetEl) weatherSunsetEl.textContent = w.sunset;
    if (weatherUpdatedEl) weatherUpdatedEl.textContent = w.isCached ? 'Live (Cached)' : 'Live via Open-Meteo';
    if (nowTempEl) nowTempEl.textContent = `${w.temp}°C · Live`;
  }
  syncLiveWeather();

  // =========================================================================
  // 4. MULTI-LAYER LEAFLET MAP OF KASHI
  // =========================================================================
  // =========================================================================
  // 4. MULTI-LAYER LEAFLET MAP OF KASHI (ENRICHED ATLAS & LIVE INSPECTOR)
  // =========================================================================
  const mapContainer = document.getElementById('kashi-map');
  const mapSelectedCard = document.querySelector('[data-map-selected-card]');
  let leafletMap = null;
  let allMarkers = [];

  const mapPlacesList = [
    // 🌊 GHATS
    { id: 'assi', name: 'Assi Ghat', category: 'ghat', icon: '🌊', lat: 25.2885, lng: 83.0067, image: 'photos/assi_ghat.jpg', tag: 'Crescent Ghat #01', desc: 'Southernmost sacred crescent ghat; epicenter of classical music & Subah-e-Banaras morning aarti.', link: 'place.html?id=ghat_assi' },
    { id: 'dashashwamedh', name: 'Dashashwamedh Ghat', category: 'aarti', icon: '🪔', lat: 25.3076, lng: 83.0107, image: 'photos/dashashwamedh_ghat.jpg', tag: 'Ganga Aarti Epicenter', desc: 'The most vibrant grand ghat where Lord Brahma performed 10-horse sacrifice and 7 priests perform daily Ganga Aarti.', link: 'place.html?id=ghat_dashashwamedh' },
    { id: 'manikarnika', name: 'Manikarnika Ghat', category: 'ghat', icon: '🌊', lat: 25.3108, lng: 83.0142, image: 'photos/manikarnika_ghat.jpg', tag: 'Sacred Mahasmashan', desc: 'The eternal cremation ghat where Lord Shiva grants Moksha; the sacred flame has burned unbroken for millennia.', link: 'place.html?id=ghat_manikarnika' },
    { id: 'harishchandra', name: 'Harishchandra Ghat', category: 'ghat', icon: '🌊', lat: 25.2974, lng: 83.0076, image: 'photos/harishchandra_ghat.jpg', tag: 'Historic Cremation Ghat', desc: 'Associated with legendary King Harishchandra who upheld absolute truth through divine trials.', link: 'place.html?id=ghat_harishchandra' },
    { id: 'chet_singh', name: 'Chet Singh Ghat', category: 'ghat', icon: '🏰', lat: 25.2952, lng: 83.0069, image: 'photos/chet_singh_ghat.jpg', tag: 'Fortified Palace Ghat', desc: 'Magnificent 18th-century stone fortress that witnessed Maharaja Chet Singh’s fierce battle against Warren Hastings in 1781.', link: 'place.html?id=ghat_chet_singh' },
    { id: 'panchganga', name: 'Panchganga Ghat', category: 'ghat', icon: '🌊', lat: 25.3168, lng: 83.0189, image: 'photos/panchganga_ghat.jpg', tag: '5 Sacred Rivers Confluence', desc: 'Mystic confluence of Ganga, Yamuna, Saraswati, Kirana, and Dhutpapa; crowned by Dharahara Minarets.', link: 'place.html?id=ghat_panchganga' },
    { id: 'namo_ghat', name: 'Namo Ghat (Khidkiya)', category: 'ghat', icon: '🙏', lat: 25.3340, lng: 83.0335, image: 'photos/namo_ghat.jpg', tag: 'Northern Modern Terminal', desc: 'Northern terminal adorned with iconic giant folding-hands sculptures, helipad & water sports.', link: 'place.html?id=ghat_namo' },
    
    // 🛕 TEMPLES & HERITAGE
    { id: 'vishwanath', name: 'Kashi Vishwanath Corridor', category: 'temple', icon: '🛕', lat: 25.3109, lng: 83.0105, image: 'photos/kashi_vishwanath.jpg', tag: '12 Jyotirlinga Shrine', desc: 'The golden supreme spire of Lord Shiva, connected directly to the holy Ganga via the sprawling stone corridor.', link: 'place.html?id=place_vishwanath' },
    { id: 'sankat_mochan', name: 'Sankat Mochan Hanuman', category: 'temple', icon: '🛕', lat: 25.2818, lng: 82.9972, image: 'photos/sankat_mochan.jpg', tag: 'Goswami Tulsidas Shrine', desc: 'Founded by Sant Tulsidas in the 16th century; celebrated for deep spiritual solace and pure desi ghee besan laddoos.', link: 'place.html?id=place_sankat_mochan' },
    { id: 'durga_kund', name: 'Maa Durga Mandir (Kund)', category: 'temple', icon: '🛕', lat: 25.2862, lng: 82.9995, image: 'photos/durga_kund.jpg', tag: '18th-C Nagara Temple', desc: 'Ochre-red Nagara architectural jewel built by Rani Bhabani of Natore alongside the sacred quadrangle kund.', link: 'place.html?id=place_durga_kund' },
    { id: 'sarnath', name: 'Sarnath Dhamekh Stupa', category: 'temple', icon: '☸️', lat: 25.3811, lng: 83.0229, image: 'photos/sarnath.jpg', tag: 'Buddha First Sermon Site', desc: 'Where Lord Buddha delivered his first sermon (Dhammacakkappavattana Sutta) in 528 BCE; home of the National Emblem Lion Capital.', link: 'place.html?id=place_sarnath_dhamekh' },
    { id: 'ramnagar', name: 'Ramnagar Fort & Palace', category: 'temple', icon: '🏰', lat: 25.2678, lng: 83.0270, image: 'photos/ramnagar_fort.jpg', tag: 'Kashi Naresh Royal Seat', desc: 'Chunar sandstone riverfront palace home to the royal family and the world-renowned 31-day open-air Ramlila.', link: 'place.html?id=place_ramnagar_fort' },
    { id: 'bharat_mata', name: 'Bharat Mata Mandir', category: 'temple', icon: '🗺️', lat: 25.3172, lng: 82.9882, image: 'photos/bharat_mata_mandir.jpg', tag: 'Undivided India Marble Map', desc: 'Inaugurated by Mahatma Gandhi in 1936; houses a flawless relief map of undivided India carved from 762 Makrana marble slabs.', link: 'place.html?id=place_bharat_mata_mandir' },
    { id: 'bhu_vt', name: 'New Vishwanath Mandir (VT)', category: 'temple', icon: '🛕', lat: 25.2655, lng: 82.9898, image: 'photos/vt_temple.jpg', tag: 'Tallest Temple Tower (77m)', desc: 'Built by the Birla family in the heart of BHU; highest temple shikhara in the world with Gita verses on marble.', link: 'place.html?id=place_bhu_vt' },

    // 🎓 HISTORIC COLLEGES & UNIVERSITIES
    { id: 'bhu', name: 'Banaras Hindu University', category: 'college', icon: '🎓', lat: 25.2677, lng: 82.9913, image: 'photos/bhu_main_gate.jpg', tag: 'Asia Largest Residential Univ', desc: 'Founded in 1916 by Mahamana Madan Mohan Malaviya across 1,300 semi-circular green acres.', link: 'place.html?id=place_bhu_campus' },
    { id: 'up_college', name: 'Udai Pratap College (1909)', category: 'college', icon: '🎓', lat: 25.3417, lng: 82.9778, image: 'photos/up_college.jpg', tag: '1909 Historic Clock Tower', desc: 'Premier 100-acre academic institution founded by Rajarshi Udai Pratap Singh Judeo with iconic Indo-Gothic architecture.', link: 'place.html?id=place_up_college' },
    { id: 'harish_chandra', name: 'Harish Chandra PG College', category: 'college', icon: '🎓', lat: 25.3211, lng: 83.0072, image: 'photos/harish_chandra.jpg', tag: 'Maidagin Heritage College (1866)', desc: 'Historic college founded by Bharatendu Harishchandra; pioneer of modern Hindi literature and freedom struggle leadership.', link: 'place.html?id=place_harish_chandra_college' },
    { id: 'sampurnanand', name: 'Sampurnanand Sanskrit Univ', category: 'college', icon: '📜', lat: 25.3283, lng: 82.9972, image: 'photos/sampurnanand_sanskrit.jpg', tag: 'Est. 1791 Queens College', desc: 'Oldest Sanskrit institution in northern India, guardian of over 100,000 rare palm-leaf manuscripts.', link: 'place.html?id=place_sampurnanand_sanskrit' },
    { id: 'mgkvp', name: 'Mahatma Gandhi Kashi Vidyapith', category: 'college', icon: '🎓', lat: 25.3189, lng: 82.9867, image: 'photos/mgkvp.jpg', tag: 'Est. 1921 Non-Cooperation', desc: 'Founded by Shiv Prasad Gupta and Bhagwan Das during the 1921 Non-Cooperation Movement; visited by Mahatma Gandhi.', link: 'place.html?id=place_mgkvp' },

    // 🍛 FOOD & SWEETS
    { id: 'rambhandar', name: 'Ram Bhandar Kachori', category: 'food', icon: '🍛', lat: 25.3115, lng: 83.0090, image: 'photos/kachori_sabzi.jpg', tag: 'Morning Hing Kachori', desc: 'Legendary breakfast spot in Thatheri Gali serving hot urad-dal hing kachoris with aloo-chana curry and sweet jalebi.', link: 'place.html?id=food_kachori' },
    { id: 'kashichaat', name: 'Kashi Chaat Bhandar', category: 'food', icon: '🍛', lat: 25.3088, lng: 83.0064, image: 'photos/tamatar_chaat.jpg', tag: 'Inventor of Tamatar Chaat', desc: 'Pioneered pure desi ghee Tamatar Chaat served bubbling hot in earthen clay kulhads since 1968.', link: 'place.html?id=food_tamatar_chaat' },
    { id: 'malaiyo_spot', name: 'Shreeji Malaiyo (Chowk)', category: 'food', icon: '🍨', lat: 25.3122, lng: 83.0101, image: 'photos/malaiyo.jpg', tag: 'Winter Dewdrop Foam', desc: 'Fluffy saffron milk cloud prepared exclusively in winter mornings using night dew and crushed dry fruits.', link: 'place.html?id=food_malaiyo' },
    { id: 'pahalwan_lassi', name: 'Pahalwan Lassi (Lanka)', category: 'food', icon: '🥛', lat: 25.2798, lng: 82.9992, image: 'photos/lassi.jpg', tag: 'Creamy Rabri Kulhad Lassi', desc: 'Thick hand-churned curd topped with golden rabri and malai near BHU main gate.', link: 'place.html?id=food_lassi' },

    // 🛍️ MARKETS & WEAVERS
    { id: 'thatheri_bazaar', name: 'Thatheri Bazaar Brass Lane', category: 'market', icon: '🛍️', lat: 25.3119, lng: 83.0084, image: 'photos/thatheri_brass.jpg', tag: 'Handmade Brass Vessels', desc: 'Centuries-old artisanal labyrinth where copper and brass utensils, temple lamps, and bells are beaten by hand.', link: 'place.html?id=market_thatheri' },
    { id: 'vishwanath_gali', name: 'Vishwanath Gali Market', category: 'market', icon: '🏮', lat: 25.3105, lng: 83.0098, image: 'photos/vishwanath_gali.jpg', tag: 'Spiritual Heritage Street', desc: 'Lively winding alley packed with brass murtis, rudraksha rosaries, Banarasi silk stalls, and street snacks.', link: 'place.html?id=market_vishwanath_gali' },
    { id: 'godowlia_market', name: 'Godowlia Silk Emporiums', category: 'market', icon: '🛍️', lat: 25.3094, lng: 83.0055, image: 'photos/godowlia_silk.jpg', tag: 'GI Pure Katan Sarees', desc: 'The bustling commercial heart of Varanasi renowned for bridal pure zari Katan and Tanchoi silk sarees.', link: 'place.html?id=market_godowlia' }
  ];

  if (mapContainer && typeof L !== 'undefined') {
    leafletMap = L.map('kashi-map', {
      center: [25.3100, 83.0080],
      zoom: 13,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19
    }).addTo(leafletMap);

    function selectPlaceOnMap(spot) {
      if (!spot || !mapSelectedCard) return;

      mapSelectedCard.innerHTML = `
        <div class="ms-active-detail-card">
          <img src="${spot.image || 'photos/assi_ghat.jpg'}" alt="${spot.name}" class="ms-card-photo" loading="lazy">
          <div class="ms-card-meta">
            <span class="ms-tag">${spot.tag || spot.category}</span>
            <span class="ms-coords">📍 ${spot.lat.toFixed(4)}°N, ${spot.lng.toFixed(4)}°E</span>
          </div>
          <h3 class="ms-card-title">${spot.name}</h3>
          <p class="ms-card-desc">${spot.desc}</p>
          <a href="${spot.link || 'place.html?id=' + spot.id}" class="ms-explore-btn">
            <span>Explore Complete Heritage Details</span>
            <span>→</span>
          </a>
        </div>
      `;
    }

    function renderMap(filter = 'all') {
      allMarkers.forEach(m => leafletMap.removeLayer(m));
      allMarkers = [];

      mapPlacesList.forEach(s => {
        if (filter !== 'all' && s.category !== filter) return;

        const icon = L.divIcon({
          className: 'custom-icon',
          html: `<div class="custom-kashi-marker" title="${s.name}">${s.icon}</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const m = L.marker([s.lat, s.lng], { icon }).addTo(leafletMap);
        m.bindPopup(`
          <div style="font-family: var(--sans); padding: 4px;">
            <strong style="font-size: 14px; color: #0f172a; display: block; margin-bottom: 2px;">${s.name}</strong>
            <span style="font-size: 11px; font-weight: 700; color: #d97706; text-transform: uppercase;">${s.tag || s.category}</span>
            <p style="font-size: 12px; color: #475569; margin: 4px 0 6px; line-height: 1.4;">${s.desc}</p>
            <a href="${s.link || 'place.html?id=' + s.id}" style="display: inline-block; font-size: 11px; font-weight: 800; color: #d97706; text-decoration: none;">View Guide →</a>
          </div>
        `);

        m.on('click', () => {
          leafletMap.flyTo([s.lat, s.lng], 15, { duration: 1 });
          selectPlaceOnMap(s);
        });

        allMarkers.push({ marker: m, data: s });
      });
    }

    renderMap('all');

    // Initial default preview (Assi Ghat)
    selectPlaceOnMap(mapPlacesList[0]);

    // Filter Buttons
    document.querySelectorAll('[data-map-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-map-filter]').forEach(b => b.classList.toggle('active', b === btn));
        renderMap(btn.dataset.mapFilter);
      });
    });

    // Proximity / Zone Jump
    const zoneCoords = {
      all: { center: [25.3100, 83.0080], zoom: 13 },
      assi: { center: [25.2885, 83.0067], zoom: 16, id: 'assi' },
      dashashwamedh: { center: [25.3076, 83.0107], zoom: 16, id: 'dashashwamedh' },
      vishwanath: { center: [25.3109, 83.0105], zoom: 16, id: 'vishwanath' },
      bhu: { center: [25.2677, 82.9913], zoom: 15, id: 'bhu' },
      cantt: { center: [25.3417, 82.9778], zoom: 15, id: 'up_college' },
      sarnath: { center: [25.3811, 83.0229], zoom: 15, id: 'sarnath' },
      ramnagar: { center: [25.2678, 83.0270], zoom: 15, id: 'ramnagar' }
    };

    document.querySelector('[data-proximity-select]')?.addEventListener('change', (e) => {
      const z = zoneCoords[e.target.value] || zoneCoords.all;
      leafletMap.flyTo(z.center, z.zoom, { duration: 1.2 });
      if (z.id) {
        const item = mapPlacesList.find(p => p.id === z.id);
        if (item) selectPlaceOnMap(item);
      }
    });

    // Quick Fly-to buttons in Sidebar
    document.querySelectorAll('[data-map-fly]').forEach(btn => {
      btn.addEventListener('click', () => {
        const spotId = btn.dataset.mapFly;
        const spot = mapPlacesList.find(s => s.id === spotId);
        if (spot) {
          leafletMap.flyTo([spot.lat, spot.lng], 16, { duration: 1.2 });
          selectPlaceOnMap(spot);
          const found = allMarkers.find(m => m.data.id === spot.id);
          found?.marker.openPopup();
        }
      });
    });
  }

  // =========================================================================
  // 5. FOOD CAROUSEL
  // =========================================================================
  const foodThumb = document.querySelector('[data-food-image]');
  const foodTag = document.querySelector('[data-food-tag]');
  const foodTitle = document.querySelector('[data-food-title]');
  const foodDesc = document.querySelector('[data-food-desc]');
  const foodPlaceName = document.querySelector('[data-food-place-name]');
  const foodPlaceMeta = document.querySelector('[data-food-place-meta]');

  const foodList = [
    { no: '01 · MORNING RITUAL', title: 'Kachori<br><i>Sabzi</i>', image: 'photos/kachori_sabzi.jpg', desc: 'Crispy, spiced urad dal pooris served with a fiery, hing-laden potato-chickpea curry and fresh saffron jalebis. Best savoured in the morning hours before 10:00 AM.', place: 'Ram Bhandar & The Chowk Halwais', meta: 'Thatheri Bazaar · 07:00 AM – 11:30 AM' },
    { no: '02 · WINTER DEW SWEET', title: 'Banarasi<br><i>Malaiyo</i>', image: 'photos/malaiyo.jpg', desc: 'A cloud-like froth made by churning milk left overnight in the winter dew, infused with saffron, cardamom, and pistachios.', place: 'Markandey Sardar & Chaukhamba Sweetmakers', meta: 'Chaukhamba Gali · Winter Months' },
    { no: '03 · EVENING TANG', title: 'Tamatar<br><i>Chaat</i>', image: 'photos/tamatar_chaat.jpg', desc: 'Mashed ripe tomatoes cooked with hing, ginger, cashews, cumin, and topped with crispy namkeen and sweet sugar-cumin syrup in a clay kulhad.', place: 'Kashi Chaat Bhandar & Deena Chaat', meta: 'Godowlia Crossing · 04:30 PM – 10:30 PM' },
    { no: '04 · CULINARY SIGNATURE', title: 'Banarasi<br><i>Paan</i>', image: 'photos/banarasi_paan.jpg', desc: 'Tender, melt-in-mouth Magahi betel leaf carefully folded with pure kattha, fragrant chuna, gulkand, saunf, and aromatic spices.', place: 'Keshav Tambool & Gopal Sah Paan', meta: 'Lanka & Chowk · All Day till Late Midnight' }
  ];

  function renderFoodItem(idx) {
    const item = foodList[idx];
    if (!item) return;
    if (foodThumb) foodThumb.style.backgroundImage = `url('${item.image}')`;
    if (foodTag) foodTag.textContent = item.no;
    if (foodTitle) foodTitle.innerHTML = item.title;
    if (foodDesc) foodDesc.textContent = item.desc;
    if (foodPlaceName) foodPlaceName.textContent = item.place;
    if (foodPlaceMeta) foodPlaceMeta.textContent = item.meta;
  }

  // =========================================================================
  // 6. DRAWERS & AI CONCIERGE
  // =========================================================================
  const nowTrigger = document.querySelector('[data-now-trigger]');
  const nowPanel = document.querySelector('[data-now-panel]');
  const closeNow = document.querySelector('[data-now-close]');
  const aiTriggers = document.querySelectorAll('[data-ai-trigger]');
  const aiPanel = document.querySelector('[data-ai-panel]');
  const closeAi = document.querySelector('[data-ai-close]');
  const aiMessages = document.querySelector('[data-ai-messages]');
  const aiForm = document.querySelector('[data-ai-form]');
  const aiInput = document.querySelector('[data-ai-input]');

  const mobileToggle = document.querySelector('[data-menu-trigger]');
  const mobileDrawer = document.querySelector('[data-mobile-drawer]');
  const drawerBackdrop = document.querySelector('[data-drawer-backdrop]');
  const dLinks = document.querySelectorAll('.d-link');

  function setNow(open) { 
    nowPanel?.classList.toggle('open', open); 
    nowPanel?.setAttribute('aria-hidden', String(!open));
  }
  function setAi(open) {
    aiPanel?.classList.toggle('open', open);
    aiPanel?.setAttribute('aria-hidden', String(!open));
    if (open && aiInput) aiInput.focus();
  }
  function setMobileDrawer(open) {
    mobileDrawer?.classList.toggle('open', open);
    mobileDrawer?.setAttribute('aria-hidden', String(!open));
    drawerBackdrop?.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  nowTrigger?.addEventListener('click', () => { setAi(false); setNow(!nowPanel.classList.contains('open')); });
  closeNow?.addEventListener('click', () => setNow(false));
  aiTriggers.forEach(b => b.addEventListener('click', () => { setNow(false); setAi(true); }));
  closeAi?.addEventListener('click', () => setAi(false));

  mobileToggle?.addEventListener('click', () => setMobileDrawer(true));
  document.querySelectorAll('[data-mobile-close]').forEach(btn => btn.addEventListener('click', () => setMobileDrawer(false)));
  drawerBackdrop?.addEventListener('click', () => setMobileDrawer(false));
  dLinks.forEach(l => l.addEventListener('click', () => setMobileDrawer(false)));

  async function sendAiMessage(txt) {
    if (!txt.trim()) return;
    const u = document.createElement('div');
    u.className = 'ai-msg user';
    u.textContent = txt;
    aiMessages?.appendChild(u);
    if (aiMessages) aiMessages.scrollTop = aiMessages.scrollHeight;

    const answer = typeof AIBrain !== 'undefined' 
      ? await AIBrain.processUserQuery(txt, currentThemeKey)
      : '<strong>प्रणाम!</strong> I am Banarasi Babu. How can I assist your Kashi journey?';

    setTimeout(() => {
      const b = document.createElement('div');
      b.className = 'ai-msg bot';
      b.innerHTML = answer;
      aiMessages?.appendChild(b);
      if (aiMessages) aiMessages.scrollTop = aiMessages.scrollHeight;
    }, 250);
  }

  aiForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = aiInput.value;
    aiInput.value = '';
    sendAiMessage(v);
  });

  document.querySelectorAll('[data-send-prompt]').forEach(chip => {
    chip.addEventListener('click', () => sendAiMessage(chip.dataset.sendPrompt));
  });

  // Apply Initial Theme
  const saved = localStorage.getItem('banarasi_babu_active_theme') || 'normal';
  applyTheme(saved);
});
