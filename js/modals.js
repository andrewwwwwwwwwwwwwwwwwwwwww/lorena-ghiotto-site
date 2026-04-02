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
        // HOME MODALE: usa modalText (versione corta), altrimenti fullText
        const textContent = article.modalText || article.fullText || article.excerpt;
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

// --- MODALE EVENTO ---
function openEventModal() {
    if (typeof prossimoEvento === 'undefined') return;
    
    const textContent = prossimoEvento.fullText || prossimoEvento.excerpt;
    modalBody.innerHTML = `
        <span class="text-xs font-bold ${prossimoEvento.colorClass} uppercase tracking-widest mb-2 block">${prossimoEvento.tag}</span>
        <h3 class="text-3xl font-serif font-bold text-primary mb-6">${prossimoEvento.title}</h3>
        <div class="text-secondary text-lg leading-relaxed space-y-4 font-light">
            ${textContent}
        </div>
        ${renderGallery(prossimoEvento.images)}
    `;
    
    openModal();
}

// --- MODALE BIO ---
function openBioModal() {
    modalBody.innerHTML = `
        <span class="text-xs font-bold text-accent-cta uppercase tracking-widest mb-2 block">CHI SONO</span>
        <h3 class="text-3xl font-serif font-bold text-primary mb-6">La mia storia</h3>
        <div class="text-secondary text-lg leading-relaxed space-y-4 font-light">
            <p>Sono psicologa, psicoterapeuta e formatrice mindfulness. Il mio lavoro nasce da una profonda passione per il sentire, per i processi emotivi e per le relazioni, ed è il risultato di un percorso personale e professionale fatto di scelte, cambi di direzione e trasformazioni.</p>
            <p>Ho iniziato il mio percorso di studi a <strong>Padova</strong>, dove mi sono formata in psicologia, vivendo anche un'importante esperienza Erasmus a Parigi, che ha ampliato il mio sguardo personale e culturale. Dopo una laurea triennale che oggi sento non completamente allineata a chi ero, durante la specialistica scelgo di cambiare direzione e approdo alla <strong>Psicologia Clinico-Dinamica</strong>: un vero colpo di fulmine, il mio grande amore.</p>
            <p>Per il tirocinio post laurea decido di trasferirmi a <strong>Roma</strong>, città in cui vivrò per due anni e mezzo e che segnerà profondamente il mio percorso. È qui che "incontro" <strong>IPOD Plays</strong>, scuola di Psicodramma ad orientamento psicodinamico; un'esperienza che rappresenta per me una vera rivoluzione di pensiero, emotiva, evolutiva e relazionale. Lo psicodramma, ed i maestri che ho incontrato, cambiano presto il mio modo di sentire, di stare nella relazione e di accompagnare l'altro nel proprio percorso.</p>
            <p>Concluso il tirocinio, sostengo l'Esame di Stato presso l'Università La Sapienza di Roma. Scelgo poi di rimanere a Roma anche per la <strong>specializzazione in Psicoterapia</strong>, ancora una volta attraverso lo Psicodramma, non solo come formazione professionale ma come casa: una città che mi ha adottata, che mi ha insegnato tanto e che continua a nutrire il mio percorso umano e clinico. Ancora oggi torno spesso per seminari, approfondimenti e per gli affetti che lì vivono.</p>
            <p>Nel tempo ho continuato ad approfondire il lavoro sul sentire e sulla consapevolezza, integrando nel mio percorso una pratica che è diventata centrale: la <strong>mindfulness</strong>. Non solo come strumento clinico, ma come vero e proprio pilastro del mio cammino personale di psicoterapia e crescita. Un momento particolarmente significativo è stato il 1° maggio 2024, quando ho partecipato a un ritiro di cinque giorni di mindfulness a Gavi con i monaci della tradizione di <strong>Thích Nhất Hạnh</strong>. Un'esperienza intensa e trasformativa, che mi ha segnata profondamente e che continua ancora oggi a nutrire il mio modo di essere, di ascoltare e di accompagnare le persone nel loro percorso.</p>
            <p>Ad oggi <strong>psicodramma, metodi attivi e mindfulness</strong> sono i riferimenti principali del mio lavoro: li utilizzo nel mio studio clinico, nei laboratori esperienziali, nei percorsi di gruppo e in tutte le collaborazioni che creo o a cui partecipo. Credo in un approccio che metta al centro la persona nella sua interezza, il corpo, le emozioni, la relazione e la possibilità di trasformazione.</p>
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
        'img/Studio_Selvazzano_03.jpg',
        'img/Studio_Selvazzano_04.jpg'
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
