import { useState } from 'react';
import { BookOpen, ExternalLink, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

interface Lecture {
  id: string;
  weeks: string;
  title: string;
  topics: string[];
  file: string;
  color: string;
}

const lectures: Lecture[] = [
  {
    id: 'w1-2',
    weeks: '1~2주차',
    title: '바이브코딩 소개 & AI 프롬프팅',
    topics: [
      '바이브코딩이란?',
      'Cursor IDE 설치 & 세팅',
      '첫 웹페이지 만들기',
      'HTML/CSS/JavaScript 기본 개념',
      '좋은 프롬프트의 5가지 요소',
      '대화형 개발 방법',
      '프롬프트 꿀팁 모음',
    ],
    file: '/lectures/vibe-coding-week1-2.html',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'w3-4',
    weeks: '3~4주차',
    title: '웹앱 기초 & 데이터 연동',
    topics: [
      'Tailwind CSS 스타일링',
      '반응형 디자인',
      '랜딩페이지 만들기',
      'GitHub + Vercel 배포',
      'Next.js 프로젝트 구조',
      'Supabase 데이터베이스',
      'CRUD 앱 만들기',
    ],
    file: '/lectures/vibe-coding-week3-4.html',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    id: 'w5-6',
    weeks: '5~6주차',
    title: '대시보드 & 업무 자동화',
    topics: [
      'KPI 카드 & 차트 만들기',
      'Recharts 라이브러리',
      '필터링 & 검색 기능',
      'Supabase Realtime',
      'API 개념과 활용',
      '슬랙 웹훅 연동',
      '크론잡(자동 실행)',
      'API 키 보안 관리',
    ],
    file: '/lectures/vibe-coding-week5-6.html',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: 'w7-8',
    weeks: '7~8주차',
    title: '엔티티(Entity) 완전 정복',
    topics: [
      'DB 엔티티 개념',
      '클린 아키텍처',
      '바이브코딩에서의 엔티티 활용',
    ],
    file: '/lectures/vibe-coding-week7-8.html',
    color: 'bg-rose-100 text-rose-600',
  },
];

export default function LecturesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <PageWrapper title="교안 자료" subtitle="주차별 바이브코딩 강의 교안을 확인하세요!">
      <div className="space-y-4">
        {lectures.map((lec) => (
          <div key={lec.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedId(expandedId === lec.id ? null : lec.id)}
              className="w-full flex items-center gap-3 p-4 text-left"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${lec.color}`}>
                <BookOpen size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-400">{lec.weeks}</p>
                <h3 className="font-bold text-gray-800 text-sm">{lec.title}</h3>
              </div>
              <ChevronRight
                size={18}
                className={`text-gray-400 transition-transform ${expandedId === lec.id ? 'rotate-90' : ''}`}
              />
            </button>

            {expandedId === lec.id && (
              <div className="px-4 pb-4 animate-fade-in">
                <div className="bg-gray-50 rounded-xl p-3 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-2">다루는 내용</p>
                  <div className="flex flex-wrap gap-1.5">
                    {lec.topics.map((topic) => (
                      <span key={topic} className="text-xs bg-white rounded-full px-2.5 py-1 text-gray-600 border border-gray-200">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={lec.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors no-underline"
                >
                  <ExternalLink size={16} />
                  슬라이드 보기
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-indigo-50 rounded-2xl p-4">
        <p className="text-xs text-indigo-600 font-semibold mb-1">교안 활용 팁</p>
        <p className="text-xs text-indigo-500">슬라이드는 좌우 화살표 키 또는 스와이프로 넘길 수 있어요!</p>
      </div>
    </PageWrapper>
  );
}
