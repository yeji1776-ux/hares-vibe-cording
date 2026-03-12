import { useMemo } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useStudyTracker } from '../hooks/useStudyTracker';

interface Badge {
  id: string;
  emoji: string;
  title: string;
  description: string;
  check: (ctx: BadgeContext) => boolean;
}

interface BadgeContext {
  streak: number;
  totalStudyDays: number;
  curriculumDone: number;
  quizCorrect: number;
  quizAttempts: number;
  projectCount: number;
  bookmarkCount: number;
}

const BADGES: Badge[] = [
  { id: 'first-day', emoji: '🌱', title: '첫 걸음', description: '첫 학습 기록을 남겼어요', check: ctx => ctx.totalStudyDays >= 1 },
  { id: 'streak-3', emoji: '🔥', title: '3일 연속', description: '3일 연속 출석했어요', check: ctx => ctx.streak >= 3 },
  { id: 'streak-7', emoji: '💪', title: '일주일 불꽃', description: '7일 연속 출석했어요', check: ctx => ctx.streak >= 7 },
  { id: 'streak-14', emoji: '⚡', title: '2주 챔피언', description: '14일 연속 출석했어요', check: ctx => ctx.streak >= 14 },
  { id: 'streak-30', emoji: '👑', title: '한 달의 왕', description: '30일 연속 출석했어요', check: ctx => ctx.streak >= 30 },
  { id: 'curr-10', emoji: '📘', title: '커리큘럼 시작', description: '커리큘럼 10일 완료', check: ctx => ctx.curriculumDone >= 10 },
  { id: 'curr-30', emoji: '📗', title: '절반 돌파', description: '커리큘럼 30일 완료', check: ctx => ctx.curriculumDone >= 30 },
  { id: 'curr-60', emoji: '📕', title: '커리큘럼 마스터', description: '커리큘럼 60일 전부 완료!', check: ctx => ctx.curriculumDone >= 60 },
  { id: 'quiz-10', emoji: '🧠', title: '퀴즈 도전자', description: '퀴즈 10문제 풀었어요', check: ctx => ctx.quizAttempts >= 10 },
  { id: 'quiz-50', emoji: '🎓', title: '퀴즈 고수', description: '퀴즈 50문제 풀었어요', check: ctx => ctx.quizAttempts >= 50 },
  { id: 'quiz-perfect', emoji: '💯', title: '만점왕', description: '정답률 90% 이상 (10문제 이상)', check: ctx => ctx.quizAttempts >= 10 && (ctx.quizCorrect / ctx.quizAttempts) >= 0.9 },
  { id: 'project-1', emoji: '🎨', title: '첫 작품', description: '포트폴리오에 첫 프로젝트 추가', check: ctx => ctx.projectCount >= 1 },
  { id: 'project-3', emoji: '🏗️', title: '빌더', description: '프로젝트 3개 완성', check: ctx => ctx.projectCount >= 3 },
  { id: 'project-5', emoji: '🚀', title: '프로 빌더', description: '프로젝트 5개 완성!', check: ctx => ctx.projectCount >= 5 },
  { id: 'bookmark-5', emoji: '💛', title: '수집가', description: '용어 5개 즐겨찾기', check: ctx => ctx.bookmarkCount >= 5 },
  { id: 'bookmark-20', emoji: '📚', title: '용어 마니아', description: '용어 20개 즐겨찾기', check: ctx => ctx.bookmarkCount >= 20 },
];

export default function BadgesPage() {
  const { records } = useStudyTracker();
  const [completedDays] = useLocalStorage<number[]>('cording-completed-days', []);
  const [quizStats] = useLocalStorage<{ totalCorrect: number; totalAttempts: number }>('cording-quiz-stats', { totalCorrect: 0, totalAttempts: 0 });
  const [projects] = useLocalStorage<unknown[]>('cording-projects', []);
  const [bookmarks] = useLocalStorage<string[]>('cording-bookmarks', []);

  const context = useMemo<BadgeContext>(() => {
    // Calculate streak
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      if (records.some(r => r.date === dateStr && r.activities.length > 0)) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }

    return {
      streak,
      totalStudyDays: records.filter(r => r.activities.length > 0).length,
      curriculumDone: completedDays.length,
      quizCorrect: quizStats.totalCorrect,
      quizAttempts: quizStats.totalAttempts,
      projectCount: projects.length,
      bookmarkCount: bookmarks.length,
    };
  }, [records, completedDays, quizStats, projects, bookmarks]);

  const earned = BADGES.filter(b => b.check(context));
  const locked = BADGES.filter(b => !b.check(context));

  return (
    <PageWrapper title="성취 배지" subtitle={`${earned.length}/${BADGES.length}개 획득!`}>
      {/* Progress */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">배지 수집률</span>
          <span className="text-sm text-indigo-600 font-bold">{Math.round((earned.length / BADGES.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(earned.length / BADGES.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Earned Badges */}
      {earned.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">획득한 배지</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
            {earned.map(badge => (
              <div key={badge.id} className="bg-white rounded-2xl p-3 shadow-sm text-center animate-fade-in">
                <span className="text-3xl">{badge.emoji}</span>
                <p className="text-xs font-semibold text-gray-800 mt-1.5">{badge.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked Badges */}
      {locked.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3">도전 중인 배지</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
            {locked.map(badge => (
              <div key={badge.id} className="bg-gray-100 rounded-2xl p-3 text-center opacity-50">
                <span className="text-3xl grayscale">🔒</span>
                <p className="text-xs font-semibold text-gray-500 mt-1.5">{badge.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {earned.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p className="text-4xl mb-2">🏅</p>
          <p className="font-medium">아직 배지가 없어요!</p>
          <p className="text-sm mt-1">공부를 시작하면 배지가 하나씩 채워져요</p>
        </div>
      )}
    </PageWrapper>
  );
}
