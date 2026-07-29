# CFA — App unificado (`cfa-lp`)

**Status: filé / 100%** no `main` @ `047519c`.

Master: `/Volumes/Dados/Projetos/CFA-HANDOFF.md`

## Rotas

| Rota | Conteúdo |
|------|----------|
| `/` | Site da box |
| `/clinica` | Landing clínicas TTB/BMU |

## Dev

```bash
cd /Volumes/Dados/Projetos/Site-Cfa/cfa-lp
npm install && npm run dev
# http://localhost:3000/ · http://localhost:3000/clinica
```

## Produção

- https://www.crossfitarapongas.com.br/
- https://www.crossfitarapongas.com.br/clinica
- https://site-cfa-gray.vercel.app/

## Git

- Branch: `main` @ `047519c`
- Backup original: `lovable-original` @ `7aeb470`
- Working tree: limpo
- Favicon: logo leão CFA na aba

## Entregue

- [x] Mescla box + clínica (Next.js)
- [x] PR #1 merged
- [x] Deploy production (www + Vercel)
- [x] Favicon / ícones
- [x] Original preservado no remoto
- [x] Hero `/clinica`: proporção invertida (centro grande · laterais marca
      d'água), fotos integradas sem vão e centro com mais brilho

## Hero da clínica — como funciona

`src/components/sections/Hero.tsx`

- **Sem vão:** as laterais usam margem negativa (`-mr-16` / `-ml-16`) e ficam
  em `z-0`, entrando por baixo do centro (`z-10`).
- **Integração:** `maskEdges()` cruza duas máscaras lineares
  (`mask-composite: intersect`) — miolo sólido, bordas desvanecem. Um radial
  único **não** resolve: o raio que cobre o box joga o fade para fora da área
  visível (foi o que dava o retângulo de borda dura).
- **Opacidade das laterais vai na `<Image>`, não no wrapper** — o GSAP anima
  `autoAlpha` do wrapper e sobrescreveria a classe com `opacity:1` inline.
- **Brilho do centro:** `filter: saturate/contrast/brightness` na imagem + dois
  glows (laranja e branco) atrás, em `-z-10`.
- Ajuste fino de tamanho: `w-[250px] h-[470px]` (laterais, em `md`) ·
  `w-[640px]` (centro).
