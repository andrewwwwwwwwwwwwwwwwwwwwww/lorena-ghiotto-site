<?php
/**
 * Template Name: Laboratori
 * Pagina Laboratori — griglia con immagini, usa main.js
 */
get_header(); ?>

<section class="pt-32 pb-20"
         style="background: url('<?php echo esc_url(get_template_directory_uri() . '/assets/img/BgLab.jpg'); ?>') center/cover no-repeat; position:relative;">
    <div style="position:absolute;inset:0;background:rgba(255,255,255,0.82);pointer-events:none;"></div>
    <div class="container mx-auto px-6 relative z-10">

        <div class="text-center mb-12">
            <a href="<?php echo esc_url(home_url('/#laboratori')); ?>"
               class="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:underline">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Torna alla Home
            </a>
            <h1 class="text-4xl font-bold text-primary mb-4">Tutti i Laboratori</h1>
            <p class="text-secondary max-w-2xl mx-auto">Esperienze di gruppo per il benessere, la crescita personale e il contatto con sé stessi.</p>
        </div>

        <!-- Le card vengono iniettate da main.js -->
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="laboratori-container"></div>

        <div class="flex justify-center items-center gap-4 mt-8">
            <button id="prev-lab-btn"
                    class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed"
                    onclick="changeLabPage(-1)">← Precedenti</button>
            <span id="lab-page-indicator" class="text-primary font-semibold"></span>
            <button id="next-lab-btn"
                    class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed"
                    onclick="changeLabPage(1)">Successivi →</button>
        </div>

    </div>
</section>

<?php get_footer(); ?>

