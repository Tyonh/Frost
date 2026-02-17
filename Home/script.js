// ==========================================
// CONFIGURAÇÕES DA FORJA
// ==========================================
const NOTICIAS_POR_PAGINA = 10;
const LIMITE_MAXIMO_PAGINAS = 10;
let paginaAtual = 1;

// ==========================================
// BANCO DE NOTÍCIAS (Adicione as suas aqui)
// ==========================================
// Para adicionar uma nova notícia, basta copiar um bloco {...} e colar acima ou abaixo, separando com vírgula.
const bancoDeNoticias = [
    {
        jogo: "WARFRAME",
        tagPrimaria: "Patch Notes",
        tagSecundaria: "Turnê do Tecnovírus",
        titulo: "Surpreenda seus inimigos com a Armadura Umbra",
        resumo: "Surpreenda seus inimigos com a elegante e estilosa Armadura Umbra e intimide-os com a lendária Nikana Dracônica. Fortaleça seu Arsenal com esses itens incríveis e muito mais...",
        imagem: "/public/bruma.jpeg",
        autor: "Tyonh",
        data: "31 de Janeiro, 2025"
    },
    {
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },
    {
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },
    {
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },{
        jogo: "ALBION ONLINE \u2197",
        tagPrimaria: "Guia",
        tagSecundaria: "Estradas Avalonianas",
        titulo: "Como lucrar nas zonas vermelhas de Albion",
        resumo: "Um guia completo sobre como sobreviver e extrair recursos raros nas Estradas Avalonianas sem perder todo o seu equipamento para os gankers.",
        imagem: "/public/war.jpeg",
        autor: "Geovane",
        data: "15 de Fevereiro, 2026"
    },

    
    // Cole a próxima notícia aqui em baixo -> , { ... }
];

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ==========================================
const containerNoticias = document.getElementById('container-noticias');
const containerPaginacao = document.getElementById('container-paginacao');

function renderizarNoticias(pagina) {
    if (!containerNoticias) return; // Segurança caso o HTML não carregue
    
    containerNoticias.innerHTML = ''; 
    containerNoticias.style.opacity = '0'; 

    const inicio = (pagina - 1) * NOTICIAS_POR_PAGINA;
    const fim = inicio + NOTICIAS_POR_PAGINA;
    const noticiasDaPagina = bancoDeNoticias.slice(inicio, fim);

    noticiasDaPagina.forEach(noticia => {
        const artigoHTML = `
            <a href="#" class="noticias">
              <img src="${noticia.imagem}" alt="${noticia.titulo}">
              <div class="noticias-texto">
                <div class="noticias-tags">
                  <span class="nome-jogo">${noticia.jogo}</span>
                  <span class="tag">${noticia.tagPrimaria}</span>
                  <span class="tag">${noticia.tagSecundaria}</span>
                </div>
                <h3>${noticia.titulo}</h3>
                <p>${noticia.resumo}</p>
                <span class="meta-info">by <strong>${noticia.autor}</strong> &nbsp;&nbsp; ${noticia.data}</span>
              </div>
            </a>
            <div class="barra"></div>
        `;
        containerNoticias.innerHTML += artigoHTML;
    });

    setTimeout(() => { 
        containerNoticias.style.opacity = '1'; 
        containerNoticias.style.transition = 'opacity 0.4s ease'; 
    }, 50);
}

function renderizarPaginacao() {
    if (!containerPaginacao) return;
    
    containerPaginacao.innerHTML = ''; 
    
    let totalPaginas = Math.ceil(bancoDeNoticias.length / NOTICIAS_POR_PAGINA);
    if (totalPaginas > LIMITE_MAXIMO_PAGINAS) totalPaginas = LIMITE_MAXIMO_PAGINAS;
    
    // Se só tiver 1 página (ou menos de 10 notícias), não mostra os botões
    if (totalPaginas <= 1) return; 

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.classList.add('btn-runa');
        if (i === paginaAtual) btn.classList.add('ativo');
        btn.innerText = i;

        btn.addEventListener('click', () => {
            if (paginaAtual !== i) {
                paginaAtual = i;
                renderizarNoticias(paginaAtual);
                renderizarPaginacao(); 
                document.querySelector('.LastNews').scrollIntoView({ behavior: 'smooth' });
            }
        });

        containerPaginacao.appendChild(btn);
    }
}

// ==========================================
// INICIALIZAÇÃO DA FORJA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarNoticias(paginaAtual);
    renderizarPaginacao();
});