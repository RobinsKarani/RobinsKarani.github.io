/* robins-terminal — main.js */

// ── Theme toggle ──────────────────────────────────────────
function toggleTheme() {
  const html  = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next  = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('rk-theme', next);
  updateThemeUI(next);
}

function updateThemeUI(theme) {
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (!icon || !label) return;
  if (theme === 'dark') {
    icon.textContent  = '☀️';
    label.textContent = 'light';
  } else {
    icon.textContent  = '🌙';
    label.textContent = 'dark';
  }
}

// ── On load ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Sync theme UI with stored value
  const saved = localStorage.getItem('rk-theme') || 'light';
  updateThemeUI(saved);

  // Mark active nav link by matching pathname
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    // strip trailing slash for comparison
    const aPath = href.replace(/\/$/, '');
    const cPath = path.replace(/\/$/, '');
    if (aPath && cPath.startsWith(aPath) && aPath !== '') {
      a.classList.add('active');
    } else if ((aPath === '' || aPath === '/') && (cPath === '' || cPath === '/')) {
      a.classList.add('active');
    }
  });
});
