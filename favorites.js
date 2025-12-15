// ===== FAVORITES MANAGEMENT =====

class FavoritesManager {
  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.init();
  }

  init() {
    this.bindEvents();
    this.initializeFavoriteButtons();
    this.updateFavoriteCounts();
  }

  bindEvents() {
    // Share functionality
    document.addEventListener('click', (e) => {
      if (e.target.closest('.share')) {
        this.handleShare(e.target.closest('.share'));
      }
    });
  }

  toggleFavorite(cardId) {
    const index = this.favorites.indexOf(cardId);
    
    if (index === -1) {
      // Add to favorites
      this.favorites.push(cardId);
      this.updateFavoriteButton(cardId, true);
      if (typeof showToast === 'function') {
        showToast('Ditambahkan ke favorit');
      }
    } else {
      // Remove from favorites
      this.favorites.splice(index, 1);
      this.updateFavoriteButton(cardId, false);
      if (typeof showToast === 'function') {
        showToast('Dihapus dari favorit');
      }
    }
    
    // Save to localStorage
    this.saveFavorites();
    
    // Update statistics
    if (typeof updateStatistics === 'function') {
      updateStatistics();
    }
    
    // Update mobile navigation counts
    if (window.mobileNavigation) {
      window.mobileNavigation.updateFavoriteCounts();
    }
    
    // Update favorites section if it's active
    if (window.navigationManager && window.navigationManager.getCurrentSection() === 'favorites') {
      this.displayFavorites();
    }
  }

  updateFavoriteButton(cardId, isFavorite) {
    const button = document.querySelector(`.favorite[data-id="${cardId}"]`);
    if (button) {
      if (isFavorite) {
        button.classList.add('active');
        const icon = button.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-heart';
        }
      } else {
        button.classList.remove('active');
        const icon = button.querySelector('i');
        if (icon) {
          icon.className = 'far fa-heart';
        }
      }
    }
  }

  initializeFavoriteButtons() {
    document.querySelectorAll('.favorite').forEach(button => {
      const cardId = button.getAttribute('data-id');
      
      // Set initial state
      if (this.favorites.includes(cardId)) {
        this.updateFavoriteButton(cardId, true);
      }
      
      // Add click event
      button.addEventListener('click', () => {
        this.toggleFavorite(cardId);
      });
    });
  }

  displayFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    if (!favoritesList) return;
    
    if (this.favorites.length === 0) {
      favoritesList.innerHTML = `
        <div class="favorites-empty">
          <i class="far fa-heart" aria-hidden="true"></i>
          <h3>Belum ada favorit</h3>
          <p>Tambahkan destinasi ke favorit dengan menekan ikon hati</p>
          <button class="btn btn-primary" onclick="showSection('home')">
            <i class="fas fa-explore" aria-hidden="true"></i>
            Jelajahi Destinasi
          </button>
        </div>
      `;
      favoritesList.className = 'favorites-empty';
      return;
    }
    
    favoritesList.className = 'favorites-container';
    favoritesList.innerHTML = '';
    
    this.favorites.forEach(cardId => {
      // Find the original card in any district section
      let originalCard = null;
      const districts = ['ciputat', 'ciputattimur', 'setu', 'pondokaren', 'pamulang', 'serpong', 'serpongutara'];
      
      for (const district of districts) {
        const card = document.querySelector(`#${district}Content .card[data-id="${cardId}"]`);
        if (card) {
          originalCard = card;
          break;
        }
      }
      
      if (originalCard) {
        const clone = originalCard.cloneNode(true);
        // Remove the favorite button from the clone to avoid duplication
        const favoriteBtn = clone.querySelector('.favorite');
        if (favoriteBtn) favoriteBtn.remove();
        
        // Add district badge
        const cardHeader = clone.querySelector('.card-header');
        if (cardHeader) {
          const districtBadge = document.createElement('div');
          districtBadge.className = 'district-badge';
          districtBadge.textContent = this.getDestinationDistrict(cardId);
          cardHeader.appendChild(districtBadge);
        }
        
        favoritesList.appendChild(clone);
      }
    });

    // Re-initialize favorite buttons for the cloned cards
    this.initializeFavoriteButtons();
  }

  getDestinationDistrict(cardId) {
    // Find which district this destination belongs to
    const districts = ['ciputat', 'ciputattimur', 'setu', 'pondokaren', 'pamulang', 'serpong', 'serpongutara'];
    
    for (const district of districts) {
      const card = document.querySelector(`#${district}Content .card[data-id="${cardId}"]`);
      if (card) {
        return getDistrictName(district);
      }
    }
    
    return 'Unknown';
  }

  handleShare(button) {
    const cardId = button.getAttribute('data-id');
    const card = document.querySelector(`.card[data-id="${cardId}"]`);
    if (!card) return;
    
    const title = card.querySelector('h2')?.textContent || 'Destinasi Wisata';
    
    if (navigator.share) {
      navigator.share({
        title: title,
        text: 'Lihat destinasi wisata ini di Website Wisata Tangerang Selatan',
        url: window.location.href.split('#')[0]
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = window.location.href.split('#')[0];
      navigator.clipboard.writeText(url).then(() => {
        if (typeof showToast === 'function') {
          showToast('Link berhasil disalin ke clipboard!');
        }
      });
    }
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getFavorites() {
    return this.favorites;
  }

  isFavorite(cardId) {
    return this.favorites.includes(cardId);
  }

  updateFavoriteCounts() {
    const favoriteCount = this.favorites.length;

    // Update desktop nav badge
    const desktopBadge = document.getElementById('favoriteCount');
    if (desktopBadge) {
      desktopBadge.textContent = favoriteCount;
      desktopBadge.style.display = favoriteCount > 0 ? 'flex' : 'none';
    }
  }
}

// Initialize favorites manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.favoritesManager = new FavoritesManager();
});

// Global function for favorites display
function displayFavorites() {
  if (window.favoritesManager) {
    window.favoritesManager.displayFavorites();
  }
}