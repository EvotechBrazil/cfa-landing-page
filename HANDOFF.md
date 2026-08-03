# CFA — App unificado (`cfa-lp`)

**Status: filé / 100%** no `main` @ `cf9643e`.

Master: `/Volumes/Dados/Projetos/CFA-HANDOFF.md`

## ⚠️ Troca de evento (03/08/2026)

O gestor remarcou e trocou uma das clínicas. Agora é assim:

| O quê | Antes | Agora |
|-------|-------|-------|
| Data | 08/08/2026 | **05/09/2026** (também um sábado) |
| Clínica da manhã | Toes to Bar · 09:00–11:30 | **Bar Muscle Up · 09:30–12:00** |
| Clínica da tarde | Bar Muscle Up · 13:30–16:00 | **Handstand Walk · 14:00–16:30** |
| Almoço | 11:30–13:30 | **12:00–14:00** |

**Toes to Bar saiu do site inteiro.** O objeto `toesToBar` virou `handstandWalk`
em `src/lib/data.ts` e o `barMuscleUp` passou a ser a clínica `01` (manhã). Onde
havia "TTB" agora se lê "HSW" — hero, Speakers, Pricing, FinalCTA e o SEO da
`/clinica`.

> **Pendente de revisão do gestor:** os seis blocos do Handstand Walk são
> proposta nossa (mobilidade de ombro e punho, linha do corpo, força invertida,
> kick up, equilíbrio, deslocamento). Os blocos do Bar Muscle Up seguem os sete
> originais, sem tocar. Data e horários vieram confirmados.

A contagem regressiva não precisou de ajuste: `enrollment.opensAt` é 31/07 e já
passou, então o site mostra "Inscrições abertas" — que é o estado certo para um
evento em setembro.

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
- https://crossfitarapongas.com.br/ (apex, entrou na Vercel em 03/08/2026)
- https://site-cfa-gray.vercel.app/

O apex sem `www` está resolvido: certificado Let's Encrypt novo (30/07/2026,
válido até 28/10) e `http` redirecionando 308 para `https`. **Pode divulgar o
endereço com ou sem `www`** — a regra antiga de "preferir www" caiu.

## Git

- Branch: `main` @ `cf9643e`
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
- [x] Hero `/clinica` v2 (pedido do gestor 30/07): foto do centro recortada sem
      fundo e 15% maior, luz neon + fumaça atrás, título mais para cima,
      "Clínica" + os dois nomes com contorno vazado

## Contagem para a abertura das inscrições

`src/components/sections/Countdown.tsx` · config em `enrollment` (`src/lib/data.ts`).

**Tudo se controla por `enrollment`** — data, rótulo e link do grupo. Não há
data escrita no meio do componente.

- `opensAt` **precisa** do fuso (`-03:00`). Sem ele, a contagem sai errada para
  quem acessa de outro fuso — o navegador assumiria o fuso local.
- `whatsappGroupUrl` vazio esconde os botões sozinho e troca o texto para "o
  link será divulgado". É a rede de proteção para nunca ir ao ar um botão que
  não leva a lugar nenhum.
- Quando a hora chega, o componente troca sozinho para "Inscrições abertas" e
  o relógio some — **ninguém precisa mexer no site na hora**.

Aparece em dois lugares (decisão do gestor em 30/07):

| Onde | Variante | Por quê |
|------|----------|---------|
| Topo do hero | `hero` — tarja de 1 linha | Em bloco abaixo dos botões ela terminava em 1226px e ficava fora da primeira tela de qualquer notebook: a foto grande come o espaço. Na tarja aparece sem rolar. |
| Antes do `Pricing` | `band` — faixa completa | Números grandes, texto e o botão cheio, encostada na seção de inscrição. |

A tarja do hero traz só um link de texto — o botão cheio fica para a faixa,
para não repetir o mesmo botão duas vezes na página.

### Para onde vão os botões de inscrição

Desde 30/07 **todo CTA de inscrição leva ao grupo do WhatsApp**, não mais às
âncoras da página: header (desktop e menu mobile), hero, seção de preço, CTA
final e a barra fixa. São seis.

Todos usam o mesmo objeto — `<Button {...ctaInscricao}>`, de `src/lib/data.ts`.
**Não escreva o link do grupo direto no componente**: se ele mudar, tem que
mudar em um lugar só. Sem link configurado, `ctaInscricao` cai para
`#inscricao` em vez de deixar o botão morto.

Os botões secundários seguem como âncoras internas, de propósito: "Ver o
programa", "Revisar programa" e "Conhecer Paty e Chan" servem para navegar
dentro da página, não para inscrever.

Detalhe de render: a contagem só começa depois de montar no navegador
(`useState(null)` + `useEffect`). Se calculasse no servidor, os segundos
sairiam diferentes dos do cliente e a hidratação acusaria divergência.

## Hero da clínica — como funciona

`src/components/sections/Hero.tsx` + bloco "Hero da clínica" em
`src/app/globals.css`.

### Foto do centro (recortada)

- `public/images/speakers-nobg.png` — recorte sem fundo, feito pelo
  `image_background_remover` do Higgsfield a partir de `speakers.png`
  (a original com a sala fica no repo, é a fonte).
- O PNG passou por **alpha bleed** antes de ser salvo: a cor da silhueta é
  espalhada alguns pixels para fora e só depois o resto vira preto. Sem isso o
  redimensionamento mistura o vazio e aparece franja escura em volta do
  recorte. Isso também derrubou o arquivo de 1,6 MB para 559 KB.
- ⚠️ **A perna direita do Chan está cortada no recorte** (estava atrás de uma
  cadeira que saiu junto). O enquadramento do hero corta acima disso e o resto
  cai na zona do fade — se mudar `object-position` ou o aspect, conferir.
- **Máscara:** só a base desvanece (`CENTER_BASE_FADE`, gradiente único). As
  máscaras cruzadas continuam valendo para as laterais, que ainda são fotos
  retangulares.

### Luz atrás (neon + fumaça)

Quatro camadas em `-z-10` dentro do `.hero-main`: `.hero-neon` (halo),
`.hero-smoke-a` / `.hero-smoke-b` (manchas que derivam devagar) e `.hero-floor`
(base acesa sob os pés). Mais o `drop-shadow` laranja na própria `<Image>` —
esse é o que gruda o contorno quente na silhueta, e só funciona porque a foto
tem alpha.

Dois cuidados aprendidos ajustando:

1. **Conter a luz dentro do box.** Com inset negativo grande o halo passa por
   cima das laterais e o hero inteiro fica sépia — o preto e branco delas some.
2. **Só uma das manchas pode ser laranja.** As duas laranjas dão o mesmo
   problema; a `-b` é quase neutra de propósito.

### Laterais

- **Sem vão:** margem negativa (`-mr-20` / `-ml-20` no `md`), em `z-0`,
  entrando por baixo do centro (`z-10`).
- **Integração:** `maskEdges()` cruza duas máscaras lineares
  (`mask-composite: intersect`) — miolo sólido, bordas desvanecem. Um radial
  único **não** resolve: o raio que cobre o box joga o fade para fora da área
  visível (foi o que dava o retângulo de borda dura).
- **Opacidade vai na `<Image>`, não no wrapper** — o GSAP anima `autoAlpha` do
  wrapper e sobrescreveria a classe com `opacity:1` inline.

### Título

- `course.title` = **"Clínica"**; os dois nomes saem de `clinicOne` /
  `clinicTwo` porque cada um é desenhado com contorno próprio (`subtitle`
  continua existindo — é o texto corrido que o `StickyCTA` usa).
- `.hero-clinic-name`: letra vazada acesa como **tubo de neon**. Espessura do
  traço em `em` para acompanhar o `clamp()` da fonte e `paint-order: stroke
  fill` para o traço não comer o miolo.
- ⚠️ O brilho do neon é `drop-shadow`, **não `text-shadow`**: drop-shadow segue
  o alpha do que foi pintado (só o contorno), enquanto text-shadow usa a
  silhueta da letra cheia e acende o miolo, matando o vazado. São quatro
  camadas — núcleo branco curto até halo laranja largo; é a soma que lê como
  neon, uma sombra só não.
- `.hero-clinic-amp`: o "&" fica cheio (é separador), mas com um brilho fraco —
  cinza chapado entre dois neons acesos lê como apagado.

### Tamanhos

`w-[220px] h-[415px]` (laterais, `md`) · `w-[882px]` (centro, `md`).

Ao mudar a largura das laterais, mexa na margem negativa junto: o que aparece
delas é `largura − margem`, então só encolher a foto tira quase o dobro da
parte visível.

⚠️ **Para aumentar o centro, mexa na largura E no aspect juntos.** Com
`object-cover` a escala vem da largura, então só alargar já deixa os dois
maiores — mas o box cresce em altura na mesma proporção e empurra os botões
para fora da primeira tela. Por isso o desktop usa `aspect-[3/2]` (era `5/4`):
absorve o aumento na horizontal e a altura do hero não muda. O mobile segue em
`4/5`, onde sobra altura.
