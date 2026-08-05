document.addEventListener('DOMContentLoaded', async () => {
  if (!window.SITE_CONFIG) await import('./site-config.js');
  const getConfig = path => path.split('.').reduce((value, key) => value?.[key], window.SITE_CONFIG);
  document.querySelectorAll('[data-config]').forEach(el => { const value = getConfig(el.dataset.config); if (typeof value === 'string') el.textContent = value; });
  document.querySelectorAll('[data-config-html]').forEach(el => { const value = getConfig(el.dataset.configHtml); if (typeof value === 'string') el.innerHTML = value; });
  const page = location.pathname.split('/').pop() || 'index.html';
  const copy = { ...(window.SITE_CONFIG.copy?.shared || {}), ...(window.SITE_CONFIG.copy?.[page] || {}) };
  Object.entries(copy).forEach(([selector, value]) => document.querySelectorAll(selector).forEach(el => { el.innerHTML = value; }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('nav');
  if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close' : 'Menu'; });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const format = n => new Intl.NumberFormat('en-US', { notation: n >= 1000000 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(n);
  document.querySelectorAll('[data-count]').forEach(el => { const target = Number(el.dataset.count); let started = false; const countObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting || started) return; started = true; const start = performance.now(); const tick = now => { const progress = Math.min((now - start) / 1100, 1); el.textContent = format(Math.floor(target * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); countObserver.disconnect(); }), { threshold: .4 }); countObserver.observe(el); });
  const snapshot = window.PORTFOLIO_SNAPSHOT;
  if (snapshot?.games?.length) {
    const games = snapshot.games;
    const total = games.reduce((sum, game) => sum + (Number(game.visits) || 0), 0);
    const playing = games.reduce((sum, game) => sum + (Number(game.playing) || 0), 0);
    [['total-visits', total], ['total-playing', playing], ['total-games', games.length]].forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.textContent = format(value); });
    const homeGames = document.getElementById('home-games');
    if (homeGames) { const safe = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); homeGames.innerHTML = games.slice(0, 2).map(game => `<article class="game-card reveal visible"><a class="home-game-art" href="https://www.roblox.com/games/${encodeURIComponent(game.rootPlaceId)}" target="_blank" rel="noopener noreferrer">${game.thumbnailUrl ? `<img src="${encodeURI(game.thumbnailUrl)}" alt="">` : '<span>VA.</span>'}<b>${safe(game.label || 'Portfolio')}</b></a><div class="game-info"><h3>${safe(game.name)}</h3><p>${safe(game.description || 'A Roblox experience in the portfolio.')}</p><div><span>${format(game.visits || 0)} visits</span><span>${format(game.playing || 0)} CCU</span></div></div></article>`).join(''); }
  }
});
