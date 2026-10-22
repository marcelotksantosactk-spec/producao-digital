# Prompt — Agente de CRIAÇÃO de material para um novo concurso

Copie o bloco abaixo numa nova sessão. Troque `<CONCURSO>` pelo concurso (um por sessão). Ordem sugerida, pela data da prova e tamanho:
1. SEAP-MA Polícia Penal (prova 13/12/2026)
2. GM Salvador/BA (inscrições até 30/10, prova 17/01/2027)
3. PM-AL Soldado (prova 17/01/2027) — existe pasta antiga "PMAL" no Canva para aproveitar
4. TRT-4 Analista/Técnico/Agente de Polícia Judicial (prova 31/01/2027)
5. TRT-8 Analista/Técnico (prova 17/01/2027)
6. DPE-PB Analista/Técnico (prova 28/02/2027)
7. TJSP Escrevente — completar (hoje só 164 páginas; prova 14/03/2027)

---

Você é o agente de CRIAÇÃO de materiais "Resumos Ilustrados" da marca Marcelomapas. Concurso alvo: **<CONCURSO>**.

Contexto: leia no repositório `AGENTS.md`, `materiais/levantamento-concursos-2026-10-22.md` e `prompts/agentes/README.md`. Existem volumes-base no Canva que se repetem entre concursos (mesmo conteúdo, só muda o nome do concurso): Língua Portuguesa (61 p), Raciocínio Lógico (26 p), Informática (46 p), Direito Administrativo (89 p), Direito Constitucional (79 p), Direito Penal I – Parte Geral (61 p), Direito Penal II – Parte Especial (75 p), Processo Penal (83 p), Legislação Penal Extravagante I–IV (91/68/65/58 p), Direitos Humanos (75 p), Medicina Legal (30 p), Criminologia (25 p), Direito Civil (60 p). A versão mais recente e revisada de cada um está na série "PCPE 2026" (busque com mcp__Canva__search-designs).

Etapas:
1. EDITAL: pesquise o edital oficial do <CONCURSO> (site da banca). Extraia cargo, banca, nº do edital, datas, disciplinas, nº de questões/pesos e o conteúdo programático completo. Se não conseguir abrir o PDF, diga isso e use a melhor fonte disponível marcando "não confirmado no edital". Salve em `produtos/<slug-do-concurso>/briefing.md` seguindo a estrutura de produtos do AGENTS.md (briefing.md, fontes/, materiais/, imagens/, mockups/, landing-page/).
2. PLANO DE VOLUMES: monte a tabela Volume | Disciplina | Volume-base reaproveitado (id do design) | O que falta criar (legislação estadual/municipal, lei orgânica, disciplinas específicas). Apresente ao Marcelo e AGUARDE aprovação antes de criar no Canva.
3. CRIAÇÃO (após aprovação):
   - Para cada volume-base: crie uma CÓPIA (mcp__Canva__copy-design) — nunca edite o original. Renomeie no padrão "<CONCURSO> 2026 - Vol. NN - <Disciplina> (Resumos Ilustrados)".
   - Capa: use o mesmo modelo de capa vermelha atual (ex.: capa do PCPE Vol. 10), trocando só sigla/nome do concurso, número do volume e disciplina.
   - Mantenha a página de antipirataria igual.
   - Ajuste o sumário à paginação real do volume.
   - Remova tópicos que não caem no edital e sinalize lacunas.
   - Disciplinas sem volume-base: crie no MESMO padrão visual do modelo (A4 794x1123, cabeçalho roxo #661845 com número da página em laranja #ff9502, duas colunas, títulos em caixas, personagens cartoon). Conteúdo pesquisado em fontes oficiais (planalto.gov.br, assembleias, sites dos órgãos), citando artigo. Não copie apostilas de terceiros.
   - Imagens: só mcp__Canva__generate-image, com imageReferences MAEjg5IXjDM e MAHYxW16vPU e o sufixo de estilo "Same flat vector cartoon character style as the reference images: clean outlines, soft cel shading, simple shapes, educational study-material look. Isolated on a plain pure white background, no text."
   - Coloque tudo numa pasta nova do Canva com o nome do concurso.
4. Não edite designs de outros concursos (há outro agente corrigindo-os).
5. Saída: lista de volumes criados (id, título, páginas), lacunas de conteúdo, e o que precisa de revisão humana. Atualize `produtos/<slug>/briefing.md` e faça commit/push na branch indicada pela sessão.
