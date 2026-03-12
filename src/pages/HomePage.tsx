import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, BookA, Calendar, FolderOpen, Camera, Youtube, Sparkles, Award, FileCode, Timer, CheckCircle2, BookOpen, Bookmark } from 'lucide-react';
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
  const { mode, timeLeft, isRunning } = useTimer();
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
    <div className="animate-fade-in max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-8">
      <p className="text-gray-500 mb-3">오늘도 바이브코딩 화이팅!</p>

      {/* 퀵 액션: 출석 + 북마크 + 타이머 */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button
          onClick={handleCheckIn}
          disabled={isChecked}
          className={`flex flex-col items-center justify-center rounded-xl py-2.5 shadow-sm transition-all ${
            isChecked
              ? 'bg-green-50 border border-green-300'
              : 'bg-white border border-dashed border-indigo-300 active:scale-95'
          }`}
        >
          <CheckCircle2 size={20} className={isChecked ? 'text-green-500' : 'text-indigo-400'} />
          <span className={`text-[11px] font-bold mt-1 ${isChecked ? 'text-green-600' : 'text-gray-700'}`}>
            {isChecked ? '출석완료' : '출석체크'}
          </span>
        </button>

        <Link
          to="/chatbot"
          className="flex flex-col items-center justify-center rounded-xl py-2.5 bg-white shadow-sm border border-gray-100 no-underline"
        >
          <Bookmark size={20} className="text-amber-500" />
          <span className="text-[11px] font-bold mt-1 text-gray-700">북마크</span>
        </Link>

        <Link
          to="/timer"
          className="flex flex-col items-center justify-center rounded-xl py-2.5 bg-white shadow-sm border border-gray-100 no-underline"
        >
          <Timer size={20} className={isRunning ? (mode === 'focus' ? 'text-indigo-500' : 'text-green-500') : 'text-cyan-500'} />
          <span className={`text-[11px] font-bold mt-1 tabular-nums ${isRunning ? 'text-indigo-600' : 'text-gray-700'}`}>
            {isRunning ? `${String(timerMin).padStart(2,'0')}:${String(timerSec).padStart(2,'0')}` : '타이머'}
          </span>
        </Link>
      </div>

      <ProgressStats />

      <div className="space-y-6">
        {categories.map(cat => (
          <div key={cat.title}>
            <h2 className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1.5">
              <span>{cat.emoji}</span> {cat.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {cat.items.map(({ to, icon: Icon, label, desc, color }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 shadow-sm hover:shadow-md transition-shadow no-underline"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight">{label}</h3>
                    <p className="text-[11px] text-gray-400 truncate">{desc}</p>
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
