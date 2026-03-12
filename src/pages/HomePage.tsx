import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, BookA, Calendar, FolderOpen, Camera, Youtube, Sparkles, FileCode, Timer, CheckCircle2, BookOpen, Bookmark, User, Plus, Award } from 'lucide-react';
import { useTimer } from '../contexts/TimerContext';
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
      { to: '/chatbot', icon: MessageCircle, label: '대화하며 배우기', desc: '챗봇에게 뭐든 물어봐요!', color: 'bg-teal-100 text-teal-600' },
      { to: '/quiz', icon: Sparkles, label: '오늘의 퀴즈', desc: '배운 용어를 퀴즈로 복습!', color: 'bg-amber-100 text-amber-600' },
      { to: '/lectures', icon: BookOpen, label: '교안 자료', desc: '주차별 강의 슬라이드!', color: 'bg-purple-100 text-purple-600' },
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
  const today = new Date().toISOString().split('T')[0];
  const checkedIn = hasStudied(today) && (() => {
    const rec = JSON.parse(localStorage.getItem('cording-study-records') || '[]');
    return rec.some((r: any) => r.date === today && r.activities.some((a: any) => a.type === 'attendance'));
  })();
  const [justChecked, setJustChecked] = useState(false);

  const handleCheckIn = () => {
    if (checkedIn || justChecked) return;
    logActivity('attendance', '출석 체크 완료!');
    setJustChecked(true);
  };

  const isChecked = checkedIn || justChecked;
  const timerMin = Math.floor(timeLeft / 60);
  const timerSec = timeLeft % 60;

  return (
    <div className="animate-fade-in max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-8 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">학습 대시보드</h1>
          <p className="text-gray-400 font-medium mt-1">오늘도 바이브코딩 화이팅!</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/chatbot" className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-sm font-bold text-gray-700 no-underline hover:bg-gray-50 transition-colors">
            <Bookmark size={16} className="text-amber-500" />
            북마크
          </Link>
          <button
            onClick={handleCheckIn}
            disabled={isChecked}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full shadow-sm text-sm font-bold transition-all ${isChecked ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-[#0066FF] text-white hover:bg-[#0052cc] active:scale-95'
              }`}
          >
            {isChecked ? <CheckCircle2 size={16} /> : <Plus size={16} />}
            {isChecked ? '출석 완료' : '출석 체크'}
          </button>
        </div>
      </div>

      <div className="dashboard-card mb-8 p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
          <User size={48} className="text-blue-200" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Vibe 수강생</h2>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isChecked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              {isChecked ? '활동 중' : '일반'}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1.5"><FileCode size={14} /> ID: VIBE-2024</span>
            <span className="flex items-center gap-1.5"><Timer size={14} /> {isRunning ? `${String(timerMin).padStart(2, '0')}:${String(timerSec).padStart(2, '0')}` : '대기 중'}</span>
          </div>
        </div>
        <Link to="/timer" className="px-6 py-3 bg-blue-50 text-[#0066FF] rounded-xl font-bold text-sm no-underline hover:bg-blue-100 transition-colors">
          타이머 시작
        </Link>
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
                  className="dashboard-card group p-5 no-underline flex flex-col items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${color}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{label}</h3>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{desc}</p>
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
