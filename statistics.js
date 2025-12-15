// ===== STATISTICS MANAGEMENT =====

class StatisticsManager {
  constructor() {
    this.init();
  }

  init() {
    // Statistics will be updated when needed
  }

  updateStatistics() {
    this.updateTotalDestinations();
    this.updateTotalFavorites();
    this.updateTotalCategories();
    this.updateTotalDistricts();
    this.updateCategoryCounts();
  }

  updateTotalDestinations() {
    const totalDestinations = getAllDestinations().length;
    const element = document.getElementById('totalDestinations');
    if (element) {
      element.textContent = this.formatNumber(totalDestinations);
    }
  }

  updateTotalFavorites() {
    let favoritesCount = 0;
    if (window.favoritesManager) {
      favoritesCount = window.favoritesManager.getFavorites().length;
    }
    const element = document.getElementById('totalFavorites');
    if (element) {
      element.textContent = this.formatNumber(favoritesCount);
    }
  }

  updateTotalCategories() {
    const categories = getAllCategories();
    const element = document.getElementById('totalCategories');
    if (element) {
      element.textContent = this.formatNumber(categories.length);
    }
  }

  updateTotalDistricts() {
    const districts = Object.keys(destinationsData);
    const element = document.getElementById('totalDistricts');
    if (element) {
      element.textContent = this.formatNumber(districts.length);
    }
  }

  updateCategoryCounts() {
    const allDestinations = getAllDestinations();
    const categoryCounts = {};
    
    // Initialize all categories
    getAllCategories().forEach(cat => {
      categoryCounts[cat] = 0;
    });
    
    // Count destinations per category
    allDestinations.forEach(dest => {
      dest.categories.forEach(cat => {
        if (categoryCounts[cat] !== undefined) {
          categoryCounts[cat]++;
        }
      });
    });
    
    // Update category count displays
    for (const [category, count] of Object.entries(categoryCounts)) {
      const element = document.getElementById(`count${this.capitalizeFirst(category)}`);
      if (element) {
        element.textContent = `${count} destinasi`;
      }
    }
  }

  capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getStatistics() {
    return {
      totalDestinations: getAllDestinations().length,
      totalFavorites: window.favoritesManager ? window.favoritesManager.getFavorites().length : 0,
      totalCategories: getAllCategories().length,
      totalDistricts: Object.keys(destinationsData).length
    };
  }

  getCategoryCount() {
    return getAllCategories().length;
  }

  getDistrictCount() {
    return Object.keys(destinationsData).length;
  }
}

// Initialize statistics manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.statisticsManager = new StatisticsManager();
});

// Global function for statistics update
function updateStatistics() {
  if (window.statisticsManager) {
    window.statisticsManager.updateStatistics();
  }
}