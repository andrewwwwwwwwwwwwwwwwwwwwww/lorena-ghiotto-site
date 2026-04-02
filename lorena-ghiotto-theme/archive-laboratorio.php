<?php get_header(); ?>

<div class="container mx-auto px-4 py-16 max-w-5xl">
    <h1 class="font-serif text-3xl text-primary mb-10">Tutti i Laboratori</h1>
    <div class="grid md:grid-cols-2 gap-8">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article class="bg-white rounded-2xl shadow-md overflow-hidden">
            <?php if (has_post_thumbnail()) : ?>
            <div class="aspect-video overflow-hidden">
                <?php the_post_thumbnail('medium_large', array('class' => 'w-full h-full object-cover')); ?>
            </div>
            <?php endif; ?>
            <div class="p-6">
                <h2 class="font-serif text-xl text-primary mb-3">
                    <a href="<?php the_permalink(); ?>" class="hover:underline"><?php the_title(); ?></a>
                </h2>
                <div class="text-gray-500 text-sm leading-relaxed"><?php the_excerpt(); ?></div>
                <a href="<?php the_permalink(); ?>" class="inline-block mt-4 text-primary font-semibold hover:underline text-sm">Scopri di più →</a>
            </div>
        </article>
    <?php endwhile; else : ?>
        <p class="text-secondary col-span-2 text-center py-8">Nessun laboratorio trovato.</p>
    <?php endif; ?>
    </div>
    <div class="mt-10 text-center">
        <?php the_posts_pagination(array('class' => 'text-primary')); ?>
    </div>
</div>

<?php get_footer(); ?>
