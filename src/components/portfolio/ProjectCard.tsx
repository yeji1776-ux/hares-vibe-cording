import { ExternalLink, Pencil, Trash2 } from 'lucide-react';
import type { Project } from '../../types';

interface Props {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProjectCard({ project, onEdit, onDelete }: Props) {
  return (
    <div className="bg-[#12121A] rounded-2xl p-4 shadow-sm border border-[#1F1F2E]">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-[#E5E7EB]">{project.title}</h3>
          <span className="text-xs text-[#6B7280]">{project.createdAt}</span>
        </div>
        <div className="flex gap-1">
          <button onClick={onEdit} className="p-1.5 rounded-lg hover:bg-[#1A1A2E]">
            <Pencil size={14} className="text-[#6B7280]" />
          </button>
          <button onClick={onDelete} className="p-1.5 rounded-lg hover:bg-[#EF4444]/10">
            <Trash2 size={14} className="text-[#EF4444]" />
          </button>
        </div>
      </div>

      {project.siteUrl && (
        <a
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-[#F59E0B] hover:underline mb-2"
        >
          <ExternalLink size={12} /> 사이트 보기
        </a>
      )}

      {project.praise && (
        <div className="bg-[#10B981]/10 rounded-lg p-2 mb-2">
          <p className="text-xs text-[#10B981]">👏 {project.praise}</p>
        </div>
      )}

      {project.improvements && (
        <div className="bg-[#F59E0B]/10 rounded-lg p-2">
          <p className="text-xs text-[#F59E0B]">💡 {project.improvements}</p>
        </div>
      )}
    </div>
  );
}
