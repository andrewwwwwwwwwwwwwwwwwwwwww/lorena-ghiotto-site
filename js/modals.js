/* ======================================
   MODALS.JS - Sistema Modali e Lightbox
   ====================================== */

// --- RIFERIMENTI DOM ---
const modal = document.getElementById('universal-modal');
const modalPanel = document.getElementById('modal-panel');
const modalBody = document.getElementById('modal-body-content');
const modalContent = document.getElementById('modal-content');

// --- MODALE UNIVERSALE ---
function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalPanel.classList.remove('scale-95');
        modalPanel.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');
    modalPanel.classList.remove('scale-100');
    modalPanel.classList.add('scale-95');
    document.body.style.overflow = '';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// --- GALLERIA IMMAGINI ---
function renderGallery(images) {
    if (!images || !images.length) return '';
    const items = images.map((src, idx) => {
        const safe = encodeURI(src);
        return `<figure onclick="openLightbox('${safe}')"><img loading="lazy" src="${safe}" alt="immagine articolo ${idx+1}"></figure>`;
    }).join('');
    return `
        <div class="mt-10">
            <h4 class="text-lg font-semibold text-primary mb-3">Gallery</h4>
            <div class="article-gallery">${items}</div>
        </div>
    `;
}

// --- MODALE ARTICOLI ---
function openArticleModal(id) {
    let article = articles.find(a => a.id === id);
    if (!article) {
        article = blogArticles.find(a => a.id === id);
    }
    if (article) {
        // Usa modalText per la home se disponibile, altrimenti fullText
        const textContent = article.modalText || article.fullText;
        modalBody.innerHTML = `
            <span class="text-xs font-bold ${article.colorClass} uppercase tracking-widest mb-2 block">${article.tag}</span>
            <h3 class="text-3xl font-serif font-bold text-primary mb-6">${article.title}</h3>
            <div class="text-secondary text-lg leading-relaxed space-y-4 font-light">
                ${textContent}
            </div>
            ${renderGallery(article.images)}
        `;
        
        openModal();
    }
}

// --- MODALE BIO ---
function openBioModal() {
    modalBody.innerHTML = `
        <span class="text-xs font-bold text-accent-cta uppercase tracking-widest mb-2 block">CHI SONO</span>
        <h3 class="text-3xl font-serif font-bold text-primary mb-6">La mia storia</h3>
        <div class="text-secondary text-lg leading-relaxed space-y-4 font-light">
            <p>Il mio percorso nasce da una profonda curiosità verso l'essere umano e le sue risorse infinite. Fin da giovane ho sentito il desiderio di comprendere cosa muove le persone, cosa le ferma e cosa le aiuta a ritrovare la propria strada. Questo interesse mi ha guidata verso la Psicologia e, nel tempo, verso la Psicoterapia.</p>
            <p>Dopo la <strong>laurea in Psicologia Clinica</strong> presso l'Università di Padova, ho sentito l'esigenza di andare oltre la teoria e di trovare strumenti concreti per aiutare le persone a stare meglio. Ho scelto la <strong>specializzazione in Psicoterapia Cognitivo-Comportamentale</strong> perché credo nell'importanza di lavorare sul "qui e ora", fornendo strategie pratiche per gestire pensieri ed emozioni.</p>
            <p>Successivamente, l'incontro con l'<strong>EMDR</strong> mi ha aperto nuove prospettive sulla cura del trauma, permettendomi di lavorare ancora più in profondità con chi porta ferite emotive che condizionano il presente. L'EMDR mi ha insegnato che il corpo e la mente custodiscono risorse straordinarie per la guarigione, e che il compito del terapeuta è creare le condizioni perché queste risorse possano emergere.</p>
            <p>Accanto alla pratica clinica, negli anni ho sviluppato una forte passione per la <strong>mindfulness</strong> e per i <strong>laboratori esperienziali</strong>. Conduco percorsi di gruppo dedicati alla consapevolezza, al benessere emotivo, al mindful eating e alla connessione con sé stessi e con gli altri. Questi laboratori nascono dalla convinzione che la crescita personale si nutre anche di esperienze condivise, di momenti in cui ci si ferma, si respira e ci si ascolta davvero.</p>
            <p>Oggi, nel mio studio, cerco di integrare tutto questo con un approccio umano, caldo e accogliente. Lavoro con bambini, adolescenti, adulti e anziani, accompagnando ciascuno nel proprio percorso con rispetto, attenzione e professionalità. Credo che la <strong>relazione terapeutica</strong> sia il primo vero strumento di cura: uno spazio protetto in cui sentirsi accolti, compresi e liberi di esplorare il proprio mondo interiore.</p>
            <p>Il mio impegno quotidiano è quello di essere presente — come persona e come professionista — per chi sceglie di intraprendere un cammino di cambiamento.</p>
        </div>
    `;
    
    openModal();
}

// --- VARIABILE GLOBALE PER IMMAGINI SPAZI ---
let currentGalleryImages = [];

// --- MODALE SPAZI ---
function openSpaziModal() {
    currentGalleryImages = [
        'img/Studio_selvazzano_01.jpg',
        'img/Studio_Selvazzano_02.jpg',
        'img/Studio_Selvazzano_03.jpg'
    ];

    const galleryHTML = currentGalleryImages.map((img, idx) => {
        const safeImg = encodeURI(img);
        return `
            <figure class="cursor-pointer hover:opacity-80 transition-opacity" onclick="openLightboxGallery(${idx})">
                <img loading="lazy" src="${safeImg}" alt="Spazio terapeutico ${idx + 1}" class="w-full h-64 object-cover rounded-lg shadow-md">
            </figure>
        `;
    }).join('');

    modalBody.innerHTML = `
        <span class="text-xs font-bold text-accent-cta uppercase tracking-widest mb-2 block">GLI STUDI</span>
        <h3 class="text-3xl font-serif font-bold text-primary mb-6">I miei spazi</h3>
        <div class="text-secondary text-lg leading-relaxed mb-6 font-light">
            <p>Gli spazi in cui ti accolgo sono pensati per essere accoglienti, luminosi e riservati. Luoghi dove sentirti al sicuro per condividere le tue esperienze e lavorare insieme al tuo benessere.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${galleryHTML}
        </div>
    `;
    
    openModal();
}

// --- CHIUSURA MODALE SU CLICK ESTERNO ---
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// --- MODALE PERCORSI ---
const percorsiModal = document.getElementById('percorsi-modal');
const percorsiModalPanel = document.getElementById('percorsi-modal-panel');
const percorsiModalBody = document.getElementById('percorsi-modal-body');

function openPercorsiModal() {
    percorsiModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        percorsiModal.classList.remove('opacity-0');
        percorsiModalPanel.classList.remove('scale-95');
        percorsiModalPanel.classList.add('scale-100');
    }, 10);
}

function closePercorsiModal() {
    percorsiModal.classList.add('opacity-0');
    percorsiModalPanel.classList.remove('scale-100');
    percorsiModalPanel.classList.add('scale-95');
    document.body.style.overflow = '';
    setTimeout(() => {
        percorsiModal.classList.add('hidden');
    }, 300);
}

percorsiModal.addEventListener('click', (e) => {
    if (e.target === percorsiModal) {
        closePercorsiModal();
    }
});

function openGestioneEmozioniModal() {
    percorsiModalBody.innerHTML = `
        <h2 class="text-4xl font-serif font-bold text-primary mb-6">Gestione delle Emozioni</h2>
        <p class="text-lg text-secondary mb-4 leading-relaxed">
            Un percorso dedicato ai bambini per imparare a riconoscere, nominare e gestire le proprie emozioni in modo sano e costruttivo.
        </p>
        <p class="text-lg text-secondary mb-6 leading-relaxed">
            Attraverso il gioco, le storie e attività creative, i bambini sviluppano l'intelligenza emotiva e acquisiscono strumenti per esprimere ciò che sentono.
        </p>
    `;
    openPercorsiModal();
}

function openPercorsoModal(title, content) {
    percorsiModalBody.innerHTML = `
        <h2 class="text-4xl font-serif font-bold text-primary mb-6">${title}</h2>
        <div class="text-lg text-secondary leading-relaxed space-y-4">${content}</div>
    `;
    openPercorsiModal();
}

// --- LIGHTBOX ---
let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(src) {
    const galleryImgs = document.querySelectorAll('.article-gallery img');
    lightboxImages = Array.from(galleryImgs).map(img => img.src);
    lightboxIndex = lightboxImages.indexOf(src);
    
    const lb = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    updateLightboxCounter();
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    
    document.addEventListener('keydown', handleLightboxKeys);
}

function openLightboxGallery(index) {
    lightboxImages = currentGalleryImages.map(img => encodeURI(img));
    lightboxIndex = index;
    
    const lb = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = lightboxImages[lightboxIndex];
    updateLightboxCounter();
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    
    document.addEventListener('keydown', handleLightboxKeys);
}

function closeLightbox() {
    const lb = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = '';
    lb.classList.add('hidden');
    lb.classList.remove('flex');
    lightboxImages = [];
    lightboxIndex = 0;
    
    document.removeEventListener('keydown', handleLightboxKeys);
}

function lightboxNext() {
    if (lightboxImages.length === 0) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    document.getElementById('lightbox-img').src = lightboxImages[lightboxIndex];
    updateLightboxCounter();
}

function lightboxPrev() {
    if (lightboxImages.length === 0) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightbox-img').src = lightboxImages[lightboxIndex];
    updateLightboxCounter();
}

function updateLightboxCounter() {
    const counter = document.getElementById('lightbox-counter');
    if (lightboxImages.length > 1) {
        counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
        counter.style.display = 'block';
    } else {
        counter.style.display = 'none';
    }
}

function handleLightboxKeys(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'ArrowLeft') lightboxPrev();
}
