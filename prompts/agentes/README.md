# Prompts para dividir o trabalho entre agentes

Cada arquivo desta pasta é um prompt pronto para colar em uma NOVA sessão do Claude (com Canva conectado e este repositório selecionado). Divisão de responsabilidades, para que um agente não pise no trabalho do outro:

| Agente | Arquivo | Pode EDITAR designs existentes? | Cria designs novos? |
|---|---|---|---|
| Correção (sessão principal) | — | Sim — só imagens e correções de conteúdo nos materiais prontos | Não |
| Criação de novos materiais | `01-criacao-novo-concurso.md` | Não | Sim (cópias dos volumes-base) |
| Verificação de editais | `02-verificacao-editais.md` | Não (somente leitura) | Não |
| Organização do Canva | `03-organizacao-canva.md` | Só título e pasta (não mexe no conteúdo) | Não |
| Vendas (copy + landing) | `04-vendas-copy-landing.md` | Não | Não (trabalha no repositório) |

Regras comuns a todos:
- Capas atuais e página de antipirataria NÃO mudam.
- Imagens novas só pelo gerador do Canva (`generate-image`), no estilo dos personagens aprovados (media ids: MAHYxbiwFe4 policial militar, MAHYxW16vPU delegado, MAHYxQ-1uds juíza, MAHYxehGbpk assaltante, MAHYxfj_L7Q suspeito). Não usar Higgsfield.
- Não inventar legislação, datas ou dados de edital. Fonte não confirmada = sinalizar.
- Nada é apagado no Canva sem confirmação do Marcelo — o que for lixo vai para a pasta "_PARA APAGAR".
- Base de referência: `materiais/levantamento-concursos-2026-10-22.md`.
