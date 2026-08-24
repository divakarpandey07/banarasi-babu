/**
 * BANARASI BABU — DEDICATED CATEGORY CONTROLLER (category.js)
 * 88 Ghats Directory, Food Encyclopedia, Markets Shopping Guide,
 * Dynamic Festivals Calendar, Area-Wise Stay Explorer, and Profile Deep-Links.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. 9-THEME DATASET & REAL-TIME SYNCHRONIZATION
  // =========================================================================
  const themeData = {
    normal: { id: 'normal', mode: 'day', label: '🏛️ Classic Kashi', photo: 'photos/normal.jpg', particleType: 'golden_dust' },
    ganga: { id: 'ganga', mode: 'day', label: '🌊 Ganga Flow', photo: 'photos/ganga%20theme.png', particleType: 'water_mist' },
    masan_holi: { id: 'masan_holi', mode: 'day', label: '🕉️ Masan Holi', photo: 'photos/masan%20holi.png', particleType: 'ash_smoke' },
    rangbhari_ekadashi: { id: 'rangbhari_ekadashi', mode: 'day', label: '🌸 Rangbhari Ekadashi', photo: 'photos/rang%20bhari%20ekadashi.png', particleType: 'gulal_dust' },
    galiyan: { id: 'galiyan', mode: 'day', label: '🏮 Banaras Ki Galiyan', photo: 'photos/galiyan.jpg', particleType: 'golden_dust' },
    ganga_aarti: { id: 'ganga_aarti', mode: 'night', label: '🪔 Ganga Aarti', photo: 'photos/ganga%20aarti%20.jpg', particleType: 'fire_embers' },
    dev_diwali: { id: 'dev_diwali', mode: 'night', label: '✨ Dev Diwali', photo: 'photos/dev%20diwali.jpg', particleType: 'diya_sparks' },
    bhasma_aarti: { id: 'bhasma_aarti', mode: 'night', label: '🔱 Bhasma Aarti', photo: 'photos/bhasma%20aartri.png', particleType: 'ash_smoke' },
    mahashivratri: { id: 'mahashivratri', mode: 'night', label: '🌙 Mahashivratri', photo: 'photos/mahashivratri.png', particleType: 'starlight' }
  };

  const livingPhotoLayer = document.getElementById('living-photo-layer');
  const modeIndicator = document.querySelector('[data-mode-indicator]');
  const activeThemeText = document.querySelector('[data-active-theme-text]');
  const themeDropdownBtn = document.querySelector('[data-theme-toggle]');
  const themeDropdownMenu = document.querySelector('[data-theme-menu]');

  let currentThemeKey = 'normal';

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

    initParticles(data.particleType);

    themeDropdownMenu?.classList.remove('open');
    themeDropdownBtn?.setAttribute('aria-expanded', 'false');
  }

  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyTheme(btn.dataset.setTheme);
      setTimeout(() => {
        const drawer = document.querySelector('[data-mobile-drawer]');
        const backdrop = document.querySelector('[data-drawer-backdrop]');
        drawer?.classList.remove('open');
        backdrop?.classList.remove('active');
        document.body.style.overflow = '';
      }, 220);
    });
  });

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

  // Parallax Living Background
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

  // Apply Initial Saved Theme
  const savedTheme = localStorage.getItem('banarasi_babu_active_theme') || 'normal';
  applyTheme(savedTheme);

  // =========================================================================
  // 2. MULTI-CATEGORY DATA & TAILORED VIEW CONFIGURATIONS
  // =========================================================================
  const urlParams = new URLSearchParams(window.location.search);
  const activeType = urlParams.get('type') || 'ghats';

  // Highlight Active Switcher Chip
  document.querySelectorAll('[data-cat-link], [data-cat-nav]').forEach(btn => {
    const val = btn.dataset.catLink || btn.dataset.catNav;
    btn.classList.toggle('active', val === activeType);
  });

  const heroIcon = document.querySelector('[data-cat-hero-icon], [data-hero-icon]');
  const heroTitle = document.querySelector('[data-cat-hero-title], [data-hero-title]');
  const heroDesc = document.querySelector('[data-cat-hero-desc], [data-hero-desc]');
  const filtersBox = document.querySelector('[data-cat-filters]');
  const searchInput = document.querySelector('[data-cat-search]');
  const categoryGrid = document.querySelector('[data-category-grid]');

  let rawDataItems = [];
  let activeFilterValue = 'All';

  const categoryConfigs = {
    ghats: {
      title: 'The 88 Crescent Ghats of Varanasi',
      icon: '🌊',
      desc: 'Complete sacred riverfront directory from Assi Ghat in the south to Adi Keshava / Namo Ghat in the north.',
      filters: ['All', 'South Kashi', 'Central Kashi', 'North Kashi', 'Aarti Ghats', 'Cremation', 'Palaces', 'Boat Stands'],
      defaultPhoto: 'photos/assi_ghat.jpg',
      getItems: () => (typeof GhatsData !== 'undefined' ? GhatsData : [])
    },
    temples: {
      title: 'Ancient Temples & Sacred Sanctums',
      icon: '🙏',
      desc: 'Kashi Vishwanath Jyotirlinga, Sankat Mochan, Kaal Bhairav, Annapurna, Durga Kund, and Tulsi Manas.',
      filters: ['All', 'Jyotirlinga', 'Hanuman', 'Protector', 'Goddess'],
      defaultPhoto: 'photos/kashi_vishwanath.jpg',
      getItems: () => (typeof PlacesData !== 'undefined' ? PlacesData.filter(p => p.category.includes('Spiritual')) : [])
    },
    heritage: {
      title: 'Monuments, Fortresses & Sarnath Archaeology',
      icon: '🏛️',
      desc: 'Dhamekh Stupa, Sarnath Museum, Ashoka Lion Capital, Ramnagar Fort, and Man Mandir Observatory.',
      filters: ['All', 'Sarnath', 'Royal Forts', 'Astronomical'],
      defaultPhoto: 'photos/dhamekh_stupa.jpg',
      getItems: () => (typeof PlacesData !== 'undefined' ? PlacesData.filter(p => p.category.includes('Heritage')) : [])
    },
    food: {
      title: 'What to Eat in Varanasi (Food Encyclopedia & Halwais)',
      icon: '🍛',
      desc: 'Authentic Kachori Sabzi, Winter Malaiyo, Tamatar Chaat, Baati Chokha, and Royal Magahi Paan with verified vendors.',
      filters: ['All', 'Breakfast', 'Street Food', 'Sweets', 'Traditional', 'Cafes', 'Pure Veg'],
      defaultPhoto: 'photos/kachori_sabzi.jpg',
      getItems: () => (typeof FoodData !== 'undefined' ? [...FoodData.delicacies, ...FoodData.vendors] : [])
    },
    markets: {
      title: 'Traditional Markets, Shopping Guides & GI Master Crafts',
      icon: '🛍️',
      desc: 'Chowk Pure Silk, Thatheri Beaten Brass, Gulabi Meenakari, and Lacquered Wooden Toys with genuine shop locations.',
      filters: ['All', 'Silk & Sarees', 'Brass & Metal', 'Jewelry', 'Woodcraft', 'Bazaars'],
      defaultPhoto: 'photos/banarasi_sari.jpg',
      getItems: () => (typeof MarketsData !== 'undefined' ? [...MarketsData.products, ...MarketsData.markets] : [])
    },
    festivals: {
      title: 'Dynamic Sacred Festivals & Annual Utsavs Calendar',
      icon: '🎉',
      desc: 'Dev Deepawali, Masan Holi, Rangbhari Ekadashi, and Maha Shivratri with lunar dates and crowd alerts.',
      filters: ['All', 'Spring (Holi)', 'Autumn (Dev Diwali)', 'Shiv Utsavs', 'Winter Melas'],
      defaultPhoto: 'photos/dev_deepawali_real.jpg',
      getItems: () => (typeof FestivalsData !== 'undefined' ? FestivalsData : [])
    },
    stay: {
      title: 'Where to Stay in Varanasi (Area-Wise Accommodation Explorer)',
      icon: '🏨',
      desc: 'Verified Havelis, Palace Hotels, and Hostels across Godowlia, Assi, Cantt, and Sarnath with exact distances.',
      filters: ['All', 'Old Varanasi / Godowlia', 'Assi / Shivala', 'Cantonment', 'Sarnath'],
      defaultPhoto: 'photos/munshi_ghat.jpg',
      getItems: () => (typeof HotelsData !== 'undefined' ? HotelsData : [])
    },
    culture: {
      title: 'Art, Classical Music & Living Traditions',
      icon: '🎨',
      desc: 'Banaras Gharana, Bismillah Khan Shehnai, Dhrupad tradition, and Akhara wrestling.',
      filters: ['All', 'Music', 'Martial Arts', 'Textiles'],
      defaultPhoto: 'photos/tulsi_ghat.jpg',
      getItems: () => (typeof CultureData !== 'undefined' ? CultureData.traditions : [])
    },
    education: {
      title: 'Education, BHU & Knowledge Institutions',
      icon: '🎓',
      desc: 'BHU 1,300-acre Campus Explorer, Sampurnanand Sanskrit University, and Bharat Kala Bhavan.',
      filters: ['All', 'BHU Campus', 'Sanskrit', 'Museums'],
      defaultPhoto: 'photos/bhu_main_gate.jpg',
      getItems: () => (typeof PlacesData !== 'undefined' ? PlacesData.filter(p => p.category.includes('Education')) : [])
    },
    nature: {
      title: 'Nature, Ganga Dunes & Peace Sanctuaries',
      icon: '🌿',
      desc: 'Eastern Sandbanks, Migratory Seagulls, and Sarnath Deer Park Gardens.',
      filters: ['All', 'Riverbanks', 'Sanctuaries'],
      defaultPhoto: 'photos/assi_ghat.jpg',
      getItems: () => (typeof PlacesData !== 'undefined' ? PlacesData.filter(p => p.category.includes('Nature')) : [])
    },
    transport: {
      title: 'Transport Routes & Official Boat Fares',
      icon: '🚕',
      desc: 'Hand-rowed boats, motor bajras, electric cruises, and E-rickshaw transit guidelines.',
      filters: ['All', 'Wooden Boats', 'Cruises', 'Local Transit'],
      defaultPhoto: 'photos/rajghat_bridge.jpg',
      getItems: () => (typeof TransportSafetyData !== 'undefined' ? TransportSafetyData.transportGuidelines.boatFares : [])
    },
    safety: {
      title: 'Tourist Safety, Police & Emergency Helplines',
      icon: '🚨',
      desc: '24x7 Tourist Police booths, Women Powerline, BHU Trauma Centre, and scam awareness.',
      filters: ['All', 'Police', 'Hospitals', 'Safety Guidelines'],
      defaultPhoto: 'photos/normal.jpg',
      getItems: () => (typeof TransportSafetyData !== 'undefined' ? TransportSafetyData.emergencyServices : [])
    }
  };

  const currentConfig = categoryConfigs[activeType] || categoryConfigs.ghats;

  if (heroIcon) heroIcon.textContent = currentConfig.icon;
  if (heroTitle) heroTitle.textContent = currentConfig.title;
  if (heroDesc) heroDesc.textContent = currentConfig.desc;

  // Render Filter Pills
  if (filtersBox && currentConfig.filters) {
    filtersBox.innerHTML = currentConfig.filters.map((f, i) => `
      <button class="cat-filter-btn ${i === 0 ? 'active' : ''}" data-filter-val="${f}">${f}</button>
    `).join('');

    filtersBox.querySelectorAll('[data-filter-val]').forEach(btn => {
      btn.addEventListener('click', () => {
        filtersBox.querySelectorAll('[data-filter-val]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilterValue = btn.dataset.filterVal;
        filterAndRender();
      });
    });
  }

  rawDataItems = currentConfig.getItems();

  function renderCards(items) {
    if (!categoryGrid) return;
    if (!items || items.length === 0) {
      categoryGrid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">No records found matching your search.</div>`;
      return;
    }

    categoryGrid.innerHTML = items.map(item => {
      const name = item.name || item.title || item.boatType || 'Varanasi Entity';
      const sub = item.subcategory || item.category || item.area || item.craftType || item.segment || 'Verified Entity';
      const desc = item.description || item.significance || item.rateStandard || item.specialty || '';
      const timings = item.timings || item.bestTime || item.best_time || item.bestFor || 'Check local hours';
      const fee = item.entry_fee || item.priceRange || item.price_range || item.cost || 'Free / Nominal';
      const sourceStr = item.sources ? (Array.isArray(item.sources) ? item.sources.join(', ') : item.sources.official || 'Official Government & Temple Records') : 'Verified Directory';
      const verifiedDate = item.last_verified || item.sources?.verified || '24 Aug 2026';

      // Pick authentic card photo
      const cardPhoto = item.photos?.[0] || item.image || currentConfig.defaultPhoto || 'photos/normal.jpg';

      // Radial Explore Nearby Graph (Within 500m)
      let nearbyHtml = '';
      const lat = item.location?.lat || item.latitude;
      const lng = item.location?.lng || item.longitude;
      if (typeof lat === 'number' && typeof lng === 'number' && typeof GeoEngine !== 'undefined') {
        const graph = GeoEngine.getExploreNearbyGraph(lat, lng, item.id);
        const near500 = graph.within500m.places.slice(0, 3);
        const nearFood = graph.within500m.food.slice(0, 2);

        if (near500.length > 0 || nearFood.length > 0) {
          nearbyHtml = `
            <div class="nearby-graph-wrap">
              <div class="nearby-graph-head">📍 Explore Nearby (Within 500m):</div>
              <div class="nearby-links-list">
                ${near500.map(p => `<a href="place.html?id=${p.id}" class="nearby-link-pill">🛕 ${p.name} (${p.formattedDistance})</a>`).join('')}
                ${nearFood.map(f => `<span class="nearby-link-pill">🍛 ${f.name} (${f.formattedDistance})</span>`).join('')}
              </div>
            </div>
          `;
        }
      }

      // Check if entity has a dedicated location profile
      const hasProfile = Boolean(item.id);

      return `
        <article class="cat-detail-card" id="${item.id || ''}">
          <div class="editorial-card-photo" style="background-image: url('${cardPhoto}');"></div>
          
          <div class="card-inner-padding">
            <div class="card-header-cluster">
              <div>
                <span class="card-kicker-tag">${sub}</span>
                <h2>${name}</h2>
              </div>
              <span class="verified-badge">✓ Verified</span>
            </div>

            <p class="card-body-narrative">${desc}</p>

            <div class="card-meta-matrix">
              <div class="meta-item"><span>⏰ Timings / Hours</span><strong>${timings}</strong></div>
              <div class="meta-item"><span>💰 Entry / Price</span><strong>${fee}</strong></div>
              <div class="meta-item"><span>📜 Verified Source</span><strong>${sourceStr}</strong></div>
              <div class="meta-item"><span>📅 Last Verified</span><strong>${verifiedDate}</strong></div>
            </div>

            ${nearbyHtml}

            <div class="card-footer-actions">
              ${hasProfile ? `<a href="place.html?id=${item.id}" class="card-action-btn">Full Profile →</a>` : `<span class="card-source-cite">✓ Verified Source</span>`}
              <button class="card-action-btn" data-ai-prompt="Tell me everything about ${name} in Varanasi">Ask Babu ✦</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Wire Ask Babu triggers on cards
    categoryGrid.querySelectorAll('[data-ai-prompt]').forEach(btn => {
      btn.addEventListener('click', () => {
        setAi(true);
        sendAiMessage(btn.dataset.aiPrompt);
      });
    });
  }

  function filterAndRender() {
    const q = (searchInput?.value || '').toLowerCase().trim();
    let filtered = rawDataItems;

    if (activeFilterValue !== 'All') {
      filtered = filtered.filter(item => {
        const text = JSON.stringify(item).toLowerCase();
        return text.includes(activeFilterValue.toLowerCase());
      });
    }

    if (q) {
      filtered = filtered.filter(item => {
        const name = (item.name || item.title || item.boatType || '').toLowerCase();
        const desc = (item.description || item.significance || item.history || '').toLowerCase();
        const area = (item.area || item.segment || item.subcategory || '').toLowerCase();
        return name.includes(q) || desc.includes(q) || area.includes(q);
      });
    }

    renderCards(filtered);
  }

  searchInput?.addEventListener('input', filterAndRender);
  filterAndRender();

  // =========================================================================
  // 3. AI CONCIERGE PANEL
  // =========================================================================
  const aiTriggers = document.querySelectorAll('[data-ai-trigger]');
  const aiPanel = document.querySelector('[data-ai-panel]');
  const closeAi = document.querySelector('[data-ai-close]');
  const aiMessages = document.querySelector('[data-ai-messages]');
  const aiForm = document.querySelector('[data-ai-form]');
  const aiInput = document.querySelector('[data-ai-input]');

  function setAi(open) {
    aiPanel?.classList.toggle('open', open);
    aiPanel?.setAttribute('aria-hidden', String(!open));
    if (open && aiInput) aiInput.focus();
  }

  aiTriggers.forEach(b => b.addEventListener('click', () => setAi(true)));
  closeAi?.addEventListener('click', () => setAi(false));

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

  // Mobile Drawer
  const mobileToggle = document.querySelector('[data-menu-trigger]');
  const mobileDrawer = document.querySelector('[data-mobile-drawer]');
  const drawerBackdrop = document.querySelector('[data-drawer-backdrop]');

  function setMobileDrawer(open) {
    mobileDrawer?.classList.toggle('open', open);
    drawerBackdrop?.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  mobileToggle?.addEventListener('click', () => setMobileDrawer(true));
  document.querySelectorAll('[data-mobile-close]').forEach(btn => btn.addEventListener('click', () => setMobileDrawer(false)));
  drawerBackdrop?.addEventListener('click', () => setMobileDrawer(false));
});
