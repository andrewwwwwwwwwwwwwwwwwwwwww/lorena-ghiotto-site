<?php
/**
 * Template Name: Laboratori
 * Pagina Laboratori - usa la stessa griglia JS della homepage
 */
get_header(); ?>

<section class="py-24 bg-white">
    <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-primary text-center mb-4">Laboratori</h1>
        <p class="text-center text-secondary mb-12 max-w-2xl mx-auto">Esperienze di gruppo per il benessere, la crescita personale e il contatto con sé stessi.</p>

        <!-- Le card vengono iniettate da main.js (stesso codice della homepage) -->
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="laboratori-container"></div>
        <div class="flex justify-center items-center gap-4 mt-8">
            <button id="prev-lab-btn" class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed" onclick="changeLabPage(-1)">←</button>
            <span id="lab-page-indicator" class="text-primary font-semibold"></span>
            <button id="next-lab-btn" class="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed" onclick="changeLabPage(1)">→</button>
        </div>
    </div>
</section>

<?php get_footer(); ?>
