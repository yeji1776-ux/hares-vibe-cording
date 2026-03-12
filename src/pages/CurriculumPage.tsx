import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Clock, Lightbulb, Wrench } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { curriculum } from '../data/curriculumData';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function CurriculumPage() {
  const [completedDays, setCompletedDays] = useLocalStorage<number[]>('cording-completed-days', []);
  const [expandedMonth, setExpandedMonth] = useState<number>(1);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    setCompletedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const totalDays = 60;
  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);

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

      {/* Month Tabs */}
      <div className="flex gap-2 mb-4">
        {curriculum.map(month => {
          const monthDays = month.weeks.flatMap(w => w.days.map(d => d.day));
          const monthCompleted = monthDays.filter(d => completedDays.includes(d)).length;
          return (
            <button
              key={month.month}
              onClick={() => { setExpandedMonth(month.month); setExpandedWeek(null); setSelectedDay(null); }}
              className={`flex-1 p-3 rounded-xl text-center transition-all ${
                expandedMonth === month.month
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
                      <h3 className="font-semibold text-gray-800 text-sm">Week {week.week}: {week.theme}</h3>
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
                      const isSelected = selectedDay === day.day;

                      return (
                        <div key={day.day}>
                          <button
                            onClick={() => setSelectedDay(isSelected ? null : day.day)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                              isSelected ? 'bg-indigo-50' : isDone ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
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
                                <span className={`text-sm font-medium ${isDone ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                                  Day {day.day}: {day.title}
                                </span>
                              </div>
                              <p className="text-xs text-gray-400 mt-0.5 truncate">{day.description}</p>
                            </div>
                          </button>

                          {isSelected && (
                            <div className="ml-8 mt-2 p-3 bg-white border border-indigo-100 rounded-xl animate-fade-in space-y-3">
                              <div>
                                <h4 className="text-xs font-semibold text-gray-500 flex items-center gap-1 mb-1.5">
                                  <Clock size={12} /> 오늘의 할 일
                                </h4>
                                <ul className="space-y-1.5">
                                  {day.tasks.map((task, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                      <span className="text-indigo-400 mt-0.5">•</span>
                                      {task}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {day.tools && day.tools.length > 0 && (
                                <div>
                                  <h4 className="text-xs font-semibold text-gray-500 flex items-center gap-1 mb-1.5">
                                    <Wrench size={12} /> 사용 도구
                                  </h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {day.tools.map(tool => (
                                      <span key={tool} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {day.tip && (
                                <div className="bg-yellow-50 rounded-lg p-2.5 flex items-start gap-2">
                                  <Lightbulb size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                  <p className="text-xs text-yellow-700">{day.tip}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
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
