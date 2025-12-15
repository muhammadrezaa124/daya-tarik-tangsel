// ===== MAIN APPLICATION INITIALIZATION =====

class App {
    constructor() {
        this.isInitialized = false;
        this.currentSection = 'home';
        this.modules = {};
        this.initializationAttempts = 0;
        this.maxInitializationAttempts = 5;
        this.init();
    }

    async init() {
        try {
            console.log('🚀 Starting Wisata Tangerang Selatan application...');
            
            // Show loading state
            this.showLoading();
            
            // Check if all required modules are available
            if (!this.areModulesAvailable()) {
                console.warn('⚠️ Beberapa modul belum tersedia, menunggu...');
                await this.waitForModules();
            }
            
            // Initialize dengan urutan yang benar
            await this.initializeWithProperOrder();
            
            // Mark as initialized
            this.isInitialized = true;
            
            // Final setup
            await this.finalizeInitialization();
            
            console.log('🎉 Aplikasi Wisata Tangerang Selatan berhasil diinisialisasi');
            
        } catch (error) {
            console.error('❌ Gagal menginisialisasi aplikasi:', error);
            this.handleInitializationError(error);
        }
    }

    areModulesAvailable() {
        const requiredModules = [
            'ThemeManager', 'NavigationManager', 'SearchManager', 
            'FavoritesManager', 'StatisticsManager', 'MobileNavigation', 
            'RenderManager'
        ];
        
        const availableModules = requiredModules.filter(module => 
            typeof window[module] !== 'undefined'
        );
        
        console.log(`📦 Modul tersedia: ${availableModules.length}/${requiredModules.length}`);
        
        return availableModules.length >= 3; // Minimal 3 modul critical
    }

    async waitForModules() {
        return new Promise((resolve) => {
            const checkModules = () => {
                this.initializationAttempts++;
                
                if (this.areModulesAvailable() || this.initializationAttempts >= this.maxInitializationAttempts) {
                    resolve();
                } else {
                    console.log(`⏳ Menunggu modul... (attempt ${this.initializationAttempts})`);
                    setTimeout(checkModules, 500);
                }
            };
            
            checkModules();
        });
    }

    async initializeWithProperOrder() {
        console.log('🔄 Menginisialisasi dengan urutan yang benar...');
        
        // Step 1: Initialize core dependencies
        await this.initializeCoreDependencies();
        
        // Step 2: Initialize data module
        await this.initializeDataModule();
        
        // Step 3: Initialize UI managers dengan error handling
        await this.initializeUIManagers();
        
        // Step 4: Initialize feature modules
        await this.initializeFeatureModules();
        
        // Step 5: Setup event listeners
        await this.setupEventListeners();
    }

    async initializeCoreDependencies() {
        console.log('📦 Menginisialisasi dependencies inti...');
        
        // Initialize utilities
        if (typeof initModal === 'function') {
            initModal();
            console.log('✅ Modal utilities diinisialisasi');
        }
        
        await this.delay(100);
    }

    async initializeDataModule() {
        console.log('🗃️ Memuat modul data...');
        
        // Pastikan data.js sudah dimuat
        if (typeof getAllDestinations === 'function') {
            const destinations = getAllDestinations();
            console.log(`📊 Data destinasi tersedia: ${destinations.length} destinasi`);
            
            // Initialize category counts
            await this.initializeCategoryCounts();
        } else {
            throw new Error('Modul data tidak tersedia');
        }
        
        await this.delay(100);
    }

    async initializeCategoryCounts() {
        try {
            if (typeof initializeCategoryCounts === 'function') {
                initializeCategoryCounts();
                console.log('✅ Category counts diinisialisasi');
            }
            
            // Update display dengan delay
            setTimeout(() => {
                if (typeof updateCategoryCountsDisplay === 'function') {
                    updateCategoryCountsDisplay();
                }
            }, 500);
        } catch (error) {
            console.warn('⚠️ Gagal inisialisasi category counts:', error);
        }
    }

    async initializeUIManagers() {
        console.log('🎨 Menginisialisasi UI managers...');
        
        // Theme Manager - critical
        await this.initializeModule('themeManager', 'ThemeManager', 'manajer tema', true);
        
        // Navigation Manager - critical  
        await this.initializeModule('navigationManager', 'NavigationManager', 'manajer navigasi', true);
        
        // Mobile Navigation
        await this.initializeModule('mobileNavigation', 'MobileNavigation', 'navigasi mobile', false);
        
        await this.delay(100);
    }

    async initializeFeatureModules() {
        console.log('⚙️ Menginisialisasi modul fitur...');
        
        // Search Manager
        await this.initializeModule('searchManager', 'SearchManager', 'manajer pencarian', true);
        
        // Favorites Manager
        await this.initializeModule('favoritesManager', 'FavoritesManager', 'manajer favorit', true);
        
        // Statistics Manager
        await this.initializeModule('statisticsManager', 'StatisticsManager', 'manajer statistik', false);
        
        // Render Manager - critical
        await this.initializeModule('renderManager', 'RenderManager', 'manajer render', true);
        
        await this.delay(150);
    }

    async initializeModule(globalVar, className, description, isCritical = false) {
        try {
            if (typeof window[className] !== 'undefined') {
                window[globalVar] = new window[className]();
                this.modules[globalVar] = { status: 'success', description };
                console.log(`✅ ${description} diinisialisasi`);
            } else {
                const errorMsg = `${className} tidak tersedia`;
                this.modules[globalVar] = { status: 'failed', description, error: errorMsg };
                
                if (isCritical) {
                    console.error(`❌ ${description} GAGAL: ${errorMsg}`);
                } else {
                    console.warn(`⚠️ ${description} tidak tersedia`);
                }
            }
        } catch (error) {
            const errorMsg = error.message;
            this.modules[globalVar] = { status: 'error', description, error: errorMsg };
            console.error(`❌ Gagal menginisialisasi ${description}:`, error);
        }
        
        await this.delay(30);
    }

    async setupEventListeners() {
        console.log('🔗 Mengatur event listener...');
        
        this.setupErrorHandling();
        this.setupConnectivityMonitoring();
        this.setupPerformanceMonitoring();
        this.setupBackToTop();
        this.setupKeyboardShortcuts();
        this.setupVisibilityHandler();
        this.setupResizeHandler();
        
        console.log('✅ Event listener berhasil diatur');
    }

    async finalizeInitialization() {
        console.log('🎯 Finalisasi inisialisasi...');
        
        // Show welcome experience
        this.showWelcomeExperience();
        
        // Initialize additional features (non-critical)
        this.initializeAdditionalFeatures();
        
        // Hide loading
        setTimeout(() => {
            this.hideLoading();
            this.performFinalUpdates();
        }, 1000);
    }

    showWelcomeExperience() {
        const firstVisit = !localStorage.getItem('hasVisited');
        
        if (firstVisit) {
            setTimeout(() => {
                this.showToast('🎉 Selamat datang di Wisata Tangerang Selatan!');
                localStorage.setItem('hasVisited', 'true');
            }, 1000);
        }
        
        // Update berbagai tampilan dengan staggered delay
        const updates = [
            { fn: () => this.updateStatistics(), delay: 800 },
            { fn: () => this.updateFavoriteCounts(), delay: 1000 },
            { fn: () => this.updateCategoryCounts(), delay: 1200 },
            { fn: () => this.updateNavigationState(), delay: 1500 }
        ];
        
        updates.forEach(({ fn, delay }) => {
            setTimeout(fn, delay);
        });
    }

    updateStatistics() {
        if (this.modules.statisticsManager?.status === 'success' && typeof updateStatistics === 'function') {
            updateStatistics();
        }
    }

    updateFavoriteCounts() {
        if (this.modules.favoritesManager?.status === 'success' && window.favoritesManager) {
            window.favoritesManager.updateFavoriteCounts();
        }
    }

    updateCategoryCounts() {
        if (typeof updateCategoryCountsDisplay === 'function') {
            updateCategoryCountsDisplay();
        }
    }

    updateNavigationState() {
        if (this.modules.navigationManager?.status === 'success' && window.navigationManager) {
            const currentSection = window.navigationManager.getCurrentSection();
            window.navigationManager.updateActiveNavStates(currentSection);
        }
    }

    initializeAdditionalFeatures() {
        console.log('🔧 Menginisialisasi fitur tambahan...');
        
        // Use requestIdleCallback untuk fitur non-critical
        const initNonCritical = () => {
            this.initializePWA();
            this.initializeAnalytics();
            this.initializeSEO();
        };
        
        if ('requestIdleCallback' in window) {
            requestIdleCallback(initNonCritical);
        } else {
            setTimeout(initNonCritical, 2000);
        }
    }

    initializePWA() {
        if (typeof PWAManager !== 'undefined') {
            try {
                window.pwaManager = new PWAManager();
                console.log('✅ Fitur PWA diinisialisasi');
            } catch (error) {
                console.warn('⚠️ Gagal menginisialisasi PWA:', error);
            }
        }
    }

    initializeAnalytics() {
        if (typeof AnalyticsManager !== 'undefined') {
            try {
                window.analyticsManager = new AnalyticsManager();
                console.log('✅ Analytics diinisialisasi');
            } catch (error) {
                console.warn('⚠️ Gagal menginisialisasi analytics:', error);
            }
        }
    }

    initializeSEO() {
        if (typeof SEOManager !== 'undefined') {
            try {
                window.seoManager = new SEOManager();
                console.log('✅ SEO diinisialisasi');
            } catch (error) {
                console.warn('⚠️ Gagal menginisialisasi SEO:', error);
            }
        }
    }

    performFinalUpdates() {
        console.log('🔍 Melakukan final check...');
        
        // Update statistics
        this.updateStatistics();
        
        // Check critical modules
        this.checkCriticalModules();
        
        // Log status akhir
        this.logFinalStatus();
    }

    checkCriticalModules() {
        const criticalModules = ['themeManager', 'navigationManager', 'renderManager'];
        const failedCriticalModules = criticalModules.filter(
            module => this.modules[module]?.status !== 'success'
        );
        
        if (failedCriticalModules.length > 0) {
            console.warn('⚠️ Modul critical yang gagal:', failedCriticalModules);
            
            if (failedCriticalModules.length === criticalModules.length) {
                this.showToast('Beberapa fitur mungkin tidak berfungsi. Silakan refresh halaman.', 5000);
            }
        }
    }

    logFinalStatus() {
        const status = this.getStatus();
        console.log('📋 Status akhir aplikasi:', status);
    }

    // ===== EVENT HANDLERS =====

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('🚨 Error global:', e.error);
            this.logError('Global Error', e.error);
            this.showToast('⚠️ Terjadi kesalahan. Silakan refresh halaman.');
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('🚨 Promise rejection tidak tertangani:', e.reason);
            this.logError('Unhandled Promise Rejection', e.reason);
        });
    }

    setupConnectivityMonitoring() {
        window.addEventListener('online', () => {
            console.log('🌐 Koneksi internet tersedia');
            this.showToast('✅ Koneksi internet tersedia', 2000);
            if (this.isInitialized) this.refreshData();
        });

        window.addEventListener('offline', () => {
            console.log('📴 Koneksi internet terputus');
            this.showToast('📶 Anda sedang offline', 3000);
        });
    }

    setupPerformanceMonitoring() {
        if (this.isDevelopment()) return;

        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 100) {
                            console.warn('🐌 Task lama terdeteksi:', {
                                duration: Math.round(entry.duration),
                                name: entry.name
                            });
                        }
                    }
                });
                observer.observe({ entryTypes: ['longtask'] });
            } catch (error) {
                console.warn('⚠️ PerformanceObserver tidak didukung');
            }
        }
    }

    setupBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        if (backToTopButton) {
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const scrollY = window.pageYOffset;
                    backToTopButton.classList.toggle('visible', scrollY > window.innerHeight);
                }, 100);
            }, { passive: true });
            
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            if (e.key === 'Escape') {
                if (this.modules.mobileNavigation?.status === 'success' && window.mobileNavigation?.isOpen) {
                    window.mobileNavigation.closeMenu();
                    e.preventDefault();
                }
            }
        });
    }

    setupVisibilityHandler() {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.onTabActive();
            }
        });
    }

    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.onWindowResize();
            }, 250);
        });
    }

    // ===== UTILITY METHODS =====

    onTabActive() {
        console.log('👀 Tab aktif');
        if (this.isInitialized) this.refreshData();
    }

    onWindowResize() {
        console.log('📐 Ukuran window berubah');
        if (this.modules.renderManager?.status === 'success') {
            window.renderManager.renderHomePage();
        }
    }

    refreshData() {
        console.log('🔄 Memperbarui data...');
        this.updateStatistics();
        this.updateCategoryCounts();
    }

    showLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) spinner.style.display = 'flex';
    }

    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) spinner.style.display = 'none';
    }

    showToast(message, duration = 3000) {
        if (typeof showToast === 'function') {
            showToast(message, duration);
        } else {
            console.log('Toast:', message);
        }
    }

    logError(type, error) {
        console.error('📝 Error logged:', { type, message: error?.message, timestamp: new Date().toISOString() });
    }

    handleInitializationError(error) {
        console.error('💥 Gagal inisialisasi aplikasi:', error);
        this.showToast('❌ Gagal memuat aplikasi. Silakan refresh halaman.');
        this.hideLoading();
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    isDevelopment() {
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1';
    }

    getStatus() {
        return {
            initialized: this.isInitialized,
            modules: this.modules,
            currentSection: this.currentSection,
            online: navigator.onLine,
            theme: document.body.getAttribute('data-theme') || 'dark'
        };
    }
}

// ===== BOOTSTRAP =====

function bootstrapApplication() {
    console.log('🚀 Memulai aplikasi Wisata Tangerang Selatan...');
    
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('✅ Service Worker terdaftar'))
            .catch(error => console.error('❌ Service Worker gagal:', error));
    }
    
    // Start app ketika DOM ready
    const startApp = () => {
        // Tunggu sedikit untuk memastikan semua script loaded
        setTimeout(() => {
            window.app = new App();
        }, 100);
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startApp);
    } else {
        startApp();
    }
}

// Global error handling
window.addEventListener('error', (e) => {
    console.error('💥 Error selama runtime:', e.error);
});

// Start the application
bootstrapApplication();

// Global function untuk mendapatkan status app
window.getAppStatus = () => {
    return window.app ? window.app.getStatus() : { error: 'Aplikasi belum diinisialisasi' };
};

