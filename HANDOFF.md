# CFA — App unificado (`cfa-lp`)

Mescla **box + clínica** no Next.js (branch `feat/merge-box-clinica`).

Master: **`/Volumes/Dados/Projetos/CFA-HANDOFF.md`**

---

## Rotas

| Rota | Conteúdo |
|------|----------|
| `/` | Site da box (portado de `cfa-site` / SHA `7aeb470`) |
| `/clinica` | Landing das clínicas TTB/BMU |

## Dev local

```bash
cd /Volumes/Dados/Projetos/Site-Cfa/cfa-lp
npm install && npm run dev
# http://127.0.0.1:3000/        → box
# http://127.0.0.1:3000/clinica → clínica
```

## Estrutura

- `src/components/box/*` — seções da box + WhatsApp form
- `src/components/sections/*` — seções da clínica
- `src/app/page.tsx` — home da box (wrapper `.box-theme`)
- `src/app/clinica/` — page + layout da clínica (`.clinica-theme` + Lenis)
- `public/box/*` — assets da box
- `public/images/*` — assets da clínica

## Referência do original

- Pasta read-only: `/Volumes/Dados/Projetos/Site-Cfa/cfa-site` (branch `lovable-original` @ `7aeb470`)
- **Não force push em `main`.** Preserve `lovable-original` no remoto.

## Status mescla

- Build: `npm run build` OK (rotas `/` e `/clinica` estáticas)
- Smoke HTTP local: 200 em `/`, `/clinica`, assets `/box/*` e `/images/*`
- Próximo: review visual no browser, PR para `main`, deploy Vercel
