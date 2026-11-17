/* =========================================================
   PASSOCERTO - script.js
   Índice:
   1. Dados dos esportes e posições
   2. Dados dos tênis (AQUI você coloca as fotos)
   3. Funções de cálculo e de montagem das telas
   4. Eventos (abas, carrossel, busca)
   5. Acessibilidade e tema claro/escuro
   6. Login
   7. Formulário de contato
   ========================================================= */

// Atalho para document.querySelector
function $(seletor) {
  return document.querySelector(seletor);
}

// Funções simples para guardar dados no navegador (localStorage)
function guardar(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch (erro) { /* ignora se não puder salvar */ }
}
function ler(chave) {
  try { return localStorage.getItem(chave); } catch (erro) { return null; }
}
function apagar(chave) {
  try { localStorage.removeItem(chave); } catch (erro) { /* ignora */ }
}

/* =========================================================
   1. ESPORTES E POSIÇÕES
   "pesos" = o que a posição exige do tênis, de 1 (pouco) a 5 (muito),
   sempre nesta ordem:
   [amortecimento, estabilidade lateral, tração, leveza, durabilidade]
   Para criar uma posição nova, copie uma linha e mude os valores.
   ========================================================= */
const caracteristicas = ['Amortecimento', 'Estabilidade lateral', 'Tração', 'Leveza', 'Durabilidade'];

const esportes = {
  volei: {
    nome: 'Vôlei',
    posicoes: [
      { nome: 'Levantador', descricao: 'Desloca-se em passos curtos sob a bola, com apoio lateral constante e saltos moderados.', pesos: [2, 3, 4, 5, 2] },
      { nome: 'Ponteiro', descricao: 'Recebe o saque e ataca da entrada de rede: deslocamento lateral e salto.', pesos: [4, 4, 4, 4, 3] },
      { nome: 'Oposto', descricao: 'Ataca da saída de rede com saltos explosivos repetidos e bloqueia: impacto alto na aterrissagem.', pesos: [5, 4, 3, 3, 4] },
      { nome: 'Central', descricao: 'Bloqueia e ataca de primeira bola, com saltos seguidos e passadas rápidas junto à rede.', pesos: [5, 3, 3, 4, 3] },
      { nome: 'Líbero', descricao: 'Defesa baixa, mergulhos e deslizes: precisa de leveza e tração para reagir.', pesos: [2, 4, 5, 5, 3] }
    ]
  },
  basquete: {
    nome: 'Basquete',
    posicoes: [
      { nome: 'Armador (1)', descricao: 'Conduz o time: dribles curtos, arrancadas e freadas bruscas. Tração e leveza vêm primeiro.', pesos: [2, 3, 5, 5, 3] },
      { nome: 'Ala-armador (2)', descricao: 'Arremessa em movimento e corta para a cesta: mudança de direção e salto de arremesso.', pesos: [3, 3, 5, 4, 3] },
      { nome: 'Ala (3)', descricao: 'Faz de tudo: corre a quadra, ataca a cesta e marca vários tipos de jogador. Perfil equilibrado.', pesos: [4, 4, 4, 4, 3] },
      { nome: 'Ala-pivô (4)', descricao: 'Joga no garrafão e abre para o meio da quadra: contato, rebotes e apoio firme.', pesos: [4, 5, 4, 3, 4] },
      { nome: 'Pivô (5)', descricao: 'Ocupa o garrafão, bloqueia, pega rebotes e finaliza perto da cesta: impacto e peso altos.', pesos: [5, 5, 3, 2, 4] }
    ]
  },
  futebol: {
    nome: 'Futebol',
    posicoes: [
      { nome: 'Goleiro', descricao: 'Saltos laterais e arrancadas curtas, com muito apoio e firmeza no chão.', pesos: [3, 4, 4, 2, 4] },
      { nome: 'Zagueiro', descricao: 'Marcação, disputa de bola e desarmes: firmeza e resistência.', pesos: [2, 4, 4, 2, 5] },
      { nome: 'Lateral', descricao: 'Percorre o corredor inteiro, apoia e volta para marcar: leveza e resistência.', pesos: [2, 3, 4, 5, 3] },
      { nome: 'Volante', descricao: 'Protege a defesa e distribui o jogo, com muito contato e giros curtos.', pesos: [2, 4, 4, 3, 4] },
      { nome: 'Meia', descricao: 'Cria o jogo: controle de bola, passes e giros rápidos.', pesos: [2, 3, 4, 4, 3] },
      { nome: 'Ponta', descricao: 'Arrancadas e dribles em velocidade nas pontas: leveza e tração máximas.', pesos: [1, 3, 5, 5, 2] },
      { nome: 'Centroavante', descricao: 'Segura a bola de costas, disputa de corpo e finaliza.', pesos: [2, 4, 4, 3, 3] }
    ]
  },
  futsal: {
    nome: 'Futsal',
    posicoes: [
      { nome: 'Goleiro', descricao: 'Deslizes, saídas e reposições rápidas na quadra.', pesos: [2, 4, 4, 3, 4] },
      { nome: 'Fixo', descricao: 'Marca e protege a defesa em quadra dura, com desgaste alto na sola.', pesos: [2, 5, 4, 2, 5] },
      { nome: 'Ala', descricao: 'Corre a quadra toda com mudanças de ritmo constantes.', pesos: [2, 4, 4, 5, 4] },
      { nome: 'Pivô', descricao: 'Segura a bola de costas para o gol, com apoio forte e tração.', pesos: [2, 5, 4, 3, 4] }
    ]
  },
  handebol: {
    nome: 'Handebol',
    posicoes: [
      { nome: 'Goleiro', descricao: 'Saltos amplos e reação rápida na pequena área.', pesos: [3, 4, 4, 3, 3] },
      { nome: 'Armador central', descricao: 'Organiza o jogo com mudanças de direção bruscas e passes em velocidade.', pesos: [3, 4, 5, 4, 3] },
      { nome: 'Armador lateral', descricao: 'Arremessa em suspensão de longe: salto forte e aterrissagem de impacto.', pesos: [4, 4, 4, 3, 3] },
      { nome: 'Pivô', descricao: 'Contato intenso contra a defesa adversária, com apoio e impacto altos.', pesos: [4, 5, 4, 2, 4] },
      { nome: 'Ponta', descricao: 'Corre pelas laterais e salta em ângulo: tração e leveza.', pesos: [3, 3, 5, 5, 3] }
    ]
  },
  badminton: {
    nome: 'Badminton',
    posicoes: [
      { nome: 'Simples', descricao: 'Cobre a quadra toda com lunges e saltos curtos: leveza e estabilidade.', pesos: [3, 4, 4, 5, 3] },
      { nome: 'Duplas (fundo)', descricao: 'Ataca com smashes de salto e cobre a parte de trás da quadra.', pesos: [4, 4, 3, 4, 3] },
      { nome: 'Duplas (rede)', descricao: 'Trocas rápidas de posição e golpes na rede, com tração para frear.', pesos: [2, 3, 5, 5, 3] }
    ]
  }
};

/* =========================================================
   2. TÊNIS  ->  ONDE ADICIONAR AS FOTOS
   ---------------------------------------------------------
   Cada tênis tem:
   - nome:    nome mostrado no cartão
   - usos:    esportes em que ele serve (o PRIMEIRO é o esporte principal).
              Assim um tênis de basquete também aparece no vôlei.
   - notas:   [amortecimento, estabilidade, tração, leveza, durabilidade] de 1 a 5
   - imagem:  caminho da foto  <<<<<<<<<< AQUI ESTÁ A FOTO

   COMO COLOCAR AS FOTOS (passo a passo):
   1) Crie uma pasta chamada  img  na mesma pasta do index.html
   2) Baixe uma foto de cada tênis (de preferência com fundo branco)
      e salve dentro da pasta img
   3) O nome do arquivo deve ser IGUAL ao que está em "imagem".
      Exemplo: a linha do Nike G.T. Cut usa  'img/nike-gt-cut.jpg'
      então salve a foto como  nike-gt-cut.jpg  dentro de img
   4) Se a sua foto tiver outro nome (ou for .png), é só mudar o texto
      do campo "imagem" daquela linha. Exemplo: imagem: 'img/gt-cut.png'
   5) Para adicionar um tênis novo, copie uma linha, mude os dados
      e não esqueça da vírgula no final
   6) Se a foto não for encontrada, o site mostra um aviso no lugar dela
      (isso ajuda a descobrir qual arquivo está faltando)
   Guarde o link e a licença de cada foto para citar nas referências.
   ========================================================= */
const tenis = [
  { nome: 'Mizuno Wave Lightning Z', usos: ['volei', 'handebol'], notas: [4, 3, 4, 5, 3], imagem: 'img/mizuno-wave-lightning-z.jpg' },
  { nome: 'Asics Sky Elite FF', usos: ['volei', 'handebol'], notas: [4, 4, 4, 4, 3], imagem: 'img/asics-sky-elite-ff.jpg' },
  { nome: 'Asics Gel-Rocket', usos: ['volei', 'handebol', 'badminton'], notas: [3, 4, 3, 3, 4], imagem: 'img/asics-gel-rocket.jpg' },
  { nome: 'Mizuno Wave Momentum', usos: ['volei', 'handebol', 'basquete'], notas: [4, 5, 4, 3, 4], imagem: 'img/mizuno-wave-momentum.jpg' },

  { nome: 'Nike G.T. Cut', usos: ['basquete', 'volei'], notas: [4, 4, 5, 4, 3], imagem: 'img/nike-gt-cut.jpg' },
  { nome: 'Nike LeBron Witness', usos: ['basquete', 'volei'], notas: [5, 5, 4, 2, 4], imagem: 'img/nike-lebron-witness.jpg' },
  { nome: 'Curry Flow (Under Armour)', usos: ['basquete', 'volei'], notas: [3, 4, 5, 5, 3], imagem: 'img/curry-flow.jpg' },
  { nome: 'Adidas Harden Vol.', usos: ['basquete', 'volei', 'handebol'], notas: [4, 4, 4, 3, 4], imagem: 'img/adidas-harden-vol.jpg' },
  { nome: 'Nike Precision', usos: ['basquete', 'volei'], notas: [3, 3, 4, 4, 3], imagem: 'img/nike-precision.jpg' },

  { nome: 'Mizuno Wave Stealth', usos: ['handebol', 'volei'], notas: [3, 5, 5, 3, 4], imagem: 'img/mizuno-wave-stealth.jpg' },
  { nome: 'Asics Gel-Blast', usos: ['handebol', 'volei', 'badminton'], notas: [3, 4, 4, 4, 3], imagem: 'img/asics-gel-blast.jpg' },
  { nome: 'Adidas Stabil', usos: ['handebol', 'volei'], notas: [4, 5, 4, 3, 4], imagem: 'img/adidas-stabil.jpg' },
  { nome: 'Asics Gel-Task', usos: ['handebol', 'volei', 'badminton'], notas: [3, 4, 4, 3, 4], imagem: 'img/asics-gel-task.jpg' },

  { nome: 'Yonex Power Cushion 65 Z', usos: ['badminton', 'volei'], notas: [4, 4, 4, 4, 3], imagem: 'img/yonex-power-cushion-65z.jpg' },
  { nome: 'Yonex Aerus', usos: ['badminton'], notas: [2, 3, 4, 5, 2], imagem: 'img/yonex-aerus.jpg' },
  { nome: 'Victor P9200', usos: ['badminton', 'handebol'], notas: [3, 5, 4, 3, 4], imagem: 'img/victor-p9200.jpg' },

  { nome: 'Nike Mercurial', usos: ['futebol'], notas: [2, 2, 4, 5, 3], imagem: 'img/nike-mercurial.jpg' },
  { nome: 'Adidas F50', usos: ['futebol'], notas: [1, 2, 4, 5, 2], imagem: 'img/adidas-f50.jpg' },
  { nome: 'Adidas Predator', usos: ['futebol'], notas: [3, 3, 4, 3, 4], imagem: 'img/adidas-predator.jpg' },
  { nome: 'Nike Tiempo', usos: ['futebol'], notas: [3, 4, 3, 3, 5], imagem: 'img/nike-tiempo.jpg' },
  { nome: 'Puma Future', usos: ['futebol'], notas: [3, 3, 4, 4, 3], imagem: 'img/puma-future.jpg' },
  { nome: 'Adidas Copa Pure', usos: ['futebol'], notas: [2, 4, 3, 4, 4], imagem: 'img/adidas-copa-pure.jpg' },

  { nome: 'Nike Tiempo Legend (Futsal)', usos: ['futsal'], notas: [2, 4, 4, 3, 5], imagem: 'img/nike-tiempo-legend-futsal.jpg' },
  { nome: 'Adidas Top Sala', usos: ['futsal'], notas: [2, 4, 4, 3, 4], imagem: 'img/adidas-top-sala.jpg' },
  { nome: 'Nike Mercurial Vapor (Futsal)', usos: ['futsal'], notas: [2, 3, 4, 5, 3], imagem: 'img/nike-mercurial-vapor-futsal.jpg' },
  { nome: 'Adidas Copa Pure (Futsal)', usos: ['futsal'], notas: [2, 4, 3, 4, 4], imagem: 'img/adidas-copa-pure-futsal.jpg' }
];

/* =========================================================
   3. FUNÇÕES DE CÁLCULO E DE MONTAGEM DAS TELAS
   ========================================================= */

// Esporte e posição escolhidos no momento
let esporteAtual = 'volei';
let posicaoAtual = 0;

// Calcula a compatibilidade (0 a 100) entre o que a posição exige e o que o tênis oferece.
// Faltar o que a posição pede tira ponto cheio; sobrar tira só metade.
// Características mais importantes para a posição pesam mais.
function calcularCompatibilidade(pesos, notas) {
  let perda = 0;
  let maximo = 0;
  for (let i = 0; i < pesos.length; i++) {
    const diferenca = pesos[i] - notas[i];
    if (diferenca > 0) {
      perda += pesos[i] * diferenca;        // faltou
    } else {
      perda += pesos[i] * (-diferenca) * 0.5; // sobrou
    }
    maximo += pesos[i] * 4;
  }
  const nota = Math.round(100 - (100 * perda) / maximo);
  return Math.max(0, nota);
}

// Monta as barrinhas (uma para cada característica)
function montarBarras(valores) {
  let html = '';
  for (let i = 0; i < caracteristicas.length; i++) {
    html += `
      <div class="barra">
        <span>${caracteristicas[i]}</span>
        <div class="trilho" aria-hidden="true"><i style="width:${valores[i] * 20}%"></i></div>
        <b>${valores[i]}/5</b>
      </div>`;
  }
  return html;
}

// Monta as abas de esportes
function montarAbas() {
  let html = '';
  for (const chave in esportes) {
    const ativo = chave === esporteAtual;
    html += `<button role="tab" id="aba-${chave}" data-esporte="${chave}" aria-selected="${ativo}" tabindex="${ativo ? 0 : -1}">${esportes[chave].nome}</button>`;
  }
  $('#abas').innerHTML = html;
}

// Monta os botões de posições do esporte escolhido
function montarPosicoes() {
  const lista = esportes[esporteAtual].posicoes;
  let html = '';
  for (let i = 0; i < lista.length; i++) {
    html += `<button type="button" data-posicao="${i}" aria-pressed="${i === posicaoAtual}">${lista[i].nome}</button>`;
  }
  $('#posicoes').innerHTML = html;
}

// Mostra o que a posição exige do tênis
function montarExigencias() {
  const posicao = esportes[esporteAtual].posicoes[posicaoAtual];
  $('#exigencias').innerHTML = `
    <div>
      <h3>${esportes[esporteAtual].nome} · ${posicao.nome}</h3>
      <p>${posicao.descricao}</p>
    </div>
    <div>
      <p style="font-size:.85rem">O que a posição exige do calçado</p>
      ${montarBarras(posicao.pesos)}
    </div>`;
}

// Monta o carrossel com os melhores tênis para a posição
function montarCarrossel() {
  const posicao = esportes[esporteAtual].posicoes[posicaoAtual];

  // 1) pega só os tênis que servem para o esporte escolhido
  const lista = tenis.filter(function (t) {
    return t.usos.includes(esporteAtual);
  });

  // 2) calcula a compatibilidade de cada um
  const resultado = lista.map(function (t) {
    return { tenis: t, nota: calcularCompatibilidade(posicao.pesos, t.notas) };
  });

  // 3) ordena do mais compatível para o menos e fica com os 6 primeiros
  resultado.sort(function (a, b) { return b.nota - a.nota; });
  const melhores = resultado.slice(0, 6);

  // 4) prioridades da posição (as 2 maiores notas), usadas nos detalhes
  const ordem = [0, 1, 2, 3, 4].sort(function (a, b) { return posicao.pesos[b] - posicao.pesos[a]; });
  const p1 = ordem[0];
  const p2 = ordem[1];

  let html = '';
  for (let i = 0; i < melhores.length; i++) {
    const t = melhores[i].tenis;
    const nota = melhores[i].nota;

    // ponto fraco = menor nota do tênis
    let fraco = 0;
    for (let k = 1; k < 5; k++) {
      if (t.notas[k] < t.notas[fraco]) { fraco = k; }
    }

    // texto "Modelo de ... também serve em ..."
    let uso = '';
    const outros = t.usos.filter(function (u) { return u !== esporteAtual; }).map(function (u) { return esportes[u].nome; });
    if (t.usos[0] === esporteAtual) {
      uso = 'Modelo de ' + esportes[esporteAtual].nome;
      if (outros.length > 0) { uso += ' · também serve em ' + outros.join(', '); }
    } else {
      uso = 'Modelo de ' + esportes[t.usos[0]].nome + ' · também indicado para ' + esportes[esporteAtual].nome;
    }

    const selo = i === 0 ? '<span class="selo melhor">Melhor escolha</span>' : '<span class="selo">#' + (i + 1) + '</span>';

    html += `
      <article class="cartao" aria-label="${t.nome}">
        <div class="foto">
          <!-- A FOTO VEM DO CAMPO "imagem" DA LISTA tenis (veja o comentário no começo da seção 2) -->
          <img src="${t.imagem}" alt="Tênis ${t.nome}">
          ${selo}
        </div>
        <div class="cartao-corpo">
          <h3>${t.nome}</h3>
          <p class="uso">${uso}</p>
          <div class="nota">${melhores[i].nota}%<small> compatível</small></div>
          <div class="mini-barras">${montarBarras(t.notas)}</div>
          <button class="btn-detalhes" type="button" aria-expanded="false" aria-controls="det-${i}" data-detalhe="det-${i}">Ver detalhes</button>
          <p class="detalhes" id="det-${i}" hidden>
            Prioridades para ${posicao.nome}: <strong>${caracteristicas[p1].toLowerCase()}</strong> (${t.notas[p1]}/5)
            e <strong>${caracteristicas[p2].toLowerCase()}</strong> (${t.notas[p2]}/5).
            Ponto fraco do modelo: ${caracteristicas[fraco].toLowerCase()} (${t.notas[fraco]}/5).
          </p>
        </div>
      </article>`;
  }

  const carrossel = $('#carrossel');
  carrossel.innerHTML = html;
  carrossel.setAttribute('aria-label', 'Tênis para ' + esportes[esporteAtual].nome + ', ' + posicao.nome);
  carrossel.scrollLeft = 0;
}

// Atualiza a tela toda
function atualizarTela() {
  montarAbas();
  montarPosicoes();
  montarExigencias();
  montarCarrossel();
}

/* =========================================================
   4. EVENTOS: ABAS, POSIÇÕES, CARROSSEL E BUSCA
   ========================================================= */

// Clique nas abas de esportes
$('#abas').addEventListener('click', function (evento) {
  const botao = evento.target.closest('[data-esporte]');
  if (botao) {
    esporteAtual = botao.dataset.esporte;
    posicaoAtual = 0;
    atualizarTela();
  }
});

// Setas do teclado nas abas (esquerda e direita)
$('#abas').addEventListener('keydown', function (evento) {
  const chaves = Object.keys(esportes);
  let indice = chaves.indexOf(esporteAtual);
  if (evento.key === 'ArrowRight') { indice = (indice + 1) % chaves.length; }
  else if (evento.key === 'ArrowLeft') { indice = (indice - 1 + chaves.length) % chaves.length; }
  else { return; }
  evento.preventDefault();
  esporteAtual = chaves[indice];
  posicaoAtual = 0;
  atualizarTela();
  $('#aba-' + esporteAtual).focus();
});

// Clique nos botões de posições
$('#posicoes').addEventListener('click', function (evento) {
  const botao = evento.target.closest('[data-posicao]');
  if (botao) {
    posicaoAtual = Number(botao.dataset.posicao);
    atualizarTela();
    $('#posicoes [aria-pressed="true"]').focus();
  }
});

// Botão "Ver detalhes" dos cartões
$('#carrossel').addEventListener('click', function (evento) {
  const botao = evento.target.closest('[data-detalhe]');
  if (botao) {
    const texto = document.getElementById(botao.dataset.detalhe);
    texto.hidden = !texto.hidden;
    botao.setAttribute('aria-expanded', String(!texto.hidden));
    botao.textContent = texto.hidden ? 'Ver detalhes' : 'Ocultar detalhes';
  }
});

// Se a foto não for encontrada, mostra um aviso no lugar (evento "error" não borbulha, por isso true)
$('#carrossel').addEventListener('error', function (evento) {
  const img = evento.target;
  if (img.tagName === 'IMG') {
    const aviso = document.createElement('p');
    aviso.className = 'sem-foto';
    aviso.innerHTML = 'Adicione a foto em<br><code>' + img.getAttribute('src') + '</code>';
    img.replaceWith(aviso);
  }
}, true);

// Botões anterior/próximo do carrossel
$('#btn-anterior').addEventListener('click', function () {
  $('#carrossel').scrollBy({ left: -$('#carrossel').clientWidth * 0.8, behavior: 'smooth' });
});
$('#btn-proximo').addEventListener('click', function () {
  $('#carrossel').scrollBy({ left: $('#carrossel').clientWidth * 0.8, behavior: 'smooth' });
});

// ----- Busca -----
// Lista de sugestões (esporte — posição)
const sugestoes = [];
for (const chave in esportes) {
  esportes[chave].posicoes.forEach(function (p, indice) {
    sugestoes.push({ texto: esportes[chave].nome + ' — ' + p.nome, esporte: chave, posicao: indice });
  });
}
$('#sugestoes').innerHTML = sugestoes.map(function (s) { return '<option value="' + s.texto + '">'; }).join('');

// Tira acentos e maiúsculas para a busca encontrar "libero" e "Líbero"
function limpar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function buscar() {
  const termo = limpar($('#campo-busca').value.trim());
  if (termo === '') { return; }

  // procura primeiro por esporte/posição
  let achado = sugestoes.find(function (s) { return limpar(s.texto).includes(termo); });

  // se não achou, procura pelo nome de um tênis
  if (!achado) {
    const t = tenis.find(function (item) { return limpar(item.nome).includes(termo); });
    if (t) { achado = { esporte: t.usos[0], posicao: 0 }; }
  }

  if (achado) {
    esporteAtual = achado.esporte;
    posicaoAtual = achado.posicao;
    atualizarTela();
    $('#msg-busca').textContent = 'Mostrando: ' + esportes[esporteAtual].nome + ' · ' + esportes[esporteAtual].posicoes[posicaoAtual].nome;
    document.getElementById('buscar').scrollIntoView();
  } else {
    $('#msg-busca').textContent = 'Nada encontrado para “' + $('#campo-busca').value + '”. Tente outro esporte, posição ou modelo.';
  }
}

$('#form-busca').addEventListener('submit', function (evento) {
  evento.preventDefault();
  buscar();
});
$('#campo-busca').addEventListener('change', buscar);

/* =========================================================
   5. ACESSIBILIDADE E TEMA CLARO/ESCURO
   ========================================================= */

// Preferências do usuário (ficam salvas no navegador)
const prefs = {
  tema: 'claro',     // 'claro' ou 'escuro'
  fonte: 100,        // tamanho do texto em %
  contraste: false,  // alto contraste
  links: false       // sublinhar links
};

// Aplica as preferências na página
function aplicarPrefs() {
  const raiz = document.documentElement;
  raiz.setAttribute('data-tema', prefs.tema);       // o CSS usa este atributo
  raiz.style.fontSize = prefs.fonte + '%';          // todo o site usa "rem"
  raiz.classList.toggle('alto-contraste', prefs.contraste);
  raiz.classList.toggle('links-sublinhados', prefs.links);

  // texto do botão do cabeçalho
  $('#btn-tema').textContent = prefs.tema === 'escuro' ? 'Modo claro' : 'Modo escuro';

  // marca qual botão de tema está ativo no painel
  document.querySelectorAll('#painel-acess [data-tema]').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.tema === prefs.tema));
  });
  $('#chk-contraste').checked = prefs.contraste;
  $('#chk-links').checked = prefs.links;

  guardar('prefs', JSON.stringify(prefs));
}

// Lê as preferências salvas (se existirem) quando a página abre
function carregarPrefs() {
  const salvo = ler('prefs');
  if (salvo) {
    try {
      Object.assign(prefs, JSON.parse(salvo));
    } catch (erro) { /* se der erro, usa o padrão */ }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    prefs.tema = 'escuro'; // respeita o tema do computador/celular
  }
  aplicarPrefs();
}

// Botão de tema do cabeçalho
$('#btn-tema').addEventListener('click', function () {
  prefs.tema = prefs.tema === 'escuro' ? 'claro' : 'escuro';
  aplicarPrefs();
});

// Abrir e fechar o painel de acessibilidade
$('#btn-acess').addEventListener('click', function () {
  const painel = $('#painel-acess');
  painel.hidden = !painel.hidden;
  $('#btn-acess').setAttribute('aria-expanded', String(!painel.hidden));
});
// A tecla Esc fecha o painel
document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && !$('#painel-acess').hidden) {
    $('#painel-acess').hidden = true;
    $('#btn-acess').setAttribute('aria-expanded', 'false');
    $('#btn-acess').focus();
  }
});

// Botões do painel
$('#painel-acess').addEventListener('click', function (evento) {
  const botao = evento.target.closest('button');
  if (!botao) { return; }

  if (botao.dataset.tema) { prefs.tema = botao.dataset.tema; }

  if (botao.dataset.fonte === 'mais' && prefs.fonte < 150) { prefs.fonte += 12.5; }
  if (botao.dataset.fonte === 'menos' && prefs.fonte > 87.5) { prefs.fonte -= 12.5; }
  if (botao.dataset.fonte === 'normal') { prefs.fonte = 100; }

  if (botao.id === 'btn-restaurar') {
    prefs.tema = 'claro';
    prefs.fonte = 100;
    prefs.contraste = false;
    prefs.links = false;
  }
  aplicarPrefs();
});
$('#chk-contraste').addEventListener('change', function () {
  prefs.contraste = this.checked;
  aplicarPrefs();
});
$('#chk-links').addEventListener('change', function () {
  prefs.links = this.checked;
  aplicarPrefs();
});

/* =========================================================
   6. LOGIN (simulado: não existe servidor)
   ========================================================= */
function atualizarLogin() {
  const usuario = ler('usuario');
  $('#form-login').hidden = !!usuario;
  $('#logado').hidden = !usuario;
  if (usuario) {
    $('#nome-usuario').textContent = usuario;
    $('#saudacao').textContent = 'Olá, ' + usuario;
  } else {
    $('#saudacao').textContent = '';
  }
}

$('#form-login').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const email = $('#login-email').value.trim();
  const senha = $('#login-senha').value;
  const msg = $('#msg-login');

  if (!email.includes('@') || email.length < 5) {
    msg.textContent = 'Digite um e-mail válido.';
    $('#login-email').focus();
  } else if (senha.length < 6) {
    msg.textContent = 'A senha precisa ter pelo menos 6 caracteres.';
    $('#login-senha').focus();
  } else {
    guardar('usuario', email.split('@')[0]); // guarda só o nome, NUNCA a senha
    msg.textContent = '';
    this.reset();
    atualizarLogin();
  }
});

$('#btn-sair').addEventListener('click', function () {
  apagar('usuario');
  atualizarLogin();
});

/* =========================================================
   7. FORMULÁRIO DE CONTATO (simulado)
   ========================================================= */
// Preenche a lista de esportes do formulário
let opcoes = '<option value="">Outro</option>';
for (const chave in esportes) {
  opcoes += '<option>' + esportes[chave].nome + '</option>';
}
$('#c-esporte').innerHTML = opcoes;

$('#form-contato').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const msg = $('#msg-contato');

  // checkValidity() confere os campos "required" e o formato do e-mail
  if (!this.checkValidity()) {
    const campo = this.querySelector(':invalid');
    msg.textContent = 'Preencha corretamente o campo “' + campo.labels[0].textContent + '”.';
    campo.focus();
    return;
  }
  msg.textContent = 'Obrigado, ' + $('#c-nome').value.trim() + '! Mensagem registrada (simulação, sem envio real).';
  this.reset();
});

/* =========================================================
   INÍCIO: o que roda quando a página abre
   ========================================================= */
carregarPrefs();
atualizarLogin();
atualizarTela();
