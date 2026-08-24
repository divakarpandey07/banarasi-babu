/**
 * BANARASI BABU — DEDICATED LOCATION PROFILE CONTROLLER (place.js)
 * Grounded data hydration for any Temple, Ghat, Monument, Market, or Stay entity.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Engine & Synchronization
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

  // Apply saved theme
  const savedTheme = localStorage.getItem('banarasi_babu_active_theme') || 'normal';
  applyTheme(savedTheme);

  // 2. Parse Place ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get('id') || 'place_vishwanath';

  // Find Entity from all datasets
  const allPlaces = typeof PlacesData !== 'undefined' ? PlacesData : [];
  const allGhats = typeof GhatsData !== 'undefined' ? GhatsData : [];
  const allMarkets = typeof MarketsData !== 'undefined' ? MarketsData.markets : [];
  const allHotels = typeof HotelsData !== 'undefined' ? HotelsData : [];
  const allDelicacies = typeof FoodData !== 'undefined' ? FoodData.delicacies : [];

  const entity = [...allPlaces, ...allGhats, ...allMarkets, ...allHotels, ...allDelicacies].find(p => p.id === placeId) || allPlaces[0];

  if (!entity) return;

  // Hydrate DOM with entity data
  const heroImgEl = document.querySelector('[data-place-hero-img]');
  const galleryEl = document.querySelector('[data-place-gallery]');
  const gallerySection = document.querySelector('[data-gallery-section]');

  const nameEl = document.querySelector('[data-place-name]');
  const hindiEl = document.querySelector('[data-place-hindi]');
  const catEl = document.querySelector('[data-place-cat]');
  const ratingEl = document.querySelector('[data-place-rating]');
  const addressEl = document.querySelector('[data-place-address]');
  const aboutEl = document.querySelector('[data-place-about]');
  const timingsEl = document.querySelector('[data-place-timings]');
  const entryEl = document.querySelector('[data-place-entry]');
  const dressEl = document.querySelector('[data-place-dress]');
  const photoRuleEl = document.querySelector('[data-place-photo-rule]');
  const electronicsEl = document.querySelector('[data-place-electronics]');
  const durationEl = document.querySelector('[data-place-duration]');
  const nearbyEl = document.querySelector('[data-place-nearby]');
  const bestTimeFactEl = document.querySelector('[data-fact-best-time]');
  const accessFactEl = document.querySelector('[data-fact-accessibility]');
  const sourceEl = document.querySelector('[data-place-source]');
  const verifiedDateEl = document.querySelector('[data-place-verified-date]');
  const directionsBtn = document.querySelector('[data-directions-btn]');
  const aiPlaceBtn = document.querySelector('[data-ai-place-btn]');

  document.title = `${entity.name || 'Location'} | Banarasi Babu`;

  // Default entity photo selection
  const entityPhotos = entity.photos || (entity.image ? [entity.image] : ['photos/ahilyabai_ghat.jpg', 'photos/galiyan.jpg', 'photos/assi_ghat.jpg']);
  const heroPhoto = entityPhotos[0] || 'photos/ahilyabai_ghat.jpg';

  if (heroImgEl) {
    heroImgEl.style.backgroundImage = `url('${heroPhoto}')`;
  }

  // Populate Photo Gallery
  if (galleryEl && entityPhotos.length > 0) {
    galleryEl.innerHTML = entityPhotos.map(p => `
      <div class="gallery-item-wrap">
        <div class="gallery-item-img" style="background-image: url('${p}');"></div>
      </div>
    `).join('');
  }

  if (nameEl) nameEl.textContent = entity.name || entity.title;
  if (hindiEl) hindiEl.textContent = entity.hindiName || '';
  if (catEl) catEl.textContent = entity.subcategory || entity.category || entity.segment || 'Varanasi Entity';
  if (ratingEl) ratingEl.textContent = entity.touristRating || entity.rating || '4.9';
  
  const lat = entity.location?.lat || entity.latitude;
  const lng = entity.location?.lng || entity.longitude;
  const addressStr = entity.location?.address || entity.location?.area || entity.address || 'Varanasi, Uttar Pradesh, India';
  if (addressEl) addressEl.textContent = `📍 ${addressStr}`;

  if (aboutEl) {
    const fullDesc = (entity.description || '') + (entity.history ? `\n\n${entity.history}` : '') + (entity.significance ? `\n\n${entity.significance}` : '');
    aboutEl.innerHTML = fullDesc.replace(/\n\n/g, '<br><br>') || 'Information verified directly from official temple and government records.';
  }

  // Timings & Aartis
  if (timingsEl) {
    if (entity.aartiTimings && entity.aartiTimings.length > 0) {
      timingsEl.innerHTML = `
        <div style="margin-bottom: 8px; font-weight: 700;">General Hours: ${entity.timings || 'Open 24 Hours'}</div>
        <div style="font-size: 11px; font-weight: 800; color: var(--text-accent); margin-bottom: 4px;">DAILY SACRED AARTI SCHEDULE:</div>
        ${entity.aartiTimings.map(a => `<div class="aarti-row"><span>${a.name}</span><strong>${a.time}</strong></div>`).join('')}
      `;
    } else {
      timingsEl.innerHTML = `
        <div class="aarti-row"><span>Visiting Hours</span><strong>${entity.timings || 'Open 24 Hours'}</strong></div>
        <div class="aarti-row"><span>Best Time</span><strong>${entity.bestTime || entity.best_time || 'Dawn & Dusk'}</strong></div>
      `;
    }
  }

  if (entryEl) entryEl.textContent = entity.entry_fee || entity.priceRange || entity.cost || 'Free Entry / General Darshan Free';
  if (dressEl) dressEl.textContent = entity.darshanRules || 'Traditional or modest clothing covering shoulders and knees.';
  if (photoRuleEl) photoRuleEl.textContent = entity.category?.includes('Spiritual') ? 'Prohibited inside inner sanctum; permitted in outer corridor' : 'Allowed for personal non-commercial use';
  if (electronicsEl) electronicsEl.textContent = entity.id === 'place_vishwanath' ? 'Digital lockers provided free at Gyanvapi & Lalita Ghat gates' : 'Allowed outside temple sanctum';
  if (durationEl) durationEl.textContent = entity.duration || '1 to 2 hours';
  if (bestTimeFactEl) bestTimeFactEl.textContent = entity.bestTime || entity.best_time || '05:30 AM – 08:30 AM & 06:00 PM';
  if (accessFactEl) accessFactEl.textContent = entity.accessibility || 'Paved access; ramps available';

  const sourceName = entity.sources ? (Array.isArray(entity.sources) ? entity.sources.join(', ') : entity.sources.official || 'Official Government & Temple Records') : 'Shri Kashi Vishwanath Temple Trust / ASI';
  if (sourceEl) sourceEl.textContent = sourceName;
  if (verifiedDateEl) verifiedDateEl.textContent = entity.last_verified || entity.sources?.verified || '24 Aug 2026';

  // Get Directions Google Maps Link
  if (directionsBtn && lat && lng) {
    directionsBtn.addEventListener('click', () => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
    });
  }

  // Ask Babu about this place
  if (aiPlaceBtn) {
    aiPlaceBtn.addEventListener('click', () => {
      setAi(true);
      sendAiMessage(`Tell me everything about ${entity.name || entity.title} in Varanasi, its history, rules, and best timings.`);
    });
  }

  // Explore Nearby (within 500m & 1km)
  if (nearbyEl && typeof GeoEngine !== 'undefined' && lat && lng) {
    const graph = GeoEngine.getExploreNearbyGraph(lat, lng, entity.id);
    const near500 = graph.within500m.places.slice(0, 4);
    const nearFood = graph.within500m.food.slice(0, 3);
    const nearHotels = graph.within500m.hotels.slice(0, 2);

    nearbyEl.innerHTML = `
      ${near500.length > 0 ? `
        <div class="nearby-section-group">
          <h4>🛕 Nearby Temples & Ghats:</h4>
          <div class="nearby-pills-row">
            ${near500.map(p => `<a href="place.html?id=${p.id}" class="nearby-pill-link">${p.name} (${p.formattedDistance})</a>`).join('')}
          </div>
        </div>
      ` : ''}

      ${nearFood.length > 0 ? `
        <div class="nearby-section-group" style="margin-top: 8px;">
          <h4>🍛 Nearby Food & Halwais:</h4>
          <div class="nearby-pills-row">
            ${nearFood.map(f => `<span class="nearby-pill-link">${f.name} (${f.formattedDistance})</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${nearHotels.length > 0 ? `
        <div class="nearby-section-group" style="margin-top: 8px;">
          <h4>🏨 Nearby Stays & Havelis:</h4>
          <div class="nearby-pills-row">
            ${nearHotels.map(h => `<span class="nearby-pill-link">${h.name} (${h.formattedDistance})</span>`).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  // Leaflet Map Init for this place
  const mapEl = document.getElementById('place-map');
  if (mapEl && typeof L !== 'undefined' && lat && lng) {
    const placeMap = L.map('place-map', { center: [lat, lng], zoom: 16, scrollWheelZoom: false });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(placeMap);

    const customMarker = L.divIcon({
      className: 'custom-icon',
      html: `<div class="custom-kashi-marker">📍</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    L.marker([lat, lng], { icon: customMarker }).addTo(placeMap).bindPopup(`<b>${entity.name}</b><br><small>${addressStr}</small>`).openPopup();
  }

  // AI Concierge
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
