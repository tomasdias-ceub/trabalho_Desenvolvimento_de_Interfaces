# 👟 PassoCerto

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Trebuchet+MS&weight=700&size=38&pause=1100&color=F28C28&center=true&vCenter=true&width=760&lines=PassoCerto;Encontre+o+t%C3%AAnis+ideal+para+seu+jogo!" alt="PassoCerto — Encontre o tênis ideal para seu jogo">
</p>

<p align="center">
  <strong>O tênis certo faz diferença em cada movimento.</strong><br>
  Uma experiência de recomendação de calçados esportivos baseada na modalidade praticada e nas características de cada modelo.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/projeto-acad%C3%AAmico-24345B?style=for-the-badge" alt="Projeto acadêmico">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-F28C28?style=for-the-badge" alt="Em desenvolvimento">
  <img src="https://img.shields.io/badge/vers%C3%A3o-1.0-24345B?style=for-the-badge" alt="Versão 1.0">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-como-funciona">Como funciona</a> •
  <a href="#-critérios-de-avaliação">Critérios</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Executar</a>
</p>

---

## 👟 Sobre o projeto

**PassoCerto** é um site desenvolvido para ajudar pessoas a encontrar modelos de tênis mais adequados à modalidade esportiva que praticam.

A proposta é tornar a escolha de um calçado esportivo mais simples: em vez de comparar diversos modelos sem saber o que observar, o usuário pode consultar recomendações organizadas por compatibilidade e conhecer as características de cada tênis.

O projeto considera modalidades como:

- 🏐 Vôlei
- 🏀 Basquete
- 🤾 Handebol
- 🏸 Badminton

Cada modelo cadastrado possui informações sobre os esportes para os quais é indicado e notas de características importantes para o desempenho.

## 🎯 Objetivos

- Facilitar a escolha de tênis esportivos.
- Apresentar modelos compatíveis com diferentes modalidades.
- Comparar características dos calçados de maneira visual.
- Organizar recomendações por nível de compatibilidade.
- Ajudar o usuário a entender por que determinado modelo pode ser uma boa opção.
- Oferecer uma interface simples, intuitiva e agradável.

## ⚙️ Como funciona

O PassoCerto utiliza informações cadastradas sobre os modelos de tênis para apresentar recomendações ao usuário.

1. **Escolha da modalidade:** o usuário informa o esporte de interesse.
2. **Análise dos modelos:** o sistema considera os tênis cadastrados e suas modalidades indicadas.
3. **Comparação:** as características dos modelos são apresentadas em notas de 1 a 5.
4. **Classificação:** os resultados são organizados por compatibilidade.
5. **Detalhes:** o usuário pode consultar informações adicionais de cada recomendação.

## 📊 Critérios de avaliação

Os modelos são descritos por cinco características, com notas de **1 a 5**:

| Critério | O que representa |
|---|---|
| **Amortecimento** | Capacidade de absorver impactos durante os movimentos. |
| **Estabilidade lateral** | Suporte e firmeza em deslocamentos laterais. |
| **Tração** | Aderência do solado à superfície de jogo. |
| **Leveza** | Sensação de peso do calçado durante o uso. |
| **Durabilidade** | Resistência do tênis ao desgaste. |

As notas são estimativas didáticas do projeto acadêmico, não medições laboratoriais ou garantias de desempenho.

## 🏆 Recomendações e compatibilidade

Os resultados são apresentados em cartões que permitem visualizar:

- Nome do modelo.
- Modalidade principal e outros esportes indicados.
- Percentual de compatibilidade.
- Notas individuais dos cinco critérios.
- Indicador visual de cada nota.
- Acesso à opção **Ver detalhes**.
- Posição do modelo no resultado, com destaque para a melhor escolha.

## 👟 Modelos cadastrados

Entre os modelos presentes no código estão:

- Mizuno Wave Lightning Z
- Asics Sky Elite FF
- Asics Gel-Rocket
- Mizuno Wave Momentum
- Nike G.T. Cut
- Nike LeBron Witness
- Curry Flow (Under Armour)
- Adidas Harden Vol.
- Nike Precision

A lista pode crescer conforme novos modelos e informações forem adicionados ao cadastro.

## 🛠️ Tecnologias

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,vscode,git,github&perline=6" alt="HTML, CSS, JavaScript, VS Code, Git e GitHub">
</p>

| Tecnologia | Utilização no projeto |
|---|---|
| **HTML5** | Estrutura e organização do conteúdo do site. |
| **CSS3** | Aparência, layout, cartões, indicadores e responsividade. |
| **JavaScript** | Cadastro dos tênis, lógica de recomendação e interações. |
| **Visual Studio Code** | Ambiente utilizado no desenvolvimento. |
| **Live Server** | Execução local e atualização da página durante o desenvolvimento. |
| **Git e GitHub** | Versionamento e hospedagem do código. |

## 📁 Estrutura do projeto

```text
DESENVOLVIMENTO DE INTERFACES/
├── img/
│   ├── asics-gel-rocket.jpg
│   ├── asics-sky-elite-ff.jpg
│   ├── mizuno-wave-lightning-z.jpg
│   └── mizuno-wave-momentum.jpg
├── index.html
├── script.js
├── style.css
└── README.md
```

> A pasta `img` armazena as fotografias dos tênis. Os nomes dos arquivos precisam corresponder aos caminhos informados na propriedade `imagem` dos objetos cadastrados em `script.js`.

## 💻 Como executar

### Pré-requisitos

- Um navegador atualizado.
- [Visual Studio Code](https://code.visualstudio.com/).
- Extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço HTTPS do repositório do PassoCerto.

### 2. Abra a pasta no VS Code

Abra o Visual Studio Code e selecione **Arquivo → Abrir Pasta**. Escolha a pasta do projeto.

### 3. Execute com Live Server

1. Abra o arquivo `index.html`.
2. Clique com o botão direito dentro do editor.
3. Selecione **Open with Live Server**.
4. O site será aberto no navegador.

## 🖼️ Como adicionar imagens dos tênis

1. Coloque a imagem dentro da pasta `img`.
2. Confira o nome e a extensão do arquivo.
3. Localize o objeto correspondente no array `tenis`, em `script.js`.
4. Informe o caminho correto na propriedade `imagem`.

Exemplo:

```javascript
{
  nome: 'Nome do modelo',
  usos: ['volei', 'handebol'],
  notas: [4, 3, 5, 4, 3],
  imagem: 'img/nome-do-modelo.jpg'
},
```

O caminho e o nome do arquivo devem corresponder exatamente ao arquivo existente na pasta.

## 🚧 Estado do projeto

O PassoCerto está em desenvolvimento acadêmico. Sugestões de evolução:

- [ ] Ampliar o catálogo de tênis e fotografias.
- [ ] Revisar e enriquecer as informações de cada modelo.
- [ ] Aprimorar a experiência de consulta dos detalhes.
- [ ] Melhorar a experiência em dispositivos móveis.
- [ ] Revisar os critérios e a lógica de compatibilidade.
- [ ] Incluir novas modalidades esportivas.

## ⚠️ Observação importante

As recomendações e notas do PassoCerto têm finalidade informativa e didática. A compatibilidade exibida é calculada a partir dos dados cadastrados no projeto e não substitui a avaliação individual de um profissional ou a experimentação do calçado.

## 🤝 Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração.
3. Realize as modificações.
4. Envie um Pull Request descrevendo o que foi feito.

## 📄 Licença

Consulte o arquivo `LICENSE` do repositório para verificar as condições de uso e distribuição do projeto. Caso ainda não exista uma licença definida, ela poderá ser adicionada posteriormente.

---

<p align="center">
  <strong>👟 PassoCerto</strong><br>
  <em>O próximo passo para escolher melhor começa aqui.</em><br><br>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:24345B,100:F28C28&height=120&section=footer" alt="Rodapé decorativo azul-marinho e laranja">
  <sub>Desenvolvido como projeto acadêmico de Desenvolvimento de Interfaces.</sub>
</p>
