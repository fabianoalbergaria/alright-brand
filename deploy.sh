#!/bin/bash
# Deploy do site Alright para Cloudflare Pages (wearealright.pages.dev)
# Uso: CLOUDFLARE_API_TOKEN=<token> ./deploy.sh
set -e

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "Falta exportar CLOUDFLARE_API_TOKEN. Cria token com permissão Account → Cloudflare Pages → Edit em https://dash.cloudflare.com/profile/api-tokens"
  exit 1
fi

export CLOUDFLARE_ACCOUNT_ID="3aa862deb82c78275ba96d332f8b9db3"

# Carrega nvm se existir
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  export NVM_DIR="$HOME/.nvm"
  . "$NVM_DIR/nvm.sh"
fi

ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/.deploy-dist"

echo "→ Limpando dist…"
rm -rf "$DIST"
mkdir -p "$DIST"

echo "→ Copiando arquivos públicos para dist…"
rsync -a \
  --exclude='assets/work/real' \
  --exclude='assets/work/ai' \
  --exclude='assets/work/mood' \
  --exclude='assets/work/web/*.mp4' \
  --exclude='tools/node_modules' \
  --exclude='tools/fonts' \
  --exclude='.wrangler' \
  --exclude='.deploy-dist' \
  --exclude='.git' \
  --exclude='00-discovery/deck-thumbnails' \
  "$ROOT/index.html" \
  "$ROOT/brand-book.html" \
  "$ROOT/assets" \
  "$DIST/"

# Deck: serve at /deck/ (clean URL)
mkdir -p "$DIST/deck"
cp "$ROOT/05-deliverables/deck-alright-v3.html" "$DIST/deck/index.html"

echo "→ Deploy Cloudflare Pages…"
wrangler pages deploy "$DIST" --project-name=wearealright --branch=main --commit-dirty=true

echo "✔ Pronto. https://wearealright.pages.dev/"
