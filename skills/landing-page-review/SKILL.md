---
name: landing-page-review
description: Revisa uma landing page antes de publicar - confere copy, marca, responsividade, links e ausencia de dados fabricados. Deve ser feita por um processo separado de quem construiu a pagina.
---

# Objetivo

Garantir que uma landing page esta correta, consistente com a marca e o briefing do produto, e livre de qualquer dado inventado (depoimento, numero, garantia) antes de ir ao ar.

# Quando usar

Sempre depois da skill `landing-page` e antes de publicar a pagina (ver `skills/landing-page/SKILL.md`, etapa 12).

# Entradas

- A landing page pronta (HTML/CSS/JS).
- `produtos/<produto>/briefing.md` (preco, oferta, garantia, publico).
- A copy original usada (skill `copy-vendas`), para conferir se o que foi publicado bate com o que foi aprovado.
- `brand/cores.md`, `brand/tipografia.md` e `brand/linguagem.md`.

# Processo

1. Conferir se cada informacao de oferta (preco, parcelamento, bonus, garantia, prazo) bate exatamente com `briefing.md` - nenhum valor pode ter sido alterado ou inventado ao longo da construcao da pagina.
2. Conferir se todo depoimento, numero de alunos/downloads ou resultado citado veio de uma fonte real fornecida pelo usuario - nunca aceitar depoimento ou numero sem origem confirmada.
3. Conferir aplicacao da marca: cores exatamente as de `brand/cores.md`, tipografia de `brand/tipografia.md`, tom de voz de `brand/linguagem.md`.
4. Testar a pagina em pelo menos 3 larguras de tela (mobile pequeno, mobile grande/tablet, desktop) e conferir que nao ha overflow horizontal nem texto cortado.
5. Testar todos os links e botoes, especialmente o(s) CTA(s) - devem apontar para o checkout ou destino correto, nunca para um link vazio ou placeholder esquecido.
6. Conferir tempo/peso de carregamento - sinalizar imagens pesadas nao comprimidas ou bibliotecas desnecessarias.
7. Revisar ortografia, gramatica e formatacao do texto.
8. Conferir SEO basico: title da pagina, meta description, e que a pagina tem apenas um H1.
9. Produzir um veredito: aprovada para publicar, ou lista objetiva de pendencias a corrigir antes de aprovar.

# Regras

- Quem revisa nao deve ser a mesma skill/execucao que construiu a pagina (ver AGENTS.md, regra geral 5).
- Nunca aprovar uma pagina com depoimento, numero ou resultado sem fonte confirmada - isso e motivo de reprovacao automatica.
- Nunca aprovar uma pagina com CTA quebrado, vazio ou apontando para link de teste/placeholder.
- Nunca aprovar uma pagina que prometa resultado garantido (ex. "aprovacao garantida").
- Sinalizar qualquer divergencia entre o que esta no `briefing.md` e o que foi publicado, mesmo que pequena.

# Saida

Um relatorio de revisao com o veredito (aprovada / reprovada) e, se reprovada, a lista especifica de pontos a corrigir antes de tentar novamente.
