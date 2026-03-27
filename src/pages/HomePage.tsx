import { useState, useRef } from 'react';
import { CheckCircle2, Camera, Target, Pencil } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useStudyTracker } from '../hooks/useStudyTracker';
import { useTipProgress } from '../hooks/useTipProgress';
import CircularProgress from '../components/learning/CircularProgress';
import WeekCard from '../components/learning/WeekCard';
import CategoryProgressChart from '../components/learning/CategoryProgressChart';
import ToolsRow from '../components/learning/ToolsRow';

export default function HomePage() {
  const { logActivity, hasStudied } = useStudyTracker();
  const { user, updateProfile } = useUser();
  const { completedCount } = useTipProgress();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalDraft, setGoalDraft] = useState(user?.goal || '');
  const today = new Date().toISOString().split('T')[0];
  const checkedIn = hasStudied(today) && (() => {
    const rec = JSON.parse(localStorage.getItem('cording-study-records') || '[]');
    return rec.some((r: any) => r.date === today && r.activities.some((a: any) => a.type === 'attendance'));
  })();
  const [justChecked, setJustChecked] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 200;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d')!;
        const min = Math.min(img.width, img.height);
        const sx = (img.width - min) / 2;
        const sy = (img.height - min) / 2;
        ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
        updateProfile({ avatar: canvas.toDataURL('image/jpeg', 0.8) });
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  const saveGoal = () => {
    updateProfile({ goal: goalDraft.trim() });
    setEditingGoal(false);
  };

  const handleCheckIn = () => {
    if (checkedIn || justChecked) return;
    logActivity('attendance', '출석 체크 완료!');
    setJustChecked(true);
  };

  const isChecked = checkedIn || justChecked;

  const greetings = [
    `${user?.nickname}님, 오늘도 한 걸음 성장해봐요!`,
    `${user?.nickname}님, 꾸준히 하면 반드시 돼요!`,
    `${user?.nickname}님, 코딩 실력이 쑥쑥 자라는 중!`,
    `${user?.nickname}님, 오늘 배운 건 내일의 무기!`,
    `${user?.nickname}님, 작은 진전도 큰 변화의 시작!`,
    `${user?.nickname}님, 포기하지 않는 게 제일 중요해요!`,
    `${user?.nickname}님, 어제보다 나은 오늘을 만들어봐요!`,
    `${user?.nickname}님, 천리길도 한 줄 코드부터!`,
    `${user?.nickname}님, 오늘의 노력이 미래를 바꿔요!`,
    `${user?.nickname}님, 실수해도 괜찮아요, 그게 배움!`,
    `${user?.nickname}님, 하루 10분이면 충분해요!`,
    `${user?.nickname}님, 클로드 마스터가 되는 그날까지!`,
  ];
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const greeting = greetings[dayOfYear % greetings.length];

  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-6 pb-24">
      {/* 프로필 + 출석 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-11 h-11 rounded-full bg-[#1A1A2E] border-2 border-[#F59E0B]/30 flex items-center justify-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt="프로필" className="w-full h-full object-cover" />
              ) : (
                <span className="text-base font-black text-[#F59E0B]">{user?.nickname[0]}</span>
              )}
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#12121A] border border-[#1F1F2E] rounded-full flex items-center justify-center"
            >
              <Camera size={8} className="text-[#9CA3AF]" />
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
          </div>
          <div>
            <h1 className="text-base font-black text-[#E5E7EB]">{user?.nickname}</h1>
            <p className="text-[11px] text-[#6B7280]">{greeting}</p>
          </div>
        </div>
        <button
          onClick={handleCheckIn}
          disabled={isChecked}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all ${
            isChecked
              ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
              : 'gradient-gold-red text-white hover:opacity-90 active:scale-95'
          }`}
        >
          {isChecked ? <CheckCircle2 size={14} /> : <span>🙌</span>}
          {isChecked ? '출석 완료' : '출석 체크'}
        </button>
      </div>

      {/* 목표 */}
      <div className="dashboard-card p-3 mb-6 flex items-center gap-2">
        <Target size={14} className="text-[#F59E0B] flex-shrink-0" />
        {editingGoal ? (
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              value={goalDraft}
              onChange={(e) => setGoalDraft(e.target.value)}
              placeholder="나의 목표를 입력해요"
              maxLength={30}
              autoFocus
              className="flex-1 px-2 py-1 rounded-lg bg-[#0A0A0F] border border-[#1F1F2E] text-xs text-[#E5E7EB] focus:outline-none focus:border-[#F59E0B]"
              onKeyDown={(e) => e.key === 'Enter' && saveGoal()}
            />
            <button onClick={saveGoal} className="text-[10px] font-bold text-[#F59E0B]">저장</button>
          </div>
        ) : (
          <button
            onClick={() => { setGoalDraft(user?.goal || ''); setEditingGoal(true); }}
            className="flex items-center gap-1 text-xs text-[#9CA3AF] font-medium hover:text-[#E5E7EB] transition-colors"
          >
            {user?.goal || '목표를 설정해보세요'}
            <Pencil size={10} />
          </button>
        )}
      </div>

      {/* 원형 진행률 */}
      <div className="mb-8">
        <CircularProgress completed={completedCount} total={100} />
        <p className="text-center text-xs text-[#9CA3AF] mt-2">클로드 100가지 팁 마스터하기</p>
      </div>

      {/* 도구 바로가기 */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-[#E5E7EB] mb-3">학습 도구</h2>
        <ToolsRow />
      </div>

      {/* 8주 커리큘럼 */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-[#E5E7EB] mb-3">8주 커리큘럼</h2>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
            <WeekCard key={week} week={week} />
          ))}
        </div>
      </div>

      {/* 카테고리별 진행률 */}
      <CategoryProgressChart />
    </div>
  );
}
