# Hackathon - Portal de Periódicos da CAPES

Este projeto se trata da solução desenvolvida pela equipe Cestari para o desafio proposto no **Hackathon do Portal de Periódicos da CAPES**.

## Equipe Cestari 🙆‍♀️🙆‍♂️🙆

- Ana Clara Madureira Marques
- Kaleb Isaias Souza Carvalho
- Raí de Oliveira Cajé

## Desafio proposto 🎯

> Desenvolvimento de soluções que melhorem a experiência do usuário na plataforma do Portal de Periódicos da CAPES, integrando a inteligência artificial (IA) e a automação na otimização tanto de buscas quanto de publicações de pesquisas científicas, contribuindo para evolução da plataforma e oferecendo uma experiência de usuário mais fluida, intuitiva e personalizada.

## Solução desenvolvida 💡

Para superar o desafio proposto, a Equipe Cestari arquitetou uma solução que, de maneira **inovadora**, contempla cada um dos requisitos apresentados e aproveita o que já existe de bom e otimizado no Portal de Periódicos atualmente. O novo Portal de Periódicos proposto por nós apresenta uma experiência de usuário aprimorada, várias implementações de IA e automação por meio de integração a outras plataformas do mundo acadêmico.

A solução proposta se assemelha a uma rede social acadêmica, com funcionalidades como seguir pesquisadores, salvar artigos e recomendações personalizadas. Isso atrai especialmente a geração Z, familiarizada com plataformas sociais, e beneficia pesquisadores em geral ao tornar a interação mais intuitiva e colaborativa, facilitando o acesso a conteúdos relevantes e promovendo o networking acadêmico.

## Instalação e execuação 💻

### Pré-requisitos:

1. Git instalado e configurado
2. Node.js instalado e configurado

### Passo a passo

1. Abra uma janela de terminal e clone o repositório no diretório de sua preferência:

```bash
git clone git@github.com:RaiDeOliveira/portal-periodicos-CAPES.git
```

2. Execute o seguinte comando na mesma janaela para iniciar a aplicação:

```bash
cd portal-periodicos-CAPES/src/web
npm i
npm run dev
```

3. Clique na URL exibida no terminal para acessar a aplicação em seu navegador de preferência.

## Diferenciais 🚀

### Repaginação da home-page

Primeiramente, repaginamos a página inicial do portal. Essa é a primeira página que o usuário visualiza ao acessar o portal. Tornamos ela mais limpa, dando foco somente aos elementos mais importantes para os pesquisadores: a barra de pesquisa, artigos recomendados e informativos. 

Já nessa página, há duas implementações de IA. A primeira refere-se à seção de "Artigos para você", que contém artigos detectados como de interesse para o usuário por um sistema de recomendação com base nos dados de seu perfil (página abordada adiante) e navegação pelo site. A segunda implementação de IA também surge como um sistema de recomendação, na parte inferior da página, com indicação de pesquisadores de interesse para o usuário.

Além disso, essa página também deixa evidente os botões de salvar artigo — os quais permitem que o usuário guarde artigos para ler depois por meio de um acesso rápido — e os botões de seguir pesquisadores, que, em conjunto, oferecem mais insumos para a IA do sistema de recomendação fazer recomendações mais certeiras para o usuário. 

### Nova página de artigo

A página de artigo também foi aprimorada pela equipe Cestari. Essa é a página exibida quando o usuário acessa um artigo científico por meio da busca no portal ou ao clicar em um dos artigos recomendados. Seu design de interface foi aprimorado a fim de tornar a visualização mais limpa e, além disso, houve 2 implementações diferentes de IA

#### Chatbot para artigos específicos

A primeira implementação de IA refere-se ao chatbot que está contido na página de cada um dos artigos da plataforma. Esse chatbot consome informações do arquivo do próprio artigo hospedado no site para responder a perguntas específicas sobre tal artigo ao usuário. Isso permite que o pesquisador poupe tempo para saber se determinado artigo contém informações relevantes para o projeto de pesquisa que este está desenvolvendo no momento.

#### Recomendação de artigos semelhantes

A segunda implementação de IA nesta página está em sua parte inferior e refere-se a um sistema de recomendação de artigos. Ele se baseia em palavras chaves e no conteúdo do próprio artigo que o usuário está visualizando para recomendar outros artigos semelhantes presentes na plataforma através de um gráfico que representa o grau de similaridade temática entre artigos através da distância — isto é, quanto mais perto, mais similar. Isso permite que pesquisadores achem facilmente artigos diferentes sobre um mesmo tema para fundamentar suas pesquisas.

### Página de perfil

Por fim, ao clicar em "Meu Espaço" na barra de navegação superior, o usuário é enchaminhado para seu perfil no portal. Nessa página, há informações básicas sobre sua formação acadêmica, botões de redirecionamento para o perfil do usuário em outras plataformas profissonais/acadêmicas.

Nesta página o usuário também pode ver os artigos que ele salvou (os quais estão separados por pastas criadas pelo próprio usuário), além de pesquisadores que ele seguiu. Isso facilita para que o pesquisador acesse e acompanhe o trabalho de pesquisadores de seu interesse facilmente.

Quando se trata de um perfil alheio (que não pertence ao usuário), a página de perfil não conta com perfis seguidos e artigos salvos, mas sim artigos publicados por esta pessoa. Ademais, nesse caso, também há um botão para seguir o pesquisador ao qual o perfil se refere.
