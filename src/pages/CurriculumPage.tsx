import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Clock, Lightbulb, Wrench, Bookmark, BookmarkCheck, StickyNote, ArrowLeft } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { curriculum } from '../data/curriculumData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { BookQuestion } from '../types';

export default function CurriculumPage() {
  const [completedDays, setCompletedDays] = useLocalStorage<number[]>('cording-completed-days', []);
  const [bookmarkedDays, setBookmarkedDays] = useLocalStorage<number[]>('cording-bookmarked-days', []);
  const [dayNotes, setDayNotes] = useLocalStorage<Record<number, string>>('cording-day-notes', {});
  const [bookQuestions] = useLocalStorage<BookQuestion[]>('cording-book-questions', []);
  const [expandedMonth, setExpandedMonth] = useState<number>(1);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);
  const [viewingDay, setViewingDay] = useState<number | null>(null);
  const [noteText, setNoteText] = useState('');

  const toggleDay = (day: number) => {
    setCompletedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const toggleBookmark = (day: number) => {
    setBookmarkedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const saveNote = (day: number) => {
    setDayNotes(prev => ({ ...prev, [day]: noteText }));
  };

  const openDay = (day: number) => {
    setViewingDay(day);
    setNoteText(dayNotes[day] || '');
  };

  const totalDays = 60;
  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);

  // Find the day data
  const findDayData = (dayNum: number) => {
    for (const month of curriculum) {
      for (const week of month.weeks) {
        const found = week.days.find(d => d.day === dayNum);
        if (found) return found;
      }
    }
    return null;
  };

  // Day detail view
  if (viewingDay !== null) {
    const dayData = findDayData(viewingDay);
    if (!dayData) return null;
    const isDone = completedDays.includes(viewingDay);
    const isBookmarked = bookmarkedDays.includes(viewingDay);

    return (
      <PageWrapper title={`${viewingDay}일차`} subtitle={dayData.title}>
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setViewingDay(null)}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft size={16} /> 목록으로
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(viewingDay)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isBookmarked ? (
                <BookmarkCheck size={20} className="text-indigo-600 fill-indigo-600" />
              ) : (
                <Bookmark size={20} className="text-gray-300" />
              )}
            </button>
            <button
              onClick={() => toggleDay(viewingDay)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isDone ? 'bg-green-100 text-green-700' : 'bg-indigo-600 text-white'
                }`}
            >
              {isDone ? '완료됨 ✓' : '완료하기'}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{dayData.emoji}</span>
            <div>
              <h2 className="font-bold text-gray-800">{dayData.title}</h2>
              <p className="text-sm text-gray-500">{dayData.description}</p>
            </div>
          </div>

          {/* Learning content */}
          {'content' in dayData && dayData.content && (
            <div className="prose-sm text-gray-700 leading-relaxed whitespace-pre-wrap text-sm border-t border-gray-100 pt-4">
              {(dayData as any).content.split('\n').map((line: string, i: number) => {
                // Headers
                if (line.startsWith('## ')) return <h3 key={i} className="text-base font-bold text-gray-800 mt-4 mb-2">{line.slice(3)}</h3>;
                if (line.startsWith('### ')) return <h4 key={i} className="text-sm font-bold text-gray-700 mt-3 mb-1">{line.slice(4)}</h4>;
                // Bold lines
                if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold text-gray-800 mt-3 mb-1">{line.slice(2, -2)}</p>;
                // Code blocks
                if (line.startsWith('```')) return null;
                if (line.startsWith('> ')) return <div key={i} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-2 text-sm text-yellow-800 rounded-r-lg">{line.slice(2)}</div>;
                // Empty line
                if (line.trim() === '') return <div key={i} className="h-2" />;
                // Normal text
                return <p key={i} className="my-1">{line}</p>;
              })}
            </div>
          )}
        </div>

        {/* Tasks */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mb-3">
            <Clock size={14} /> 오늘의 할 일
          </h4>
          <div className="space-y-2">
            {dayData.tasks.map((t, i) => {
              const taskObj = typeof t === 'string' ? { task: t, detail: '' } : t;
              return (
                <details key={i} className="group bg-gray-50 rounded-xl overflow-hidden">
                  <summary className="flex items-start gap-2 p-3 cursor-pointer list-none text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                    <span className="flex-1">{taskObj.task}</span>
                    {taskObj.detail && (
                      <span className="text-gray-300 group-open:rotate-180 transition-transform shrink-0 mt-0.5">▼</span>
                    )}
                  </summary>
                  {taskObj.detail && (
                    <div className="px-4 pb-3 pt-0 ml-5 text-xs text-gray-500 leading-relaxed border-t border-gray-100 mt-0 pt-2">
                      {taskObj.detail}
                    </div>
                  )}
                </details>
              );
            })}
          </div>
        </div>

        {/* Tools */}
        {dayData.tools && dayData.tools.length > 0 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mb-3">
              <Wrench size={14} /> 사용 도구
            </h4>
            <div className="flex flex-wrap gap-2">
              {dayData.tools.map(tool => (
                <span key={tool} className="text-xs bg-[#F5F3FF] text-purple-600 px-3 py-1.5 rounded-full font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tip */}
        {dayData.tip && (
          <div className="bg-yellow-50 rounded-2xl p-4 mb-4 flex items-start gap-2">
            <Lightbulb size={16} className="text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700">{dayData.tip}</p>
          </div>
        )}

        {/* My Notes */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mb-3">
            <StickyNote size={14} /> 나의 메모
          </h4>
          <textarea
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            onBlur={() => saveNote(viewingDay)}
            placeholder="오늘 배운 것, 어려웠던 것, 기억할 것을 적어보세요..."
            rows={4}
            className="w-full px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          />
          {dayNotes[viewingDay] && (
            <p className="text-[10px] text-gray-400 mt-1">자동 저장됨</p>
          )}
        </div>

        {/* Book QA photos for today */}
        {(() => {
          const todayStr = new Date().toISOString().split('T')[0];
          const dayPhotos = bookQuestions.filter(q => q.createdAt === todayStr);
          if (dayPhotos.length === 0) return null;
          return (
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mb-3">
                📸 오늘 찍은 책 사진
              </h4>
              <div className="space-y-2">
                {dayPhotos.map(q => (
                  <div key={q.id} className="bg-gray-50 rounded-xl p-2">
                    <img src={q.imageDataUrl} alt="책 사진" className="w-full rounded-lg mb-1" />
                    {q.question && <p className="text-xs text-gray-600">❓ {q.question}</p>}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Navigation */}
        <div className="flex gap-2">
          {viewingDay > 1 && (
            <button
              onClick={() => openDay(viewingDay - 1)}
              className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              ← {viewingDay - 1}일차
            </button>
          )}
          {viewingDay < 60 && (
            <button
              onClick={() => openDay(viewingDay + 1)}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              {viewingDay + 1}일차 →
            </button>
          )}
        </div>
      </PageWrapper>
    );
  }

  // List view (existing)
  return (
    <PageWrapper title="3개월 바이브코딩 커리큘럼" subtitle="매일 한 걸음씩, AI와 함께 코딩 마스터!">
      {/* Progress Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">전체 진행률</span>
          <span className="text-sm text-indigo-600 font-bold">{completedCount}/{totalDays}일 ({progressPercent}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {completedCount === 0 && (
          <p className="text-xs text-gray-400 mt-2 text-center">첫 번째 날을 완료해보세요! 💪</p>
        )}
        {completedCount > 0 && completedCount < totalDays && (
          <p className="text-xs text-gray-400 mt-2 text-center">잘하고 있어요! 계속 화이팅! 🔥</p>
        )}
        {completedCount === totalDays && (
          <p className="text-xs text-green-600 mt-2 text-center font-semibold">축하합니다! 바이브코딩 마스터! 🎉🚀</p>
        )}
      </div>

      {/* Bookmarked days shortcut */}
      {bookmarkedDays.length > 0 && (
        <div className="bg-indigo-50 rounded-2xl p-3 mb-4">
          <h4 className="text-xs font-semibold text-indigo-600 mb-2 flex items-center gap-1">
            <BookmarkCheck size={12} /> 북마크한 날 ({bookmarkedDays.length})
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {bookmarkedDays.sort((a, b) => a - b).map(day => (
              <button
                key={day}
                onClick={() => openDay(day)}
                className="px-2.5 py-1 bg-white text-indigo-600 rounded-lg text-xs font-medium hover:bg-indigo-100 transition-colors"
              >
                {day}일차
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Month Tabs */}
      <div className="flex gap-2 mb-4">
        {curriculum.map(month => {
          const monthDays = month.weeks.flatMap(w => w.days.map(d => d.day));
          const monthCompleted = monthDays.filter(d => completedDays.includes(d)).length;
          return (
            <button
              key={month.month}
              onClick={() => { setExpandedMonth(month.month); setExpandedWeek(null); }}
              className={`flex-1 p-3 rounded-xl text-center transition-all ${expandedMonth === month.month
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              <div className="text-xs font-bold">{month.month}개월차</div>
              <div className="text-[10px] mt-0.5 opacity-75">{monthCompleted}/{monthDays.length}일</div>
            </button>
          );
        })}
      </div>

      {/* Current Month Content */}
      {curriculum.filter(m => m.month === expandedMonth).map(month => (
        <div key={month.month} className="space-y-3">
          <div className={`${month.color} rounded-2xl p-4`}>
            <h2 className="font-bold text-gray-800">{month.title}</h2>
            <p className="text-sm text-gray-600">{month.subtitle}</p>
          </div>

          {month.weeks.map(week => {
            const isExpanded = expandedWeek === week.week;
            const weekCompleted = week.days.filter(d => completedDays.includes(d.day)).length;
            const allDone = weekCompleted === week.days.length;

            return (
              <div key={week.week} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{week.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{week.week}주차: {week.theme}</h3>
                      <span className="text-xs text-gray-400">{weekCompleted}/{week.days.length}일 완료</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {allDone && <span className="text-green-500 text-xs font-semibold">완료!</span>}
                    {isExpanded ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2">
                    {week.days.map(day => {
                      const isDone = completedDays.includes(day.day);
                      const isBookmarked = bookmarkedDays.includes(day.day);
                      const hasNote = !!dayNotes[day.day];

                      return (
                        <button
                          key={day.day}
                          onClick={() => openDay(day.day)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${isDone ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                        >
                          <button
                            onClick={e => { e.stopPropagation(); toggleDay(day.day); }}
                            className="shrink-0"
                          >
                            {isDone ? (
                              <CheckCircle2 size={20} className="text-green-500" />
                            ) : (
                              <Circle size={20} className="text-gray-300" />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{day.emoji}</span>
                              <span className={`text-sm font-medium ${isDone ? 'text-green-700' : 'text-gray-800'}`}>
                                {day.day}일차: {day.title}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-0.5 truncate">{day.description}</p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            {hasNote && <StickyNote size={12} className="text-amber-400" />}
                            {isBookmarked && <BookmarkCheck size={12} className="text-indigo-500" />}
                            <ChevronRight size={14} className="text-gray-300" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </PageWrapper>
  );
}
