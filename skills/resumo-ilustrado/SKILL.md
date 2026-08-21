---
name: resumo-ilustrado
description: Cria resumos didaticos e ilustrados a partir de um tema, seguindo o padrao editorial e visual definido em brand/.
---

# Objetivo

Transformar conteudo bruto (ja pesquisado) em um resumo didatico, visual e facil de memorizar.

# Pre-requisito

Rodar a skill `pesquisa-conteudo` antes desta, para garantir que o conteudo usado esta confirmado por fonte oficial.

# Processo

1. Receber o levantamento da skill `pesquisa-conteudo` (conceitos confirmados + pendencias).
2. Criar a estrutura do resumo (sumario dos topicos, do mais geral ao mais especifico).
3. Separar os conceitos principais dos secundarios.
4. Escrever explicacoes curtas para cada conceito (aplicar `brand/linguagem.md`).
5. Criar exemplos praticos para os conceitos mais abstratos.
6. Criar quadros comparativos quando houver classificacoes ou distincoes importantes.
7. Criar comparacoes entre conceitos parecidos que geram confusao.
8. Adicionar mnemonicos quando ajudarem a fixar o conteudo.
9. Indicar onde devem entrar ilustracoes (usar a skill `imagem-didatica` para gerar).
10. Aplicar o padrao visual da marca (usar a skill `brand-system`).
11. Montar o arquivo final no formato pedido (PDF, DOCX, PPTX ou imagens).
12. Rodar a skill de revisao antes de considerar o material pronto.

# Regras

- Nao inventar legislacao, jurisprudencia ou dado factual - qualquer coisa nao confirmada deve ficar sinalizada.
- Priorizar fontes oficiais (herdado de `pesquisa-conteudo`).
- Manter linguagem didatica (ver `brand/linguagem.md`).
- Evitar blocos extensos de texto corrido - preferir topicos, quadros e hierarquia visual.
- Utilizar elementos visuais (icones, setas, destaques) em vez de so texto sempre que ajudar a entender.
- Um resumo nao deve tentar cobrir mais do que o tema/recorte definido no inicio.

# Saida

Um arquivo de resumo ilustrado, no formato solicitado (PDF, DOCX, PPTX ou imagens), seguindo o padrao de marca e pronto para revisao.
