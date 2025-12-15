// ===== SEARCH AND FILTER FUNCTIONALITY =====

class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.searchClear = document.getElementById('searchClear');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.initializeCategoryCounts();
        console.log('✅ SearchManager initialized');
    }

    bindEvents() {
        // Search events
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => {
                this.performSearch();
            });
        }
        
        if (this.searchInput) {
            // Real-time search with debounce
            const debouncedSearch = debounce(() => {
                this.performSearch();
            }, 300);
            
            this.searchInput.addEventListener('input', debouncedSearch);
            
            this.searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
                this.toggleClearButton();
            });
            
            // Initialize clear button state
            this.toggleClearButton();
        }

        if (this.searchClear) {
            this.searchClear.addEventListener('click', () => {
                this.clearSearch();
            });
        }

        // Filter events - DIPERBAIKI
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.applyFilter(button);
            });
        });

        // Clear search results button
        const clearSearchResults = document.getElementById('clearSearchResults');
        if (clearSearchResults) {
            clearSearchResults.addEventListener('click', () => {
                this.clearSearch();
                if (window.navigationManager) {
                    window.navigationManager.showSection('home');
                }
            });
        }
    }

    performSearch() {
        if (!this.searchInput) return;
        
        const query = this.searchInput.value.toLowerCase().trim();
        
        if (query === '') {
            this.showAllSections();
            this.applyCurrentFilter();
            return;
        }
        
        // Hide all sections except home and favorites
        this.hideNonSearchableSections();
        
        // Show sections that match the search
        const hasResults = this.showMatchingResults(query);
        
        // Apply current filter to search results
        if (hasResults && this.currentFilter !== 'all') {
            this.filterCardsByCategory(this.currentFilter);
        }
        
        // Show no results message if no matches found
        if (!hasResults && query !== '') {
            if (window.navigationManager) {
                window.navigationManager.showSection('no-results');
            }
        }
        
        console.log(`🔍 Pencarian: "${query}" - ${hasResults ? 'Ditemukan' : 'Tidak ditemukan'}`);
    }

    showAllSections() {
        document.querySelectorAll('.section').forEach(section => {
            if (this.isSearchableSection(section.id)) {
                section.style.display = 'block';
            }
        });
        
        // Show all cards
        this.showAllCards();
    }

    hideNonSearchableSections() {
        document.querySelectorAll('.section').forEach(section => {
            if (this.isSearchableSection(section.id)) {
                section.style.display = 'none';
            }
        });
    }

    isSearchableSection(sectionId) {
        const nonSearchableSections = ['home', 'favorites', 'no-results', 'statistics'];
        return !nonSearchableSections.includes(sectionId);
    }

    showMatchingResults(query) {
        let hasResults = false;
        const allCards = document.querySelectorAll('.card, .popular-card');
        
        allCards.forEach(card => {
            const title = card.querySelector('h2, h3')?.textContent.toLowerCase() || '';
            const description = card.textContent.toLowerCase();
            const district = card.getAttribute('data-district') || '';
            const districtName = getDistrictName(district).toLowerCase();
            
            if (title.includes(query) || description.includes(query) || districtName.includes(query)) {
                card.style.display = 'block';
                const parentSection = card.closest('.section');
                if (parentSection) {
                    parentSection.style.display = 'block';
                }
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        return hasResults;
    }

    applyFilter(button) {
        // Remove active class from all buttons
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        
        const filter = button.getAttribute('data-filter');
        this.currentFilter = filter;
        
        console.log(`🎯 Filter diterapkan: ${filter}`);
        
        // Show all cards if filter is 'all'
        if (filter === 'all') {
            this.showAllCards();
            return;
        }
        
        // Filter cards based on category
        this.filterCardsByCategory(filter);
    }

    showAllCards() {
        document.querySelectorAll('.card, .popular-card').forEach(card => {
            card.style.display = 'block';
        });
    }

    filterCardsByCategory(filter) {
        let visibleCount = 0;
        
        document.querySelectorAll('.card, .popular-card').forEach(card => {
            const categories = card.getAttribute('data-categories');
            
            if (categories && categories.includes(filter)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        console.log(`📊 Filter "${filter}": ${visibleCount} destinasi ditemukan`);
        
        // Show message if no results
        if (visibleCount === 0) {
            this.showNoResultsForFilter(filter);
        }
    }

    showNoResultsForFilter(filter) {
        const categoryName = getCategoryName(filter);
        console.log(`❌ Tidak ada destinasi untuk kategori: ${categoryName}`);
        
        if (typeof showToast === 'function') {
            showToast(`Tidak ada destinasi untuk kategori ${categoryName}`);
        }
    }

    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
            this.toggleClearButton();
        }
        
        // Reset to show all cards
        this.showAllCards();
        this.showAllSections();
        
        // Reset filter buttons to 'all'
        const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allFilterBtn) {
            this.applyFilter(allFilterBtn);
        }
        
        // Show home section
        if (window.navigationManager) {
            window.navigationManager.showSection('home');
        }
        
        console.log('🧹 Pencarian dan filter direset');
    }

    toggleClearButton() {
        if (this.searchClear && this.searchInput) {
            if (this.searchInput.value.trim() !== '') {
                this.searchClear.style.display = 'flex';
            } else {
                this.searchClear.style.display = 'none';
            }
        }
    }

    applyCurrentFilter() {
        if (this.currentFilter && this.currentFilter !== 'all') {
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${this.currentFilter}"]`);
            if (filterBtn) {
                this.applyFilter(filterBtn);
            }
        }
    }

    initializeCategoryCounts() {
        // Initialize category counts from data.js
        if (typeof initializeCategoryCounts === 'function') {
            setTimeout(() => {
                initializeCategoryCounts();
            }, 1500);
        }
    }
}

// Initialize search manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.searchManager = new SearchManager();
});