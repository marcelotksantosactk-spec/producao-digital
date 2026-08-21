---
name: mapa-mental
description: Transforma um tema em um mapa mental hierarquico (conceito, classificacao, requisitos, excecoes, exemplos, pegadinhas), seguindo o padrao visual da marca.
---

# Objetivo

Organizar um assunto grande em uma estrutura visual hierarquica que facilite memorizacao e revisao rapida.

# Pre-requisito

Rodar a skill pesquisa-conteudo antes desta.

# Estrutura padrao

```
TEMA PRINCIPAL
  |-- conceito
  |-- classificacao
  |-- requisitos
  |-- excecoes
  |-- exemplos
  |-- pegadinhas
```

Os ramos acima sao o padrao default. Adaptar conforme o tema pedir (nem todo tema tem "excecoes" ou "pegadinhas" relevantes).

# Processo

1. Definir o tema central (no raiz) de forma objetiva.
2. Identificar os ramos principais a partir da estrutura padrao acima.
3. Para cada ramo, limitar a quantidade de informacao por bloco (maximo de informacao util, sem virar texto corrido).
4. Definir a hierarquia visual (tamanho de fonte e espessura de linha diminuem a cada nivel).
5. Aplicar cores por ramo/categoria (usar a paleta de brand/cores.md, uma cor por ramo principal).
6. Adicionar conectores claros entre os nos.
7. Adicionar icones de apoio quando ajudarem a identificar o ramo rapidamente.
8. Incluir exemplos e palavras-chave, nao frases completas.
9. Revisar se a leitura funciona em uma unica olhada (teste do "resumo de 10 segundos").
10. Exportar no formato pedido (PDF, PNG ou imagem).

# Regras

- Nao inventar excecoes, requisitos ou classificacoes que nao vieram da pesquisa.
- Evitar frases completas dentro dos blocos - usar palavras-chave.
- No maximo 5-7 ramos principais por mapa (acima disso, considerar dividir em mais de um mapa).
- Seguir a paleta de cores e tipografia definidas em brand/.

# Saida

Um mapa mental (PDF/PNG) com a estrutura hierarquica do tema, pronto para revisao.
