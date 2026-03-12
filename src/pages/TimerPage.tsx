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
            <circle cx="112" cy="112" r="100" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <circle
              cx="112" cy="112" r="100" fill="none"
              stroke={mode === 'focus' ? '#6366f1' : '#22c55e'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 100}`}
              strokeDashoffset={`${2 * Math.PI * 100 * (1 - progress / 100)}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-sm font-semibold mb-1 ${mode === 'focus' ? 'text-indigo-500' : 'text-green-500'}`}>
              {mode === 'focus' ? '집중 시간' : '휴식 시간'}
            </span>
            <span className="text-5xl font-bold text-gray-800 tabular-nums">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={resetTimer}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <RotateCcw size={20} className="text-gray-500" />
          </button>
          <button
            onClick={toggleTimer}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${
              mode === 'focus'
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isRunning ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
          </button>
          <button
            onClick={switchToBreak}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Coffee size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Today's stats */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">오늘의 집중 기록</h3>
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-2xl font-bold text-indigo-600">{todayMinutes}</p>
            <p className="text-xs text-gray-400">집중 시간(분)</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center flex-1">
            <p className="text-2xl font-bold text-green-500">{Math.floor(todayMinutes / 25)}</p>
            <p className="text-xs text-gray-400">완료 세션</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center flex-1">
            <p className="text-2xl font-bold text-orange-500">{todayMinutes >= 100 ? '\uD83D\uDD25' : todayMinutes >= 50 ? '\uD83D\uDCAA' : '\uD83C\uDF31'}</p>
            <p className="text-xs text-gray-400">{todayMinutes >= 100 ? '대단해요!' : todayMinutes >= 50 ? '좋아요!' : '화이팅!'}</p>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-4 bg-indigo-50 rounded-2xl p-4">
        <p className="text-xs text-indigo-600 font-semibold mb-1">뽀모도로 팁</p>
        <p className="text-xs text-indigo-500">25분 동안은 다른 앱을 보지 않기! 끝나면 5분 스트레칭하세요</p>
      </div>
    </PageWrapper>
  );
}
