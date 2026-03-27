/* ======================================
   MAIN.JS - Inizializzazione e Funzioni Principali
   ====================================== */

// --- TAB SWITCHER ---
function showTab(tabName) {
    const tabs = {
        adulti: document.getElementById('tab-adulti'),
        giovani: document.getElementById('tab-giovani'),
        terzaeta: document.getElementById('tab-terzaeta')
    };
    
    const buttons = {
        adulti: document.getElementById('btn-adulti'),
        giovani: document.getElementById('btn-giovani'),
        terzaeta: document.getElementById('btn-terzaeta')
    };
    
    const backgrounds = {
        adulti: document.getElementById('bg-adulti'),
        giovani: document.getElementById('bg-giovani')
    };

    // Nascondi tutti i tab (classe tab-hidden con !important per evitare conflitti con grid)
    Object.values(tabs).forEach(tab => { tab.classList.add('tab-hidden'); });
    
    // Rimuovi active da tutti i bottoni
    Object.values(buttons).forEach(btn => {
        btn.classList.remove('active-tab', 'shadow-md');
        btn.classList.add('text-secondary', 'bg-gray-100');
    });
    
    // Nascondi tutti gli sfondi
    Object.values(backgrounds).forEach(bg => { if(bg) bg.classList.add('hidden'); });

    // Mostra il tab selezionato e attiva il bottone
    if (tabs[tabName]) {
        tabs[tabName].classList.remove('tab-hidden');
        buttons[tabName].classList.add('active-tab', 'shadow-md');
        buttons[tabName].classList.remove('text-secondary', 'bg-gray-100');
    }
    
    // Mostra lo sfondo corrispondente
    if (backgrounds[tabName]) {
        backgrounds[tabName].classList.remove('hidden');
    }
    
    // Chiudi tutte le card percorso quando si cambia tab
    document.querySelectorAll('.percorso-card.active').forEach(card => {
        card.classList.remove('active');
    });
}

// --- PERCORSI CARD ESPANDIBILI ---
function initPercorsiCards() {
    const cards = document.querySelectorAll('.percorso-card');
    
    cards.forEach(card => {
        const header = card.querySelector('.percorso-header');
        
        header.addEventListener('click', () => {
            const isActive = card.classList.contains('active');
            
            // Chiudi tutte le altre card nello stesso tab
            const parentTab = card.closest('[id^="tab-"]');
            if (parentTab) {
                parentTab.querySelectorAll('.percorso-card.active').forEach(activeCard => {
                    if (activeCard !== card) {
                        activeCard.classList.remove('active');
                    }
                });
            }
            
            // Toggle della card cliccata
            card.classList.toggle('active');
            
            // Scroll smooth alla card se aperta
            if (!isActive) {
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
}

// Inizializza le card quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initPercorsiCards);

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

// --- BLOG PAGINATION ---
const blogContainer = document.getElementById('blog-container');

let currentBlogPage = 0;
const blogItemsPerPage = 4;
const totalBlogPages = Math.ceil(blogArticles.length / blogItemsPerPage);

function renderBlogPage() {
    if (!blogContainer) return;
    
    blogContainer.innerHTML = '';
    const start = currentBlogPage * blogItemsPerPage;
    const end = start + blogItemsPerPage;
    const pageArticles = blogArticles.slice(start, end);

    pageArticles.forEach(art => {
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
        } else {
            // Aggiungi pallino colorato per card senza immagini
            const dot = document.createElement('div');
            // Estrai la stagione dalla colorClass (text-accent-spring -> spring)
            const seasonMatch = art.colorClass.match(/text-accent-(spring|summer|autumn|winter)/);
            const season = seasonMatch ? seasonMatch[1] : 'spring';
            dot.className = `color-dot dot-${season}`;
            card.appendChild(dot);
        }

        blogContainer.appendChild(card);
    });

    const prevBtn = document.getElementById('prev-blog-btn');
    const nextBtn = document.getElementById('next-blog-btn');
    const indicator = document.getElementById('blog-page-indicator');
    
    if (prevBtn) prevBtn.disabled = currentBlogPage === 0;
    if (nextBtn) nextBtn.disabled = currentBlogPage === totalBlogPages - 1;
    if (indicator) indicator.textContent = `${currentBlogPage + 1} / ${totalBlogPages}`;
}

function changeBlogPage(direction) {
    currentBlogPage += direction;
    if (currentBlogPage < 0) currentBlogPage = 0;
    if (currentBlogPage >= totalBlogPages) currentBlogPage = totalBlogPages - 1;
    renderBlogPage();
    document.getElementById('Blog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Alias per retrocompatibilità
function renderBlogArticles() {
    renderBlogPage();
}

// --- EVENTI/APPUNTAMENTI ---
function getUpcomingEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return articles.filter(art => {
        if (!art.eventDate) return false;
        
        // Se è un range (oggetto con start/end)
        if (typeof art.eventDate === 'object' && art.eventDate.start) {
            const startDate = new Date(art.eventDate.start);
            return startDate >= today;
        }
        
        // Se è una data singola
        const eventDate = new Date(art.eventDate);
        return eventDate >= today;
    }).sort((a, b) => {
        const dateA = typeof a.eventDate === 'object' ? new Date(a.eventDate.start) : new Date(a.eventDate);
        const dateB = typeof b.eventDate === 'object' ? new Date(b.eventDate.start) : new Date(b.eventDate);
        return dateA - dateB;
    });
}

function formatEventDate(eventDate) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    
    if (typeof eventDate === 'object' && eventDate.start) {
        const start = new Date(eventDate.start);
        const end = new Date(eventDate.end);
        const startDay = start.getDate();
        const endDay = end.getDate();
        const month = start.toLocaleDateString('it-IT', { month: 'long' });
        const year = start.getFullYear();
        return `${startDay}-${endDay} ${month} ${year}`;
    }
    
    return new Date(eventDate).toLocaleDateString('it-IT', options);
}

function renderUpcomingEvents() {
    const container = document.getElementById('eventi-container');
    const section = document.getElementById('eventi');
    const navLink = document.getElementById('nav-eventi');
    const mobileNavLink = document.getElementById('mobile-nav-eventi');
    
    if (!container || !section) return;
    
    const upcomingEvents = getUpcomingEvents();
    
    // Se non ci sono eventi futuri, nascondi la sezione
    if (upcomingEvents.length === 0) {
        section.style.display = 'none';
        if (navLink) navLink.style.display = 'none';
        if (mobileNavLink) mobileNavLink.style.display = 'none';
        return;
    }
    
    // Mostra sezione e nav
    section.style.display = 'block';
    if (navLink) navLink.style.display = 'inline';
    if (mobileNavLink) mobileNavLink.style.display = 'block';
    
    container.innerHTML = '';
    
    upcomingEvents.forEach(event => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent-cta hover:shadow-xl transition';
        
        const dateFormatted = formatEventDate(event.eventDate);
        const location = event.eventLocation || '';
        
        card.innerHTML = `
            <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">📅</span>
                <span class="text-accent-cta font-bold">${dateFormatted}</span>
            </div>
            ${location ? `<p class="text-sm text-secondary mb-3">📍 ${location}</p>` : ''}
            <span class="text-xs font-bold ${event.colorClass} uppercase tracking-widest mb-2 block">${event.tag}</span>
            <h3 class="text-xl font-bold text-primary mb-3 font-serif">${event.title}</h3>
            <p class="text-secondary text-sm mb-4">${event.excerpt}</p>
            <button onclick="openArticleModal(${event.id})" class="font-bold text-primary hover:text-accent-cta transition">Scopri di più →</button>
        `;
        
        container.appendChild(card);
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
    renderUpcomingEvents();
    
    // Inizializza calendario
    initCalendar();
    
    // Inizializza componenti
    initMobileMenu();
    adjustScrollOffset();
    initSeasonSwitcher();
    initStudioCarousels();
    initNavHighlight();
});

// --- CAROUSEL (caricato dopo load) ---
window.addEventListener('load', () => {
    setTimeout(() => {
        new ReviewsCarousel();
    }, 100);
});

// --- NAVIGATION HIGHLIGHT ON SCROLL ---
function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = [];
    
    // Raccogli le sezioni corrispondenti ai link
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            sections.push({ id: sectionId, element: section });
        }
    });
    
    if (sections.length === 0) return;
    
    // Funzione per aggiornare il link attivo
    function updateActiveLink() {
        const scrollPos = window.scrollY + 150; // offset per header fisso
        let currentSection = null;
        
        // Trova la sezione corrente
        sections.forEach(({ id, element }) => {
            const sectionTop = element.offsetTop;
            const sectionBottom = sectionTop + element.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentSection = id;
            }
        });
        
        // Se siamo in fondo alla pagina, attiva Contatti
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            currentSection = 'contatti';
        }
        
        // Aggiorna classi
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('data-section');
            if (linkSection === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Ascolta scroll con throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Esegui subito
    updateActiveLink();
}
