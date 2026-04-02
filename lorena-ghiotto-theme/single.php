<?php get_header(); ?>

<div class="container mx-auto px-4 py-16 max-w-3xl">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article class="mb-12">
        <?php if (has_post_thumbnail()) : ?>
        <div class="rounded-2xl overflow-hidden mb-8 aspect-video">
            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
        </div>
        <?php endif; ?>
        <h1 class="font-serif text-3xl text-primary mb-4"><?php the_title(); ?></h1>
        <div class="text-secondary text-sm mb-6"><?php echo get_the_date('j F Y'); ?></div>
        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <?php the_content(); ?>
        </div>
    </article>
    <?php endwhile; endif; ?>
    <div class="mt-8 pt-6 border-t">
        <a href="<?php echo esc_url(home_url('/#Blog')); ?>" class="text-primary font-semibold hover:underline">← Torna al Blog</a>
    </div>
</div>

<?php get_footer(); ?>
