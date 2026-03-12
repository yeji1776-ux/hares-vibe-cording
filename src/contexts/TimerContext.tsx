import { createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { useStudyTracker } from '../hooks/useStudyTracker';
import { useLocalStorage } from '../hooks/useLocalStorage';

type TimerMode = 'focus' | 'break';

interface TimerState {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  todayMinutes: number;
  toggleTimer: () => void;
  resetTimer: () => void;
  switchToBreak: () => void;
}

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

const TimerContext = createContext<TimerState | null>(null);

export function TimerProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [todayMinutes, setTodayMinutes] = useLocalStorage<number>('cording-timer-today', 0);
  const [todayDate, setTodayDate] = useLocalStorage<string>('cording-timer-date', '');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { logActivity } = useStudyTracker();

  const today = new Date().toISOString().split('T')[0];
  useEffect(() => {
    if (todayDate !== today) {
      setTodayMinutes(0);
      setTodayDate(today);
    }
  }, [today, todayDate, setTodayMinutes, setTodayDate]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const handleComplete = useCallback(() => {
    stopTimer();
    if (mode === 'focus') {
      setTodayMinutes(prev => prev + 25);
      logActivity('timer', '뽀모도로 25분 집중 완료!');
      setMode('break');
      setTimeLeft(BREAK_TIME);
    } else {
      setMode('focus');
      setTimeLeft(FOCUS_TIME);
    }
  }, [mode, stopTimer, logActivity, setTodayMinutes]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, handleComplete]);

  const toggleTimer = () => setIsRunning(prev => !prev);

  const resetTimer = () => {
    stopTimer();
    setMode('focus');
    setTimeLeft(FOCUS_TIME);
  };

  const switchToBreak = () => {
    stopTimer();
    setMode('break');
    setTimeLeft(BREAK_TIME);
  };

  return (
    <TimerContext.Provider value={{ mode, timeLeft, isRunning, todayMinutes, toggleTimer, resetTimer, switchToBreak }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error('useTimer must be used within TimerProvider');
  return ctx;
}

export { FOCUS_TIME, BREAK_TIME };
