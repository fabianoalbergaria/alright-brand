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

echo "→ Copiando editor + assets…"
cp "$ROOT/instagram-kit/index.html" "$DIST/index.html"
cp "$ROOT/assets/social/instagram/"*.png "$DIST/assets/social/instagram/"
if [ -d "$ROOT/assets/social/instagram/psd" ]; then
  cp -R "$ROOT/assets/social/instagram/psd/." "$DIST/assets/social/instagram/psd/"
fi

echo "→ Deploy Cloudflare Pages (wearealright-kit)…"
wrangler pages deploy "$DIST" --project-name=wearealright-kit --branch=main --commit-dirty=true --commit-message="alright-kit deploy"

echo "✔ Pronto. https://kit.wearealright.cc/ (Access protected)"
