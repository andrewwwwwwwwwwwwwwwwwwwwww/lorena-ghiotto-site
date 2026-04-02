<?php
/**
 * Template Homepage - replica esatta del sito statico
 *
 * @package Lorena_Ghiotto
 */

get_header();

$img_base = get_template_directory_uri() . '/assets/img/';
?>

    <!-- HERO SECTION -->
    <section class="pt-32 pb-20 bg-main min-h-[80vh] flex items-center text-center relative overflow-hidden">
        <div class="w-full px-6 relative z-10">
            <h1 class="text-5xl md:text-7xl font-bold text-primary mb-2 leading-tight text-center mx-auto">
                <span class="inline-block">&ldquo;Il terapeuta potr&agrave; portare il paziente</span><br>
                <span class="inline-block">solo fin dove lui stesso &egrave; arrivato&rdquo;</span>
            </h1>
            <p class="text-3xl md:text-4xl font-normal text-primary mb-6 italic text-center">
                &mdash; C. G. Jung
            </p>
            <p class="text-xl md:text-2xl text-primary mb-10 max-w-2xl mx-auto font-serif">
                Ogni percorso ha le sue stagioni. Troviamo insieme la tua.
            </p>
            <p class="text-xl text-secondary mb-10 max-w-2xl mx-auto font-light">
                Sono Lorena Ghiotto. Offro uno spazio di ascolto sicuro e non giudicante per accompagnarti attraverso le fasi della vita.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#percorsi" onclick="showTab('adulti')" class="bg-white px-8 py-4 rounded-xl shadow-md text-primary font-bold hover:shadow-lg transition border-l-4 border-primary text-left cursor-pointer">
                    Un Percorso per Te <span class="block text-xs font-normal text-secondary mt-1">Ansia, Stress, Cambiamento &rarr;</span>
                </a>
                <a href="#percorsi" onclick="showTab('giovani')" class="bg-white px-8 py-4 rounded-xl shadow-md text-primary font-bold hover:shadow-lg transition border-l-4 border-accent-cta text-left cursor-pointer">
                    Adolescenti e Bambini <span class="block text-xs font-normal text-secondary mt-1">Crescita, Emozioni, Sostegno &rarr;</span>
                </a>
            </div>
        </div>
    </section>

    <!-- CHI SONO -->
    <section id="chisiamo" class="py-24 bg-white">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div class="relative">
                <div class="absolute inset-0 bg-main rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img src="<?php echo esc_url($img_base . 'Profilo_Ghiotto.jpg'); ?>" alt="Lorena Ghiotto" class="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]">
            </div>
            <div>
                <h2 class="text-4xl font-bold text-primary mb-6">Chi Sono</h2>
                <p class="text-lg text-secondary mb-4 leading-relaxed">
                    Sono psicologa, psicoterapeuta e formatrice mindfulness. Il mio lavoro nasce da una profonda passione per il sentire, per i processi emotivi e per le relazioni, ed &egrave; il risultato di un percorso personale e professionale fatto di scelte, cambi di direzione e trasformazioni.
                </p>
                <p class="text-lg text-secondary mb-4 leading-relaxed">
                    Mi sono formata a Padova e poi a Roma, dove ho incontrato lo <strong>Psicodramma</strong> presso IPOD Plays: un&rsquo;esperienza che ha rivoluzionato il mio modo di sentire e di accompagnare l&rsquo;altro. Nel tempo ho integrato nel mio percorso la <strong>mindfulness</strong>, diventata un pilastro centrale del mio lavoro e della mia crescita personale.
                </p>
                <p class="text-lg text-secondary mb-8 leading-relaxed">
                    Ad oggi psicodramma, metodi attivi e mindfulness sono i riferimenti principali del mio lavoro: li utilizzo nello studio clinico, nei laboratori esperienziali e nei percorsi di gruppo. Credo in un approccio che metta al centro la persona nella sua interezza.
                </p>
                <button onclick="openBioModal()" class="text-accent-cta font-bold hover:text-primary underline underline-offset-4 mb-6 block">Leggi la mia storia completa &rarr;</button>
                <ul class="space-y-3 text-sm text-secondary font-medium border-t pt-6">
                    <li>Laurea in Psicologia Clinico-Dinamica &mdash; Universit&agrave; di Padova</li>
                    <li>Specializzazione in Psicoterapia &mdash; Psicodramma (IPOD Plays, Roma)</li>
                    <li>Formatrice Mindfulness</li>
                    <li>Conduttrice di laboratori esperienziali</li>
                    <li>Iscritta nella sezione A dell&rsquo;Albo dal 23/10/2017 &mdash; n. 23394</li>
                </ul>
                <button onclick="openSpaziModal()" class="text-accent-cta font-bold hover:text-primary underline underline-offset-4 mt-6 block">I miei spazi &rarr;</button>
            </div>
        </div>
    </section>

    <!-- APPROCCIO (STAGIONI) -->
    <section id="approccio" class="py-24 bg-main">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-primary mb-4">La Terapia come Ciclo Naturale</h2>
                <p class="text-secondary max-w-2xl mx-auto">La metafora delle stagioni ci aiuta a comprendere che ogni fase ha un senso.</p>
            </div>
            <div class="grid md:grid-cols-4 gap-6">
                <div data-season="winter" class="season-card bg-white p-8 rounded-xl shadow-sm text-center border-t-4 border-winter">
                    <div class="mb-4 w-24 h-24 mx-auto"><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle fill="#EBF2ED" cx="48" cy="48" r="40"/><path d="M30 62 Q48 66 66 62" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M48 34 L48 52" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M40 43 L56 43" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M41 37 L55 49" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M55 37 L41 49" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/></svg></div>
                    <h3 class="text-xl font-bold text-primary mb-2">Inverno</h3>
                    <p class="text-sm text-secondary">Introspezione e riposo. Accogliamo il blocco per raccogliere energie.</p>
                </div>
                <div data-season="spring" class="season-card bg-white p-8 rounded-xl shadow-sm text-center border-t-4 border-spring">
                    <div class="mb-4 w-24 h-24 mx-auto"><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle fill="#EBF2ED" cx="48" cy="48" r="40"/><path d="M30 60 Q48 64 66 60" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M48 60 L48 46" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M48 50 C44 48, 42 46, 41 43 C44 43, 46 44, 48 46" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M48 48 C50 46, 52 45, 55 45 C54 48, 52 50, 48 52" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/></svg></div>
                    <h3 class="text-xl font-bold text-primary mb-2">Primavera</h3>
                    <p class="text-sm text-secondary">Rinascita. Piantiamo i semi del cambiamento.</p>
                </div>
                <div data-season="summer" class="season-card bg-white p-8 rounded-xl shadow-sm text-center border-t-4 border-summer">
                    <div class="mb-4 w-24 h-24 mx-auto"><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle fill="#EBF2ED" cx="48" cy="48" r="40"/><path d="M28 60 Q48 64 68 60" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><circle cx="48" cy="46" r="10" fill="#3A6B53"/><path d="M48 30 L48 34" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M48 58 L48 62" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M34 46 L38 46" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M58 46 L62 46" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/></svg></div>
                    <h3 class="text-xl font-bold text-primary mb-2">Estate</h3>
                    <p class="text-sm text-secondary">Pienezza. Consolidiamo le risorse e agiamo.</p>
                </div>
                <div data-season="autumn" class="season-card bg-white p-8 rounded-xl shadow-sm text-center border-t-4 border-autumn">
                    <div class="mb-4 w-24 h-24 mx-auto"><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle fill="#EBF2ED" cx="48" cy="48" r="40"/><path d="M40 30 C46 28, 52 28, 58 30" fill="none" stroke="#5C6F66" stroke-width="2.5" stroke-linecap="round"/><path d="M48 34 C44 38, 42 42, 42 47 C42 52, 44 56, 48 60 C52 56, 54 52, 54 47 C54 42, 52 38, 48 34 Z" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/><path d="M48 34 L48 58" fill="none" stroke="#3A6B53" stroke-width="2.5" stroke-linecap="round"/></svg></div>
                    <h3 class="text-xl font-bold text-primary mb-2">Autunno</h3>
                    <p class="text-sm text-secondary">Raccolto. Integriamo e lasciamo andare ci&ograve; che non serve.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- PERCORSI -->
    <section id="percorsi" class="py-24 bg-white relative overflow-hidden">
        <div id="bg-adulti" class="percorso-bg absolute inset-0 opacity-25 pointer-events-none" style="background: url('<?php echo esc_url($img_base . 'bg_adulti.png'); ?>') center center/contain no-repeat;"></div>
        <div id="bg-giovani" class="percorso-bg absolute inset-0 opacity-10 pointer-events-none hidden" style="background: url('<?php echo esc_url($img_base . 'Cards.png'); ?>') center center/contain no-repeat;"></div>

        <div class="container mx-auto px-6 max-w-5xl relative z-10">
            <h2 class="text-4xl font-bold text-primary text-center mb-10">Un Percorso su Misura</h2>
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button onclick="showTab('adulti')" id="btn-adulti" class="px-8 py-3 rounded-full font-bold transition active-tab shadow-md">Adulti</button>
                <button onclick="showTab('giovani')" id="btn-giovani" class="px-8 py-3 rounded-full font-bold text-secondary bg-gray-100 hover:bg-gray-200 transition">Adolescenti e Bambini</button>
                <button onclick="showTab('terzaeta')" id="btn-terzaeta" class="px-8 py-3 rounded-full font-bold text-secondary bg-gray-100 hover:bg-gray-200 transition">Terza Et&agrave;</button>
            </div>

            <!-- TAB ADULTI -->
            <div id="tab-adulti" class="grid md:grid-cols-2 gap-4 items-start">
                <div class="percorso-card" data-percorso="ansia">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Ansia e Attacchi di Panico</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Mi occupo di accompagnare le persone che vivono stati d&rsquo;ansia, attacchi di panico e paure pervasive che interferiscono con la quotidianit&agrave;. Il lavoro terapeutico &egrave; orientato a comprendere le origini profonde dei sintomi, imparare a riconoscerli e gestirli.</p>
                        <p class="mb-3">Attraverso strumenti psicodinamici, metodi attivi, tecniche di mindfulness e di regolazione emotiva, &egrave; possibile ritrovare sicurezza, calma e fiducia nelle proprie risorse.</p>
                        <p>Tutto questo offrendo uno spazio sicuro in cui comprendere e accogliere le proprie emozioni.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="relazioni">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Difficolt&agrave; Relazionali</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Quando le relazioni diventano fonte di frustrazione o dolore, il sostegno psicologico pu&ograve; fare la differenza. Lavoro con persone che sperimentano difficolt&agrave; nelle relazioni affettive, familiari, amicali o lavorative.</p>
                        <p>Insieme esploriamo modalit&agrave; relazionali ripetitive, conflitti, vissuti di distanza o dipendenza emotiva. La terapia offre uno spazio sicuro per comprendere i propri bisogni e costruire relazioni pi&ugrave; autentiche.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="stress">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Gestione Stress</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Lo stress pu&ograve; accumularsi silenziosamente e influire sul benessere quotidiano. Mi occupo di aiutare le persone a riconoscere le fonti di stress e i segnali del corpo, sviluppando strategie per gestire carichi emotivi.</p>
                        <p>Il lavoro terapeutico integra ascolto psicologico, mindfulness e tecniche di regolazione psicocorporea per favorire equilibrio e prevenzione del burnout.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="lutto">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Elaborazione Lutto</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Perdere qualcuno o qualcosa di importante lascia spesso un vuoto profondo. Accompagno persone che stanno attraversando un lutto, una perdita o una separazione significativa.</p>
                        <p>La terapia offre uno spazio di accoglienza del dolore. Attraverso l&rsquo;ascolto e il lavoro emotivo, diventa possibile dare senso alla perdita e ritrovare gradualmente un nuovo equilibrio interiore.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="autostima">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Autostima e Crescita Personale</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Spesso ci troviamo a dubitare di noi stessi o a sottovalutare le nostre risorse. Mi occupo di percorsi orientati al rafforzamento dell&rsquo;autostima, alla conoscenza di s&eacute; e allo sviluppo delle proprie potenzialit&agrave;.</p>
                        <p>Lavoriamo su insicurezze, senso di inadeguatezza e blocchi emotivi, favorendo una maggiore consapevolezza dei propri valori e desideri.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="rilassamento">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Tecniche di Rilassamento Psicocorporeo</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Utilizzo tecniche di rilassamento psicocorporeo per favorire il contatto con il corpo e la regolazione del sistema emotivo.</p>
                        <p>Attraverso respirazione consapevole, mindfulness e pratiche corporee, &egrave; possibile ridurre tensioni fisiche e mentali e sviluppare una maggiore presenza e ascolto di s&eacute;.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="online">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Consulenza e Terapia Online</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Offro percorsi di consulenza e psicoterapia online, garantendo uno spazio di ascolto sicuro, riservato ed efficace anche a distanza.</p>
                        <p>La modalit&agrave; online consente continuit&agrave; terapeutica, flessibilit&agrave; e accessibilit&agrave;. &Egrave; una soluzione adatta a chi vive lontano o ha difficolt&agrave; a recarsi in studio.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="genitorialita">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Sostegno alla Genitorialit&agrave;</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Mi occupo di supportare genitori nei diversi momenti del ciclo di vita familiare.</p>
                        <p>Il lavoro terapeutico aiuta a comprendere le dinamiche relazionali con i figli, affrontare difficolt&agrave; educative ed emotive e sostenere il ruolo genitoriale con pi&ugrave; consapevolezza.</p>
                    </div>
                </div>
                <div class="percorso-card md:col-span-2" data-percorso="coppia">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Terapia di Coppia</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Accompagno le coppie che attraversano momenti di crisi, difficolt&agrave; comunicative o cambiamenti importanti. La terapia di coppia offre uno spazio protetto per esplorare conflitti, bisogni e dinamiche relazionali.</p>
                        <p>L&rsquo;obiettivo &egrave; favorire una comunicazione pi&ugrave; autentica, una maggiore comprensione reciproca e nuove possibilit&agrave; di incontro.</p>
                    </div>
                </div>
            </div>

            <!-- TAB GIOVANI -->
            <div id="tab-giovani" class="tab-hidden flex flex-col gap-4">
                <div class="percorso-card" data-percorso="umore-giovani">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-accent-cta rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Disturbi dell&rsquo;Umore</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Mi occupo di bambini e adolescenti che vivono episodi di tristezza, apatia, sbalzi d&rsquo;umore o cali di motivazione. In terapia aiuto a riconoscere e comprendere le emozioni, imparando a gestire i momenti difficili con strumenti concreti.</p>
                        <p>Lavoriamo insieme su consapevolezza emotiva e valorizzazione delle risorse interne. Spesso il percorso coinvolge anche la famiglia.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="comportamento">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-accent-cta rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Disturbi Comportamentali</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Accompagno bambini e adolescenti che mostrano difficolt&agrave; nel comportamento, impulsivit&agrave;, oppositivit&agrave; o problemi di autoregolazione.</p>
                        <p>Lavoriamo in uno spazio sicuro dove il giovane pu&ograve; esprimersi liberamente, sperimentare nuovi modi di reagire e sviluppare consapevolezza delle proprie emozioni.</p>
                    </div>
                </div>
                <div class="percorso-card" data-percorso="mindfulness-giovani">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-accent-cta rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Percorsi Mindfulness Individuali e/o di Gruppo</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Progetto e conduco percorsi di mindfulness pensati specificamente per bambini e adolescenti, sia individuali sia di gruppo. Gli incontri permettono di sviluppare attenzione, consapevolezza emotiva e regolazione dello stress.</p>
                        <p>La pratica aiuta i pi&ugrave; giovani a riconoscere e accogliere le emozioni, migliorare la concentrazione e ritrovare calma nei momenti di tensione.</p>
                    </div>
                </div>
            </div>

            <!-- TAB TERZA ETÀ -->
            <div id="tab-terzaeta" class="tab-hidden">
                <div class="percorso-card" data-percorso="terzaeta">
                    <div class="percorso-header">
                        <span class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        <span class="flex-grow">Terza Et&agrave;</span>
                        <svg class="percorso-arrow w-5 h-5 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="percorso-content">
                        <p class="mb-3">Accompagnare le persone nell&rsquo;invecchiamento &egrave; per me un percorso di ascolto e sostegno. Offro uno spazio sicuro per affrontare solitudine e perdite, aiutando a costruire nuove relazioni e ritrovare un senso di appartenenza.</p>
                        <p class="mb-3">Supporto chi vive ansia o depressione legate all&rsquo;et&agrave; e lavoro sulla stimolazione cognitiva per preservare memoria e concentrazione.</p>
                        <p>Accompagno chi convive con dolore o malattie croniche, aiutando a gestire emozioni con pi&ugrave; equilibrio.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- RECENSIONI CAROUSEL -->
    <section id="recensioni" class="py-12 bg-main">
        <div class="container mx-auto px-6">
            <div class="reviews-section-carousel max-w-4xl mx-auto">
                <div class="reviews-header">
                    <h2 class="text-2xl md:text-3xl font-bold text-primary text-center mb-2">Le Vostre Parole</h2>
                    <div class="reviews-stats">
                        <div class="rating-summary"><span class="stars-display">&#9733;&#9733;&#9733;&#9733;&#9733;</span><strong id="averageRating">5.0</strong></div>
                        <span>&bull;</span>
                        <span><strong id="totalReviews">27</strong> recensioni verificate</span>
                    </div>
                </div>
                <div id="reviewsContent" style="background: #f8f9fa; border-radius: 12px; padding: 24px; margin-bottom: 20px; min-height: 200px;">
                    <p style="text-align: center; color: #7f8c8d;">Caricamento recensioni...</p>
                </div>
                <div class="carousel-controls" id="carouselControls" style="display: none;">
                    <button class="carousel-arrow" id="prevBtn" type="button" aria-label="Recensione precedente">←</button>
                    <div class="carousel-dots" id="carouselDots"></div>
                    <button class="carousel-arrow" id="nextBtn" type="button" aria-label="Recensione successiva">→</button>
                </div>
                <div class="reviews-footer flex flex-col items-center gap-4">
                    <a href="https://www.miodottore.it/lorena-ghiotto/psicologo-psicoterapeuta/montemerlo#leave-review" class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition shadow-md" target="_blank" rel="noopener noreferrer">Scrivi una recensione</a>
                    <a href="https://www.miodottore.it/lorena-ghiotto/psicologo-psicoterapeuta/montemerlo" class="text-sm text-secondary hover:text-primary transition underline" target="_blank" rel="noopener noreferrer">Leggi tutte le recensioni su MioDottore &rarr;</a>
                </div>
            </div>
        </div>
    </section>

    <!-- PROSSIMI APPUNTAMENTI (mostrato da JS se evento futuro) -->
    <section id="eventi" class="py-24 bg-main" style="display: none;">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-primary text-center mb-4">Prossimi Appuntamenti</h2>
            <p class="text-secondary text-center mb-12 max-w-2xl mx-auto">Credo profondamente nel valore del lavoro individuale e, allo stesso tempo, nella forza trasformativa del gruppo. Ecco i prossimi eventi in programma.</p>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" id="eventi-container"></div>
        </div>
    </section>

    <!-- LABORATORI -->
    <section id="laboratori" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-primary text-center mb-12">Laboratori</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="laboratori-container"></div>
            <div class="flex justify-center items-center gap-4 mt-8">
                <button id="prev-lab-btn" class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed" onclick="changeLabPage(-1)">←</button>
                <span id="lab-page-indicator" class="text-primary font-semibold"></span>
                <button id="next-lab-btn" class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed" onclick="changeLabPage(1)">→</button>
            </div>
            <div class="mt-10 text-center">
                <a href="<?php echo esc_url(get_post_type_archive_link('laboratorio') ?: home_url('/laboratori/')); ?>" class="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-800 transition">Vedi tutti i laboratori</a>
            </div>
        </div>
    </section>

    <!-- BLOG -->
    <section id="Blog" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-primary text-center mb-12">Blog</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="blog-container"></div>
            <div class="flex justify-center items-center gap-4 mt-8">
                <button id="prev-blog-btn" class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed" onclick="changeBlogPage(-1)">←</button>
                <span id="blog-page-indicator" class="text-primary font-semibold"></span>
                <button id="next-blog-btn" class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed" onclick="changeBlogPage(1)">→</button>
            </div>
            <div class="mt-10 text-center">
                <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts')) ?: home_url('/blog/')); ?>" class="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-800 transition">Vedi tutti gli articoli</a>
            </div>
        </div>
    </section>

    <!-- PRENOTAZIONE -->
    <section id="prenota" class="py-24 bg-main">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold text-primary mb-4">Prenota il tuo Colloquio</h2>
            <p class="text-secondary mb-10">Scegli una data per il primo incontro conoscitivo.</p>
            <div id="booking-widget" class="max-w-lg mx-auto bg-white border rounded-2xl p-6 shadow-lg"></div>
        </div>
    </section>

    <!-- CONTATTI -->
    <section id="contatti" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-primary text-center mb-16">Sedi e Contatti</h2>
            <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div class="space-y-8">
                    <!-- Selvazzano Dentro -->
                    <div class="bg-main p-4 rounded-xl shadow-sm">
                        <div class="flex gap-4 items-start mb-3">
                            <div class="studio-carousel w-24 h-20 flex-shrink-0 relative overflow-hidden rounded-lg bg-gray-200" id="carousel-selvazzano">
                                <img src="<?php echo esc_url($img_base . 'Studio_selvazzano_01.jpg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100" alt="Studio Selvazzano 1">
                                <img src="<?php echo esc_url($img_base . 'Studio_Selvazzano_02.jpg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0" alt="Studio Selvazzano 2">
                                <img src="<?php echo esc_url($img_base . 'Studio_Selvazzano_03.jpg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0" alt="Studio Selvazzano 3">
                                <img src="<?php echo esc_url($img_base . 'Studio_Selvazzano_04.jpg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0" alt="Studio Selvazzano 4">
                            </div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold text-primary">Selvazzano Dentro</h4>
                                <p class="text-secondary text-sm">Via San Giuseppe 1</p>
                                <div class="flex gap-1 mt-2" id="dots-selvazzano">
                                    <button class="w-2 h-2 rounded-full bg-primary" onclick="goToSlide('selvazzano', 0)"></button>
                                    <button class="w-2 h-2 rounded-full bg-gray-300" onclick="goToSlide('selvazzano', 1)"></button>
                                    <button class="w-2 h-2 rounded-full bg-gray-300" onclick="goToSlide('selvazzano', 2)"></button>
                                    <button class="w-2 h-2 rounded-full bg-gray-300" onclick="goToSlide('selvazzano', 3)"></button>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg overflow-hidden">
                            <iframe src="https://maps.google.com/maps?q=Via+San+Giuseppe+1+Selvazzano+Dentro+PD&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%" height="120" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" title="Mappa Studio Selvazzano"></iframe>
                        </div>
                    </div>
                    <!-- Montemerlo -->
                    <div class="bg-main p-4 rounded-xl shadow-sm">
                        <div class="flex gap-4 items-start mb-3">
                            <div class="studio-carousel w-24 h-20 flex-shrink-0 relative overflow-hidden rounded-lg bg-gray-200" id="carousel-montemerlo">
                                <img src="<?php echo esc_url($img_base . 'Montemerlo01.jpeg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100" alt="Studio Montemerlo 1">
                                <img src="<?php echo esc_url($img_base . 'Montemerlo02.jpeg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0" alt="Studio Montemerlo 2">
                                <img src="<?php echo esc_url($img_base . 'Montemerlo03.jpeg'); ?>" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0" alt="Studio Montemerlo 3">
                            </div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold text-primary">Montemerlo</h4>
                                <p class="text-secondary text-sm">Via Repoise 18/1</p>
                                <div class="flex gap-1 mt-2" id="dots-montemerlo">
                                    <button class="w-2 h-2 rounded-full bg-primary" onclick="goToSlide('montemerlo', 0)"></button>
                                    <button class="w-2 h-2 rounded-full bg-gray-300" onclick="goToSlide('montemerlo', 1)"></button>
                                    <button class="w-2 h-2 rounded-full bg-gray-300" onclick="goToSlide('montemerlo', 2)"></button>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg overflow-hidden">
                            <iframe src="https://maps.google.com/maps?q=Via+Repoise+18+Montemerlo+Cervarese+Santa+Croce+PD&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%" height="120" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" title="Mappa Studio Montemerlo"></iframe>
                        </div>
                    </div>
                </div>
                <!-- Form Contatto -->
                <div class="bg-main p-8 rounded-xl shadow-lg">
                    <form class="space-y-4" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                        <?php wp_nonce_field('lorena_contact', 'lorena_contact_nonce'); ?>
                        <input type="hidden" name="action" value="lorena_contact_form">
                        <input type="text" name="nome" placeholder="Nome" required class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                        <input type="email" name="email" placeholder="Email" required class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                        <textarea name="messaggio" rows="4" placeholder="Messaggio" required class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary"></textarea>
                        <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-800 transition">Invia Messaggio</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
