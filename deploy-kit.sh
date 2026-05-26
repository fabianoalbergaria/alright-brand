#!/bin/bash
# Deploy do Instagram kit editor para o project Pages 'wearealright-kit'
# Servido em https://kit.wearealright.cc/ atrás de Cloudflare Access (@wearealright.cc only).
# Uso: CLOUDFLARE_API_TOKEN=<token> ./deploy-kit.sh
set -e

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "Falta exportar CLOUDFLARE_API_TOKEN."
  exit 1
fi

export CLOUDFLARE_ACCOUNT_ID="3aa862deb82c78275ba96d332f8b9db3"

# Carrega nvm se existir
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  export NVM_DIR="$HOME/.nvm"
  . "$NVM_DIR/nvm.sh"
fi

ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/.kit-dist"

echo "→ Limpando dist do kit…"
rm -rf "$DIST"
mkdir -p "$DIST/assets/social/instagram/psd"
mkdir -p "$DIST/assets/logo/svg"
mkdir -p "$DIST/assets/logo/v3/symbol"
mkdir -p "$DIST/assets/fonts/v3"

echo "→ Copiando editor + assets…"
cp "$ROOT/instagram-kit/index.html" "$DIST/index.html"
cp "$ROOT/assets/social/instagram/"*.png "$DIST/assets/social/instagram/"
if [ -d "$ROOT/assets/social/instagram/psd" ]; then
  cp -R "$ROOT/assets/social/instagram/psd/." "$DIST/assets/social/instagram/psd/"
fi
# Logo SVGs (v1/v2) — referenciados por refs históricas.
cp "$ROOT/assets/logo/svg/"*.svg "$DIST/assets/logo/svg/"
# Logo v3 PNGs (Symbol_Orange + Logo_Orange + Wordmark_Orange etc).
# Avatars do editor usam estes paths — sem isso 404 e avatars não renderizam.
cp "$ROOT/assets/logo/v3/"*.png "$DIST/assets/logo/v3/"
cp "$ROOT/assets/logo/v3/symbol/"*.png "$DIST/assets/logo/v3/symbol/"
# Fontes v3 (Monument Grotesk + Neue Haas Display) — necessárias pras
# @font-face do editor. Sem isso o browser cai em system-ui fallback.
cp -R "$ROOT/assets/fonts/v3/." "$DIST/assets/fonts/v3/"

echo "→ Deploy Cloudflare Pages (wearealright-kit)…"
wrangler pages deploy "$DIST" --project-name=wearealright-kit --branch=main --commit-dirty=true --commit-message="alright-kit deploy"

echo "✔ Pronto. https://kit.wearealright.cc/ (Access protected)"
