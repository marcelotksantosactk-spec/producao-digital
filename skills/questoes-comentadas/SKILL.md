---
name: questoes-comentadas
description: Cria questoes de pratica com gabarito comentado sobre um tema, no formato da prova real quando conhecido, para reforcar o aprendizado e simular a prova.
---

# Objetivo

Produzir questoes de pratica com justificativa detalhada de cada alternativa, para o estudante testar e fixar o conteudo estudado, no formato mais proximo possivel da prova real.

# Modo de producao

- Modo padrao (com marca pessoal): aplica o padrao de `brand/` (skill brand-system) - cores, tipografia, linguagem definidos pelo usuario.
- Modo internacional / sem marca: usado para materiais de outros paises (ver `paises/`) ou qualquer produto white-label. NAO aplicar `brand/` nesse modo.

# Pre-requisito

- Rodar a skill `pesquisa-conteudo` sobre o tema antes de escrever qualquer questao.
- Para concursos, vestibulares ou exames de habilitacao profissional de um pais especifico, rodar tambem `pesquisa-edital` antes, para usar o formato de prova real (multipla escolha, certo/errado, dissertativa) daquela banca/instituicao.

# Processo

1. Definir a quantidade de questoes e o nivel de dificuldade a partir do briefing do produto.
2. Escrever as questoes no formato da banca/prova real quando esse formato for conhecido via `pesquisa-edital` (ex. multipla escolha, certo/errado, dissertativa).
3. Garantir que cada questao testa um conceito claro e especifico do conteudo confirmado por `pesquisa-conteudo`.
4. Para questoes ineditas (elaboradas com base no conteudo pesquisado), identificar claramente como ineditas.
5. Para questoes adaptadas de provas reais, citar a fonte exata (banca, instituicao, ano) - nunca apresentar uma questao real sem essa citacao.
6. Escrever o gabarito com justificativa detalhada: por que a alternativa correta esta certa e por que cada alternativa errada esta errada.
7. Organizar as questoes por topico ou por nivel de dificuldade, conforme o formato do material final (apostila, resumo ou banco de questoes avulso).
8. Aplicar o padrao visual do modo de producao escolhido.
9. Rodar a skill de revisao antes de considerar o banco de questoes pronto.

# Regras

- Nunca inventar gabarito - toda justificativa precisa se basear no conteudo confirmado por `pesquisa-conteudo`.
- Nunca apresentar uma questao extraida de prova real sem citar banca, instituicao e ano corretamente.
- Sempre distinguir claramente questoes ineditas (elaboradas) de questoes adaptadas de provas reais.
- Evitar reproduzir o enunciado de uma questao protegida por direito autoral na integra quando nao for necessario - preferir adaptar/parafrasear mantendo o mesmo conceito avaliado.
- Nao inventar numero de lei, artigo, sumula ou precedente usado como base de uma questao ou justificativa - se a fonte nao foi confirmada, sinalizar como pendente.

# Saida

Um banco de questoes comentadas (documento ou planilha), organizado por topico/dificuldade, com gabarito justificado e fontes citadas quando aplicavel, pronto para revisao e uso em `apostila`, `resumo-ilustrado` ou como produto avulso.
