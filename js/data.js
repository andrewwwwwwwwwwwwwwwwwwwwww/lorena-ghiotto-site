/* ======================================
   DATA.JS - Dati Articoli e Laboratori
   ====================================== */

// --- LABORATORI (WORKSHOP) ---
const articles = [
    {
        title: "La Donna e il suo Corpo",
        excerpt: "Tornare ad abitare il proprio corpo come luogo di storia, libertà e cura.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Quando il corpo diventa spazio di potere e cura</h3><p class='mb-4'>Un laboratorio dedicato all'empowerment femminile, pensato per offrire uno spazio sicuro e rispettoso in cui esplorare il rapporto con il corpo, il cibo e l'immagine di sé, a partire dalla propria storia emotiva.</p><p class='mb-4'><strong>Lavoro sull'Identità Corporea:</strong> esplorazione del modo in cui il corpo racconta la nostra storia, tra emozioni, memorie e sguardo su di sé.</p><p class='mb-4'><strong>Teatro come Contenitore:</strong> il palco come spazio di espressione, la platea come ascolto, il teatro come luogo simbolico di trasformazione.</p><p class='mb-4'><strong>Approccio Multidisciplinare:</strong> integrazione tra psicodramma, nutrizione gentile e consapevolezza per costruire un rapporto più morbido con il cibo e con sé.</p><p class='mb-4'><strong>Mindful Eating:</strong> pratiche di presenza durante il nutrirsi per osservare emozioni, automatismi e segnali di fame e sazietà.</p><p class='mb-4'><strong>Esperienza di Gruppo:</strong> condivisione, risonanze e sostegno reciproco in un ambiente protetto, tra donne.</p><p class='mb-4 italic'>Un invito a tornare ad abitare il proprio corpo come luogo di storia, libertà, potere e cura.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>La donna e il suo corpo: un progetto dedicato all'empowerment femminile</h3><p class='mb-4'>Il progetto <strong>La donna e il suo corpo</strong> nasce dall'esigenza di creare uno spazio sicuro, accogliente e profondamente rispettoso in cui le donne potessero esplorare il proprio rapporto con il corpo, la propria storia emotiva e le modalità con cui, nel tempo, si sono relazionate al cibo, all'immagine di sé e al proprio benessere complessivo.</p><p class='mb-4'>L'incontro si è svolto in un <strong>teatro a Roma</strong>, un luogo scelto volutamente per la sua capacità di contenere, simbolicamente e fisicamente, ciò che emerge quando si lavora sull'identità corporea: il palco come spazio di espressione, la platea come spazio di ascolto, il teatro intero come contenitore di trasformazioni.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Un approccio multidisciplinare</h4><p class='mb-4'>Il progetto è stato realizzato in collaborazione con <strong>Iris Mattera</strong>, psicologa e psicoterapeuta, e <strong>Veronica Giachè</strong>, dietista e nutrizionista. Iris ha lavorato sulle dimensioni emotive, sulle memorie corporee e sui vissuti legati all'immagine di sé attraverso lo Psicodramma. Veronica ha portato un contributo prezioso legato alla fisiologia, all'alimentazione consapevole e alla possibilità di costruire un rapporto con il cibo più gentile.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Il mindful eating come ponte</h4><p class='mb-4'>Il mio intervento si è concentrato sul <strong>mindful eating</strong>, un approccio che invita a recuperare presenza, sensorialità e connessione nel gesto quotidiano del nutrirsi. L'obiettivo non era insegnare \"come mangiare\", ma accompagnare le partecipanti nell'esplorare cosa accade nel corpo e nella mente quando ci si avvicina al cibo: quali emozioni emergono, quali automatismi prendono il sopravvento, quali sensazioni vengono ignorate o amplificate.</p><p class='mb-4'>Durante il laboratorio abbiamo lavorato sull'ascolto del corpo, sull'osservazione dei segnali di fame e sazietà, sulla qualità del respiro e sul contatto con le sensazioni fisiche. Attraverso esercizi guidati, brevi meditazioni e momenti di condivisione, le partecipanti hanno potuto sperimentare come la consapevolezza possa trasformare l'esperienza del cibo.</p><p class='mb-4'><strong>La donna e il suo corpo</strong> è stato molto più di un incontro formativo: è stato un invito a tornare ad abitare il proprio corpo come luogo di potere, di storia, di libertà e di cura.</p>",
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
        excerpt: "Camminare nella natura, assaporare con presenza: un viaggio tra sensi e consapevolezza.",
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
        excerpt: "Mindfulness e yoga si alternano per creare equilibrio tra mente e corpo, comodamente da casa.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Benessere Integrato: Mindfulness e Yoga Online</h3><p class='mb-4'>Un percorso di 10 incontri online dove mindfulness e yoga si alternano per creare un equilibrio profondo tra mente e corpo. In collaborazione con un'insegnante di yoga, ogni lunedì sera offriamo:</p><p class='mb-4'><strong>Mindfulness:</strong> 5 incontri di presenza, respiro e ascolto interiore.</p><p class='mb-4'><strong>Yoga:</strong> 5 incontri di movimento consapevole e rilassamento.</p><p class='mb-4'><strong>Online:</strong> comodamente da casa, per integrare benessere nella quotidianità.</p><p class='mb-4'>Un ciclo semplice ma trasformativo per ritrovare equilibrio e consapevolezza, un lunedì alla volta.</p>",
        tag: "Benessere Online",
        colorClass: "text-accent-winter",
        bgImage: "img/Zenflow01.jpeg",
        images: [
            "img/Zenflow01.jpeg",
            "img/CorsiMindfulness01.jpeg",
            "img/CorsiMindfulnessGruppo.jpeg",
            "img/CorsiMindfulnessIndividuale.jpeg"
        ],
        id: 3
    },
    {
        title: "Benessere per le atlete",
        excerpt: "Strumenti di mindfulness per affrontare la competizione con calma, presenza e fiducia.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Mindfulness e Sport: Gestire Ansia e Pressione</h3><p class='mb-4'>Percorsi dedicati a giovani atlete per trasformare lo stress della competizione in energia positiva. Il progetto lavora su:</p><p class='mb-4'><strong>Pre-gara:</strong> respirazione, visualizzazioni e tecniche di centratura per arrivare calme e concentrate.</p><p class='mb-4'><strong>Post-gara:</strong> pratiche di defaticamento emotivo per elaborare l'esperienza in modo costruttivo.</p><p class='mb-4'><strong>Consapevolezza corporea:</strong> riconoscere i segnali dell'ansia e imparare a gestirli.</p><p class='mb-4'>Lo sport diventa palestra di consapevolezza, offrendo strumenti utili per la vita.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Benessere per le atlete: Percorsi di gestione dell'ansia e dello stress</h3><p class='mb-4'>Nel mondo sportivo, soprattutto in età evolutiva, le emozioni legate alla competizione possono essere intense e difficili da gestire. L'ansia, la tensione, la paura di sbagliare o la pressione del risultato possono influenzare non solo la performance, ma anche il benessere psicologico delle giovani atlete.</p><p class='mb-4'>Come psicoterapeuta e formatrice in mindfulness, negli ultimi anni ho sviluppato e condotto un progetto specifico dedicato al benessere delle atlete, con percorsi mirati alla gestione dell'ansia e dello stress nelle fasi pre e post gara.</p><p class='mb-4'>Il progetto ha coinvolto <strong>bambine dagli 8 ai 10 anni</strong> e <strong>atlete preadolescenti e adolescenti</strong> delle scuole medie e superiori, con interventi calibrati in base all'età, alla maturità emotiva e alle esigenze sportive.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Perché lavorare sulle emozioni nello sport?</h4><p class='mb-4'>La gara è un momento carico di aspettative, emozioni e adrenalina. Molte atlete, anche piccole, sperimentano:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Agitazione prima della competizione</li><li>Pensieri negativi o autosvalutanti</li><li>Difficoltà di concentrazione</li><li>Tensioni muscolari</li><li>Paura di deludere allenatori, compagni o famiglia</li><li>Fatica nel \"staccare\" dopo la gara</li></ul><p class='mb-4'>Intervenire su questi aspetti significa <em>educare alla consapevolezza emotiva</em>, aiutando ogni atleta a riconoscere ciò che accade nel corpo e nella mente, e a sviluppare strumenti efficaci per ritrovare equilibrio e lucidità.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Mindfulness e sport: un binomio efficace</h4><p class='mb-4'>Il cuore del percorso è l'utilizzo della <strong>mindfulness applicata allo sport</strong>, adattata alle diverse fasce d'età.</p><p class='mb-3'><strong>Con le piccole atlete (8–10 anni)</strong> lavoro attraverso attività semplici, giocose ma profonde:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Respirazioni lente per calmarsi</li><li>Riconoscimento delle sensazioni corporee pre-gara</li><li>Piccole visualizzazioni guidate per immaginarsi calme e presenti</li><li>Esercizi per \"sentire il cuore che corre\" e imparare a rallentarlo</li><li>Pratiche di concentrazione attraverso suoni, oggetti o movimenti lenti</li></ul><p class='mb-4'>Le bambine imparano a individuare i segnali dell'ansia (\"la pancia che stringe\", \"la gola che si chiude\", \"le mani che tremano\") e a usare strumenti immediati per ritrovare controllo e fiducia.</p><p class='mb-3'><strong>Con le atlete più grandi (medie e superiori)</strong> il lavoro è più approfondito:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Riconoscere i pensieri che alimentano l'ansia (\"non ce la farò\", \"e se sbaglio?\")</li><li>Pratiche di respiro per modulare l'attivazione fisiologica</li><li>Esercizi di grounding per ritrovare presenza nel corpo</li><li>Strategie per migliorare la concentrazione e la gestione del focus</li><li>Comprensione del dialogo interno e del suo impatto sulla prestazione</li><li>Pratiche di mindfulness per affrontare la gara con calma e determinazione</li></ul><p class='mb-4'>Le atlete imparano così a distinguere tra stress \"utile\" e stress \"bloccante\", e a intervenire sui momenti critici prima e dopo la competizione.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Il pre-gara: dalla tensione alla centratura</h4><p class='mb-4'>Nella fase immediatamente precedente alla gara spesso emergono: paura di sbagliare, agitazione fisica, confusione mentale, iperattenzione agli altri.</p><p class='mb-4'>Lavoriamo per trasformare questo momento da fonte di stress a spazio di preparazione consapevole, attraverso: rituali brevi di calm breathing, sequenze di presenza corporea, visualizzazioni positive e realistiche, ancoraggi con frasi interne brevi, semplici e potenzianti.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Il post-gara: recuperare equilibrio</h4><p class='mb-4'>Dopo la competizione emergono spesso delusione, sovraeccitazione, fatica mentale o difficoltà nel \"spegnere\" la tensione.</p><p class='mb-4'>Introduciamo pratiche di defaticamento emotivo e mentale: respirazioni distensive, ascolto del corpo per scaricare tensioni residue, spazi di condivisione guidata sulle emozioni, esercizi per riformulare l'esperienza in modo costruttivo.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Strumenti semplici, effetti profondi</h4><p class='mb-4'>Le atlete sperimentano un miglioramento nella gestione dell'ansia, concentrazione, fiducia in sé, capacità di recupero, consapevolezza dei propri limiti e risorse, stabilità emotiva nelle situazioni di pressione. Imparano inoltre a riconoscersi, ascoltarsi e valorizzarsi.</p><p class='mb-4'><em>Lo sport come palestra di consapevolezza:</em> lavorare con atlete così giovani significa offrire loro strumenti che le accompagneranno per tutta la vita — non solo in gara, ma nella gestione dello stress quotidiano, nella scuola, nelle relazioni. La mindfulness, con la sua semplicità e profondità, diventa un alleato prezioso per affrontare la competizione con presenza, equilibrio e un rinnovato senso di fiducia.</p>",
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
        title: "Spazio Ben-essere",
        excerpt: "Uno spazio per fermarsi, ascoltarsi e ritrovare equilibrio nella quotidianità.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Uno Spazio per Fermarsi e Ascoltarsi</h3><p class='mb-4'>Da gennaio 2026, una serie di incontri gratuiti dedicati alla cura di sé e alle relazioni. Ogni appuntamento di un'ora e mezza offre:</p><p class='mb-4'><strong>Temi di benessere:</strong> cura di sé, dinamiche relazionali, consapevolezza emotiva.</p><p class='mb-4'><strong>Spunti pratici:</strong> strumenti concreti da portare nella quotidianità.</p><p class='mb-4'><strong>Confronto guidato:</strong> momenti di riflessione condivisa in uno spazio accogliente.</p><p class='mb-4'>Un percorso per ritrovare equilibrio, coltivare presenza e comprendere meglio il proprio mondo interiore.</p>",
        tag: "Benessere Online",
        colorClass: "text-accent-winter",
        bgImage: "img/LaboratorioBenessere01.jpeg",
        images: [
            "img/LaboratorioBenessere01.jpeg",
            "img/LaboratorioBenessere02.jpeg",
            "img/LaboratorioBenessere03.jpeg",
            "img/LaboratorioBenessere04.jpeg",
            "img/LaboratorioBenessere05.jpeg"
        ],
        id: 5
    },
    {
        title: "Progetto D.I.T.A.",
        excerpt: "Portare calma, presenza e ascolto di sé nelle classi della scuola secondaria.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Mindfulness a scuola: coltivare presenza e benessere</h3><p class='mb-4'>Un intervento dedicato agli studenti della scuola secondaria di primo grado, pensato per introdurre la mindfulness come strumento di consapevolezza emotiva e benessere quotidiano.</p><p class='mb-4'><strong>Progetto Finanziato UE:</strong> realizzato presso l'IC Michelangelo Buonarroti di Rubano nell'ambito del programma D.I.T.A. per la Regione Veneto.</p><p class='mb-4'><strong>Focus su Affettività e Emotività:</strong> accompagnare i ragazzi nel riconoscere emozioni, pensieri e stati interiori.</p><p class='mb-4'><strong>Pratiche Guidate:</strong> brevi meditazioni accessibili per favorire calma, centratura e ascolto di sé.</p><p class='mb-4'><strong>Strumenti per la Quotidianità:</strong> tecniche semplici da portare nella vita scolastica e personale.</p><p class='mb-4 italic'>Un'esperienza intensa che ha permesso agli studenti di sperimentare quiete, presenza e benessere.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Progetto D.I.T.A.: Mindfulness per le Scuole</h3><p class='mb-4'>Il progetto <strong>D.I.T.A.</strong>, realizzato presso l'IC Statale Michelangelo Buonarroti di Rubano e finanziato dall'Unione Europea per la Regione Veneto, è stato pensato per promuovere <em>affettività, emotività e benessere</em> negli studenti della scuola secondaria di primo grado.</p><p class='mb-4'>Ho partecipato al progetto conducendo una sessione di mindfulness rivolta a tutte le classi di terza media. L'incontro è iniziato con una spiegazione semplice e accessibile di cosa sia la <strong>mindfulness</strong> e di come possa aiutare a riconoscere emozioni, pensieri e stati interiori.</p><p class='mb-4'>Successivamente, gli studenti sono stati guidati in <strong>brevi meditazioni</strong> pensate per favorire calma, centratura e ascolto di sé.</p><p class='mb-4'>Nonostante la durata contenuta, l'esperienza è stata intensa e significativa: tutti gli studenti coinvolti hanno potuto sperimentare un momento di <em>benessere, quiete e presenza</em>, portando con sé strumenti utili da applicare nella quotidianità scolastica e personale.</p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/GruppiStudio01.jpeg",
        images: [],
        id: 6
    },
    {
        title: "Formazione Insegnanti",
        excerpt: "Vivere le pratiche in prima persona per guidare i bambini nel viaggio emotivo.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Emozioni e Mindfulness per una Scuola Consapevole</h3><p class='mb-4'>Un percorso rivolto alle insegnanti per portare l'educazione emotiva nella quotidianità scolastica. Il laboratorio si fonda su tre pilastri:</p><p class='mb-4'><strong>Comprensione delle emozioni:</strong> riconoscere la funzione di ogni emozione.</p><p class='mb-4'><strong>Gestione delle relazioni:</strong> strumenti pratici da portare in classe.</p><p class='mb-4'><strong>Mindfulness:</strong> pratiche per coltivare presenza e autoregolazione.</p><p class='mb-4'>Quando l'adulto è presente e consapevole, anche i bambini si affidano più facilmente.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Formazione Insegnanti: Emozioni e Mindfulness per una Scuola più Consapevole</h3><p class='mb-4'>La scuola è uno dei primi luoghi in cui i bambini imparano non solo a leggere, scrivere e contare, ma soprattutto a conoscersi, relazionarsi e riconoscere ciò che provano. Sempre più spesso si sente parlare dell'importanza dell'educazione emotiva, ma perché questa possa davvero diventare parte della quotidianità scolastica, serve che gli/le insegnanti siano i/le primi/e a fare esperienza di consapevolezza, ascolto e presenza.</p><p class='mb-4'>Da questa visione è nato il percorso di <strong>Formazione Insegnanti</strong> che porto avanti insieme a <strong>Silvia Ferrari</strong>, docente di scuola primaria con cui collaboro con grande sintonia e stima reciproca. Un progetto che si integra direttamente con il lavoro dedicato ai bambini, il percorso \"I Super Poteri del Cuore\", e che ha lo scopo di creare un linguaggio comune, una base condivisa e una continuità autentica tra ciò che avviene in aula e ciò che gli alunni vivono interiormente.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Un laboratorio dedicato alle insegnanti: emozioni, relazione e presenza</h4><p class='mb-4'>Il laboratorio, rivolto alle insegnanti delle classi quarte, è stato pensato come un appuntamento di due ore in cui teoria ed esperienza si sono intrecciate in modo naturale. Al centro, tre pilastri fondamentali:</p><p class='mb-4'><strong>La comprensione delle emozioni</strong> e della loro funzione</p><p class='mb-4'><strong>La gestione delle relazioni</strong>, con strumenti pratici da portare in classe</p><p class='mb-4'><strong>La mindfulness</strong>, come pratica per coltivare presenza e autoregolazione</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Mindfulness: sperimentare prima di insegnare</h4><p class='mb-4'>Dopo la cornice teorica, le insegnanti hanno potuto mettersi in gioco in prima persona attraverso esercizi di mindfulness, attività di osservazione interna e strumenti pratici. Lo scopo non era semplicemente \"parlare di emozioni\", ma farne esperienza, per comprendere da dentro:</p><p class='mb-4'>• Come si muovono le emozioni nel corpo<br>• Come cambia la comunicazione quando c'è presenza<br>• Quali automatismi emergono in situazioni difficili<br>• Quali risorse diventano disponibili quando si porta attenzione consapevole</p><p class='mb-4'>Questo approccio esperienziale è il cuore del percorso: per guidare i bambini nel viaggio emotivo, le insegnanti devono averlo attraversato almeno un po' anche loro.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Un laboratorio per creare continuità: dal docente all'alunno</h4><p class='mb-4'>Uno degli obiettivi principali di questa formazione è facilitare la continuità con il percorso \"I Super Poteri del Cuore\", dedicato ai bambini. Vivere le pratiche in prima persona permette agli insegnanti di comprendere meglio cosa proveranno i bambini durante gli incontri, riconoscere quali strumenti potranno sostenere la classe nella quotidianità, creare un linguaggio condiviso e sentirsi più sicuri nel riconoscere e accogliere le emozioni che emergono in aula.</p><p class='mb-4'>Quando l'adulto è presente, consapevole e radicato, anche i bambini lo percepiscono e si affidano più facilmente.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Verso una scuola che educa il cuore</h4><p class='mb-4'>Questo percorso non è solo un laboratorio isolato: è parte di una visione più ampia, che vede la scuola come luogo in cui crescere come persone, non solo come studenti. Lavorare sulle emozioni, sulla presenza e sulla qualità delle relazioni significa seminare qualcosa di prezioso, che i bambini porteranno con sé molto più a lungo di qualsiasi nozione.</p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/LabScuola01.jpeg",
        images: [
            "img/LabScuola01.jpeg"
        ],
        id: 7
    },
    {
        title: "Oltre i Blocchi",
        excerpt: "Attraversare le resistenze e attivare nuove possibilità con il corpo, il gruppo e l'espressione.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Socioplay Esperienziale: Sbloccare il Potenziale</h3><p class='mb-4'>Un laboratorio per attraversare le fasi di passaggio in cui emergono resistenze e blocchi, trasformandoli in possibilità evolutive:</p><p class='mb-4'><strong>Dimensione corporea:</strong> esplorare attraverso il movimento e l'espressione.</p><p class='mb-4'><strong>Lavoro di gruppo:</strong> ascolto, presenza e condivisione come risorse attive.</p><p class='mb-4'><strong>Psicodramma:</strong> dispositivo simbolico per osservare e rielaborare i blocchi.</p><p class='mb-4'>Accedere a livelli profondi, facilitando insight e possibilità di cambiamento concreto.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Oltre i Blocchi: Socioplay Esperienziale</h3><p class='mb-4'>Nel percorso evolutivo individuale incontro spesso fasi di passaggio in cui emergono resistenze, arresti o veri e propri blocchi. Sono momenti in cui i consueti assetti identitari e relazionali non risultano più funzionali, mentre il nuovo non è ancora pienamente accessibile.</p><p class='mb-4'>Queste soglie, spesso accompagnate da disagio, incertezza o dalla ripetizione di schemi ricorrenti, racchiudono in realtà un importante potenziale trasformativo. Nel mio lavoro considero fondamentale creare contesti strutturati, accoglienti e consapevoli, in cui sia possibile integrare parti interne, elaborare le resistenze e attivare nuove possibilità evolutive.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Il dispositivo psicodrammatico</h4><p class='mb-4'><strong>\"Oltre i blocchi\"</strong> è un socioplay esperienziale che utilizza la dimensione gruppale, corporea ed espressiva come strumenti di esplorazione e trasformazione. Attraverso il dispositivo psicodrammatico e simbolico, accompagno i partecipanti nell'osservare, attraversare e rielaborare i propri blocchi all'interno di uno spazio protetto, favorendo processi di consapevolezza e riorganizzazione interna.</p><h4 class='text-xl font-serif font-bold text-primary mb-4 mt-6'>Il gruppo come risorsa</h4><p class='mb-4'>Durante il laboratorio, il gruppo diventa una risorsa attiva: uno spazio di ascolto, presenza e condivisione in cui ogni esperienza individuale può trovare risonanza e sostegno. Il coinvolgimento corporeo e creativo permette di accedere a livelli più profondi rispetto alla sola dimensione cognitiva, facilitando insight, nuovi significati e possibilità di cambiamento concreto.</p><p class='mb-4'>Conduco questo percorso insieme a <strong>Roberta Curatolo</strong> e <strong>Iris Mattera</strong>, con cui condivido l'approccio e la visione del lavoro.</p>",
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
        eventDate: { start: "2026-05-09", end: "2026-05-10" },
        eventLocation: "NIF - Vetriolo Terme",
        id: 8
    },
    {
        title: "Donne: Ascolto e Cura di Sé",
        excerpt: "Uno spazio autentico dove raccontarsi, ascoltarsi e scoprire radici comuni.",
        modalText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Uno spazio di ascolto, condivisione e connessione</h3><p class='mb-4'>Un incontro speciale dedicato al femminile, realizzato in occasione della giornata della donna insieme alla collega psicologa Sofia Dalla Libera.</p><p class='mb-4'><strong>Spazio Autentico:</strong> un ambiente accogliente dove raccontarsi liberamente, senza giudizio.</p><p class='mb-4'><strong>Confronti Profondi:</strong> piccoli gruppi per condividere storie diverse ma attraversate da fili comuni.</p><p class='mb-4'><strong>Radici Condivise:</strong> scoprire quanto, al di là delle differenze, esistano esperienze che ci uniscono.</p><p class='mb-4'><strong>Energia Femminile:</strong> la forza del gruppo che genera connessione, consapevolezza e bellezza.</p><p class='mb-4 italic'>Grazie a tutte le donne che hanno reso possibile questo incontro.</p>",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Donne: Ascolto e Cura di Sé</h3><p class='mb-4'>Il 9 marzo abbiamo vissuto un'esperienza intensa e significativa, in occasione della giornata dedicata alla donna e al femminile. L'incontro è stato condotto insieme alla collega psicologa <strong>Sofia Dalla Libera</strong>, con cui abbiamo creato uno spazio autentico e accogliente, in cui ogni partecipante ha potuto raccontarsi e disvelarsi con naturalezza, sentendosi ascoltata e libera da ogni giudizio.</p><p class='mb-4'>Nei piccoli gruppi sono nati confronti sinceri e profondi: storie diverse, vissuti unici, ma attraversati da fili comuni. È emerso quanto, al di là delle differenze, esistano radici condivise che ci uniscono e ci avvicinano.</p><p class='mb-4'>Le condivisioni finali hanno restituito tutta la forza del gruppo: un'energia femminile viva, capace di generare connessione, consapevolezza e bellezza.</p><p class='mb-4'>Grazie a tutte le donne che hanno reso possibile questo incontro.</p>",
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
        eventDate: "2026-03-09",
        id: 9
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
        id: 101
    },
    {
        title: "Il Ruolo della Resilienza",
        excerpt: "Scopri come costruire la tua resilienza e ritrovare la forza nei momenti difficili.",
        fullText: "<p class='mb-4'>La resilienza non è una qualità innata, ma una competenza che si può sviluppare.</p><p>In questo articolo esploreremo i pilastri della resilienza: l'auto-consapevolezza, la flessibilità mentale, la capacità di cercare aiuto e il significato personale che attribuiamo alle sfide.</p>",
        tag: "Psicologia",
        colorClass: "text-accent-spring",
        id: 102
    },
    {
        title: "Relazioni Sane: Confini e Comunicazione",
        excerpt: "Come costruire relazioni autentiche imparando a comunicare con chiarezza e stabilire confini.",
        fullText: "<p class='mb-4'>Le relazioni sane iniziano dalla capacità di comunicare in modo assertivo e dal rispetto dei confini personali.</p><p>Scopriamo insieme come dire 'no' senza sensi di colpa, come ascoltare attivamente e come trasformare i conflitti in opportunità di crescita.</p>",
        tag: "Relazioni",
        colorClass: "text-accent-summer",
        id: 103
    },
    {
        title: "Consapevolezza Emotiva nei Bambini",
        excerpt: "Come insegnare ai bambini a riconoscere e gestire le proprie emozioni.",
        fullText: "<p class='mb-4'>Aiutare i bambini a sviluppare l'intelligenza emotiva è uno dei regali più importanti che possiamo fargli.</p><p>Attraverso il gioco, il disegno e la narrazione, possiamo insegnare ai piccoli a nominare le emozioni, a comprenderle e a esprimerle in modo costruttivo.</p>",
        tag: "Genitori & Figli",
        colorClass: "text-accent-autumn",
        id: 104
    },
    {
        title: "Super poteri del cuore",
        excerpt: "Educazione emotiva e mindfulness per bambini della scuola primaria.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>I Super Poteri del Cuore: Emozioni e Mindfulness alla Scuola Primaria</h3><p class='mb-4'><em>Educare alle emozioni significa offrire ai bambini gli strumenti per conoscersi davvero</em>, per comprendere ciò che accade dentro di loro e per affrontare il mondo con maggiore equilibrio. Da diversi anni porto nelle scuole primarie il mio laboratorio \"I Super Poteri del Cuore\", un percorso che unisce educazione emotiva e pratiche di mindfulness.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Un percorso che parte dal cuore</h4><p class='mb-4'>Il progetto è costruito come un viaggio alla scoperta di quattro emozioni fondamentali — <strong>gioia, rabbia, tristezza e paura</strong> — presentate ai bambini come veri e propri \"super poteri\". Ogni emozione è un'energia che, se impariamo ad ascoltarla, può diventare un alleato prezioso.</p><p class='mb-4'>Non esistono emozioni \"giuste\" o \"sbagliate\": tutte sono utili, tutte portano un messaggio. La rabbia ci aiuta a difendere i confini, la paura ci protegge, la tristezza ci invita a rallentare e chiedere aiuto, la gioia ci apre alla condivisione.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Il diario delle emozioni</h4><p class='mb-4'>Uno degli strumenti più significativi del progetto è il <strong>diario delle emozioni</strong>, un quaderno che accompagna i bambini lungo tutto il percorso. È il loro spazio privato e creativo, dove possono:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Annotare sensazioni e pensieri</li><li>Disegnare ciò che provano</li><li>Registrare gli esercizi di mindfulness fatti insieme</li><li>Osservare come le emozioni cambiano nel tempo</li></ul><p class='mb-4'>Il diario diventa una piccola mappa del loro mondo interiore, un luogo sicuro dove imparare a riconoscersi.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>La mindfulness come filo conduttore</h4><p class='mb-4'>La mindfulness è il cuore pulsante del progetto. Ogni incontro include momenti di pratica guidata:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Respirazioni lente e consapevoli per calmare il corpo</li><li>Body scan semplificati, per percepire dove l'emozione si \"accende\" nel corpo</li><li>Esercizi di ascolto sensoriale per allenare l'attenzione</li><li>Meditazioni brevi legate all'emozione del giorno</li><li>Pratiche di gentilezza, rivolte a sé stessi e ai compagni</li></ul><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Imparare a riconoscere e regolare</h4><p class='mb-4'>Grazie alle pratiche di mindfulness, i bambini imparano a: osservare l'emozione senza esserne travolti, dare un nome a ciò che provano, trovare strategie calmanti quando sono agitati, riconoscere le emozioni negli altri e rispondere con empatia.</p><p class='mb-4'>Queste competenze favoriscono relazioni più rispettose e un clima di classe più sereno. I bambini scoprono che non sono soli nelle loro emozioni e che ciò che provano è condiviso, umano, naturale. Questo li fa sentire visti, compresi, più sicuri.</p><p class='mb-4'><em>\"I Super Poteri del Cuore\" è un percorso che nasce dal desiderio di aiutare i bambini a conoscere sé stessi attraverso strumenti semplici, concreti e profondi.</em></p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/Superpoteridelcuore.jpeg",
        images: [
            "img/Emozioniascuolta.jpg",
            "img/Superpoteridelcuore.jpeg",
            "img/LabScuola01.jpeg"
        ],
        id: 105
    },
    {
        title: "Emozioni in gioco",
        excerpt: "Laboratorio esperienziale per genitori e figli alla scoperta del mondo emotivo.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Emozioni in gioco: Genitori e Figli alla Scoperta del Mondo Emotivo</h3><p class='mb-4'>Nel ritmo frenetico della quotidianità, trovare un tempo di qualità da condividere con i propri figli può diventare una sfida. Spesso le emozioni, soprattutto quelle più difficili, rimangono inascoltate o espresse in modi che generano distanza e incomprensioni.</p><p class='mb-4'>Insieme a una collega psicologa, ho ideato <strong>\"Emozioni in gioco\"</strong>, un laboratorio esperienziale rivolto a genitori e bambini che desiderano esplorare insieme il mondo delle emozioni attraverso il gioco, la creatività e la mindfulness.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Perché un laboratorio per genitori e figli?</h4><p class='mb-4'>Le emozioni sono il linguaggio più autentico attraverso cui comunichiamo. Questo laboratorio crea uno spazio protetto dove adulti e bambini possono:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Imparare a conoscersi meglio</li><li>Comprendere il proprio funzionamento emotivo</li><li>Trasformare i momenti di fatica in occasioni di dialogo</li><li>Riscoprire il piacere di stare insieme senza fretta</li><li>Sviluppare una comunicazione affettiva più chiara e gentile</li></ul><p class='mb-4'>La presenza congiunta di genitori e figli permette un apprendimento profondamente relazionale, dove ogni esperienza diventa un'opportunità per costruire complicità, fiducia e vicinanza emotiva.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Mindfulness: il cuore silenzioso del percorso</h4><p class='mb-4'>La mindfulness è il filo conduttore di tutti gli incontri. Proposta in modo semplice e accessibile, aiuta grandi e piccoli a:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Portare attenzione al momento presente</li><li>Ascoltare il corpo e le sensazioni interne</li><li>Calmare mente e respiro nei momenti di agitazione</li><li>Restare con ciò che si prova senza giudicarsi</li><li>Comunicare con maggiore consapevolezza</li></ul><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Il gioco come ponte</h4><p class='mb-4'>Il gioco è il linguaggio naturale dei bambini e, quando condiviso con i genitori, diventa una modalità profonda per comunicare. Durante il laboratorio proponiamo attività creative e ludiche che permettono di riconoscere nel corpo le diverse emozioni, sperimentare modalità nuove di espressione emotiva, ridere, muoversi, creare insieme.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Cosa si sperimenta durante gli incontri</h4><ul class='list-disc ml-6 mb-4 space-y-1'><li>Giochi di movimento e cooperazione</li><li>Attività creative (disegno, collage, laboratori manuali)</li><li>Pratiche di mindfulness condivise</li><li>Esercizi di ascolto e comunicazione emotiva</li><li>Momenti di confronto guidato tra genitori e bambini</li><li>Spazi di calma e silenzio per ritrovare presenza</li></ul><p class='mb-4'>Ogni coppia genitore-figlio porta via con sé un piccolo bagaglio di strumenti pratici, da utilizzare nella quotidianità per affrontare i momenti di tensione e per vivere relazioni più morbide e consapevoli.</p><p class='mb-4'><em>\"Emozioni in gioco\" non è solo un laboratorio: è un'esperienza che mette al centro la relazione. Le emozioni non sono ostacoli, ma ponti: ponti che permettono di incontrarsi, capirsi e crescere insieme.</em></p>",
        tag: "Scuola & Formazione",
        colorClass: "text-accent-autumn",
        bgImage: "img/LabScuola01.jpeg",
        images: [
            "img/LabScuola01.jpeg"
        ],
        id: 106
    },
    {
        title: "Rituali di gusto",
        excerpt: "Degustazione consapevole e mindfulness al caseificio Sapori di Montegnago.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Rituali di gusto: Degustazione Consapevole e Mindfulness</h3><p class='mb-4'>In un mondo che corre veloce, anche il cibo rischia di diventare un gesto automatico, quasi invisibile. È da questa riflessione che, insieme alla mia amica <strong>Elisa</strong>, casara e degustatrice ONAF, è nato <em>\"Rituali di gusto\"</em>, un laboratorio che unisce la tradizione casearia artigianale alla mindfulness e alla degustazione consapevole.</p><p class='mb-4'>Un'esperienza immersiva che invita a rallentare, ad aprire i sensi e a incontrare il cibo in modo più autentico, in un luogo speciale: un caseificio nel verde dei <strong>Colli Berici</strong>, dove il tempo sembra avere un ritmo diverso.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Un viaggio nel mondo del formaggio</h4><p class='mb-4'>La prima parte del laboratorio è affidata a Elisa, casara esperta e appassionata. Attraverso il suo racconto, i partecipanti possono:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Scoprire le fasi della lavorazione artigianale del latte</li><li>Comprendere il valore delle stagionature</li><li>Riconoscere profumi, aromi e caratteristiche dei diversi formaggi</li><li>Immergersi in un mondo fatto di gesti antichi, attenzione e cura</li></ul><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Mindful eating: quando la degustazione diventa presenza</h4><p class='mb-4'>Dopo aver esplorato l'arte casearia, accompagno i partecipanti in una pratica di <strong>mindful eating</strong>:</p><ul class='list-disc ml-6 mb-4 space-y-1'><li>Respirare, per preparare i sensi</li><li>Osservare forme e colori senza giudizio</li><li>Ascoltare consistenze e sensazioni al tatto</li><li>Annusare aromi evidenti e note più sottili</li><li>Assaggiare con intenzione, lasciando che il gusto si sviluppi lentamente</li><li>Riconoscere le sfumature del sapore e la risposta del corpo</li></ul><p class='mb-4'>In questo modo, ogni morso diventa un rito, un atto di cura e di ascolto, un invito a riscoprire la relazione profonda che abbiamo con il cibo.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Perché nasce questo laboratorio</h4><p class='mb-4'>Ho voluto creare questo percorso perché credo che il cibo possa essere una porta di accesso alla consapevolezza quotidiana. Mangiare con presenza significa: rispettare il lavoro artigiano, ascoltare il corpo, riconnettersi ai sensi, trasformare un gesto quotidiano in un momento di cura.</p><p class='mb-4'><em>\"Rituali di gusto\" è un invito a vivere il cibo in modo diverso: più lento, più sentito, più vero. Una degustazione che diventa esperienza, una pausa che diventa ascolto, un formaggio che diventa storia, dialogo, presenza.</em></p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/Degustazione caseificio_3548.jpeg",
        images: [
            "img/Degustazione caseificio_3535.jpeg",
            "img/Degustazione caseificio_3538.jpeg",
            "img/Degustazione caseificio_3543.jpeg",
            "img/Degustazione caseificio_3548.jpeg",
            "img/Degustazione caseificio_3558.jpeg",
            "img/Degustazione caseificio_3559.jpeg"
        ],
        id: 107
    },
    {
        title: "Calm Connection",
        excerpt: "Giornata di benessere con yoga, mindfulness, ceramica e natura a Vetriolo Terme.",
        fullText: "<h3 class='text-2xl font-serif font-bold text-primary mb-6'>Calm Connection: Una Giornata di Benessere a Vetriolo Terme</h3><p class='mb-4'><strong>Calm Connection</strong> è stato un invito a rallentare, ascoltarsi e creare connessioni autentiche, immersi nella natura di Vetriolo Terme, nello splendido spazio del <em>NIF Alpine Taste</em>.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Yoga e risveglio del corpo</h4><p class='mb-4'>La giornata si è aperta con una pratica di <strong>yoga</strong> guidata da Barbara, insegnante di yoga, che ci ha accompagnate in un risveglio dolce del corpo e del respiro, creando uno spazio di presenza e apertura.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Brunch e convivialità</h4><p class='mb-4'>Dopo la pratica, siamo state coccolate da uno squisito brunch, preparato con cura da Edo, proprietario del NIF, un momento conviviale che ha favorito condivisione e leggerezza.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Laboratorio di ceramica</h4><p class='mb-4'><strong>Michela</strong> ha condotto il laboratorio di ceramica, lavorando l'argilla come strumento di espressione, creatività e ascolto. Un'esperienza tattile e meditativa, dove il tempo ha iniziato naturalmente a rallentare.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Mindful Walking nel bosco</h4><p class='mb-4'>Nel pomeriggio ho guidato una sessione di <strong>mindful walking</strong>: attraverso una breve passeggiata nel bosco, ci siamo concesse il tempo di rallentare il passo e affinare l'ascolto — dei piedi che toccano la terra, del respiro che si fa più profondo, dei suoni del bosco che diventano presenza viva.</p><p class='mb-4'>La pratica si è conclusa con una <strong>meditazione nel bosco</strong>, uno spazio di quiete e raccoglimento in cui fermarsi, osservare e semplicemente essere. Avvolte dall'energia del luogo, abbiamo coltivato una presenza gentile e radicata, portando con noi una sensazione di calma profonda e connessione con noi stesse e con l'ambiente circostante.</p><h4 class='font-serif font-semibold text-lg text-primary mt-6 mb-3'>Merenda e creazioni</h4><p class='mb-4'>Dopo una merenda deliziosa, sempre offerta dal NIF, siamo tornate nuovamente all'argilla con Michela, approfondendo il laboratorio in un clima ancora più intimo e consapevole, vedendo prendere vita forma e colore le creazioni delle partecipanti.</p><p class='mb-4'><em>Calm Connection è stato più di un evento: un'esperienza di benessere condiviso, fatta di cura, presenza, creatività e accoglienza, in un luogo capace di far sentire davvero a casa.</em></p>",
        tag: "Natura & Benessere",
        colorClass: "text-accent-summer",
        bgImage: "img/Calmconnection01.jpeg",
        images: [
            "img/Calmconnection01.jpeg",
            "img/CalmConnection02.jpeg",
            "img/CalmConnection03.jpeg",
            "img/CalmConnection04.jpeg",
            "img/CalmConnection05.jpeg",
            "img/CalmConnection06.jpeg"
        ],
        id: 108
    }
];
