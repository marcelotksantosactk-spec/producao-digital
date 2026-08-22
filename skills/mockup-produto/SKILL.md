---
name: mockup-produto
description: Cria mockups do produto (notebook, tablet, celular, capa de PDF/ebook impresso) usando material real do produto, para uso em landing pages e criativos de anuncio.
---

# Objetivo

Mostrar visualmente como e o produto entregue (PDF, apostila, ebook) atraves de mockups realistas, usando paginas e telas reais do material - nunca conteudo generico ou fake.

# Pre-requisito

- Material do produto ja finalizado ou em versao avancada o suficiente para servir de conteudo real no mockup (skill resumo-ilustrado, mapa-mental ou apostila).

# Entradas

- Paginas/telas reais do material, em `produtos/<produto>/materiais/` ou `produtos/<produto>/imagens/`.
- `brand/identidade.md` para o estilo visual geral (o mockup em si e neutro, mas selos, badges e overlays seguem a marca).

# Processo

1. Reunir as paginas ou telas reais do material que melhor representam o produto (capa, uma pagina de exemplo rica em elementos visuais, etc.).
2. Escolher o conjunto de dispositivos adequado ao formato do produto (ex. combo digital: notebook + tablet + celular empilhados; ebook: capa 3D; apostila fisica: mockup de livro impresso).
3. Compor o mockup com o conteudo real visivel e legivel - nunca usar lorem ipsum ou paginas em branco.
4. Adicionar badges/overlays (ex. nome do combo, selo de bonus) usando as cores de `brand/cores.md`, quando fizer sentido para a peca.
5. Gerar variacoes de proporcao conforme o uso (hero de landing page, post de rede social, thumbnail de anuncio).
6. Exportar em alta resolucao para landing page/impressao e em versao comprimida para uso em anuncios.

# Regras

- Nunca usar um mockup generico com conteudo falso quando ja existe material real do produto disponivel.
- O conteudo mostrado no mockup precisa ser fiel ao que o comprador realmente recebe - nao exagerar nem embelezar o conteudo real.
- Manter o mesmo estilo de dispositivo/mockup entre as pecas de um mesmo produto, para consistencia visual.
- Se o material do produto ainda nao existir ou estiver incompleto demais para gerar um mockup fiel, sinalizar isso em vez de inventar conteudo de preenchimento.

# Saida

Arquivos de imagem de mockup, salvos em `produtos/<produto>/mockups/`, prontos para uso pela skill landing-page e em criativos de anuncio.
