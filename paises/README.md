# paises/

Materiais internacionais (fora do Brasil), organizados por pais - concursos publicos, vestibulares/admissao universitaria e exames de habilitacao profissional (equivalente a OAB, quando existir naquele pais).

Usam o mesmo formato e processo das skills resumo-ilustrado e mapa-mental, mas SEM aplicar o brand-system pessoal (ver a secao "Modo de producao" em cada uma dessas skills). A referencia visual passa a ser os exemplos em skills/resumo-ilustrado/exemplos/ e skills/mapa-mental/exemplos/, ou os exemplos especificos do pais quando houver.

## Estrutura por pais

```
paises/<pais>/
  README.md    -> contexto do pais: tipos de prova, instituicoes, fontes oficiais
  editais/      -> editais brutos coletados, analisados pela skill pesquisa-edital
  exemplos/     -> modelos de referencia especificos daquele pais/mercado, se houver
  produtos/     -> materiais finalizados para aquele pais
```

## Fluxo de producao

1. Coletar o edital (concurso, vestibular ou exame de habilitacao) e salvar em paises/<pais>/editais/.
2. Rodar a skill pesquisa-edital para extrair temario, formato de prova e fontes oficiais.
3. Rodar a skill pesquisa-conteudo para cada topico do temario.
4. Produzir o material com resumo-ilustrado e/ou mapa-mental, em modo internacional (sem marca pessoal).
5. Revisar antes de considerar pronto.

## Paises em andamento

- Peru
- Chile

Para adicionar um pais novo, copie a estrutura acima.
