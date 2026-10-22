# Imagens da landing page (WebP)

A landing page referencia os arquivos abaixo (caminho relativo `img/`, dentro da pasta landing-page/, para subir a pasta inteira no servidor). Nesta sessao o download das exportacoes do Canva foi bloqueado pela rede, entao os arquivos ainda precisam ser gerados.

Como gerar: no Canva, exporte cada pagina como JPG (largura 900 px) e converta para WebP:

```
cwebp -q 78 entrada.jpg -o nome.webp
# ou
convert entrada.jpg -quality 78 nome.webp
```

| Arquivo | Origem no Canva | Uso na pagina |
| --- | --- | --- |
| hero-volumes.webp | mockup com as capas dos 12 volumes (1200 px de largura) | primeira dobra |
| capa-portugues.webp | Vol. 01 - pagina 1 | demonstrativo |
| pag-portugues.webp | Vol. 01 - pagina 10 | demonstrativo |
| pag-administrativo-1.webp | Vol. 09 - pagina 6 | demonstrativo |
| pag-administrativo-2.webp | Vol. 09 - pagina 12 | demonstrativo |
| pag-penal.webp | Vol. 10 Penal I - pagina 8 | demonstrativo |
| pag-processo-penal.webp | Vol. 11 - pagina 9 | demonstrativo |
| mockup-agente.webp | mockup do pacote Agente (11 arquivos) | plano basico |
| mockup-completo.webp | mockup Agente + Escrivao (12 arquivos) | plano completo |

Peso alvo: ate 120 KB por imagem (hero ate 180 KB).
