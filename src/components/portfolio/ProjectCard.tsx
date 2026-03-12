import { ExternalLink, Pencil, Trash2 } from 'lucide-react';
import type { Project } from '../../types';

interface Props {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProjectCard({ project, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{project.title}</h3>
          <span className="text-xs text-gray-400">{project.createdAt}</span>
        </div>
        <div className="flex gap-1">
          <button onClick={onEdit} className="p-1.5 rounded-lg hover:bg-gray-100">
            <Pencil size={14} className="text-gray-400" />
          </button>
          <button onClick={onDelete} className="p-1.5 rounded-lg hover:bg-red-50">
            <Trash2 size={14} className="text-red-400" />
          </button>
        </div>
      </div>

      {project.siteUrl && (
        <a
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline mb-2"
        >
          <ExternalLink size={12} /> 사이트 보기
        </a>
      )}

      {project.praise && (
        <div className="bg-green-50 rounded-lg p-2 mb-2">
          <p className="text-xs text-green-700">👏 {project.praise}</p>
        </div>
      )}

      {project.improvements && (
        <div className="bg-yellow-50 rounded-lg p-2">
          <p className="text-xs text-yellow-700">💡 {project.improvements}</p>
        </div>
      )}
    </div>
  );
}
