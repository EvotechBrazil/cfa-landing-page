# CFA — site da box (`cfa-lp`)

**Status:** só a home da CrossFit Arapongas. A landing da clínica saiu do
repositório em 19/10/2026.

## Rotas

| Rota | Conteúdo |
|------|----------|
| `/` | Site da box |
| `/clinica` | Redirect 307 para `/`. A página não existe mais no deploy. |

## Clínica — código só neste Mac

O evento de 05/09/2026 já tinha passado e o site ainda vendia o 1º lote.
A página e o acesso saíram do git. A cópia para recolocar ficou em:

`/Volumes/Dados/Projetos/Site-Cfa/clinica-arquivo`

Siga o `LEIA-ME.md` de lá. Não copie essa pasta de volta para o repositório
sem um evento novo e o checkout certo. O handoff da clínica na data da
retirada está em `clinica-arquivo/HANDOFF.md`.

## Dev

```bash
cd /Volumes/Dados/Projetos/Site-Cfa/cfa-lp
npm install && npm run dev -- -p 3007
# http://localhost:3007/
```

Porta **3007**. 3000 e 3001 são de outros projetos.

## Produção

- https://www.crossfitarapongas.com.br/
- https://crossfitarapongas.com.br/
- https://site-cfa-gray.vercel.app/

`main` dispara o deploy da Vercel. Rode `npm run build` antes de subir.
Nunca force push. Preserve `lovable-original` (`7aeb470`).

O redirect de `/clinica` só vale em produção depois do push deste commit.

## Git

- Branch de trabalho: `main`
- Backup original: `lovable-original` @ `7aeb470`
- Favicon: logo leão CFA na aba
