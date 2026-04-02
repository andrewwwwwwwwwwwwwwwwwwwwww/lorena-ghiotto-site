    <!-- FOOTER -->
    <footer class="bg-primary text-white py-12 text-center">
        <p class="font-serif text-xl mb-2">Dott.ssa Lorena Ghiotto</p>
        <p class="text-sm opacity-90 mb-2">Psicologa | Psicoterapeuta | Psicodrammatista</p>
        <p class="text-sm opacity-80 mb-4">Iscritta nella sezione A dell'Albo dal 23/10/2017 con il n. 23394</p>
        <?php $phone = get_theme_mod('lorena_phone', ''); ?>
        <?php if ($phone) : ?>
        <p class="text-sm mb-6"><a href="tel:<?php echo esc_attr(preg_replace('/[^+0-9]/', '', $phone)); ?>" class="hover:underline">Tel: <?php echo esc_html($phone); ?></a></p>
        <?php else : ?>
        <p class="text-sm mb-6"><a href="tel:+393473594380" class="hover:underline">Tel: 347 359 4380</a></p>
        <?php endif; ?>
        <div class="text-sm opacity-60 space-x-4">
            <a href="#" class="hover:text-white">Privacy Policy</a><span>|</span><a href="#" class="hover:text-white">Cookie Policy</a>
        </div>
    </footer>

    <!-- MODALI -->
    <div id="universal-modal" class="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center hidden p-4 opacity-0 transition-opacity duration-300">
        <div class="rounded-2xl max-w-2xl w-full max-h-[90vh] relative shadow-2xl transform scale-95 transition-transform duration-300 overflow-hidden bg-white" id="modal-panel">
            <div id="modal-content" class="relative z-10 overflow-y-auto max-h-[90vh] p-8">
                <button onclick="closeModal();" class="absolute top-4 right-4 text-gray-400 hover:text-primary text-3xl z-50">&times;</button>
                <div id="modal-body-content"></div>
            </div>
        </div>
    </div>

    <div id="percorsi-modal" class="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center hidden p-4 opacity-0 transition-opacity duration-300">
        <div class="rounded-2xl w-full max-h-[90vh] relative shadow-2xl transform scale-95 transition-transform duration-300 overflow-hidden" id="percorsi-modal-panel" style="background: rgba(255, 255, 255, 0.98);">
            <div id="percorsi-bg-watermark"></div>
            <div id="percorsi-modal-content" class="relative z-10 overflow-y-auto max-h-[90vh] p-8">
                <button onclick="closePercorsiModal()" class="absolute top-4 right-4 text-gray-400 hover:text-primary text-3xl z-50">&times;</button>
                <div id="percorsi-modal-body"></div>
            </div>
        </div>
    </div>

    <div id="image-lightbox" class="fixed inset-0 z-[80] hidden items-center justify-center bg-black/80 p-4">
        <button aria-label="Chiudi" onclick="closeLightbox()" class="absolute top-4 right-4 text-white/90 hover:text-white text-3xl z-10">&times;</button>
        <button aria-label="Precedente" onclick="lightboxPrev()" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-5xl font-light z-10 transition hover:scale-110">&#8249;</button>
        <button aria-label="Successiva" onclick="lightboxNext()" class="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-5xl font-light z-10 transition hover:scale-110">&#8250;</button>
        <img id="lightbox-img" src="" alt="immagine" class="max-w-[92vw] max-h-[92vh] object-contain rounded-lg shadow-2xl"/>
        <div id="lightbox-counter" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/40 px-4 py-2 rounded-full"></div>
    </div>

<?php wp_footer(); ?>
</body>
</html>
