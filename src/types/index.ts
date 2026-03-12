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