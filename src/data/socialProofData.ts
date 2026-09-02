import { CITIES_LIST } from './content';

export interface EnrollmentNotification {
  id: string;
  name: string;
  city: string;
}

export const SOCIAL_PROOF_CONFIG = {
  enabled: true,
  initialDelayMs: 3000,     // Delay before first notification (3s)
  displayDurationMs: 3000,  // How long each notification stays visible (3s)
  intervalDelayMs: 10000,   // Interval between notifications (10s)
};

/**
 * Lista dos 26 nomes de cidades cadastradas oficialmente no site da Opera Formação.
 */
export const OFFICIAL_CITIES = CITIES_LIST.map((c) => c.name);

/**
 * 42 registros com nomes brasileiros variados, gerados e distribuídos
 * EXCLUSIVAMENTE entre as 26 cidades já cadastradas no site da Opera Formação.
 */
export const ENROLLMENT_NOTIFICATIONS: EnrollmentNotification[] = [
  // 1 por cidade para as 26 cidades oficiais do site
  { id: '1', name: 'João Silva', city: 'Curitiba' },
  { id: '2', name: 'Carlos Oliveira', city: 'Itajaí' },
  { id: '3', name: 'Mariana Souza', city: 'Joinville' },
  { id: '4', name: 'Lucas Martins', city: 'Balneário Camboriú' },
  { id: '5', name: 'Rafael Santos', city: 'Sorocaba' },
  { id: '6', name: 'Diego Fernandes', city: 'Chapecó' },
  { id: '7', name: 'Rodrigo Almeida', city: 'Porto Alegre' },
  { id: '8', name: 'Felipe Costa', city: 'Belo Horizonte' },
  { id: '9', name: 'Bruno Barbosa', city: 'São Paulo' },
  { id: '10', name: 'Gustavo Ribeiro', city: 'Goiânia' },
  { id: '11', name: 'Matheus Carvalho', city: 'Londrina' },
  { id: '12', name: 'Eduardo Pereira', city: 'Vitória' },
  { id: '13', name: 'Gabriel Nascimento', city: 'Palhoça' },
  { id: '14', name: 'Marcos Vinícius', city: 'Duque de Caxias' },
  { id: '15', name: 'Leandro Rocha', city: 'Uberlândia' },
  { id: '16', name: 'Fernando Lima', city: 'Pelotas' },
  { id: '17', name: 'André Moreira', city: 'Diadema' },
  { id: '18', name: 'Thiago Mendes', city: 'Toledo' },
  { id: '19', name: 'Vinícius Ramos', city: 'Praia Grande' },
  { id: '20', name: 'Alexandre Castro', city: 'Rio de Janeiro' },
  { id: '21', name: 'Guilherme Duarte', city: 'Linhares' },
  { id: '22', name: 'Marcelo Farias', city: 'Volta Redonda' },
  { id: '23', name: 'Ricardo Nogueira', city: 'Ipatinga' },
  { id: '24', name: 'Vitor Hugo', city: 'Serra' },
  { id: '25', name: 'Henrique Cardoso', city: 'Erechim' },
  { id: '26', name: 'Douglas Silveira', city: 'Santa Rosa' },
  { id: '27', name: 'Danilo Azevedo', city: 'Itaperiú' },

  // Matrículas adicionais distribuídas entre os maiores polos oficiais
  { id: '28', name: 'Lucas Gabriel', city: 'Curitiba' },
  { id: '29', name: 'Julio Cesar', city: 'Itajaí' },
  { id: '30', name: 'Samuel Freitas', city: 'Balneário Camboriú' },
  { id: '31', name: 'Caio Henrique', city: 'São Paulo' },
  { id: '32', name: 'Renato Guimarães', city: 'Sorocaba' },
  { id: '33', name: 'Paulo Roberto', city: 'Belo Horizonte' },
  { id: '34', name: 'Wellington Silva', city: 'Goiânia' },
  { id: '35', name: 'Robson Toledo', city: 'Londrina' },
  { id: '36', name: 'Alan Rodrigues', city: 'Porto Alegre' },
  { id: '37', name: 'Cleber Machado', city: 'Chapecó' },
  { id: '38', name: 'Anderson Vieira', city: 'Rio de Janeiro' },
  { id: '39', name: 'Cristiano Borges', city: 'Vitória' },
  { id: '40', name: 'Fábio Antunes', city: 'Palhoça' },
  { id: '41', name: 'Edson Martins', city: 'Uberlândia' },
  { id: '42', name: 'Mauro Sérgio', city: 'Duque de Caxias' },
];

