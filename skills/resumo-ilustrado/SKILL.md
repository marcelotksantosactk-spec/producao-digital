---
name: resumo-ilustrado
description: Cria resumos didaticos e ilustrados a partir de um tema, seguindo o padrao editorial e visual definido em brand/ (modo com marca) ou em skills/resumo-ilustrado/exemplos/ (modo internacional/sem marca).
---

# Objetivo

Transformar conteudo bruto (ja pesquisado) em um resumo didatico, visual e facil de memorizar.

# Modo de producao

- Modo padrao (com marca pessoal): aplica o padrao de brand/ (skill brand-system) - cores, tipografia, linguagem definidos pelo usuario.
- Modo internacional / sem marca: usado para materiais de outros paises (ver paises/) ou qualquer produto white-label. NAO aplicar brand/ nesse modo. Seguir em vez disso os exemplos de referencia em skills/resumo-ilustrado/exemplos/ (e os exemplos especificos do pais em paises/<pais>/exemplos/, se houver) para layout, hierarquia e estilo visual. Usar linguagem neutra e didatica, evitando girias e referencias culturais especificas do Brasil. Sempre indicar para qual pais/mercado o material esta sendo feito.

# Pre-requisito

- Rodar a skill pesquisa-conteudo antes desta, para garantir que o conteudo usado esta confirmado por fonte oficial.
- Para concursos, vestibulares ou exames de habilitacao profissional de um pais especifico, rodar tambem a skill pesquisa-edital antes de pesquisa-conteudo.

# Processo

1. Receber o levantamento da skill pesquisa-conteudo (conceitos confirmados + pendencias) e, se aplicavel, o levantamento da skill pesquisa-edital (temario do edital).
2. Criar a estrutura do resumo (sumario dos topicos, do mais geral ao mais especifico).
3. Separar os conceitos principais dos secundarios.
4. Escrever explicacoes curtas para cada conceito (aplicar brand/linguagem.md no modo com marca, ou linguagem neutra no modo internacional).
5. Criar exemplos praticos para os conceitos mais abstratos.
6. Criar quadros comparativos quando houver classificacoes ou distincoes importantes.
7. Criar comparacoes entre conceitos parecidos que geram confusao.
8. Adicionar mnemonicos quando ajudarem a fixar o conteudo.
9. Indicar onde devem entrar ilustracoes (usar a skill imagem-didatica para gerar).
10. Aplicar o padrao visual definido no modo de producao (brand-system no modo com marca, ou os exemplos de referencia no modo internacional/sem marca).
11. Montar o arquivo final no formato pedido (PDF, DOCX, PPTX ou imagens).
12. Rodar a skill de revisao antes de considerar o material pronto.

# Regras

- Nao inventar legislacao, jurisprudencia ou dado factual - qualquer coisa nao confirmada deve ficar sinalizada.
- Priorizar fontes oficiais (herdado de pesquisa-conteudo e pesquisa-edital).
- Manter linguagem didatica, seja no tom da marca pessoal (modo com marca) ou em tom neutro (modo internacional).
- Evitar blocos extensos de texto corrido - preferir topicos, quadros e hierarquia visual.
- Utilizar elementos visuais (icones, setas, destaques) em vez de so texto sempre que ajudar a entender.
- Um resumo nao deve tentar cobrir mais do que o tema/recorte definido no inicio.
- No modo internacional/sem marca, nunca usar elementos que remetam a marca pessoal do usuario (nome, cores, logo).

# Saida

Um arquivo de resumo ilustrado, no formato solicitado (PDF, DOCX, PPTX ou imagens), seguindo o padrao visual do modo de producao escolhido e pronto para revisao.
