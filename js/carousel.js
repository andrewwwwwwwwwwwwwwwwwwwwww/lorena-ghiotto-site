/* ======================================
   CAROUSEL.JS - Reviews Carousel
   ====================================== */

class ReviewsCarousel {
    constructor() {
        this.currentIndex = 0;
        this.reviews = [];
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        this.isPaused = false;
        
        this.init();
    }

    async init() {
        try {
            await this.loadReviews();
            if (this.reviews && this.reviews.length > 0) {
                this.setupCarousel();
                this.setupEventListeners();
                this.startAutoPlay();
            } else {
                console.error('No reviews found');
                const container = document.getElementById('carouselContainer');
                if (container) {
                    container.innerHTML = '<div class="loading-reviews">Nessuna recensione disponibile.</div>';
                }
            }
        } catch (error) {
            console.error('Failed to initialize carousel:', error);
            const container = document.getElementById('carouselContainer');
            if (container) {
                container.innerHTML = '<div class="loading-reviews">Errore nell\'inizializzazione del carosello.</div>';
            }
        }
    }

    async loadReviews() {
        console.log('Loading reviews...');
        const response = await fetch('reviews_complete.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.reviews = data.reviews;
        console.log('Reviews loaded:', this.reviews.length);
        
        // Update stats
        const avgRatingEl = document.getElementById('averageRating');
        const totalReviewsEl = document.getElementById('totalReviews');
        if (avgRatingEl) avgRatingEl.textContent = data.statistics.average_rating.toFixed(1);
        if (totalReviewsEl) totalReviewsEl.textContent = data.statistics.total_reviews;
    }

    setupCarousel() {
        console.log('Setting up carousel with', this.reviews.length, 'reviews');
        const container = document.getElementById('carouselContainer');
        const controls = document.getElementById('carouselControls');
        const dotsContainer = document.getElementById('carouselDots');

        if (!container) {
            console.error('carouselContainer not found');
            return;
        }
        if (!controls) {
            console.error('carouselControls not found');
            return;
        }
        if (!dotsContainer) {
            console.error('carouselDots not found');
            return;
        }

        if (this.reviews.length === 0) {
            console.error('No reviews to display');
            container.innerHTML = '<div class="loading-reviews">Nessuna recensione trovata.</div>';
            return;
        }

        // Create carousel track
        const track = document.createElement('div');
        track.className = 'carousel-track';
        track.id = 'carouselTrack';

        // Create review cards
        this.reviews.forEach((review, index) => {
            const card = this.createReviewCard(review, index);
            track.appendChild(card);
            console.log('Created card', index + 1, 'of', this.reviews.length);
        });

        container.innerHTML = '';
        container.appendChild(track);
        controls.style.display = 'flex';
        console.log('Track appended to container, controls displayed');

        // Create dots
        this.reviews.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'dot';
            dot.setAttribute('aria-label', `Vai alla recensione ${index + 1}`);
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Show first review
        this.showReview(0);
    }

    createReviewCard(review, index) {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.setAttribute('data-index', index);

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const date = new Date(review.date).toLocaleDateString('it-IT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const categories = review.categories
            .map(cat => `<span class="category-tag">${cat}</span>`)
            .join('');

        card.innerHTML = `
            <div class="review-header">
                <div class="review-author">
                    <div class="author-name">
                        ${review.author}
                        ${review.verified ? '<span class="verified-badge">Verificato</span>' : ''}
                    </div>
                    <div class="review-date">${date}</div>
                </div>
                <div class="review-rating">
                    <span class="stars">${stars}</span>
                </div>
            </div>
            <div class="review-title">${review.title}</div>
            <div class="review-text">${review.text}</div>
            <div class="review-categories">${categories}</div>
        `;

        return card;
    }

    showReview(index) {
        console.log('showReview called with index:', index);
        const track = document.getElementById('carouselTrack');
        const dots = document.querySelectorAll('.dot');
        
        if (!track) {
            console.error('Track not found');
            return;
        }

        console.log('Found track, dots:', dots.length);

        // Move track to show the correct card
        const offset = -100 * index;
        track.style.transform = `translateX(${offset}%)`;
        console.log('Track transformed to:', offset + '%');

        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }

        this.currentIndex = index;
    }

    goToSlide(index) {
        this.showReview(index);
        this.resetAutoPlay();
    }

    nextReview() {
        console.log('nextReview called, current:', this.currentIndex);
        const nextIndex = (this.currentIndex + 1) % this.reviews.length;
        this.goToSlide(nextIndex);
    }

    prevReview() {
        console.log('prevReview called, current:', this.currentIndex);
        const prevIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
        this.goToSlide(prevIndex);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const container = document.getElementById('carouselContainer');

        console.log('prevBtn:', prevBtn, 'nextBtn:', nextBtn, 'container:', container);

        if (prevBtn && nextBtn && container) {
            prevBtn.addEventListener('click', () => {
                console.log('Prev button clicked');
                this.prevReview();
            });
            nextBtn.addEventListener('click', () => {
                console.log('Next button clicked');
                this.nextReview();
            });
            console.log('Event listeners attached to navigation buttons');

            // Pause on hover
            container.addEventListener('mouseenter', () => this.pauseAutoPlay());
            container.addEventListener('mouseleave', () => this.resumeAutoPlay());

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevReview();
                if (e.key === 'ArrowRight') this.nextReview();
            });

            // Touch swipe support
            let touchStartX = 0;
            let touchEndX = 0;

            container.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });

            container.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX);
            });
        }
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextReview();
            } else {
                this.prevReview();
            }
        }
    }

    startAutoPlay() {
        console.log('Starting auto-play with delay:', this.autoPlayDelay);
        this.autoPlayInterval = setInterval(() => {
            if (!this.isPaused) {
                console.log('Auto-play tick');
                this.nextReview();
            }
        }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
        this.isPaused = true;
    }

    resumeAutoPlay() {
        this.isPaused = false;
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}
