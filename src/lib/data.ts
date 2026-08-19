export const course = {
  brand: "i.R.C",
  partner: "CrossFit Arapongas",
  partnerShort: "CFA",
  title: "Clínica",
  subtitle: "Bar Muscle Up & Handstand Walk",
  /* Os dois nomes separados: o hero desenha cada um com contorno próprio,
     por isso não dá para reaproveitar o `subtitle` (que é texto corrido). */
  clinicOne: "Bar Muscle Up",
  clinicTwo: "Handstand Walk",
  tagline: "Stronger Together",
  headline: "Domine a barra e a parada de mão com técnica, força e segurança",
  description:
    "Duas clínicas intensivas para construir mobilidade, core, força e a progressão técnica que falta entre o solo, o movimento completo na barra e o deslocamento invertido.",
  cta: "Quero garantir minha vaga",
  ctaSecondary: "Ver o programa",
  location: "CrossFit Arapongas",
  format: "Presencial · Prático",
};

/** Quando a clínica acontece. Um lugar só — hero, contagem e FAQ leem daqui. */
export const event = {
  dateLabel: "05 de setembro de 2026",
  dateShort: "05/09",
  weekday: "sábado",
  place: "CrossFit Arapongas",
  /** O vão entre a clínica da manhã e a da tarde. */
  lunch: { label: "Intervalo para almoço", time: "12:00 às 14:00" },
};

/**
 * Abertura das inscrições — o contador do site sai daqui.
 *
 * ⚠️ `whatsappGroupUrl` é o único lugar para colar o link do grupo. Enquanto
 * estiver vazio, o site esconde o botão sozinho e mostra só a contagem: melhor
 * não ter botão do que ter um que leva a lugar nenhum.
 *
 * O grupo deixou de ser o destino da inscrição em 19/08 — o pagamento é o
 * Asaas do lote acessível (`checkoutHref`). O link fica aqui caso o gestor
 * ainda use o grupo para aviso; nenhum CTA de vaga aponta para ele.
 */
export const enrollment = {
  /** Data/hora da abertura em horário de Brasília (o -03:00 é obrigatório:
      sem ele, quem acessa de outro fuso vê a contagem errada). */
  opensAt: "2026-07-31T12:00:00-03:00",
  opensAtLabel: "31 de julho, às 12h",
  whatsappGroupUrl: "https://chat.whatsapp.com/CsLmxznb7bEAvrPO2aqMSb",
};

/**
 * Pacote único (BMU + HSW) em três lotes.
 *
 * Só o lote `current` e `accessible` vira botão de pagar. O URL de checkout
 * **não** pode existir no objeto de um lote inacessível — iria para o JS do
 * cliente e qualquer um abriria o Asaas.
 *
 * 2º lote (R$ 230) tem checkout pronto, mas o URL mora só no HANDOFF até o
 * 1º encerrar. 3º lote ainda sem checkout: "em breve, maiores informações".
 *
 * Ao passar de lote: (1) `current`/`accessible` no lote novo (2) colar o
 * `paymentUrl` só nesse lote. Mexer só no `current` mostra um preço e cobra outro.
 */
export const pricing = {
  lot1Rule: "1º lote até 31/08 ou até o preenchimento de todas as vagas.",
  lots: [
    {
      n: 1,
      label: "1º lote",
      price: 220,
      priceLabel: "R$ 220",
      current: true,
      accessible: true,
      paymentUrl: "https://www.asaas.com/c/d0cxzkkhsxw2fvzy",
      eyebrow: "Lote atual",
      note: "Até 31/08 ou até preencher as vagas",
    },
    {
      n: 2,
      label: "2º lote",
      price: 230,
      priceLabel: "R$ 230",
      current: false,
      accessible: false,
      eyebrow: "Próximo lote",
      note: "Indisponível",
    },
    {
      n: 3,
      label: "3º lote",
      price: 240,
      priceLabel: "R$ 240",
      current: false,
      accessible: false,
      eyebrow: "Último lote",
      note: "Em breve, maiores informações",
    },
  ],
  includes: [
    "Clínica Bar Muscle Up completa",
    "Clínica Handstand Walk completa",
    "Progressões solo → suspenso → invertido",
    "Trabalho de mobilidade, core e grip",
    "Orientações técnicas com Paty Moura e Chan (i.R.C)",
  ],
};

export const currentLot =
  pricing.lots.find((lot) => lot.current) ?? pricing.lots[0];

/** Só devolve o Asaas se o lote estiver liberado — nunca vaza href bloqueado. */
export function checkoutHref(lot: {
  accessible: boolean;
  paymentUrl?: string;
}) {
  if (!lot.accessible || !lot.paymentUrl) return undefined;
  return lot.paymentUrl;
}

/**
 * Destino de TODO botão de inscrição do site (header, hero, preço e a
 * barra fixa): o checkout do Asaas do lote atual, se estiver acessível.
 *
 * Use com spread — `<Button {...ctaInscricao}>` — para não espalhar o link
 * pelos componentes. Sem checkout liberado, cai para a seção de inscrição.
 */
const checkoutAtual = checkoutHref(currentLot);

export const ctaInscricao = checkoutAtual
  ? { href: checkoutAtual, external: true as const }
  : { href: "#inscricao", external: false as const };

export const stats = [
  { value: "02", label: "Clínicas técnicas" },
  { value: "14", label: "Blocos de conteúdo" },
  { value: "100%", label: "Foco em progressão" },
  { value: "iRC", label: "Método Stronger Together" },
];

export const barMuscleUp = {
  id: "bar-muscle-up",
  code: "01",
  name: "Clínica Bar Muscle Up",
  short: "BMU",
  pitch:
    "Da base neural e de força até a entrada na barra e a finalização do muscle-up.",
  schedule: { period: "Manhã", time: "09:30 às 12:00" },
  accent: "#FF4D00",
  modules: [
    {
      title: "Mobilidade e Core",
      desc: "Preparação para ombros, tórax e linha do corpo.",
    },
    {
      title: "Front Drop e Pullover",
      desc: "Desenvolvimento das transições que abrem o BMU.",
    },
    {
      title: "Base de Força",
      desc: "Força no solo e suspensa — alicerce do muscle-up.",
    },
    {
      title: "Trabalho Neural — Barra Baixa",
      desc: "Padrão motor com carga neural controlada.",
    },
    {
      title: "Trabalho Técnico com Caixas",
      desc: "Progressões com caixas para timing e posição.",
    },
    {
      title: "Entrada na Barra",
      desc: "Trabalho suspenso e entrada segura no BMU.",
    },
    {
      title: "Finalização do Movimento",
      desc: "Lockout, controle e consistência no topo.",
    },
  ],
};

export const handstandWalk = {
  id: "handstand-walk",
  code: "02",
  name: "Clínica Handstand Walk",
  short: "HSW",
  pitch:
    "Da parada de mão firme na parede ao deslocamento invertido com equilíbrio e controle.",
  schedule: { period: "Tarde", time: "14:00 às 16:30" },
  accent: "#FF4D00",
  modules: [
    /* Descrições curtas de propósito (~50 caracteres): é o que mantém todo
       bloco em no máximo duas linhas, e é isso que deixa os itens dos dois
       cards do mesmo tamanho até no celular. Ver Clinics.tsx. */
    {
      title: "Mobilidade e Core",
      desc: "Ombro e punho prontos para a posição invertida.",
    },
    {
      title: "Desenvolvimento do Bodyline",
      desc: "Linha do corpo: oco ativo e lombar sob controle.",
    },
    {
      title: "Base de Handstand",
      desc: "Apoio firme e sustentação da parada de mão.",
    },
    {
      title: "Progressões de Kick Up / Entrada",
      desc: "Subida controlada, sem chute demais nem de menos.",
    },
    {
      title: "Trabalho Técnico de Equilíbrio / Hold",
      desc: "Dedos, ombro e quadril para achar o equilíbrio.",
    },
    {
      title: "Transferência de Peso",
      desc: "Passar o peso de uma mão para a outra.",
    },
    {
      title: "Saída Segura e Primeiros Passos",
      desc: "Sair sem se machucar e dar os primeiros metros.",
    },
  ],
};

export const benefits = [
  {
    title: "Progressão real",
    desc: "Blocos ordenados do solo ao suspenso e ao invertido — sem pular etapas.",
  },
  {
    title: "Técnica com segurança",
    desc: "Grip, ombro e posições construídos para proteger articulações.",
  },
  {
    title: "Força transferível",
    desc: "Base de força que alimenta BMU e HSW no treino e na competição.",
  },
  {
    title: "Método i.R.C",
    desc: "Com Paty Moura e Chan — Stronger Together, foco em prática e detalhe.",
  },
];

export const forWho = [
  "Atletas que travam no muscle-up na barra ou na parada de mão",
  "Praticantes que querem técnica limpa e eficiente",
  "Coaches e alunos que buscam progressões claras",
  "Quem já tem base de força e quer polimento técnico",
];

export const speakers = {
  title: "Seus palestrantes",
  brand: "i.R.C · Stronger Together",
  names: "Paty Moura & Chan",
  people: [
    {
      name: "Paty Moura",
      role: "Coach i.R.C · Ginástica aplicada",
      image: "/images/paty.jpg",
      instagram: "https://www.instagram.com/patyymoura/",
      instagramHandle: "@patyymoura",
    },
    {
      name: "Chan",
      role: "Coach i.R.C · Ginástica aplicada",
      image: "/images/chan.jpg",
      instagram: "https://www.instagram.com/treinador_chan/",
      instagramHandle: "@treinador_chan",
    },
  ],
  bio: "Paty Moura e Chan — especialistas em ginástica aplicada ao treinamento de alto desempenho. Método prático, progressivo e seguro — do grip ao lockout.",
  image: "/images/speakers.png",
};

export const faq = [
  {
    q: "Quanto custa e como pago?",
    a: "O pacote das duas clínicas sai em três lotes. O 1º lote é R$ 220, até 31/08 ou até o preenchimento de todas as vagas — pagamento online pelo botão de inscrição. O 2º lote (R$ 230) ainda não está liberado. O 3º lote: em breve, maiores informações.",
  },
  {
    q: "Preciso já fazer bar muscle up ou handstand walk?",
    a: "Não. As clínicas partem de mobilidade, core e base de força. Se você já executa o movimento, aprofunda técnica e eficiência.",
  },
  {
    q: "As duas clínicas são no mesmo dia?",
    a: "Sim. As duas acontecem em 05 de setembro de 2026, um sábado, na CrossFit Arapongas. As abordagens são complementares e o dia é organizado em blocos.",
  },
  {
    q: "É indicado para iniciantes?",
    a: "Sim, desde que você tenha condição mínima de treino com barra e no solo, além de interesse em progressão. O foco é construção segura.",
  },
  {
    q: "O que devo levar?",
    a: "Roupa de treino, tênis adequado e grip/fita se já utilizar. Hidratação e disposição para treinar com intensidade técnica.",
  },
];

export const nav = [
  { href: "#clinicas", label: "Clínicas" },
  { href: "#programa", label: "Programa" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#faq", label: "FAQ" },
];
