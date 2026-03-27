import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { WEEK_INFO } from '../types';
import { getWeekTips } from '../data/tipsData';
import { useTipProgress } from '../hooks/useTipProgress';
import TipCard from '../components/learning/TipCard';

export default function WeekPage() {
  const { weekId } = useParams<{ weekId: string }>();
  const navigate = useNavigate();
  const week = Number(weekId);
  const info = WEEK_INFO[week];
  const tips = getWeekTips(week);
  const { getWeekProgress, getWeekCompletedCount, getWeekTotalCount } = useTipProgress();
  const progress = getWeekProgress(week);
  const completed = getWeekCompletedCount(week);
  const total = getWeekTotalCount(week);

  if (!info) {
    return (
      <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-8 pb-24 text-center">
        <p className="text-[#9CA3AF]">존재하지 않는 주차입니다.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-[#F59E0B] text-sm font-bold">홈으로</button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-4 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-9 h-9 rounded-xl bg-[#12121A] border border-[#1F1F2E] flex items-center justify-center hover:bg-[#1A1A2E] transition-colors"
        >
          <ArrowLeft size={18} className="text-[#9CA3AF]" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${info.color}20`, color: info.color }}>
              Week {week}
            </span>
          </div>
          <h1 className="text-lg font-bold text-[#E5E7EB] mt-1">{info.title}</h1>
        </div>
      </div>

      {/* Progress */}
      <div className="dashboard-card p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#9CA3AF]">진행률</span>
          <span className="text-xs font-bold" style={{ color: info.color }}>{completed}/{total} 완료</span>
        </div>
        <div className="w-full h-2 bg-[#1F1F2E] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: info.color }}
          />
        </div>
      </div>

      {/* Tip list */}
      <div className="space-y-3">
        {tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
}
