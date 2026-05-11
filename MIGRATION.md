# Alright Brand Guide — Guia de Migração

> Pacote completo para migrar este projeto para outra máquina e/ou outra conta do Claude Code, retomando exatamente do ponto onde paramos (final da Fase 3, pronto para iniciar Fase 4).
>
> **Última atualização**: 2026-05-10. **Owner**: Bera. **Origem**: macOS (Darwin 25.3.0), Claude Code Opus 4.7 (1M context).

---

## TL;DR

1. Copie a pasta `alright-brand/` inteira para a nova máquina (qualquer path local).
2. Instale Claude Code + dependências (Node, Python, ffmpeg) — comandos no §3.
3. Instale a skill `huashu-design` (precisa para Fase 4 microsite) — §4.
4. Configure o MCP do Canva (precisa para revisitar thumbnails do deck) — §5.
5. Rode `./bootstrap.sh` no diretório do projeto — verifica tudo e baixa fontes.
6. Abra Claude Code dentro da pasta e diga: **"retomar Alright Fase 4 a partir do MIGRATION.md e STATUS.md"**.

---

## 1. O que este projeto é

**Alright** = produtora audiovisual AI-first brasileira (SP). Cases tier-1: PUMA International, HBO Max, Claro, W3Haus/Getnet, Instituto Caldeira.

**Big idea cravada**: `((Look again.))` — recompensa o segundo olhar.

**Trocadilho estrutural**: em sans-serif, `I` maiúsculo = `l` minúsculo, então `Alright` = `AIright` (mesma palavra escrita). O nome contém o posicionamento.

**Estado**: 3 de 5 fases concluídas (Discovery + Estratégia/Verbal + Visual Core). 2 fases pendentes: Aplicações + Microsite (Fase 4) e Deck + PDF + Hand-off (Fase 5).

Para o detalhe completo do projeto, leia `STATUS.md` (estado atual) e `PLAN.md` (plano original).

---

## 2. Pré-requisitos da máquina nova

### Hardware/SO
- macOS, Linux ou Windows (com WSL2 recomendado).
- Pelo menos 8 GB RAM (16 GB recomendado para huashu-design pesada).
- ~2 GB de disco livre (projeto + dependências + fontes).
- Acesso à internet (para Canva MCP, WebFetch, downloads).

### Software base obrigatório

| Ferramenta | Versão mínima | Para quê |
|---|---|---|
| **Claude Code CLI** | mais recente | orquestração geral |
| **Node.js + npm/npx** | Node 20+ | huashu-design + scripts |
| **Python 3** | 3.10+ | huashu-design verify scripts |
| **git** | 2.40+ | clone de skills/repos |
| **curl** | 8+ | downloads (fontes, etc) |
| **ffmpeg** | 6+ | huashu-design áudio/vídeo (Fase 4 motion graphics se aplicável) |

### Software opcional (recomendado para Fase 4–5)
- **Playwright Chromium** — verificação visual obrigatória do huashu-design.
- **jq** — útil para inspecionar `tokens/*.tokens.json`.

### Conta Claude Code
- Plano com acesso a **Opus 4.7 (1M context)** ou superior. Esta sessão de orquestração consome muito contexto — Sonnet com 200k pode quebrar.
- Skills system habilitado.

---

## 3. Instalação passo a passo

### macOS (Homebrew)

```bash
# 1. Software base
brew install node python git curl ffmpeg jq

# 2. Claude Code (se ainda não tiver)
# Siga: https://docs.claude.com/en/docs/claude-code/quickstart

# 3. Playwright Chromium (para huashu-design)
npx playwright install chromium
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install -y nodejs npm python3 git curl ffmpeg jq

# Claude Code: siga docs oficiais
# Playwright:
npx playwright install chromium
```

### Windows (WSL2 recomendado)

Mesmas instruções do Linux dentro do WSL2. Claude Code roda nativo no Windows também — escolha conforme preferência. WSL2 simplifica os scripts bash do projeto.

---

## 4. Instalar a skill `huashu-design`

A skill é necessária para a **Fase 4 (Microsite v0)** e qualquer protótipo HTML hi-fi futuro.

### Via clone direto (recomendado, mais determinístico)

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/alchaincyf/huashu-design.git ~/.claude/skills/huashu-design
```

### Via installer cross-agent (alternativo)

```bash
npx skills add alchaincyf/huashu-design
```

### Validar que instalou

```bash
ls -la ~/.claude/skills/huashu-design/SKILL.md
# Deve mostrar o arquivo. Se não, instalação falhou.
```

### Atualizar (no futuro)

```bash
cd ~/.claude/skills/huashu-design && git pull
```

### ⚠️ Licença
A huashu-design é **licença proprietária dual**:
- Pessoal/aprendizado/não-comercial: livre.
- **Uso comercial / entrega para clientes pagos: requer autorização escrita prévia** (USD 1.800/ano ou USD 3.500 perpétuo, ajustável). Contato: alchaincyf@gmail.com.

Como Alright é um cliente comercial real, **negocie a licença antes de usar a skill em entregáveis finais para o cliente**. Uso interno de prototipação e exploração é OK.

### Modelos
Skill funciona com Opus 4.7, Sonnet, Haiku. Tarefas pesadas (variações paralelas, motion design) preferem Opus.

### Como invocar
- Comando: `/huashu-design` no chat, ou
- Pedido nominal: `"use a skill huashu-design para X"`, `"chame o huashu-design"`, `"aciona o huashu"`

**Importante**: o projeto Alright tem regra **manual-only** para huashu-design (o orquestrador NUNCA invoca por iniciativa própria — só quando você pede explicitamente). Essa regra está em `CLAUDE.md` na raiz do projeto.

---

## 5. Configurar MCP do Canva

A Fase 0 baixou os 16 thumbnails do deck atual via MCP oficial do Canva (`mcp__d47082ce-7ccb-4586-84e5-c331b7f14d4c__*`). Os thumbnails já estão em `00-discovery/deck-thumbnails/`, então **você não precisa do MCP para retomar Fase 4**. Mas se quiser revisitar o deck original, baixar updates, ou mexer em comentários, precisa do MCP configurado.

### Como configurar
- O MCP do Canva é distribuído pela própria Canva via marketplace de MCPs.
- No Claude Code: vá em `Settings → MCP Servers → Add` e siga o fluxo de adicionar Canva.
- Autenticação: OAuth direto na Canva.
- Documentação oficial: https://www.canva.com/developers/

### Verificar
No Claude Code, comece uma sessão e teste:
```
liste designs do Canva
```
Se aparecer resposta com seus designs, está OK.

---

## 6. Outros MCPs úteis (opcional)

Mapeados como deferred no projeto original — instale conforme uso futuro:

| MCP | Para quê | Necessário para Alright? |
|---|---|---|
| **Canva** | acessar deck atual, futuras edições | só se revisitar Fase 0 |
| **Figma** | exportar componentes para a brand library futura | útil em Fase 5+ |
| **Google Drive** | hospedar pasta de downloads do guide | útil em Fase 5 |
| **Slack** | governança / canal de dúvidas pós-handoff | opcional |
| **Notion** | hospedar guide alternativo | opcional |

Não obrigatórios para Fase 4–5. Instale conforme demanda.

---

## 7. Configurações recomendadas do Claude Code

### CLAUDE.md project-level

Já está em `alright-brand/CLAUDE.md` (criado neste pacote). Ele força:
- Regra de huashu-design manual-only (anti auto-invoke)
- Bera é masculino (uso sem artigo, nunca "a Bera")
- Convenções do projeto (paths, idioma, padrão de subagentes)

Se você usa `~/.claude/CLAUDE.md` global em outras máquinas, mantenha por separado — o project-level toma precedência dentro desta pasta.

### settings.json
Não há configurações específicas obrigatórias para este projeto. O default do Claude Code basta.

### Permissions
A primeira vez que você rodar comandos no projeto, o Claude Code vai pedir permissão para:
- `Bash` (rodar scripts, baixar fontes)
- `Read` / `Write` / `Edit` (ler e produzir documentos)
- MCP do Canva (se for usar)
- WebFetch / WebSearch (pesquisas externas — Fases 4–5 podem precisar)

Aprove conforme aparecem. Para conveniência, pode adicionar essas permissões em `~/.claude/settings.local.json`.

---

## 8. Checagem automática — `bootstrap.sh`

O projeto inclui `bootstrap.sh` (executável) que faz verificação completa:

```bash
cd /caminho/para/alright-brand
chmod +x bootstrap.sh
./bootstrap.sh
```

O script verifica:
- ✅ Software instalado (node, python, git, curl, ffmpeg, jq)
- ✅ Skill huashu-design instalada
- ✅ Estrutura do projeto íntegra
- ✅ Tokens DTCG válidos
- 📥 Baixa as fontes Bricolage Grotesque + JetBrains Mono em `assets/fonts/` (se ainda não estiverem)
- 📊 Reporta versões + paths + tamanhos

Se algo faltar, o script mostra exatamente o comando para instalar.

---

## 9. Como retomar a sessão Claude Code

### Passo a passo

1. Abra o terminal na pasta do projeto:
   ```bash
   cd /caminho/para/alright-brand
   ```

2. Rode o bootstrap (uma vez só):
   ```bash
   ./bootstrap.sh
   ```

3. Abra o Claude Code:
   ```bash
   claude
   ```

4. Cole esta mensagem inicial:

   > Retomar projeto Alright Brand Guide a partir do MIGRATION.md, STATUS.md e PLAN.md.
   > 
   > Estamos no início da **Fase 4** (Aplicações + Microsite v0). Leia os 3 documentos acima + os entregáveis das Fases 0–3 (estrutura em `00-discovery/`, `01-strategy-verbal/`, `02-visual-core/`, `03-color-aihouse-motion/`, `tokens/`) e me diga se está tudo coerente.
   > 
   > Em seguida, dispare a Fase 4 conforme o plano: Subagente 4.1 (Aplicações priorizadas) + Subagente 4.2 (Microsite v0 com huashu-design) em paralelo. Use o padrão de subagentes em janelas de contexto isoladas. Mantenha esta sessão como orquestrador.
   > 
   > Continue fazendo perguntas em etapas únicas (uma decisão por vez, formato clicável quando possível).

5. O orquestrador vai ler tudo, validar, e propor a Fase 4.

---

## 10. Mapa de arquivos críticos

```
alright-brand/
├── MIGRATION.md                              ← este arquivo (guia de migração)
├── STATUS.md                                 ← estado atual + checklist de retomada
├── PLAN.md                                   ← plano completo do projeto (cópia do plano original)
├── HISTORY.md                                ← decisões cravadas em ordem cronológica
├── README.md                                 ← visão geral
├── CLAUDE.md                                 ← regras project-level (huashu-design manual, etc)
├── bootstrap.sh                              ← verificação automática do ambiente
├── .gitignore
│
├── 00-discovery/                             [Fase 0 ✅]
│   ├── deck-thumbnails/                       16 PNGs do deck atual
│   ├── references/dossier-visual-references.md  dossiê 25+ marcas
│   └── insights.md                            consolidação + tese visual
│
├── 01-strategy-verbal/                       [Fase 1 ✅]
│   ├── 01-brand-strategy.md                   estratégia (Big idea no §12)
│   ├── 02-verbal-system.md                    tom + regra bilíngue + vocabulário
│   └── 03-big-idea-options.md                 9 alternativas (histórico)
│
├── 02-visual-core/                           [Fase 2 ✅]
│   ├── logo/
│   │   ├── 01-logo-system.md                  3 direções (histórico)
│   │   └── 02-direction-C-detailed.md         decisão final dual-state no topo
│   └── typography/
│       └── 01-type-system.md                  Bricolage Grotesque + JetBrains Mono
│
├── 03-color-aihouse-motion/                  [Fase 3 ✅]
│   ├── color/01-color-system.md               paleta + WCAG
│   ├── ai-house-look/01-house-look.md         5 princípios + capítulo Brand & AI
│   └── motion/01-motion-principles.md         5 princípios + tokens
│
├── 04-applications-microsite/                [Fase 4 ⏸️]
├── 05-deliverables/                          [Fase 5 ⏸️]
│
├── assets/                                   [populado pelo bootstrap.sh]
│   ├── logo/
│   ├── fonts/                                 ← Bricolage + JetBrains Mono (baixados pelo bootstrap)
│   └── icons/
│
├── tokens/                                   [Fase 3 ✅]
│   ├── color.tokens.json                      52 tokens DTCG
│   └── motion.tokens.json                     duration + easing tokens
│
└── governance/                               [Fase 5 ⏸️]
```

---

## 11. Decisões cravadas (resumo)

Para o detalhe completo, leia [HISTORY.md](HISTORY.md). Resumo:

| # | Decisão | Cravada |
|---|---|---|
| 1 | Escopo | Brand guide robusto a partir do deck |
| 2 | Estratégia | Confirmada — refinar e expandir |
| 3 | Idioma | Bilíngue PT/EN com regra clara |
| 4 | Profundidade | Early-stage enxuto |
| 5 | Públicos | Todos (interno + parceiros + freelas + imprensa) |
| 6 | Formato | Microsite + PDF executivo + downloads |
| 7 | Ativos atuais | Zero além do deck (tudo produzido neste projeto) |
| 8 | Ritmo | Sprint MVP 4–6 semanas |
| 9 | Intocáveis | Nome "Alright" + posicionamento + brand device `(( ))` |
| 10 | Governança | Owner único + revisão semestral |
| 11 | Tese visual | editorial-craft com tech sub-rosa |
| 12 | Big idea | **`((Look again.))`** |
| 13 | Lockup | `((We Are Alright))` EN-only sempre |
| 14 | Naming produtos futuros | Nomes neutros sem prefixo (modelo Mschf/A24) |
| 15 | Bilíngue | "por dentro" (PT/EN coexistem como pensamentos distintos) |
| 16 | Tier-alvo | Tier-1 internacional + mid-market BR secundário |
| 17 | Direção logo | C dual-state (C.2 default + C.1 expressivo + reveal) |
| 18 | Fonte | Bricolage Grotesque (OFL) + JetBrains Mono |
| 19 | Override | Bold 700 banido editorial, restrito ao accent C.2 |
| 20 | Paleta | Orange Clay `#d97757` + Bone `#faf9f5` + Dark `#141413` |
| 21 | Disclosure IA | sentence case Bricolage |
| 22 | LUT | Kodak 2383 D55 + budget custom Q3 |
| 23 | House look | Cinematic-not-slop + Crafted + Grounded + Editorial-density + Warm-sub-rosa |
| 24 | Motion | Look-again-moments + Reveal-over-cut + Easing humano + Tempo cinematográfico + Reduced-motion friendly |

---

## 12. Troubleshooting

### "huashu-design não aparece nas skills disponíveis"

```bash
# Reinstale e force restart do Claude Code
rm -rf ~/.claude/skills/huashu-design
git clone https://github.com/alchaincyf/huashu-design.git ~/.claude/skills/huashu-design
# Restart Claude Code (feche e abra de novo)
```

### "Canva MCP não conecta"

- Verifique se sua conta Canva tem acesso ao design `DAHC1EJyyjo` (o deck original do Alright).
- Re-autentique via OAuth.
- Se ainda falhar: os thumbnails já estão em `00-discovery/deck-thumbnails/` — você pode prosseguir Fase 4–5 sem o MCP.

### "Tokens JSON não validam"

```bash
# Verifique sintaxe
jq . tokens/color.tokens.json
jq . tokens/motion.tokens.json
```

### "Paths absolutos quebrados (referências a `/Users/beralzir/...`)"

Vários documentos do projeto referenciam paths absolutos do macOS original. Na nova máquina (especialmente se usuário diferente):

```bash
# Find/replace seguro (em macOS — substitua "novo-user" pelo seu username)
cd /caminho/para/alright-brand
grep -rl "/Users/beralzir/Projetos/alright-brand" . --include="*.md" | \
  xargs sed -i '' "s|/Users/beralzir/Projetos/alright-brand|$(pwd)|g"

# No Linux (sed sem '' depois do -i):
grep -rl "/Users/beralzir/Projetos/alright-brand" . --include="*.md" | \
  xargs sed -i "s|/Users/beralzir/Projetos/alright-brand|$(pwd)|g"
```

Plano original (`PLAN.md`) também tem paths absolutos. Ajuste conforme necessário.

### "O orquestrador esqueceu o contexto"

Quando uma sessão Claude Code reinicia, o contexto vai para zero. Use a **mensagem de retomada do §9** para que o orquestrador releia tudo. Ele deve dizer "li o STATUS, li o PLAN, etc — pronto para Fase 4".

### "Bootstrap.sh falha"

Rode com debug:
```bash
bash -x bootstrap.sh
```
Veja qual etapa falha e instale o que está faltando.

---

## 13. Estimativa de esforço

Para concluir as Fases 4 e 5 a partir do estado atual:

- **Fase 4** (Aplicações + Microsite): ~2 sessões de 1h cada com Claude Code + ~2h de revisão Bera.
- **Fase 5** (Deck + PDF + Hand-off): ~2 sessões de 1h cada + ~3h de revisão e validação Bera.

**Total**: ~10h de trabalho ativo + iteração. Aderente ao sprint de 4–6 semanas que você cravou.

---

## 14. Contatos / referências

- **Plano original**: `PLAN.md` (este projeto) ou `~/.claude/plans/smooth-spinning-bachman.md` (máquina origem).
- **Skill huashu-design**: https://github.com/alchaincyf/huashu-design (autor: Huasheng — alchaincyf@gmail.com).
- **Fontes**:
  - Bricolage Grotesque: https://fonts.google.com/specimen/Bricolage+Grotesque
  - JetBrains Mono: https://www.jetbrains.com/lp/mono/
- **Paleta referência**: Anthropic — https://anthropic.com (orange clay `#d97757`).
- **Design tokens spec**: https://www.designtokens.org/ (W3C DTCG).
- **WCAG validator**: https://webaim.org/resources/contrastchecker/

---

*FIM. Migration package preparado em 2026-05-10. Em caso de dúvida, leia o STATUS.md e o PLAN.md — eles cobrem tudo.*

*((We Are Alright))*
