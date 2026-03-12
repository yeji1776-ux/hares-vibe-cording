import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../utils/storageKeys';
import type { Project } from '../types';

export function useProjects() {
  const [projects, setProjects] = useLocalStorage<Project[]>(STORAGE_KEYS.PROJECTS, []);

  const addProject = (data: Omit<Project, 'id' | 'createdAt'>) => {
    const project: Project = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProjects(prev => [project, ...prev]);
  };

  const updateProject = (id: string, data: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...data } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return { projects, addProject, updateProject, deleteProject };
}
