import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { WEEK_INFO } from '../../types';
import { useTipProgress } from '../../hooks/useTipProgress';

interface Props {
  week: number;
}

export default function WeekCard({ week }: Props) {
  const navigate = useNavigate();
  const { getWeekProgress, getWeekCompletedCount, getWeekTotalCount } = useTipProgress();
  const info = WEEK_INFO[week];
  const progress = getWeekProgress(week);
  const completed = getWeekCompletedCount(week);
  const total = getWeekTotalCount(week);

  return (
    <button
      onClick={() => navigate(`/week/${week}`)}
      className="dashboard-card w-full text-left p-4 relative overflow-hidden"
    >
      {/* Top color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: info.color }}
      />

      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs font-bold text-[#9CA3AF]">Week {week}</span>
          <h3 className="text-sm font-bold text-[#E5E7EB] mt-0.5">{info.title}</h3>
        </div>
        <ChevronRight size={18} className="text-[#4B5563]" />
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-[#1F1F2E] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            backgroundColor: info.color,
          }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[10px] text-[#9CA3AF]">{info.tipRange}</span>
        <span className="text-[10px] font-bold" style={{ color: info.color }}>
          {completed}/{total}
        </span>
      </div>
    </button>
  );
}
