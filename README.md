[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20877742&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Arthur Emmanuel Oliveira Marinho
- Matricula: 900544
- Proposta de projeto escolhida: Proposta: Temas e Conteúdos Associados - Entidade Principal: Tema: Fitness, Musculação - Entidade Secundária: Conteúdos/Recursos: Dicas e video-aulas incorporadas do Youtube sobre treino e dieta. - Exemplos Temáticos: Vídeos, cursos, posts, categorias e dicas.
- Breve descrição sobre seu projeto: Fit Web – Training Hub é um site pessoal que reúne conteúdos de musculação (vídeo-aulas e artigos) para estudo e motivação. A página inicial traz uma chamada clara — “Seja seu melhor” — com botão de ação, seguida de Posts em Destaque, Lista de Posts e Categorias (Força, Hipertrofia, Mobilidade, Nutrição e Planejamento), facilitando o acesso rápido ao que o usuário procura. O visual usa tema escuro com destaques em amarelo e vermelho, reforçando energia e contraste, e cartões leves que priorizam títulos e imagens. Há pequenos efeitos de interação (hover) para dar feedback ao usuário e uma citação motivacional que encerra a página. O layout é responsivo, com navegação simples e tipografia legível, visando oferecer uma experiência direta, agradável e motivadora.

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>

## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Plano de Mobilidade Urbana",
    "descricao": "Novo plano do transporte público.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  }
]
```