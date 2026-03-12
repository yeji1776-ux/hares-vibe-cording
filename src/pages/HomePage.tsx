import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, BookA, Calendar, FolderOpen, Camera, Youtube, Sparkles, Award, FileCode, Timer, CheckCircle2 } from 'lucide-react';
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
      { to: '/timer', icon: Timer, label: '학습 타이머', desc: '25분 집중 뽀모도로!', color: 'bg-cyan-100 text-cyan-600' },
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

  return (
    <div className="animate-fade-in max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-8">
      <p className="text-gray-500 mb-4">오늘도 바이브코딩 화이팅!</p>

      {/* 출석체크 */}
      <button
        onClick={handleCheckIn}
        disabled={isChecked}
        className={`w-full mb-4 rounded-2xl p-4 shadow-sm flex items-center gap-3 transition-all ${
          isChecked
            ? 'bg-green-50 border-2 border-green-300'
            : 'bg-white border-2 border-dashed border-indigo-300 hover:border-indigo-400 hover:shadow-md active:scale-[0.98]'
        }`}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isChecked ? 'bg-green-100' : 'bg-indigo-100'
        }`}>
          <CheckCircle2 size={24} className={isChecked ? 'text-green-500' : 'text-indigo-400'} />
        </div>
        <div className="text-left">
          <p className={`font-bold ${isChecked ? 'text-green-600' : 'text-gray-800'}`}>
            {isChecked ? '오늘 출석 완료!' : '오늘의 출석체크'}
          </p>
          <p className="text-xs text-gray-400">
            {isChecked ? '오늘도 열심히 공부해요!' : '버튼을 눌러 출석 도장을 찍어요!'}
          </p>
        </div>
      </button>

      <ProgressStats />

      <div className="space-y-6">
        {categories.map(cat => (
          <div key={cat.title}>
            <h2 className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1.5">
              <span>{cat.emoji}</span> {cat.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cat.items.map(({ to, icon: Icon, label, desc, color }) => (
                <Link
                  key={to}
                  to={to}
                  className="block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow no-underline"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{label}</h3>
                  <p className="text-xs text-gray-400 mt-1">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
