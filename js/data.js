/* ======================================
   DATA.JS - Dati Articoli e Laboratori
   STRUTTURA:
   - modalText = testo breve per modale HOME
   - fullText = testo integrale per pagina LABORATORI
   ====================================== */

// --- PROSSIMO EVENTO (solo evento, non laboratorio) ---
const prossimoEvento = {
    title: "Touch&Flow 🌿",
    excerpt: "Un weekend per ritrovare il contatto con te stessa, immersa in un ambiente caldo e accogliente.",
    fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Touch&Flow: Un Weekend di Benessere</h3><p class='mb-4'>Un weekend per ritrovare il contatto con te stessa, immersa in un ambiente caldo e accogliente al Nif Alpine Taste di Vetriolo Terme.</p><p class='mb-4'>Attraverso yoga con Barbara, un laboratorio di ceramica con Michela e pratiche di mindfulness guidate da me, psicoterapeuta, riscopriremo il respiro e la presenza.</p><p class='mb-4'>Esperienze dentro e fuori, a stretto contatto con la natura, per rallentare e ritrovare equilibrio.</p><p class='mb-4'><strong>Posti limitati.</strong></p>",
    tag: "Natura & Benessere",
    colorClass: "text-accent-summer",
    bgImage: "img/CalmConnection1.jpeg",
    images: [
        "img/CalmConnection1.jpeg",
        "img/CalmConnection5.jpeg",
        "img/CalmConnection10.jpeg"
    ],
    eventDate: { start: "2026-05-09", end: "2026-05-10" },
    eventLocation: "Nif Alpine Taste, Vetriolo Terme",
    id: 0
};

// --- LABORATORI (WORKSHOP) ---
// Ordine: dal più recente (primo) al meno recente (ultimo)
const articles = [
    {
        title: "Oltre i Blocchi",
        excerpt: "Attraversare le resistenze e attivare nuove possibilità con il corpo, il gruppo e l'espressione.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Socioplay Esperienziale: Sbloccare il Potenziale</h3><p class='mb-4'>Un laboratorio per attraversare le fasi di passaggio in cui emergono resistenze e blocchi, trasformandoli in possibilità evolutive:</p><p class='mb-4'><strong>Dimensione corporea:</strong> esplorare attraverso il movimento e l'espressione.</p><p class='mb-4'><strong>Lavoro di gruppo:</strong> ascolto, presenza e condivisione come risorse attive.</p><p class='mb-4'><strong>Psicodramma:</strong> dispositivo simbolico per osservare e rielaborare i blocchi.</p><p class='mb-4'>Accedere a livelli profondi, facilitando insight e possibilità di cambiamento concreto.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Oltre i Blocchi: Socioplay Esperienziale</h3><p class='mb-4'>Nel percorso evolutivo individuale incontro spesso fasi di passaggio in cui emergono resistenze, arresti o veri e propri blocchi. Sono momenti in cui i consueti assetti identitari e relazionali non risultano più funzionali, mentre il nuovo non è ancora pienamente accessibile.</p><p class='mb-4'>Queste soglie, spesso accompagnate da disagio, incertezza o dalla ripetizione di schemi ricorrenti, racchiudono in realtà un importante potenziale trasformativo. Nel mio lavoro considero fondamentale creare contesti strutturati, accoglienti e consapevoli, in cui sia possibile integrare parti interne, elaborare le resistenze e attivare nuove possibilità evolutive.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Il dispositivo psicodrammatico</h4><p class='mb-4'><strong>\"Oltre i blocchi\"</strong> è un socioplay esperienziale che utilizza la dimensione gruppale, corporea ed espressiva come strumenti di esplorazione e trasformazione. Attraverso il dispositivo psicodrammatico e simbolico, accompagno i partecipanti nell'osservare, attraversare e rielaborare i propri blocchi all'interno di uno spazio protetto, favorendo processi di consapevolezza e riorganizzazione interna.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Il gruppo come risorsa</h4><p class='mb-4'>Durante il laboratorio, il gruppo diventa una risorsa attiva: uno spazio di ascolto, presenza e condivisione in cui ogni esperienza individuale può trovare risonanza e sostegno. Il coinvolgimento corporeo e creativo permette di accedere a livelli più profondi rispetto alla sola dimensione cognitiva, facilitando insight, nuovi significati e possibilità di cambiamento concreto.</p><p class='mb-4'>Conduco questo percorso insieme a <strong>Roberta Curatolo</strong> e <strong>Iris Mattera</strong>, con cui condivido l'approccio e la visione del lavoro.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>La location</h4><p class='mb-4'>L'incontro si è tenuto presso <strong>Multiverso, Studio d'Arte – Galleria – Centro Interculturale</strong>, in Via della Lungara 43, nel quartiere Trastevere a Roma. La scelta della location è parte integrante dell'esperienza: uno spazio artistico e interculturale che sostiene il processo creativo e amplifica il potenziale trasformativo del lavoro.</p>",
        tag: "Crescita Personale",
        colorClass: "text-accent-spring",
        bgImage: "img/OltreiBlocchi01.jpeg",
        images: [
            "img/OltreiBlocchi01.jpeg",
            "img/OltreiBlocchi02.jpeg",
            "img/OltreiBlocchi03.jpeg",
            "img/OltreiBlocchi04.jpeg",
            "img/OltreiBlocchi05.jpeg",
            "img/OltreiBlocchi06.jpeg"
        ],
        id: 1
    },
    {
        title: "Spazio Ben-essere",
        excerpt: "Uno spazio per fermarsi, ascoltarsi e ritrovare equilibrio nella quotidianità.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Uno Spazio per Fermarsi e Ascoltarsi</h3><p class='mb-4'>Da gennaio 2026, una serie di incontri gratuiti dedicati alla cura di sé e alle relazioni. Ogni appuntamento di un'ora e mezza offre:</p><p class='mb-4'><strong>Temi di benessere:</strong> cura di sé, dinamiche relazionali, consapevolezza emotiva.</p><p class='mb-4'><strong>Spunti pratici:</strong> strumenti concreti da portare nella quotidianità.</p><p class='mb-4'><strong>Confronto guidato:</strong> momenti di riflessione condivisa in uno spazio accogliente.</p><p class='mb-4'>Un percorso per ritrovare equilibrio, coltivare presenza e comprendere meglio il proprio mondo interiore.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Spazio Ben-essere: incontri di benessere personale e relazionale</h3><p class='mb-4'>Da gennaio 2026 io e la dott.ssa <strong>Sofia Dalla Libera</strong> proporremo una serie di incontri gratuiti dedicati al benessere personale e relazionale.</p><p class='mb-4'>Uno spazio accogliente in cui fermarsi, ascoltarsi e approfondire temi legati alla cura di sé, alle dinamiche relazionali e alla consapevolezza emotiva.</p><p class='mb-4'>Ogni appuntamento, della durata di un'ora e mezza, offrirà spunti pratici, momenti di riflessione e occasioni di confronto guidato.</p><p class='mb-4'><em>Un percorso pensato per chi desidera ritrovare equilibrio, coltivare presenza e comprendere meglio il proprio mondo interiore.</em></p>",
        tag: "Benessere Online",
        colorClass: "text-accent-winter",
        bgImage: "img/SpazioBenessere1.jpeg",
        images: [
            "img/SpazioBenessere1.jpeg",
            "img/SpazioBenessere2.jpeg",
            "img/SpazioBenessere3.jpeg",
            "img/SpazioBenessere4.jpeg",
            "img/SpazioBenessere5.jpeg"
        ],
        id: 2
    },
    {
        title: "Rituali di gusto",
        excerpt: "Degustazione consapevole e mindfulness al caseificio Sapori di Montegnago.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Quando Formaggio, Cibo e Consapevolezza si Incontrano</h3><p class='mb-4'>Un'esperienza immersiva al caseificio Sapori di Montegnago, tra i Colli Berici, dove abbiamo unito la tradizione casearia artigianale con la pratica della mindfulness e della degustazione consapevole.</p><p class='mb-4'><strong>Viaggio nel Formaggio:</strong> guidati da Elisa, casara e degustatrice ONAF, per scoprire lavorazione del latte, stagionature e caratteristiche sensoriali dei formaggi.</p><p class='mb-4'><strong>Degustazione Consapevole:</strong> una pratica di mindful eating per trasformare ogni assaggio in un rito di presenza, ascolto del corpo e risveglio dei sensi.</p><p class='mb-4'><strong>Esperienza di Gruppo:</strong> condivisione semplice e genuina in un contesto naturale che invita a rallentare e a stare nel qui e ora.</p><p class='mb-4'>Un viaggio tra sapori autentici e presenza mentale, dove nutrirsi diventa un atto di cura verso se stessi, il proprio corpo e il lavoro artigiano che rende possibile ogni morso.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>\"Rituali di gusto\": degustazione consapevole e mindfulness al caseificio Sapori di Montegnago</h3><p class='mb-4'>In un mondo che corre veloce, anche il cibo rischia di diventare un gesto automatico, quasi invisibile. Mangiamo senza accorgercene, senza davvero assaporare, senza ascoltare ciò che il corpo e i sensi ci stanno raccontando. È da questa riflessione che, insieme alla mia amica <strong>Elisa</strong>, casara, degustatrice ONAF, è nato <em>\"Rituali di gusto\"</em>, un laboratorio che unisce la tradizione casearia artigianale alla mindfulness e alla degustazione consapevole.</p><p class='mb-4'>Un'esperienza immersiva che invita a rallentare, ad aprire i sensi e a incontrare il cibo in modo più autentico, in un luogo speciale: un caseificio nel verde dei <strong>Colli Berici</strong>, dove il tempo sembra avere un ritmo diverso.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Un viaggio nel mondo del formaggio, guidati da chi lo crea</h4><p class='mb-4'>La prima parte del laboratorio è stata affidata a Elisa, casara esperta e appassionata. Attraverso il suo racconto, i partecipanti hanno potuto:</p><ul class='list-disc pl-6 mb-4'><li>scoprire le fasi della lavorazione artigianale del latte</li><li>comprendere il valore delle stagionature</li><li>riconoscere profumi, aromi e caratteristiche dei diversi formaggi</li><li>immergersi in un mondo fatto di gesti antichi, attenzione e cura</li></ul><p class='mb-4'>La sua guida ha trasformato la degustazione in un viaggio sensoriale: ogni formaggio portava con sé una storia, un tempo, una consistenza, una stagione.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Mindful eating: quando la degustazione diventa presenza</h4><p class='mb-4'>Dopo aver esplorato l'arte casearia, ho accompagnato i partecipanti in una pratica di <strong>mindful eating</strong>, pensata appositamente per la degustazione dei formaggi di Sapori di Montegnago.</p><p class='mb-4'>Abbiamo lavorato per portare l'attenzione a ogni fase dell'esperienza:</p><ul class='list-disc pl-6 mb-4'><li>respirare, per preparare i sensi</li><li>osservare forme e colori senza giudizio</li><li>ascoltare consistenze e sensazioni al tatto</li><li>annusare aromi evidenti e note più sottili</li><li>assaggiare con intenzione, lasciando che il gusto si sviluppasse lentamente</li><li>riconoscere le sfumature del sapore e la risposta del corpo</li></ul><p class='mb-4'>In questo modo, ogni morso diventava un rito, un atto di cura e di ascolto, un invito a riscoprire la relazione profonda che abbiamo con il cibo.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Un'atmosfera che nutre corpo, mente e relazione</h4><p class='mb-4'>Il laboratorio si è svolto in un contesto naturale che ha accompagnato la pratica: il silenzio dei colli, l'aria fresca, il ritmo lento del luogo hanno creato un ambiente ideale per un incontro più attento con il cibo e con sé stessi.</p><p class='mb-4'>I partecipanti hanno potuto sperimentare:</p><ul class='list-disc pl-6 mb-4'><li>un nuovo modo di avvicinarsi al gusto</li><li>un contatto più profondo con i propri sensi</li><li>un rallentamento autentico</li><li>una degustazione che non è solo piacere, ma anche consapevolezza</li><li>un momento di condivisione semplice e genuino</li></ul><p class='mb-4'><em>\"Rituali di gusto\"</em> non è stato soltanto un evento, ma un'esperienza di educazione sensoriale e mindfulness che ha lasciato in molti la voglia di ripetere, di continuare a nutrirsi con più attenzione e presenza.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Conclusione: un rituale che resta</h4><p class='mb-4'><em>\"Rituali di gusto\"</em> è un invito a vivere il cibo in modo diverso: più lento, più sentito, più vero. Una degustazione che diventa esperienza, una pausa che diventa ascolto, un formaggio che diventa storia, dialogo, presenza. Un rituale che rimane, anche una volta tornati a casa: la capacità di assaporare, di rallentare, di riconoscere ciò che nutre davvero.</p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/RitualidiGusto1.jpeg",
        images: [
            "img/RitualidiGusto1.jpeg",
            "img/RitualidiGusto2.jpeg",
            "img/RitualidiGusto3.jpeg",
            "img/RitualidiGusto4.jpeg",
            "img/RitualidiGusto5.jpeg",
            "img/RitualidiGusto6.jpeg"
        ],
        id: 3
    },
    {
        title: "Benessere per le atlete",
        excerpt: "Strumenti di mindfulness per affrontare la competizione con calma, presenza e fiducia.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Mindfulness e Sport: Gestire Ansia e Pressione</h3><p class='mb-4'>Percorsi dedicati a giovani atlete per trasformare lo stress della competizione in energia positiva. Il progetto lavora su:</p><p class='mb-4'><strong>Pre-gara:</strong> respirazione, visualizzazioni e tecniche di centratura per arrivare calme e concentrate.</p><p class='mb-4'><strong>Post-gara:</strong> pratiche di defaticamento emotivo per elaborare l'esperienza in modo costruttivo.</p><p class='mb-4'><strong>Consapevolezza corporea:</strong> riconoscere i segnali dell'ansia e imparare a gestirli.</p><p class='mb-4'>Lo sport diventa palestra di consapevolezza, offrendo strumenti utili per la vita.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Benessere per le atlete: Percorsi di gestione dell'ansia e dello stress</h3><p class='mb-4'>Nel mondo sportivo, soprattutto in età evolutiva, le emozioni legate alla competizione possono essere intense e difficili da gestire. L'ansia, la tensione, la paura di sbagliare o la pressione del risultato possono influenzare non solo la performance, ma anche il benessere psicologico delle giovani atlete. Per questo, come psicoterapeuta e formatrice in mindfulness, negli ultimi anni ho sviluppato e condotto un progetto specifico dedicato al benessere delle atlete, con percorsi mirati alla gestione dell'ansia e dello stress nelle fasi pre e post gara.</p><p class='mb-4'>Il progetto ha coinvolto <strong>bambine dagli 8 ai 10 anni</strong> e <strong>atlete preadolescenti e adolescenti</strong> delle scuole medie e superiori, con interventi calibrati in base all'età, alla maturità emotiva e alle esigenze sportive.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Perché lavorare sulle emozioni nello sport?</h4><p class='mb-4'>La gara è un momento carico di aspettative, emozioni e adrenalina. Molte atlete, anche piccole, sperimentano: agitazione prima della competizione, pensieri negativi o autosvalutanti, difficoltà di concentrazione, tensioni muscolari, paura di deludere allenatori, compagni o famiglia, fatica nel \"staccare\" dopo la gara.</p><p class='mb-4'>Intervenire su questi aspetti significa educare alla consapevolezza emotiva, aiutando ogni atleta a riconoscere ciò che accade nel corpo e nella mente, e a sviluppare strumenti efficaci per ritrovare equilibrio e lucidità.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Mindfulness e sport: un binomio efficace</h4><p class='mb-4'>Il cuore del percorso è stato l'utilizzo della <strong>mindfulness applicata allo sport</strong>, adattata alle diverse fasce d'età.</p><p class='mb-4'><strong>Con le piccole atlete (8–10 anni)</strong> ho lavorato attraverso attività semplici, giocose ma profonde: respirazioni lente per calmarsi, riconoscimento delle sensazioni corporee pre-gara, piccole visualizzazioni guidate per immaginarsi calme e presenti, esercizi per \"sentire il cuore che corre\" e imparare a rallentarlo, pratiche di concentrazione attraverso suoni, oggetti o movimenti lenti.</p><p class='mb-4'><strong>Con le atlete più grandi (medie e superiori)</strong> il lavoro è stato più approfondito: riconoscere i pensieri che alimentano l'ansia, pratiche di respiro per modulare l'attivazione fisiologica, esercizi di grounding per ritrovare presenza nel corpo, strategie per migliorare la concentrazione e la gestione del focus, comprensione del dialogo interno e del suo impatto sulla prestazione.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Strumenti semplici, effetti profondi</h4><p class='mb-4'>Le atlete hanno sperimentato un miglioramento nella gestione dell'ansia, concentrazione, fiducia in sé, capacità di recupero, consapevolezza dei propri limiti e delle proprie risorse, stabilità emotiva nelle situazioni di pressione. Hanno inoltre imparato a riconoscersi, ascoltarsi e valorizzarsi.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Conclusione: lo sport come palestra di consapevolezza</h4><p class='mb-4'>Il percorso ha dimostrato quanto lo sport possa diventare una straordinaria palestra non solo per il corpo, ma anche per la mente e il cuore. Lavorare con atlete così giovani — dai primi anni della primaria fino agli adolescenti — significa offrire loro strumenti che le accompagneranno per tutta la vita: non solo in gara, ma nella gestione dello stress quotidiano, nella scuola, nelle relazioni.</p><p class='mb-4'><em>La mindfulness, con la sua semplicità e profondità, diventa così un alleato prezioso per affrontare la competizione con presenza, equilibrio e un rinnovato senso di fiducia.</em></p>",
        tag: "Sport & Mindfulness",
        colorClass: "text-accent-spring",
        bgImage: "img/MindfulBreathing01.jpeg",
        images: [
            "img/MindfulBreathing01.jpeg",
            "img/MindfulBreathing02.jpeg"
        ],
        id: 4
    },
    {
        title: "ZenFlow: Equilibrio Online",
        excerpt: "Mindfulness e yoga si alternano per creare equilibrio tra mente e corpo, comodamente da casa.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Benessere Integrato: Mindfulness e Yoga Online</h3><p class='mb-4'>Un percorso di 10 incontri online dove mindfulness e yoga si alternano per creare un equilibrio profondo tra mente e corpo. In collaborazione con un'insegnante di yoga, ogni lunedì sera offriamo:</p><p class='mb-4'><strong>Mindfulness:</strong> 5 incontri di presenza, respiro e ascolto interiore.</p><p class='mb-4'><strong>Yoga:</strong> 5 incontri di movimento consapevole e rilassamento.</p><p class='mb-4'><strong>Online:</strong> comodamente da casa, per integrare benessere nella quotidianità.</p><p class='mb-4'>Un ciclo semplice ma trasformativo per ritrovare equilibrio e consapevolezza, un lunedì alla volta.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>ZenFlow: Benessere Integrato Online</h3><p class='mb-4'><strong>ZenFlow</strong> è un percorso di 10 incontri online dedicato al benessere integrato di mente e corpo.</p><p class='mb-4'>In collaborazione con un'insegnante di yoga, abbiamo alternato 5 incontri di mindfulness da me condotti e 5 di yoga guidati da lei.</p><p class='mb-4'>Ogni lunedì sera i partecipanti hanno sperimentato pratiche complementari di presenza, respiro e movimento, pensate per favorire equilibrio, ascolto e rilassamento profondo.</p><p class='mb-4'><em>Un ciclo semplice ma trasformativo, nato per portare consapevolezza nella quotidianità.</em></p><p class='mb-4'><strong>Collaborazione con:</strong> Barbara Infinity Balance</p>",
        tag: "Benessere Online",
        colorClass: "text-accent-winter",
        bgImage: "img/Zenflow.jpeg",
        images: [
            "img/Zenflow.jpeg"
        ],
        id: 5
    },
    {
        title: "Mindfulness tra Natura e Sapori",
        excerpt: "Camminare nella natura, assaporare con presenza: un viaggio tra sensi e consapevolezza.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Quando Natura, Cibo e Consapevolezza si Incontrano</h3><p class='mb-4'>Un'esperienza immersiva a Vetriolo Terme dove abbiamo unito la bellezza della natura alpina con la pratica della mindfulness. Il laboratorio ha integrato:</p><p class='mb-4'><strong>Mindful Walking:</strong> una camminata consapevole nella natura per riconnettersi con l'ambiente.</p><p class='mb-4'><strong>Mindful Eating:</strong> degustazione multisensoriale per trasformare ogni boccone in una meditazione.</p><p class='mb-4'><strong>Esperienza di Gruppo:</strong> condivisione e scoperta collettiva in un rifugio alpino.</p><p class='mb-4'>Un viaggio tra sapori autentici e presenza mentale, dove rallentare diventa un atto di cura verso se stessi.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Mindfulness tra Natura e Sapori: laboratorio esperienziale di mindful walking e mindful eating</h3><p class='mb-4'>Nel laboratorio <strong>Mindfulness tra Natura e Sapori</strong>, ospitato al <strong>Nif Alpine Taste</strong> di Vetriolo Terme, abbiamo unito mindful walking e mindful eating in un'esperienza immersiva tra natura e gusto.</p><p class='mb-4'>In collaborazione con una collega psicologa abbiamo guidato una camminata consapevole, mentre il proprietario del locale ha messo a disposizione i cibi per la degustazione.</p><p class='mb-4'>Ho condotto la parte di <strong>mindful eating</strong>, invitando i partecipanti ad ascoltare sensazioni, sapori ed emozioni con presenza e lentezza.</p><p class='mb-4'><em>Un incontro dedicato alla connessione autentica con sé, il cibo e l'ambiente.</em></p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/MIndfulnesstraNaturaeSapori1.jpeg",
        images: [
            "img/MIndfulnesstraNaturaeSapori1.jpeg",
            "img/MIndfulnesstraNaturaeSapori2.png",
            "img/MIndfulnesstraNaturaeSapori3.jpeg",
            "img/MIndfulnesstraNaturaeSapori4.jpeg"
        ],
        id: 6
    },
    {
        title: "Progetto D.I.T.A.",
        excerpt: "Portare calma, presenza e ascolto di sé nelle classi della scuola secondaria.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Mindfulness a scuola: coltivare presenza e benessere</h3><p class='mb-4'>Un intervento dedicato agli studenti della scuola secondaria di primo grado, pensato per introdurre la mindfulness come strumento di consapevolezza emotiva e benessere quotidiano.</p><p class='mb-4'><strong>Progetto Finanziato UE:</strong> realizzato presso l'IC Michelangelo Buonarroti di Rubano nell'ambito del programma D.I.T.A. per la Regione Veneto.</p><p class='mb-4'><strong>Focus su Affettività e Emotività:</strong> accompagnare i ragazzi nel riconoscere emozioni, pensieri e stati interiori.</p><p class='mb-4'><strong>Pratiche Guidate:</strong> brevi meditazioni accessibili per favorire calma, centratura e ascolto di sé.</p><p class='mb-4'><strong>Strumenti per la Quotidianità:</strong> tecniche semplici da portare nella vita scolastica e personale.</p><p class='mb-4'><em>Un'esperienza intensa che ha permesso agli studenti di sperimentare quiete, presenza e benessere.</em></p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Progetto D.I.T.A.: Mindfulness per le Scuole</h3><p class='mb-4'>Il progetto <strong>D.I.T.A.</strong>, realizzato presso l'IC Statale Michelangelo Buonarroti di Rubano e finanziato dall'Unione Europea per la Regione Veneto, è stato pensato per promuovere <em>affettività, emotività e benessere</em> negli studenti della scuola secondaria di primo grado.</p><p class='mb-4'>Ho partecipato al progetto conducendo una sessione di mindfulness rivolta a tutte le classi di terza media.</p><p class='mb-4'>L'incontro è iniziato con una spiegazione semplice e accessibile di cosa sia la mindfulness e di come possa aiutare a riconoscere emozioni, pensieri e stati interiori.</p><p class='mb-4'>Successivamente, gli studenti sono stati guidati in <strong>brevi meditazioni</strong> pensate per favorire calma, centratura e ascolto di sé.</p><p class='mb-4'>Nonostante la durata contenuta, l'esperienza è stata intensa e significativa: tutti gli studenti coinvolti hanno potuto sperimentare un momento di <em>benessere, quiete e presenza</em>, portando con sé strumenti utili da applicare nella quotidianità scolastica e personale.</p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/ProgettoDITA.jpeg",
        images: [
            "img/ProgettoDITA.jpeg"
        ],
        id: 7
    },
    {
        title: "La Donna e il suo Corpo",
        excerpt: "Tornare ad abitare il proprio corpo come luogo di storia, libertà e cura.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Quando il corpo diventa spazio di potere e cura</h3><p class='mb-4'>Un laboratorio dedicato all'empowerment femminile, pensato per offrire uno spazio sicuro e rispettoso in cui esplorare il rapporto con il corpo, il cibo e l'immagine di sé, a partire dalla propria storia emotiva.</p><p class='mb-4'><strong>Lavoro sull'Identità Corporea:</strong> esplorazione del modo in cui il corpo racconta la nostra storia, tra emozioni, memorie e sguardo su di sé.</p><p class='mb-4'><strong>Teatro come Contenitore:</strong> il palco come spazio di espressione, la platea come ascolto, il teatro come luogo simbolico di trasformazione.</p><p class='mb-4'><strong>Approccio Multidisciplinare:</strong> integrazione tra psicodramma, nutrizione gentile e consapevolezza per costruire un rapporto più morbido con il cibo e con sé.</p><p class='mb-4'><strong>Mindful Eating:</strong> pratiche di presenza durante il nutrirsi per osservare emozioni, automatismi e segnali di fame e sazietà.</p><p class='mb-4'><strong>Esperienza di Gruppo:</strong> condivisione, risonanze e sostegno reciproco in un ambiente protetto, tra donne.</p><p class='mb-4'><em>Un invito a tornare ad abitare il proprio corpo come luogo di storia, libertà, potere e cura.</em></p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>La donna e il suo corpo: un progetto dedicato all'empowerment femminile</h3><p class='mb-4'>Il progetto <strong>La donna e il suo corpo</strong> nasce dall'esigenza di creare uno spazio sicuro, accogliente e profondamente rispettoso in cui le donne potessero esplorare il proprio rapporto con il corpo, la propria storia emotiva e le modalità con cui, nel tempo, si sono relazionate al cibo, all'immagine di sé e al proprio benessere complessivo.</p><p class='mb-4'>L'incontro si è svolto in un <strong>teatro a Roma</strong>, un luogo scelto volutamente per la sua capacità di contenere, simbolicamente e fisicamente, ciò che emerge quando si lavora sull'identità corporea: il palco come spazio di espressione, la platea come spazio di ascolto, il teatro intero come contenitore di trasformazioni.</p><p class='mb-4'>Il progetto è stato realizzato in collaborazione con due colleghe: una psicoterapeuta e una dietista. La loro presenza ha arricchito il percorso portando sguardi complementari e competenze specifiche, fondamentali per affrontare il tema dell'empowerment femminile in modo completo e multidisciplinare.</p><p class='mb-4'>La psicoterapeuta ha lavorato sulle dimensioni emotive, sulle memorie corporee e sui vissuti legati all'immagine di sé, offrendo alle partecipanti strumenti per riconoscere le narrazioni interiori che spesso condizionano l'esperienza del corpo. La dietista, invece, ha portato un contributo prezioso legato alla fisiologia, all'alimentazione consapevole e alla possibilità di costruire un rapporto con il cibo più gentile, meno giudicante e calibrato sui bisogni reali.</p><p class='mb-4'>All'interno di questo quadro, il mio intervento si è concentrato sul <strong>mindful eating</strong>, un approccio che invita a recuperare presenza, sensorialità e connessione nel gesto quotidiano del nutrirsi. L'obiettivo non era insegnare \"come mangiare\", ma accompagnare le partecipanti nell'esplorare cosa accade nel corpo e nella mente quando ci si avvicina al cibo: quali emozioni emergono, quali automatismi prendono il sopravvento, quali sensazioni vengono ignorate o amplificate.</p><p class='mb-4'>Durante il laboratorio abbiamo lavorato sull'ascolto del corpo, sull'osservazione dei segnali di fame e sazietà, sulla qualità del respiro e sul contatto con le sensazioni fisiche. Attraverso esercizi guidati, brevi meditazioni e momenti di condivisione, le partecipanti hanno potuto sperimentare come la consapevolezza possa trasformare l'esperienza del cibo e, più in generale, il modo in cui ci si abita dentro.</p><p class='mb-4'>Il lavoro con le mie colleghe ha creato una sinergia particolarmente efficace. La Dott.ssa <strong>Iris Mattera</strong>, psicoterapeuta, ha offerto chiavi di lettura interiori grazie alla messa in scena dello Psicodramma. <strong>Veronica Giachè</strong>, dietista, ha dato indicazioni pratiche e scientifiche, e la mindful eating ha rappresentato il ponte tra queste due dimensioni, traducendo teoria e consapevolezza in esperienza.</p><p class='mb-4'>Il teatro, con la sua atmosfera intima e simbolica, ha amplificato la profondità del percorso: è diventato il luogo in cui ogni donna ha potuto portare la propria voce, la propria vulnerabilità e la propria forza. Il progetto si è concluso con un momento collettivo di riflessione, in cui ciascuna partecipante ha avuto modo di riconoscere non solo ciò che aveva compreso, ma ciò che aveva sentito, dentro il corpo e dentro di sé.</p><p class='mb-4'><em><strong>La donna e il suo corpo</strong> è stato molto più di un incontro formativo: è stato un invito a tornare ad abitare il proprio corpo come luogo di potere, di storia, di libertà e di cura. Un'esperienza che ha mostrato, una volta ancora, che quando le donne si mettono in ascolto di sé e lo fanno insieme, qualcosa di profondo e trasformativo può accadere.</em></p>",
        tag: "Crescita Personale",
        colorClass: "text-accent-spring",
        bgImage: "img/LaDonnaeilsuoCorpo1.jpeg",
        images: [
            "img/LaDonnaeilsuoCorpo1.jpeg",
            "img/LaDonnaeilsuoCorpo2.jpeg",
            "img/LaDonnaeilsuoCorpo3.jpeg",
            "img/LaDonnaeilsuoCorpo4.jpeg",
            "img/LaDonnaeilsuoCorpo5.jpeg",
            "img/LaDonnaeilsuoCorpo6.jpeg"
        ],
        id: 8
    },
    {
        title: "Formazione Insegnanti",
        excerpt: "Vivere le pratiche in prima persona per guidare i bambini nel viaggio emotivo.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Emozioni e Mindfulness per una Scuola Consapevole</h3><p class='mb-4'>Un percorso rivolto alle insegnanti per portare l'educazione emotiva nella quotidianità scolastica. Il laboratorio si fonda su tre pilastri:</p><p class='mb-4'><strong>Comprensione delle emozioni:</strong> riconoscere la funzione di ogni emozione.</p><p class='mb-4'><strong>Gestione delle relazioni:</strong> strumenti pratici da portare in classe.</p><p class='mb-4'><strong>Mindfulness:</strong> pratiche per coltivare presenza e autoregolazione.</p><p class='mb-4'>Quando l'adulto è presente e consapevole, anche i bambini si affidano più facilmente.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Formazione insegnanti: laboratori sulle emozioni e mindfulness</h3><p class='mb-4'>Nel nostro percorso di formazione dedicato alle insegnanti di quarta abbiamo proposto un laboratorio di due ore centrato sulle emozioni e sulla gestione delle relazioni.</p><p class='mb-4'>Attraverso una parte teorica, esercizi di mindfulness e strumenti dello psicodramma abbiamo offerto un'esperienza diretta delle attività che poi avremmo sviluppato con i loro alunni.</p><p class='mb-4'>L'obiettivo era dare alle docenti una comprensione pratica e consapevole del lavoro emotivo previsto in classe, così da creare continuità educativa e un linguaggio condiviso.</p><p class='mb-4'><em>Un momento intenso e partecipato, nato per portare maggiore presenza, ascolto e qualità nelle relazioni scolastiche.</em></p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/FormazioneInsegnanti.jpg",
        images: [
            "img/FormazioneInsegnanti.jpg"
        ],
        id: 9
    }
];

// --- ARTICOLI BLOG ---
const blogArticles = [
    {
        title: "Come Gestire l'Ansia quotidiana",
        excerpt: "L'ansia quotidiana spesso non si presenta con grandi crisi, ma con piccole tensioni che si accumulano.",
        fullText: "<p class='mb-4'>L'ansia quotidiana spesso non si presenta con grandi crisi, ma con piccole tensioni che si accumulano: il respiro che si fa corto, la mente che corre, il corpo sempre in \"allerta\". Invece di combatterla o giudicarla, possiamo imparare a riconoscerla come un segnale, un messaggio che ci invita a rallentare, ascoltarci e prenderci cura di noi in modo diverso.</p><p class='mb-4'>Una delle prime cose che possiamo fare è <strong>tornare al corpo</strong>. Il respiro è uno strumento semplice e sempre disponibile.</p><p class='mb-4'><em>Gestire l'ansia quotidiana non significa eliminarla, ma imparare ad abitarla con più consapevolezza.</em></p>",
        tag: "Benessere",
        colorClass: "text-accent-winter",
        id: 101
    },
    {
        title: "Il Ruolo della Resilienza",
        excerpt: "La resilienza non è la capacità di resistere a tutto senza mai crollare, ma quella di piegarsi senza spezzarsi.",
        fullText: "<p class='mb-4'>La resilienza non è la capacità di \"resistere a tutto\" senza mai crollare, ma piuttosto quella di piegarsi senza spezzarsi, di attraversare le difficoltà e, quando possibile, di imparare qualcosa su di sé lungo il cammino.</p><p class='mb-4'>Un ingrediente centrale della resilienza è la possibilità di <strong>riconoscere le proprie emozioni</strong>, anche quelle scomode, senza negarle.</p><p class='mb-4'><em>Nei momenti difficili, la domanda diventa \"di cosa ho bisogno adesso per attraversare questo momento nel modo più gentile possibile verso di me?\"</em></p>",
        tag: "Psicologia",
        colorClass: "text-accent-spring",
        id: 102
    },
    {
        title: "Relazioni Sane: Confini e Comunicazione",
        excerpt: "Costruire relazioni sane non significa evitare i conflitti, ma imparare a stare dentro i legami senza perdersi.",
        fullText: "<p class='mb-4'>Costruire relazioni sane non significa evitare i conflitti, ma imparare a stare dentro i legami senza perdersi, mantenendo un dialogo autentico con se stessi e con l'altro. Due elementi centrali sono i <strong>confini</strong> e la <strong>comunicazione</strong>.</p><p class='mb-4'><em>Confini e comunicazione non sono competenze da \"imparare una volta per tutte\", ma pratiche che si aggiustano nel tempo.</em></p>",
        tag: "Relazioni",
        colorClass: "text-accent-summer",
        id: 103
    },
    {
        title: "Consapevolezza Emotiva nei Bambini",
        excerpt: "I bambini imparano a conoscere le emozioni prima nel corpo che nelle parole.",
        fullText: "<p class='mb-4'>I bambini imparano a conoscere le emozioni prima nel corpo che nelle parole: una pancia che si stringe, un nodo in gola, un pianto che arriva improvviso. Aiutarli a sviluppare consapevolezza emotiva significa accompagnarli nel dare un nome a ciò che sentono.</p><p class='mb-4'><em>Coltivare la consapevolezza emotiva nei bambini significa offrire loro una base interna più stabile su cui poggiare la crescita.</em></p>",
        tag: "Genitori & Figli",
        colorClass: "text-accent-autumn",
        id: 104
    },
    {
        title: "Super poteri del cuore",
        excerpt: "Educazione emotiva e mindfulness per bambini della scuola primaria.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>I Super Poteri del Cuore: Emozioni e Mindfulness alla Scuola Primaria</h3><p class='mb-4'><em>Educare alle emozioni significa offrire ai bambini gli strumenti per conoscersi davvero</em>, per comprendere ciò che accade dentro di loro e per affrontare il mondo con maggiore equilibrio. Da diversi anni porto nelle scuole primarie il mio laboratorio \"I Super Poteri del Cuore\", un percorso che unisce educazione emotiva e pratiche di mindfulness.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Un percorso che parte dal cuore</h4><p class='mb-4'>Il progetto è costruito come un viaggio alla scoperta di quattro emozioni fondamentali — <strong>gioia, rabbia, tristezza e paura</strong> — presentate ai bambini come veri e propri \"super poteri\". Ogni emozione è un'energia che, se impariamo ad ascoltarla, può diventare un alleato prezioso.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Il diario delle emozioni</h4><p class='mb-4'>Uno degli strumenti più significativi del progetto è il <strong>diario delle emozioni</strong>, un quaderno che accompagna i bambini lungo tutto il percorso.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>La mindfulness come filo conduttore</h4><p class='mb-4'>La mindfulness è il cuore pulsante del progetto. Ogni incontro include momenti di pratica guidata: respirazioni lente, body scan semplificati, esercizi di ascolto sensoriale, meditazioni brevi, pratiche di gentilezza.</p><p class='mb-4'><em>\"I Super Poteri del Cuore\" è un percorso che nasce dal desiderio di aiutare i bambini a conoscere sé stessi attraverso strumenti semplici, concreti e profondi.</em></p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/Superpoteridelcuore.jpeg",
        images: [
            "img/Superpoteridelcuore.jpeg",
            "img/LabScuola01.jpeg"
        ],
        id: 105
    },
    {
        title: "Emozioni in gioco",
        excerpt: "Laboratorio esperienziale per genitori e figli alla scoperta del mondo emotivo.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Emozioni in gioco: Genitori e Figli alla Scoperta del Mondo Emotivo</h3><p class='mb-4'>Insieme a una collega psicologa, ho ideato <strong>\"Emozioni in gioco\"</strong>, un laboratorio esperienziale rivolto a genitori e bambini che desiderano esplorare insieme il mondo delle emozioni attraverso il gioco, la creatività e la mindfulness.</p><p class='mb-4'><em>\"Emozioni in gioco\" non è solo un laboratorio: è un'esperienza che mette al centro la relazione.</em></p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/LabScuola01.jpeg",
        images: [
            "img/LabScuola01.jpeg"
        ],
        id: 106
    },
    {
        title: "Calm Connection",
        excerpt: "Giornata di benessere con yoga, mindfulness, ceramica e natura a Vetriolo Terme.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Calm Connection: Una Giornata di Benessere a Vetriolo Terme</h3><p class='mb-4'><strong>Calm Connection</strong> è stato un invito a rallentare, ascoltarsi e creare connessioni autentiche, immersi nella natura di Vetriolo Terme, nello splendido spazio del <em>NIF Alpine Taste</em>.</p><p class='mb-4'>La giornata ha incluso yoga con Barbara, brunch, laboratorio di ceramica con Michela, mindful walking nel bosco e meditazione.</p><p class='mb-4'><em>Calm Connection è stato più di un evento: un'esperienza di benessere condiviso.</em></p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/CalmConnection1.jpeg",
        images: [
            "img/CalmConnection1.jpeg",
            "img/CalmConnection2.jpeg",
            "img/CalmConnection3.jpeg",
            "img/CalmConnection4.jpeg",
            "img/CalmConnection5.jpeg",
            "img/CalmConnection6.jpeg"
        ],
        id: 107
    },
    {
        title: "Donne: Ascolto e Cura di Sé",
        excerpt: "Uno spazio autentico dove raccontarsi, ascoltarsi e scoprire radici comuni.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Donne: Ascolto e Cura di Sé</h3><p class='mb-4'>Il 9 marzo abbiamo vissuto un'esperienza intensa e significativa, in occasione della giornata dedicata alla donna e al femminile. L'incontro è stato condotto insieme alla collega psicologa <strong>Sofia Dalla Libera</strong>.</p><p class='mb-4'>Nei piccoli gruppi sono nati confronti sinceri e profondi: storie diverse, vissuti unici, ma attraversati da fili comuni.</p><p class='mb-4'>Grazie a tutte le donne che hanno reso possibile questo incontro.</p>",
        tag: "Crescita Personale",
        colorClass: "text-accent-spring",
        bgImage: "img/DonneAscolto01.jpeg",
        images: [
            "img/DonneAscolto01.jpeg",
            "img/DonneAscolto02.jpeg",
            "img/DonneAscolto03.jpeg",
            "img/DonneAscolto04.jpeg",
            "img/DonneAscolto05.jpeg"
        ],
        id: 108
    }
];
