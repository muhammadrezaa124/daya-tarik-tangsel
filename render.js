// ===== RENDER FUNCTIONS =====

class RenderManager {
    constructor() {
        this.init();
    }

    init() {
        this.renderHomePage();
        setTimeout(() => this.renderAllDistricts(), 300);
        setTimeout(() => this.initializeCategoryCounts(), 500);
    }

    renderHomePage() {
        this.renderPopularDestinations();
        this.bindCategoryCards();
    }

    // ===== POPULAR DESTINATIONS =====
    renderPopularDestinations() {
        const container = document.getElementById('popularDestinations');
        if (!container) return;

        const popularDests = getPopularDestinations(6);

        if (popularDests.length === 0) {
            container.innerHTML = '<p class="no-data">Tidak ada data destinasi populer</p>';
            return;
        }

        container.innerHTML = popularDests.map(dest => `
            <div class="popular-card"
                 data-id="${dest.id}"
                 data-district="${dest.district}"
                 data-categories="${dest.categories.join(' ')}">

                <div class="popular-image">
                    <img src="${dest.image}" alt="${dest.title}" loading="lazy">
                    <div class="popular-overlay">
                        <button class="quick-view-btn"
                            onclick="showDestinationDetail('${dest.id}', '${dest.district}')">
                            Lihat Detail
                        </button>
                    </div>
                </div>

                <div class="popular-content">
                    <h3>${dest.title}</h3>
                    <div class="rating">
                        <div class="stars">${this.renderStars(dest.rating)}</div>
                        <span class="review-count">(${dest.reviewCount} ulasan)</span>
                    </div>
                    <p class="district-badge">${getDistrictName(dest.district)}</p>
                </div>
            </div>
        `).join('');
    }

    // ===== STAR RENDER =====
    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
        if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
        for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
        return stars;
    }

    // ===== CATEGORY CARD =====
    bindCategoryCards() {
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const filter = card.getAttribute('data-filter');
                if (!filter) return;

                const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
                if (filterBtn && window.searchManager) {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    filterBtn.classList.add('active');
                    window.searchManager.applyFilter(filterBtn);
                }

                if (window.navigationManager) {
                    window.navigationManager.showSection('home');
                }
            });
        });
    }

    // ===== ALL DISTRICTS =====
    renderAllDistricts() {
        const districts = [
            'ciputat',
            'ciputattimur',
            'setu',
            'pondokaren',
            'pamulang',
            'serpong',
            'serpongutara'
        ];
        districts.forEach(district => this.renderDistrictSection(district));
    }

    // ===== DISTRICT SECTION =====
    renderDistrictSection(district) {
        const container = document.getElementById(`${district}Content`);
        if (!container) return;

        const destinations = getDestinationsByDistrict(district);

        if (destinations.length === 0) {
            container.innerHTML = `
                <div class="no-destinations">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Belum ada destinasi untuk ${getDistrictName(district)}</h3>
                    <p>Destinasi akan segera ditambahkan</p>
                </div>
            `;
            return;
        }

        container.innerHTML = destinations.map(dest => `
            <div class="card destination-card"
                 data-id="${dest.id}"
                 data-categories="${dest.categories.join(' ')}">

                <div class="card-header">
                    <h2>${dest.title}</h2>
                    <div class="card-actions">
                        <button class="action-btn favorite" data-id="${dest.id}">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="action-btn share" data-id="${dest.id}">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>

                <div class="card-content">
                    <div class="card-image">
                        <img src="${dest.image}" alt="${dest.title}" loading="lazy">
                        <small>Sumber foto: Berbagai media</small>
                    </div>

                    <div class="card-text">
                        <p>${dest.description}</p>

                        <div class="destination-info">
                            <div class="info-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${dest.address}</span>
                            </div>
                            <div class="category-tags">
                                ${dest.categories.map(cat =>
                                    `<span class="category-tag">${getCategoryName(cat)}</span>`
                                ).join('')}
                            </div>
                        </div>

                        <div class="rating">
                            <div class="stars">${this.renderStars(dest.rating)}</div>
                            <span class="review-count">(${dest.reviewCount} ulasan)</span>
                        </div>
                    </div>
                </div>

                <!-- ===== MEDIA ===== -->
                <div class="card-media">

                    <!-- VIDEO THUMBNAIL -->
                    <div class="media-item video-thumb">
                        <a href="${dest.video}" target="_blank" class="video-link">
                            <img
                                src="https://img.youtube.com/vi/${dest.videoId}/hqdefault.jpg"
                                alt="Video ${dest.title}"
                                loading="lazy"
                            >
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                        </a>
                        <small>Tonton video di YouTube</small>
                    </div>

                    <!-- MAP -->
                    <div class="media-item">
                        <iframe
                            src="${dest.map}"
                            width="100%"
                            height="200"
                            frameborder="0"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                        <small>Lihat di Google Maps</small>
                    </div>

                </div>
            </div>
        `).join('');

        this.initializeFavoriteButtons(container);
    }

    // ===== FAVORITE & SHARE =====
    initializeFavoriteButtons(container) {
        const favoriteButtons = container.querySelectorAll('.favorite');

        favoriteButtons.forEach(button => {
            const cardId = button.getAttribute('data-id');

            if (window.favoritesManager && window.favoritesManager.isFavorite(cardId)) {
                button.classList.add('active');
                const icon = button.querySelector('i');
                if (icon) icon.className = 'fas fa-heart';
            }

            button.addEventListener('click', e => {
                e.stopPropagation();
                if (window.favoritesManager) {
                    window.favoritesManager.toggleFavorite(cardId);
                }
            });
        });

        const shareButtons = container.querySelectorAll('.share');
        shareButtons.forEach(button => {
            button.addEventListener('click', e => {
                e.stopPropagation();
                if (window.favoritesManager) {
                    window.favoritesManager.handleShare(button);
                }
            });
        });
    }

    initializeCategoryCounts() {
        if (typeof updateCategoryCountsDisplay === 'function') {
            updateCategoryCountsDisplay();
        }
    }
}

// ===== QUICK VIEW =====
function showDestinationDetail(destId, district) {
    if (!window.navigationManager) return;

    window.navigationManager.showSection(district);

    setTimeout(() => {
        const destElement = document.querySelector(`[data-id="${destId}"]`);
        if (!destElement) return;

        destElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        destElement.style.transition = 'all 0.3s ease';
        destElement.style.boxShadow = '0 0 0 3px var(--primary-color)';

        setTimeout(() => {
            destElement.style.boxShadow = '';
        }, 2000);
    }, 500);
}

// ===== INIT =====
setTimeout(() => {
    window.renderManager = new RenderManager();
}, 100);
