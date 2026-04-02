/* ======================================
   CAROUSEL.JS - Reviews Carousel (Simple Version)
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
                this.render();
                this.setupEventListeners();
                this.startAutoPlay();
            } else {
                document.getElementById('reviewsContent').innerHTML = '<p style="text-align:center;color:#888;">Nessuna recensione disponibile.</p>';
            }
        } catch (error) {
            console.error('Carousel error:', error);
            document.getElementById('reviewsContent').innerHTML = '<p style="text-align:center;color:#888;">Errore nel caricamento recensioni.</p>';
        }
    }

    async loadReviews() {
        const url = (typeof lorenaReviewsUrl !== 'undefined') ? lorenaReviewsUrl : 'reviews_complete.json';
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        this.reviews = data.reviews;
        
        // Update stats
        const avgEl = document.getElementById('averageRating');
        const totalEl = document.getElementById('totalReviews');
        if (avgEl) avgEl.textContent = data.statistics.average_rating.toFixed(1);
        if (totalEl) totalEl.textContent = data.statistics.total_reviews;
    }

    render() {
        const review = this.reviews[this.currentIndex];
        const content = document.getElementById('reviewsContent');
        const controls = document.getElementById('carouselControls');
        const dotsContainer = document.getElementById('carouselDots');
        
        if (!content || !review) return;

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const date = new Date(review.date).toLocaleDateString('it-IT', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
        const categories = review.categories.map(cat => 
            `<span style="display:inline-block;background:#e8f0e8;color:#5c7a5c;padding:3px 10px;border-radius:20px;font-size:12px;margin:2px;">${cat}</span>`
        ).join('');

        content.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
                <div>
                    <div style="font-weight:600;color:#333;">
                        ${review.author}
                        ${review.verified ? '<span style="background:#d4edda;color:#155724;font-size:11px;padding:2px 8px;border-radius:10px;margin-left:8px;">✓ Verificato</span>' : ''}
                    </div>
                    <div style="color:#888;font-size:13px;">${date}</div>
                </div>
                <div style="color:#5c7a5c;font-size:18px;letter-spacing:2px;">${stars}</div>
            </div>
            <div style="font-weight:600;color:#5c7a5c;margin-bottom:8px;font-size:16px;">${review.title}</div>
            <div style="color:#555;line-height:1.6;margin-bottom:12px;">${review.text}</div>
            <div>${categories}</div>
        `;

        // Show controls
        if (controls) controls.style.display = 'flex';

        // Update dots
        if (dotsContainer && dotsContainer.children.length === 0) {
            this.reviews.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Recensione ${i + 1}`);
                dot.onclick = () => this.goToSlide(i);
                dotsContainer.appendChild(dot);
            });
        } else if (dotsContainer) {
            Array.from(dotsContainer.children).forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentIndex);
            });
        }
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.render();
        this.resetAutoPlay();
    }

    nextReview() {
        this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
        this.render();
    }

    prevReview() {
        this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
        this.render();
    }

    setupEventListeners() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const content = document.getElementById('reviewsContent');

        if (prevBtn) prevBtn.onclick = () => { this.prevReview(); this.resetAutoPlay(); };
        if (nextBtn) nextBtn.onclick = () => { this.nextReview(); this.resetAutoPlay(); };

        if (content) {
            content.onmouseenter = () => this.isPaused = true;
            content.onmouseleave = () => this.isPaused = false;

            // Touch swipe
            let startX = 0;
            content.ontouchstart = (e) => startX = e.changedTouches[0].screenX;
            content.ontouchend = (e) => {
                const diff = startX - e.changedTouches[0].screenX;
                if (Math.abs(diff) > 50) {
                    diff > 0 ? this.nextReview() : this.prevReview();
                    this.resetAutoPlay();
                }
            };
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { this.prevReview(); this.resetAutoPlay(); }
            if (e.key === 'ArrowRight') { this.nextReview(); this.resetAutoPlay(); }
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            if (!this.isPaused) this.nextReview();
        }, this.autoPlayDelay);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}
