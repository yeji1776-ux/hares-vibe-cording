import { Play, Pause, RotateCcw, Coffee } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTimer, FOCUS_TIME, BREAK_TIME } from '../contexts/TimerContext';

export default function TimerPage() {
  const { mode, timeLeft, isRunning, todayMinutes, toggleTimer, resetTimer, switchToBreak } = useTimer();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const totalTime = mode === 'focus' ? FOCUS_TIME : BREAK_TIME;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <PageWrapper title="학습 타이머" subtitle="25분 집중 → 5분 휴식 뽀모도로!">
      {/* Timer Circle */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-56 h-56 mb-6">
          <svg className="w-full h-full -rotate-90">
            <circle cx="112" cy="112" r="100" fill="none" stroke="#1F1F2E" strokeWidth="8" />
            <circle
              cx="112" cy="112" r="100" fill="none"
              stroke={mode === 'focus' ? '#F59E0B' : '#10B981'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 100}`}
              strokeDashoffset={`${2 * Math.PI * 100 * (1 - progress / 100)}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-sm font-semibold mb-1 ${mode === 'focus' ? 'text-[#F59E0B]' : 'text-green-500'}`}>
              {mode === 'focus' ? '집중 시간' : '휴식 시간'}
            </span>
            <span className="text-5xl font-bold text-[#E5E7EB] tabular-nums">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={resetTimer}
            className="w-12 h-12 rounded-full bg-[#1A1A2E] flex items-center justify-center hover:bg-[#1F1F2E] transition-colors"
          >
            <RotateCcw size={20} className="text-[#6B7280]" />
          </button>
          <button
            onClick={toggleTimer}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${
              mode === 'focus'
                ? 'bg-[#F59E0B] hover:bg-[#D97706]'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isRunning ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
          </button>
          <button
            onClick={switchToBreak}
            className="w-12 h-12 rounded-full bg-[#1A1A2E] flex items-center justify-center hover:bg-[#1F1F2E] transition-colors"
          >
            <Coffee size={20} className="text-[#6B7280]" />
          </button>
        </div>
      </div>

      {/* Today's stats */}
      <div className="bg-[#12121A] rounded-2xl p-4">
        <h3 className="font-semibold text-[#E5E7EB] mb-3">오늘의 집중 기록</h3>
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-2xl font-bold text-[#F59E0B]">{todayMinutes}</p>
            <p className="text-xs text-[#9CA3AF]">집중 시간(분)</p>
          </div>
          <div className="w-px h-10 bg-[#1F1F2E]" />
          <div className="text-center flex-1">
            <p className="text-2xl font-bold text-green-500">{Math.floor(todayMinutes / 25)}</p>
            <p className="text-xs text-[#9CA3AF]">완료 세션</p>
          </div>
          <div className="w-px h-10 bg-[#1F1F2E]" />
          <div className="text-center flex-1">
            <p className="text-2xl font-bold text-orange-500">{todayMinutes >= 100 ? '🔥' : todayMinutes >= 50 ? '💪' : '🌱'}</p>
            <p className="text-xs text-[#9CA3AF]">{todayMinutes >= 100 ? '대단해요!' : todayMinutes >= 50 ? '좋아요!' : '화이팅!'}</p>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-4 bg-[#F59E0B]/10 rounded-2xl p-4">
        <p className="text-xs text-[#F59E0B] font-semibold mb-1">뽀모도로 팁</p>
        <p className="text-xs text-[#F59E0B]">25분 동안은 다른 앱을 보지 않기! 끝나면 5분 스트레칭하세요</p>
      </div>
    </PageWrapper>
  );
}
