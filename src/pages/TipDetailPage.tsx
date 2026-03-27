import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Check, RotateCcw } from 'lucide-react';
import { tipsData } from '../data/tipsData';
import { CATEGORY_COLORS } from '../types';
import { useTipProgress } from '../hooks/useTipProgress';
import QuizSection from '../components/learning/QuizSection';

export default function TipDetailPage() {
  const { tipId } = useParams<{ tipId: string }>();
  const navigate = useNavigate();
  const id = Number(tipId);
  const tip = tipsData.find((t) => t.id === id);
  const { isComplete, markComplete } = useTipProgress();

  if (!tip) {
    return (
      <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-8 pb-24 text-center">
        <p className="text-[#9CA3AF]">존재하지 않는 팁입니다.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-[#F59E0B] text-sm font-bold">홈으로</button>
      </div>
    );
  }

  const completed = isComplete(tip.id);
  const color = CATEGORY_COLORS[tip.category];
  const prevTip = tipsData.find((t) => t.id === id - 1);
  const nextTip = tipsData.find((t) => t.id === id + 1);

  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-4 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(`/week/${tip.week}`)}
          className="w-9 h-9 rounded-xl bg-[#12121A] border border-[#1F1F2E] flex items-center justify-center hover:bg-[#1A1A2E] transition-colors"
        >
          <ArrowLeft size={18} className="text-[#9CA3AF]" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}20`, color }}>
              {tip.category}
            </span>
            <span className="text-[10px] text-[#6B7280]">Week {tip.week} | Tip #{tip.id}</span>
          </div>
          <h1 className="text-lg font-bold text-[#E5E7EB] mt-1 truncate">{tip.title}</h1>
        </div>
      </div>

      {/* 쉬운 설명 */}
      <div className="dashboard-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">📖</span>
          <h3 className="text-sm font-bold text-[#E5E7EB]">쉬운 설명</h3>
        </div>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{tip.lesson}</p>
      </div>

      {/* 나쁜 예시 */}
      <div className="dashboard-card p-4 mb-4 border-[#EF4444]/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">❌</span>
          <h3 className="text-sm font-bold text-[#EF4444]">나쁜 예시</h3>
        </div>
        <div className="bg-[#EF4444]/5 rounded-xl p-3">
          <p className="text-sm text-[#F87171] leading-relaxed font-mono">{tip.bad}</p>
        </div>
      </div>

      {/* 좋은 예시 */}
      <div className="dashboard-card p-4 mb-4 border-[#10B981]/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">✅</span>
          <h3 className="text-sm font-bold text-[#10B981]">좋은 예시</h3>
        </div>
        <div className="bg-[#10B981]/5 rounded-xl p-3">
          <p className="text-sm text-[#34D399] leading-relaxed font-mono">{tip.good}</p>
        </div>
      </div>

      {/* 실습 과제 */}
      <div className="dashboard-card p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">🎯</span>
          <h3 className="text-sm font-bold text-[#F59E0B]">실습 과제</h3>
        </div>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{tip.practice}</p>
      </div>

      {/* 퀴즈 */}
      {tip.quiz && <div className="mb-4"><QuizSection quiz={tip.quiz} /></div>}

      {/* 학습 완료 버튼 */}
      <button
        onClick={() => markComplete(tip.id)}
        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all mb-6 ${
          completed
            ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
            : 'gradient-gold-red text-white hover:opacity-90 active:scale-[0.98]'
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          {completed ? (
            <>
              <Check size={18} />
              학습 완료! (다시 누르면 취소)
            </>
          ) : (
            <>
              <RotateCcw size={18} />
              학습 완료하기
            </>
          )}
        </span>
      </button>

      {/* 이전/다음 네비게이션 */}
      <div className="flex gap-3">
        {prevTip ? (
          <button
            onClick={() => navigate(`/tip/${prevTip.id}`)}
            className="flex-1 dashboard-card p-3 flex items-center gap-2 hover:border-[#F59E0B]/30 transition-colors"
          >
            <ChevronLeft size={16} className="text-[#9CA3AF]" />
            <div className="text-left min-w-0">
              <span className="text-[10px] text-[#6B7280]">이전 팁</span>
              <p className="text-xs font-bold text-[#E5E7EB] truncate">{prevTip.title}</p>
            </div>
          </button>
        ) : <div className="flex-1" />}
        {nextTip ? (
          <button
            onClick={() => navigate(`/tip/${nextTip.id}`)}
            className="flex-1 dashboard-card p-3 flex items-center gap-2 justify-end hover:border-[#F59E0B]/30 transition-colors"
          >
            <div className="text-right min-w-0">
              <span className="text-[10px] text-[#6B7280]">다음 팁</span>
              <p className="text-xs font-bold text-[#E5E7EB] truncate">{nextTip.title}</p>
            </div>
            <ChevronRight size={16} className="text-[#9CA3AF]" />
          </button>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
