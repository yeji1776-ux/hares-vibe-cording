import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../../types';

interface Props {
  project?: Project | null;
  onSubmit: (data: { title: string; siteUrl: string; improvements: string; praise: string }) => void;
  onCancel: () => void;
}

export default function ProjectForm({ project, onSubmit, onCancel }: Props) {
  const [title, setTitle] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [improvements, setImprovements] = useState('');
  const [praise, setPraise] = useState('');

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setSiteUrl(project.siteUrl);
      setImprovements(project.improvements);
      setPraise(project.praise);
    }
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), siteUrl: siteUrl.trim(), improvements: improvements.trim(), praise: praise.trim() });
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center" onClick={onCancel}>
      <div
        className="bg-[#12121A] border border-[#1F1F2E] w-full max-w-lg rounded-t-3xl sm:rounded-2xl p-6 max-h-[85vh] overflow-y-auto animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#E5E7EB]">
            {project ? '프로젝트 수정' : '새 프로젝트 추가'}
          </h2>
          <button onClick={onCancel} className="p-1 rounded-full hover:bg-[#1A1A2E]">
            <X size={20} className="text-[#6B7280]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-[#9CA3AF] mb-1">제목 *</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="나의 첫 웹사이트"
              className="w-full px-3 py-2.5 bg-[#0A0A0F] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#9CA3AF] mb-1">사이트 URL</label>
            <input
              type="url"
              value={siteUrl}
              onChange={e => setSiteUrl(e.target.value)}
              placeholder="https://my-site.vercel.app"
              className="w-full px-3 py-2.5 bg-[#0A0A0F] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#9CA3AF] mb-1">칭찬 👏</label>
            <textarea
              value={praise}
              onChange={e => setPraise(e.target.value)}
              placeholder="잘한 점을 적어보세요!"
              rows={2}
              className="w-full px-3 py-2.5 bg-[#0A0A0F] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#9CA3AF] mb-1">개선점 💡</label>
            <textarea
              value={improvements}
              onChange={e => setImprovements(e.target.value)}
              placeholder="다음에 개선할 점을 적어보세요"
              rows={2}
              className="w-full px-3 py-2.5 bg-[#0A0A0F] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {project ? '수정하기' : '추가하기'}
          </button>
        </form>
      </div>
    </div>
  );
}
