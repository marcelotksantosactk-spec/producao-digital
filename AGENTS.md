# AGENTS.md

Este repositorio e a central de producao digital do projeto. Ele guarda o padrao de marca, as skills (fluxos reutilizaveis com instrucoes, exemplos e templates), os materiais internacionais por pais e os produtos criados a partir delas. Qualquer agente de IA (ChatGPT/Codex, Claude, etc.) que for trabalhar aqui deve seguir estas regras.

## Estrutura

- brand/ - regras da marca pessoal (identidade, cores, tipografia, linguagem). So se aplica no modo de producao "com marca" (ver skills que tem modo internacional/sem marca).
- skills/ - uma pasta por skill, cada uma com um SKILL.md (o manual operacional dessa skill) e, quando fizer sentido, templates/ e exemplos/.
- paises/ - materiais internacionais por pais (concursos, vestibulares, exames de habilitacao profissional), no modo de producao sem marca. Ver paises/README.md.
- templates/ - modelos genericos reaproveitaveis entre produtos.
- assets/ - imagens, icones, logos e outros arquivos de midia reutilizaveis.
- materiais/ - materiais de referencia e insumos brutos (fontes, legislacao, anotacoes) usados nas pesquisas.
- landing-pages/ - landing pages publicadas ou em producao.
- produtos/ - uma pasta por produto, reunindo briefing, materiais, imagens, mockups e landing page daquele produto especifico.

## Skills disponiveis

- brand-system - aplica o padrao de marca pessoal.
- pesquisa-conteudo - pesquisa e verifica fontes sobre um tema.
- pesquisa-edital - analisa editais de concurso, vestibular ou exame de habilitacao de um pais especifico (ver paises/).
- resumo-ilustrado - produz resumos didaticos ilustrados; tem modo com marca e modo internacional/sem marca.
- mapa-mental - produz mapas mentais hierarquicos; tem modo com marca e modo internacional/sem marca.
- copy-vendas - produz a copy de vendas de um produto.
- landing-page - constroi a landing page a partir da copy pronta.

## Regras gerais

1. Nao inventar informacao factual (legislacao, jurisprudencia, dados, regras institucionais de outros paises). Quando a fonte nao for confirmada, sinalizar isso claramente no material.
2. No modo de producao "com marca", seguir sempre o padrao definido em brand/ - cores, tipografia, linguagem e estilo visual. No modo "internacional/sem marca" (paises/), NAO aplicar brand/ - seguir os exemplos em skills/<skill>/exemplos/ e/ou paises/<pais>/exemplos/, sem nenhum elemento da marca pessoal do usuario.
3. Preferir dividir o trabalho em skills pequenas e especificas em vez de uma skill generica "faca tudo".
4. Cada skill deve declarar objetivo, processo em etapas e regras no seu SKILL.md, seguindo o formato abaixo (bloco de exemplo, nao e YAML executavel):

```
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
```

5. Quem cria o material nao deveria ser o unico responsavel por revisa-lo - sempre que possivel, use uma skill de revisao separada antes de publicar.
6. Novos produtos devem seguir a estrutura de produtos/<nome-do-produto>/ com briefing.md, fontes/, materiais/, imagens/, mockups/ e landing-page/.
7. Novos paises devem seguir a estrutura de paises/<pais>/ com README.md, editais/, exemplos/ e produtos/ (ver paises/README.md).

## Status

Esqueleto inicial gerado automaticamente. As skills brand-system, pesquisa-conteudo, pesquisa-edital, resumo-ilustrado, mapa-mental, copy-vendas e landing-page ja tem um SKILL.md de partida - ajuste o conteudo para o seu caso real (nome da marca, cores, publico, nicho, contexto de cada pais) antes de usar em producao. As pastas paises/peru/ e paises/chile/ tem contexto inicial pesquisado, mas ainda precisam de exemplos visuais e de editais reais analisados pela skill pesquisa-edital.
