import { CourseItem, CityLocation, GalleryItem, DifferentialItem } from '../types';

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
  facebookUrl: 'https://www.facebook.com/operaformacao',
  address: 'Rua Jose Bonifacio Malburg, 143',
  businessHours: 'das 07h30 às 00h (Atendimento diário)',
  creaCredencial: 'Credenciado CREA-BR / Reg. Nacional de Treinamentos',
};

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: '1',
    title: 'Curso mais acessível da região',
    description: 'Investimento justo e cabível no bolso, com altíssimo retorno e possibilidade de pagamento facilitado no boleto e cartão.',
    iconName: 'BadgePercent',
    badge: 'Preço Imbatível',
  },
  {
    id: '2',
    title: 'Qualidade e suporte mais altos do mercado',
    description: 'Acompanhamento VIP antes, durante e após o curso com instrutores com anos de vivência no canteiro de obras.',
    iconName: 'ShieldCheck',
    badge: 'Suporte Vitalício',
  },
  {
    id: '3',
    title: 'Credenciado pelo CREA',
    description: 'Certificado com registro de responsabilidade técnica oficial no CREA, reconhecido nacionalmente por grandes empreiteiras.',
    iconName: 'Award',
    badge: 'Chancela Oficial',
  },
  {
    id: '4',
    title: 'Carteira de operador e certificado em até 24h',
    description: 'Você sai do curso pronto para apresentar sua carteirinha física e digital e começar a trabalhar imediatamente.',
    iconName: 'Zap',
    badge: 'Emissão Expressa',
  },
];

export const MAIN_COURSE_PACKAGE = {
  title: 'Pacote Trilha de Ouro - Formação Tripla de Máquinas Pesadas',
  subtitle: 'Domine as 3 máquinas mais requisitadas pela construção civil e mineração em um único final de semana prático.',
  duration: '3 dias (Sexta, Sábado e Domingo)',
  mode: 'Aulas Teóricas e Práticas Presenciais',
  cnhRequired: false,
  cnhDetail: 'Não exige CNH (Habilitação) para fazer o curso ou operar no canteiro de obras!',
  minAge: '16 anos',
  investment: 'Aproximadamente um salário mínimo (com opções de parcelamento)',
  creaAccreditation: 'Credenciamento Oficial CREA',
  deliveryTime: 'Certificado & Carteira de Operador entregues em até 24h após conclusão',
  machinesIncluded: [
    {
      name: 'Mini Pá Carregadeira (Bobcat)',
      desc: 'Manuseio ágil, carga, nivelamento e movimentação de terra em espaços reduzidos.',
      icon: 'Truck',
    },
    {
      name: 'Retroescavadeira',
      desc: 'Escavação, valamento, movimentação de cargas e operação com concha dupla.',
      icon: 'Construct',
    },
    {
      name: 'Escavadeira Hidráulica',
      desc: 'Gigante das obras: sistemas hidráulicos avançados, giro de 360°, taludes e escavação pesada.',
      icon: 'HardHat',
    },
  ],
  poaSpecialNote: '📍 Atenção Alunos do RS: Na unidade de Porto Alegre também disponibilizamos o curso especializado de Empilhadeira!',
};

export const LOCATIONS: CityLocation[] = [
  { id: '1', name: 'Itajaí', state: 'Santa Catarina', stateCode: 'SC', nextDate: 'Próxima turma: Este final de semana' },
  { id: '2', name: 'Palhoça', state: 'Santa Catarina', stateCode: 'SC', nextDate: 'Próxima turma: Inscrições abertas' },
  { id: '3', name: 'Balneário Camboriú', state: 'Santa Catarina', stateCode: 'SC', nextDate: 'Próxima turma: Vagas limitadas' },
  { id: '4', name: 'Porto Alegre', state: 'Rio Grande do Sul', stateCode: 'RS', nextDate: 'Próxima turma: Com opção de Empilhadeira', hasSpecialForklift: true },
  { id: '5', name: 'Passo Fundo', state: 'Rio Grande do Sul', stateCode: 'RS', nextDate: 'Próxima turma: Inscrições abertas' },
  { id: '6', name: 'Erechim', state: 'Rio Grande do Sul', stateCode: 'RS', nextDate: 'Próxima turma: Turma confirmada' },
  { id: '7', name: 'Curitiba', state: 'Paraná', stateCode: 'PR', nextDate: 'Próxima turma: Este final de semana' },
  { id: '8', name: 'Londrina', state: 'Paraná', stateCode: 'PR', nextDate: 'Próxima turma: Vagas abertas' },
  { id: '9', name: 'Toledo', state: 'Paraná', stateCode: 'PR', nextDate: 'Próxima turma: Inscrições abertas' },
  { id: '10', name: 'Sorocaba', state: 'São Paulo', stateCode: 'SP', nextDate: 'Próxima turma: Turma confirmada' },
  { id: '11', name: 'Diadema', state: 'São Paulo', stateCode: 'SP', nextDate: 'Próxima turma: Vagas abertas' },
  { id: '12', name: 'Goiânia', state: 'Goiás', stateCode: 'GO', nextDate: 'Próxima turma: Inscrições abertas' },
  { id: '13', name: 'Rio de Janeiro', state: 'Rio de Janeiro', stateCode: 'RJ', nextDate: 'Próxima turma: Vagas limitadas' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Treinamento Prático de Máquinas Pesadas',
    category: 'Treinamento',
    image: 'https://i.ibb.co/h1hg9cjz/Whats-App-Image-2026-08-20-at-13-56-06-1.jpg',
    description: 'Instrução prática individualizada no canteiro de obras com máquinas de grande porte.',
  },
  {
    id: '2',
    title: 'Operação e Manobras em Campo',
    category: 'Treinamento',
    image: 'https://i.ibb.co/gM4YjjBr/Whats-App-Image-2026-08-20-at-13-56-06.jpg',
    description: 'Aulas práticas dinâmicas com acompanhamento direto do instrutor técnico.',
  },
  {
    id: '3',
    title: 'Formação Prática na Cabine de Comando',
    category: 'Treinamento',
    image: 'https://i.ibb.co/jP9bHNbX/Whats-App-Image-2026-08-20-at-13-56-05-1.jpg',
    description: 'Domínio total de joysticks, alavancas, escavação e segurança operacional.',
  },
  {
    id: '4',
    title: 'Turma de Formação de Operadores',
    category: 'Alunos',
    image: 'https://i.ibb.co/F43YZ4hC/Whats-App-Image-2026-08-20-at-13-56-05.jpg',
    description: 'Alunos qualificados prontos para atender as exigências de construtoras e mineradoras.',
  },
  {
    id: '5',
    title: 'Capacitação Técnica de Máquinas Pesadas',
    category: 'Treinamento',
    image: 'https://i.ibb.co/TBTyQ4RH/Whats-App-Image-2026-08-20-at-13-56-04-2.jpg',
    description: 'Exercícios práticos de terraplanagem, nivelamento e movimentação de solo.',
  },
  {
    id: '6',
    title: 'Alunos em Atividade Prática',
    category: 'Alunos',
    image: 'https://i.ibb.co/FbyXFT86/Whats-App-Image-2026-08-20-at-13-56-04-1.jpg',
    description: 'Experiência real com equipamentos modernos e metodologia intensiva de final de semana.',
  },
  {
    id: '7',
    title: 'Instrução e Segurança em Campo',
    category: 'Treinamento',
    image: 'https://i.ibb.co/ksqGvKyR/Whats-App-Image-2026-08-20-at-13-56-04.jpg',
    description: 'Aplicação rigorosa dos procedimentos de segurança e normas técnicas vigentes.',
  },
  {
    id: '8',
    title: 'Treinamento Operacional Intensivo',
    category: 'Treinamento',
    image: 'https://i.ibb.co/QSMD9cR/Whats-App-Image-2026-08-20-at-13-56-03.jpg',
    description: 'Aprendizado focado no manuseio preciso das máquinas no canteiro.',
  },
  {
    id: '9',
    title: 'Prática de Campo Opera Formação',
    category: 'Treinamento',
    image: 'https://i.ibb.co/r2sXzwdj/Whats-App-Image-2026-08-20-at-13-55-28.jpg',
    description: 'Treinamento imersivo proporcionando segurança e autonomia aos novos operadores.',
  },
  {
    id: '10',
    title: 'Formação Técnica Profissional',
    category: 'Treinamento',
    image: 'https://i.ibb.co/7xq52WNQ/Whats-App-Image-2026-08-20-at-13-55-27.jpg',
    description: 'Certificado e carteira de operador credenciada pelo CREA com validade nacional.',
  },
];

export const DIRECTOR_INFO = {
  name: 'Valiandro Bock',
  role: 'Diretor e CEO da Opera Formação',
  photo: 'https://i.ibb.co/0jB2Ycnv/Whats-App-Image-2026-08-20-at-14-00-24.jpg',
  bio: 'A frente da Opera Formação, Valiandro Bock consolidou a escola como referência nacional na capacitação de operadores de máquinas pesadas. Com uma visão voltada para a inclusão profissional, inovação nos métodos de ensino prático e máxima agilidade na emissão de certificados, a liderança de Valiandro impulsiona milhares de alunos a ingressarem com autoridade e rapidez no mercado de trabalho industrial e da construção civil.',
  quote: '"Nossa missão é transformar a vida dos nossos alunos em apenas 3 dias, entregando uma profissão valorizada, um certificado reconhecido e a confiança necessária para operar grandes máquinas."',
  stats: [
    { label: 'Anos de Tradição', value: '+10 Anos' },
    { label: 'Alunos Certificados', value: '+15 Mil' },
    { label: 'Cidades Atendidas', value: '13 Cidades' },
    { label: 'Aprovação de Alunos', value: '99.8%' },
  ],
};

export const REGULATORY_STANDARDS = [
  {
    code: 'NR-06',
    title: 'Equipamentos de Proteção Individual (EPI)',
    description: 'Diretrizes sobre seleção, uso correto, conservação e inspeção de EPIs obrigatórios para operadores em canteiros e frentes de trabalho.',
  },
  {
    code: 'NR-07',
    title: 'Controle Médico e Saúde Ocupacional',
    description: 'Parâmetros de saúde, ergonomia e aptidão física e psicológica para a condução segura de maquinários pesados.',
  },
  {
    code: 'NR-11',
    title: 'Transporte, Movimentação e Manuseio de Materiais',
    description: 'Norma central para operação, içamento, manobra e movimentação segura de cargas, terras e materiais pesados.',
  },
  {
    code: 'NR-12',
    title: 'Segurança no Trabalho em Máquinas e Equipamentos',
    description: 'Procedimentos operacionais, dispositivos de parada, zonas de perigo, proteção de partes móveis e manutenção preventiva.',
  },
  {
    code: 'NR-18',
    title: 'Segurança e Saúde na Indústria da Construção',
    description: 'Regulamentação das condições e do meio ambiente de trabalho específicos para canteiros de obras e terraplanagem.',
  },
  {
    code: 'NR-22',
    title: 'Segurança e Saúde Ocupacional na Mineração',
    description: 'Protocolos de segurança operacional para frentes de lavra, pedreiras e movimentação de minérios.',
  },
  {
    code: 'NR-26',
    title: 'Sinalização de Segurança',
    description: 'Identificação por cores, avisos sonoros, sinalização de isolamento e comunicação visual de tráfego de máquinas.',
  },
  {
    code: 'NR-28',
    title: 'Fiscalização e Penalidades',
    description: 'Conhecimento dos critérios técnicos de conformidade perante os órgãos fiscalizadores do Ministério do Trabalho.',
  },
  {
    code: 'NR-31',
    title: 'Segurança no Trabalho no Agronegócio',
    description: 'Normas de segurança para operação de máquinas em áreas rurais, silvicultura, preparo de solo e colheita.',
  },
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
  badge: 'Compromisso de Excelência',
  headline: 'APRENDEU? ÓTIMO. AINDA PRECISA REFORÇAR? VOLTE.',
  title: 'Garantia de Aprendizado Opera Formação',
  description: 'Na Opera Formação, seu sucesso profissional é prioridade absoluta. O aluno que por qualquer motivo sentir necessidade de reforçar a prática ou fixar melhor o conteúdo pode retornar na próxima turma e refazer o treinamento gratuitamente.',
  keyPoints: [
    'Retorno gratuito na turma subsequente sem taxas extras',
    'Mais horas de cabine e comando individual para fixação total',
    'Acompanhamento direto e personalizado com o instrutor',
    'Segurança e confiança antes de ingressar no mercado de trabalho',
  ],
};

export const CREA_INSTITUTIONAL = {
  title: 'FORMAÇÃO COM CREDIBILIDADE E RECONHECIMENTO',
  subtitle: 'Credenciamento CREA',
  council: 'Conselho Regional de Engenharia e Agronomia',
  description: 'A Opera Formação possui credenciamento junto ao CREA, emitindo certificados e carteiras de operador com total respaldo técnico e validade em todo o território nacional. Essa chancela garante que grandes construtoras, empreiteiras e mineradoras reconheçam de imediato a sua capacitação profissional.',
};

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
    question: 'Quais máquinas estão inclusas no curso?',
    answer: 'No pacote principal estão inclusas a Mini Pá Carregadeira (Bobcat), Retroescavadeira e Escavadeira Hidráulica. Na unidade de Porto Alegre/RS, também há a inclusão especial do curso de Empilhadeira.',
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
