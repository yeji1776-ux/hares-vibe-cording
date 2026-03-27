import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, FolderOpen, NotebookPen, Timer } from 'lucide-react';

const tools = [
  { to: '/lectures', icon: BookOpen, label: '교안자료', color: '#8B5CF6' },
  { to: '/calendar', icon: Calendar, label: '학습달력', color: '#10B981' },
  { to: '/portfolio', icon: FolderOpen, label: '웹앱모음', color: '#3B82F6' },
  { to: '/memo', icon: NotebookPen, label: '메모장', color: '#EC4899' },
  { to: '/timer', icon: Timer, label: '타이머', color: '#F59E0B' },
];

export default function ToolsRow() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
      {tools.map(({ to, icon: Icon, label, color }) => (
        <button
          key={to}
          onClick={() => navigate(to)}
          className="flex flex-col items-center gap-1.5 min-w-[64px] py-3 px-2 rounded-2xl bg-[#12121A] border border-[#1F1F2E] hover:border-[#F59E0B]/30 transition-all"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon size={18} style={{ color }} />
          </div>
          <span className="text-[10px] font-bold text-[#9CA3AF] whitespace-nowrap">{label}</span>
        </button>
      ))}
    </div>
  );
}
