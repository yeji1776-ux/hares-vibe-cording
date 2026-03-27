import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import { CATEGORY_COLORS } from '../../types';
import type { ClaudeTip } from '../../types';
import { useTipProgress } from '../../hooks/useTipProgress';

interface Props {
  tip: ClaudeTip;
}

export default function TipCard({ tip }: Props) {
  const navigate = useNavigate();
  const { isComplete } = useTipProgress();
  const completed = isComplete(tip.id);
  const color = CATEGORY_COLORS[tip.category];

  return (
    <button
      onClick={() => navigate(`/tip/${tip.id}`)}
      className={`dashboard-card w-full text-left p-4 flex items-center gap-3 ${
        completed ? 'border-[#10B981]/30' : ''
      }`}
    >
      {/* Completion indicator */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          completed
            ? 'bg-[#10B981]/20'
            : 'bg-[#1F1F2E]'
        }`}
      >
        {completed ? (
          <Check size={16} className="text-[#10B981]" />
        ) : (
          <span className="text-xs font-bold text-[#4B5563]">{tip.id}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
          <span className="text-[10px] font-bold" style={{ color }}>{tip.category}</span>
        </div>
        <h3 className={`text-sm font-bold truncate ${completed ? 'text-[#9CA3AF]' : 'text-[#E5E7EB]'}`}>
          {tip.title}
        </h3>
        <p className="text-xs text-[#6B7280] truncate mt-0.5">{tip.desc}</p>
      </div>

      <ChevronRight size={16} className="text-[#4B5563] flex-shrink-0" />
    </button>
  );
}
