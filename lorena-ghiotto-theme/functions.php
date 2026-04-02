<?php
/**
 * Lorena Ghiotto Theme Functions
 * 
 * @package Lorena_Ghiotto
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Definizioni costanti del tema
 */
define('LORENA_VERSION', '1.0.0');
define('LORENA_DIR', get_template_directory());
define('LORENA_URI', get_template_directory_uri());

/**
 * Setup del tema
 */
function lorena_theme_setup() {
    // Supporto per il titolo del sito
    add_theme_support('title-tag');
    
    // Supporto per le immagini in evidenza
    add_theme_support('post-thumbnails');
    
    // Dimensioni immagini personalizzate
    add_image_size('laboratorio-card', 400, 300, true);
    add_image_size('laboratorio-hero', 1200, 600, true);
    add_image_size('blog-card', 400, 250, true);
    add_image_size('gallery-thumb', 300, 225, true);
    
    // Supporto per il logo personalizzato
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Supporto per HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Registrazione menu
    register_nav_menus(array(
        'primary' => __('Menu Principale', 'lorena-ghiotto'),
        'footer'  => __('Menu Footer', 'lorena-ghiotto'),
    ));
    
    // Supporto per editor di blocchi
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'lorena_theme_setup');

/**
 * Registrazione e caricamento degli stili e script
 */
function lorena_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'lorena-google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Work+Sans:wght@300;400;500;600&display=swap',
        array(),
        null
    );
    
    // Tailwind CSS CDN
    wp_enqueue_script(
        'tailwindcss',
        'https://cdn.tailwindcss.com',
        array(),
        null,
        false
    );

    // Stile principale del tema
    wp_enqueue_style(
        'lorena-style',
        get_stylesheet_uri(),
        array('lorena-google-fonts'),
        LORENA_VERSION
    );

    // CSS variabili stagioni
    wp_enqueue_style(
        'lorena-variables',
        LORENA_URI . '/assets/css/variables.css',
        array('lorena-style'),
        LORENA_VERSION
    );

    // CSS componenti
    wp_enqueue_style(
        'lorena-components',
        LORENA_URI . '/assets/css/components.css',
        array('lorena-variables'),
        LORENA_VERSION
    );

    // Data JS (primo: definisce articles, blogArticles, prossimoEvento)
    wp_enqueue_script(
        'lorena-data',
        LORENA_URI . '/assets/js/data.js',
        array(),
        LORENA_VERSION,
        true
    );

    // Inietta base URL immagini (tema/assets/) e URL reviews prima di data.js
    wp_add_inline_script(
        'lorena-data',
        'const lorenaImgBase = "' . esc_js(get_template_directory_uri() . '/assets/') . '";
const lorenaReviewsUrl = "' . esc_js(get_template_directory_uri() . '/assets/reviews_complete.json') . '";',
        'before'
    );

    // Modals JS
    wp_enqueue_script(
        'lorena-modals',
        LORENA_URI . '/assets/js/modals.js',
        array('lorena-data'),
        LORENA_VERSION,
        true
    );

    // Carousel JS (reviews)
    wp_enqueue_script(
        'lorena-carousel',
        LORENA_URI . '/assets/js/carousel.js',
        array('lorena-data'),
        LORENA_VERSION,
        true
    );

    // Calendar JS
    wp_enqueue_script(
        'lorena-calendar',
        LORENA_URI . '/assets/js/calendar.js',
        array('lorena-data'),
        LORENA_VERSION,
        true
    );

    // Main JS (dipende da tutto il resto)
    wp_enqueue_script(
        'lorena-main',
        LORENA_URI . '/assets/js/main.js',
        array('lorena-data', 'lorena-modals', 'lorena-carousel', 'lorena-calendar'),
        LORENA_VERSION,
        true
    );

    // Localizzazione per AJAX
    wp_localize_script('lorena-main', 'lorenaAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('lorena_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'lorena_enqueue_assets');

/**
 * Registrazione Custom Post Type: Laboratori
 */
function lorena_register_laboratori_cpt() {
    $labels = array(
        'name'               => 'Laboratori',
        'singular_name'      => 'Laboratorio',
        'menu_name'          => 'Laboratori',
        'add_new'            => 'Aggiungi Nuovo',
        'add_new_item'       => 'Aggiungi Nuovo Laboratorio',
        'edit_item'          => 'Modifica Laboratorio',
        'new_item'           => 'Nuovo Laboratorio',
        'view_item'          => 'Visualizza Laboratorio',
        'search_items'       => 'Cerca Laboratori',
        'not_found'          => 'Nessun laboratorio trovato',
        'not_found_in_trash' => 'Nessun laboratorio nel cestino',
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'laboratori'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-welcome-learn-more',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );
    
    register_post_type('laboratorio', $args);
}
add_action('init', 'lorena_register_laboratori_cpt');

/**
 * Registrazione Tassonomia: Categorie Laboratori
 */
function lorena_register_laboratori_taxonomy() {
    $labels = array(
        'name'              => 'Categorie Laboratori',
        'singular_name'     => 'Categoria',
        'search_items'      => 'Cerca Categorie',
        'all_items'         => 'Tutte le Categorie',
        'edit_item'         => 'Modifica Categoria',
        'update_item'       => 'Aggiorna Categoria',
        'add_new_item'      => 'Aggiungi Nuova Categoria',
        'new_item_name'     => 'Nuova Categoria',
        'menu_name'         => 'Categorie',
    );
    
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'categoria-laboratorio'),
        'show_in_rest'      => true,
    );
    
    register_taxonomy('categoria_laboratorio', array('laboratorio'), $args);
}
add_action('init', 'lorena_register_laboratori_taxonomy');

/**
 * Registrazione Custom Post Type: Eventi
 */
function lorena_register_eventi_cpt() {
    $labels = array(
        'name'               => 'Eventi',
        'singular_name'      => 'Evento',
        'menu_name'          => 'Eventi',
        'add_new'            => 'Aggiungi Nuovo',
        'add_new_item'       => 'Aggiungi Nuovo Evento',
        'edit_item'          => 'Modifica Evento',
        'new_item'           => 'Nuovo Evento',
        'view_item'          => 'Visualizza Evento',
        'search_items'       => 'Cerca Eventi',
        'not_found'          => 'Nessun evento trovato',
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'eventi'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-calendar-alt',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );
    
    register_post_type('evento', $args);
}
add_action('init', 'lorena_register_eventi_cpt');

/**
 * Meta box per i campi personalizzati dei laboratori
 */
function lorena_add_laboratorio_meta_boxes() {
    add_meta_box(
        'lorena_laboratorio_details',
        'Dettagli Laboratorio',
        'lorena_laboratorio_meta_box_callback',
        'laboratorio',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'lorena_add_laboratorio_meta_boxes');

function lorena_laboratorio_meta_box_callback($post) {
    wp_nonce_field('lorena_save_laboratorio_meta', 'lorena_laboratorio_nonce');
    
    $modal_text = get_post_meta($post->ID, '_lorena_modal_text', true);
    $tag = get_post_meta($post->ID, '_lorena_tag', true);
    $color_class = get_post_meta($post->ID, '_lorena_color_class', true);
    $gallery = get_post_meta($post->ID, '_lorena_gallery', true);
    ?>
    <p>
        <label for="lorena_tag"><strong>Tag:</strong></label><br>
        <input type="text" id="lorena_tag" name="lorena_tag" value="<?php echo esc_attr($tag); ?>" class="widefat" placeholder="es. Natura & Benessere">
    </p>
    <p>
        <label for="lorena_color_class"><strong>Colore Stagione:</strong></label><br>
        <select id="lorena_color_class" name="lorena_color_class" class="widefat">
            <option value="spring" <?php selected($color_class, 'spring'); ?>>Primavera (Verde)</option>
            <option value="summer" <?php selected($color_class, 'summer'); ?>>Estate (Arancione)</option>
            <option value="autumn" <?php selected($color_class, 'autumn'); ?>>Autunno (Marrone)</option>
            <option value="winter" <?php selected($color_class, 'winter'); ?>>Inverno (Blu)</option>
        </select>
    </p>
    <p>
        <label for="lorena_modal_text"><strong>Testo Modale (breve per homepage):</strong></label><br>
        <textarea id="lorena_modal_text" name="lorena_modal_text" class="widefat" rows="5"><?php echo esc_textarea($modal_text); ?></textarea>
    </p>
    <p>
        <label for="lorena_gallery"><strong>Galleria Immagini (ID separati da virgola):</strong></label><br>
        <input type="text" id="lorena_gallery" name="lorena_gallery" value="<?php echo esc_attr($gallery); ?>" class="widefat" placeholder="es. 123,456,789">
    </p>
    <?php
}

function lorena_save_laboratorio_meta($post_id) {
    if (!isset($_POST['lorena_laboratorio_nonce']) || 
        !wp_verify_nonce($_POST['lorena_laboratorio_nonce'], 'lorena_save_laboratorio_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    $fields = array('lorena_tag', 'lorena_color_class', 'lorena_modal_text', 'lorena_gallery');
    
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post_laboratorio', 'lorena_save_laboratorio_meta');

/**
 * Meta box per gli eventi
 */
function lorena_add_evento_meta_boxes() {
    add_meta_box(
        'lorena_evento_details',
        'Dettagli Evento',
        'lorena_evento_meta_box_callback',
        'evento',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'lorena_add_evento_meta_boxes');

function lorena_evento_meta_box_callback($post) {
    wp_nonce_field('lorena_save_evento_meta', 'lorena_evento_nonce');
    
    $date_start = get_post_meta($post->ID, '_lorena_event_date_start', true);
    $date_end = get_post_meta($post->ID, '_lorena_event_date_end', true);
    $location = get_post_meta($post->ID, '_lorena_event_location', true);
    ?>
    <p>
        <label for="lorena_event_date_start"><strong>Data Inizio:</strong></label><br>
        <input type="date" id="lorena_event_date_start" name="lorena_event_date_start" value="<?php echo esc_attr($date_start); ?>">
    </p>
    <p>
        <label for="lorena_event_date_end"><strong>Data Fine:</strong></label><br>
        <input type="date" id="lorena_event_date_end" name="lorena_event_date_end" value="<?php echo esc_attr($date_end); ?>">
    </p>
    <p>
        <label for="lorena_event_location"><strong>Location:</strong></label><br>
        <input type="text" id="lorena_event_location" name="lorena_event_location" value="<?php echo esc_attr($location); ?>" class="widefat" placeholder="es. Nif Alpine Taste, Vetriolo Terme">
    </p>
    <?php
}

function lorena_save_evento_meta($post_id) {
    if (!isset($_POST['lorena_evento_nonce']) || 
        !wp_verify_nonce($_POST['lorena_evento_nonce'], 'lorena_save_evento_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    $fields = array('lorena_event_date_start', 'lorena_event_date_end', 'lorena_event_location');
    
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post_evento', 'lorena_save_evento_meta');

/**
 * Widgets Areas
 */
function lorena_widgets_init() {
    register_sidebar(array(
        'name'          => 'Footer Widget Area',
        'id'            => 'footer-widgets',
        'description'   => 'Widget nell\'area footer',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => 'Sidebar Blog',
        'id'            => 'sidebar-blog',
        'description'   => 'Sidebar per le pagine blog',
        'before_widget' => '<div class="sidebar-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'lorena_widgets_init');

/**
 * Personalizzatore del tema
 */
function lorena_customize_register($wp_customize) {
    // Sezione Hero
    $wp_customize->add_section('lorena_hero_section', array(
        'title'    => 'Hero Section',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('lorena_hero_title', array(
        'default'           => 'Dott.ssa Lorena Ghiotto',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('lorena_hero_title', array(
        'label'   => 'Titolo Hero',
        'section' => 'lorena_hero_section',
        'type'    => 'text',
    ));
    
    $wp_customize->add_setting('lorena_hero_subtitle', array(
        'default'           => 'Psicoterapeuta e formatrice in Mindfulness',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('lorena_hero_subtitle', array(
        'label'   => 'Sottotitolo Hero',
        'section' => 'lorena_hero_section',
        'type'    => 'textarea',
    ));
    
    // Sezione Contatti
    $wp_customize->add_section('lorena_contact_section', array(
        'title'    => 'Informazioni Contatto',
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('lorena_email', array(
        'default'           => 'info@lorenaghiotto.it',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('lorena_email', array(
        'label'   => 'Email',
        'section' => 'lorena_contact_section',
        'type'    => 'email',
    ));
    
    $wp_customize->add_setting('lorena_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('lorena_phone', array(
        'label'   => 'Telefono',
        'section' => 'lorena_contact_section',
        'type'    => 'text',
    ));
    
    // Social Links
    $wp_customize->add_section('lorena_social_section', array(
        'title'    => 'Social Media',
        'priority' => 50,
    ));
    
    $social_networks = array('facebook', 'instagram', 'linkedin');
    
    foreach ($social_networks as $network) {
        $wp_customize->add_setting('lorena_' . $network, array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ));
        
        $wp_customize->add_control('lorena_' . $network, array(
            'label'   => ucfirst($network) . ' URL',
            'section' => 'lorena_social_section',
            'type'    => 'url',
        ));
    }
}
add_action('customize_register', 'lorena_customize_register');

/**
 * Helper functions
 */

// Ottieni il colore della stagione
function lorena_get_season_class($color_class) {
    $classes = array(
        'spring' => 'tag-spring',
        'summer' => 'tag-summer',
        'autumn' => 'tag-autumn',
        'winter' => 'tag-winter',
    );
    
    return isset($classes[$color_class]) ? $classes[$color_class] : 'tag-spring';
}

// Formatta la data dell'evento
function lorena_format_event_date($start, $end = '') {
    $start_date = strtotime($start);
    
    if ($end) {
        $end_date = strtotime($end);
        return date_i18n('j', $start_date) . '-' . date_i18n('j F Y', $end_date);
    }
    
    return date_i18n('j F Y', $start_date);
}

// Shortcode per mostrare i laboratori
function lorena_laboratori_shortcode($atts) {
    $atts = shortcode_atts(array(
        'limit' => 6,
        'category' => '',
    ), $atts);
    
    $args = array(
        'post_type'      => 'laboratorio',
        'posts_per_page' => intval($atts['limit']),
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    );
    
    if ($atts['category']) {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'categoria_laboratorio',
                'field'    => 'slug',
                'terms'    => $atts['category'],
            ),
        );
    }
    
    $query = new WP_Query($args);
    
    ob_start();
    
    if ($query->have_posts()) {
        echo '<div class="laboratori-grid">';
        while ($query->have_posts()) {
            $query->the_post();
            get_template_part('template-parts/content', 'laboratorio-card');
        }
        echo '</div>';
    }
    
    wp_reset_postdata();
    
    return ob_get_clean();
}
add_shortcode('laboratori', 'lorena_laboratori_shortcode');

// Shortcode per il prossimo evento
function lorena_prossimo_evento_shortcode() {
    $args = array(
        'post_type'      => 'evento',
        'posts_per_page' => 1,
        'meta_key'       => '_lorena_event_date_start',
        'orderby'        => 'meta_value',
        'order'          => 'ASC',
        'meta_query'     => array(
            array(
                'key'     => '_lorena_event_date_start',
                'value'   => date('Y-m-d'),
                'compare' => '>=',
                'type'    => 'DATE',
            ),
        ),
    );
    
    $query = new WP_Query($args);
    
    ob_start();
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            get_template_part('template-parts/content', 'evento-featured');
        }
    }
    
    wp_reset_postdata();
    
    return ob_get_clean();
}
add_shortcode('prossimo_evento', 'lorena_prossimo_evento_shortcode');

/**
 * Disabilita Gutenberg per i CPT se necessario
 */
// add_filter('use_block_editor_for_post_type', 'lorena_disable_gutenberg', 10, 2);
// function lorena_disable_gutenberg($current_status, $post_type) {
//     if (in_array($post_type, array('laboratorio', 'evento'))) {
//         return false;
//     }
//     return $current_status;
// }

/**
 * AJAX handler per form contatti
 */
function lorena_contact_form_handler() {
    check_ajax_referer('lorena_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name'] ?? '');
    $email = sanitize_email($_POST['email'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(array('message' => 'Compila tutti i campi.'));
    }
    
    $to = get_theme_mod('lorena_email', get_option('admin_email'));
    $subject = 'Nuovo messaggio dal sito - ' . $name;
    $body = "Nome: $name\nEmail: $email\n\nMessaggio:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email);
    
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        wp_send_json_success(array('message' => 'Messaggio inviato con successo!'));
    } else {
        wp_send_json_error(array('message' => 'Errore nell\'invio. Riprova.'));
    }
}
add_action('wp_ajax_lorena_contact_form', 'lorena_contact_form_handler');
add_action('wp_ajax_nopriv_lorena_contact_form', 'lorena_contact_form_handler');
