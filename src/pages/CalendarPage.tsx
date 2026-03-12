import PageWrapper from '../components/layout/PageWrapper';
import CalendarGrid from '../components/calendar/CalendarGrid';
import { useStudyTracker } from '../hooks/useStudyTracker';

export default function CalendarPage() {
  const { records, hasStudied, getRecord, logActivity } = useStudyTracker();

  return (
    <PageWrapper title="학습 달력" subtitle="공부한 날이 초록 점으로 표시돼요!">
      <CalendarGrid records={records} hasStudied={hasStudied} getRecord={getRecord} />
      <div className="mt-4">
        <button
          onClick={() => logActivity('manual', '직접 기록: 오늘 공부했어요!')}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
        >
          오늘 공부 기록하기 ✏️
        </button>
      </div>
    </PageWrapper>
  );
}
