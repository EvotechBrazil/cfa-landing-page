<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CFA — regras do projeto

**Leia o `HANDOFF.md` antes de mexer em qualquer coisa.** Ele é a fonte da
verdade do estado: o que já foi entregue, o que está aguardando aprovação do
gestor e as armadilhas de cada parte. O master fica fora do repo, em
`/Volumes/Dados/Projetos/CFA-HANDOFF.md`. Ao entregar, atualize os dois.

## Rotas

| Rota | Conteúdo | Tema |
|------|----------|------|
| `/` | Site da box (CrossFit Arapongas) | `.box-theme` |

`/clinica` redireciona para `/` (307). A landing saiu do repositório em
19/10/2026. O código para recolocar está só neste Mac, em
`/Volumes/Dados/Projetos/Site-Cfa/clinica-arquivo` (`LEIA-ME.md`).

As cores saem das CSS vars em `globals.css` e `box-theme.css` (`--accent`,
`--background`, …) — não use hex solto.

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

<!-- graphify-global:start · gerado por `graphify-global sync`; edite ~/.graphify-global/RULES.md -->
## Navegação de código: graphify primeiro

Se existir `graphify-out/graph.json` na raiz do repo, use o grafo de conhecimento ANTES de grep/find/abrir arquivos em massa: é mais rápido e gasta bem menos tokens.

- Achar/entender algo: `graphify query "<pergunta>"` (subgrafo enxuto; `--budget N` limita tokens). Relação entre dois pontos: `graphify path "A" "B"`. Um conceito: `graphify explain "X"`.
- Antes de alterar algo: `graphify affected "X"` mostra o que é impactado.
- Depois abra só os arquivos/linhas que o grafo apontou. grep/rg ficam para texto literal (strings, logs, env, config) ou quando o grafo não cobrir.
- Visão geral da arquitetura: `graphify-out/GRAPH_REPORT.md`, só se query/path/explain não bastarem.
- Ao concluir uma tarefa que alterou código (não a cada edição): `graphify-ensure --refresh` (atualiza o grafo em background, sem LLM; não espere terminar). Commits já atualizam sozinhos via git hook.
- Repo sem `graphify-out/`: rode `graphify-ensure` uma vez (cria o grafo em background) e siga normalmente.
- Arquivos modificados em `graphify-out/` são esperados; não são motivo para ignorar o grafo.
- Ao delegar exploração de código a subagentes, inclua esta regra no prompt deles.
<!-- graphify-global:end -->
