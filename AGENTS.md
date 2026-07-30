<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CFA — regras do projeto

**Leia o `HANDOFF.md` antes de mexer em qualquer coisa.** Ele é a fonte da
verdade do estado: o que já foi entregue, o que está aguardando aprovação do
gestor e as armadilhas de cada parte. O master fica fora do repo, em
`/Volumes/Dados/projetos/CFA-HANDOFF.md`. Ao entregar, atualize os dois.

## Rotas

| Rota | Conteúdo | Tema |
|------|----------|------|
| `/` | Site da box (CrossFit Arapongas) | `.box-theme` |
| `/clinica` | Landing das clínicas TTB/BMU | `.clinica-theme` |

Os temas são isolados e não devem vazar um no outro. As cores saem das CSS vars
em `globals.css` (`--accent`, `--background`, …) — não use hex solto.

## Rodar local

```bash
npm install && npm run dev -- -p 3007
```

Use **3007**: as portas 3000 e 3001 são de outros projetos da máquina.

## Deploy

`main` é a branch de produção e **push nela dispara o deploy da Vercel**
(projeto `site-cfa`, ~30-50s até https://www.crossfitarapongas.com.br).
Rode `npm run build` antes de subir.

- **Nunca force push na `main`.**
- **Preserve a branch `lovable-original`** (`7aeb4706`) — é o site original em
  Vite, backup de referência.

## Imagens

O hero da clínica usa PNG recortado (sem fundo). Se for gerar outro recorte:
faça **alpha bleed** antes de salvar — espalhe a cor da silhueta alguns pixels
para fora e só então zere o resto. Sem isso o redimensionamento mistura o vazio
e aparece franja escura em volta do recorte.
