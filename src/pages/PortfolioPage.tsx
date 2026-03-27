import { useState } from 'react';
import { Plus } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import ProjectCard from '../components/portfolio/ProjectCard';
import ProjectForm from '../components/portfolio/ProjectForm';
import { useProjects } from '../hooks/useProjects';
import type { Project } from '../types';

export default function PortfolioPage() {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);

  const handleSubmit = (data: { title: string; siteUrl: string; improvements: string; praise: string }) => {
    if (editing) {
      updateProject(editing.id, data);
      setEditing(null);
    } else {
      addProject(data);
    }
    setShowForm(false);
  };

  const handleEdit = (project: Project) => {
    setEditing(project);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('정말 삭제할까요?')) {
      deleteProject(id);
    }
  };

  return (
    <PageWrapper title="내 웹앱 모음" subtitle="만든 작품을 자랑스럽게 정리해요!">
      <button
        onClick={() => { setEditing(null); setShowForm(true); }}
        className="w-full py-3 mb-4 gradient-gold-red text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={18} /> 새 프로젝트 추가
      </button>

      {projects.length === 0 ? (
        <div className="text-center py-16 text-[#9CA3AF]">
          <p className="text-4xl mb-3">🎨</p>
          <p className="font-medium">아직 프로젝트가 없어요!</p>
          <p className="text-sm mt-1">첫 프로젝트를 추가해 보세요 🎉</p>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => handleEdit(project)}
              onDelete={() => handleDelete(project.id)}
            />
          ))}
        </div>
      )}

      {showForm && (
        <ProjectForm
          project={editing}
          onSubmit={handleSubmit}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}
    </PageWrapper>
  );
}
