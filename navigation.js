// ===== NAVIGATION MANAGEMENT =====

class NavigationManager {
    constructor() {
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.bindEvents();
        this.initializeFromURL();
        this.initializeNavButtons();
    }

    bindEvents() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleURLChange();
        });
    }

    initializeNavButtons() {
        // Desktop navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const section = button.getAttribute('data-section');
                this.showSection(section, button);
            });
        });

        // Mobile navigation items
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item[data-section]');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.getAttribute('data-section');
                this.showSection(section);
            });
        });

        // Bottom navigation items
        const bottomNavItems = document.querySelectorAll('.bottom-nav-item[data-section]');
        bottomNavItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.getAttribute('data-section');
                this.showSection(section);
            });
        });
    }

    showSection(id, el = null) {
        // Show loading spinner for sections that might take time to load
        if (id === 'favorites' || id === 'statistics') {
            if (typeof showLoading === 'function') {
                showLoading();
                setTimeout(() => {
                    if (typeof hideLoading === 'function') {
                        hideLoading();
                    }
                }, 500);
            }
        }
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('active');
            sec.setAttribute('hidden', 'true');
        });
        
        // Show target section
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.removeAttribute('hidden');
        }
        
        // Update navigation buttons
        this.updateActiveNavStates(id);
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update URL without reloading page
        this.updateURL(id);
        
        // Update current section
        this.currentSection = id;
        
        // Update mobile navigation if exists
        if (window.mobileNavigation) {
            window.mobileNavigation.handleSectionChange(id);
        }

        // Special handling for certain sections
        this.handleSpecialSections(id);
    }

    updateActiveNavStates(sectionId) {
        // Update desktop nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const desktopBtn = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
        if (desktopBtn) desktopBtn.classList.add('active');

        // Update mobile nav items
        document.querySelectorAll('.mobile-nav-item').forEach(item => item.classList.remove('active'));
        const mobileItem = document.querySelector(`.mobile-nav-item[data-section="${sectionId}"]`);
        if (mobileItem) mobileItem.classList.add('active');

        // Update bottom nav items
        document.querySelectorAll('.bottom-nav-item').forEach(item => item.classList.remove('active'));
        const bottomItem = document.querySelector(`.bottom-nav-item[data-section="${sectionId}"]`);
        if (bottomItem) bottomItem.classList.add('active');
    }

    updateURL(sectionId) {
        const newURL = `#${sectionId}`;
        if (window.location.hash !== newURL) {
            history.pushState(null, null, newURL);
        }
    }

    handleSpecialSections(id) {
        switch (id) {
            case 'favorites':
                if (typeof displayFavorites === 'function') {
                    displayFavorites();
                }
                break;
            case 'statistics':
                if (typeof updateStatistics === 'function') {
                    updateStatistics();
                }
                break;
            case 'home':
                if (window.renderManager) {
                    window.renderManager.renderHomePage();
                }
                break;
            default:
                // For district sections, ensure content is rendered
                if (id && !id.includes('no-results')) {
                    if (window.renderManager) {
                        window.renderManager.renderDistrictSection(id);
                    }
                }
                break;
        }
    }

    handleURLChange() {
        const hash = window.location.hash.substring(1) || 'home';
        this.showSection(hash);
    }

    initializeFromURL() {
        const hash = window.location.hash.substring(1) || 'home';
        this.showSection(hash);
    }

    getCurrentSection() {
        return this.currentSection;
    }

    // Method to navigate to a specific destination
    navigateToDestination(destId, district) {
        this.showSection(district);
        
        // Scroll to destination after a delay to allow section to load
        setTimeout(() => {
            const destElement = document.querySelector(`[data-id="${destId}"]`);
            if (destElement) {
                destElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Add highlight effect
                destElement.style.transition = 'all 0.3s ease';
                destElement.style.boxShadow = '0 0 0 3px var(--primary-color)';
                
                setTimeout(() => {
                    destElement.style.boxShadow = '';
                }, 2000);
            }
        }, 300);
    }

    // Method to go back to previous section
    goBack() {
        const sections = ['home', 'favorites', 'statistics'];
        const currentIndex = sections.indexOf(this.currentSection);
        
        if (currentIndex > 0) {
            this.showSection(sections[currentIndex - 1]);
        } else {
            this.showSection('home');
        }
    }
}

// Initialize navigation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.navigationManager = new NavigationManager();
});

// Global function for onclick handlers (for backward compatibility)
function showSection(id, el) {
    if (window.navigationManager) {
        window.navigationManager.showSection(id, el);
    }
}

// Global function for navigation
function navigateToDestination(destId, district) {
    if (window.navigationManager) {
        window.navigationManager.navigateToDestination(destId, district);
    }
}