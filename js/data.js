/* ======================================
   DATA.JS - Dati Articoli e Laboratori
   ====================================== */

// --- LABORATORI (WORKSHOP) ---
const articles = [
    {
        title: "La Donna e il suo Corpo",
        excerpt: "Un percorso di empowerment femminile e mindful eating per ritrovare una relazione gentile con se stesse.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Riscoprire se stesse: tra Mente, Cibo e Corpo</h3><p class='mb-4'>Il benessere femminile passa attraverso la riconnessione con i propri bisogni reali. In questo workshop esclusivo, svoltosi nella cornice simbolica di un teatro, abbiamo affrontato il tema dell'empowerment femminile con un approccio integrato:</p><p class='mb-4'><strong>Psicoterapia:</strong> per esplorare le memorie emotive.</p><p class='mb-4'><strong>Nutrizione:</strong> per un rapporto gentile con il cibo.</p><p class='mb-4'><strong>Mindful Eating:</strong> per ritrovare presenza e ascolto dei segnali del corpo.</p><p class='mb-4'>Un'esperienza trasformativa per smettere di giudicarsi e iniziare ad ascoltarsi.</p>",
        tag: "Crescita Personale",
        colorClass: "text-accent-spring",
        bgImage: "img/La donna e il suo corpo.jpeg",
        images: [
            "img/LaDonna01.jpeg",
            "img/LaDonna02.jpeg",
            "img/LaDonna03.jpeg"
        ],
        id: 1
    },
    {
        title: "Mindfulness tra Natura e Sapori",
        excerpt: "Laboratorio esperienziale di mindful walking e mindful eating a Vetriolo Terme.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Quando Natura, Cibo e Consapevolezza si Incontrano</h3><p class='mb-4'>Un'esperienza immersiva a Vetriolo Terme dove abbiamo unito la bellezza della natura alpina con la pratica della mindfulness. Il laboratorio ha integrato:</p><p class='mb-4'><strong>Mindful Walking:</strong> una camminata consapevole nella natura per riconnettersi con l'ambiente.</p><p class='mb-4'><strong>Mindful Eating:</strong> degustazione multisensoriale per trasformare ogni boccone in una meditazione.</p><p class='mb-4'><strong>Esperienza di Gruppo:</strong> condivisione e scoperta collettiva in un rifugio alpino.</p><p class='mb-4'>Un viaggio tra sapori autentici e presenza mentale, dove rallentare diventa un atto di cura verso se stessi.</p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/Mindfulness01.jpeg",
        images: [
            "img/Mindfulness01.jpeg",
            "img/Mindfulness02.jpeg",
            "img/Mindfulness03.jpeg"
        ],
        id: 2
    },
    {
        title: "ZenFlow: Equilibrio Online",
        excerpt: "Ciclo di 10 incontri online con pratiche di respirazione e rilassamento.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Benessere Integrato: Mindfulness e Yoga Online</h3><p class='mb-4'>Un percorso di 10 incontri online dove mindfulness e yoga si alternano per creare un equilibrio profondo tra mente e corpo. In collaborazione con un'insegnante di yoga, ogni lunedì sera offriamo:</p><p class='mb-4'><strong>Mindfulness:</strong> 5 incontri di presenza, respiro e ascolto interiore.</p><p class='mb-4'><strong>Yoga:</strong> 5 incontri di movimento consapevole e rilassamento.</p><p class='mb-4'><strong>Online:</strong> comodamente da casa, per integrare benessere nella quotidianità.</p><p class='mb-4'>Un ciclo semplice ma trasformativo per ritrovare equilibrio e consapevolezza, un lunedì alla volta.</p>",
        tag: "Benessere Online",
        colorClass: "text-accent-winter",
        bgImage: "img/Zenflow01.jpeg",
        images: [
            "img/Zenflow01.jpeg"
        ],
        id: 3
    },
    {
        title: "Super poteri del cuore",
        excerpt: "Progetto di mindfulness sulle emozioni alla scuola primaria.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Quando le Emozioni Diventano Super Poteri</h3><p class='mb-4'>Un percorso di mindfulness dedicato ai bambini della scuola primaria per scoprire e comprendere il mondo delle emozioni. Attraverso attività pratiche e coinvolgenti abbiamo esplorato:</p><p class='mb-4'><strong>Riconoscimento:</strong> imparare a nominare gioia, rabbia, tristezza e paura.</p><p class='mb-4'><strong>Ascolto del corpo:</strong> scoprire dove le emozioni si manifestano fisicamente.</p><p class='mb-4'><strong>Regolazione:</strong> strumenti di respirazione e consapevolezza per gestire ciò che si prova.</p><p class='mb-4'>Un viaggio per aiutare ogni bambino a sentirsi visto, compreso e capace di comprendere meglio se stesso.</p>",
        tag: "Scuola & Genitori",
        colorClass: "text-accent-autumn",
        bgImage: "img/Superpoteridelcuore.jpeg",
        images: [
            "img/Emozioniascuolta.jpg",
            "img/Superpoteridelcuore.jpeg"
        ],
        id: 4
    },
    {
        title: "Benessere per le atlete",
        excerpt: "Gestione dell'ansia e dello stress pre/post gara per atlete.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Mente Vincente: Mindfulness per le Atlete</h3><p class='mb-4'>Un percorso dedicato alle atlete per trasformare ansia e stress in risorse preziose prima e dopo le gare. Attraverso strumenti pratici e immediatamente applicabili:</p><p class='mb-4'><strong>Respirazione consapevole:</strong> tecniche per recuperare centratura e lucidità.</p><p class='mb-4'><strong>Mindfulness:</strong> pratiche per riconoscere e gestire le emozioni intense.</p><p class='mb-4'><strong>Confronto:</strong> momenti di condivisione per rafforzare fiducia e resilienza.</p><p class='mb-4'>Un supporto concreto per affrontare le sfide sportive con equilibrio emotivo e presenza mentale.</p>",
        tag: "Sport & Mindfulness",
        colorClass: "text-accent-spring",
        id: 5
    },
    {
        title: "Emozioni in gioco",
        excerpt: "Laboratorio di mindfulness per genitori e figli.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Crescere Insieme: Genitori e Figli alla Scoperta delle Emozioni</h3><p class='mb-4'>Un laboratorio esperienziale dove genitori e figli esplorano insieme il mondo delle emozioni attraverso il gioco e la mindfulness. Un percorso per:</p><p class='mb-4'><strong>Riconoscere:</strong> dare voce a ciò che si prova, insieme.</p><p class='mb-4'><strong>Connettersi:</strong> rafforzare il legame affettivo attraverso l'ascolto reciproco.</p><p class='mb-4'><strong>Praticare:</strong> attività creative e momenti di calma consapevole.</p><p class='mb-4'>Un tempo di qualità dedicato alla cura reciproca, dove adulti e bambini imparano a comunicare in modo più autentico.</p>",
        tag: "Scuola & Genitori",
        colorClass: "text-accent-autumn",
        id: 6
    },
    {
        title: "Rituali di gusto",
        excerpt: "Degustazione consapevole e mindfulness al caseificio.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Oltre il Gusto: Mindful Eating tra Formaggi Artigianali</h3><p class='mb-4'>Un'esperienza immersiva al caseificio Sapori di Montegnago dove la degustazione diventa un atto di presenza. In collaborazione con una casara e degustatrice ONAF:</p><p class='mb-4'><strong>Artigianalità:</strong> scoprire lavorazioni tradizionali, profumi e stagionature.</p><p class='mb-4'><strong>Mindful Eating:</strong> assaggiare con intenzione, riconoscere consistenze e sfumature.</p><p class='mb-4'><strong>Connessione:</strong> trasformare ogni morso in un momento di ascolto autentico.</p><p class='mb-4'>Un viaggio sensoriale che unisce tradizione casearia e consapevolezza, per riscoprire il piacere profondo del nutrirsi.</p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/Ritualidigusto.jpeg",
        images: [
            "img/Ritualidigusto.jpeg"
        ],
        id: 7
    },
    {
        title: "Spazio Ben-essere",
        excerpt: "Incontri gratuiti di benessere personale e relazionale.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Uno Spazio per Fermarsi e Ascoltarsi</h3><p class='mb-4'>Da gennaio 2026, una serie di incontri gratuiti dedicati alla cura di sé e alle relazioni. Ogni appuntamento di un'ora e mezza offre:</p><p class='mb-4'><strong>Temi di benessere:</strong> cura di sé, dinamiche relazionali, consapevolezza emotiva.</p><p class='mb-4'><strong>Spunti pratici:</strong> strumenti concreti da portare nella quotidianità.</p><p class='mb-4'><strong>Confronto guidato:</strong> momenti di riflessione condivisa in uno spazio accogliente.</p><p class='mb-4'>Un percorso per ritrovare equilibrio, coltivare presenza e comprendere meglio il proprio mondo interiore.</p>",
        tag: "Benessere Online",
        colorClass: "text-accent-winter",
        id: 8
    },
    {
        title: "Progetto D.I.T.A.",
        excerpt: "Danza, Integrazione, Terapia e Ascolto: un percorso che unisce corpo e mente attraverso il movimento consapevole.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>D.I.T.A. – Danza, Integrazione, Terapia e Ascolto</h3><p class='mb-4'>Il progetto <strong>D.I.T.A.</strong> nasce dall'incontro tra psicologia e movimento, con l'obiettivo di offrire un'esperienza trasformativa che integra corpo, mente ed emozioni. D.I.T.A. è l'acronimo di <strong>Danza, Integrazione, Terapia e Ascolto</strong>, quattro dimensioni che si intrecciano per creare uno spazio di esplorazione profonda.</p><p class='mb-4'><strong>Danza:</strong> il movimento come linguaggio dell'anima, per esprimere ciò che le parole non riescono a dire. Non serve saper danzare: ogni gesto autentico è benvenuto.</p><p class='mb-4'><strong>Integrazione:</strong> un approccio che unisce diverse discipline – dalla mindfulness alla psicomotricità – per lavorare sulla persona nella sua interezza.</p><p class='mb-4'><strong>Terapia:</strong> il contesto sicuro e guidato in cui il movimento diventa strumento di consapevolezza, elaborazione e cambiamento.</p><p class='mb-4'><strong>Ascolto:</strong> la capacità di sintonizzarsi con se stessi, con il proprio corpo e con gli altri, riscoprendo sensazioni, bisogni e risorse spesso dimenticate.</p><p class='mb-4'>Durante gli incontri, i partecipanti vengono guidati attraverso pratiche di movimento consapevole, esercizi di respirazione, momenti di condivisione e brevi meditazioni. L'obiettivo non è la performance, ma la presenza: abitare il proprio corpo con gentilezza, lasciando emergere ciò che ha bisogno di essere visto e accolto.</p><p class='mb-4'>Il progetto D.I.T.A. si rivolge a chiunque desideri esplorare nuove modalità di ascolto di sé, ritrovare una connessione autentica con il proprio corpo e sperimentare il potere trasformativo del movimento in un contesto protetto e accogliente.</p>",
        tag: "Crescita Personale",
        colorClass: "text-accent-spring",
        id: 9
    },
    {
        title: "Calm Connection",
        excerpt: "Un percorso di mindfulness e connessione per ritrovare calma interiore e costruire relazioni più consapevoli.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Calm Connection: Ritrovare la Calma, Riscoprire la Connessione</h3><p class='mb-4'><strong>Calm Connection</strong> è un percorso esperienziale che unisce pratiche di mindfulness e lavoro relazionale per aiutare i partecipanti a coltivare una calma interiore profonda e a costruire connessioni più autentiche con se stessi e con gli altri.</p><p class='mb-4'>In un mondo sempre più frenetico e iperconnesso, spesso perdiamo il contatto con ciò che conta davvero: la qualità delle nostre relazioni, la presenza nel momento e la capacità di ascoltarci. Calm Connection nasce proprio da questa esigenza.</p><p class='mb-4'><strong>Il percorso si articola in tre aree fondamentali:</strong></p><p class='mb-4'><strong>Calma:</strong> tecniche di respirazione, meditazione guidata e body scan per ridurre lo stress, regolare il sistema nervoso e ritrovare un senso di centratura e stabilità interiore.</p><p class='mb-4'><strong>Consapevolezza:</strong> pratiche di mindfulness per osservare pensieri, emozioni e sensazioni corporee senza giudizio, sviluppando una presenza più lucida e compassionevole.</p><p class='mb-4'><strong>Connessione:</strong> esercizi relazionali e momenti di condivisione per esplorare come ci relazioniamo agli altri, riconoscere schemi automatici e sperimentare nuove modalità di comunicazione autentica.</p><p class='mb-4'>Ogni incontro è pensato come un'esperienza completa: si inizia con un momento di arrivo e centratura, si prosegue con una pratica guidata e si conclude con uno spazio di condivisione e riflessione. I partecipanti portano a casa strumenti concreti da integrare nella vita quotidiana.</p><p class='mb-4'>Calm Connection è adatto a chiunque desideri prendersi una pausa consapevole, imparare a gestire meglio lo stress e riscoprire la bellezza di relazioni più presenti e genuine.</p>",
        tag: "Mindfulness & Relazioni",
        colorClass: "text-accent-summer",
        bgImage: "img/Calmconnection01.jpeg",
        images: [
            "img/Calmconnection01.jpeg"
        ],
        id: 10
    }
];

// --- ARTICOLI BLOG ---
const blogArticles = [
    {
        title: "Come Gestire l'Ansia quotidiana",
        excerpt: "Strategie pratiche e tecniche di respirazione per affrontare l'ansia durante la giornata.",
        fullText: "<p class='mb-4'>L'ansia è una compagna sempre più frequente nelle nostre vite. In questo articolo scopriamo come riconoscerla e affrontarla con strumenti concreti.</p><p>Impareremo la tecnica della respirazione 4-7-8, il grounding sensoriale e come distinguere un'ansia adattiva da una patologica che richiede supporto professionale.</p>",
        tag: "Benessere",
        colorClass: "text-accent-winter",
        id: 5
    },
    {
        title: "Il Ruolo della Resilienza",
        excerpt: "Scopri come costruire la tua resilienza e ritrovare la forza nei momenti difficili.",
        fullText: "<p class='mb-4'>La resilienza non è una qualità innata, ma una competenza che si può sviluppare.</p><p>In questo articolo esploreremo i pilastri della resilienza: l'auto-consapevolezza, la flessibilità mentale, la capacità di cercare aiuto e il significato personale che attribuiamo alle sfide.</p>",
        tag: "Psicologia",
        colorClass: "text-accent-spring",
        id: 6
    },
    {
        title: "Relazioni Sane: Confini e Comunicazione",
        excerpt: "Come costruire relazioni autentiche imparando a comunicare con chiarezza e stabilire confini.",
        fullText: "<p class='mb-4'>Le relazioni sane iniziano dalla capacità di comunicare in modo assertivo e dal rispetto dei confini personali.</p><p>Scopriamo insieme come dire 'no' senza sensi di colpa, come ascoltare attivamente e come trasformare i conflitti in opportunità di crescita.</p>",
        tag: "Relazioni",
        colorClass: "text-accent-summer",
        id: 7
    },
    {
        title: "Consapevolezza Emotiva nei Bambini",
        excerpt: "Come insegnare ai bambini a riconoscere e gestire le proprie emozioni.",
        fullText: "<p class='mb-4'>Aiutare i bambini a sviluppare l'intelligenza emotiva è uno dei regali più importanti che possiamo fargli.</p><p>Attraverso il gioco, il disegno e la narrazione, possiamo insegnare ai piccoli a nominare le emozioni, a comprenderle e a esprimerle in modo costruttivo.</p>",
        tag: "Genitori & Figli",
        colorClass: "text-accent-autumn",
        id: 8
    }
];
