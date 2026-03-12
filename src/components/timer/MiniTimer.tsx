import { useLocation, useNavigate } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';
import { useTimer } from '../../contexts/TimerContext';

export default function MiniTimer() {
  const { mode, timeLeft, isRunning, toggleTimer } = useTimer();
  const location = useLocation();
  const navigate = useNavigate();

  // 타이머 페이지에서는 미니 타이머 숨김
  if (location.pathname === '/timer') return null;
  // 완전 초기 상태(한번도 시작 안 함)에서만 숨김
  const isInitialState = !isRunning && timeLeft === 25 * 60 && mode === 'focus';
  if (isInitialState) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      onClick={() => navigate('/timer')}
      className="fixed bottom-20 right-3 z-50 flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow"
    >
      <div className={`w-2 h-2 rounded-full ${isRunning ? 'animate-pulse' : ''} ${
        mode === 'focus' ? 'bg-indigo-500' : 'bg-green-500'
      }`} />
      <span className="text-sm font-bold text-gray-800 tabular-nums">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <button
        onClick={(e) => { e.stopPropagation(); toggleTimer(); }}
        className={`w-7 h-7 rounded-full flex items-center justify-center text-white ${
          mode === 'focus' ? 'bg-indigo-500' : 'bg-green-500'
        }`}
      >
        {isRunning ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
      </button>
    </div>
  );
}
