import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useStudyTracker } from '../../hooks/useStudyTracker';
import { Flame, Calendar, BookOpen, Trophy } from 'lucide-react';

export default function ProgressStats() {
  const [completedDays] = useLocalStorage<number[]>('cording-completed-days', []);
  const { records } = useStudyTracker();

  // Calculate streak
  const getStreak = () => {
    const today = new Date();
    let streak = 0;
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
    return streak;
  };

  // Calculate D-Day from first study record
  const getDDay = () => {
    if (records.length === 0) return 0;
    const sorted = [...records].sort((a, b) => a.date.localeCompare(b.date));
    const first = new Date(sorted[0].date);
    const today = new Date();
    return Math.floor((today.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  };

  const streak = getStreak();
  const dDay = getDDay();
  const curriculumProgress = Math.round((completedDays.length / 60) * 100);
  const totalTermsViewed = records.reduce((sum, r) => sum + r.activities.length, 0);

  const stats = [
    { icon: Flame, label: '연속 출석', value: `${streak}일`, color: 'text-orange-500 bg-orange-50' },
    { icon: Calendar, label: '학습 D+', value: dDay > 0 ? `${dDay}일` : '시작전', color: 'text-blue-500 bg-blue-50' },
    { icon: BookOpen, label: '커리큘럼', value: `${curriculumProgress}%`, color: 'text-indigo-500 bg-indigo-50' },
    { icon: Trophy, label: '총 활동', value: `${totalTermsViewed}회`, color: 'text-yellow-500 bg-yellow-50' },
  ];

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="flex items-center gap-1.5 bg-white rounded-lg px-2.5 py-1.5 shadow-sm flex-shrink-0">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${color}`}>
            <Icon size={12} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800 leading-tight">{value}</p>
            <p className="text-[9px] text-gray-400 leading-tight">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
