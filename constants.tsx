
import { OrgNode } from './types';

export const initialNodes: OrgNode[] = [
  { id: '1', name: 'Dra. Elena Vance', title: 'Presidenta Ejecutiva', department: 'Dirección General', parentId: null, color: '#1e3a8a', salary: 25000, gender: 'Femenino', seniority: 15, isCritical: true, performance: 98, potential: 'Alto' },
  { id: '2', name: 'Ing. Roberto Moss', title: 'VP Operaciones', department: 'Operaciones', parentId: '1', color: '#b45309', salary: 15400, gender: 'Masculino', seniority: 10, isCritical: true, successionId: '5', performance: 85, potential: 'Alto' },
  { id: '3', name: 'Lic. Martha Wayne', title: 'Directora Financiera', department: 'Finanzas', parentId: '1', color: '#15803d', salary: 16200, gender: 'Femenino', seniority: 12, isCritical: true, performance: 90, potential: 'Medio' },
  { id: '4', name: 'Oscar Isaac', title: 'Director Comercial', department: 'Ventas', parentId: '1', color: '#be185d', salary: 14800, gender: 'Masculino', seniority: 8, performance: 70, potential: 'Alto' },
  { id: '5', name: 'Samuel L. Jackson', title: 'Gerente Regional', department: 'Operaciones', parentId: '2', color: '#d97706', salary: 9500, gender: 'Masculino', seniority: 6, performance: 88, potential: 'Alto' },
  { id: '6', name: 'Natasha Romanoff', title: 'Gerente Tesorería', department: 'Finanzas', parentId: '3', color: '#166534', salary: 8900, gender: 'Femenino', seniority: 4, performance: 95, potential: 'Alto' },
  { id: '7', name: 'Wanda Maximoff', title: 'Gerente Marketing', department: 'Ventas', parentId: '4', color: '#9d174d', salary: 8200, gender: 'Femenino', seniority: 3, performance: 82, potential: 'Medio' },
  { id: '8', name: 'Peter Parker', title: 'Analista Sr', department: 'Finanzas', parentId: '6', color: '#166534', salary: 5500, gender: 'Masculino', seniority: 2, performance: 92, potential: 'Alto' },
  { id: '9', name: 'Gwen Stacy', title: 'Especialista Ventas', department: 'Ventas', parentId: '7', color: '#9d174d', salary: 4800, gender: 'Femenino', seniority: 1, performance: 85, potential: 'Alto' }
];

export const DEPARTMENTS = ['Dirección General', 'Finanzas', 'Operaciones', 'Ventas', 'Recursos Humanos', 'Tecnología', 'Marketing'];
export const TITLES = ['Presidenta Ejecutiva', 'CEO', 'Director', 'VP', 'Gerente', 'Supervisor', 'Analista Sr', 'Analista Jr', 'Especialista'];
