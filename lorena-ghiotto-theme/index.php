<?php
/**
 * Required by WordPress: theme entry point.
 * Redirects to front-page.php on homepage, or uses archive/loop for other contexts.
 */
if (have_posts()) :
    if (is_home() && !is_front_page()) :
        get_header();
        ?>
        <div class="container mx-auto px-4 py-16 max-w-4xl">
            <h1 class="font-serif text-3xl text-primary mb-10">Blog</h1>
            <?php while (have_posts()) : the_post(); ?>
            <article class="mb-8 border-b pb-8">
                <h2 class="font-serif text-xl text-primary mb-2"><a href="<?php the_permalink(); ?>" class="hover:underline"><?php the_title(); ?></a></h2>
                <div class="text-secondary text-sm mb-2"><?php echo get_the_date('j F Y'); ?></div>
                <div class="text-gray-600"><?php the_excerpt(); ?></div>
            </article>
            <?php endwhile; ?>
        </div>
        <?php
        get_footer();
    else :
        get_template_part('front-page');
    endif;
else :
    get_header();
    echo '<div class="container mx-auto px-4 py-16 text-center text-secondary">Nessun contenuto trovato.</div>';
    get_footer();
endif;
