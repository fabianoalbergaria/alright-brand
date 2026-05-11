#!/usr/bin/env bash
# Alright Brand Guide — Bootstrap script
# Verifica ambiente, instala fontes, valida estrutura.
# Rode na raiz do projeto: ./bootstrap.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# ---------------------------------------------------------
# Cores (sem dependência externa)
# ---------------------------------------------------------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
RESET='\033[0m'

ok() { printf "${GREEN}✓${RESET} %s\n" "$1"; }
warn() { printf "${YELLOW}!${RESET} %s\n" "$1"; }
err() { printf "${RED}✗${RESET} %s\n" "$1"; }
info() { printf "${BLUE}i${RESET} %s\n" "$1"; }
section() { printf "\n${BOLD}== %s ==${RESET}\n" "$1"; }

ERRORS=0
WARNINGS=0

check_cmd() {
  local cmd="$1"
  local install_hint="$2"
  if command -v "$cmd" >/dev/null 2>&1; then
    local version
    version=$("$cmd" --version 2>&1 | head -1 || echo "(unknown version)")
    ok "$cmd encontrado: $version"
  else
    err "$cmd NÃO encontrado. Instale: $install_hint"
    ERRORS=$((ERRORS + 1))
  fi
}

check_cmd_optional() {
  local cmd="$1"
  local install_hint="$2"
  if command -v "$cmd" >/dev/null 2>&1; then
    local version
    version=$("$cmd" --version 2>&1 | head -1 || echo "(unknown version)")
    ok "$cmd encontrado: $version"
  else
    warn "$cmd ausente (opcional). Para instalar: $install_hint"
    WARNINGS=$((WARNINGS + 1))
  fi
}

# ---------------------------------------------------------
section "1. Software base"
# ---------------------------------------------------------

check_cmd "git" "brew install git  # ou: sudo apt install git"
check_cmd "node" "brew install node  # ou: nvm install 20"
check_cmd "npm" "vem com Node.js"
check_cmd "python3" "brew install python  # ou: sudo apt install python3"
check_cmd "curl" "brew install curl  # ou: sudo apt install curl"
check_cmd_optional "ffmpeg" "brew install ffmpeg  # ou: sudo apt install ffmpeg (só p/ huashu-design motion)"
check_cmd_optional "jq" "brew install jq  # ou: sudo apt install jq (p/ inspecionar tokens)"

if command -v claude >/dev/null 2>&1; then
  ok "Claude Code CLI encontrado"
else
  warn "Claude Code CLI não encontrado no PATH — confirme instalação: https://docs.claude.com/en/docs/claude-code/quickstart"
  WARNINGS=$((WARNINGS + 1))
fi

# ---------------------------------------------------------
section "2. Skill huashu-design"
# ---------------------------------------------------------

HUASHU_PATH="$HOME/.claude/skills/huashu-design"
if [ -f "$HUASHU_PATH/SKILL.md" ]; then
  ok "huashu-design instalada em $HUASHU_PATH"
  if [ -d "$HUASHU_PATH/.git" ]; then
    cd "$HUASHU_PATH"
    LAST_COMMIT=$(git log -1 --format="%h %s (%cr)" 2>/dev/null || echo "(sem info git)")
    info "Último commit: $LAST_COMMIT"
    cd "$SCRIPT_DIR"
  fi
else
  err "huashu-design NÃO instalada. Para instalar:"
  echo "    mkdir -p ~/.claude/skills"
  echo "    git clone https://github.com/alchaincyf/huashu-design.git ~/.claude/skills/huashu-design"
  ERRORS=$((ERRORS + 1))
fi

# Playwright (opcional — só warn)
if [ -d "$HOME/Library/Caches/ms-playwright/chromium-"* ] 2>/dev/null || \
   [ -d "$HOME/.cache/ms-playwright/chromium-"* ] 2>/dev/null; then
  ok "Playwright Chromium presente (huashu-design vai conseguir validar visualmente)"
else
  warn "Playwright Chromium não detectado. Para instalar: npx playwright install chromium"
  WARNINGS=$((WARNINGS + 1))
fi

# ---------------------------------------------------------
section "3. Estrutura do projeto"
# ---------------------------------------------------------

REQUIRED_DIRS=(
  "00-discovery/deck-thumbnails"
  "00-discovery/references"
  "01-strategy-verbal"
  "02-visual-core/logo"
  "02-visual-core/typography"
  "03-color-aihouse-motion/color"
  "03-color-aihouse-motion/ai-house-look"
  "03-color-aihouse-motion/motion"
  "04-applications-microsite"
  "05-deliverables"
  "assets/logo"
  "assets/fonts"
  "assets/icons"
  "tokens"
  "governance"
)

for dir in "${REQUIRED_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    ok "$dir/"
  else
    warn "$dir/ ausente — criando"
    mkdir -p "$dir"
  fi
done

REQUIRED_FILES=(
  "README.md"
  "STATUS.md"
  "PLAN.md"
  "MIGRATION.md"
  "CLAUDE.md"
  "00-discovery/insights.md"
  "00-discovery/references/dossier-visual-references.md"
  "01-strategy-verbal/01-brand-strategy.md"
  "01-strategy-verbal/02-verbal-system.md"
  "01-strategy-verbal/03-big-idea-options.md"
  "02-visual-core/logo/01-logo-system.md"
  "02-visual-core/logo/02-direction-C-detailed.md"
  "02-visual-core/typography/01-type-system.md"
  "03-color-aihouse-motion/color/01-color-system.md"
  "03-color-aihouse-motion/ai-house-look/01-house-look.md"
  "03-color-aihouse-motion/motion/01-motion-principles.md"
  "tokens/color.tokens.json"
  "tokens/motion.tokens.json"
)

for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$file" ]; then
    SIZE=$(wc -c < "$file" | tr -d ' ')
    ok "$file ($SIZE bytes)"
  else
    err "$file AUSENTE"
    ERRORS=$((ERRORS + 1))
  fi
done

# Thumbnails do deck
THUMB_COUNT=$(find 00-discovery/deck-thumbnails -name "page-*.png" 2>/dev/null | wc -l | tr -d ' ')
if [ "$THUMB_COUNT" -eq 16 ]; then
  ok "16 thumbnails do deck presentes"
elif [ "$THUMB_COUNT" -gt 0 ]; then
  warn "Apenas $THUMB_COUNT thumbnails encontrados (esperado 16)"
  WARNINGS=$((WARNINGS + 1))
else
  err "Nenhum thumbnail do deck encontrado em 00-discovery/deck-thumbnails/"
  ERRORS=$((ERRORS + 1))
fi

# ---------------------------------------------------------
section "4. Validação dos design tokens (W3C DTCG)"
# ---------------------------------------------------------

if command -v jq >/dev/null 2>&1; then
  for token_file in tokens/color.tokens.json tokens/motion.tokens.json; do
    if [ -f "$token_file" ]; then
      if jq -e . "$token_file" >/dev/null 2>&1; then
        TOKEN_COUNT=$(jq '[.. | objects | select(has("$value"))] | length' "$token_file" 2>/dev/null || echo "?")
        ok "$token_file válido ($TOKEN_COUNT tokens)"
      else
        err "$token_file tem JSON inválido"
        ERRORS=$((ERRORS + 1))
      fi
    fi
  done
else
  warn "jq ausente — pulando validação de JSON. Para validar: brew install jq"
fi

# ---------------------------------------------------------
section "5. Download das fontes"
# ---------------------------------------------------------

FONTS_DIR="assets/fonts"
mkdir -p "$FONTS_DIR"

# Bricolage Grotesque
BRICOLAGE_FILE="$FONTS_DIR/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf"
if [ -f "$BRICOLAGE_FILE" ]; then
  ok "Bricolage Grotesque já presente"
else
  info "Baixando Bricolage Grotesque (variable font, ~600KB)..."
  if curl -sSLfo "$FONTS_DIR/bricolage.zip" \
    "https://github.com/google/fonts/raw/main/ofl/bricolagegrotesque/BricolageGrotesque%5Bopsz%2Cwdth%2Cwght%5D.ttf" 2>/dev/null; then
    mv "$FONTS_DIR/bricolage.zip" "$BRICOLAGE_FILE"
    ok "Bricolage Grotesque baixado em $BRICOLAGE_FILE"
  else
    warn "Falha ao baixar Bricolage Grotesque automaticamente."
    info "Baixe manualmente: https://fonts.google.com/specimen/Bricolage+Grotesque"
    WARNINGS=$((WARNINGS + 1))
  fi
fi

# JetBrains Mono
JETBRAINS_FILE="$FONTS_DIR/JetBrainsMono-Regular.ttf"
if [ -f "$JETBRAINS_FILE" ]; then
  ok "JetBrains Mono já presente"
else
  info "Baixando JetBrains Mono Regular (~250KB)..."
  if curl -sSLfo "$JETBRAINS_FILE" \
    "https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/ttf/JetBrainsMono-Regular.ttf" 2>/dev/null; then
    ok "JetBrains Mono baixado em $JETBRAINS_FILE"
  else
    warn "Falha ao baixar JetBrains Mono automaticamente."
    info "Baixe manualmente: https://www.jetbrains.com/lp/mono/"
    WARNINGS=$((WARNINGS + 1))
  fi
fi

# ---------------------------------------------------------
section "6. Resumo"
# ---------------------------------------------------------

if [ "$ERRORS" -eq 0 ] && [ "$WARNINGS" -eq 0 ]; then
  printf "${GREEN}${BOLD}✓ Tudo pronto.${RESET} Você pode abrir o Claude Code nesta pasta e retomar.\n\n"
  echo "Mensagem inicial sugerida para o orquestrador:"
  echo ""
  echo "  Retomar projeto Alright Brand Guide a partir do MIGRATION.md, STATUS.md"
  echo "  e PLAN.md. Estamos no início da Fase 4 (Aplicações + Microsite v0)."
  echo "  Leia tudo, valide e dispare a Fase 4."
  echo ""
  exit 0
elif [ "$ERRORS" -eq 0 ]; then
  printf "${YELLOW}${BOLD}! Pronto com $WARNINGS aviso(s).${RESET} Você pode prosseguir, mas reveja os pontos amarelos acima.\n"
  exit 0
else
  printf "${RED}${BOLD}✗ $ERRORS erro(s) e $WARNINGS aviso(s).${RESET} Resolva os erros vermelhos antes de retomar o projeto.\n"
  exit 1
fi
