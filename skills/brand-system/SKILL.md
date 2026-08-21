---
name: brand-system
description: Aplica o padrao de marca (cores, tipografia, linguagem, estilo visual) a qualquer material ou peca gerada. Deve ser usada junto com praticamente todas as outras skills.
---

# Objetivo

Garantir que qualquer material produzido (resumo, mapa mental, apostila, landing page, criativo de anuncio) siga o mesmo padrao visual e editorial, sem que cada skill precise redefinir isso.

# Quando usar

Sempre que uma skill for gerar algo com apelo visual ou textual voltado ao usuario final. Na pratica, esta skill e consultada por: resumo-ilustrado, mapa-mental, apostila, imagem-didatica, mockup, copy-vendas, landing-page e criativos.

# Entradas

- Os arquivos em `brand/`: `identidade.md`, `cores.md`, `tipografia.md`, `linguagem.md`.
- O tipo de material sendo criado (didatico, comercial, anuncio).

# Processo

1. Ler `brand/identidade.md` para entender nicho, publico e missao.
2. Ler `brand/cores.md` e usar exclusivamente as cores definidas ali.
3. Ler `brand/tipografia.md` e aplicar a hierarquia de fontes correta ao tipo de peca.
4. Ler `brand/linguagem.md` e escrever/revisar o texto no tom definido.
5. Checar as regras especificas do tipo de material (didatico x comercial) antes de finalizar.
6. Se algum dado de marca estiver como placeholder (ex. "[preencher]"), avisar o usuario em vez de inventar um valor.

# Regras

- Nunca usar cores, fontes ou tom de voz fora do que esta documentado em `brand/`.
- Nunca inventar identidade de marca (nome, slogan, missao) que nao esteja em `brand/identidade.md`.
- Se `brand/` estiver desatualizado ou incompleto, sinalizar isso como um bloqueio antes de prosseguir com a peca final.
- Preferir consistencia entre pecas do mesmo produto a variedade visual.

# Saida

Nenhum arquivo proprio - esta skill fornece as regras que outra skill (resumo-ilustrado, landing-page, etc.) aplica durante a producao do material final.
