# Verificação de editais x materiais do Canva (22/10/2026)

Gerado pelo agente de VERIFICAÇÃO, somente leitura: nada foi editado no Canva.

## Limitações desta verificação (ler antes de usar)

1. **Nenhum edital oficial foi aberto.** A rede do ambiente bloqueou os sites das bancas (cebraspe.org.br, institutoaocp.org.br, fgv.br, concursosfcc.com.br, vunesp.com.br, selecon.org.br, idecan.org.br): o proxy respondeu 403 e o WebFetch não resolveu nenhum host. Todos os dados de edital (nº, cargos, vagas, datas, retificações) vêm de **fonte secundária**, isto é, blogs de cursinho e portais de notícias, sempre com a URL ao lado. Para confirmar no edital oficial, libere esses domínios em *Network access*, nas configurações do ambiente, e rode esta verificação de novo.
2. **O conteúdo programático detalhado (anexos dos editais) não foi localizado** em nenhuma fonte secundária. Por isso, a comparação com o Canva foi feita **por disciplina**. As "lacunas de tópico" apontadas abaixo são indicações a conferir, não confirmações.
3. **Do Canva, foram lidos só os sumários** de cada volume (págs. 2–4), nunca o corpo. Os pontos de atualização legal estão formulados como "verificar se o volume X incorpora a Lei Y".
4. O arquivo `materiais/levantamento-concursos-2026-10-22.md`, citado no prompt, **não existe no repositório**. A lista dos 12 concursos foi tirada do próprio prompt.

## Resumo de prioridades

| Prioridade | Concurso | Situação (fonte secundária) | Principal ação |
|---|---|---|---|
| **Alta** | PCPE | Cebraspe, Edital nº 1 (02/10/2026), 1.315 vagas. Inscrições de 15/10 a 16/12/2026. Prova em 07/03 e 14/03/2027 | Informática (Vol. 03) sem redes, Internet e segurança. Lei 14.735/2023 ausente no Vol. 07. Confirmar se Tributário e Ambiental (Delegado) caem. Duplicata do Vol. 10 I e dois "Vol. 16" |
| **Alta** | PMPE | AOCP, Edital 001/2026, 1.320 vagas. Inscrições até 05/11 (uma fonte diz 23/11). Prova em 21/02/2027 | Para Soldado, os volumes de Penal, Penal Militar e Leg. Institucional podem sobrar. Para Oficial, faltam 5 disciplinas |
| **Alta** | PMSC | AOCP, edital divulgado em 19/10/2026 (nº não confirmado), 500 ou 1.000 vagas. Inscrições de 26/10 a 16/11. Prova em 13/12 | Faltam Direito Penal Militar, Legislação Especial e Trânsito (cerca de 17 de 60 questões) e redação. Há muitas duplicatas e fragmentos |
| **Alta** | CBMAL | Cebraspe, Edital nº 1 (21/05/2026). Prova de 11/10 suspensa por decisão judicial. Inscrições reabertas até 26/10; nova data não confirmada | Vol. 06 I traz "PMAL" (reaproveitado sem adaptar). Falta a Lei Estadual 9.905/2026. Para Oficial, faltam Administrativo e Constitucional |
| **Alta** | GCM Campina Grande | Idecan, Edital 03/2026, 30 vagas. Prova reprogramada por decisão judicial para 21–22/11/2026 | Prova próxima. Conferir STF Tema 656 e Lei 14.230/2021 nos volumes. Remover a duplicata solta do Vol. 01 |
| **Alta** | TCE-GO | FCC, Edital 01/2026 e Retificação 02/2026, 16 vagas. Inscrições até 06/11. Prova em 17/01/2027 | Nada para TI (10 das 16 vagas). Gestão de Pessoas fraca. Vol. 06 desatualizado (Decreto 12.807/2025). Faltam resoluções da retificação |
| Média | PCBA | AOCP, Edital SAEB 02/2026, 750 vagas. Prova em 06/12/2026 | Conferir as Leis 14.994/2024, 15.384/2026 e 14.811/2024 nos volumes. Falta material de discursiva. Há duplicatas |
| Média | CBMPE | AOCP, 570 vagas. Inscrições até 05/11. Prova em 28/02/2027 | Física só cobre Mecânica e tem tópicos de rodovia (PRF). Mesma falta de Informática da PCPE |
| Média | GCM São Gonçalo | Selecon, Editais 001 e 002/PMSG/2026. Inscrições até 18/11. Prova em 24/01/2027 | Conferir a Retificação nº 02 (16/10) e o "Dec. 334/26" x "Decreto 384/2026" no Vol. 09 |
| Média | TJSP Oficial de Justiça | Vunesp, Edital 01/2026, 132 vagas. Inscrições de 28/10 a 10/12. Prova em 14/03/2027 | Muitas versões por volume. O sumário do Vol. 06 FINAL foi copiado do Escrevente. Conferir as Leis 15.272/2025, 17.785/2023 e 14.230/2021 |
| Média | TJSP Escrevente | Vunesp, Edital 02/2026 (só cadastro de reserva) | A série foi montada sobre o edital de 2025 e precisa ser revalidada. Falta material de discursiva |
| Baixa–Média | TJPB | Edital não publicado (FGV contratada) | Material mira só Analista (Direito). Vol. 07 triplicado. Título do Vol. 11 não bate com o sumário |

### Pontos transversais

- **Lei 15.384/2026 (vicaricídio, art. 121-B do CP)** e **Lei 14.994/2024 (Pacote Antifeminicídio)**: os volumes de Penal já trazem os tópicos. Falta conferir os volumes de **Maria da Penha, Hediondos e LEP** de todos os concursos policiais.
- **Lei 15.272/2025 (CPP, arts. 310/312)**: conferir nos volumes de Processo Penal do TJSP, do TJPB e das polícias.
- **Duplicatas e rascunhos no Canva** em quase todos os concursos: limpar ou arquivar antes de vender, para não entregar a versão errada.
- **Informática** (PCPE e CBMPE) sem redes, Internet e segurança no sumário.

---
## PCPE (Polícia Civil de Pernambuco)

### Status do edital

Edital oficial não pôde ser aberto (site da banca bloqueado no ambiente); dados de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Cebraspe | (fonte secundária: https://concursosnobrasil.com/concursos/pe/2026/10/02/concurso-pc-pe-edital-oferece-1-315-vagas-com-salarios-de-ate-r-135-mil/ ; https://cj.estrategia.com/portal/concurso-pc-pe-delegado-2026-edital-publicado/) |
| Nº do edital | Edital nº 1 – PCPE, de 02/10/2026, publicado em edição extra do DOE | (fonte secundária: https://blog.grancursosonline.com.br/concurso-pc-pe-edital-publicado-2026/ ; https://www.novaconcursos.com.br/portal/?p=316412) |
| Cargos e vagas | 1.315 vagas: Agente 1.200, Escrivão 70, Delegado 45 | (fonte secundária: https://concursosnobrasil.com/concursos/pe/2026/10/02/concurso-pc-pe-edital-oferece-1-315-vagas-com-salarios-de-ate-r-135-mil/ ; https://ceisc.com.br/blog/post/concurso-pc-pe-edital-da-policia-civil-de-pernambuco-e-publicado-e-oferece-1-315-vagas). **Divergência:** uma fonte mais antiga fala em 1.270 vagas (só Agente e Escrivão) e diz que o edital ainda não tinha saído (https://dsoconcursos.com.br/concurso-pc-pe-edital-publicado-com-1-270-vagas-para-agente-e-escrivao/). Essa versão parece estar superada. |
| Inscrições | 15/10/2026 a 16/12/2026; isenção de taxa até 12/11/2026 | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/concurso-pc-pe-inscricoes-abertas ; https://folha.qconcursos.com/n/concurso-pc-pe-inscricoes-abertas-2026) |
| Taxas | R$ 250 (Agente e Escrivão); R$ 350 (Delegado) | (fonte secundária: idem acima) |
| Prova objetiva | 07/03/2027 (Agente e Escrivão); 14/03/2027 (Delegado, objetiva e discursiva) | (fonte secundária: https://www.monsterconcursos.com.br/pcpe-agente-2026 ; https://cj.estrategia.com/portal/concurso-delegado-pe-2026-prova-cebraspe/) |
| Estrutura (Agente e Escrivão) | 60 questões: 20 de Noções de Direito e 40 de Conhecimentos Específicos, mais redação de 30 pontos sobre segurança pública | (fonte secundária: https://voceconcursado.com.br/concurso/concurso-pc-pe-2026/) |
| Estrutura (Delegado) | 100 questões objetivas (mínimo de 50 pontos), 2 questões discursivas e 1 peça | (fonte secundária: https://cj.estrategia.com/portal/concurso-delegado-pe-2026-prova-cebraspe/ ; https://blog.grancursosonline.com.br/concurso-delegado-pe-disciplinas/) |
| Retificações | Nenhuma retificação localizada | Não confirmado |

### Conteúdo programático (fonte secundária)

- **Agente e Escrivão, Noções de Direito:** Legislação Estadual, Direito Constitucional, Direito Administrativo, Direito Penal e Direito Processual Penal.
- **Agente e Escrivão, Conhecimentos Específicos:** Língua Portuguesa, Informática, Raciocínio Lógico e Estatística. O Agente tem ainda Contabilidade Geral; o Escrivão, Noções de Arquivologia. Atualidades só aparece como tema da redação. (fonte secundária: https://voceconcursado.com.br/concurso/concurso-pc-pe-2026/ ; https://voceconcursado.com.br/blog/edital-verticalizado-pc-pe-2026/)
- **Delegado, nº de questões:** Constitucional 12, Administrativo 12, Penal 15, Processual Penal 15, Legislação Penal e Processual Penal Extravagante 10, Legislação Estadual 5, Medicina Legal 5, Criminologia 5, Civil e Empresarial 6, Direitos Humanos 5. Isso soma 90 questões. Uma fonte fala em 12 disciplinas, então faltam **2 disciplinas (10 questões) não identificadas**. (fonte secundária: https://blog.grancursosonline.com.br/concurso-delegado-pe-disciplinas/ ; https://cj.estrategia.com/portal/concurso-delegado-pe-2026-prova-cebraspe/)
- **Tópicos detalhados de cada disciplina:** conteúdo programático não localizado. Nenhuma fonte reproduziu o anexo com os itens.

### Volumes no Canva

| Título | Design ID | Págs. |
|---|---|---|
| PCPE 2026 - Vol. 01 - Língua Portuguesa | DAHYvZejDTo | 61 |
| PCPE 2026 - Vol. 02 - Raciocínio Lógico | DAHYvaBN4ko | 26 |
| PCPE 2026 - Vol. 03 - Informática | DAHYvX1yNSU | 46 |
| PCPE 2026 - Vol. 04 - Estatística | DAHYveLKZKE | 26 |
| PCPE 2026 - Vol. 05 - Contabilidade Geral - Agente | DAHYvRyvMx8 | 25 |
| PCPE 2026 - Vol. 06 - Noções de Arquivologia - Escrivão | DAHYvUjQB4o | 23 (**sem página de sumário** nas págs. 2 e 3; o conteúdo começa na pág. 3) |
| PCPE 2026 - Vol. 07 - Legislação Estadual | DAHYvd1o4fk | 79 |
| PCPE 2026 - Vol. 08 - Noções de Direito Constitucional | DAHYvSLQzdo | 79 |
| PCPE 2026 - Vol. 09 - Noções de Direito Administrativo | DAHYvTRZD0M | 89 |
| PCPE 2026 - Vol. 10 - Noções de Direito Penal I - Parte Geral | DAHYvddkCjQ | 61 |
| PCPE 2026 - Vol. 10 - Noções de Direito Penal I - Parte Geral (**DUPLICATA**: mesmo título e mesmo sumário) | DAHYwyMD45A | 61 |
| PCPE 2026 - Vol. 10 - Noções de Direito Penal II - Parte Especial | DAHYvd6eWKE | 75 |
| PCPE 2026 - Vol. 11 - Noções de Direito Processual Penal | DAHYvREypp0 | 83 |
| PCPE 2026 - Vol. 12 - Leg. Penal e Proc. Penal Extravagante I - Delegado | DAHYvXKKqQU | 91 |
| PCPE 2026 - Vol. 12 - ... Extravagante II - Delegado | DAHYvWhbnIU | 68 |
| PCPE 2026 - Vol. 12 - ... Extravagante III - Delegado | DAHYvc2UNrs | 65 |
| PCPE 2026 - Vol. 12 - ... Extravagante IV - Delegado | DAHYvbImWfQ | 58 |
| PCPE 2026 - Vol. 13 - Medicina Legal - Delegado | DAHYvUPHKGA | 30 |
| PCPE 2026 - Vol. 14 - Criminologia - Delegado | DAHYvRQpqaY | 25 |
| PCPE 2026 - Vol. 15 - Direitos Humanos - Delegado | DAHYvYbscH4 | 75 |
| PCPE 2026 - Vol. 16 - Direito Civil - Delegado | DAHYvRquEyI | 60 |
| PCPE 2026 - Vol. 16 - Direito Empresarial - Delegado (**dois volumes com o nº 16**; este também não tem sumário nas págs. 2 e 3) | DAHYvZPY7Kg | 36 |
| PCPE 2026 - Vol. 17 - Direito Tributário - Delegado | DAHYvR5kARc | 24 |
| PCPE 2026 - Vol. 18 - Direito Ambiental - Delegado | DAHYvUOAJE8 | 21 |

Volumes reaproveitados de outras coleções: o Vol. 01 tem sumário idêntico ao do CBMPE Vol. 01 (61 págs.); o Vol. 03, ao do CBMPE Vol. 02 (46 págs.); o Vol. 15, ao do PMPE Vol. 06 (75 págs.).

### Lacunas

- **Disciplinas sem volume:** nenhuma entre as listadas pelas fontes secundárias. As 2 disciplinas restantes do Delegado (10 questões) não foram identificadas, então não dá para saber se há volume para elas.
- **Tópicos possivelmente ausentes.** Sem o anexo do edital, isto é indicação, não comprovação:
  - **Vol. 03 Informática (DAHYvX1yNSU):** o sumário cobre só sistema operacional, Windows, Office/LibreOffice, editor de texto e planilha. **Não há redes, Internet e navegadores, correio eletrônico, segurança da informação, malware, backup nem nuvem.** Esses temas costumam cair no Cebraspe e estão no volume de Informática do PMPE (DAHXKPcDsaE). Verificar contra o edital.
  - **Vol. 07 Legislação Estadual (DAHYvd1o4fk):** o sumário traz CE-PE arts. 101 a 105-B, LC 317/2015, Lei 6.425/1972, LC 137/2008 e Lei 6.123/1968. **Falta a Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis).** Não confirmei se ela consta do edital; verificar.
  - **Vol. 08 Noções de Direito Constitucional (DAHYvSLQzdo):** o sumário vai de Princípios Fundamentais até Remédios e Segurança Pública. **Não há Organização do Estado, Administração Pública (arts. 37 a 41) nem Poderes.** O PMPE Vol. 05 tem esses tópicos. Verificar contra o edital.
  - **Vol. 11 Processo Penal (DAHYvREypp0):** o sumário termina em cautelares, liberdade provisória e medidas protetivas. **Não aparecem** competência, sujeitos processuais, citações e intimações, sentença, procedimentos, nulidades, recursos nem habeas corpus. A Prisão Temporária está no Vol. 12 IV. Verificar o que o edital cobra.
  - **Vol. 12 Extravagante (I a IV):** cobre Maria da Penha, Drogas, Desarmamento, Racismo, Interceptação, Abuso de Autoridade, Orcrim, JECRIM, Hediondos, Crimes Ambientais, ECA, Lei Henry Borel, Tortura, Prisão Temporária, Contravenções, Crimes contra o Consumidor e LEP. Ficam de fora leis comuns em provas de Delegado, como Lavagem de Dinheiro, crimes do CTB, Estatuto da Pessoa Idosa e Identificação Criminal. **Não há confirmação de que estejam no edital.**
  - Os sumários de Arquivologia (DAHYvUjQB4o) e Empresarial (DAHYvZPY7Kg) não foram localizados nas págs. 2 e 3, então não foi possível comparar tópicos.

### Sobras

- **Vol. 17 Direito Tributário (DAHYvR5kARc)** e **Vol. 18 Direito Ambiental (DAHYvUOAJE8):** nenhuma fonte os lista entre as disciplinas do Delegado. Podem ser justamente as 2 disciplinas não identificadas (10 questões), ou podem sobrar. **Não confirmado.**
- **Vol. 01 Língua Portuguesa (DAHYvZejDTo):** tem um bloco de Literatura (Quinhentismo até os Contemporâneos, cerca de 10 seções). Provavelmente sobra num edital Cebraspe de carreira policial, mas não foi confirmado.
- **Duplicata do Vol. 10 I (DAHYwyMD45A):** cópia redundante; decidir qual ID é o oficial.
- **Vol. 02 RLM (DAHYvaBN4ko):** inclui tópicos de Estatística e Geometria que se sobrepõem ao Vol. 04. Não é exatamente sobra, mas há redundância.

### Pontos de atualização legal

O que segue é baseado só no sumário. A recomendação em cada caso é verificar se o volume incorpora a lei citada.

- **Lei 14.994/2024, Pacote Antifeminicídio** (https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14994.htm, citada em resultado de busca; resumos em https://jus.com.br/artigos/111247/o-pacote-antifeminicidio-e-a-novissima-lei-n-14-994-de-2024). Segundo fonte secundária, criou o feminicídio autônomo (art. 121-A, pena de 20 a 40 anos), alterou a pena por descumprimento de medida protetiva na LMP, o art. 141 §3º, o art. 112 da LEP, a Lei de Hediondos e o CPP.
  - O Vol. 10 II (DAHYvd6eWKE) já tem a seção "Feminicídio", o que é bom sinal. Verificar se trata o tipo como autônomo (121-A) e não mais como qualificadora.
  - Verificar também o Vol. 12 I (LMP, DAHYvXKKqQU), o Vol. 12 II (Hediondos, DAHYvWhbnIU) e o Vol. 12 III (LEP, DAHYvc2UNrs).
- **Lei 15.384/2026, de 09/04/2026, Vicaricídio** (https://planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15384.htm). Segundo fonte secundária, criou o art. 121-B do CP, incluiu a violência vicária na LMP e incluiu o crime no rol de hediondos.
  - O Vol. 10 II já tem a seção "Vicaricídio".
  - Verificar se o Vol. 12 I (LMP) e o Vol. 12 II (Hediondos) também foram atualizados.
- **Lei 15.125/2025, monitoração eletrônica do agressor na LMP** (fonte secundária: https://static.poder360.com.br/2025/04/Lei-no-15.125-tornozeleira-eletronica-agressores-24.abr_.2025.pdf). Verificar o Vol. 12 I (DAHYvXKKqQU) e a seção "medidas protetivas de urgência" do Vol. 11 (DAHYvREypp0).
- **Lei 15.123/2025, causa de aumento no art. 147-B (violência psicológica com uso de IA)** (fonte secundária: https://portaltj.tjrj.jus.br/documents/d/portal-conhecimento/violenciadomestica-1-). Verificar a seção "violência psicológica contra a mulher" do Vol. 10 II.
- **Lei 15.160/2025, que altera os arts. 65 e 115 do CP** (atenuante e redução de prazo prescricional em crimes de violência sexual contra a mulher) (fonte secundária: https://mpce.mp.br/?p=52904). Verificar as seções de atenuantes e prescrição do Vol. 10 I (DAHYvddkCjQ e DAHYwyMD45A).
- **Lei 14.735/2023, Lei Orgânica Nacional das Polícias Civis** (https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2023/Lei/L14735.htm). Ausente do sumário do Vol. 07. Segundo fonte secundária, a lei orgânica estadual da PCPE ainda não foi aprovada pela Alepe (https://www.diariodepernambuco.com.br/politica/2025/11/11701727-eduardo-e-lula-da-fonte-pedem-que-raquel-lyra-envie-lei-organica-da-policia-civil-a-alepe.html), então o Estatuto Lei 6.425/1972 segue como base estadual. Verificar se o edital cobra a Lei 14.735/2023.
- **LC estadual 558/2025, aposentadoria de policiais civis** (fonte secundária, mesma busca: https://legis.alepe.pe.gov.br/dadosReferenciais.aspx?id=86881, não aberta). Só é relevante se o edital cobrar o tema; não confirmado.

### Prioridade sugerida

**Alta.** É o maior certame dos três, com edital publicado e prova em março de 2027. O volume de Informática parece não ter redes nem segurança, e falta a Lei 14.735/2023 na Legislação Estadual; além disso, é preciso resolver a duplicata e a numeração repetida do Vol. 16.

---

## PMPE (Polícia Militar de Pernambuco)

### Status do edital

Edital oficial não pôde ser aberto (site da banca bloqueado no ambiente); dados de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Instituto AOCP | (fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-pmpe-edital-publicado-2026/amp/ ; https://www.novaconcursos.com.br/portal/concursos/concurso-pm-pe/) |
| Nº do edital | Edital de Abertura nº 001/2026, publicado em 29/09/2026 (edição extra do DOE). Uma fonte o associa à Portaria Conjunta SAD/SDS nº 299, de 29/09/2026, mas não identifiquei a URL exata do trecho: **não confirmado** | (fonte secundária: https://portaldeprefeitura.com.br/oportunidades/pernambuco-editais-de-seguranca-sao-divulgados-com-1890-vagas-sendo/633132/ ; https://pontuaconcursos.com.br/noticias/concurso-pmpe-2026-edital/) |
| Cargos e vagas | 1.320 vagas: Soldado 1.250, 2º Tenente/Oficial 70. A divisão das vagas de Oficial por quadro diverge entre fontes (QOPM 40, QOM 15+5, QOD 10, ou 20 para QOM) | (fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-pmpe-edital-publicado-2026/amp/ ; https://cursosdoportal.com.br/noticias/concurso-pm-pe-2026-edital-publicado-de-r-561792-a-r-1293733-com-1320-vagas) |
| Inscrições | 05/10/2026 a 05/11/2026. **Divergência:** uma fonte indica término em 23/11/2026 | (fonte secundária: https://www.estrategiaconcursos.com.br/blog/?p=1808013 ; divergência no resultado de busca que agrega https://www.estoupreparado.com.br/noticias/4677-concurso-pmpe-2026-2027-confira-a-matriz-de-disciplinas-cobradas-nas-provas-para-soldado-e-oficial e https://pontuaconcursos.com.br/noticias/concurso-pmpe-2026-edital/) |
| Taxa | R$ 180 (Soldado) | (fonte secundária: https://www.estrategiaconcursos.com.br/blog/?p=1808013) |
| Prova objetiva e redação | 21/02/2027. Outra fonte menciona 28/02/2027, mas essa data parece ser a do CBMPE | (fonte secundária: https://portaldeprefeitura.com.br/oportunidades/concurso-pmpe-veja-conteudos-cobrados-nas-provas-do-novo-edital/633281/ ; https://pontuaconcursos.com.br/noticias/concurso-pmpe-2026-edital/) |
| Divergência sobre a existência do edital | Uma fonte diz que as publicações de 2026 "não representam um novo edital de abertura" e se referem ao concurso da Portaria Conjunta SAD/SDS nº 83/2023. A maioria das fontes de outubro de 2026 trata o Edital 001/2026 como novo | (fonte secundária: https://querobolsa.com.br/revista/edital-pmpe , provável origem; contra: https://concursosnobrasil.com/concursos/pe/2026/09/30/concurso-pm-pe-tem-edital-publicado-com-1-320-vagas-e-salarios-de-ate-r-129-mil/) |
| Retificações | Nenhuma localizada | Não confirmado |

### Conteúdo programático (fonte secundária)

- **Soldado:** 60 questões, 10 por disciplina, em 3 blocos com mínimo de 6 acertos por bloco. Bloco I: Língua Portuguesa e História de Pernambuco. Bloco II: Raciocínio Lógico e Informática. Bloco III: Direito Constitucional e Direitos Humanos e Legislação Extravagante. Há ainda redação. (fonte secundária: https://portaldeprefeitura.com.br/oportunidades/concurso-pmpe-veja-conteudos-cobrados-nas-provas-do-novo-edital/633281/ ; https://www.estoupreparado.com.br/noticias/4677-concurso-pmpe-2026-2027-confira-a-matriz-de-disciplinas-cobradas-nas-provas-para-soldado-e-oficial)
- **2º Tenente Combatente:** 70 questões.
  - Bloco I (30 questões): Língua Portuguesa, Língua Estrangeira (Inglês ou Espanhol), Raciocínio Lógico, Estatística e Informática.
  - Bloco II (20 questões): Direito Constitucional, Administrativo, Penal e Processual Penal.
  - Bloco III: Direitos e Garantias Fundamentais, Direito Penal Militar e Direito Processual Penal Militar.
  - (fonte secundária: https://portaldeprefeitura.com.br/oportunidades/concurso-pmpe-veja-conteudos-cobrados-nas-provas-do-novo-edital/633281/ , provável origem; não confirmado)
- **Tópicos detalhados:** conteúdo programático não localizado, inclusive a lista de leis de "Legislação Extravagante". Uma fonte diz que ele está no Anexo II do edital.

### Volumes no Canva

| Título | Design ID | Págs. |
|---|---|---|
| PMPE 2026 - Vol. 01 - Língua Portuguesa | DAHXKK20FrM | 20 |
| PMPE 2026 - Vol. 02 - História de Pernambuco | DAHXKHnSPeM | 12 |
| PMPE 2026 - Vol. 03 - Raciocínio Lógico | DAHXKDf0TF0 | 16 |
| PMPE 2026 - Vol. 04 - Informática | DAHXKPcDsaE | 20 |
| PMPE 2026 - Vol. 05 - Direito Constitucional | DAHXKHcMtAM | 22 |
| PMPE 2026 - Vol. 06 - Direitos Humanos | DAHXKOllWC0 | 75 |
| PMPE 2026 - Vol. 07 - Legislação Extravagante I | DAHXKMuLAcg | 92 |
| PMPE 2026 - Vol. 07 - Legislação Extravagante II | DAHXKCCYji8 | 64 |
| PMPE 2026 - Vol. 08 - Legislação Institucional | DAHXJy-i_Hg | 19 |
| PMPE 2026 - Direito Penal Militar (sem nº de volume) | DAHXJyEfJt0 | 23 |
| PMPE 2026 - Direito Penal - Parte Geral e Especial (sem nº de volume) | DAHXKQx0MUk | 73 |

Não encontrei duplicatas com o mesmo título. Dois volumes estão sem numeração.

### Lacunas

- **Se o produto cobre apenas Soldado:** as 6 disciplinas têm volume. A comparação de tópicos de Legislação Extravagante não é possível sem o Anexo II. Os Vols. 07 I e II cobrem ECA, Abuso de Autoridade, Tortura, Maria da Penha, Racismo, Crimes Ambientais, Hediondos, Drogas, Estatuto da Pessoa Idosa e Estatuto da Juventude. **Não há Estatuto do Desarmamento**, comum em provas de PM, mas não confirmei que ele esteja no edital.
- **Se o produto também cobre o 2º Tenente:** faltam volumes de Língua Estrangeira (Inglês ou Espanhol), Estatística, Direito Administrativo, Direito Processual Penal e Direito Processual Penal Militar. Conforme a fonte secundária acima, isso não está confirmado.
- **Vol. Direito Penal Militar (DAHXJyEfJt0):** o sumário tem tópicos repetidos (Desacato e Desobediência, Deserção e Insubordinação aparecem duas vezes cada) e não traz a parte geral completa do CPM (aplicação da lei penal militar, crime militar no art. 9º). Verificar.

### Sobras

- **Vol. Direito Penal (DAHXKQx0MUk)**, **Vol. Direito Penal Militar (DAHXJyEfJt0)** e **Vol. 08 Legislação Institucional (DAHXJy-i_Hg):** nenhuma dessas disciplinas aparece na lista do Soldado das fontes secundárias. Só seriam úteis para o 2º Tenente (Penal e Penal Militar) ou se o Anexo II incluir legislação institucional dentro de "Legislação Extravagante". **Não confirmado.**
- **Vol. 06 Direitos Humanos (DAHXKOllWC0, 75 págs.):** é idêntico ao volume de Delegado da PCPE (Vol. 15), com controle de convencionalidade, IDC, TPI e casos da Corte IDH. Para uma disciplina de 10 questões, que divide espaço com Legislação Extravagante, provavelmente é material além do necessário.
- **Estatuto da Juventude (Vol. 07 II):** inclusão não confirmada pelo edital.

### Pontos de atualização legal

O que segue é baseado só no sumário. A recomendação em cada caso é verificar se o volume incorpora a lei citada.

- **Lei 14.994/2024** (https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14994.htm): verificar o Vol. 07 I, seção Lei Maria da Penha (DAHXKMuLAcg); o Vol. 07 II, seção Hediondos (DAHXKCCYji8); e o Vol. Direito Penal, seção "Crimes contra a pessoa" (DAHXKQx0MUk). Neste último, o feminicídio passou a ser crime autônomo (art. 121-A).
- **Lei 15.384/2026, Vicaricídio, art. 121-B, LMP e Hediondos** (https://planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15384.htm): verificar os mesmos volumes (07 I, 07 II e Direito Penal).
- **Lei 15.125/2025, monitoração eletrônica na LMP** (fonte secundária: https://static.poder360.com.br/2025/04/Lei-no-15.125-tornozeleira-eletronica-agressores-24.abr_.2025.pdf): verificar o Vol. 07 I.
- **Lei 15.160/2025, arts. 65 e 115 do CP** (fonte secundária: https://mpce.mp.br/?p=52904): verificar o Vol. Direito Penal, seção "Extinção da punibilidade e prescrição".
- **Lei 14.751/2023, Lei Orgânica Nacional das PMs e CBMs:** já aparece no sumário do Vol. 08 ("DL 667/1969 e Lei 14.751/2023"). Nada a apontar.
- **Estatuto da PMPE (Lei 6.783/1974), LC 470/2021, LC 108/2008:** constam do Vol. 08. A Portaria de 2023 citava também a LC 352/2017 (fonte secundária: https://cdn.direcaoconcursos.com.br/uploads/2023/11/edital-pmpe.pdf, que é o edital de 2023), mas essa lei não aparece no sumário do Vol. 08. Não sei se o edital de 2026 a cita; verificar.

### Prioridade sugerida

**Alta.** As inscrições terminam em cerca de 2 semanas e a prova é em 21/02/2027. Além disso, o escopo da coleção não bate com a lista de disciplinas do Soldado (sobram Penal, Penal Militar e Institucional) e, se o produto também cobre o Oficial, faltam 5 disciplinas.

---

## CBMPE (Corpo de Bombeiros Militar de Pernambuco)

### Status do edital

Edital oficial não pôde ser aberto (site da banca bloqueado no ambiente); dados de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Instituto AOCP | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-bombeiros-pe-publicado ; https://www.estrategiaconcursos.com.br/blog/concurso-bombeiro-pe-edital-publicado-2026/) |
| Nº do edital | Edital nº 002/2026, citado por editora de apostilas: **não confirmado**. Publicado em 29/09/2026, em edição extra do DOE, junto com o da PMPE | (fonte secundária: https://www.novaconcursos.com.br/apostila/cbm-pe-soldado-corpo-bombeiros-militar ; https://portaldeprefeitura.com.br/oportunidades/pernambuco-editais-de-seguranca-sao-divulgados-com-1890-vagas-sendo/633132/) |
| Cargos e vagas | 570 vagas: Soldado 510, 2º Tenente (Oficial Combatente) 60; sem cadastro de reserva | (fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-bombeiro-pe-edital-publicado-2026/ ; https://portaldeprefeitura.com.br/oportunidades/concurso-bombeiros-pernambuco-banca-definida-570-vagas-salario/631528/) |
| Inscrições | 05/10/2026 a 05/11/2026. **Divergência:** uma editora indica até 08/11/2026 para o 2º Tenente | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-bombeiros-pe-publicado ; divergência: https://www.editorasolucao.com.br/apostila/cbm-pe-tenente-corpo-bombeiros-militar) |
| Taxas | R$ 180 (Soldado); R$ 220 (2º Tenente) | (fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-bombeiro-pe-edital-publicado-2026/) |
| Prova objetiva e redação | 28/02/2027 (5 horas de duração) | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-bombeiros-pe-publicado ; https://voceconcursado.com.br/concurso/concurso-cbm-pe-2026/) |
| Retificações | Nenhuma localizada | Não confirmado |

### Conteúdo programático (fonte secundária)

- **Soldado:** 60 questões e redação de 40 pontos.
  - Bloco I: Língua Portuguesa (10), Informática (5), Matemática (10), Raciocínio Lógico (5).
  - Bloco II: Física (5), Biologia (5).
  - Bloco III: Direito Constitucional (10), Atualidades (5), História de Pernambuco (5).
  - (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-bombeiros-pe-publicado ; https://voceconcursado.com.br/concurso/concurso-cbm-pe-2026/ ; lista de disciplinas confirmada em https://www.folhape.com.br/colunistas/blogdosconcursos/concurso-cbmpe-confira-vagas-cargos-salarios-provas-requisitos-e-etapas-edital-na-integra/60168/)
- **2º Tenente:** apostilas incluem Química (https://www.editorasolucao.com.br/apostila/cbm-pe-tenente-corpo-bombeiros-militar). A distribuição exata de disciplinas não foi confirmada.
- **Tópicos detalhados:** conteúdo programático não localizado.

### Volumes no Canva

| Título | Design ID | Págs. |
|---|---|---|
| CBMPE 2026 - Vol. 01 - Língua Portuguesa | DAHYv5p_cmo | 61 |
| CBMPE 2026 - Vol. 02 - Informática | DAHYvtY4NZ8 | 46 |
| CBMPE 2026 - Vol. 03 - Matemática | DAHYvxRUvrE | 32 (**sumário não localizado** nas págs. 2 a 4; o texto vem vazio a partir da pág. 3) |
| CBMPE 2026 - Vol. 04 - Raciocínio Lógico | DAHYvx_EcTQ | 26 |
| CBMPE 2026 - Vol. 05 - Física | DAHYvhIYwX0 | 23 |
| CBMPE 2026 - Vol. 06 - Direito Constitucional | DAHYv5YmsBA | 22 |
| CBMPE 2026 - Vol. 07 - História de Pernambuco | DAHYv6jOjI4 | 12 |
| CBMPE 2026 - Vol. 08 - Biologia | DAHYwFYbIHk | 19 |
| CBMPE 2026 - Vol. 09 - Atualidades | DAHYwO7LvEc | 15 |

Não encontrei duplicatas com o mesmo título. Volumes reaproveitados: o Vol. 01 tem sumário idêntico ao do PCPE Vol. 01; o Vol. 02, ao do PCPE Vol. 03; os Vols. 06 e 07 são idênticos aos Vols. 05 e 02 do PMPE; o Vol. 04 é idêntico ao PCPE Vol. 02.

### Lacunas

- **Disciplinas sem volume (Soldado):** nenhuma. As 9 disciplinas listadas pelas fontes têm volume.
- **2º Tenente:** se o produto o inclui, Química não tem volume. Não confirmado se a disciplina consta do edital.
- **Tópicos possivelmente ausentes** (sem o anexo, isto é indicação):
  - **Vol. 02 Informática (DAHYvtY4NZ8):** mesma lacuna do PCPE Vol. 03, sem redes, Internet e segurança da informação. Verificar.
  - **Vol. 05 Física (DAHYvhIYwX0):** o sumário cobre só Mecânica (cinemática, dinâmica, energia, impulso e colisões), com tópicos rodoviários ("Frenagem e distância de parada", "Força centrípeta e curvas na rodovia") que sugerem reaproveitamento de material da PRF. **Não há** hidrostática, termologia, óptica, ondas nem eletricidade. Verificar contra o edital.
  - **Vol. 03 Matemática:** não foi possível comparar porque o sumário não foi encontrado.
  - **Vol. 09 Atualidades (DAHYwO7LvEc):** os temas são genéricos e não há recorte de 2026 visível no sumário. O edital costuma delimitar um período, o que não foi possível verificar.

### Sobras

- **Vol. 01 Língua Portuguesa (DAHYv5p_cmo):** tem um bloco de Literatura, cerca de 10 seções. Provavelmente sobra, mas não foi confirmado.
- **Vol. 04 Raciocínio Lógico (DAHYvx_EcTQ):** inclui conjuntos, razão e proporção, porcentagem, juros, estatística e geometria, que se sobrepõem ao Vol. 03 Matemática. Há redundância; para uma disciplina de 5 questões, considerar enxugar.
- **Vol. 06 Direito Constitucional (DAHYv5YmsBA):** inclui Poderes e Funções Essenciais, conteúdo amplo para 10 questões. Não é sobra confirmada.

### Pontos de atualização legal

- Os volumes do CBMPE têm pouca legislação: só Direito Constitucional. **Não localizei** alteração constitucional de 2024 a 2026 com fonte que justifique apontar algo.
- **Lei 14.751/2023, Lei Orgânica Nacional das PMs e CBMs:** não há volume de legislação institucional no CBMPE, e as fontes também não listam essa disciplina para o Soldado. Nada a apontar, salvo se o edital cobrar legislação; não confirmado.
- **Vol. 09 Atualidades:** a seção "Violência contra a mulher" pode citar a Lei 14.994/2024 (https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14994.htm) e a Lei 15.384/2026 (https://planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15384.htm). Verificar se está atualizada.

### Prioridade sugerida

**Média.** Todas as disciplinas do Soldado têm volume e há pouca legislação sujeita a mudança. Faltam conferir a Física (só Mecânica), a Informática (sem redes e segurança) e o sumário da Matemática.


---

## GCM São Gonçalo (RJ)

### Status do edital

> Não foi possível abrir o edital oficial porque o site da banca está bloqueado no ambiente. Os dados abaixo são de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Instituto Selecon | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-guarda-de-sao-goncalo-publicado) |
| Edital | Edital nº 001/PMSG/2026 (Guarda Municipal Nível II); Edital nº 002/PMSG/2026 (Guarda Municipal Nível III – Psicólogo) | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-guarda-de-sao-goncalo-publicado ; https://arquivos.qconcursos.com/regulamento/arquivo/101981/prefeitura-de-sao-goncalo-rj-2026-guarda-municipal-psicologo-edital-n-2-edital.pdf) |
| Base legal citada no edital | Lei Municipal nº 1.625/2026 e Decreto nº 384/2026 | (fonte secundária: https://www.editorasolucao.com.br/blog/wp-content/uploads/2026/09/Concurso-Guarda-de-Sao-Goncalo-RJ-Edital.pdf, vista apenas como trecho de busca) |
| Publicação | 23/09/2026 | (fonte secundária: https://folha.qconcursos.com/n/concurso-guarda-de-sao-goncalo-rj-2026-edital) |
| Vagas | **Há divergência:** 100 imediatas + 500 CR (GM II) e 1 + CR de 5 (Psicólogo), segundo a Direção; "101 vagas" segundo Focus e Gran; "606 vagas" segundo QConcursos; "601" segundo povonarua | (fonte secundária: direcaoconcursos acima; https://noticias.focusconcursos.com.br/noticias/concurso-gcm-sao-goncalo-101-vagas-e-ate-r-45-mil-de-salario ; https://folha.qconcursos.com/n/concurso-guarda-de-sao-goncalo-rj-2026-edital ; https://povonarua.com.br/concurso-guarda-municipal-sao-goncalo-edital-vagas/) |
| Inscrições | 28/09/2026 a 18/11/2026 (**uma fonte diz 18/10/2026**) | (fonte secundária: https://blog.grancursosonline.com.br/concurso-gcm-sao-goncalo-rj/ ; divergência apontada em resultado de busca não individualizado, não confirmado) |
| Prova objetiva | 24/01/2027, de manhã, 4 h, 80 questões | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-guarda-de-sao-goncalo-publicado) |
| Estrutura da prova | Língua Portuguesa 15 · Noções de Direito 20 (Constitucional, Penal, Processual Penal, Administrativo) · Legislação Extravagante 15 · Conhecimentos Específicos 20 (peso 2) · Informática 10. A QConcursos chama o bloco de peso 2 de "Legislação da Guarda Municipal de São Gonçalo" | (fonte secundária: direcaoconcursos acima; https://folha.qconcursos.com/n/concurso-guarda-de-sao-goncalo-rj-2026-edital) |
| Retificações | A página da Selecon lista a Retificação nº 02 do Edital 001/2026, de 16/10/2026. O conteúdo não foi verificado | (fonte secundária: https://selecon.selecao.net.br/informacoes/73/, vista apenas como trecho de busca) |
| Salário e requisitos | R$ 3.172,96 de base; ensino médio; 18 a 35 anos; CNH AB/AC/AD/AE. Taxa de R$ 95,18 ou R$ 95,00 (as fontes divergem) | (fonte secundária: https://blog.grancursosonline.com.br/concurso-gcm-sao-goncalo-rj/) |

**Conteúdo programático (fonte secundária, incompleto)**
- **Legislação Extravagante:** Crimes Hediondos, Abuso de Autoridade, Tortura, crimes do ECA, Estatuto do Desarmamento, Crimes Ambientais, Maria da Penha, Drogas, Organizações Criminosas e CTB. (fonte secundária: https://cursosdoportal.com.br/noticias/concurso-guarda-municipal-sao-goncalo-rj-2026-inscricoes-abertas-ate-r-4535-com ; https://radardeconcursos.com/concurso/prefeitura-de-sao-goncalo-sao-goncalo-edital-1-2026)
- **Conhecimentos Específicos:** Lei Municipal 1.416/2022 (Estatuto dos Servidores) e Lei Municipal 1.625/2026 (Estatuto da Guarda) aparecem como tópicos do edital. (fonte secundária: https://www.grancursosonline.com.br/cursos/por-concurso/gcm-sao-goncalo-rj-guarda-municipal-nivel-ii-pos-edital). A presença da Lei 13.022/2014 e da Lei 13.675/2018 só aparece em pacote de curso e **não está confirmada**. (https://www.rateiodecursonline.com/Categoria/pacote-gcm-sao-goncalo-guarda-2026/)
- **Língua Portuguesa, Informática, Constitucional, Administrativo, Penal e Processo Penal:** conteúdo programático detalhado não localizado. O Anexo III do edital não estava disponível nos resultados.

### Volumes no Canva
1. GCM São Gonçalo 2026 - Vol. 01 - Língua Portuguesa — DAHWtthpNC4 — 51 p.
2. GCM São Gonçalo 2026 - Vol. 02 - Direito Constitucional - Parte 1 — DAHWtvDXumA — 77 p.
3. GCM São Gonçalo 2026 - Vol. 02 - Direito Constitucional - Parte 2 — DAHWtpJUKLY — 64 p.
4. GCM São Gonçalo 2026 - Vol. 03 - Direito Administrativo — DAHWtrh4cUA — 49 p.
5. GCM São Gonçalo 2026 - Vol. 04 - Direito Penal - Parte Geral — DAHWtiL8VGo — 47 p.
6. GCM São Gonçalo 2026 - Vol. 05 - Direito Penal - Parte Especial (Parte 1/2) — DAHWtjYRh-s — 75 p.
7. GCM São Gonçalo 2026 - Vol. 05 - Direito Penal - Parte Especial (Parte 2/2) — DAHWtsxQoFg — 38 p.
8. GCM São Gonçalo 2026 - Vol. 06 - Processo Penal — DAHWtk0rOec — 58 p.
9. GCM São Gonçalo 2026 - Vol. 07 - Legislação Extravagante - Parte 1 — DAHWtokxJww — 70 p. (Maria da Penha, Drogas, Desarmamento)
10. GCM São Gonçalo 2026 - Vol. 07 - Legislação Extravagante - Parte 2 — DAHWtnhs1sU — 80 p. (Abuso de Autoridade, OrCrim, Hediondos, Ambientais, ECA – crimes)
11. GCM São Gonçalo 2026 - Vol. 07 - Legislação Extravagante - Parte 3 — DAHWtvGVED8 — 81 p. (Tortura, Lavagem de Dinheiro, CTB)
12. GCM São Gonçalo 2026 - Vol. 08 - Informática — DAHWttIYVHs — 42 p.
13. GCM São Gonçalo 2026 - Vol. 09 - Conhecimentos Específicos — DAHWtqOyXF8 — 30 p. (Lei 13.022/14, STF e guardas, SUSP, Lei 1.625/26, Dec. 334/26, Lei 1.416/22)

Não encontrei duplicatas com o título "GCM São Gonçalo". Duas páginas de busca foram percorridas.

### Lacunas
- **Disciplinas sem volume:** nenhuma. As 5 disciplinas da fonte secundária (LP, Noções de Direito, Legislação Extravagante, Conhecimentos Específicos e Informática) têm volume.
- **Legislação Extravagante:** os 10 diplomas listados pela fonte secundária estão todos nos sumários do Vol. 07 P1/P2/P3.
- **Divergência no número do decreto:** o sumário do Vol. 09 (DAHWtqOyXF8) traz "Carreira e promoção (**Dec. 334/26**)", mas o trecho do edital cita "**Decreto nº 384/2026**". Pode ser erro de digitação no volume ou um decreto diferente. **Verificar.**
- **Vol. 06 Processo Penal (DAHWtk0rOec):** o sumário não tem Ação Penal, Provas, Cadeia de Custódia nem Busca e Apreensão. O volume equivalente de Campina Grande (Vol. 09, DAHWwMWtrd0) tem esses tópicos. Como o conteúdo detalhado de Processo Penal não foi localizado, não dá para dizer se fazem falta. Fica como ponto de checagem.
- **Vol. 02 Constitucional (DAHWtvDXumA e DAHWtpJUKLY):** o sumário não tem Teoria/Classificação da Constituição, presente no volume de Campina Grande. A cobrança não foi confirmada.
- **Demais tópicos:** sem o Anexo III não é possível apontar tópicos ausentes em LP, Informática, Administrativo e Penal.

### Sobras
- **Vol. 07 P3 (DAHWtvGVED8):** "Lavagem de Dinheiro (Lei 9.613/1998)" não está na lista secundária de Legislação Extravagante. Pode sobrar.
- **Vol. 06 (DAHWtk0rOec):** "JECRIM (Lei 9.099/95)" não aparece na lista secundária. Pode ser sobra, ou pode estar em Noções de Direito (não confirmado).
- **Vol. 05 P2 (DAHWtsxQoFg):** o bloco "Crimes contra a Administração da Justiça" pode exceder o edital (não confirmado).

### Pontos de atualização legal
- **Vicaricídio – Lei 15.384/2026 (art. 121-B CP).** A lei também inclui o crime no rol de hediondos e cria a violência vicária na Lei Maria da Penha (art. 7º, VI). (fonte: https://legis.senado.leg.br/norma/43037009/publicacao/43039507 ; https://www2.camara.leg.br/legin/fed/lei/2026/lei-15384-9-abril-2026-798939-normaatualizada-pl.html). O Vol. 05 P1 (DAHWtjYRh-s) já tem "Vicaricídio (art. 121-B)". **Verificar** se o Vol. 07 P2 (DAHWtnhs1sU, Hediondos) e o Vol. 07 P1 (DAHWtokxJww, Maria da Penha) incorporam a Lei 15.384/2026.
- **Lei 15.272/2025 (CPP, arts. 310 §§5º–6º, 310-A e 312 §§3º–4º).** (fonte: https://www2.camara.leg.br/legin/fed/lei/2025/lei-15272-26-novembro-2025-798356-norma-pl.html). O Vol. 06 (DAHWtk0rOec) tem "Atenção GCM + Lei 15.272/2025". Parece incorporada.
- **STF Tema 656 / RE 608.588 (20/02/2025):** guardas podem fazer policiamento ostensivo e comunitário. (fonte: https://blog.grupogen.com.br/juridico/tipo/informativo/guardas-municipais-podem-fazer-policiamento-ostensivo-e-outras-noticias-21-02-2025/). O Vol. 09 (DAHWtqOyXF8) tem "STF e as guardas municipais". **Verificar** se cita a tese do Tema 656.
- **Lei 14.994/2024 (Pacote Antifeminicídio):** o Vol. 05 P1 traz "Feminicídio (art. 121-A)", então está incorporada no nível do sumário.
- **Lei 14.230/2021 (Improbidade):** o Vol. 03 (DAHWtrh4cUA) tem "Tema 1.199 do STF". Parece incorporada.
- **Lei 13.022/2014:** não achei alteração aprovada em 2025–2026, só o PL 2381/2025 em tramitação. (fonte: https://legis.senado.gov.br/sdleg-getter/documento?dm=9954761). A promulgação da PEC da Segurança Pública (guardas no art. 144) **não foi confirmada**. (fonte: https://vermelho.org.br/?p=718562)

### Prioridade sugerida
**Média.** A cobertura bate com a estrutura divulgada e a prova é só em 24/01/2027. Falta conferir o Anexo III, a Retificação nº 02 e o número do decreto (334 x 384).

---

## GCM Campina Grande (PB)

### Status do edital

> Não foi possível abrir o edital oficial porque o site da banca está bloqueado no ambiente. Os dados abaixo são de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Idecan | (fonte secundária: https://blog.grancursosonline.com.br/concurso-gcm-campina-grande-pb-edital-publicado-2026/) |
| Edital | Edital nº 03/2026, de 09/05/2026 (Guarda Civil Municipal) | (fonte secundária: https://campinagrande.pb.gov.br/wp-content/uploads/2026/05/EDITAL-CAMPINA-GRANDE-GUARDA-MUNICIPAL.pdf, vista apenas como trecho de busca) |
| Vagas | 30 (27 em ampla concorrência e 3 PcD). Uma notícia diz que uma decisão judicial mandou reservar 10% para candidatos negros | (fonte secundária: https://folha.qconcursos.com/n/prefeitura-de-campina-grande-pb-retifica-concurso-gcm-com-30-vagas ; https://magistrarcursos.com.br/blog/concurso-gcm-campina-grande-tera-edital-retificado-provas-sao-adiadas/) |
| Remuneração | R$ 1.535,84 + GEAT de 100% | (fonte secundária: https://folha.qconcursos.com/n/prefeitura-de-campina-grande-pb-retifica-concurso-gcm-com-30-vagas) |
| Inscrições | 14/05 a 15/06/2026, prorrogadas até 13/07/2026 pela Retificação nº 04/2026. Outras datas citadas: 25/06 | (fonte secundária: https://folha.qconcursos.com/n/prefeitura-de-campina-grande-pb-retifica-concurso-gcm-com-30-vagas ; https://www.qconcursos.com/concursos/prefeitura-municipal-de-campina-grande) |
| Prova objetiva | Data original de 29–30/08/2026. **Foi reprogramada para 21–22/11/2026** por decisões da 1ª Vara da Fazenda Pública de Campina Grande. Houve suspensão judicial com retificação e reabertura de inscrições para cotas | (fonte secundária: https://blog.grancursosonline.com.br/concurso-campina-grande-pb-provas-adiadas-2026/amp/ ; https://magistrarcursos.com.br/blog/concurso-gcm-campina-grande-tera-edital-retificado-provas-sao-adiadas/) |
| TAF | 24–25/10/2026 no cronograma de junho. Provavelmente defasado depois do adiamento (não confirmado) | (fonte secundária: https://fiibrasil.com/paraiba-2/concurso-guarda-municipal-campina-grande-pb-2026/) |
| Taxa | R$ 110,00 ou R$ 95,00 (as fontes divergem) | (fonte secundária: folha.qconcursos acima; magistrarcursos acima) |
| Nº de questões | **Há divergência:** 60 questões (LP 8, RLM 4, História de CG 4, Legislação e Ética 4, Adm, Const e Penal, Leg. Extravagante 10) em uma fonte e 40 questões em outra | (fonte secundária: https://blog.grancursosonline.com.br/concurso-gcm-campina-grande-pb-edital-publicado-2026/ ; https://www.direcaoconcursos.com.br/noticias/edital-gcm-campina-grande-publicado) |

**Conteúdo programático (fonte secundária, incompleto)**
- **Disciplinas:** Língua Portuguesa, Raciocínio Lógico, História de Campina Grande, Legislação e Ética no Serviço Público, Direito Administrativo, Direito Constitucional com Direitos Humanos, Direito Penal e Processo Penal, e Legislação Extravagante. (fonte secundária: https://www.novaconcursos.com.br/apostila/prefeitura-campina-grande-pb-guarda-civil-municipal ; https://dominaconcursos.com.br/produto/apostila-guarda-civil-municipal-campina-grande-pb-2026/)
- **Legislação Extravagante:** inclui o Estatuto Geral das Guardas Municipais e o CTB. (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-gcm-campina-grande-publicado)
- **Tópicos detalhados:** conteúdo programático detalhado (Anexo II) não localizado.

### Volumes no Canva
1. GCM Campina Grande 2026 - Vol. 01 - Língua Portuguesa — DAHWwAB-n0M — 49 p.
2. **Duplicata:** GCM Campina Grande 2026 - Vol. 01 - Língua Portuguesa — DAHWwGUMYaY — 1 p. É uma página solta, "Formação de palavras" (p. 35), sem sumário. Parece rascunho ou cópia avulsa.
3. GCM Campina Grande 2026 - Vol. 02 - Raciocínio Lógico — DAHWwP3cr5E — 43 p.
4. GCM Campina Grande 2026 - Vol. 03 - História de Campina Grande — DAHWwH7stT0 — 15 p.
5. GCM Campina Grande 2026 - Vol. 04 - Legislação e Ética no Serviço Público — DAHWwBEP7II — 79 p. (Ética, Dec. 1.171/94, LOM, LAI, LGPD, Lei 15.352/2026)
6. GCM Campina Grande 2026 - Vol. 05 - Direito Administrativo — DAHWwMV9cGM — 59 p.
7. GCM Campina Grande 2026 - Vol. 06 - Direito Constitucional - Parte 1 — DAHWwLpSPI4 — 61 p.
8. GCM Campina Grande 2026 - Vol. 06 - Direito Constitucional - Parte 2 — DAHWwAxomfI — 42 p.
9. GCM Campina Grande 2026 - Vol. 07 - Direitos Humanos — DAHWwCKsV2s — 21 p.
10. GCM Campina Grande 2026 - Vol. 08 - Direito Penal - Parte Geral — DAHWwDtPWv8 — 47 p.
11. GCM Campina Grande 2026 - Vol. 08 - Direito Penal - Parte Especial 1 — DAHWwMkyCtg — 75 p.
12. GCM Campina Grande 2026 - Vol. 08 - Direito Penal - Parte Especial 2 — DAHWwO1l6Iw — 35 p.
13. GCM Campina Grande 2026 - Vol. 09 - Processo Penal — DAHWwMWtrd0 — 77 p.
14. GCM Campina Grande 2026 - Vol. 10 - Legislação Extravagante - Parte 1 — DAHWwPbK05U — 70 p. (Maria da Penha, Drogas, Desarmamento)
15. GCM Campina Grande 2026 - Vol. 10 - Legislação Extravagante - Parte 2 — DAHWwGABBP4 — 81 p. (Abuso de Autoridade, Ambientais, ECA, Lei 7.716/89, Lei 13.022/14)
16. GCM Campina Grande 2026 - Vol. 10 - Legislação Extravagante - Parte 3 — DAHWwK359Mo — 77 p. (CTB, Improbidade Lei 8.429/92)

**Reaproveitamento entre produtos:** os sumários de Penal Parte Geral e Parte Especial 1, e de Leg. Extravagante P1, são idênticos aos de São Gonçalo. Não é um problema, só um registro.

### Lacunas
- **Disciplinas sem volume:** nenhuma, considerando a lista secundária de disciplinas.
- **Estatuto das Guardas e CTB:** citados pela fonte secundária, estão cobertos (Vol. 10 P2 e P3).
- **Vol. 07 Direitos Humanos (DAHWwCKsV2s):** tem só 21 p. A fonte secundária junta DH com Constitucional. O peso não foi confirmado.
- **SUSP (Lei 13.675/2018):** não aparece em nenhum sumário de Campina Grande, mas está no Vol. 09 de São Gonçalo. A cobrança em Campina Grande não foi confirmada.
- **Demais tópicos:** sem o Anexo II não é possível apontar tópicos ausentes.

### Sobras
- **Vol. 10 P3 (DAHWwK359Mo):** traz "Improbidade Administrativa (Lei 8.429/1992)" dentro de Legislação Extravagante. Pode estar em Administrativo ou em Ética no edital, ou não estar. Não confirmado.
- **Vol. 10 P2 (DAHWwGABBP4):** "Preconceito de Raça ou Cor (Lei 7.716/89)" não está confirmado na lista secundária.
- **Vol. 06 P2 (DAHWwAxomfI) e Vol. 09 (DAHWwMWtrd0):** o capítulo de remédios constitucionais e os tópicos de provas são extensos para uma prova com cerca de 4 questões por bloco. Ponto de atenção, não é erro.

### Pontos de atualização legal
- **Lei 15.352/2026 (ANPD vira autarquia especial, alterando a LGPD).** (fonte: https://www2.camara.leg.br/legin/fed/lei/2026/lei-15352-25-fevereiro-2026-798731-norma-pl.html). O Vol. 04 (DAHWwBEP7II) já tem "LGPD: ANPD (Lei 15.352/2026)". Parece incorporada.
- **Lei 15.384/2026 (vicaricídio, hediondo, violência vicária na LMP).** (fonte: https://legis.senado.leg.br/norma/43037009/publicacao/43039507). O Vol. 08 PE1 (DAHWwMkyCtg) tem o art. 121-B. **Verificar** se o Vol. 10 P1 (DAHWwPbK05U, Maria da Penha) incorpora o art. 7º, VI.
- **Lei 15.272/2025 (CPP).** O Vol. 09 (DAHWwMWtrd0) tem "Atenção GCM + Lei 15.272/2025". Parece incorporada.
- **STF Tema 656 (20/02/2025).** (fonte: https://blog.grupogen.com.br/juridico/tipo/informativo/guardas-municipais-podem-fazer-policiamento-ostensivo-e-outras-noticias-21-02-2025/). **Verificar** se o Vol. 10 P2 (DAHWwGABBP4, Lei 13.022/14) e o Vol. 06 P2 (DAHWwAxomfI, "Segurança Pública (art. 144)") incorporam a tese, porque o sumário não a menciona.
- **Lei 14.230/2021.** **Verificar** se o Vol. 10 P3 (DAHWwK359Mo, "Improbidade Administrativa (Lei 8.429/1992)") traz a redação da Lei 14.230/2021 e o Tema 1.199. O sumário não menciona nenhum dos dois. (fonte de contexto: o próprio volume de São Gonçalo, DAHWtrh4cUA, já traz o Tema 1.199; a fonte externa da Lei 14.230 não foi buscada nesta rodada)

### Prioridade sugerida
**Alta.** A prova foi reprogramada para 21–22/11/2026 (fonte secundária), daqui a cerca de 1 mês. É preciso confirmar o novo cronograma e as retificações (cotas e nº de questões, 40 ou 60) e limpar a duplicata DAHWwGUMYaY.

---

## TJPB (Tribunal de Justiça da Paraíba)

### Status do edital

> Não foi possível abrir o edital oficial porque o site da banca está bloqueado no ambiente. Os dados abaixo são de fonte secundária. **Até a data das buscas, o edital ainda não tinha sido publicado.**

| Item | Dado | Fonte |
|---|---|---|
| Banca | FGV, contratada por dispensa. Contrato nº 076/2026, valor estimado de R$ 1.257.000,00, vigência de 12 meses. A Nova Concursos dá a assinatura como 03/10/2026 | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316567 ; https://www.direcaoconcursos.com.br/noticias/concurso-tj-pb-fgv-banca) |
| Comissão | Portaria nº 1.506, de 22/07/2026 | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tj-pb-minuta-edital-avanca-2026/) |
| Nº do edital | Não publicado / não confirmado | — |
| Cargos e vagas | **Há divergência:** 50 vagas de Analista Judiciário (25 Direito, 20 TI, 5 Contadoria), conforme o termo de referência; e 56 vagas em notícia anterior, incluindo 6 para juiz substituto. Outra fonte menciona áreas de Assistência Social, Psicologia, Pedagogia e Psiquiatria | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316567 ; https://www.direcaoconcursos.com.br/noticias/concurso-tj-pb-56-vagas ; https://www.estrategiaconcursos.com.br/blog/concurso-tj-pb) |
| Salário | R$ 7.244,79 (analista) | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/concurso-tj-pb-56-vagas) |
| Inscrições e prova | Não divulgadas. As previsões vão de "próxima semana" (Gran) a "2027" (Estratégia) | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tj-pb-minuta-edital-avanca-2026/ ; https://www.estrategiaconcursos.com.br/blog/concurso-tj-pb) |
| Retificações | Não se aplica (sem edital) | — |

**Cargo-alvo do material no Canva (inferência a partir dos sumários):** Analista Judiciário, área judiciária (Direito). Os volumes cobrem Direito Civil, Processo Civil, Penal, Processo Penal, Consumidor e Legislação Penal Especial. Não há material para TI ou Contadoria.

**Conteúdo programático:** não localizado, porque o edital não saiu.

### Volumes no Canva
1. TJPB 2026 - Vol. 01 - Língua Portuguesa (Resumos Ilustrados) — DAHYwx-BE9U — 61 p. (inclui Literatura)
2. TJPB 2026 - Vol. 02 - Ética e Gestão no Serviço Público (Resumos Ilustrados) — DAHYw8L5zHI — 19 p.
3. TJPB 2026 - Vol. 03 - Noções de Informática e Proteção de Dados (Resumos Ilustrados) — DAHYw-_XeYk — 46 p.
4. TJPB 2026 - Vol. 03-B - LGPD e Proteção de Dados (Resumos Ilustrados) — DAHYxEso4bg — 13 p.
5. TJPB 2026 - Vol. 04 - Direito Constitucional (Resumos Ilustrados) — DAHYw8Gj27M — 79 p.
6. TJPB 2026 - Vol. 05 - Direito Administrativo (Resumos Ilustrados) — DAHYw04qxhA — 89 p.
7. TJPB 2026 - Vol. 06 - Direito Civil (Resumos Ilustrados) — DAHYwzRa5yA — 60 p.
8. TJPB 2026 - Vol. 06-B - Direito do Consumidor (Resumos Ilustrados) — DAHYxNGzmKQ — 17 p.
9. TJPB 2026 - Vol. 07 - Direito Processual Civil (Resumos Ilustrados) — DAHYw6O_8sY — 115 p. (sumário na p. 1)
10. TJPB 2026 - Vol. 07 - Direito Processual Civil I (Resumos Ilustrados) — DAHYw16s29U — 58 p. **Sumário não localizado nas p. 1–4**, que já são conteúdo (gratuidade, pp. "56–58" do original).
11. TJPB 2026 - Vol. 07 - Direito Processual Civil II (Resumos Ilustrados) — DAHYw1SsTTw — 59 p. **Sumário não localizado nas p. 1–4**, que já são conteúdo (pp. "114–116" do original).
12. TJPB 2026 - Vol. 08 - Direito Penal I - Parte Geral (Resumos Ilustrados) — DAHYw-VNd-M — 61 p.
13. TJPB 2026 - Vol. 08 - Direito Penal II - Parte Especial (Resumos Ilustrados) — DAHYw1WDXLM — 75 p.
14. TJPB 2026 - Vol. 09 - Direito Processual Penal (Resumos Ilustrados) — DAHYw9m3lHQ — 83 p.
15. TJPB 2026 - Vol. 10 - Legislação Penal Especial I (Resumos Ilustrados) — DAHYw1--IK8 — 91 p. (Maria da Penha, Drogas, Desarmamento, Lei 7.716/89, Interceptação)
16. TJPB 2026 - Vol. 10 - Legislação Penal Especial II (Resumos Ilustrados) — DAHYw5ZAkwk — 68 p. (Abuso de Autoridade, OrCrim, JECRIM, Hediondos, Ambientais)
17. TJPB 2026 - Vol. 10 - Legislação Penal Especial III (Resumos Ilustrados) — DAHYw9bT4X0 — 65 p. (Contravenções, Crimes contra Relações de Consumo, LEP)
18. TJPB 2026 - Vol. 10 - Legislação Penal Especial IV (Resumos Ilustrados) — DAHYw6fweNE — 58 p. (ECA, Lei Henry Borel, Tortura, Prisão Temporária)
19. TJPB 2026 - Vol. 11 - Direitos Humanos e Tutela Coletiva (Resumos Ilustrados) — DAHYwxLC8Bc — 75 p.

**Possível sobreposição no Vol. 07:** o Vol. 07 inteiro (115 p.) parece ter sido desmembrado em I (58 p.) e II (59 p.), que somam cerca de 117 p. Os três existem ao mesmo tempo, e I e II começam sem capa de sumário própria. Convém decidir qual versão é a oficial.

### Lacunas
Como o edital não saiu, não é possível comparar tópico a tópico. Ficam só observações estruturais:
- **Legislação institucional do TJPB:** não há volume para Regimento Interno do TJPB ou Lei de Organização Judiciária (LOJE-PB), matéria comum em concursos de TJ. A cobrança **não está confirmada**: a busca pela minuta não trouxe essas normas.
- **Áreas de TI e Contadoria:** 25 das 50 vagas segundo o termo de referência (fonte secundária). Não há material para elas. Se o produto mira só a área judiciária, isso deve ficar explícito na oferta.
- **Vol. 11 "Direitos Humanos e Tutela Coletiva" (DAHYwxLC8Bc):** o sumário lista só tópicos de DH. A tutela coletiva (MS e MI coletivos, processo coletivo) aparece no fim do Vol. 07 (DAHYw6O_8sY), e o título pode estar desalinhado com o conteúdo.
- **Vol. 07 I e II (DAHYw16s29U e DAHYw1SsTTw):** não têm sumário legível nas páginas iniciais.

### Sobras
- **Vol. 01 (DAHYwx-BE9U):** o bloco de **Literatura** (Quinhentismo ao Contemporâneo) é atípico para analista de TJ em prova da FGV. Pode sobrar (não confirmado).
- **Vol. 04 (DAHYw8Gj27M):** "Segurança Pública e Polícia Penal" e o Vol. 10 III (DAHYw9bT4X0) "Lei de Execução Penal" podem sobrar. Depende do edital.
- **Vol. 03 (DAHYw-_XeYk) Informática:** o sumário é quase idêntico ao de Informática da GCM São Gonçalo, com acréscimo de Microsoft 365. A pertinência para a FGV não foi confirmada.

### Pontos de atualização legal
- **Lei 15.352/2026 (ANPD).** (fonte: https://www2.camara.leg.br/legin/fed/lei/2026/lei-15352-25-fevereiro-2026-798731-norma-pl.html). **Verificar** se o Vol. 03-B (DAHYxEso4bg, "ANPD, sanções e responsabilidade") e o Vol. 03 (DAHYw-_XeYk) incorporam a ANPD como autarquia especial.
- **Lei 15.272/2025 (CPP: preventiva, audiência de custódia, DNA).** (fonte: https://www2.camara.leg.br/legin/fed/lei/2025/lei-15272-26-novembro-2025-798356-norma-pl.html). **Verificar** se o Vol. 09 (DAHYw9m3lHQ), em "Da Prisão Preventiva", incorpora a Lei 15.272/2025. O sumário não a menciona, ao contrário dos volumes das GCMs.
- **Lei 15.384/2026 (vicaricídio, hediondo, LMP art. 7º, VI).** (fonte: https://legis.senado.leg.br/norma/43037009/publicacao/43039507). O Vol. 08 II (DAHYw1WDXLM) tem "Vicaricídio". **Verificar** se o Vol. 10 I (DAHYw1--IK8, Maria da Penha) e o Vol. 10 II (DAHYw5ZAkwk, Hediondos) incorporam a lei.
- **Lei 14.994/2024 (Feminicídio autônomo).** O Vol. 08 II traz "Feminicídio" sem o número do artigo. **Verificar** se o volume trata o feminicídio como art. 121-A, tipo autônomo, e não mais como qualificadora.
- **Resoluções:** o Vol. 02 (DAHYw8L5zHI) cita a Res. TJPB 20/2025, a Res. TJPB 21/2025, a Res. CNJ 351/2020 e as Res. CNJ 230 e 400/2021. Não achei fonte confirmando os números e o conteúdo das resoluções do TJPB (**não verificado**).

### Prioridade sugerida
**Baixa a Média.** O edital ainda não saiu, só há contrato com a FGV. A revisão completa deve esperar o edital. Já dá para arrumar a duplicidade do Vol. 07 (inteiro x I/II), o título do Vol. 11 e a ausência de sumário nos volumes I e II.


---

## CBMAL (Corpo de Bombeiros Militar de Alagoas)

### Status do edital

**O edital oficial não pôde ser aberto porque o site da banca está bloqueado no ambiente. Os dados são de fonte secundária.**

| Item | Dado | Fonte |
|---|---|---|
| Banca | Cebraspe | fonte secundária: https://noticias.focusconcursos.com.br/noticias/concurso-bombeiros-al-2026-edital-publicado-com-344-oportunidades-e-salarios-que-passam-de-r-11-mil |
| Edital | Edital nº 1 – CBM/AL, de 21/05/2026 | fonte secundária: https://concursosnobrasil.com/concursos/al/2026/05/22/concurso-bombeiros-al-tem-edital-publicado-para-344-vagas-de-ate-r-115-mil/ ; link do PDF no CDN do Cebraspe, aparece no buscador mas não foi aberto: https://cdn.cebraspe.org.br/concursos/cbm_al_26/arquivos/B6C739F9C0D66DEEF04EC87C4BFC5F135CD816AE8B6EE5BE6312F441B5A5102C.pdf |
| Retificações citadas | Edital nº 2 (15/06/2026): substitui o Anexo III e inclui a Lei Estadual 9.905/2026. Edital nº 4 (09/07/2026). Edital nº 7 (04/09/2026, DOE 08/09): baseado em decisão judicial. Um portal chama a suspensão de "Edital nº 6 de 12/08/2026", **numeração divergente** | fonte secundária (resumo do buscador sobre PDFs do CDN Cebraspe; não abertos); https://www.direcaoconcursos.com.br/noticias/concurso-bombeiros-al-provas-suspensas ; https://www.acheconcursos.com.br/noticias/concurso-dos-bombeiros-al-tem-provas-suspensas-na-justica-veja-o-que-muda-92525 |
| Cargos | Oficial de Estado-Maior (CFO), Praça BM Combatente (QPBM/1) e Praça BM Motomecanização (QPBM/2) | fonte secundária: https://noticias.focusconcursos.com.br/noticias/concurso-bombeiros-al-2026-edital-publicado-com-344-oportunidades-e-salarios-que-passam-de-r-11-mil |
| Vagas | 344 no total: 172 imediatas + 172 de cadastro de reserva (Oficial 22, Combatente 105, Motomecanização 45, cada um com igual número em CR). Uma fonte cita só as 172 imediatas | fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-bombeiro-al-2026-vagas-distribuicao/amp/ ; https://portaldeprefeitura.com.br/oportunidades/concurso-para-bombeiros-em-alagoas-tem-edital-com-172-vagas/623768/ |
| Inscrições (original) | 16/06 a 21/07/2026, taxa de R$ 150 | fonte secundária: https://noticias.focusconcursos.com.br/noticias/concurso-bombeiros-al-2026-edital-publicado-com-344-oportunidades-e-salarios-que-passam-de-r-11-mil |
| Prova (original) | 11/10/2026, em Maceió e Arapiraca. **Suspensa** | fonte secundária: https://www.direcaoconcursos.com.br/noticias/concurso-bombeiros-al-provas-suspensas |
| Suspensão | Agravo de Instrumento nº 0809142-56.2026.8.02.0000 (4ª Câmara Cível, TJ-AL). Motivo citado: a exceção ao limite de idade para oficiais, que valia só para bombeiros de AL, foi considerada ilegal. As fontes divergem sobre quem determinou a suspensão | fonte secundária: https://www.acheconcursos.com.br/noticias/concurso-dos-bombeiros-al-tem-provas-suspensas-na-justica-veja-o-que-muda-92525 ; https://www.novaconcursos.com.br/portal/?p=57534 ; https://folha.qconcursos.com/n/concurso-bombeiros-al-2026-suspenso |
| Retomada | Concurso "retomado": inscrições reabertas de 18/09 a 26/10/2026, pagamento até 28/10. **Nova data de prova não confirmada** | fonte secundária: https://blog.grancursosonline.com.br/concurso-bombeiro-al-cbm-2026-retomado/amp/ |
| Formato | 120 questões do tipo Certo/Errado | fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-bombeiros-al-2026-disciplinas/ |
| Base legal citada | Lei Estadual 5.346/1992 e alterações; Lei 6.568/2005; Lei 7.858/2016 (o item 1.6 cita a Lei 7.444/2012, **divergência**); Lei 9.905/2026; Lei 14.751/2023 | fonte secundária (resumo do buscador sobre o PDF do CDN Cebraspe acima, não aberto) |

### Conteúdo programático (fonte secundária)

- **Disciplinas (Oficial de Estado-Maior), segundo uma apostila comercial:** Língua Portuguesa, Língua Inglesa, Matemática, Raciocínio Lógico e Analítico, Cidadania e Direitos Humanos, Física, Química, Biologia, Noções de Direito Administrativo, Noções de Direito Constitucional, Noções de Informática, Legislação Pertinente ao CBM/AL e Atualidades. Fonte secundária: https://www.apostilasopcao.com.br/apostila/cbm-al-aspirante-a-oficial-bombeiro-militar. A própria editora avisa que o material "não se limita à bibliografia oficial".
- **Bloco básico, segundo o Estratégia:** LP, Inglês, Informática, Matemática e RLA. Fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-bombeiros-al-2026-disciplinas/
- **Disciplinas específicas de Praça Combatente e Motomecanização:** a lista não foi localizada.
- **Conteúdo detalhado por tópico:** o conteúdo programático não foi localizado em nenhuma disciplina. Por isso não dá para comparar tópico a tópico.

### Volumes no Canva

Encontrei 14 volumes e nenhuma duplicata com o mesmo título. As buscas foram "CBMAL 2026" e "Bombeiros Alagoas".

- CBMAL 2026 - Vol. 01 - Língua Portuguesa — DAHYweN_TLs — 61 p.
- CBMAL 2026 - Vol. 02 - Língua Inglesa — DAHYwTA-4AQ — 11 p.
- CBMAL 2026 - Vol. 03 - Noções de Informática — DAHYwYCH9fg — 46 p.
- CBMAL 2026 - Vol. 04 - Matemática — DAHYwYfWQHk — 32 p. **Não tem página de sumário:** a p. 3 já é conteúdo ("Números inteiros").
- CBMAL 2026 - Vol. 05 - Raciocínio Lógico e Analítico — DAHYwYFsaDc — 26 p.
- CBMAL 2026 - Vol. 06 - Legislação Pertinente ao CBMAL I — DAHYwSP64Dk — 40 p. **Não tem sumário** e o texto não é extraível. Ver alerta em Lacunas.
- CBMAL 2026 - Vol. 06 - Legislação Pertinente ao CBMAL II - Lei 14.751/2023 — DAHYwUPL3kI — 25 p. Não tem sumário: a p. 3 já é o texto da lei.
- CBMAL 2026 - Vol. 06 - Legislação Pertinente ao CBMAL III - Leis 6.514 e 6.544 de 2004 — DAHYwilpKd8 — 15 p.
- CBMAL 2026 - Vol. 07 - Cidadania e Direitos Humanos — DAHYwZSeGjg — 73 p.
- CBMAL 2026 - Vol. 08 - Física — DAHYwdNlahA — 23 p.
- CBMAL 2026 - Vol. 09 - Química — DAHYwZTq0-I — 21 p. Usa o layout antigo ("Resumosmapasdireito").
- CBMAL 2026 - Vol. 10 - Biologia — DAHYwcizS7Q — 19 p.
- CBMAL 2026 - Vol. 11 - Atualidades - Prova Discursiva — DAHYwTXWU8k — 15 p.
- CBMAL 2026 - Vol. 12 - Mecânica Geral — DAHYwWa1BJc — 15 p.

Designs relacionados que não pertencem à série CBMAL:

- "legislação pertinente ao policial militar de alagoas" — DAHQucvX8YA — 40 p.
- "Lei nº 14.751/2023 ... e suas atualizações" — DAG-rT2Tp9g — 25 p.

### Lacunas

1. **Não há volume de Noções de Direito Administrativo nem de Noções de Direito Constitucional.** As duas disciplinas aparecem na lista do cargo de Oficial de Estado-Maior na fonte secundária (Apostilas Opção). É preciso confirmar no edital se elas valem só para Oficial ou também para Praças.
2. **ALERTA de conteúdo no Vol. 06 I (DAHYwSP64Dk).** O cabeçalho das páginas 2 e 3 diz "POLÍCIA MILITAR DE ALAGOAS" e o texto fala em "PMAL", "Régua hierárquica da PMAL" e "Base institucional da PMAL". Tem 40 páginas, o mesmo número do design "legislação pertinente ao policial militar de alagoas" (DAHQucvX8YA). Parece ter sido reaproveitado do material da PMAL sem adaptação para o CBMAL. Revisar a nomenclatura (CBMAL, QOBM, QPBM) e se a hierarquia está correta para o Corpo de Bombeiros.
3. **Leis citadas no edital sem cobertura visível nos sumários:**
   - Lei Estadual 9.905/2026, incluída pela retificação nº 2. Nenhum título ou sumário a menciona.
   - Lei 6.568/2005 e Lei 7.858/2016 (ou 7.444/2012). Pode ser que estejam no Vol. 06 I, que não tem sumário. Não confirmado.
4. **Vol. 04 Matemática e Vol. 06 I não têm página de Sumário.** Isso foge do padrão dos outros volumes.
5. O conteúdo das disciplinas específicas de Praça e Motomecanização não foi localizado. Não dá para afirmar que o Vol. 12 Mecânica Geral cobre o programa.

### Sobras

- **Leis 6.514/2004 e 6.544/2004** (Vol. 06 III, DAHYwilpKd8): nenhuma fonte encontrada cita essas leis no edital de 2026. É uma possível sobra, mas não confirmada (o conteúdo da disciplina "Legislação Pertinente" não foi localizado).
- **Vol. 12 Mecânica Geral** (DAHYwWa1BJc): não achei fonte que confirme essa disciplina no edital. Faz sentido para Motomecanização, mas não está confirmado.
- **Vol. 01 LP** (DAHYweN_TLs): traz um bloco de Literatura (Quinhentismo a Contemporâneos), que talvez não esteja no edital. Não confirmado.

### Pontos de atualização legal

- **Lei 14.751/2023:** já tem volume próprio (Vol. 06 II). Pela ementa reproduzida no próprio volume, a lei revoga dispositivos do DL 667/1969. Verificar se o Vol. 06 I (de origem PMAL) ainda cita dispositivos revogados do DL 667.
- **Lei Estadual 9.905/2026:** verificar se algum volume incorpora essa lei, que foi incluída pela retificação nº 2 (fonte secundária: resumo do PDF do CDN Cebraspe, não aberto).
- **Atualidades (Vol. 11):** os temas não têm data. Como a prova foi adiada, revisar os fatos recentes de 2026.

### Prioridade sugerida

**Alta.** As inscrições foram reabertas até 26/10/2026 e a nova data de prova ainda não saiu. Faltam volumes de Direito Administrativo e Direito Constitucional, e o Vol. 06 I parece ser material da PMAL.

---

## PMSC (Polícia Militar de Santa Catarina)

### Status do edital

**O edital oficial não pôde ser aberto porque o site da banca está bloqueado no ambiente. Os dados são de fonte secundária.**

| Item | Dado | Fonte |
|---|---|---|
| Banca | Instituto AOCP. Contrato assinado em 22/06/2026, extrato no DOE/SC em 02/07/2026 | fonte secundária: https://www.estrategiaconcursos.com.br/blog/concurso-pm-sc-soldado-2026-instituto-aocp-banca/amp/ ; https://noticias.focusconcursos.com.br/noticias/concurso-pm-sc-contrato-assinado-e-edital-iminente-com-500-vagas |
| Edital | Publicado em 19/10/2026, segundo o Ceisc. O QConcursos diz, na mesma data, que foi "encaminhado para publicação". **Nº do edital não confirmado** | fonte secundária: https://ceisc.com.br/blog/post/pm-sc-edital-publicado-com-500-vagas-para-soldado ; https://folha.qconcursos.com/n/concurso-pm-sc-2026-edital |
| Cargo | Soldado do QPPM (Curso de Formação de Praças), nível superior | fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-pm-sc-publicado-2026 |
| Vagas | **Divergência:** 500 (Ceisc, Direção, Estratégia) ou 1.000 (QConcursos) | as mesmas URLs acima |
| Inscrições | 26/10 a 16/11/2026, taxa de R$ 200 | fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-pm-sc-publicado-2026 ; https://ceisc.com.br/blog/post/pm-sc-edital-publicado-com-500-vagas-para-soldado |
| Prova | Objetiva e redação em 13/12/2026. Só o Ceisc e a Direção trazem essa data | as mesmas URLs acima |
| Remuneração | **Divergência:** R$ 8.505, R$ 9.055 ou cerca de R$ 6.000 | as mesmas URLs acima |
| Retificações | Não localizadas | — |
| Atenção | Há outro processo, o SEMET (temporários, Idecan), que não é este concurso | fonte secundária: resumo do buscador |

### Conteúdo programático (fonte secundária, do termo de referência e não do edital)

São 60 questões objetivas:

| Disciplina | Questões |
|---|---|
| Legislação Institucional | 10 |
| Língua Portuguesa | 8 |
| Direito Constitucional | 8 |
| Direito Penal | 6 |
| Direito Processual Penal | 6 |
| Direito Penal Militar | 6 |
| Legislação Especial | 6 |
| Informática | 5 |
| Legislação de Trânsito | 5 |

Há também uma redação. Fontes secundárias: https://noticias.focusconcursos.com.br/noticias/concurso-pmsc-termo-confirma-500-vagas-e-edital-em-julho ; https://blog.grancursosonline.com.br/concurso-pm-sc-termo-referencia-2026/

O conteúdo programático detalhado por tópico não foi localizado.

### Volumes no Canva

Há muitas duplicatas. As buscas foram "PMSC 2026", "PMSC Penal Militar" e "PMSC Trânsito".

- **Legislação Institucional** (19 p.): **10 cópias com o mesmo título**: DAHWl7TEbxA (a mais atualizada), DAHWY77fPGo, DAHWl1RZCUg, DAHWlxzOsmQ, DAHWl77r_wo, DAHWly7Znsg, DAHWlzRDEfo, DAHWl3TSSs4, DAHWlx3MAh4, DAHWl9NaEn0. Há ainda o "Vol. 4 - Legislação Institucional" — DAHWYcf3kZk — 16 p., em versão antiga e sem sumário.
- **Processo Penal:** DAHWY4Pdk6g (15 p.) e DAHWlwV2uww (15 p.), que são duplicatas. Há também o "Vol. 2 - Processo Penal" — DAHWYGqm_Y0 — 12 p.
- **Direito Constitucional:** DAHWY-VJkuY (17 p.) e DAHWlyr3vsU (17 p.), duplicatas.
- **Língua Portuguesa:** DAHWYxJhEK4 (18 p.) e DAHWl4lVg68 (18 p.), duplicatas. Há também o "Vol. 5 - LP" — DAHWYcf1Go0 — 15 p. — e o "Vol. 5 - LP (parte B, págs. 09-15)" — DAHWYfwZiI0 — 7 p.
- **Informática:** DAHWY5TL_c8 (13 p.) e o "Vol. 6 - Informática" — DAHWYWBrKIE — 10 p.
- **Raciocínio Lógico:** DAHWYyuHW_g — 13 p.
- **Direito Penal Comum:** "Vol. 1" — DAHWYOB6lKE — 18 p.; "Vol. 1 (novo layout)" — DAHWYomNTd0 — 21 p.; "Vol. 1 (parte B, págs. 11-18)" — DAHWYFpBhQI — 8 p.
- **Fragmentos de trabalho "PMSC novo - cNN":** c01 DAHWYpPIraw, c02 DAHWYu_JAOU, c03 DAHWYtLlVXQ, c04 DAHWYocVxQ8, c05 DAHWYkCbgJA, c06 DAHWYq6k4B8, c07 DAHWYnlyMns, c08 DAHWYpkw_RI, c09 DAHWYoOdY4A, c12 DAHWYrdb4Vc, c14 DAHWYoOU4Nw. Têm de 5 a 8 p. cada.

**Os volumes não seguem o padrão "Vol. NN".** A versão atual, que é a mais atualizada, não traz número de volume.

### Lacunas

1. **Direito Penal Militar (6 questões): não há volume PMSC.** Existem materiais de outras séries que podem ser aproveitados: "PMPE 2026 - Direito Penal Militar" (DAHXJyEfJt0), "PMAL de Penal militar" (DAHRSKbd5bk) e "Noções de Direito Penal Militar e Processo Penal Militar" (DAHX6tg4DYA).
2. **Legislação Especial (6 questões): não há volume PMSC.** O sumário de Penal Comum (DAHWYomNTd0) só traz a Lei 8.072/1990 (Crimes Hediondos).
3. **Legislação de Trânsito (5 questões): não há volume PMSC.** Só existem posts avulsos de "Crimes de Trânsito".
4. **Redação (prova discursiva): não há volume.**
5. Sem o conteúdo programático detalhado, não dá para comparar tópico a tópico. Os sumários atuais são estes:
   - Penal: parte geral, crimes contra a pessoa e o patrimônio, fé pública, crimes funcionais, hediondos.
   - Processo Penal: inquérito, ação, ANPP, prisões, cautelares, provas.
   - Constitucional: até o art. 144.
   - Legislação Institucional: Lei 6.218/1983, RDPMSC, DL 667/1969, Lei 14.751/2023, R-200, Constituição de SC, LC 587/2013.

### Sobras

- **Raciocínio Lógico** (DAHWYyuHW_g): a disciplina não aparece na distribuição do termo de referência (fonte secundária). Possível sobra, a confirmar no edital.
- **Duplicatas:** as 10 cópias de Legislação Institucional, as versões "Vol. N" antigas, as "partes B" e os fragmentos "PMSC novo - cNN" são candidatos à limpeza ou ao arquivamento.

### Pontos de atualização legal

- **Lei 14.994/2024** (Pacote Antifeminicídio): criou o feminicídio como crime autônomo (art. 121-A do CP, pena de 20 a 40 anos) e revogou o § 2º-A do art. 121. Fonte secundária: https://cj.estrategia.com/portal/lei-no-14994-feminicidio-crime-autonomo/ ; https://cnbsp.org.br/2024/10/11/migalhas-veja-principais-alteracoes-da-lei-que-aumenta-pena-para-feminicidio/. **Verificar se** o tópico "Homicídio e feminicídio" do volume Penal (DAHWYomNTd0) trata o feminicídio como art. 121-A, e não como qualificadora.
- **Lei 14.751/2023:** pela ementa, revoga dispositivos do DL 667/1969. **Verificar se** o tópico "DL 667/1969 e Lei 14.751/2023" da Legislação Institucional (DAHWl7TEbxA) só apresenta dispositivos do DL 667 que continuam em vigor.

### Prioridade sugerida

**Alta.** O edital acaba de sair, as inscrições abrem em 26/10 e a prova é em 13/12 (fontes secundárias). Três disciplinas que somam 17 de 60 questões não têm volume, e o acervo tem muitas duplicatas.

---

## PCBA (Polícia Civil da Bahia)

### Status do edital

**O edital oficial não pôde ser aberto porque o site da banca está bloqueado no ambiente. Os dados são de fonte secundária.**

| Item | Dado | Fonte |
|---|---|---|
| Banca | Instituto AOCP, em parceria com a SAEB. Contrato de 22/05/2026 | fonte secundária: https://aprovaconcursos.com.br/noticias/concurso-pc-ba ; https://www.direcaoconcursos.com.br/noticias/concurso-pc-ba-aocp-contrato-2026 |
| Edital | Edital SAEB nº 02/2026, de 29/07/2026 (DOE-BA) | fonte secundária: https://concursosnobrasil.com/concursos/ba/2026/07/30/concurso-pc-ba-pubica-edital-com-750-vagas-para-tres-cargos/ ; https://aprovaconcursos.com.br/noticias/concurso-pc-ba |
| Cargos e vagas | 750 imediatas: Delegado 100, Escrivão 150, Investigador 500. Nível superior | as mesmas URLs acima |
| Inscrições | 07/08 a 08/09/2026, até as 14h. Encerradas | fonte secundária: https://aprovaconcursos.com.br/noticias/concurso-pc-ba |
| Prova | Objetiva e discursiva em 06/12/2026, em Salvador | fonte secundária: https://aprovaconcursos.com.br/noticias/concurso-pc-ba |
| Formato | 100 questões objetivas (40 de gerais e 60 de específicas), mínimo de 70 pontos. Discursiva de Escrivão com 4 questões | fonte secundária: https://voceconcursado.com.br/blog/edital-verticalizado-pc-ba-2026/ ; https://voceconcursado.com.br/concurso/concurso-pc-ba-2026-discursiva/ |
| Retificações | Nenhuma retificação do edital localizada. Houve um termo aditivo ao contrato antes do edital (estrutura das provas, discursiva, cotas) | fonte secundária: https://folha.qconcursos.com/n/concurso-pc-ba-2026-regras-do-edital-reveladas |
| Remuneração (Investigador e Escrivão) | **Divergência:** R$ 6.443,06 ou R$ 6.433,06 | resumo do buscador |

### Conteúdo programático (fonte secundária)

- **Específicas de Investigador:** Contabilidade, Direito Administrativo, Direito Constitucional, Direito Penal, Direito Processual Penal, Legislação Penal e Processual Extravagante, Estatística.
- **Específicas de Escrivão:** as mesmas, trocando Contabilidade por Arquivologia.
- **Medicina Legal, Promoção da Igualdade Racial e de Gênero e Legislação Geral:** um guia coloca essas três em conhecimentos gerais. A posição delas diverge entre as fontes.
- Fontes secundárias: https://voceconcursado.com.br/blog/edital-verticalizado-pc-ba-2026/ ; https://folha.qconcursos.com/n/edital-verticalizado-concurso-pc-ba-investigador
- **Conteúdo detalhado por tópico:** não localizado em nenhuma disciplina. Também não dá para confirmar se a LOPC/BA (Lei 11.370/2009) ou a Lei 14.735/2023 constam do edital.

### Volumes no Canva

As buscas foram "PCBA 2026" e "PC BA".

- PCBA 2026 - Vol. 01 - Língua Portuguesa — DAHYedzLow8 — 61 p.
- PCBA 2026 - Vol. 02 - Raciocínio Lógico — DAHYecrIIiw — 26 p.
- PCBA 2026 - Vol. 03 - Atualidades — DAHYeeG8X0k — 16 p.
- PCBA 2026 - Vol. 04 - Noções de Informática — DAHYeXPm58A — 46 p.
- PCBA 2026 - Vol. 05 - Promoção da Igualdade Racial e de Gênero — DAHYedZYlzI — 24 p.
- PCBA 2026 - Vol. 06 - Medicina Legal — DAHYeZ2DgBc — 30 p.
- PCBA 2026 - Vol. 07 - Legislação Geral — DAHYeQjWHNk — 36 p. Cobre a LOPC/BA (Lei 11.370/09), a Lei 12.209/11 e a Lei 9.433/05.
- PCBA 2026 - Vol. 08 - Noções de Direito Administrativo — DAHYeZgqdSw — 89 p.
- PCBA 2026 - Vol. 09 - Noções de Direito Constitucional — DAHYeTRbYZA — 79 p.
- PCBA 2026 - Vol. 10 - Noções de Direito Penal I - Parte Geral — DAHYeRjgpUU — 61 p.
- PCBA 2026 - Vol. 10 - Noções de Direito Penal II - Parte Especial — DAHYec2beC0 — 75 p.
- PCBA 2026 - Vol. 11 - Noções de Direito Processual Penal — DAHYeT3VwbQ — 83 p.
- PCBA 2026 - Vol. 12 - Legislação Penal e Processual Extravagante I — DAHYeTu_83w — 91 p. Maria da Penha, Drogas, Desarmamento, Preconceito, Interceptação.
- PCBA 2026 - Vol. 12 - Legislação Penal e Processual Extravagante II — DAHYeZ0EnIg — 68 p. Abuso de Autoridade, ORCRIM, JECRIM, Hediondos, Ambientais.
- PCBA 2026 - Vol. 12 - Legislação Penal e Processual Extravagante III — DAHYeeijTmQ — 65 p. Contravenções, Consumo, LEP.
- PCBA 2026 - Vol. 12 - Legislação Penal e Processual Extravagante IV — DAHYef7rUnE — 58 p. ECA, Lei Henry Borel, Tortura, Prisão Temporária.
- PCBA 2026 - Vol. 13 - Estatística — DAHYeUevcb4 — 26 p.
- PCBA 2026 - Vol. 14 - Noções de Contabilidade - Investigador — DAHYeUq19Y4 — 25 p.
- PCBA 2026 - Vol. 15 - Noções de Arquivologia - Escrivão — DAHYe3zEieM — 23 p. Não tem página de sumário: a p. 3 já é conteúdo.

Duplicatas, versões antigas e materiais fora da série:

- "PCBA - PENAL [ESPECIAL] - 18.05.2026" — DAHTnT35nyQ — 74 p. O sumário é idêntico ao do Vol. 10 II.
- "[BACKUP 27-09] PCBA - PENAL [ESPECIAL] - 18.05.2026" — DAHWaqeQh9A — 73 p.
- "[ANTIGO - pode apagar] PCBA 2026 - Vol. 15 - Arquivologia" — DAHYeWgZYuk — 24 p.

### Lacunas

1. **As disciplinas listadas nas fontes secundárias estão todas cobertas** por algum volume.
2. **Não há material para a prova discursiva**, que para Escrivão tem 4 questões sobre os conhecimentos específicos.
3. **Não há material específico para Delegado**, que tem 100 vagas. Os volumes são "Noções de..." e miram Investigador e Escrivão. Confirmar se o cargo de Delegado faz parte do escopo do produto.
4. **Vol. 06 Medicina Legal** (DAHYeZ2DgBc): o sumário vai de Noções históricas e Corpo de delito a Tanatologia, Asfixias, Lesões e Eletricidade. Não aparecem Sexologia forense, Antropologia ou Identificação, nem Traumatologia por arma de fogo ou por instrumentos. **É uma sugestão de checagem, não uma lacuna confirmada**, porque o conteúdo programático não foi localizado.
5. **Lei 14.735/2023** (Lei Orgânica Nacional das Polícias Civis): não aparece em nenhum sumário. Não se sabe se o edital a cobra.
6. **Vol. 15 Arquivologia** não tem página de Sumário. Isso foge do padrão.

### Sobras

- Nenhuma sobra confirmada.
- **Vol. 01 LP** (DAHYedzLow8): traz um bloco de Literatura que talvez não esteja no edital. Não confirmado.
- **Duplicatas e versões antigas** (DAHTnT35nyQ, DAHWaqeQh9A, DAHYeWgZYuk): candidatas à limpeza. Uma delas já está marcada como "pode apagar".

### Pontos de atualização legal

- **Lei 14.994/2024** (Pacote Antifeminicídio): criou o feminicídio autônomo (art. 121-A, pena de 20 a 40 anos). Na Lei Maria da Penha, o descumprimento de medida protetiva (art. 24-A) passou a ter pena de reclusão de 2 a 5 anos. Fonte secundária: https://cj.estrategia.com/portal/lei-no-14994-feminicidio-crime-autonomo/ ; https://cnbsp.org.br/2024/10/11/migalhas-veja-principais-alteracoes-da-lei-que-aumenta-pena-para-feminicidio/. **Verificar se** estes volumes incorporam a lei:
  - Vol. 10 II (DAHYec2beC0), tópico "Feminicídio".
  - Vol. 12 I (DAHYeTu_83w), "Lei Maria da Penha".
  - Vol. 05 (DAHYedZYlzI), "Maria da Penha".
- **Lei 15.384/2026** (vicaricídio, art. 121-B do CP, hediondo; também alterou a Lei Maria da Penha e tratou de monitoramento eletrônico). Fonte secundária: https://www.direitopenalbrasileiro.com.br/vicaricidio-lei-15384-2026/ ; texto na Câmara: https://www2.camara.leg.br/legin/fed/lei/2026/lei-15384-9-abril-2026-798939-normaatualizada-pl.html.
  - O Vol. 10 II já tem o tópico "Vicaricídio".
  - **Verificar se** o Vol. 12 I (Maria da Penha) e o Vol. 12 II (Hediondos) também incorporam a Lei 15.384/2026.
- **Lei 14.811/2024** (bullying e cyberbullying no CP; crimes do ECA e outros incluídos no rol de hediondos). Fonte secundária: https://www.conjur.com.br/?p=737575 ; https://blog.grupogen.com.br/juridico/areas-de-interesse/penal/lei-n-14-811-2024-um-paradigma-para-a-salvaguarda-da-infancia-e-juventude-inovacoes-nos-crimes-de-bullying-cyberbullying-no-eca-e-na-lei-dos-crimes-hediondos/. **Verificar se** o Vol. 12 IV (DAHYef7rUnE, ECA) e o Vol. 12 II (DAHYeZ0EnIg, Crimes Hediondos) incorporam essa lei.
- **Lei 14.735/2023:** verificar se o edital a inclui. Hoje o Vol. 07 só cobre a LOPC/BA. A inclusão no edital não foi confirmada por fonte.

### Prioridade sugerida

**Média.** A cobertura de disciplinas está completa e a prova é em 06/12/2026. O trabalho que resta é checar as atualizações legais (Leis 14.994/2024, 15.384/2026 e 14.811/2024), revisar a Medicina Legal e limpar as duplicatas.


---

## TCE-GO — Técnico de Controle Externo (FCC)

### Status do edital

Edital oficial não pôde ser aberto (site da banca bloqueado no ambiente); dados de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Fundação Carlos Chagas (FCC) | (fonte secundária: https://www.aprovaconcursos.com.br/noticias/?p=166912) |
| Edital | Edital nº 01/2026, publicado no DOE-GO em 25/08/2026 | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tce-go-edital-publicado-2026/ ; https://www.direcaoconcursos.com.br/noticias/edital-concurso-tce-go-publicado) |
| Retificação | Edital nº 02/2026 (retificação), DOE-GO de 16/09/2026. Detalhou a distribuição de questões por disciplina, reescreveu o conteúdo programático e nominou resoluções de Legislação Institucional (Res. Adm. 14/2025, estrutura organizacional; Res. Adm. 24/2024, ferramentas de IA; Res. Adm. 5/2024, Política de Gestão de Pessoas). **Divergência:** uma fonte dá 15/09; as demais dão 16/09. | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tce-go-retificacao-detalha-provas-e-conteudos/ ; https://folha.qconcursos.com/n/tribunal-de-contas-do-estado-de-goias-retifica-concurso-para-tecnico-de-controle-externo ; https://www.direcaoconcursos.com.br/noticias/concurso-tce-go-edital-retificado) |
| Cargo / especialidades | Técnico de Controle Externo, de nível médio: especialidade Técnico Administrativo e especialidade Tecnologia da Informação | (fonte secundária: https://tribunadoplanalto.com.br/tce-go-abre-inscricoes-para-concurso-publico-com-salario-de-r-118-mil/) |
| Vagas | 16 (6 em Técnico Administrativo e 10 em TI). **Divergência:** algumas fontes citam cadastro de reserva e outra diz que o contrato não o prevê; uma fonte isolada fala em 20 vagas. | (fonte secundária: https://tribunadoplanalto.com.br/tce-go-abre-inscricoes-para-concurso-publico-com-salario-de-r-118-mil/ ; https://www.direcaoconcursos.com.br/noticias/edital-concurso-tce-go-publicado) |
| Remuneração | R$ 11.862,19. **Divergência:** também aparecem R$ 11.377,51 e R$ 5.100,00 em fontes mais antigas. | (fonte secundária: https://concursosnobrasil.com/concursos/go/2026/08/25/concurso-tce-go-anuncia-salario-de-r-11-mil-para-vagas-de-nivel-medio/) |
| Inscrições | De 05/10/2026 a 06/11/2026, taxa de R$ 100,00 | (fonte secundária: https://concursosnobrasil.com/concursos/go/2026/08/25/concurso-tce-go-anuncia-salario-de-r-11-mil-para-vagas-de-nivel-medio/) |
| Prova | 17/01/2027, em Goiânia. Objetiva de 70 questões (25 de Conhecimentos Gerais com peso 1 e 45 de Conhecimentos Específicos com peso 2). Discursiva: redação para Técnico Administrativo e estudo de caso para TI. | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tce-go-edital-publicado-2026/ ; https://tribunadoplanalto.com.br/tce-go-abre-inscricoes-para-concurso-publico-com-salario-de-r-118-mil/) |
| Conhecimentos Gerais | Língua Portuguesa (10), Matemática e Raciocínio Lógico (10), Legislação Institucional (5) | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tce-go-edital-publicado-2026/) |
| Específicos — Técnico Administrativo | Direito Administrativo, Licitações e Contratos, Direito Constitucional, Noções de Controle Externo, AFO, Contabilidade Aplicada ao Setor Público, Administração Pública, Administração Geral, Administração Estratégica, Comportamento Organizacional e Gestão de Pessoas. A lista pode ter mudado com a retificação. | (fonte secundária: https://www.proximosconcursos.com/concurso-tce-go-2026-edital-saiu-veja-vagas-salario-provas-e-como-se-preparar/ ; módulos da Direção: https://www.direcaoconcursos.com.br/modulos/gestao-de-pessoas-para-tecnico-de-controle-externo-especialidade-tecnico-administrativo-do-tce-go , https://www.direcaoconcursos.com.br/modulos/comportamento-organizacional-para-tecnico-de-controle-externo-especialidade-tecnico-administrativo-do-tce-go) |
| Específicos — TI | Conteúdo programático não localizado. | — |
| Tópicos detalhados por disciplina | Conteúdo programático não localizado. Os blogs só listam as disciplinas. Há um edital verticalizado de terceiros em https://voceconcursado.com.br/blog/edital-verticalizado-tce-go-2026/ que não pude abrir. | — |

**Cargo que o material mira:** os volumes de AFO, CASP, Controle Externo e Administração Geral e Pública indicam que o pacote do Canva é para **Técnico de Controle Externo, especialidade Técnico Administrativo**. Não há nenhum volume de TI.

### Volumes no Canva

- TCE-GO 2026 - Vol. 01 - Língua Portuguesa (Resumos Ilustrados) — DAHYwMFIU-k — 61 págs.
- TCE-GO 2026 - Vol. 02 - Matemática (Resumos Ilustrados) — DAHYwMU118g — 32 págs. (**sumário não localizado nas págs. 1–5**)
- TCE-GO 2026 - Vol. 03 - Raciocínio Lógico (Resumos Ilustrados) — DAHYwCRmIs0 — 26 págs.
- TCE-GO 2026 - Vol. 04 - Direito Constitucional (Resumos Ilustrados) — DAHYwGeol5M — 79 págs.
- TCE-GO 2026 - Vol. 05 - Direito Administrativo (Resumos Ilustrados) — DAHYwJBZcho — 89 págs.
- TCE-GO 2026 - Vol. 06 - Licitações e Contratos - Lei 14.133 (Resumos Ilustrados) — DAHYwF4SO-o — 30 págs.
- TCE-GO 2026 - Vol. 07 - Noções de Controle Externo (Resumos Ilustrados) — DAHYwODNVF4 — 15 págs. | **DUPLICATA:** DAHYwlkaH0Q — 15 págs. (mesmo sumário)
- TCE-GO 2026 - Vol. 08 - Legislação Institucional (Resumos Ilustrados) — DAHYwi4h8ew — 15 págs. | **DUPLICATA:** DAHYwZLrlAw — 15 págs. (mesmos 12 temas, títulos ligeiramente diferentes: "Lei Orgânica: Contas e Sanções" em um, "LO: contas e recursos" no outro)
- TCE-GO 2026 - Vol. 09 - Noções de AFO (Resumos Ilustrados) — DAHYwetd0u0 — 15 págs. | **DUPLICATA:** DAHYwsHNoO0 — 15 págs. (mesma sequência de temas, títulos com redação diferente)
- TCE-GO 2026 - Vol. 10 - Contabilidade Aplicada ao Setor Público (Resumos Ilustrados) — DAHYwUVsQ1w — 15 págs. | **DUPLICATA:** DAHYwhBPhNg — 15 págs. (mesma sequência de temas)
- TCE-GO 2026 - Vol. 11 - Administração Geral e Pública (Resumos Ilustrados) — DAHYwSrEVqU — 48 págs.
- TCE-GO 2026 - Vol. 12 - Direito Constitucional II - Estado e Poderes (Resumos Ilustrados) — DAHYw5sc8N4 — 59 págs.
- TCE-GO 2026 - Vol. 13 - Complementos do Edital (Resumos Ilustrados) — DAHYw0KkpPk — 15 págs.

As duplicatas de Vol. 07, 08, 09 e 10 precisam de uma definição: qual é a versão final? Os sumários são equivalentes.

### Lacunas

- **Especialidade TI (10 das 16 vagas): nenhum volume.** Ficam de fora os específicos de TI e o estudo de caso discursivo.
- **Gestão de Pessoas:** não há volume próprio. O Vol. 11 (DAHYwSrEVqU) trata apenas de "Gestão por Competências e Desempenho", "Teorias da Motivação" e "Liderança e Comunicação". Faltam, por exemplo, recrutamento e seleção, treinamento e desenvolvimento e avaliação de desempenho como subsistemas. Os tópicos exatos do edital não foram confirmados.
- **Comportamento Organizacional:** tem cobertura apenas parcial pelos temas de motivação e liderança do Vol. 11. Não há tópicos de cultura, clima, poder e conflito, mas o detalhamento do edital não foi confirmado.
- **Legislação Institucional:** a retificação nomina a Res. Adm. 14/2025, a Res. Adm. 24/2024 (IA) e a Res. Adm. 5/2024 (Política de Gestão de Pessoas). O sumário do Vol. 08 (DAHYwi4h8ew / DAHYwZLrlAw) só traz "Políticas Institucionais" e "Planejamento e Gestão", sem citar essas resoluções. **Verificar se o Vol. 08 cobre as três resoluções.**
- **Redação discursiva (Técnico Administrativo):** não há volume de apoio.
- **Matemática (Vol. 02, DAHYwMU118g):** o sumário não foi localizado, então não deu para comparar os tópicos.
- Tópico a tópico nas demais disciplinas: não foi possível comparar, porque o conteúdo programático detalhado não foi localizado.

### Sobras

- **Vol. 04 Direito Constitucional (DAHYwGeol5M):** o item "Segurança Pública e Polícia Penal" foi aproveitado de material policial e é improvável num edital de Tribunal de Contas. Além disso, falta no sumário a parte de Administração Pública e Fiscalização (arts. 37–41 e 70–75), que aparece no Vol. 08.
- **Vol. 01 Língua Portuguesa (DAHYwMFIU-k):** traz um bloco inteiro de **Literatura** (10 temas, de Quinhentismo a Contemporâneos). A disciplina citada pela fonte secundária é Língua Portuguesa, e literatura é atípica em FCC de nível médio. Provável sobra, não confirmado.
- **Vol. 05 Direito Administrativo (DAHYwJBZcho):** os temas "Gênese e evolução", "Tendências" e "Interpretação do Direito Administrativo" têm cara de material de nível superior. Possível excesso, não confirmado.
- **Vol. 13 Complementos (DAHYw0KkpPk):** traz "Abuso de Autoridade I e II" e "Publicidade – Lei 12.232/2010". Não confirmei que esses temas estejam no edital, então é preciso checar se o edital retificado os lista.

### Pontos de atualização legal

- **Vol. 06 Licitações (DAHYwF4SO-o):** o último tópico é "Atualização - Decreto nº 11.871/2023", com os valores de 2024. Depois dele vieram o Decreto 12.343/2024 (valores de 2025) e o **Decreto 12.807/2025, que vale desde 01/01/2026** (dispensa de R$ 130.984,20 para obras e de R$ 65.492,11 para compras e serviços). **Verificar se o Vol. 06 incorpora o Decreto 12.807/2025.** (fonte secundária: https://effecti.com.br/decreto-12807-de-2025/ ; https://conlicitacao.com.br/nova-lei-de-licitacoes-2026/)
- **Vol. 08 (DAHYwi4h8ew / DAHYwZLrlAw), Lei Orgânica do TCE-GO (Lei 16.168/2007):** a Lei 23.413, de 15/05/2025, alterou o art. 84 (envio ao MP Eleitoral da lista de responsáveis com contas irregulares). Uma fonte também menciona a Lei 23.122/2024, que alteraria a denominação do cargo de Auditor (não confirmado). **Verificar se o Vol. 08 incorpora a Lei 23.413/2025.** (fonte secundária: https://legisla.casacivil.go.gov.br/api/v2/pesquisa/legislacoes/110674/pdf)
- **Vol. 08, "Estatuto dos Servidores de GO":** o estatuto vigente é a Lei 20.756/2020, alterada pela Lei 22.079/2023. **Verificar se o volume usa a Lei 20.756/2020, e não a antiga Lei 10.460/88, e se incorpora a Lei 22.079/2023.** (fonte secundária: https://appasp.economia.go.gov.br/legislacao/arquivos/Leis/L_20756.htm)
- **Vol. 08, Resoluções Administrativas 14/2025, 24/2024 e 5/2024:** foram citadas pela retificação (ver Lacunas). (fonte secundária: https://blog.grancursosonline.com.br/concurso-tce-go-retificacao-detalha-provas-e-conteudos/)
- **Vol. 05 (DAHYwJBZcho), "Improbidade Administrativa (Lei 8.429/92)":** **verificar se incorpora a reforma da Lei 14.230/2021**, que mudou o dolo, a prescrição e as sanções. O título do sumário cita só a lei original.

### Prioridade sugerida

**Alta.** As inscrições terminam em 06/11/2026 e a prova é em 17/01/2027. Não há nada para TI (10 das 16 vagas), Gestão de Pessoas e Comportamento Organizacional estão pouco cobertos, e há resoluções novas da retificação e sobras herdadas de material policial.

---

## TJSP — Oficial de Justiça (Vunesp)

### Status do edital

Edital oficial não pôde ser aberto (site da banca bloqueado no ambiente); dados de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Vunesp | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316876) |
| Edital | Edital de Abertura nº 01/2026, publicado no DJE de 19/10/2026 | (fonte secundária: https://concursosnobrasil.com/concursos/sp/2026/10/19/concurso-tj-sp-tem-editais-publicados-com-132-vagas-de-ate-r-98-mil/ ; https://meusitejuridico.editorajuspodivm.com.br/2026/10/19/edital-publicado-oficial-de-justica-tjsp/) |
| Retificações | Nenhuma localizada até 22/10/2026 | — |
| Cargo / requisito | Oficial de Justiça, com nível superior em qualquer área | (fonte secundária: https://ceisc.com.br/blog/post/tj-sp-tem-editais-publicados-oferecendo-vagas-para-oficial-de-justica-e-escrevente) |
| Vagas | 132 imediatas mais cadastro de reserva: Osasco 25, Guarulhos 25, Mogi das Cruzes 25, Itapecerica da Serra 25, Campinas 18, São Bernardo do Campo 8 e Santo André 6. Por cota: 79 de ampla concorrência, 11 PcD, 33 negros, 5 indígenas e 4 quilombolas. | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316876 ; https://ceisc.com.br/blog/post/tj-sp-tem-editais-publicados-oferecendo-vagas-para-oficial-de-justica-e-escrevente) |
| Remuneração | R$ 9.856,95. **Divergência:** uma fonte dá R$ 9.865,95. | (fonte secundária: https://blog.grancursosonline.com.br/concurso-tj-sp-oficial-de-justica-edital-publicado-2026/) |
| Inscrições | De 28/10/2026 a 10/12/2026 (pagamento até 11/12), taxa de R$ 96,00 | (fonte secundária: https://ceisc.com.br/blog/post/tj-sp-tem-editais-publicados-oferecendo-vagas-para-oficial-de-justica-e-escrevente) |
| Prova | 14/03/2027, à tarde. Objetiva de 70 questões mais discursiva (2 questões de Conhecimentos Específicos) no mesmo dia. | (fonte secundária: https://www.proximosconcursos.com/concurso-tj-sp-2026-editais-publicados-com-132-vagas-e-salarios-de-ate-r-98-mil/ ; https://www.direcaoconcursos.com.br/noticias/edital-concurso-tj-sp-publicado) |
| Distribuição da objetiva | Língua Portuguesa 15, Conhecimentos Específicos 40, Conhecimentos Gerais 15 (Atualidades, Matemática, Informática e Raciocínio Lógico). **Divergência:** uma fonte traz 24 em Conhecimentos Gerais. | (fonte secundária: https://www.acheconcursos.com.br/concursos-sao-paulo/concurso-tj-sp-2026-edital-oficial-de-justica-94047) |
| Específicos | Direito Penal, Processual Penal, Processual Civil, Constitucional, Administrativo (com o Estatuto dos Funcionários Públicos de SP e a Lei de Improbidade), Direito Civil e Legislação Especial | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/edital-concurso-tj-sp-publicado ; https://blog.grancursosonline.com.br/concurso-tj-sp-oficial-de-justica-edital-publicado-2026/) |
| NSCGJ / Regimento | **Não confirmado** para o edital de 2026: nenhuma fonte secundária citou as NSCGJ no programa do Oficial. Mesmo assim, o material já tem um volume próprio (Vol. 08). | — |
| Tópicos detalhados por disciplina | Conteúdo programático não localizado. Há um edital verticalizado de terceiros em https://voceconcursado.com.br/blog/edital-verticalizado-tj-sp-2026-oficial-de-justica/ que não pude abrir. | — |

### Volumes no Canva

Cada volume tem várias versões: "(Resumos Ilustrados)", "(FINAL)" e "(complemento A/B)". Os complementos são páginas de conteúdo sem sumário. Pela numeração (por exemplo, págs. 17–18 e 61–62), parecem ter sido emendados ao FINAL. Li o sumário dos FINAL e do Vol. 07 RI.

- Vol. 01 - Língua Portuguesa — FINAL DAHYw6aOU9I (17 págs.) | RI DAHYwQ6f-8c (18 págs.)
- Vol. 02 - Direito Constitucional — FINAL DAHYwwmWC7k (24 págs.) | RI DAHYwSdZaUc (17 págs.) | complemento DAHYww9VaaA (7 págs.)
- Vol. 03 - Direito Administrativo — FINAL DAHYwzweONk (16 págs.) | RI DAHYwVTEVtA (17 págs.) | complemento A DAHYw1mMkl4 (3 págs.) | complemento B DAHYw_jtUcw (1 pág.)
- Vol. 04 - Direito Penal — FINAL DAHYw4515wI (25 págs.) | RI DAHYwWfjdlc (15 págs.) | complemento DAHYwmPsvwM (10 págs.)
- Vol. 05 - Processo Penal — FINAL DAHYw3u0Q1k (29 págs.) | **DUPLICATA FINAL** DAHYwxX1pYM (3 págs.) | RI DAHYwdhC2-E (15 págs.) | complemento A DAHYwwiEpeY (11 págs.) | complemento B DAHYw21G76Y (9 págs.)
- Vol. 06 - Processo Civil — FINAL DAHYw3SXJBQ (48 págs.) | RI DAHYwUWokBU (19 págs.) | **DUPLICATA RI** DAHYwiB2_34 (10 págs.) | complemento A DAHYw5mVo7k (25 págs.) | complemento B DAHYw4Gj-J0 (9 págs.)
- Vol. 07 - Direito Civil — FINAL DAHYw3YUmNY (48 págs.) | RI DAHYwfgDT3M (60 págs.) | complemento A DAHYwug_bY4 (8 págs.) | complemento B DAHYwmfQZ_A (8 págs.)
- Vol. 08 - Legislação Especial e Normas da Corregedoria — FINAL DAHYw5sJgFQ (18 págs.) | RI "…Normas da Corregedoria" DAHYwfGs4YE (15 págs.) | **RI com outro título**, "…Normas do TJSP", DAHYwfwP-4o (15 págs.) | complemento DAHYw13oYyI (3 págs.)
- Vol. 09 - Informática — FINAL DAHYw1qS1WE (13 págs.) | RI DAHYwTYh_7k (13 págs.)
- Vol. 10 - Raciocínio Lógico — FINAL DAHYw4q6V70 (16 págs.) | RI DAHYwWz53-g (13 págs.)
- Vol. 11 - Matemática — FINAL DAHYw1uRTYc (11 págs.) | RI DAHYwRz5aXE (11 págs.)
- Vol. 12 - Atualidades e Estatuto da PcD — FINAL DAHYwzq050Q (13 págs.) | RI DAHYwe0x7nI (11 págs.) | complemento DAHYw5C0np0 (2 págs.)

### Lacunas

- Todas as disciplinas citadas pelas fontes secundárias têm volume, inclusive Direito Civil e Legislação Especial.
- **A discursiva (2 questões de Conhecimentos Específicos) não tem material de apoio.**
- **Vol. 06 Processo Civil FINAL (DAHYw3SXJBQ):** o sumário é idêntico, palavra por palavra, ao do Escrevente (16 temas, de impedimento até a Lei 12.153). Não aparecem tópicos centrais para o Oficial, como execução, penhora e avaliação, embora os complementos A/B possam tratar disso. O sumário não foi atualizado para incluir os complementos (48 págs. contra 16 temas listados).
- **Vol. 07 Direito Civil FINAL (DAHYw3YUmNY):** o sumário é genérico (LINDB, Escada Ponteana… Família, Sucessões) e remete até a pág. 54, mas o design tem 48 págs. Ou seja, o sumário não confere com o arquivo. É o mesmo sumário do RI DAHYwfgDT3M, que tem 60 págs. Revisar.
- **Vol. 03 Direito Administrativo FINAL (DAHYwzweONk):** é bem recortado (artigos específicos da Lei 10.261/68 e da LIA, só o art. 9º e o art. 13). Se o edital cobrar outros artigos da LIA (arts. 10, 11 e sanções), fica faltando, mas os tópicos do edital não foram confirmados.
- Tópico a tópico: o conteúdo programático detalhado não foi localizado, então não deu para comparar.

### Sobras

- O excesso de versões (RI, FINAL e complementos, além das duplicatas no Vol. 05 FINAL, no Vol. 06 RI e nos dois títulos do Vol. 08) é risco de entregar a versão errada. Não é sobra de conteúdo.
- **Vol. 07 Direito Civil:** tem 25 temas cobrindo o Código Civil inteiro, incluindo Família e Sucessões. Pode ir além do edital do Oficial, mas os tópicos de Civil não foram confirmados.
- **Vol. 08:** o sumário inclui LEF, Res. CNJ 354/2020 e Lei 11.608/03. A pertinência ao edital de 2026 não foi confirmada (nenhuma fonte detalhou a "Legislação Especial").

### Pontos de atualização legal

- **Vol. 04 Direito Penal FINAL (DAHYw4515wI):** já traz "Homicídio I: art. 121 e feminicídio (121-A)", o que indica incorporação da Lei 14.994/2024 (Pacote Antifeminicídio). **Verificar se o volume também incorpora as demais mudanças da mesma lei**, como as penas da lesão corporal (art. 129) e do art. 121-A.
- **Vol. 05 Processo Penal FINAL (DAHYw3u0Q1k):** tem os tópicos "Prisão em flagrante (301-303)" e "Prisão I/II". A **Lei 15.272/2025, de 26/11/2025,** alterou o art. 310 (§§ 5º e 6º, conversão do flagrante em preventiva e audiência de custódia) e o art. 312 (§§ 3º e 4º, periculosidade). **Verificar se o Vol. 05 incorpora a Lei 15.272/2025.** O sumário não traz os arts. 310 e 312, o que pode ser lacuna, se cobrados. (fonte: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15272.htm ; fonte secundária: https://www.conjur.com.br/?p=882708)
- **Vol. 08 FINAL (DAHYw5sJgFQ), "Lei 11.608/03: incidência e alíquotas":** a Lei estadual 17.785/2023 alterou a Lei 11.608/2003 (custas iniciais de 1% para 1,5%, entre outras mudanças), com aplicação a fatos geradores a partir de 03/01/2024. **Verificar se o volume incorpora a Lei 17.785/2023.** (fonte: https://www.al.sp.gov.br/repositorio/legislacao/lei/2023/lei-17785-03.10.2023.html ; fonte secundária: https://www.migalhas.com.br/quentes/394873/tarcisio-sanciona-lei-que-altera-valores-das-taxas-judiciais-em-sp)
- **Vol. 03 (DAHYwzweONk), LIA "art. 9º e art. 13 (bens)":** o art. 13 foi reescrito pela Lei 14.230/2021. **Verificar se o volume usa a redação da Lei 14.230/2021.**
- **NSCGJ (Vol. 08):** não localizei um Provimento CG de 2026 que altere o Cap. VII (oficiais de justiça). O único ato de 2026 encontrado, o Prov. CG 18/2026, trata de audiências de custódia. Sem ponto concreto a apontar. (fonte secundária: https://portal.tjsp.jus.br/Corregedoria/Comunicados)

### Prioridade sugerida

**Média.** A cobertura por disciplina está completa, mas é preciso consolidar as versões (FINAL e duplicatas), corrigir os sumários dos Vols. 06 e 07 e checar a Lei 15.272/2025. As inscrições vão até 10/12 e a prova é em 14/03/2027.

---

## TJSP — Escrevente Técnico Judiciário (Vunesp)

### Status do edital

Edital oficial não pôde ser aberto (site da banca bloqueado no ambiente); dados de fonte secundária.

| Item | Dado | Fonte |
|---|---|---|
| Banca | Vunesp | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316871) |
| Edital | Edital de Abertura nº 02/2026, publicado no DJE de 19/10/2026. **Divergência temporal:** fontes de agosto de 2026 diziam que ainda não havia edital; as de 19/10/2026 confirmam a publicação. | (fonte secundária: https://meusitejuridico.editorajuspodivm.com.br/2026/10/19/edital-publicado-escrevente-tecnico-judiciario-tjsp/ ; https://www.aprovaconcursos.com.br/noticias/novo-edital-tj-sp-2026/) |
| Edital anterior | Edital nº 02/2025 (Vunesp), que teve retificação no Bloco II e trazia NSCGJ, Res. TJSP 963/2025, LC 1.111/2010 e Regimento Interno | (fonte secundária: https://www.direcaoconcursos.com.br/noticias/concurso-tj-sp-escrevente-edital-retificado ; https://www.estrategiaconcursos.com.br/blog/tj-sp-retifica-concurso-para-escrevente-veja-o-que-mudou/amp/) |
| Retificações (2026) | Nenhuma localizada até 22/10/2026 | — |
| Vagas | Só cadastro de reserva, em 50 circunscrições da 2ª à 10ª RAJ. A 1ª RAJ (Capital e Grande SP) fica de fora. **Divergência:** um portal fala em 845 vagas e outro em 800, mas parecem referir-se a concursos ou cargos vagos anteriores. | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316871 ; https://bpmoney.com.br/economia/tj-sp-abre-concurso-para-845-vagas-de-escrevente-em-todo-o-estado) |
| Requisito / salário | Nível médio, R$ 6.782,54 | (fonte secundária: https://www.novaconcursos.com.br/portal/?p=316871) |
| Inscrições | De 28/10/2026 a 10/12/2026, taxa de R$ 81,00 | (fonte secundária: https://ceisc.com.br/blog/post/tj-sp-tem-editais-publicados-oferecendo-vagas-para-oficial-de-justica-e-escrevente) |
| Prova | 14/03/2027, à tarde: objetiva mais redação | (fonte secundária: https://www.proximosconcursos.com/concurso-tj-sp-2026-editais-publicados-com-132-vagas-e-salarios-de-ate-r-98-mil/) |
| Distribuição da objetiva | 70 questões: Língua Portuguesa 16; Conhecimentos em Direito 30 (Penal, Processual Penal, Processual Civil, Constitucional, Administrativo e legislação interna); Conhecimentos Gerais 24 (Atualidades 4, Matemática 4, Informática 9, Raciocínio Lógico 7). Mínimos: 8 de 16 em LP e 15 de 30 em Direito. | (fonte secundária: https://www.aprovequestoes.com.br/concurso-tjsp-escrevente-2026) |
| NSCGJ / Regimento Interno | Citados por uma fonte como tema relevante, **mas como projeção a partir do edital anterior**. Não confirmado no texto de 2026. | (fonte secundária: https://www.aprovequestoes.com.br/concurso-tjsp-escrevente-2026) |
| Tópicos detalhados por disciplina | Conteúdo programático de 2026 não localizado | — |

### Volumes no Canva

A série não tem "Escrevente" no título ("TJSP 2026 - Vol. NN"). Foi criada por volta de 25/09/2026, antes do edital de 19/10, e o conteúdo (com Res. 963/2025) segue o perfil do edital de Escrevente de 2025.

- TJSP 2026 - Vol. 01 - Língua Portuguesa (Resumos Ilustrados) — DAHWZNLaMbw — 18 págs.
- TJSP 2026 - Vol. 02 - Direito Constitucional (Resumos Ilustrados) — DAHWZIC-bVk — 17 págs.
- TJSP 2026 - Vol. 03 - Direito Administrativo (Resumos Ilustrados) — DAHWZKYtVuY — 17 págs.
- TJSP 2026 - Vol. 04 - Direito Penal (Resumos Ilustrados) — DAHWZAXG3yg — 15 págs.
- TJSP 2026 - Vol. 05 - Processo Penal (Resumos Ilustrados) — DAHWZMtmhS0 — 15 págs.
- TJSP 2026 - Vol. 06 - Processo Civil (Resumos Ilustrados) — DAHWZBMlunU — 19 págs.
- TJSP 2026 - Vol. 07 - Legislação Interna do TJSP (Resumos Ilustrados) — DAHWZLxo_IQ — 15 págs.
- TJSP 2026 - Vol. 08 - Informática (Resumos Ilustrados) — DAHWZNSs33c — 13 págs.
- TJSP 2026 - Vol. 09 - Raciocínio Lógico (Resumos Ilustrados) — DAHWZC1sYno — 13 págs.
- TJSP 2026 - Vol. 10 - Matemática (Resumos Ilustrados) — DAHWZAK4hwI — 11 págs.
- TJSP 2026 - Vol. 11 - Atualidades e Estatuto da PcD (Resumos Ilustrados) — DAHWZB4wUXY — 11 págs.
- Rascunhos ou partes soltas (não são volumes): "TJSP novo - t01 Const 01-07" (DAHWZNctT2A), t02 (DAHWZOp8Izk), t03 (DAHWZBCoRbA), t04 (DAHWZAth3LM), t05 (DAHWZCHLd18), t06 (DAHWZIxhduA), t07 (DAHWZJWQxT0), t08 (DAHWZO28sho), t09 (DAHWZKovVR4), t10 (DAHWZBbbt6A), t11 (DAHWZCGb5vQ), t12 (DAHWZA3UC0k), t13 (DAHWZPUYdiA), t14 (DAHWZHe0WTk), t15 (DAHWZGWCuBI), t16 (DAHWZPExl7Q), "TJSP novo - RLM (a partir do PMSC)" (DAHWZK3alsg) e "TJSP novo - Português (a partir do PMSC)" (DAHWZPULPvA).

### Lacunas

- Todas as disciplinas citadas pela fonte secundária têm volume.
- **Redação (discursiva):** não há volume de apoio. O Vol. 01 tem só um tópico de "Redação oficial".
- **Vol. 09 Raciocínio Lógico (DAHWZC1sYno), 10 temas:** faltam associação lógica, ordenação, sequências numéricas e lógicas e verdades/mentiras, que **já existem** na versão do Oficial (Vol. 10 FINAL, DAHYw4q6V70). São tópicos típicos da Vunesp, mas não foram confirmados no edital de 2026.
- **Vol. 11 Atualidades e PcD (DAHWZB4wUXY):** não tem os temas da LBI arts. 79–87 (acesso à Justiça e curatela), que a versão do Oficial (DAHYwzq050Q) tem. Verificar se o edital do Escrevente cobra esses artigos.
- **Vol. 08 Informática (DAHWZNSs33c):** o tópico "Correio eletrônico e Internet" não traz "impressão e M365", que aparece na versão do Oficial (DAHYw1qS1WE). Verificar no edital.
- **Revalidar todos os volumes contra o Edital 02/2026:** a série foi montada antes da publicação e parece seguir o edital de 2025. Não confirmei se o recorte de artigos (por exemplo, CP arts. 293–359 e CPP) é o mesmo.

### Sobras

- Não há sobras evidentes de disciplina. O recorte de Direito Penal (só crimes contra a fé pública e contra a Administração, arts. 293–359) é coerente com o perfil do Escrevente, mas não foi confirmado para 2026.
- Os 18 rascunhos "TJSP novo - tNN" e "(a partir do PMSC)" duplicam conteúdo dos volumes. Convém arquivar ou identificar para não confundir.

### Pontos de atualização legal

- **Vol. 07 Legislação Interna (DAHWZLxo_IQ):** cita Res. 963/2025 (eproc), Res. 850/2021 (teletrabalho), LC 1.111/2010 e o Cap. XI das NSCGJ. Uma fonte relata atualização das NSCGJ que alterou o art. 67 e acrescentou parágrafo único ao art. 1.236 (sem número do provimento). **Verificar se o Vol. 07 incorpora essa atualização das NSCGJ e se o Edital 02/2026 mantém as mesmas normas internas.** (fonte secundária: https://www.grancursosonline.com.br/cursos/por-materia/tj-sp-tribunal-de-justica-do-estado-de-sao-paulo-normas-da-corregedoria-geral-da-justica-para-o-cargo-de-escrevente-tecnico-judiciario-pos-edital-professor-weslei-machado)
- **Vol. 05 Processo Penal (DAHWZMtmhS0):** o sumário não tem prisão (cobre sujeitos, citações, procedimentos, júri, recursos e JECrim), então a Lei 15.272/2025 (arts. 310 e 312 do CPP) só importa se o edital de 2026 cobrar prisão. **Verificar.** (fonte: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15272.htm)
- **Vol. 03 (DAHWZKYtVuY), "Improbidade: sanções, processo, prescrição":** **verificar se incorpora a Lei 14.230/2021** (novo regime de prescrição e sanções).
- **Vol. 03, Estatuto SP (Lei 10.261/68):** não localizei alteração de 2024–2026 em fonte. Sem ponto concreto.

### Prioridade sugerida

**Média.** A cobertura por disciplina está completa, mas o material foi feito antes do Edital 02/2026 e precisa ser revalidado contra o programa novo. Também vale levar para cá os tópicos de RLM, LBI e Informática que já existem na versão do Oficial. As inscrições vão até 10/12 e a prova é em 14/03/2027.


---

