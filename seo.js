// ===== SEO OPTIMIZATION =====

class SEOManager {
    constructor() {
        this.init();
    }

    init() {
        this.updateStructuredData();
        this.manageMetaTags();
        this.enhanceAccessibility();
        this.optimizeSocialSharing();
    }

    // Update structured data for search engines
    updateStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Wisata Tangerang Selatan",
            "description": "Portal informasi destinasi wisata Kota Tangerang Selatan",
            "url": window.location.href,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tangerang Selatan",
                "addressRegion": "Banten",
                "addressCountry": "ID"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "1000"
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${window.location.origin}/?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };

        // Add script tag to head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }

    // Manage dynamic meta tags
    manageMetaTags() {
        // Update meta description based on current section
        const updateMetaDescription = (description) => {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description;
        };

        // Update canonical URL
        const updateCanonicalUrl = (url) => {
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.rel = 'canonical';
                document.head.appendChild(canonical);
            }
            canonical.href = url;
        };

        // Listen for section changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('section') && target.classList.contains('active')) {
                        const section = target.id;
                        this.updateMetaForSection(section);
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

    updateMetaForSection(section) {
        const metaData = {
            home: {
                title: "Wisata Tangerang Selatan - Explore Destinasi Menarik",
                description: "Temukan berbagai destinasi menarik di Kota Tangerang Selatan. Dari wisata alam yang menyejukkan hingga pusat perbelanjaan modern.",
                canonical: window.location.origin
            },
            statistics: {
                title: "Statistik Wisata - Tangerang Selatan",
                description: "Data dan statistik lengkap tentang destinasi wisata di Kota Tangerang Selatan.",
                canonical: `${window.location.origin}/#statistics`
            },
            favorites: {
                title: "Favorit Saya - Wisata Tangerang Selatan",
                description: "Kumpulan destinasi wisata favorit Anda di Tangerang Selatan.",
                canonical: `${window.location.origin}/#favorites`
            }
            // Add more sections as needed
        };

        const data = metaData[section] || metaData.home;
        
        // Update document title
        document.title = data.title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = data.description;
        }
        
        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.href = data.canonical;
        }
    }

    // Enhance accessibility
    enhanceAccessibility() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add ARIA labels to interactive elements
        this.enhanceARIALabels();
        
        // Manage focus for better keyboard navigation
        this.manageFocus();
    }

    enhanceARIALabels() {
        // Add ARIA labels to cards
        document.querySelectorAll('.card').forEach((card, index) => {
            const title = card.querySelector('h2, h3')?.textContent;
            if (title) {
                card.setAttribute('aria-label', `Destinasi: ${title}`);
            }
        });

        // Add ARIA labels to navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            const section = btn.getAttribute('data-section');
            if (section) {
                btn.setAttribute('aria-label', `Navigasi ke ${getDistrictName(section) || section}`);
            }
        });
    }

    manageFocus() {
        // Trap focus in mobile menu when open
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && window.mobileNavigation?.isOpen) {
                this.trapFocus(e, document.getElementById('mobileNavSidebar'));
            }
        });
    }

    trapFocus(e, container) {
        const focusableElements = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }

    // Optimize social sharing
    optimizeSocialSharing() {
        // Update Open Graph tags dynamically
        const updateOpenGraphTags = (title, description, image) => {
            // OG Title
            let ogTitle = document.querySelector('meta[property="og:title"]');
            if (!ogTitle) {
                ogTitle = document.createElement('meta');
                ogTitle.setAttribute('property', 'og:title');
                document.head.appendChild(ogTitle);
            }
            ogTitle.content = title;

            // OG Description
            let ogDescription = document.querySelector('meta[property="og:description"]');
            if (!ogDescription) {
                ogDescription = document.createElement('meta');
                ogDescription.setAttribute('property', 'og:description');
                document.head.appendChild(ogDescription);
            }
            ogDescription.content = description;

            // OG Image
            let ogImage = document.querySelector('meta[property="og:image"]');
            if (!ogImage) {
                ogImage = document.createElement('meta');
                ogImage.setAttribute('property', 'og:image');
                document.head.appendChild(ogImage);
            }
            ogImage.content = image || `${window.location.origin}/images/og-image.jpg`;

            // OG URL
            let ogUrl = document.querySelector('meta[property="og:url"]');
            if (!ogUrl) {
                ogUrl = document.createElement('meta');
                ogUrl.setAttribute('property', 'og:url');
                document.head.appendChild(ogUrl);
            }
            ogUrl.content = window.location.href;
        };

        // Update Twitter Card tags
        const updateTwitterTags = (title, description, image) => {
            // Twitter Card
            let twitterCard = document.querySelector('meta[name="twitter:card"]');
            if (!twitterCard) {
                twitterCard = document.createElement('meta');
                twitterCard.setAttribute('name', 'twitter:card');
                document.head.appendChild(twitterCard);
            }
            twitterCard.content = 'summary_large_image';

            // Twitter Title
            let twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (!twitterTitle) {
                twitterTitle = document.createElement('meta');
                twitterTitle.setAttribute('name', 'twitter:title');
                document.head.appendChild(twitterTitle);
            }
            twitterTitle.content = title;

            // Twitter Description
            let twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (!twitterDescription) {
                twitterDescription = document.createElement('meta');
                twitterDescription.setAttribute('name', 'twitter:description');
                document.head.appendChild(twitterDescription);
            }
            twitterDescription.content = description;

            // Twitter Image
            let twitterImage = document.querySelector('meta[name="twitter:image"]');
            if (!twitterImage) {
                twitterImage = document.createElement('meta');
                twitterImage.setAttribute('name', 'twitter:image');
                document.head.appendChild(twitterImage);
            }
            twitterImage.content = image || `${window.location.origin}/images/twitter-image.jpg`;
        };

        // Initialize with default values
        updateOpenGraphTags(
            "Wisata Tangerang Selatan - Explore Destinasi Menarik",
            "Temukan berbagai destinasi menarik di Kota Tangerang Selatan",
            `${window.location.origin}/images/og-image.jpg`
        );
        
        updateTwitterTags(
            "Wisata Tangerang Selatan - Explore Destinasi Menarik",
            "Temukan berbagai destinasi menarik di Kota Tangerang Selatan",
            `${window.location.origin}/images/twitter-image.jpg`
        );
    }
}

// Initialize SEO when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.seoManager = new SEOManager();
});