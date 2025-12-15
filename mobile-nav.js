// ===== MOBILE NAVIGATION MANAGEMENT =====

class MobileNavigation {
  constructor() {
    this.isOpen = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateFavoriteCounts();
  }

  bindEvents() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobileMenuToggle');
    const menuClose = document.getElementById('mobileNavClose');
    const overlay = document.getElementById('mobileNavOverlay');
    const sidebar = document.getElementById('mobileNavSidebar');
    const bottomMenuBtn = document.getElementById('mobileMenuBottomBtn');

    // Open menu
    if (menuToggle) {
      menuToggle.addEventListener('click', () => this.openMenu());
    }

    if (bottomMenuBtn) {
      bottomMenuBtn.addEventListener('click', () => this.openMenu());
    }

    // Close menu
    if (menuClose) {
      menuClose.addEventListener('click', () => this.closeMenu());
    }

    if (overlay) {
      overlay.addEventListener('click', () => this.closeMenu());
    }

    // Mobile nav items
    this.bindMobileNavItems();

    // Mobile search
    this.bindMobileSearch();

    // Bottom nav items
    this.bindBottomNavItems();

    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  bindMobileNavItems() {
    const navItems = document.querySelectorAll('.mobile-nav-item');
    
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const section = item.getAttribute('data-section');
        const filter = item.getAttribute('data-filter');
        
        if (section) {
          this.navigateToSection(section);
        } else if (filter) {
          this.applyFilter(filter);
        }
        
        this.closeMenu();
      });
    });
  }

  bindBottomNavItems() {
    const bottomItems = document.querySelectorAll('.bottom-nav-item[data-section]');
    
    bottomItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const section = item.getAttribute('data-section');
        if (section) {
          this.navigateToSection(section);
          this.updateBottomNavActive(section);
        }
      });
    });
  }

  bindMobileSearch() {
    const searchInput = document.getElementById('mobileSearchInput');
    const searchBtn = document.getElementById('mobileSearchBtn');

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => {
        this.performMobileSearch(searchInput.value);
        this.closeMenu();
      });

      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.performMobileSearch(searchInput.value);
          this.closeMenu();
        }
      });
    }
  }

  navigateToSection(section) {
    if (window.navigationManager) {
      window.navigationManager.showSection(section);
    } else {
      showSection(section);
    }
    
    // Update active states
    this.updateMobileNavActive(section);
    this.updateBottomNavActive(section);
  }

  applyFilter(filter) {
    if (window.searchManager) {
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
      if (filterBtn) {
        window.searchManager.applyFilter(filterBtn);
      }
    }
    
    // Navigate to home to see filtered results
    this.navigateToSection('home');
  }

  performMobileSearch(query) {
    if (query.trim()) {
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = query;
        
        if (window.searchManager) {
          window.searchManager.performSearch();
        }
      }
    }
  }

  openMenu() {
    const overlay = document.getElementById('mobileNavOverlay');
    const sidebar = document.getElementById('mobileNavSidebar');
    
    if (overlay && sidebar) {
      this.isOpen = true;
      overlay.style.display = 'block';
      sidebar.classList.add('active');
      sidebar.classList.add('animate-in');
      document.body.style.overflow = 'hidden';
      
      // Update favorite count when opening menu
      this.updateFavoriteCounts();
    }
  }

  closeMenu() {
    const overlay = document.getElementById('mobileNavOverlay');
    const sidebar = document.getElementById('mobileNavSidebar');
    
    if (overlay && sidebar) {
      this.isOpen = false;
      sidebar.classList.remove('animate-in');
      sidebar.classList.add('animate-out');
      
      setTimeout(() => {
        overlay.style.display = 'none';
        sidebar.classList.remove('active');
        sidebar.classList.remove('animate-out');
        document.body.style.overflow = '';
      }, 300);
    }
  }

  updateMobileNavActive(section) {
    const navItems = document.querySelectorAll('.mobile-nav-item');
    
    navItems.forEach(item => {
      item.classList.remove('active');
      
      const itemSection = item.getAttribute('data-section');
      if (itemSection === section) {
        item.classList.add('active');
      }
    });
  }

  updateBottomNavActive(section) {
    const bottomItems = document.querySelectorAll('.bottom-nav-item[data-section]');
    
    bottomItems.forEach(item => {
      item.classList.remove('active');
      
      const itemSection = item.getAttribute('data-section');
      if (itemSection === section) {
        item.classList.add('active');
      }
    });
  }

  updateFavoriteCounts() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteCount = favorites.length;

    // Update mobile nav badge
    const mobileBadge = document.getElementById('mobileFavoriteCount');
    if (mobileBadge) {
      mobileBadge.textContent = favoriteCount;
      mobileBadge.style.display = favoriteCount > 0 ? 'block' : 'none';
    }

    // Update bottom nav badge
    const bottomBadge = document.getElementById('bottomFavoriteCount');
    if (bottomBadge) {
      bottomBadge.textContent = favoriteCount;
      bottomBadge.style.display = favoriteCount > 0 ? 'block' : 'none';
    }
  }

  // Method to handle section changes from outside
  handleSectionChange(section) {
    this.updateMobileNavActive(section);
    this.updateBottomNavActive(section);
  }
}

// Initialize mobile navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.mobileNavigation = new MobileNavigation();
});