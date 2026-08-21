---
name: copy-vendas
description: Gera a copy de vendas de um produto (headline, beneficios, objecoes, prova social, oferta, CTA) para alimentar a skill landing-page. Nao gera a pagina em si, so o texto.
---

# Objetivo

Produzir o texto de vendas completo de um produto, para que a skill `landing-page` monte a pagina em cima de uma copy ja pronta - em vez do construtor de pagina "inventar" a copy.

# Entradas

- `briefing.md` do produto (em `produtos/<produto>/briefing.md`): o que e o produto, para quem, preco, formato de entrega.
- `brand/linguagem.md` para o tom de voz.

# Processo

1. Analisar o produto: o que ele entrega, formato, diferencial.
2. Analisar a oferta: preco, bonus, garantia, prazo/urgencia real (nunca fabricada).
3. Analisar o publico: dor principal, nivel de consciencia sobre o problema.
4. Escrever a headline (a promessa central, em uma frase).
5. Escrever a subheadline (complementa a headline com um beneficio ou prova).
6. Listar os beneficios (o que a pessoa ganha, nao so o que o produto "tem").
7. Antecipar e responder as objecoes mais comuns ("nao tenho tempo", "ja tentei outro material e nao funcionou", etc.).
8. Reunir prova social (depoimentos, resultados, numeros reais - nunca inventados).
9. Descrever a oferta de forma clara (o que esta incluso, preco, forma de pagamento).
10. Escrever a garantia, se houver.
11. Escrever o CTA principal (especifico, nao generico).
12. Montar o FAQ com as duvidas mais frequentes sobre o produto.
13. Sinalizar onde a urgencia/escassez, se usada, precisa ser real (vagas limitadas de verdade, prazo real).

# Regras

- Nunca prometer resultado garantido (ex. "aprovacao garantida").
- Nunca inventar depoimento, numero de alunos ou resultado - so usar prova social real fornecida pelo usuario.
- Falar do problema antes da solucao (ver `brand/linguagem.md`).
- CTA sempre especifico e ligado ao beneficio, nunca generico ("clique aqui").
- Escassez/urgencia so pode ser usada se for real.

# Saida

Um documento de copy estruturado (headline, subheadline, beneficios, objecoes, prova social, oferta, garantia, CTA, FAQ) pronto para a skill `landing-page` usar.
