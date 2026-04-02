<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('flex flex-col min-h-screen'); ?>>
<?php wp_body_open(); ?>

<!-- HEADER -->
<header class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
    <div class="container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center relative">

        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2 z-10 flex-shrink-0">
            <?php if (has_custom_logo()) : ?>
                <?php
                $logo_id  = get_theme_mod('custom_logo');
                $logo_src = wp_get_attachment_image_url($logo_id, 'full');
                ?>
                <img src="<?php echo esc_url($logo_src); ?>" alt="<?php bloginfo('name'); ?>" class="h-10 md:h-16 lg:h-20 w-auto">
            <?php else : ?>
                <span class="font-serif font-bold text-primary text-xl"><?php bloginfo('name'); ?></span>
            <?php endif; ?>
            <div class="hidden lg:block">
                <span class="block font-serif font-bold text-primary text-base leading-none"><?php bloginfo('name'); ?></span>
                <span class="block text-[10px] text-secondary tracking-widest uppercase"><?php bloginfo('description'); ?></span>
            </div>
        </a>

        <!-- Nav desktop -->
        <nav class="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 text-xs lg:text-sm xl:text-base font-medium text-secondary overflow-hidden">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => '',
                'items_wrap'     => '%3$s',
                'fallback_cb'    => 'lorena_fallback_menu',
                'walker'         => new Lorena_Nav_Walker(),
            ));
            ?>
        </nav>

        <!-- CTA button -->
        <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="hidden md:block bg-primary text-white px-3 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-semibold hover:opacity-90 transition shadow-md z-10 flex-shrink-0 whitespace-nowrap">
            Prenota Colloquio
        </a>

        <!-- Mobile hamburger -->
        <button id="mobile-menu-btn" class="md:hidden text-primary" aria-label="Menu">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t z-50">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => '',
            'items_wrap'     => '%3$s',
            'fallback_cb'    => false,
            'walker'         => new Lorena_Mobile_Nav_Walker(),
        ));
        ?>
        <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold text-center">
            Prenota Colloquio
        </a>
    </div>
</header>

<main class="flex-1">

<?php
/**
 * Mappa: slug pagina WP → URL completo homepage + anchor
 * Funziona da qualsiasi pagina, non solo dalla front page
 */
function lorena_page_slug_to_anchor($url) {
    $home = rtrim(home_url('/'), '/');
    $anchor_map = array(
        'chi-sono'   => $home . '/#chisiamo',
        'approccio'  => $home . '/#approccio',
        'percorsi'   => $home . '/#percorsi',
        'laboratori' => $home . '/#laboratori',
        'blog'       => $home . '/#Blog',
        'contatti'   => $home . '/#contatti',
    );
    $parsed = wp_parse_url($url);
    $slug   = isset($parsed['path']) ? trim($parsed['path'], '/') : '';
    $slug   = basename($slug);
    return isset($anchor_map[$slug]) ? $anchor_map[$slug] : null;
}

/**
 * Walker per il menu desktop
 */
class Lorena_Nav_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $url   = $item->url;
        $title = $item->title;
        // Converti sempre i link a pagine in anchor della homepage
        $anchor = lorena_page_slug_to_anchor($url);
        if ($anchor) {
            $url = $anchor;
        }
        $classes = in_array('current-menu-item', $item->classes) ? 'text-primary font-semibold' : 'hover:text-primary transition';
        $output .= '<a href="' . esc_attr($url) . '" class="nav-link whitespace-nowrap ' . esc_attr($classes) . '">' . esc_html($title) . '</a>';
    }
}

/**
 * Walker per il menu mobile
 */
class Lorena_Mobile_Nav_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $url   = $item->url;
        $title = $item->title;
        // Converti sempre i link a pagine in anchor della homepage
        $anchor = lorena_page_slug_to_anchor($url);
        if ($anchor) {
            $url = $anchor;
        }
        $output .= '<a href="' . esc_attr($url) . '" class="block text-secondary hover:text-primary py-1">' . esc_html($title) . '</a>';
    }
}

/**
 * Fallback menu
 */
function lorena_fallback_menu() {
    $items = array(
        'Chi Sono'   => is_front_page() ? '#chisiamo'   : home_url('/chi-sono/'),
        'Laboratori' => is_front_page() ? '#laboratori' : home_url('/laboratori/'),
        'Blog'       => is_front_page() ? '#Blog'       : home_url('/blog/'),
        'Media'      => home_url('/media/'),
        'Contatti'   => is_front_page() ? '#contatti'   : home_url('/contatti/'),
    );
    foreach ($items as $label => $href) {
        echo '<a href="' . esc_attr($href) . '" class="nav-link hover:text-primary transition whitespace-nowrap">' . esc_html($label) . '</a>';
    }
}
?>
