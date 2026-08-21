---
name: mapa-mental
description: Transforma um tema em um mapa mental hierarquico (conceito, classificacao, requisitos, excecoes, exemplos, pegadinhas), seguindo o padrao visual da marca (modo com marca) ou os exemplos em skills/mapa-mental/exemplos/ (modo internacional/sem marca).
---

# Objetivo

Organizar um assunto grande em uma estrutura visual hierarquica que facilite memorizacao e revisao rapida.

# Modo de producao

- Modo padrao (com marca pessoal): aplica o padrao de brand/ (skill brand-system) - cores, tipografia, linguagem definidos pelo usuario.
- Modo internacional / sem marca: usado para materiais de outros paises (ver paises/) ou qualquer produto white-label. NAO aplicar brand/ nesse modo. Seguir em vez disso os exemplos de referencia em skills/mapa-mental/exemplos/ (e os exemplos especificos do pais em paises/<pais>/exemplos/, se houver) para layout, hierarquia e estilo visual. Sempre indicar para qual pais/mercado o material esta sendo feito.

# Pre-requisito

- Rodar a skill pesquisa-conteudo antes desta.
- Para concursos, vestibulares ou exames de habilitacao profissional de um pais especifico, rodar tambem a skill pesquisa-edital antes de pesquisa-conteudo.

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
5. Aplicar cores por ramo/categoria de acordo com o modo de producao: a paleta de brand/cores.md no modo com marca, ou uma paleta neutra baseada nos exemplos de referencia no modo internacional/sem marca - uma cor por ramo principal, em qualquer um dos dois modos.
6. Adicionar conectores claros entre os nos.
7. Adicionar icones de apoio quando ajudarem a identificar o ramo rapidamente.
8. Incluir exemplos e palavras-chave, nao frases completas.
9. Revisar se a leitura funciona em uma unica olhada (teste do "resumo de 10 segundos").
10. Exportar no formato pedido (PDF, PNG ou imagem).

# Regras

- Nao inventar excecoes, requisitos ou classificacoes que nao vieram da pesquisa.
- Evitar frases completas dentro dos blocos - usar palavras-chave.
- No maximo 5-7 ramos principais por mapa (acima disso, considerar dividir em mais de um mapa).
- Seguir a paleta de cores e tipografia do modo de producao definido (brand/ no modo com marca, exemplos de referencia no modo internacional).
- No modo internacional/sem marca, nunca usar elementos que remetam a marca pessoal do usuario (nome, cores, logo).

# Saida

Um mapa mental (PDF/PNG) com a estrutura hierarquica do tema, seguindo o padrao visual do modo de producao escolhido, pronto para revisao.
