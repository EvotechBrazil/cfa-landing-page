export const course = {
  brand: "i.R.C",
  partner: "CrossFit Arapongas",
  partnerShort: "CFA",
  title: "Clínica",
  subtitle: "Toes to Bar & Bar Muscle Up",
  /* Os dois nomes separados: o hero desenha cada um com contorno próprio,
     por isso não dá para reaproveitar o `subtitle` (que é texto corrido). */
  clinicOne: "Toes to Bar",
  clinicTwo: "Bar Muscle Up",
  tagline: "Stronger Together",
  headline: "Domine a barra com técnica, força e segurança",
  description:
    "Duas clínicas intensivas para construir mobilidade, core, grip e a progressão técnica que falta entre o solo e o movimento completo na barra.",
  cta: "Quero garantir minha vaga",
  ctaSecondary: "Ver o programa",
  location: "CrossFit Arapongas",
  format: "Presencial · Prático",
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

export const stats = [
  { value: "02", label: "Clínicas técnicas" },
  { value: "13+", label: "Blocos de conteúdo" },
  { value: "100%", label: "Foco em progressão" },
  { value: "iRC", label: "Método Stronger Together" },
];

export const toesToBar = {
  id: "toes-to-bar",
  code: "01",
  name: "Clínica Toes to Bar",
  short: "TTB",
  pitch:
    "Do balanço seguro ao toes to bar eficiente — com mobilidade, core, grip e finalização técnica.",
  accent: "#FF4D00",
  modules: [
    {
      title: "Mobilidade e Core",
      desc: "Preparação ativa para amplitude e controle do tronco.",
    },
    {
      title: "Construção do Balanço",
      desc: "Balanço seguro e eficiente — base de todo o movimento.",
    },
    {
      title: "Força Hand Grip",
      desc: "Grip que sustenta volume e qualidade na barra.",
    },
    {
      title: "Base de Força",
      desc: "Força no solo e suspensa para transferir potência.",
    },
    {
      title: "Trabalho Técnico TTB",
      desc: "Progressões técnicas específicas do toes to bar.",
    },
    {
      title: "Suspenso e Finalização",
      desc: "Trabalho suspenso e fechamento limpo do movimento.",
    },
  ],
};

export const barMuscleUp = {
  id: "bar-muscle-up",
  code: "02",
  name: "Clínica Bar Muscle Up",
  short: "BMU",
  pitch:
    "Da base neural e de força até a entrada na barra e a finalização do muscle-up.",
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

export const benefits = [
  {
    title: "Progressão real",
    desc: "Blocos ordenados do solo ao suspenso — sem pular etapas.",
  },
  {
    title: "Técnica com segurança",
    desc: "Balanço, grip e posições construídos para proteger articulações.",
  },
  {
    title: "Força transferível",
    desc: "Base de força que alimenta TTB e BMU no treino e na competição.",
  },
  {
    title: "Método i.R.C",
    desc: "Com Paty Moura e Chan — Stronger Together, foco em prática e detalhe.",
  },
];

export const forWho = [
  "Atletas que travam no toes to bar ou muscle-up",
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
    q: "Preciso já fazer toes to bar ou muscle-up?",
    a: "Não. As clínicas partem de mobilidade, core e base de força. Se você já executa o movimento, aprofunda técnica e eficiência.",
  },
  {
    q: "As duas clínicas são no mesmo dia?",
    a: "O formato e a agenda serão confirmados pela CFA. As abordagens são complementares e podem ser ofertadas juntas ou em blocos.",
  },
  {
    q: "É indicado para iniciantes?",
    a: "Sim, desde que você tenha condição mínima de treino com barra e interesse em progressão. O foco é construção segura.",
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
