<?php get_header(); ?>

<div class="container mx-auto px-4 py-16 max-w-3xl">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article class="prose prose-lg max-w-none">
        <h1 class="font-serif text-3xl text-primary mb-6"><?php the_title(); ?></h1>
        <?php the_content(); ?>
    </article>
    <?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
