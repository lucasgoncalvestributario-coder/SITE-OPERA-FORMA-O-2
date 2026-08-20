export interface CourseItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  image: string;
  specs: string[];
  machinesIncluded: string[];
  specialNote?: string;
  highlightBadge?: string;
}

export interface CityLocation {
  id: string;
  name: string;
  state: string;
  stateCode: 'SP' | 'GO' | 'SC' | 'PR' | 'RS' | 'RJ';
  addressPlaceholder?: string;
  nextDate: string;
  hasSpecialForklift?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Treinamento' | 'Máquinas' | 'Alunos' | 'Estrutura';
  image: string;
  description: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}
