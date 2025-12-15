// ===== THEME MANAGEMENT =====

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.body = document.body;
    this.init();
  }

  init() {
    this.loadTheme();
    this.bindEvents();
    console.log('✅ ThemeManager initialized');
  }

  bindEvents() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
    
    // Tambahkan event listener untuk bottom nav theme button
    const bottomThemeBtn = document.querySelector('.bottom-nav-item[onclick="toggleTheme()"]');
    if (bottomThemeBtn) {
      bottomThemeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    }
    
    // Tambahkan event listener untuk mobile theme button
    const mobileThemeBtn = document.querySelector('.mobile-action-btn.secondary[onclick="toggleTheme()"]');
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    }
  }

  toggleTheme() {
    const currentTheme = this.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    
    // Show toast notification
    if (typeof showToast === 'function') {
      showToast(`Mode ${newTheme === 'light' ? 'terang' : 'gelap'} diaktifkan`);
    }
    
    console.log(`Theme changed to: ${newTheme}`);
  }

  setTheme(theme) {
    this.body.setAttribute('data-theme', theme);
    
    // Update desktop theme toggle icon
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      }
    }
    
    // Update bottom nav theme icon
    const bottomThemeIcon = document.querySelector('.bottom-nav-item[onclick="toggleTheme()"] .bottom-nav-icon');
    if (bottomThemeIcon) {
      bottomThemeIcon.className = `fas fa-palette bottom-nav-icon`;
    }
    
    // Save preference to localStorage
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('⚠️ Gagal menyimpan tema ke localStorage:', error);
    }
  }

  loadTheme() {
    let savedTheme = 'dark';
    try {
      savedTheme = localStorage.getItem('theme') || 'dark';
    } catch (error) {
      console.warn('⚠️ Gagal memuat tema dari localStorage:', error);
    }
    
    // Validasi tema
    if (savedTheme !== 'light' && savedTheme !== 'dark') {
      savedTheme = 'dark';
    }
    
    this.setTheme(savedTheme);
    console.log(`Theme loaded: ${savedTheme}`);
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});

// Global function for theme toggle
function toggleTheme() {
  if (window.themeManager) {
    window.themeManager.toggleTheme();
  } else {
    console.error('ThemeManager belum diinisialisasi');
  }
}