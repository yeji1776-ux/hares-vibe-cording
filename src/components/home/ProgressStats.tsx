import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useStudyTracker } from '../../hooks/useStudyTracker';
import { Flame, Calendar, BookOpen, Trophy } from 'lucide-react';

export default function ProgressStats() {
  const [completedDays] = useLocalStorage<number[]>('cording-completed-days', []);
  const { records } = useStudyTracker();

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

  const getStudyDays = () => {
    return records.filter(r => r.activities.length > 0).length;
  };

  const streak = getStreak();
  const studyDays = getStudyDays();
  const curriculumProgress = Math.round((completedDays.length / 60) * 100);
  const totalTermsViewed = records.reduce((sum, r) => sum + r.activities.length, 0);

  const stats = [
    { icon: Flame, label: '연속 학습', value: `${streak}일`, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
    { icon: Calendar, label: '학습 일수', value: studyDays > 0 ? `${studyDays}일` : '시작 전', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
    { icon: BookOpen, label: '커리큘럼', value: `${curriculumProgress}%`, color: 'text-violet-500', bgColor: 'bg-violet-500/10' },
    { icon: Trophy, label: '활동량', value: `${totalTermsViewed}회`, color: 'text-amber-500', bgColor: 'bg-amber-500/10' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {stats.map(({ icon: Icon, label, value, color, bgColor }) => (
        <div key={label} className="bg-[#12121A] border border-[#1F1F2E] rounded-2xl p-4 flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color} ${bgColor}`}>
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <p className="text-lg font-extrabold text-[#E5E7EB] leading-none">{value}</p>
            <p className="text-[10px] font-bold text-[#6B7280] mt-1 tracking-tight">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
