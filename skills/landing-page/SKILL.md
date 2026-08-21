---
name: landing-page-builder
description: Constroi a landing page (HTML/CSS/JS) de um produto a partir da copy pronta e do padrao de marca. Foco em conversao e responsividade.
---

# Objetivo

Transformar a copy de vendas e o padrao de marca em uma landing page publicavel, otimizada para conversao em mobile e desktop.

# Pre-requisitos

- Copy pronta (skill `copy-vendas`).
- Padrao de marca aplicado (skill `brand-system`).
- Mockups/imagens do produto, se houver (skill `mockup-produto`).

# Processo

1. Analisar o produto e a oferta (a partir do `briefing.md` e da copy).
2. Analisar o publico-alvo (nivel de consciencia, dor principal).
3. Definir a estrutura da pagina (secoes: hero, dor/problema, solucao, beneficios, prova social, oferta, garantia, FAQ, CTA final).
4. Encaixar a copy pronta em cada secao (nao reescrever a copy do zero).
5. Escolher e posicionar as imagens/mockups reais do produto (nunca imagem generica de banco, ver `brand/identidade.md`).
6. Criar o HTML semantico da pagina.
7. Criar o CSS aplicando cores e tipografia de `brand/`.
8. Criar o JavaScript minimo necessario (menu mobile, FAQ expansivel, formulario, tracking).
9. Adaptar o layout para mobile-first e testar em diferentes tamanhos de tela.
10. Testar todos os links, botoes e formularios.
11. Otimizar velocidade de carregamento (imagens comprimidas, CSS/JS minificados).
12. Rodar a skill de revisao (`landing-page-review`) antes de publicar.
13. Publicar (ex. via GitHub + Vercel).

# Regras

- CTA sempre na cor de destaque (accent) definida em `brand/cores.md`.
- Mobile-first: testar sempre a versao mobile antes da desktop.
- Nunca usar imagem generica quando houver material real do produto disponivel.
- Pagina precisa carregar rapido - evitar bibliotecas pesadas desnecessarias.
- Formularios e captura de dados devem ser claros sobre o que sera feito com a informacao.

# Saida

Uma landing page completa (HTML/CSS/JS), responsiva, pronta para revisao e publicacao, salva em `landing-pages/<produto>/` ou em `produtos/<produto>/landing-page/`.
