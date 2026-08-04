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
 */
export const enrollment = {
  /** Data/hora da abertura em horário de Brasília (o -03:00 é obrigatório:
      sem ele, quem acessa de outro fuso vê a contagem errada). */
  opensAt: "2026-07-31T12:00:00-03:00",
  opensAtLabel: "31 de julho, às 12h",
  whatsappGroupUrl: "https://chat.whatsapp.com/CsLmxznb7bEAvrPO2aqMSb",
};

/**
 * Destino de TODO botão de inscrição do site (header, hero, preço, rodapé e a
 * barra fixa): o grupo do WhatsApp.
 *
 * Use com spread — `<Button {...ctaInscricao}>` — para não espalhar o link
 * pelos componentes. Sem link configurado, cai para a seção de inscrição da
 * própria página: um `href` vazio deixaria o botão morto.
 */
export const ctaInscricao = enrollment.whatsappGroupUrl
  ? { href: enrollment.whatsappGroupUrl, external: true }
  : { href: "#inscricao", external: false };

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
    {
      title: "Mobilidade e Core",
      desc: "Preparação de ombro e punho para sustentar a posição invertida.",
    },
    {
      title: "Desenvolvimento do Bodyline",
      desc: "Linha do corpo: oco ativo e controle da lombar de cabeça para baixo.",
    },
    {
      title: "Base de Handstand",
      desc: "Apoio firme e sustentação da parada de mão.",
    },
    {
      title: "Progressões de Kick Up / Entrada",
      desc: "Subida controlada — nem chute demais, nem de menos.",
    },
    {
      title: "Trabalho Técnico de Equilíbrio / Hold",
      desc: "Dedos, ombro e quadril para achar e segurar o ponto de equilíbrio.",
    },
    {
      title: "Transferência de Peso",
      desc: "Passar o peso de uma mão para a outra — é daí que sai o passo.",
    },
    {
      title: "Saída Segura e Primeiros Passos",
      desc: "Como sair sem se machucar e os primeiros metros de deslocamento.",
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
