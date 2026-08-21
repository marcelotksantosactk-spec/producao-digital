---
name: pesquisa-edital
description: Analisa editais de concurso publico, vestibular/admissao universitaria ou exame de habilitacao profissional (equivalente a OAB) de um pais especifico, extraindo temario, formato de prova e fontes oficiais - antes de qualquer skill de producao de conteudo comecar.
---

# Objetivo

Entender exatamente o que uma prova cobra (temario, pesos, formato, bibliografia oficial) a partir do edital, para direcionar a pesquisa de conteudo e a producao de material (resumo, mapa mental, questoes) para aquele concurso, vestibular ou exame especifico - de qualquer pais.

# Quando usar

Sempre antes da skill pesquisa-conteudo, quando o material a ser produzido e para um concurso publico, vestibular ou exame de habilitacao profissional de um pais especifico (ver paises/). Roda uma vez por edital.

# Entradas

- O PDF ou imagem do edital (guardar em paises/<pais>/editais/).
- O contexto do pais em paises/<pais>/README.md (instituicoes, fontes oficiais, tipos de prova comuns).

# Processo

1. Identificar o tipo de prova: concurso publico, vestibular/admissao universitaria, ou exame de habilitacao profissional (ex. equivalente a OAB).
2. Identificar a instituicao responsavel e a fonte oficial do edital.
3. Extrair o temario completo (disciplinas e topicos, na ordem e hierarquia usadas pelo edital original).
4. Extrair o formato da prova: numero de questoes, tipo (multipla escolha, dissertativa, oral), peso de cada disciplina, criterio de aprovacao/eliminatorio.
5. Extrair datas relevantes (inscricao, prova, resultado), quando o material tiver validade temporal.
6. Extrair a bibliografia oficial indicada no edital, se houver.
7. Organizar tudo em um resumo estruturado do edital (temario + formato + fontes), pronto para alimentar a skill pesquisa-conteudo.
8. Sinalizar topicos do edital que estejam ambiguos ou incompletos no documento original.

# Regras

- Nunca inferir um topico que nao esteja explicito no edital - se um assunto comum aquele tipo de prova nao aparecer no documento, nao adicionar por conta propria.
- Preferir sempre a versao mais recente e oficial do edital, nunca uma copia de terceiros desatualizada.
- Se o edital estiver em espanhol (Peru, Chile, etc.), manter os nomes originais das materias/disciplinas e acrescentar a traducao entre parenteses quando ajudar a producao do material.
- Registrar a fonte exata (orgao responsavel + link ou documento) de onde o edital foi retirado.
- Regras institucionais mudam com frequencia (ex. forma de habilitacao profissional) - nunca assumir como definitivo algo que nao esteja confirmado no edital ou na fonte oficial mais recente.

# Saida

Um documento estruturado com temario, formato de prova e fontes oficiais daquele edital especifico, pronto para orientar a skill pesquisa-conteudo e, em seguida, a producao do material (resumo-ilustrado, mapa-mental, questoes-comentadas).
