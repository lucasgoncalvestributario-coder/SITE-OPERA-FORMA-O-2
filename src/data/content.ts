import { CourseItem, CityLocation, GalleryItem } from '../types';

export const COMPANY_INFO = {
  name: 'Opera Formação',
  subtitle: 'Escola de Formação de Operadores de Máquinas Pesadas',
  phoneRaw: '4791572989',
  phoneFormatted: '(47) 9157-2989',
  whatsappMessage: 'Olá, quero saber mais sobre os cursos da Opera Formação',
  whatsappUrl: 'https://wa.me/554791572989?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20cursos%20da%20Opera%20Forma%C3%A7%C3%A3o',
  instagram: '@ESCOLA.OPERA.FORMACAO',
  instagramUrl: 'https://www.instagram.com/escola.opera.formacao/',
  facebook: 'Opera Formação',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61570351162766&locale=pt_BR',
  address: 'Rua Jose Bonifacio Malburg, 143',
  businessHours: 'das 07h30 às 00h (Atendimento diário)',
  creaCredencial: 'Credenciado CREA-BR / Reg. Nacional de Treinamentos',
};

export const MACHINES_LIST = [
  {
    id: 'escavadeira',
    name: 'Escavadeira Hidráulica',
    tag: 'Máquina Pesada de Alto Porte',
    image: 'https://i.ibb.co/KxvnVWxH/ESCAVADEIRA.png',
    description: 'A gigante das obras civis e mineração. Treinamento completo em sistemas hidráulicos, giro de 360°, taludes, escavação profunda e nivelamento.',
    highlights: [
      'Operação real na cabine de comando',
      'Manuseio de joysticks e comandos hidráulicos',
      'Escavação, carga de caminhões e abertura de valas',
      'Procedimentos diários de manutenção e segurança NR-11/NR-12'
    ],
  },
  {
    id: 'retroescavadeira',
    name: 'Retroescavadeira',
    tag: 'Versatilidade e Alta Demanda',
    image: 'https://i.ibb.co/XfKSRwnT/RETRO.png',
    description: 'A máquina mais solicitada no setor de terraplanagem e obras públicas. Domínio da concha dianteira e do braço escavador traseiro com sapatas de apoio.',
    highlights: [
      'Controle de concha dianteira e lança traseira',
      'Estabilização com sapatas e manobras em canteiro',
      'Valamento, aterro, nivelamento e carregamento',
      'Normas de segurança operacional e tráfego'
    ],
  },
  {
    id: 'bobcat',
    name: 'Mini Pá Carregadeira (Bobcat)',
    tag: 'Agilidade em Espaços Reduzidos',
    image: 'https://i.ibb.co/CpDgXHDF/MINI-PA.png',
    description: 'Essencial para obras urbanas, galpões e terraplanagem compacta. Aprendizado de manobras ágeis, giro em raio zero e movimentação rápida de material.',
    highlights: [
      'Giro em 360° e manobras de precisão',
      'Carregamento, nivelamento e transporte de terra',
      'Sensibilidade nos comandos hidrostáticos',
      'Inspeção pré-operacional e segurança no canteiro'
    ],
  },
];

export const CITIES_LIST = [
  // São Paulo (SP)
  { name: 'Diadema', state: 'SP' },
  { name: 'Sorocaba', state: 'SP' },
  { name: 'São Paulo', state: 'SP' },
  { name: 'Praia Grande', state: 'SP' },

  // Minas Gerais (MG)
  { name: 'Belo Horizonte', state: 'MG' },
  { name: 'Uberlândia', state: 'MG' },
  { name: 'Ipatinga', state: 'MG' },

  // Rio de Janeiro (RJ)
  { name: 'Rio de Janeiro', state: 'RJ' },
  { name: 'Duque de Caxias', state: 'RJ' },
  { name: 'Volta Redonda', state: 'RJ' },

  // Espírito Santo (ES)
  { name: 'Vitória', state: 'ES' },
  { name: 'Serra', state: 'ES' },
  { name: 'Linhares', state: 'ES' },

  // Paraná (PR)
  { name: 'Toledo', state: 'PR' },
  { name: 'Londrina', state: 'PR' },
  { name: 'Curitiba', state: 'PR' },

  // Santa Catarina (SC)
  { name: 'Balneário Camboriú', state: 'SC' },
  { name: 'Palhoça', state: 'SC' },
  { name: 'Itajaí', state: 'SC' },
  { name: 'Itaperiú', state: 'SC' },
  { name: 'Chapecó', state: 'SC' },

  // Rio Grande do Sul (RS)
  { name: 'Porto Alegre', state: 'RS' },
  { name: 'Pelotas', state: 'RS' },
  { name: 'Santa Rosa', state: 'RS' },
  { name: 'Erechim', state: 'RS' },

  // Goiás (GO)
  { name: 'Goiânia', state: 'GO' },
];

export const CITIES_LIST_28 = CITIES_LIST;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Instrução Prática de Máquinas Pesadas',
    category: 'Treinamento',
    image: 'https://i.ibb.co/p6jt59Wz/Whats-App-Image-2026-09-02-at-13-13-49-1.jpg',
    description: 'Instrução prática individualizada no canteiro de obras com máquinas pesadas.',
  },
  {
    id: '2',
    title: 'Operação e Manobras em Campo',
    category: 'Treinamento',
    image: 'https://i.ibb.co/h1H8gzfk/Whats-App-Image-2026-09-02-at-13-13-49.jpg',
    description: 'Aulas práticas dinâmicas com acompanhamento direto do instrutor técnico.',
  },
  {
    id: '3',
    title: 'Domínio dos Comandos e Joysticks',
    category: 'Treinamento',
    image: 'https://i.ibb.co/cKLCgBZT/Whats-App-Image-2026-09-02-at-13-13-50-1.jpg',
    description: 'Domínio total de alavancas, escavação e segurança operacional na cabine.',
  },
  {
    id: '4',
    title: 'Turma de Formação de Operadores',
    category: 'Alunos',
    image: 'https://i.ibb.co/WvJNHTNt/Whats-App-Image-2026-09-02-at-13-13-50-2.jpg',
    description: 'Alunos qualificados prontos para atender as exigências de construtoras e mineradoras.',
  },
  {
    id: '5',
    title: 'Capacitação Técnica de Alto Nível',
    category: 'Treinamento',
    image: 'https://i.ibb.co/C5B8wsDc/Whats-App-Image-2026-09-02-at-13-13-50-3.jpg',
    description: 'Exercícios práticos de terraplanagem, nivelamento e movimentação de solo.',
  },
  {
    id: '6',
    title: 'Prática Intensiva de Campo',
    category: 'Treinamento',
    image: 'https://i.ibb.co/6026z5XH/Whats-App-Image-2026-09-02-at-13-13-50-4.jpg',
    description: 'Experiência real com equipamentos modernos e metodologia intensiva.',
  },
  {
    id: '7',
    title: 'Segurança e Procedimentos Operacionais',
    category: 'Treinamento',
    image: 'https://i.ibb.co/8grX9h1X/Whats-App-Image-2026-09-02-at-13-13-50.jpg',
    description: 'Aplicação rigorosa dos procedimentos de segurança e normas técnicas NR-11 e NR-12.',
  },
  {
    id: '8',
    title: 'Manuseio Técnico das Máquinas',
    category: 'Máquinas',
    image: 'https://i.ibb.co/fGYTL2Fk/Whats-App-Image-2026-09-02-at-13-13-51-1.jpg',
    description: 'Aprendizado focado no controle preciso dos equipamentos no canteiro.',
  },
  {
    id: '9',
    title: 'Treinamento Completo na Cabine',
    category: 'Treinamento',
    image: 'https://i.ibb.co/21zhhK72/Whats-App-Image-2026-09-02-at-13-13-51-2.jpg',
    description: 'Treinamento imersivo proporcionando segurança e autonomia aos novos operadores.',
  },
  {
    id: '10',
    title: 'Atividades Práticas de Terraplanagem',
    category: 'Treinamento',
    image: 'https://i.ibb.co/p61hWCT2/Whats-App-Image-2026-09-02-at-13-13-51-3.jpg',
    description: 'Simulações reais de obras civis, nivelamento e movimentação de carga pesada.',
  },
  {
    id: '11',
    title: 'Formação Profissional e Certificação',
    category: 'Alunos',
    image: 'https://i.ibb.co/bj6NtTqJ/Whats-App-Image-2026-09-02-at-13-13-51.jpg',
    description: 'Certificado e carteira de operador credenciada pelo CREA com validade nacional.',
  },
];

export const DIRECTOR_INFO = {
  name: 'Valiandro Bock',
  role: 'Diretor e CEO da Opera Formação',
  photo: 'https://i.ibb.co/0jB2Ycnv/Whats-App-Image-2026-08-20-at-14-00-24.jpg',
  stats: [
    { label: 'Experiência no Ramo', value: 'Mais de 3 Anos' },
    { label: 'Alunos Formados', value: 'Mais de 1.650' },
    { label: 'Cidades Atendidas', value: '26 Cidades' },
  ],
};

export const TESTIMONIALS_DATA = [
  {
    id: 'depoimento-1',
    category: 'Concurso Público',
    title: 'Aprovado em 1º Lugar no Concurso',
    subtitle: 'Aluno formado pela Opera conquista o primeiro lugar para operador de máquinas',
    description: 'História inspiradora de superação e domínio técnico que garantiu a nota máxima na prova prática e a aprovação no concurso municipal.',
    badge: '🏆 1º Lugar Concurso',
    accentColor: 'from-amber-500 to-yellow-400',
    youtubeId: 'TNTb0tK7ghg',
    youtubeUrl: 'https://youtu.be/TNTb0tK7ghg',
    isShort: false,
    poster: 'https://img.youtube.com/vi/TNTb0tK7ghg/hqdefault.jpg',
  },
  {
    id: 'depoimento-2',
    category: 'Reconhecimento Global',
    title: 'Alunos Estrangeiros na Opera',
    subtitle: 'Profissionais internacionais que escolheram a Opera Formação no Brasil',
    description: 'Alunos vindos do exterior para vivenciar a metodologia prática intensiva e obter certificação técnica com respaldo nacional e internacional.',
    badge: '🌎 Alunos Estrangeiros',
    accentColor: 'from-sky-500 to-blue-400',
    youtubeId: 'HOraEcn0aJ8',
    youtubeUrl: 'https://youtube.com/shorts/HOraEcn0aJ8?feature=share',
    isShort: true,
    poster: 'https://img.youtube.com/vi/HOraEcn0aJ8/hqdefault.jpg',
  },
  {
    id: 'depoimento-3',
    category: 'Mulheres no Comando',
    title: 'Mulheres no Comando das Máquinas',
    subtitle: 'Precisão, técnica e liderança feminina na cabine de máquinas pesadas',
    description: 'Depoimento de aluna quebrando barreiras no setor da construção civil com excelência, segurança e grande habilidade operacional.',
    badge: '⭐ Mulher Operadora',
    accentColor: 'from-rose-500 to-amber-400',
    youtubeId: 'vVY89hz_5kM',
    youtubeUrl: 'https://youtube.com/shorts/vVY89hz_5kM?feature=share',
    isShort: true,
    poster: 'https://img.youtube.com/vi/vVY89hz_5kM/hqdefault.jpg',
  },
  {
    id: 'depoimento-4',
    category: 'Experiência Prática',
    title: 'Depoimento do Curso',
    subtitle: 'A experiência prática e transformação real na Opera Formação',
    description: 'Relato direto sobre a estrutura dos 3 dias de treinamento, metodologia 100% prática na cabine e aprendizado acelerado nas máquinas.',
    badge: '🚜 Depoimento do Curso',
    accentColor: 'from-emerald-500 to-amber-400',
    youtubeId: 'bU5K8fqnL1A',
    youtubeUrl: 'https://youtube.com/shorts/bU5K8fqnL1A?feature=share',
    isShort: true,
    poster: 'https://img.youtube.com/vi/bU5K8fqnL1A/hqdefault.jpg',
  },
];

export const REGULATORY_STANDARDS = [
  { code: 'NR-06', title: 'Equipamentos de Proteção Individual (EPI)' },
  { code: 'NR-07', title: 'Controle Médico e Saúde Ocupacional' },
  { code: 'NR-11', title: 'Transporte, Movimentação e Manuseio de Materiais' },
  { code: 'NR-12', title: 'Segurança no Trabalho em Máquinas e Equipamentos' },
  { code: 'NR-18', title: 'Segurança e Saúde na Indústria da Construção' },
  { code: 'NR-22', title: 'Segurança e Saúde Ocupacional na Mineração' },
  { code: 'NR-26', title: 'Sinalização de Segurança' },
  { code: 'NR-28', title: 'Fiscalização e Penalidades' },
  { code: 'NR-31', title: 'Segurança no Trabalho no Agronegócio' },
];

export const PHYSICAL_UNITS = [
  {
    id: 'unit-itajai',
    city: 'Itajaí',
    state: 'Santa Catarina',
    stateCode: 'SC',
    title: 'Unidade Opera Formação — Itajaí / SC',
    description: 'Centro de treinamento e atendimento presencial em Santa Catarina.',
    address: 'Rua Jose Bonifacio Malburg, 143 - Centro, Itajaí - SC',
    highlight: 'Unidade Física Oficial',
  },
  {
    id: 'unit-sp',
    city: 'São Paulo',
    state: 'São Paulo',
    stateCode: 'SP',
    title: 'Unidade Opera Formação — São Paulo / SP',
    description: 'Centro de formação e instrução técnica para a região metropolitana e estado de São Paulo.',
    address: 'São Paulo - SP',
    highlight: 'Unidade Física Oficial',
  },
];

export const LEARNING_GUARANTEE = {
  headline1: 'APRENDEU? ÓTIMO.',
  headline2: 'AINDA PRECISA REFORÇAR? VOLTE.',
  description: 'Na Opera Formação, seu sucesso profissional é prioridade absoluta. O aluno que por qualquer motivo sentir necessidade de reforçar a prática ou fixar melhor o conteúdo pode retornar na próxima turma e refazer o treinamento gratuitamente.',
};

export const CREA_INSTITUTIONAL = {
  title: 'FORMAÇÃO COM CREDIBILIDADE E RECONHECIMENTO',
  description: 'A Opera Formação possui credenciamento junto ao CREA, emitindo certificados e carteiras de operador com total respaldo técnico e validade em todo o território nacional. Essa chancela garante que grandes construtoras, empreiteiras e mineradoras reconheçam de imediato a sua capacitação profissional.',
  items: [
    {
      title: 'Responsabilidade Técnica',
      description: 'Supervisão técnica por profissionais devidamente habilitados no sistema CONFEA/CREA.',
    },
    {
      title: 'Aceitação em Grandes Obras',
      description: 'Certificados prontos para admissão em empreiteiras, portos, indústrias e mineradoras.',
    },
  ],
};

export const CREA_LOGO_URL = 'https://i.ibb.co/Gvy2cfQs/logotipo-CREA.png';

export const FAQ_ITEMS = [
  {
    question: 'Preciso ter CNH (Carteira Nacional de Habilitação) para fazer o curso?',
    answer: 'Não! Para realizar o curso e atuar como operador de máquinas pesadas em canteiros de obras, mineradoras e indústrias, não é obrigatório possuir CNH. As normas técnicas exigem a capacitação teórica-prática e a carteira de operador que emitimos.',
  },
  {
    question: 'Qual a idade mínima para se matricular na Opera Formação?',
    answer: 'A idade mínima permitida é de 16 anos. Jovens a partir dos 16 anos já podem se capacitar e receber seu certificado credenciado.',
  },
  {
    question: 'Em quanto tempo recebo meu certificado e carteira de operador?',
    answer: 'Em até 24 horas após a conclusão das aulas de domingo, você já recebe o seu certificado oficial e a carteira física e digital de operador credenciada pelo CREA.',
  },
  {
    question: 'Como funcionam os 3 dias de curso?',
    answer: 'O curso é dividido estrategicamente no final de semana: Sexta-feira com aula teórica e normas regulamentadoras aplicáveis, Sábado e Domingo inteiros dedicados à prática intensiva nas máquinas pesadas de verdade.',
  },
  {
    question: 'Quais máquinas estão inclusas na formação?',
    answer: 'Estão inclusas a Escavadeira Hidráulica, Retroescavadeira e Mini Pá Carregadeira (Bobcat).',
  },
  {
    question: 'Como funciona a Garantia de Aprendizado?',
    answer: 'Caso você sinta necessidade de praticar mais ou reforçar os conhecimentos após o curso, poderá retornar na próxima turma da sua região e refazer o treinamento de forma 100% gratuita.',
  },
  {
    question: 'Qual o valor do investimento no curso?',
    answer: 'O investimento total fica em torno de aproximadamente um salário mínimo para o pacote completo de 3 máquinas. Oferecemos condições facilitadas de pagamento no cartão de crédito, boleto ou PIX.',
  },
];

