import PageWrapper from '../components/layout/PageWrapper';
import CalendarGrid from '../components/calendar/CalendarGrid';
import { useStudyTracker } from '../hooks/useStudyTracker';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { BookQuestion } from '../types';

export default function CalendarPage() {
  const { records, hasStudied, getRecord, logActivity } = useStudyTracker();
  const [bookQuestions] = useLocalStorage<BookQuestion[]>('cording-book-questions', []);

  return (
    <PageWrapper title="학습 달력" subtitle="공부한 날이 초록 점으로 표시돼요!">
      <CalendarGrid records={records} hasStudied={hasStudied} getRecord={getRecord} bookQuestions={bookQuestions} />
      <div className="mt-4">
        <button
          onClick={() => logActivity('manual', '직접 기록: 오늘 공부했어요!')}
          className="w-full py-3 gradient-gold-red text-white rounded-xl font-semibold text-sm transition-colors"
        >
          오늘 공부 기록하기 ✏️
        </button>
      </div>
    </PageWrapper>
  );
}
