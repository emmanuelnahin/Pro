
export interface OrgNode {
  id: string;
  name: string;
  title: string;
  department: string;
  parentId: string | null;
  color?: string;
  isCritical?: boolean;
  successionId?: string | null;
  seniority?: number;
  salary?: number;
  gender?: 'Masculino' | 'Femenino' | 'Otro';
  performance?: number; // 0-100%
  potential?: 'Alto' | 'Medio' | 'Bajo';
}

export type ViewMode = 'vertical' | 'horizontal';
