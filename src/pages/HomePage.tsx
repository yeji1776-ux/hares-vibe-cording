import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, BookA, Calendar, FolderOpen, Camera, Youtube, Sparkles, FileCode, Timer, CheckCircle2, BookOpen, Bookmark, Award, Pencil, Target, NotebookPen } from 'lucide-react';
import { useTimer } from '../contexts/TimerContext';
import { useUser } from '../contexts/UserContext';
import type { LucideIcon } from 'lucide-react';
import ProgressStats from '../components/home/ProgressStats';
import { useStudyTracker } from '../hooks/useStudyTracker';

interface Feature {
  to: string;
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
}

interface Category {
  title: string;
  emoji: string;
  items: Feature[];
}

const categories: Category[] = [
  {
    title: '학습하기',
    emoji: '📖',
    items: [
      { to: '/curriculum', icon: GraduationCap, label: '3개월 커리큘럼', desc: '매일 바이브코딩 마스터!', color: 'bg-indigo-100 text-indigo-600' },
      { to: '/lectures', icon: BookOpen, label: '교안 자료', desc: '주차별 강의 슬라이드!', color: 'bg-purple-100 text-purple-600' },
      { to: '/quiz', icon: Sparkles, label: '오늘의 퀴즈', desc: '배운 용어를 퀴즈로 복습!', color: 'bg-amber-100 text-amber-600' },
    ],
  },
  {
    title: '참고하기',
    emoji: '🔍',
    items: [
      { to: '/dictionary', icon: BookA, label: '코딩 용어 사전', desc: '쉬운 설명으로 용어 배우기', color: 'bg-pink-100 text-pink-600' },
      { to: '/cheatsheet', icon: FileCode, label: '코드 치트시트', desc: 'Git, React, CSS 요약!', color: 'bg-orange-100 text-orange-600' },
      { to: '/youtube', icon: Youtube, label: '코드팩토리 유튜브', desc: '강의 영상 바로가기', color: 'bg-red-100 text-red-600' },
    ],
  },
  {
    title: '기록하기',
    emoji: '✏️',
    items: [
      { to: '/calendar', icon: Calendar, label: '학습 달력', desc: '공부한 날을 기록해요', color: 'bg-blue-100 text-blue-600' },
      { to: '/portfolio', icon: FolderOpen, label: '내 웹앱 모음', desc: '만든 작품을 정리해요', color: 'bg-green-100 text-green-600' },
      { to: '/book-qa', icon: Camera, label: '책 사진 질문', desc: '모르는 부분을 사진으로 질문', color: 'bg-rose-100 text-rose-600' },
      { to: '/memo', icon: NotebookPen, label: '메모장', desc: '생각과 배움을 기록해요', color: 'bg-violet-100 text-violet-600' },
    ],
  },
  {
    title: '나의 성과',
    emoji: '🏆',
    items: [
      { to: '/badges', icon: Award, label: '성취 배지', desc: '모은 배지를 확인해요!', color: 'bg-yellow-100 text-yellow-600' },
    ],
  },
];

export default function HomePage() {
  const { logActivity, hasStudied } = useStudyTracker();
  const { timeLeft, isRunning } = useTimer();
  const { user, updateProfile } = useUser();
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
  const timerMin = Math.floor(timeLeft / 60);
  const timerSec = timeLeft % 60;

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
    `${user?.nickname}님, 바이브코딩 마스터가 되는 그날까지!`,
    `${user?.nickname}님, 오늘도 멋진 하루 시작!`,
    `${user?.nickname}님, 할 수 있다고 믿으면 진짜 돼요!`,
  ];
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const greeting = greetings[dayOfYear % greetings.length];

  return (
    <div className="animate-fade-in max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-8 pb-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">학습 대시보드</h1>
          <p className="text-gray-400 font-medium text-sm mt-0.5">{greeting}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <button
            onClick={handleCheckIn}
            disabled={isChecked}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full shadow-sm text-xs font-bold transition-all ${isChecked ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED] active:scale-95'
              }`}
          >
            {isChecked ? <CheckCircle2 size={14} /> : <span>🙌</span>}
            {isChecked ? '출석 완료' : '출석 체크'}
          </button>
          <Link to="/chatbot" className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-100 rounded-full shadow-sm text-xs font-bold text-gray-700 no-underline hover:bg-gray-50 transition-colors">
            <Bookmark size={14} className="text-amber-500" />
            북마크
          </Link>
          <Link to="/timer" className="flex items-center gap-1.5 px-3 py-2 bg-[#F5F3FF] text-[#8B5CF6] rounded-full shadow-sm text-xs font-bold no-underline hover:bg-[#EDE9FE] transition-colors">
            <Timer size={14} />
            {isRunning ? `${String(timerMin).padStart(2, '0')}:${String(timerSec).padStart(2, '0')}` : '타이머'}
          </Link>
          <Link to="/chatbot" className="flex items-center gap-1.5 px-3 py-2 bg-teal-50 text-teal-600 rounded-full shadow-sm text-xs font-bold no-underline hover:bg-teal-100 transition-colors">
            <MessageCircle size={14} />
            챗봇
          </Link>
        </div>
      </div>

      <div className="dashboard-card mb-8 p-4 flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#F5F3FF] border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
            {user?.avatar ? (
              <img src={user.avatar} alt="프로필" className="w-full h-full object-cover" />
            ) : (
              <span className="text-lg font-black text-[#8B5CF6]">{user?.nickname[0]}</span>
            )}
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          >
            <Camera size={10} className="text-gray-500" />
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-gray-900">{user?.nickname}</h2>
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${isChecked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              {isChecked ? '활동 중' : '일반'}
            </span>
          </div>
          <p className="text-xs text-gray-400 font-medium mt-0.5">가입일: {user?.createdAt}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <Target size={12} className="text-amber-500 flex-shrink-0" />
            {editingGoal ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={goalDraft}
                  onChange={(e) => setGoalDraft(e.target.value)}
                  placeholder="나의 목표를 입력해요"
                  maxLength={30}
                  autoFocus
                  className="px-2 py-1 rounded-lg border border-gray-200 text-xs font-medium focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] w-40"
                  onKeyDown={(e) => e.key === 'Enter' && saveGoal()}
                />
                <button onClick={saveGoal} className="text-[10px] font-bold text-[#8B5CF6] hover:underline">저장</button>
              </div>
            ) : (
              <button
                onClick={() => { setGoalDraft(user?.goal || ''); setEditingGoal(true); }}
                className="flex items-center gap-1 text-xs text-gray-400 font-medium hover:text-gray-600 transition-colors"
              >
                {user?.goal || '목표를 설정해보세요'}
                <Pencil size={10} />
              </button>
            )}
          </div>
        </div>
      </div>

      <ProgressStats />

      <div className="space-y-12">
        {categories.map(cat => (
          <div key={cat.title}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{cat.emoji}</span>
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map(({ to, icon: Icon, label, desc, color }) => (
                <Link
                  key={to}
                  to={to}
                  className="dashboard-card group p-4 no-underline flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm">{label}</h3>
                    <p className="text-xs text-gray-400 font-medium leading-snug">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
