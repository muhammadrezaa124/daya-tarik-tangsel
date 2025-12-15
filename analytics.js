// ===== ANALYTICS & PERFORMANCE MONITORING =====

class AnalyticsManager {
    constructor() {
        this.init();
    }

    init() {
        this.trackPageViews();
        this.trackUserInteractions();
        this.monitorPerformance();
        this.trackErrors();
    }

    // Track page views
    trackPageViews() {
        let previousSection = 'home';
        
        // Track section changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('section') && target.classList.contains('active')) {
                        const currentSection = target.id;
                        this.logEvent('section_view', {
                            section: currentSection,
                            previous_section: previousSection
                        });
                        previousSection = currentSection;
                    }
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class']
        });
    }

    // Track user interactions
    trackUserInteractions() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            
            // Track navigation clicks
            if (target.closest('.nav-btn')) {
                const section = target.closest('.nav-btn').getAttribute('data-section');
                this.logEvent('navigation_click', { section });
            }
            
            // Track filter usage
            if (target.closest('.filter-btn')) {
                const filter = target.closest('.filter-btn').getAttribute('data-filter');
                this.logEvent('filter_used', { filter });
            }
            
            // Track favorite actions
            if (target.closest('.favorite')) {
                const cardId = target.closest('.favorite').getAttribute('data-id');
                const isFavorite = target.closest('.favorite').classList.contains('active');
                this.logEvent('favorite_toggle', { 
                    card_id: cardId, 
                    action: isFavorite ? 'remove' : 'add' 
                });
            }
            
            // Track search queries
            if (target.closest('#searchButton')) {
                const query = document.getElementById('searchInput')?.value;
                if (query) {
                    this.logEvent('search_performed', { query });
                }
            }
        });
    }

    // Monitor performance
    monitorPerformance() {
        // Core Web Vitals
        if ('PerformanceObserver' in window) {
            // LCP (Largest Contentful Paint)
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                this.logEvent('performance_metric', {
                    metric: 'LCP',
                    value: lastEntry.startTime,
                    url: lastEntry.name
                });
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // FID (First Input Delay)
            const fidObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach(entry => {
                    this.logEvent('performance_metric', {
                        metric: 'FID',
                        value: entry.processingStart - entry.startTime,
                        url: entry.name
                    });
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // CLS (Cumulative Layout Shift)
            let clsValue = 0;
            let clsEntries = [];
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsEntries.push(entry);
                        clsValue += entry.value;
                    }
                }
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // Report CLS on page hide
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    this.logEvent('performance_metric', {
                        metric: 'CLS',
                        value: clsValue
                    });
                }
            });
        }

        // Custom performance metrics
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            this.logEvent('performance_metric', {
                metric: 'page_load',
                value: loadTime
            });
        });
    }

    // Track errors
    trackErrors() {
        window.addEventListener('error', (e) => {
            this.logEvent('error', {
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno
            });
        });

        window.addEventListener('unhandledrejection', (e) => {
            this.logEvent('promise_rejection', {
                reason: e.reason?.toString()
            });
        });
    }

    // Log event to analytics service
    logEvent(eventName, parameters = {}) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            language: navigator.language,
            ...parameters
        };

        // Send to your analytics endpoint
        this.sendToAnalytics(eventData);
        
        // Also log to console in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Analytics Event:', eventData);
        }
    }

    // Send data to analytics backend
    sendToAnalytics(data) {
        // Replace with your actual analytics endpoint
        const analyticsEndpoint = '/api/analytics';
        
        // Use navigator.sendBeacon for reliable delivery
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
            navigator.sendBeacon(analyticsEndpoint, blob);
        } else {
            // Fallback to fetch API
            fetch(analyticsEndpoint, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                keepalive: true
            }).catch(console.error);
        }
    }

    // Get device information
    getDeviceInfo() {
        return {
            screen_resolution: `${screen.width}x${screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`,
            device_memory: navigator.deviceMemory,
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null
        };
    }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.analyticsManager = new AnalyticsManager();
});