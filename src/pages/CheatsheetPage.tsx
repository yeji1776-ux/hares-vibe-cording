import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';

interface CheatItem {
  command: string;
  desc: string;
}

interface CheatSection {
  id: string;
  title: string;
  emoji: string;
  color: string;
  items: CheatItem[];
}

const CHEATSHEETS: CheatSection[] = [
  {
    id: 'git',
    title: 'Git 명령어',
    emoji: '🌿',
    color: 'bg-orange-50 border-orange-200',
    items: [
      { command: 'git init', desc: '새 저장소 만들기' },
      { command: 'git add .', desc: '모든 변경사항 준비' },
      { command: 'git commit -m "메시지"', desc: '저장 지점 만들기' },
      { command: 'git push', desc: '원격(GitHub)에 올리기' },
      { command: 'git pull', desc: '원격에서 가져오기' },
      { command: 'git status', desc: '현재 상태 확인' },
      { command: 'git log --oneline', desc: '히스토리 한줄로 보기' },
      { command: 'git branch 이름', desc: '새 브랜치 만들기' },
      { command: 'git checkout 이름', desc: '브랜치 이동하기' },
      { command: 'git merge 이름', desc: '브랜치 합치기' },
    ],
  },
  {
    id: 'terminal',
    title: '터미널 명령어',
    emoji: '💻',
    color: 'bg-gray-50 border-gray-200',
    items: [
      { command: 'cd 폴더명', desc: '폴더로 이동' },
      { command: 'cd ..', desc: '상위 폴더로 이동' },
      { command: 'ls', desc: '파일 목록 보기' },
      { command: 'mkdir 이름', desc: '새 폴더 만들기' },
      { command: 'rm 파일명', desc: '파일 삭제' },
      { command: 'pwd', desc: '현재 위치 확인' },
      { command: 'clear', desc: '화면 깨끗이' },
    ],
  },
  {
    id: 'npm',
    title: 'npm 명령어',
    emoji: '📦',
    color: 'bg-red-50 border-red-200',
    items: [
      { command: 'npm init -y', desc: '프로젝트 초기화' },
      { command: 'npm install 패키지', desc: '패키지 설치' },
      { command: 'npm run dev', desc: '개발 서버 실행' },
      { command: 'npm run build', desc: '배포용 빌드' },
      { command: 'npx create-vite@latest', desc: 'Vite 프로젝트 생성' },
    ],
  },
  {
    id: 'react',
    title: 'React 기본 패턴',
    emoji: '⚛️',
    color: 'bg-blue-50 border-blue-200',
    items: [
      { command: 'useState(초기값)', desc: '상태 관리 훅' },
      { command: 'useEffect(() => {}, [])', desc: '사이드 이펙트 처리' },
      { command: '<Component prop={값} />', desc: '컴포넌트에 데이터 전달' },
      { command: '{list.map(item => <div key={item.id} />)}', desc: '리스트 렌더링' },
      { command: 'onClick={() => 함수()}', desc: '클릭 이벤트' },
      { command: 'onChange={e => set(e.target.value)}', desc: '입력값 변경' },
      { command: 'condition && <Component />', desc: '조건부 렌더링' },
      { command: '{condition ? <A /> : <B />}', desc: '삼항 조건 렌더링' },
    ],
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS 자주 쓰는 클래스',
    emoji: '🎨',
    color: 'bg-teal-50 border-teal-200',
    items: [
      { command: 'flex items-center justify-between', desc: '가로 정렬 (양끝)' },
      { command: 'flex flex-col', desc: '세로 정렬' },
      { command: 'grid grid-cols-2 gap-4', desc: '2칸 그리드' },
      { command: 'p-4 px-6 py-2', desc: '안쪽 여백' },
      { command: 'm-4 mx-auto', desc: '바깥 여백 + 가운데 정렬' },
      { command: 'rounded-xl rounded-full', desc: '둥근 모서리' },
      { command: 'text-sm text-gray-500 font-bold', desc: '텍스트 스타일' },
      { command: 'bg-white shadow-sm', desc: '카드 배경' },
      { command: 'w-full max-w-lg', desc: '너비 설정' },
      { command: 'hover:bg-gray-100 transition-colors', desc: '호버 효과' },
      { command: 'sm: md: lg:', desc: '반응형 접두사' },
    ],
  },
  {
    id: 'supabase',
    title: 'Supabase 주요 코드',
    emoji: '💚',
    color: 'bg-green-50 border-green-200',
    items: [
      { command: 'supabase.from("table").select("*")', desc: '전체 데이터 조회' },
      { command: '.insert({ key: value })', desc: '데이터 추가' },
      { command: '.update({ key: value }).eq("id", id)', desc: '데이터 수정' },
      { command: '.delete().eq("id", id)', desc: '데이터 삭제' },
      { command: 'supabase.auth.signInWithOAuth()', desc: '소셜 로그인' },
      { command: 'supabase.storage.from("bucket").upload()', desc: '파일 업로드' },
    ],
  },
];

export default function CheatsheetPage() {
  const [openSection, setOpenSection] = useState<string>('git');

  return (
    <PageWrapper title="코드 치트시트" subtitle="자주 쓰는 명령어 & 패턴 모음!">
      {/* Section tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {CHEATSHEETS.map(section => (
          <button
            key={section.id}
            onClick={() => setOpenSection(section.id)}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
              openSection === section.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {section.emoji} {section.title}
          </button>
        ))}
      </div>

      {/* Active section */}
      {CHEATSHEETS.filter(s => s.id === openSection).map(section => (
        <div key={section.id} className={`rounded-2xl border p-4 ${section.color} animate-fade-in`}>
          <h3 className="font-bold text-gray-800 mb-3">{section.emoji} {section.title}</h3>
          <div className="space-y-2">
            {section.items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-3 flex items-start gap-3">
                <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded-lg font-mono shrink-0 max-w-[55%] overflow-x-auto">
                  {item.command}
                </code>
                <span className="text-xs text-gray-600 pt-0.5">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </PageWrapper>
  );
}
