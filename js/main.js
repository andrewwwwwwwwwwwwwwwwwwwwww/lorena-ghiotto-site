/* ======================================
   MAIN.JS - Inizializzazione e Funzioni Principali
   ====================================== */

// --- TAB SWITCHER ---
function showTab(tabName) {
    const tabs = {
        bambini: document.getElementById('tab-bambini'),
        adolescenti: document.getElementById('tab-adolescenti'),
        adulti: document.getElementById('tab-adulti'),
        terzaeta: document.getElementById('tab-terzaeta')
    };
    
    const buttons = {
        bambini: document.getElementById('btn-bambini'),
        adolescenti: document.getElementById('btn-adolescenti'),
        adulti: document.getElementById('btn-adulti'),
        terzaeta: document.getElementById('btn-terzaeta')
    };

    // Nascondi tutti i tab
    Object.values(tabs).forEach(tab => tab.classList.add('hidden'));
    
    // Rimuovi active da tutti i bottoni
    Object.values(buttons).forEach(btn => {
        btn.classList.remove('active-tab', 'shadow-md');
        btn.classList.add('text-secondary', 'bg-gray-100');
    });

    // Mostra il tab selezionato e attiva il bottone
    if (tabs[tabName]) {
        tabs[tabName].classList.remove('hidden');
        buttons[tabName].classList.add('active-tab', 'shadow-md');
        buttons[tabName].classList.remove('text-secondary', 'bg-gray-100');
    }
}

// --- LABORATORI PAGINATION ---
const laboratoriContainer = document.getElementById('laboratori-container');

let currentLabPage = 0;
const labItemsPerPage = 4;
const totalLabPages = Math.ceil(articles.length / labItemsPerPage);

function renderLabPage() {
    if (!laboratoriContainer) return;
    
    laboratoriContainer.innerHTML = '';
    const start = currentLabPage * labItemsPerPage;
    const end = start + labItemsPerPage;
    const pageArticles = articles.slice(start, end);

    pageArticles.forEach(art => {
        const card = document.createElement('div');
        card.className = 'blog-card p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full';
        card.innerHTML = `
            <span class="text-xs font-bold ${art.colorClass} uppercase tracking-widest mb-2 block">${art.tag}</span>
            <h3 class="text-2xl font-bold text-primary mb-4 font-serif">${art.title}</h3>
            <p class="text-secondary mb-6 text-sm flex-grow">${art.excerpt}</p>
            <button onclick="openArticleModal(${art.id})" class="font-bold text-primary hover:text-accent-cta transition text-left mt-auto">Scopri di più &rarr;</button>
        `;
        // se presente immagine, aggiungi miniatura che apparirà al hover
        if (art.bgImage) {
            const thumb = document.createElement('div');
            thumb.className = 'card-thumb';
            const thumbImg = document.createElement('img');
            thumbImg.className = 'card-thumb-img';
            thumbImg.src = encodeURI(art.bgImage);
            thumbImg.alt = art.title + ' - anteprima';
            thumb.appendChild(thumbImg);
            card.appendChild(thumb);
        }

        laboratoriContainer.appendChild(card);
    });

    const prevBtn = document.getElementById('prev-lab-btn');
    const nextBtn = document.getElementById('next-lab-btn');
    const indicator = document.getElementById('lab-page-indicator');
    
    if (prevBtn) prevBtn.disabled = currentLabPage === 0;
    if (nextBtn) nextBtn.disabled = currentLabPage === totalLabPages - 1;
    if (indicator) indicator.textContent = `${currentLabPage + 1} / ${totalLabPages}`;
}

function changeLabPage(direction) {
    currentLabPage += direction;
    if (currentLabPage < 0) currentLabPage = 0;
    if (currentLabPage >= totalLabPages) currentLabPage = totalLabPages - 1;
    renderLabPage();
    document.getElementById('laboratori').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- BLOG RENDERING ---
function renderBlogArticles() {
    const blogContainer = document.getElementById('blog-container');
    if (!blogContainer) return;
    
    blogArticles.forEach(art => {
        const card = document.createElement('div');
        card.className = 'blog-card p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full';
        card.innerHTML = `
            <span class="text-xs font-bold ${art.colorClass} uppercase tracking-widest mb-2 block">${art.tag}</span>
            <h3 class="text-2xl font-bold text-primary mb-4 font-serif">${art.title}</h3>
            <p class="text-secondary mb-6 text-sm flex-grow">${art.excerpt}</p>
            <button onclick="openArticleModal(${art.id})" class="font-bold text-primary hover:text-accent-cta transition text-left mt-auto">Leggi articolo &rarr;</button>
        `;
        // se presente immagine, aggiungi miniatura che apparirà al hover
        if (art.bgImage) {
            const thumb = document.createElement('div');
            thumb.className = 'card-thumb';
            const thumbImg = document.createElement('img');
            thumbImg.className = 'card-thumb-img';
            thumbImg.src = encodeURI(art.bgImage);
            thumbImg.alt = art.title + ' - anteprima';
            thumb.appendChild(thumbImg);
            card.appendChild(thumb);
        }

        blogContainer.appendChild(card);
    });
}

// --- MOBILE MENU ---
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        // Close menu when clicking on anchor links
        menu.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }
}

// --- SCROLL OFFSET FIX ---
function adjustScrollOffset() {
    const header = document.querySelector('header');
    function update() {
        const h = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
        document.documentElement.style.setProperty('--header-height', h + 'px');
    }
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    window.addEventListener('load', () => setTimeout(update, 50));
}

// --- SEASON PALETTE SWITCHER ---
function initSeasonSwitcher() {
    const seasonCards = document.querySelectorAll('[data-season]');
    const body = document.body;
    const LS_KEY = 'site-season';

    function applySeason(season) {
        body.classList.remove('season-winter','season-spring','season-summer','season-autumn');
        if(season) body.classList.add('season-' + season);
        seasonCards.forEach(c => c.classList.toggle('active', c.dataset.season === season));
    }

    function defaultSeason() {
        const saved = localStorage.getItem(LS_KEY);
        if(saved) return saved;
        const m = new Date().getMonth() + 1;
        if(m >= 12 || m <= 2) return 'winter';
        if(m >= 3 && m <= 5) return 'spring';
        if(m >= 6 && m <= 8) return 'summer';
        return 'autumn';
    }

    seasonCards.forEach(card => {
        card.addEventListener('click', () => {
            const s = card.dataset.season;
            applySeason(s);
            localStorage.setItem(LS_KEY, s);
        });
    });

    applySeason(defaultSeason());
}

// --- STUDIO PHOTO CAROUSELS ---
const studioCarousels = {};

function initStudioCarousels() {
    const carouselIds = ['selvazzano', 'montemerlo'];
    carouselIds.forEach(id => {
        const el = document.getElementById('carousel-' + id);
        if (el) {
            const imgs = el.querySelectorAll('img');
            studioCarousels[id] = { images: imgs, current: 0, timer: null };
            startAutoSlide(id);
        }
    });
}

function startAutoSlide(id) {
    const carousel = studioCarousels[id];
    if (!carousel) return;
    carousel.timer = setInterval(() => {
        const next = (carousel.current + 1) % carousel.images.length;
        goToSlide(id, next);
    }, 3000);
}

function goToSlide(id, index) {
    const carousel = studioCarousels[id];
    if (!carousel) return;
    carousel.images.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
    });
    const dots = document.getElementById('dots-' + id);
    if (dots) {
        dots.querySelectorAll('button').forEach((dot, i) => {
            dot.className = 'w-2 h-2 rounded-full ' + (i === index ? 'bg-primary' : 'bg-gray-300');
        });
    }
    carousel.current = index;
    // Reset auto-slide timer
    if (carousel.timer) clearInterval(carousel.timer);
    startAutoSlide(id);
}

// --- INIZIALIZZAZIONE GLOBALE ---
document.addEventListener('DOMContentLoaded', () => {
    // Render contenuti
    renderLabPage();
    renderBlogArticles();
    
    // Inizializza calendario
    initCalendar();
    
    // Inizializza componenti
    initMobileMenu();
    adjustScrollOffset();
    initSeasonSwitcher();
    initStudioCarousels();
});

// --- CAROUSEL (caricato dopo load) ---
window.addEventListener('load', () => {
    setTimeout(() => {
        new ReviewsCarousel();
    }, 100);
});
