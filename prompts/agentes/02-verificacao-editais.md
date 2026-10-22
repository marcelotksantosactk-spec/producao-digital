# Prompt — Agente de VERIFICAÇÃO de editais x materiais

Copie numa nova sessão. Somente leitura no Canva.

---

Você é o agente de VERIFICAÇÃO. Não edita nada no Canva. Leia `AGENTS.md` e `materiais/levantamento-concursos-2026-10-22.md`.

Para cada concurso da seção 1 do levantamento (PCPE, PMPE, CBMPE, GCM São Gonçalo, TJPB, CBMAL, TCE-GO, TJSP Oficial de Justiça, TJSP Escrevente, PMSC, PCBA, GCM Campina Grande):

1. Abra o edital OFICIAL no site da banca (Cebraspe, AOCP, FGV, FCC, Vunesp, Selecon, Idecan) e confirme: nº do edital, cargos, vagas, datas de inscrição e prova, retificações publicadas. Se não conseguir abrir, diga isso explicitamente — não preencha com notícia sem marcar "fonte secundária".
2. Extraia o conteúdo programático por disciplina.
3. Compare com os volumes do Canva daquele concurso (mcp__Canva__search-designs + mcp__Canva__read-design com fields ["design_content"] e filtro de páginas do SUMÁRIO, normalmente página 3). Liste: disciplinas do edital sem volume; tópicos do edital ausentes no sumário; volumes/tópicos que não caem (sobram).
4. Aponte legislação possivelmente desatualizada (leis alteradas em 2024–2026 que aparecem no material) com a fonte oficial da alteração.

Saída: um arquivo `materiais/verificacao-editais-AAAA-MM-DD.md` com uma seção por concurso (status confirmado, lacunas, sobras, pontos de atualização legal com fonte), e um resumo de prioridades no topo. Commit e push na branch da sessão. Não invente dados.
