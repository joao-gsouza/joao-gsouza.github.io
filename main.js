/* =========================================================
   Portfólio — João Guilherme Souza
   Para adicionar ou editar um jogo, mexa só na lista GAMES.
   O primeiro jogo da lista aparece em destaque.
   ========================================================= */

const GAMES = [
  {
    id: 'hollowrun',
    title: 'HollowRun',
    badge: 'Lançado · v1.2',
    badgeStyle: 'ok',
    ribbon: 'Último lançamento',
    url: 'https://zer0fast.itch.io/hollowrun',
    cta: 'Jogar no navegador',
    youtube: 'Ac0vNaH53F8',
    cover: 'assets/img/hollowrun/capa.jpg',
    banner: 'assets/img/hollowrun/04-castelo.jpg',
    bannerPos: '50% 45%',
    tagline: 'Uma armadura vazia corre para o leste enquanto a Podridão drena sua vida. Caia, levante mais forte, vá mais fundo.',
    description: 'Roguelite idle/incremental de dark fantasy. Cinderheim caiu há muito tempo: uma armadura vazia corre sozinha para o leste enquanto a Podridão drena sua vida sem parar — a vida não regenera, só subir de nível devolve. Você não controla o caminho, controla as escolhas: seis habilidades ativas e duas camadas de progressão. Morrer faz parte do loop: você volta um bioma atrás, com todo o progresso intacto, pronto para ir mais fundo.',
    chips: ['Roguelite', 'Idle', 'Navegador'],
    shots: [
      ['assets/img/hollowrun/01-combate.jpg', 'Combate: habilidades de fogo, raio e gelo em ação'],
      ['assets/img/hollowrun/02-arvore.jpg', 'Árvore de habilidades da run — Força, Velocidade e Magia'],
      ['assets/img/hollowrun/03-constelacao.jpg', 'Constelação permanente — Poder, Vitalidade, Agilidade, Sabedoria e Fortuna'],
      ['assets/img/hollowrun/04-castelo.jpg', 'Bioma: Ruínas do Castelo'],
      ['assets/img/hollowrun/05-cavernas.jpg', 'Bioma: Cavernas Profundas'],
      ['assets/img/hollowrun/06-floresta.jpg', 'Bioma: Floresta Sombria'],
      ['assets/img/hollowrun/07-prestigio.jpg', 'Prestígio: recomeçar do zero em troca de fragmentos permanentes'],
      ['assets/img/hollowrun/08-queda.jpg', 'Morte e respawn — o progresso nunca se perde'],
      ['assets/img/hollowrun/09-historico.jpg', 'Histórico da jornada']
    ],
    features: [
      'Seis habilidades ativas de fogo, raio e gelo (Q W E R T Y ou mouse), cada uma com custo de mana e cooldown.',
      'Árvore da run com 45 nós (Força, Velocidade, Magia): os pontos são limitados, então cada build é uma escolha.',
      'Constelação permanente com 50 nós (Poder, Vitalidade, Agilidade, Sabedoria, Fortuna) e 3 nós infinitos, os Echoes.',
      'Prestígio: reinicia nível e árvore quando você quiser; os fragmentos ficam para sempre.',
      'Cinco biomas em rotação, 11 criaturas e 3 chefes — e a Podridão fica mais forte quanto mais longe você vai.',
      'Dois finais, salvamento automático e o jogo todo em PT-BR, EN e ES.'
    ],
    built: [
      'Arquitetura desacoplada seguindo SOLID, com canais de evento em ScriptableObject (13 tipos, 32 canais): sistemas event-driven e data-driven — a HUD inteira nunca referencia o player.',
      'Sistemas pensados para o balanceamento: valores em dados, fáceis de testar e ajustar sem mexer em código.',
      'Todas as mecânicas e sistemas: habilidades, árvore da run, constelação, prestígio, economia de fragmentos, inimigos, chefes e save.',
      'Sistema de localização próprio, com chaves em JSON resolvidas em tempo de execução — 354 chaves em 3 idiomas.'
    ],
    learned: [
      'Desacoplamento: eu sempre resolvia tudo com singleton. Migrar para data-driven, event-driven e ScriptableObjects foi um desafio enorme — e valeu: reescrevi a fórmula de dano dois dias antes do lançamento sem tocar em nenhum arquivo de UI.',
      'Localização: estruturar os arquivos, separar as chaves e resolver tudo em tempo de execução sem custo de performance.',
      'Design de sistemas: imaginar cada mecânica e pensar em como todas se combinam — habilidades, árvore, constelação e prestígio.',
      'Balanceamento foi a parte mais difícil e a que mais me ensinou: foram cinco passadas (mana, curva de poder, curva de inimigos, economia de fragmentos e constelação). Descobri uma parede no bioma 13 — todo o poder do jogador era finito, enquanto a vida dos inimigos crescia exponencialmente — e resolvi com níveis compostos, nós infinitos e curvas mais suaves, levando o limite para o bioma 106.'
    ],
    controls: [['Habilidades', 'Q W E R T Y'], ['Alternativa', 'Mouse']],
    info: [
      ['Status', 'Lançado · v1.2'], ['Lançamento', '15 set 2026'], ['Engine', 'Unity'],
      ['Plataforma', 'Navegador (HTML5)'], ['Duração média', '~1 hora'], ['Idiomas', 'PT-BR · EN · ES'],
      ['Conteúdo', '5 biomas · 11 inimigos · 3 chefes'], ['Código', '106 scripts · ~9 mil linhas de C#'],
      ['Equipe', 'Solo'], ['Meu papel', 'Game design e programação']
    ],
    tags: ['2D', 'Dark Fantasy', 'Pixel Art', 'Incremental', 'Side Scroller', 'Singleplayer']
  },
  {
    id: 'escape-rush',
    title: 'Escape Rush',
    badge: 'Versão 1.1 · pós-jam',
    url: 'https://zer0fast.itch.io/escape-rush',
    cta: 'Jogar no navegador',
    youtube: 'lW-yZfjefeU',
    cover: 'assets/img/escape-rush/capa.jpg',
    banner: 'assets/img/escape-rush/capa.jpg',
    bannerPos: '50% 80%',
    tagline: 'Fuja da polícia, desvie do caos e veja até onde você chega antes de ser pego.',
    description: 'Endless runner de perseguição: você pilota um carro esportivo por uma avenida de 3 faixas com as viaturas logo atrás. Nasceu em 2 dias e meio na Oficina Jam (out 2024) e voltou numa versão 1.1 no Unity 6 — perseguição de verdade, obstáculos sempre com uma saída possível e dificuldade que sobe junto com o seu nível de procurado.',
    chips: ['Endless runner', 'Top-down', 'Navegador'],
    shots: [
      ['assets/img/escape-rush/01-gameplay.webp', 'Gameplay: troca de faixa, barreiras e viaturas na cola'],
      ['assets/img/escape-rush/02-gameplay.webp', 'Gameplay: moedas, nitro e a polícia fechando o cerco'],
      ['assets/img/escape-rush/03-moedas.jpg', 'Moedas de prata no caminho seguro; as de ouro ficam na faixa dos obstáculos'],
      ['assets/img/escape-rush/04-nitro.jpg', 'Nitro ativado para abrir distância da polícia'],
      ['assets/img/escape-rush/05-procurado.jpg', '5 estrelas: o jogo acelera, lota de obstáculos e a polícia fica mais rápida que você'],
      ['assets/img/escape-rush/06-mapa.jpg', 'Mapa e cenário gerados proceduralmente a cada partida'],
      ['assets/img/escape-rush/07-gameover.jpg', 'Fim de partida: tempo, pontos, estrelas, nitros, batidas, moedas e recorde'],
      ['assets/img/escape-rush/08-menu.jpg', 'Menu da versão 1.1']
    ],
    features: [
      'Nível de procurado ★★★★★: a cada 30 segundos o jogo acelera e ganha mais obstáculos; a partir de 2 estrelas a polícia fica mais rápida que você.',
      'Geração procedural com caminho seguro garantido: sempre existe uma faixa livre, com tempo de reação para chegar nela.',
      'Risco × recompensa: moedas de prata no caminho seguro e moedas de ouro, que valem mais a cada estrela, na faixa dos obstáculos.',
      'Nitro como ferramenta de sobrevivência; cada batida freia só você e custa pontos.',
      'Game feel: troca de faixa suave com o carro inclinando, tremor de tela nas batidas e a polícia seguindo a sua faixa com atraso.',
      'Recorde de pontos e de tempo salvo no navegador, pause automático ao trocar de aba.'
    ],
    built: [
      'Movimentação do carro e troca de faixa, com inclinação na curva e feedback de batida.',
      'Geração procedural de obstáculos e coletáveis em volta de um caminho seguro garantido.',
      'Geração procedural do mapa e dos elementos visuais do cenário.',
      'IA da polícia que persegue o jogador e acompanha a faixa dele com um pequeno atraso.',
      'Toda a arte 2D do jogo, desenhada à mão no Aseprite.'
    ],
    learned: [
      'Escopo de game jam: com 2 dias e meio, priorizei sistemas simples e estáveis, sem bugs, em vez de muitas features.',
      'Sistemas pensados para iterar rápido e receber novas mecânicas depois — foi o que permitiu a versão 1.1.',
      'Balanceamento guiado por feedback: na jam a polícia quase nunca alcançava o jogador; na 1.1 redesenhei a perseguição para que cada estrela realmente pese.',
      'Arte 2D: aprendi a criar sprites do zero no Aseprite.'
    ],
    controls: [['Trocar de faixa', 'A / D · ← / →'], ['Pausar', 'ESC / P'], ['Começar partida', 'Enter']],
    info: [
      ['Status', 'Versão 1.1'], ['Origem', 'Oficina Jam · out 2024'], ['Tempo na jam', '2,5 dias'],
      ['Engine', 'Unity 6'], ['Plataforma', 'Navegador (HTML5)'], ['Gênero', 'Endless runner · Perseguição'],
      ['Equipe', 'Solo'], ['Meu papel', 'Planejamento, desenvolvimento e testes']
    ],
    tags: ['Top-down', 'Endless Runner', 'Arcade', 'Game Jam', 'Pixel Art', 'Singleplayer']
  }
];

/* ---------------------------------------------------------
   Daqui para baixo é a lógica da página
   --------------------------------------------------------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ICON_ARROW = '<svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
const ICON_PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';

/* ---------- Cards ---------- */
function cardHTML(g, featured) {
  return `
    <button class="game-card" type="button" data-game="${g.id}" aria-label="Ver detalhes de ${esc(g.title)}">
      <span class="game-cover">
        <img src="${g.cover}" alt="" loading="${featured ? 'eager' : 'lazy'}">
        ${g.ribbon ? `<span class="ribbon">${esc(g.ribbon)}</span>` : ''}
      </span>
      <span class="game-body">
        <span class="game-title-row">
          <span class="game-title">${esc(g.title)}</span>
          <span class="badge ${g.badgeStyle || ''}">${esc(g.badge)}</span>
        </span>
        <span class="game-tagline">${esc(g.tagline)}</span>
        <span class="game-foot">
          <span class="tags">${g.chips.map((c) => `<span class="tag">${esc(c)}</span>`).join('')}</span>
          <span class="see">Ver projeto ${ICON_ARROW}</span>
        </span>
      </span>
    </button>`;
}

function renderCards() {
  const grid = document.getElementById('games-grid');
  const [first, ...rest] = GAMES;
  grid.innerHTML = cardHTML(first, true) + (rest.length ? `<div class="side">${rest.map((g) => cardHTML(g, false)).join('')}</div>` : '');
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-game]');
    if (card) openGame(card.dataset.game, card);
  });
}

/* ---------- Janela do jogo ---------- */
const modal = document.getElementById('game-modal');
const inner = document.getElementById('modal-inner');
let current = null;
let slide = 0;
let lastFocus = null;

function slides(g) {
  const list = [];
  if (g.youtube) list.push({ type: 'video', src: g.cover, caption: 'Trailer oficial' });
  g.shots.forEach(([src, caption]) => list.push({ type: 'image', src, caption }));
  return list;
}

function modalHTML(g) {
  const list = (items) => `<ul class="bullets">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
  return `
    <div class="m-banner">
      <img src="${g.banner}" alt="" style="object-position:${g.bannerPos || '50% 50%'}">
      <button class="m-close" type="button" aria-label="Fechar"><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
      <div class="m-head">
        <div>
          <p class="eyebrow">${esc(g.badge)}</p>
          <h2 id="modal-title">${esc(g.title)}</h2>
        </div>
        <a class="btn btn-primary" href="${g.url}" target="_blank" rel="noopener">${ICON_PLAY}${esc(g.cta)}</a>
      </div>
    </div>
    <div class="m-body">
      <div class="m-main">
        <div class="gallery">
          <div class="g-view" id="g-view"></div>
          <p class="g-caption" id="g-caption" aria-live="polite"></p>
          <div class="g-thumbs" id="g-thumbs"></div>
        </div>
        <div class="m-desc">
          <p class="m-tagline">${esc(g.tagline)}</p>
          <p>${esc(g.description)}</p>
        </div>
        <div class="m-block"><h3>Mecânicas e sistemas</h3>${list(g.features)}</div>
        <div class="m-cols">
          <div class="m-box m-block"><h3>O que eu desenvolvi</h3>${list(g.built)}</div>
          <div class="m-box m-block"><h3>Desafios e aprendizados</h3>${list(g.learned)}</div>
        </div>
      </div>
      <aside class="m-side">
        <dl class="info">${g.info.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
        <div class="m-block">
          <h3>Controles</h3>
          <ul class="controls">${g.controls.map(([a, k]) => `<li><span>${esc(a)}</span><kbd>${esc(k)}</kbd></li>`).join('')}</ul>
        </div>
        <div class="m-block">
          <h3>Tags</h3>
          <div class="tags">${g.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        </div>
        <a class="btn btn-ghost" href="${g.url}" target="_blank" rel="noopener">Abrir página no itch.io</a>
      </aside>
    </div>`;
}

function renderSlide(autoplay = false) {
  const list = slides(current);
  const s = list[slide];
  const view = document.getElementById('g-view');
  const nav = list.length > 1 ? `
    <button class="g-nav g-prev" type="button" aria-label="Anterior"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></button>
    <button class="g-nav g-next" type="button" aria-label="Próxima"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></button>` : '';

  if (s.type === 'video' && autoplay) {
    view.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${current.youtube}?autoplay=1&rel=0" title="Trailer de ${esc(current.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  } else if (s.type === 'video') {
    view.innerHTML = `
      <button class="g-poster" type="button" aria-label="Assistir trailer de ${esc(current.title)}">
        <img src="${s.src}" alt="">
        <span class="g-play">${ICON_PLAY}</span>
        <span class="g-poster-label">Assistir trailer</span>
      </button>${nav}`;
  } else {
    view.innerHTML = `<img src="${s.src}" alt="${esc(s.caption)}">${nav}`;
  }
  document.getElementById('g-caption').textContent = s.caption;
  document.querySelectorAll('.g-thumb').forEach((t, i) => t.setAttribute('aria-current', i === slide ? 'true' : 'false'));
}

function goTo(i, autoplay = false) {
  const n = slides(current).length;
  slide = (i + n) % n;
  renderSlide(autoplay);
}

function openGame(id, trigger) {
  const g = GAMES.find((x) => x.id === id);
  if (!g) return;
  current = g;
  slide = 0;
  lastFocus = trigger || document.activeElement;
  inner.innerHTML = modalHTML(g);
  document.getElementById('g-thumbs').innerHTML = slides(g).map((s, i) => `
    <button class="g-thumb" type="button" data-i="${i}" aria-label="${esc(s.type === 'video' ? 'Trailer' : s.caption)}">
      <img src="${s.src}" alt="" loading="lazy">
      ${s.type === 'video' ? `<span class="mini-play">${ICON_PLAY}</span>` : ''}
    </button>`).join('');
  renderSlide();
  modal.showModal();
  modal.scrollTop = 0;
  document.body.classList.add('modal-open');
  if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
}

function closeGame() {
  if (modal.open) modal.close();
}

modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  inner.innerHTML = ''; // para o vídeo, se estiver tocando
  if (GAMES.some((g) => '#' + g.id === location.hash)) history.replaceState(null, '', location.pathname + location.search);
  if (lastFocus && lastFocus.focus) lastFocus.focus();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) return closeGame(); // clique fora da janela
  if (e.target.closest('.m-close')) return closeGame();
  if (e.target.closest('.g-prev')) return goTo(slide - 1);
  if (e.target.closest('.g-next')) return goTo(slide + 1);
  if (e.target.closest('.g-poster')) return goTo(0, true);
  const t = e.target.closest('.g-thumb');
  if (t) goTo(Number(t.dataset.i));
});

modal.addEventListener('keydown', (e) => {
  if (e.target.closest('iframe')) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(slide - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); goTo(slide + 1); }
});

/* ---------- Menu no celular ---------- */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') !== 'true';
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('open', open);
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) { menuBtn.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); }
});

/* ---------- Início ---------- */
renderCards();
document.getElementById('year').textContent = new Date().getFullYear();

// Abre um jogo direto pelo link: seusite.com/#hollowrun ou #escape-rush
function openFromHash() {
  const g = GAMES.find((x) => '#' + x.id === location.hash);
  if (g && !modal.open) openGame(g.id);
}
openFromHash();
window.addEventListener('hashchange', openFromHash);
