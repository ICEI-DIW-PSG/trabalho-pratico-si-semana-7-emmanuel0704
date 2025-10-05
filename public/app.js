// Dados 
const dados = [
  {
    id: 1,
    titulo: "Treino de Força – Iniciante",
    resumo: "Primeiros passos e técnica correta.",
    categoria: "Força",
    autor: "Equipe Fit Web",
    data: "2025-03-30",
    imagem: "imgs/display-frame.png",
    thumb: "imgs/frame.png",
    conteudo: `
      <p>Este guia aborda aquecimento, execução do supino, agachamento e remadas.</p>
      <p>Foque em técnica antes de carga. Progrida 2,5–5 kg por semana.</p>
    `
    },
    {
        id: 2,
        titulo: "Mobilidade para Agachamento",
        resumo: "Sequência rápida para abrir quadril e tornozelo.",
        categoria: "Mobilidade",
        autor: "Equipe Fit Web",
        data: "2025-03-28",
        imagem: "imgs/display-frame.png",
        thumb: "imgs/frame.png",
        conteudo: `
      <p>Rotinas de 10 minutos melhoram profundidade e estabilidade do agachamento.</p>
    `
  },
  {
    id: 3,
    titulo: "Como progredir cargas",
    resumo: "Três métodos simples para evoluir sem estagnar.",
    categoria: "Planejamento",
    autor: "Equipe Fit Web",
    data: "2025-03-25",
    imagem: "imgs/display-frame.png",
    thumb: "imgs/frame.png",
    conteudo: `
      <p>Progressão linear, ondulatória e dupla. Use RPE e limites semanais.</p>
    `
  },
  {
    id: 4,
    titulo: "Nutrição para hipertrofia",
    resumo: "Proteínas, carboidratos e timing ao seu favor.",
    categoria: "Nutrição",
    autor: "Equipe Fit Web",
    data: "2025-03-20",
    imagem: "imgs/display-frame.png",
    thumb: "imgs/frame.png",
    conteudo: `
      <p>Superávit leve (5–10%), 1.6–2.2 g/kg de proteína e 3–6 g/kg de carbo.</p>
    `
  }
];

const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

function getParam(name) {
  const params = new URLSearchParams(location.search);
  return params.get(name);
}

function renderHome() {
    const destaquesWrap = $(".cards");
  if (destaquesWrap) {
    destaquesWrap.innerHTML = dados.slice(0, 2).map(item => `
      <article class="card">
        <a href="detalhes.html?id=${item.id}" class="card-thumb" aria-label="${item.titulo}">
          <img src="${item.imagem}" alt="${item.titulo}">
        </a>
        <div class="card-body">
          <h3>${item.titulo}</h3>
          <p>${item.resumo}</p>
          <a href="detalhes.html?id=${item.id}" class="more">Saiba mais</a>
        </div>
      </article>
    `).join("");
  }
  const postsLista = $(".posts");
  if (postsLista) {
    postsLista.innerHTML = dados.map(item => `
      <li>
        <article class="mini">
          <img src="${item.thumb}" alt="Thumb do post" class="mini-thumb">
          <div>
            <strong>${item.titulo}</strong>
            <small>${item.resumo}</small>
            <a href="detalhes.html?id=${item.id}" class="more">Saiba mais</a>
          </div>
        </article>
      </li>
    `).join("");
  }
}

function renderDetalhes() {
  const id = Number(getParam("id"));
  const item = dados.find(d => d.id === id);

  const main = document.querySelector("main") || document.body;
  const area = document.getElementById("detalhe");

  if (!item) {
    if (area) area.innerHTML = `<p>Item não encontrado.</p>`;
    return;
  }

  if (area) {
    area.innerHTML = `
      <header class="featured" style="text-align:center">
        <h1>${item.titulo}</h1>
        <p class="site-quote">
          <small>Categoria: ${item.categoria} • ${item.data} • ${item.autor}</small>
        </p>
      </header>

      <figure class="card-thumb" style="margin:12px auto; max-width:960px;">
        <img src="${item.imagem}" alt="${item.titulo}">
      </figure>

      <section class="card-body" style="max-width:960px; margin:0 auto;">
        ${item.conteudo}
      </section>

      <p class="see-all" style="margin-top:20px;">
        <a class="btn btn-outline" href="index.html">← Voltar para a Home</a>
      </p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const isHome = !!document.querySelector(".posts");
  const isDetalhes = !!document.getElementById("detalhe");

  if (isHome) renderHome();
  if (isDetalhes) renderDetalhes();
});