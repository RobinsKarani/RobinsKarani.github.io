// Robinson Karani Thiaine — Neo-Brutalist Portfolio Script

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system OS theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // Default to light mode for first-time visitors
    return 'light';
  }

  function updateTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      // In dark mode: show Sun icon ☀️ (click to switch to light)
      // In light mode: show Crescent Moon icon 🌙 (click to switch to dark)
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  const currentTheme = getInitialTheme();
  updateTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', newTheme);
      updateTheme(newTheme);
    });
  }
});
