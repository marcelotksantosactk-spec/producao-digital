---
name: apostila
description: Produz uma apostila completa (material de estudo longo, com teoria, exemplos e questoes de fixacao) sobre um tema ou edital inteiro, seguindo o padrao de brand/ (modo com marca) ou os exemplos de referencia (modo internacional/sem marca).
---

# Objetivo

Cobrir um tema ou edital inteiro em profundidade, em um unico material de estudo estruturado - mais extenso e completo do que um resumo-ilustrado, que e feito para revisao rapida.

# Modo de producao

- Modo padrao (com marca pessoal): aplica o padrao de `brand/` (skill brand-system) - cores, tipografia, linguagem definidos pelo usuario.
- Modo internacional / sem marca: usado para materiais de outros paises (ver `paises/`) ou qualquer produto white-label. NAO aplicar `brand/` nesse modo. Seguir os exemplos de referencia em `skills/apostila/exemplos/` e/ou `paises/<pais>/exemplos/`, usando linguagem neutra e didatica.

# Pre-requisito

- Rodar a skill `pesquisa-conteudo` para cada topico do sumario antes de escrever.
- Para concursos, vestibulares ou exames de habilitacao profissional de um pais especifico, rodar tambem `pesquisa-edital` antes de `pesquisa-conteudo`.

# Processo

1. Montar o sumario completo do tema ou edital, do assunto mais geral ao mais especifico, seguindo a ordem/hierarquia do edital quando houver um.
2. Para cada topico do sumario, escrever a teoria completa (mais extensa que no resumo-ilustrado, mas ainda didatica - ver `brand/linguagem.md` no modo com marca, ou linguagem neutra no modo internacional).
3. Incluir exemplos praticos e casos concretos para os conceitos mais abstratos.
4. Incluir quadros comparativos e esquemas quando houver classificacoes ou distincoes importantes entre conceitos.
5. Ao final de cada capitulo/topico, incluir questoes de fixacao (gerar via skill `questoes-comentadas` ou incluir questoes simples diretamente).
6. Indicar onde devem entrar ilustracoes ou esquemas visuais (usar a skill `imagem-didatica` para gerar).
7. Aplicar o padrao visual do modo de producao escolhido.
8. Montar um indice/sumario navegavel no inicio do documento.
9. Exportar no formato pedido (PDF ou DOCX).
10. Rodar a skill de revisao antes de considerar a apostila pronta.

# Regras

- Nao inventar legislacao, jurisprudencia ou dado factual - herdado de `pesquisa-conteudo`; qualquer coisa nao confirmada deve ficar sinalizada.
- Priorizar fontes oficiais (herdado de `pesquisa-conteudo` e `pesquisa-edital`).
- Mesmo sendo um material mais longo que o resumo-ilustrado, manter paragrafos curtos e usar hierarquia visual (titulos, subtitulos, quadros) em vez de texto corrido extenso.
- Uma apostila deve cobrir o tema/edital completo definido no briefing - nao deixar topicos do edital de fora sem justificativa.
- No modo internacional/sem marca, nunca usar elementos que remetam a marca pessoal do usuario.

# Saida

Um arquivo de apostila completa (PDF ou DOCX), com sumario, teoria, exemplos e questoes de fixacao, seguindo o padrao visual do modo de producao escolhido e pronto para revisao.
