export interface DictionaryTerm {
  id: string;
  term: string;
  termEnglish: string;
  definition: string;
  example: string;
  visualEmoji: string;
  category: '기초' | '웹' | '프로그래밍' | '도구' | '데이터' | '바이브코딩';
}

export interface StudyActivity {
  id: string;
  type: string;
  label: string;
  timestamp: number;
}

export interface StudyRecord {
  date: string;
  activities: StudyActivity[];
}

export interface Project {
  id: string;
  createdAt: string;
  title: string;
  siteUrl: string;
  improvements: string;
  praise: string;
}

export interface BookQuestion {
  id: string;
  imageDataUrl: string;
  question: string;
  answer: string;
  createdAt: string;
}

// === Claude Master 새 타입 ===

export type TipCategory =
  | '프롬프트 기본기'
  | '글쓰기 & 콘텐츠'
  | '리서치 & 분석'
  | '업무 & 비즈니스'
  | '코딩 & 자동화'
  | '학습 & 정리'
  | '고급 테크닉';

export interface TipQuiz {
  question: string;
  optionA: string;
  optionB: string;
  answer: 'A' | 'B';
  explanation: string;
}

export interface ClaudeTip {
  id: number;
  title: string;
  desc: string;
  category: TipCategory;
  week: number;
  lesson: string;
  bad: string;
  good: string;
  practice: string;
  quiz?: TipQuiz;
}

export type AGReferenceSection =
  | 'AG란?'
  | 'Mac 단축키'
  | 'AG 채팅 명령어'
  | '터미널 명령어'
  | '클로드 코드 명령어'
  | 'AI 모델 비교'
  | '주요 파일 & 설정'
  | '코딩 언어 & 기술'
  | '배포 & 실전'
  | '실전 꿀팁';

export type AGTag = '필수' | '핵심' | '기초' | '추천' | '유용' | '중급' | '고급' | '인기' | '유료' | '무료' | '강력';

export interface AGReferenceItem {
  id: string;
  section: AGReferenceSection;
  title: string;
  content: string;
  tags: AGTag[];
}

export type UserDictionaryCategory = '일반' | '프롬프트' | '코딩' | 'AI용어' | '비즈니스' | 'AG관련';

export interface UserDictionaryTerm {
  id: string;
  name: string;
  description: string;
  category: UserDictionaryCategory;
  createdAt: string;
}

// 카테고리 색상 매핑
export const CATEGORY_COLORS: Record<TipCategory, string> = {
  '프롬프트 기본기': '#F59E0B',
  '글쓰기 & 콘텐츠': '#10B981',
  '리서치 & 분석': '#6366F1',
  '업무 & 비즈니스': '#EC4899',
  '코딩 & 자동화': '#3B82F6',
  '학습 & 정리': '#8B5CF6',
  '고급 테크닉': '#EF4444',
};

// 주차별 정보
export const WEEK_INFO: Record<number, { title: string; tipRange: string; color: string }> = {
  1: { title: '프롬프트 기본기 전반', tipRange: '팁 1~8', color: '#F59E0B' },
  2: { title: '프롬프트 기본기 후반', tipRange: '팁 9~15', color: '#F59E0B' },
  3: { title: '글쓰기 & 콘텐츠 전반', tipRange: '팁 16~23', color: '#10B981' },
  4: { title: '글쓰기 후반 + 리서치 시작', tipRange: '팁 24~33', color: '#10B981' },
  5: { title: '리서치 & 분석', tipRange: '팁 34~45', color: '#6366F1' },
  6: { title: '업무 & 비즈니스', tipRange: '팁 46~60', color: '#EC4899' },
  7: { title: '코딩 & 자동화 + 학습', tipRange: '팁 61~83', color: '#3B82F6' },
  8: { title: '고급 테크닉', tipRange: '팁 84~100', color: '#EF4444' },
};
