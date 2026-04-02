<?php get_header(); ?>

<div class="container mx-auto px-4 py-24 text-center max-w-2xl">
    <h1 class="font-serif text-5xl text-primary mb-4">404</h1>
    <p class="text-xl text-secondary mb-8">Pagina non trovata</p>
    <p class="text-gray-500 mb-8">La pagina che stai cercando non esiste o è stata spostata.</p>
    <a href="<?php echo esc_url(home_url('/')); ?>" class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition">
        Torna all'inizio
    </a>
</div>

<?php get_footer(); ?>
