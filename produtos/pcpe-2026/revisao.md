# Revisao da landing page (skill landing-page-review)

Revisao feita por um agente separado do que construiu a pagina (AGENTS.md, regra 5), em 22/10/2026.

**Veredito: reprovada para publicacao ate resolver as pendencias do Marcelo.** O conteudo esta correto, mas a skill nao permite aprovar com CTA placeholder.

Conferido e ok: somas de paginas (673 / 650 / 648 / 625) batem entre inventario, pagina, briefing, copy e criativos; vagas e datas consistentes; charset como 1a tag; pixel Meta e Utmify no topo do head; imagens WebP externas (sem base64); HTML de ~17 KB; um H1; title e meta description; contraste dos CTAs >= 4.5:1; sem depoimento, numero de alunos ou escassez fabricados; sem promessa de aprovacao. Teste em 360 / 768 / 1280 px sem overflow horizontal.

Corrigido apos a revisao:

- H1 deixou de dizer "o edital inteiro" (nao cobre Delegado) -> "As disciplinas de Agente e Escrivao da PCPE...".
- Card "Fazer Agente e Escrivao" reescrito para nao depender da dupla inscricao.
- Cores fora da paleta removidas (sombras e rodape escuro -> rodape vinho).
- Fontes da pagina com no minimo 16px.
- "Acesso imediato" -> "acesso por e-mail / liberado apos a confirmacao" (boleto nao e imediato).
- "o que mais cai" e numeros sem fonte nos criativos removidos.
- Imagens movidas para `landing-page/img/` (sobe a pasta inteira no servidor).
- Nota explicando que Direito Penal vem em dois volumes.

Pendencias que bloqueiam a publicacao: ver `pendencias-marcelo.md`.
