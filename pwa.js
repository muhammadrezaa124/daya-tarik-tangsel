// ===== PWA FUNCTIONALITY =====

class PWAManager {
    constructor() {
        this.init();
    }

    async init() {
        this.registerServiceWorker();
        this.installPromptHandler();
        this.detectStandaloneMode();
    }

    // Register Service Worker
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('Service Worker registered: ', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('New service worker found:', newWorker);
                });
            } catch (error) {
                console.error('Service Worker registration failed: ', error);
            }
        }
    }

    // Handle Install Prompt
    installPromptHandler() {
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later
            deferredPrompt = e;
            
            // Show install button
            this.showInstallPromotion();
        });

        // Install button click handler
        const installButton = document.getElementById('installButton');
        if (installButton) {
            installButton.addEventListener('click', async () => {
                if (deferredPrompt) {
                    // Show the install prompt
                    deferredPrompt.prompt();
                    // Wait for the user to respond to the prompt
                    const { outcome } = await deferredPrompt.userChoice;
                    console.log(`User response to the install prompt: ${outcome}`);
                    // We've used the prompt, and can't use it again, throw it away
                    deferredPrompt = null;
                    // Hide the install button
                    this.hideInstallPromotion();
                }
            });
        }
    }

    showInstallPromotion() {
        const installButton = document.getElementById('installButton');
        if (installButton) {
            installButton.style.display = 'block';
        }
        
        // Show toast notification
        if (typeof showToast === 'function') {
            showToast('Aplikasi bisa diinstall!', 5000);
        }
    }

    hideInstallPromotion() {
        const installButton = document.getElementById('installButton');
        if (installButton) {
            installButton.style.display = 'none';
        }
    }

    // Detect if app is running in standalone mode
    detectStandaloneMode() {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            document.body.classList.add('standalone-mode');
        }
    }

    // Check connectivity status
    monitorConnectivity() {
        window.addEventListener('online', () => {
            if (typeof showToast === 'function') {
                showToast('Koneksi internet tersedia', 2000);
            }
        });

        window.addEventListener('offline', () => {
            if (typeof showToast === 'function') {
                showToast('Anda sedang offline', 3000);
            }
        });
    }
}

// Initialize PWA when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.pwaManager = new PWAManager();
});