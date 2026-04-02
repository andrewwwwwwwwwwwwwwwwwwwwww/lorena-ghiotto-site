#!/usr/bin/env bash
# ============================================================
# DEPLOY SCRIPT — Lorena Ghiotto WordPress Theme
# Usa rsync via SSH per aggiornare i file su SiteGround
# ============================================================
# CONFIGURAZIONE: modifica le 4 variabili qui sotto
# ============================================================

SSH_USER="lorena_ghiotto"          # username SSH SiteGround (cPanel username)
SSH_HOST="access695.siteground.com" # host SSH (Siteground > SSH > Host)
SSH_PORT="18765"                    # porta SSH SiteGround (default 18765)
REMOTE_THEME="~/public_html/wp-content/themes/lorena-ghiotto-theme"

# ============================================================
# NON MODIFICARE OLTRE QUESTA LINEA
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
THEME_DIR="$SCRIPT_DIR/lorena-ghiotto-theme"
IMG_DIR="$SCRIPT_DIR/img"

RSYNC_BASE="rsync -avz --progress -e \"ssh -p $SSH_PORT\""
RSYNC_SSH="-e \"ssh -p $SSH_PORT\""

usage() {
    echo ""
    echo "Utilizzo: ./deploy.sh [opzione]"
    echo ""
    echo "  (nessuna opzione)  Deploy solo PHP/CSS/JS (veloce, senza immagini)"
    echo "  --with-images      Deploy completo incluso img/ (prima volta o dopo nuove foto)"
    echo "  --images-only      Carica solo le immagini (utile se le foto cambiano)"
    echo "  --check            Verifica connessione SSH senza deployare"
    echo ""
}

check_connection() {
    echo "→ Test connessione SSH..."
    ssh -p "$SSH_PORT" -o ConnectTimeout=10 "$SSH_USER@$SSH_HOST" "echo 'Connessione OK'" 2>&1
}

deploy_theme() {
    echo ""
    echo "→ Deploy tema (PHP/CSS/JS) verso $SSH_USER@$SSH_HOST..."
    rsync -avz --progress \
        --exclude 'assets/img/' \
        --exclude '*.DS_Store' \
        --exclude '__MACOSX' \
        --exclude '*.zip' \
        --exclude 'data_corrupted_backup.js' \
        -e "ssh -p $SSH_PORT" \
        "$THEME_DIR/" \
        "$SSH_USER@$SSH_HOST:$REMOTE_THEME/"
    echo "✓ Tema aggiornato."
}

deploy_images() {
    echo ""
    echo "→ Deploy immagini (img/) verso assets/img/ nel tema..."
    rsync -avz --progress \
        --exclude '*.DS_Store' \
        -e "ssh -p $SSH_PORT" \
        "$IMG_DIR/" \
        "$SSH_USER@$SSH_HOST:$REMOTE_THEME/assets/img/"
    echo "✓ Immagini aggiornate."
}

# ---- Main ----
case "${1:-}" in
    --with-images)
        deploy_theme
        deploy_images
        ;;
    --images-only)
        deploy_images
        ;;
    --check)
        check_connection
        ;;
    --help|-h)
        usage
        ;;
    "")
        deploy_theme
        ;;
    *)
        echo "Opzione non riconosciuta: $1"
        usage
        exit 1
        ;;
esac
