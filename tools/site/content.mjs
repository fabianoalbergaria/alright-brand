// Conteúdo do site wearealright.cc — a ÚNICA lista a editar para incluir, mover ou tirar trabalhos.
// Depois de editar, gere a página:  node tools/build-site.mjs   (escreve index.html)
//
// Vídeos:
//   - trecho leve que toca na página: R2 teaser/<slug>-<largura>.mp4 (arquivos NOVOS, só para a grade)
//   - capa do trecho: assets/work/grid/<slug>-<largura>.jpg
//   - filme completo (abre na janela do site ao clicar): Vimeo `vimeo` (+ `vimeoHash` se o vídeo for não listado), YouTube `youtube`, ou arquivo `src`
//   - vídeo sem arquivo no R2: `teaser: []` e `poster: [larguras]` (a capa aparece e o vídeo toca mudo direto do Vimeo/YouTube)
//   - w/h = proporção original do vídeo; nenhum quadro corta ou estica o vídeo
// NUNCA sobrescrever arquivos que já existem no R2: o site da Phono (Alright AI Studio) usa vários deles direto.

export const R2 = 'https://pub-cbe2e8273b054c8bb52e5dec0dc1e3a7.r2.dev/';

export const FILMS = {
  'caixa-taekwondo':              { client: 'Caixa', title: 'Taekwondo', vimeo: '1239992138', w: 1920, h: 1080, teaser: [1920, 1280, 768] },
  'caixa-ginastica':              { client: 'Caixa', title: 'Ginástica', vimeo: '1239992223', w: 1920, h: 1080, teaser: [1280, 768] },
  'caixa-tenis-de-mesa':          { client: 'Caixa', title: 'Tênis de mesa', vimeo: '1239992159', w: 1920, h: 1080, teaser: [1280, 768] },
  'puma-portugal':                { client: 'PUMA', title: 'Portugal', vimeo: '1191599038', w: 1920, h: 1080, teaser: [1920, 1280, 768] },
  'olympikus-corre5-full':        { client: 'Olympikus', title: 'Corre 5', vimeo: '1192635125', w: 1920, h: 1080, teaser: [1280, 768] },
  'chupa-chups-art-gallery':      { client: 'Chupa Chups', title: 'Art Gallery', vimeo: '1191600944', w: 1920, h: 3414, teaser: [720] },
  'chupa-chups-surreal-dream':    { client: 'Chupa Chups', title: 'Surreal Dream', vimeo: '1191600943', w: 1920, h: 3414, teaser: [720] },
  'chupa-chups-surreal-unboxing': { client: 'Chupa Chups', title: 'Surreal Unboxing', vimeo: '1191600942', w: 1920, h: 3414, teaser: [720] },
  'chupa-chups-forever-fun':      { client: 'Chupa Chups', title: 'Forever Fun', vimeo: '1191599456', w: 1920, h: 3414, teaser: [720] },
  'mizuno-botafogo':              { client: 'Mizuno x Botafogo', title: 'Lançamento da collab', vimeo: '1191597286', w: 1920, h: 1080, teaser: [1280, 768] },
  'azul-outubro-rosa':            { client: 'Azul', title: 'Outubro Rosa', vimeo: '1239992137', w: 1920, h: 1080, teaser: [1280, 768] },
  'enem-tv':                      { client: 'ENEM', title: 'TV', vimeo: '1239991895', w: 1920, h: 1080, teaser: [1280, 768] },
  'enem-digital':                 { client: 'ENEM', title: 'Digital', vimeo: '1239991906', w: 1080, h: 1920, teaser: [720] },
  'enem-monstro':                 { client: 'ENEM', title: 'Pedro Sampaio', vimeo: '1239991836', w: 1920, h: 1080, teaser: [1280, 768] },
  'fies':                         { client: 'FIES', title: 'Filme', vimeo: '1239992136', w: 1920, h: 1080, teaser: [1280, 768] },
  'mec-livros':                   { client: 'MEC Livros', title: 'Filme', vimeo: '1239991818', w: 1920, h: 1080, teaser: [1280, 768] },
  'brime-sexta-na-quarta':        { client: 'Brime', title: 'Tem uma sexta na minha quarta', vimeo: '1192047832', w: 1920, h: 1080, teaser: [1280, 768] },
  'negra-li-visual':              { client: 'Negra Li', title: 'Lollapalooza', vimeo: '1192041713', w: 1920, h: 1080, teaser: [1280, 768] },
  'santa':                        { client: 'Santa', title: 'Filme', vimeo: '1239991466', w: 1920, h: 1080, teaser: [1280, 768] },
  'hbo-max-paulistao':            { client: 'HBO Max', title: 'Paulistão', vimeo: '1193297749', w: 1920, h: 1080, teaser: [1280, 768] },
  'fundo-em-play':                { client: 'Alright', title: 'Filme autoral', src: R2 + 'fundo-em-play.mp4', w: 1920, h: 1080, teaser: [1920, 1280, 768] },
  // Sem arquivo no R2: tocam mudos direto do Vimeo/YouTube:
  'bauducco-collab-fini':         { client: 'Bauducco', title: 'Collab Fini', vimeo: '1224099579', vimeoHash: 'c49b179571', w: 1920, h: 1080, teaser: [], poster: [1280, 768] },
  'meet-thelonious':              { client: 'Alright', title: 'Meet Thelonious', youtube: '6y6lzSlFG6s', w: 1920, h: 1080, teaser: [], poster: [1280, 768] },
  'last-meal':                    { client: 'Alright', title: 'Last meal in the end of the world', vimeo: '1225950735', vimeoHash: '46e64bd4ca', w: 1920, h: 1080, teaser: [], poster: [1280, 768] },
  'rio-2077':                     { client: 'Alright', title: 'Rio 2077', vimeo: '1243021343', w: 1920, h: 1080, teaser: [], poster: [1280, 768] },
};

// Aba PROJETOS: a lista, na ordem. `films` = filmes da página do projeto (o primeiro abre a página).
export const PROJECTS = [
  { slug: 'caixa', client: 'Caixa', sub: 'Taekwondo · Ginástica · Tênis de mesa', copy: 'Série de filmes: taekwondo, ginástica e tênis de mesa.', films: ['caixa-taekwondo', 'caixa-ginastica', 'caixa-tenis-de-mesa'] },
  { slug: 'puma', client: 'PUMA', sub: 'Portugal', copy: 'Lançamento da nova camisa da seleção de Portugal.', films: ['puma-portugal'] },
  { slug: 'olympikus', client: 'Olympikus', sub: 'Corre 5', copy: 'Lançamento do novo modelo Corre 5.', films: ['olympikus-corre5-full'] },
  { slug: 'chupa-chups', client: 'Chupa Chups', sub: 'Forever Fun', copy: 'Série de vídeos. VFX.', films: ['chupa-chups-art-gallery', 'chupa-chups-surreal-dream', 'chupa-chups-surreal-unboxing', 'chupa-chups-forever-fun'] },
  { slug: 'mizuno', client: 'Mizuno x Botafogo', sub: 'Lançamento da collab', copy: 'Lançamento da Collab com o Botafogo F.R.', films: ['mizuno-botafogo'] },
  { slug: 'azul', client: 'Azul', sub: 'Outubro Rosa', copy: 'Filme para a campanha Outubro Rosa.', films: ['azul-outubro-rosa'] },
  { slug: 'enem', client: 'ENEM', sub: 'TV e digital', copy: 'Campanha para TV e digital.', films: ['enem-tv', 'enem-digital', 'enem-monstro'] },
  { slug: 'fies', client: 'FIES', sub: 'Filme', copy: 'Filme para o FIES.', films: ['fies'] },
  { slug: 'mec-livros', client: 'MEC Livros', sub: 'Filme', copy: 'Filme para o MEC Livros.', films: ['mec-livros'] },
  { slug: 'brime', client: 'Brime', sub: 'Tem uma sexta na minha quarta', copy: 'Clipe com Febem, Fllezus e Cesrv.', films: ['brime-sexta-na-quarta'] },
  { slug: 'negra-li', client: 'Negra Li', sub: 'Lollapalooza 2026', copy: 'Série de visuais para comemoração de 20 anos de carreira no Lollapalooza 2026.', films: ['negra-li-visual'] },
  { slug: 'santa', client: 'Santa', sub: 'Filme', copy: 'Filme para a Santa.', films: ['santa'] },
  { slug: 'hbo-max', client: 'HBO Max', sub: 'Paulistão', copy: 'Comercial para HBO Max.', films: ['hbo-max-paulistao'] },
  { slug: 'bauducco', client: 'Bauducco', sub: 'Collab Fini', copy: 'Filme da collab Bauducco e Fini.', films: ['bauducco-collab-fini'] },
];

// Página inicial em mosaico: cada linha é uma lista de colunas; cada coluna empilha 1 ou mais vídeos.
// O encaixe é calculado pela proporção de cada vídeo (linhas sempre alinhadas, nada cortado).
// HOME = computador (≥ 900px). HOME_COMPACT = tablet (600–899px) e, em sequência simples, celular (< 600px).
// Os dois precisam ter exatamente os mesmos vídeos.
export const HOME = [
  [['puma-portugal'], ['caixa-taekwondo', 'olympikus-corre5-full']],
  [['chupa-chups-art-gallery'], ['mizuno-botafogo', 'azul-outubro-rosa'], ['chupa-chups-surreal-dream'], ['enem-tv', 'brime-sexta-na-quarta']],
  [['fies', 'mec-livros', 'bauducco-collab-fini'], ['enem-monstro'], ['chupa-chups-surreal-unboxing']],
  [['negra-li-visual'], ['santa', 'hbo-max-paulistao'], ['chupa-chups-forever-fun']],
];
export const HOME_COMPACT = [
  [['puma-portugal']],
  [['chupa-chups-art-gallery'], ['caixa-taekwondo', 'olympikus-corre5-full']],
  [['mizuno-botafogo', 'azul-outubro-rosa'], ['chupa-chups-surreal-dream']],
  [['enem-monstro'], ['chupa-chups-surreal-unboxing']],
  [['enem-tv', 'brime-sexta-na-quarta'], ['fies', 'mec-livros', 'bauducco-collab-fini']],
  [['negra-li-visual'], ['chupa-chups-forever-fun']],
  [['santa'], ['hbo-max-paulistao']],
];

// Aba AUTORAIS (mais filmes autorais entram aqui quando chegarem)
// Autorais: um filme por linha, na largura total da tela (mesmo formato da HOME)
export const AUTORAIS = [
  [['fundo-em-play']],
  [['meet-thelonious']],
  [['last-meal']],
  [['rio-2077']],
];

// Stills: grupos de fotos (assets/work/web/stills/<foto>-900.jpg e -1800.jpg). [foto, largura, altura]
export const STILLS = {
  vivo:   { name: 'Vivo',   images: [['vivo-01', 1449, 1800], ['vivo-02', 1451, 1800], ['vivo-03', 1451, 1800], ['vivo-04', 1449, 1800], ['vivo-05', 1449, 1800], ['vivo-06', 1449, 1800], ['vivo-07', 1451, 1800], ['vivo-08', 1449, 1800], ['vivo-09', 1449, 1800], ['vivo-10', 1451, 1800], ['vivo-11', 1451, 1800], ['vivo-12', 1800, 1209]] },
  seda:   { name: 'Seda',   images: [['seda-01', 1450, 1800], ['seda-02', 1450, 1800], ['seda-03', 1450, 1800], ['seda-04', 1450, 1800], ['seda-05', 1450, 1800], ['seda-06', 1450, 1800], ['seda-07', 1450, 1800], ['seda-08', 1450, 1800], ['seda-09', 1450, 1800], ['seda-10', 1450, 1800], ['seda-11', 1450, 1800]] },
  ca:     { name: 'C&A',    images: [['ca-01', 1800, 1800], ['ca-02', 1201, 1800], ['ca-03', 1201, 1800], ['ca-04', 1800, 1800], ['ca-05', 1208, 1800], ['ca-06', 1201, 1800], ['ca-07', 1800, 1800], ['ca-08', 1208, 1800], ['ca-09', 1208, 1800], ['ca-10', 1238, 1800], ['ca-11', 1800, 1800], ['ca-12', 1800, 1800]] },
  // Fora do site desde 2026-11 (fotos continuam no repositório):
  santa:  { name: 'Santa',  images: [['santa-01', 1800, 1008], ['santa-02', 1800, 1008], ['santa-03', 1800, 1008], ['santa-04', 1800, 1008], ['santa-05', 1800, 1008], ['santa-06', 1800, 1008], ['santa-07', 1800, 1008], ['santa-08', 1800, 1008], ['santa-09', 1800, 1008]] },
  batavo: { name: 'Batavo', images: [['batavo-01', 1800, 1800], ['batavo-02', 1800, 1013], ['batavo-03', 1800, 1013]] },
  dove:   { name: 'Dove',   images: [['dove-01', 1200, 1800], ['dove-02', 1208, 1800]] },
};
// Stills ficam só na aba STILLS (a home tem só vídeos)
export const STILLS_PAGE = ['vivo', 'seda', 'ca'];

// Fora do site público (nada apagado — vídeos seguem no R2 e no Vimeo, fotos e capas no repositório; a página
// anterior completa está no histórico do git, commit 4e925f9, index.html): BK, Fruittella, Instituto Caldeira,
// Santa · Lendas 1–5, stills de Santa, Batavo e Dove.
