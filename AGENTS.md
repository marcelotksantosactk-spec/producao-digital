# AGENTS.md

Este repositorio e a central de producao digital do projeto. Ele guarda o padrao de marca, as skills (fluxos reutilizaveis com instrucoes, exemplos e templates) e os produtos criados a partir delas. Qualquer agente de IA (ChatGPT/Codex, Claude, etc.) que for trabalhar aqui deve seguir estas regras.

## Estrutura

- brand/ - regras da marca (identidade, cores, tipografia, linguagem). Toda skill que gera conteudo visual ou textual deve consultar esta pasta antes de produzir qualquer material.
- skills/ - uma pasta por skill, cada uma com um SKILL.md (o manual operacional dessa skill) e, quando fizer sentido, templates/ e exemplos/.
- templates/ - modelos genericos reaproveitaveis entre produtos.
- assets/ - imagens, icones, logos e outros arquivos de midia reutilizaveis.
- materiais/ - materiais de referencia e insumos brutos (fontes, legislacao, anotacoes) usados nas pesquisas.
- landing-pages/ - landing pages publicadas ou em producao.
- produtos/ - uma pasta por produto, reunindo briefing, materiais, imagens, mockups e landing page daquele produto especifico.

## Regras gerais

1. Nao inventar informacao factual (legislacao, jurisprudencia, dados). Quando a fonte nao for confirmada, sinalizar isso claramente no material.
2. Seguir sempre o padrao definido em brand/ - cores, tipografia, linguagem e estilo visual.
3. Preferir dividir o trabalho em skills pequenas e especificas em vez de uma skill generica "faca tudo".
4. Cada skill deve declarar objetivo, processo em etapas e regras no seu SKILL.md, seguindo o formato abaixo (bloco de exemplo, nao e YAML executavel):

\`\`\`
---
name: nome-da-skill
description: o que ela faz, em uma frase.
---
# Objetivo
...
# Processo
1. ...
# Regras
- ...
\`\`\`

5. Quem cria o material nao deveria ser o unico responsavel por revisa-lo - sempre que possivel, use uma skill de revisao separada antes de publicar.
6. Novos produtos devem seguir a estrutura de produtos/<nome-do-produto>/ com briefing.md, fontes/, materiais/, imagens/, mockups/ e landing-page/.

## Status

Esqueleto inicial gerado automaticamente. As skills brand-system, pesquisa-conteudo, resumo-ilustrado, mapa-mental, copy-vendas e landing-page ja tem um SKILL.md de partida - ajuste o conteudo para o seu caso real (nome da marca, cores, publico, nicho) antes de usar em producao.
