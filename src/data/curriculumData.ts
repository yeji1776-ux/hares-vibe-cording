export interface CurriculumDay {
  day: number;
  title: string;
  description: string;
  emoji: string;
  tasks: string[];
  tools?: string[];
  tip?: string;
}

export interface CurriculumWeek {
  week: number;
  theme: string;
  emoji: string;
  days: CurriculumDay[];
}

export interface CurriculumMonth {
  month: number;
  title: string;
  subtitle: string;
  color: string;
  weeks: CurriculumWeek[];
}

const month1: CurriculumMonth = {
  month: 1,
  title: "기초 다지기 & 첫 프로젝트",
  subtitle: "랜딩 페이지와 블로그를 직접 만들어봐요!",
  color: "bg-blue-100",
  weeks: [
    {
      week: 1,
      theme: "프로젝트 1 - SaaS 랜딩 페이지 (전반)",
      emoji: "🎨",
      days: [
        {
          day: 1,
          title: "개발 프로세스 이해하기",
          emoji: "📋",
          description:
            "앱을 만드는 전체 과정을 알아봐요 - 기획→디자인→개발→배포",
          tasks: [
            "개발 프로세스란? 기획 → 디자인 → 개발 → 배포 4단계 이해하기",
            "SaaS가 뭔지 알아보기 (매달 돈 내고 쓰는 서비스, 예: 넷플릭스)",
            "잘 만든 SaaS 랜딩 페이지 5개 구경하기 (어떤 구성인지 관찰)",
          ],
          tools: ["브라우저"],
          tip: "개발은 요리와 같아요! 레시피(기획) → 재료손질(디자인) → 요리(개발) → 서빙(배포)",
        },
        {
          day: 2,
          title: "스티치디자인으로 디자인하기",
          emoji: "✂️",
          description:
            "코딩 없이 디자인 먼저! 스티치디자인으로 예쁜 페이지 만들기",
          tasks: [
            "스티치디자인이 뭔지 알아보기 (AI가 웹 디자인을 만들어주는 도구)",
            "스티치디자인 가입하고 둘러보기",
            "우리 SaaS 랜딩 페이지 디자인 만들기 (히어로, 기능소개, 가격표, CTA)",
          ],
          tools: ["스티치디자인"],
          tip: "스티치디자인 = AI 디자이너! 말로 설명하면 디자인을 만들어줘요",
        },
        {
          day: 3,
          title: "안티그래비티로 코드 만들기",
          emoji: "🚀",
          description: "디자인을 진짜 웹사이트 코드로 변환해요!",
          tasks: [
            "안티그래비티가 뭔지 알아보기 (디자인 → 코드를 자동으로 바꿔주는 도구)",
            "안티그래비티에 디자인 넣고 코드 생성하기",
            "생성된 코드 살펴보기 (HTML, CSS 구조 이해)",
          ],
          tools: ["안티그래비티"],
        },
        {
          day: 4,
          title: "에이전트 개발이란?",
          emoji: "🤖",
          description: "AI 에이전트가 알아서 코딩해주는 새로운 개발 방법!",
          tasks: [
            "에이전트 개발이란? (AI가 스스로 생각하고 코드를 짜는 것)",
            "안티그래비티의 AI 에이전트가 코드를 개선하게 해보기",
            "에이전트에게 '반응형으로 만들어줘' 요청하기",
          ],
          tools: ["안티그래비티"],
          tip: "에이전트 = 스스로 판단하는 AI! '이것도 수정하고 저것도 수정해'라고 하면 알아서 해줘요",
        },
        {
          day: 5,
          title: "랜딩 페이지 완성 & 배포",
          emoji: "🎉",
          description: "첫 번째 프로젝트 완성! 세상에 공개해요!",
          tasks: [
            "GitHub에 코드 올리기",
            "Vercel로 배포하기",
            "내 랜딩 페이지 URL 공유하기!",
          ],
          tools: ["GitHub", "Vercel"],
          tip: "축하해요! 첫 SaaS 랜딩 페이지 완성! 🎉 URL을 친구에게 보내보세요!",
        },
      ],
    },
    {
      week: 2,
      theme: "프로젝트 2 - 블로그 만들기 (전반)",
      emoji: "📝",
      days: [
        {
          day: 6,
          title: "풀스택 개발 이해하기",
          emoji: "🥞",
          description:
            "앞(화면)과 뒤(서버) 모두 만드는 풀스택 개발을 배워요",
          tasks: [
            "풀스택이란? 프론트엔드(화면) + 백엔드(서버) 둘 다 만드는 것",
            "블로그에 필요한 기능 정리 (글 목록, 글 쓰기, 글 읽기)",
            "React + Supabase로 만들 거라는 큰 그림 이해하기",
          ],
        },
        {
          day: 7,
          title: "Supabase 시작하기",
          emoji: "💚",
          description: "무료 데이터베이스 서비스 Supabase를 세팅해요",
          tasks: [
            "Supabase가 뭔지 알아보기 (무료 데이터베이스 + 서버를 제공하는 서비스)",
            "Supabase 가입하고 새 프로젝트 만들기",
            "데이터베이스란? (엑셀처럼 표로 데이터를 저장하는 곳)",
          ],
          tools: ["Supabase"],
          tip: "Supabase = 무료 백엔드! 데이터 저장, 로그인, 파일 업로드를 다 해줘요",
        },
        {
          day: 8,
          title: "데이터베이스 테이블 만들기",
          emoji: "📊",
          description: "블로그 글을 저장할 표(테이블)를 만들어요",
          tasks: [
            "Supabase에서 'posts' 테이블 만들기 (id, title, content, created_at)",
            "테이블에 샘플 데이터 3개 직접 넣어보기",
            "Supabase에서 데이터 조회해보기",
          ],
          tools: ["Supabase"],
        },
        {
          day: 9,
          title: "RLS (행 수준 보안) 이해하기",
          emoji: "🔒",
          description: "내 글은 나만 수정할 수 있게! 보안 규칙 설정하기",
          tasks: [
            "RLS가 뭔지 알아보기 (Row Level Security = 줄마다 보안 규칙을 거는 것)",
            "쉬운 비유: 아파트 현관문 + 개인 방문 = RLS",
            "'누구나 읽기 가능, 작성자만 수정/삭제 가능' 정책 만들기",
          ],
          tools: ["Supabase"],
          tip: "RLS = 데이터의 자물쇠! '이 줄은 이 사람만 볼 수 있어요' 같은 규칙이에요",
        },
        {
          day: 10,
          title: "React로 블로그 화면 만들기",
          emoji: "⚛️",
          description: "AI에게 블로그 UI를 만들어달라고 요청해요",
          tasks: [
            "React 프로젝트 생성 (Vite + React + Tailwind)",
            "AI에게 '블로그 글 목록 페이지 만들어줘' 요청",
            "Supabase에서 데이터 가져와서 화면에 보여주기",
          ],
          tools: ["React", "Supabase", "Claude"],
        },
      ],
    },
    {
      week: 3,
      theme: "프로젝트 2 - 블로그 완성",
      emoji: "✍️",
      days: [
        {
          day: 11,
          title: "글쓰기 기능 만들기",
          emoji: "📝",
          description: "새 글을 작성하고 저장하는 기능을 만들어요",
          tasks: [
            "글쓰기 폼 만들기 (제목, 내용 입력)",
            "Supabase에 글 저장하는 코드 작성",
            "저장 후 목록으로 돌아가기",
          ],
        },
        {
          day: 12,
          title: "수정 & 삭제 기능",
          emoji: "✏️",
          description: "CRUD의 U(수정)와 D(삭제)를 완성해요",
          tasks: [
            "CRUD란? Create(생성), Read(읽기), Update(수정), Delete(삭제)",
            "글 수정 기능 추가하기",
            "글 삭제 기능 추가하기 (확인 모달 포함)",
          ],
        },
        {
          day: 13,
          title: "로그인 기능 추가",
          emoji: "🔐",
          description: "Supabase Auth로 구글 로그인을 넣어요",
          tasks: [
            "Supabase Auth가 뭔지 알아보기 (로그인 기능을 쉽게 만들어주는 것)",
            "구글 로그인 설정하기",
            "로그인한 사람만 글 쓸 수 있게 만들기",
          ],
          tools: ["Supabase Auth"],
        },
        {
          day: 14,
          title: "블로그 꾸미기 & 반응형",
          emoji: "🎨",
          description: "모바일에서도 예쁘게 보이도록 다듬어요",
          tasks: [
            "Tailwind CSS로 디자인 개선",
            "모바일/태블릿/데스크톱 반응형 확인",
            "다크모드 추가해보기",
          ],
          tools: ["Tailwind CSS"],
        },
        {
          day: 15,
          title: "블로그 배포!",
          emoji: "🌍",
          description: "두 번째 프로젝트 완성! Vercel로 배포해요!",
          tasks: [
            "GitHub에 코드 올리기",
            "Vercel로 배포하기",
            "README.md 작성하기",
          ],
          tools: ["GitHub", "Vercel"],
          tip: "프로젝트 2 완성! 이제 풀스택 개발자의 첫걸음을 뗐어요! 💪",
        },
      ],
    },
    {
      week: 4,
      theme: "복습 & AI 도구 심화",
      emoji: "🔄",
      days: [
        {
          day: 16,
          title: "프로젝트 1~2 복습",
          emoji: "📚",
          description: "지금까지 배운 것들 정리하고 복습해요",
          tasks: [
            "프로젝트 1에서 배운 것: 개발 프로세스, 스티치디자인, 안티그래비티, 에이전트",
            "프로젝트 2에서 배운 것: 풀스택, Supabase, RLS, CRUD, Auth",
            "모르는 개념 있으면 정리하기",
          ],
        },
        {
          day: 17,
          title: "프롬프트 엔지니어링",
          emoji: "💬",
          description: "AI에게 더 똑똑하게 요청하는 법을 배워요",
          tasks: [
            "좋은 프롬프트 vs 나쁜 프롬프트 비교하기",
            "구체적으로 요청하기 연습 (기술스택, 스타일, 기능 명시)",
            "에러가 났을 때 AI에게 물어보는 방법",
          ],
          tip: "프롬프트 잘 쓰는 공식: [역할] + [기술스택] + [구체적 기능] + [스타일]",
        },
        {
          day: 18,
          title: "Cursor IDE 마스터",
          emoji: "✨",
          description: "AI가 내장된 코드 에디터 Cursor 사용법을 익혀요",
          tasks: [
            "Cursor 설치하기",
            "Cmd+K로 코드 생성, Cmd+L로 질문하기",
            "Tab 자동완성 활용하기",
          ],
          tools: ["Cursor"],
        },
        {
          day: 19,
          title: "Git & GitHub 심화",
          emoji: "🌿",
          description: "브랜치와 PR을 배워서 프로처럼 코드 관리해요",
          tasks: [
            "브랜치란? (나뭇가지처럼 코드를 분리해서 작업하는 것)",
            "git branch, git checkout, git merge 연습",
            "Pull Request 만들어보기",
          ],
          tools: ["Git", "GitHub"],
        },
        {
          day: 20,
          title: "1개월차 회고 & 다음 달 준비",
          emoji: "🎯",
          description: "한 달간 배운 것을 정리하고 다음 목표를 세워요",
          tasks: [
            "1개월 학습 회고 작성하기",
            "완성한 2개 프로젝트 포트폴리오에 정리",
            "2개월차 프로젝트 미리보기 (챗봇 & 대시보드)",
          ],
          tip: "벌써 프로젝트 2개 완성! 대단해요! 🔥",
        },
      ],
    },
  ],
};

const month2: CurriculumMonth = {
  month: 2,
  title: "중급 도전! AI 챗봇 & 대시보드",
  subtitle: "AI와 데이터를 다루는 진짜 실력을 키워요!",
  color: "bg-green-100",
  weeks: [
    {
      week: 5,
      theme: "프로젝트 3 - 쇼핑 리뷰 분석 챗봇 (전반)",
      emoji: "🤖",
      days: [
        {
          day: 21,
          title: "RAG가 뭐야?",
          emoji: "🧠",
          description:
            "AI가 우리 데이터를 읽고 답변하는 RAG 개념을 배워요",
          tasks: [
            "RAG란? (Retrieval Augmented Generation = 검색해서 답하기)",
            "쉬운 비유: AI에게 교과서를 주고 '이걸 보고 답해줘!' 하는 것",
            "RAG가 필요한 이유: AI가 우리 쇼핑 리뷰 데이터를 모르니까 알려줘야 해요",
          ],
          tip: "RAG = AI에게 커닝 페이퍼 주기! 📄 '이 자료 보고 답해' 하는 기술이에요",
        },
        {
          day: 22,
          title: "벡터 데이터베이스 이해하기",
          emoji: "📐",
          description:
            "텍스트를 숫자로 바꿔서 비슷한 것끼리 찾는 기술!",
          tasks: [
            "벡터란? (텍스트를 숫자 배열로 바꾼 것)",
            "쉬운 비유: 단어를 지도 위의 점으로 바꾸는 것, 비슷한 단어는 가까이!",
            "벡터 DB가 필요한 이유: '맛있다'와 '존맛탱'이 비슷한 뜻임을 AI가 알게 해주는 것",
          ],
        },
        {
          day: 23,
          title: "Pinecone 시작하기",
          emoji: "🌲",
          description: "무료 벡터 데이터베이스 Pinecone을 세팅해요",
          tasks: [
            "Pinecone이 뭔지 알아보기 (벡터를 저장하는 전문 데이터베이스)",
            "Pinecone 가입하고 Index 만들기",
            "샘플 쇼핑 리뷰 데이터 20개 준비하기",
          ],
          tools: ["Pinecone"],
        },
        {
          day: 24,
          title: "랭체인으로 연결하기",
          emoji: "🔗",
          description: "AI + 벡터DB를 연결해주는 랭체인을 배워요",
          tasks: [
            "랭체인이란? (AI 앱을 쉽게 만들어주는 도구 모음)",
            "쉬운 비유: AI 요리에 필요한 주방도구 세트",
            "랭체인 설치하고 기본 코드 이해하기",
          ],
          tools: ["랭체인(LangChain)"],
          tip: "랭체인 = AI 레고! 여러 AI 기능을 블록처럼 조립해요",
        },
        {
          day: 25,
          title: "리뷰 데이터를 벡터로 변환",
          emoji: "🔄",
          description: "쇼핑 리뷰를 벡터로 바꿔서 Pinecone에 저장해요",
          tasks: [
            "임베딩이란? (텍스트를 숫자 벡터로 변환하는 것)",
            "OpenAI 임베딩 API로 리뷰를 벡터로 변환",
            "변환된 벡터를 Pinecone에 저장하기",
          ],
          tools: ["Pinecone", "랭체인"],
        },
      ],
    },
    {
      week: 6,
      theme: "프로젝트 3 - 챗봇 완성",
      emoji: "💬",
      days: [
        {
          day: 26,
          title: "RAG 파이프라인 만들기",
          emoji: "🔧",
          description: "질문 → 검색 → AI 답변 파이프라인을 만들어요",
          tasks: [
            "사용자 질문이 들어오면 관련 리뷰를 Pinecone에서 검색",
            "검색된 리뷰를 AI에게 전달하고 답변 생성",
            "전체 흐름: 질문 → 벡터 검색 → 관련 리뷰 찾기 → AI 답변",
          ],
        },
        {
          day: 27,
          title: "챗봇 UI 만들기",
          emoji: "💬",
          description: "카카오톡처럼 대화하는 챗봇 화면을 만들어요",
          tasks: [
            "React로 채팅 UI 만들기 (메시지 목록 + 입력창)",
            "AI에게 '채팅 인터페이스 만들어줘' 요청",
            "메시지 보내기/받기 기능 연결",
          ],
          tools: ["React", "Tailwind CSS"],
        },
        {
          day: 28,
          title: "챗봇 기능 개선",
          emoji: "⚡",
          description: "답변 품질을 높이고 편의 기능을 추가해요",
          tasks: [
            "프롬프트 개선하기 (더 정확한 리뷰 분석 답변)",
            "로딩 상태 추가하기",
            "대화 기록 저장하기",
          ],
        },
        {
          day: 29,
          title: "챗봇 테스트 & 디버깅",
          emoji: "🐛",
          description: "여러 질문으로 테스트하고 문제를 고쳐요",
          tasks: [
            "다양한 질문으로 테스트하기 ('이 제품 배송 빠른가요?', '맛은 어때요?')",
            "이상한 답변이 나오면 프롬프트 수정",
            "에러 처리 추가하기",
          ],
        },
        {
          day: 30,
          title: "챗봇 배포!",
          emoji: "🚀",
          description: "세 번째 프로젝트 완성! AI 챗봇 배포!",
          tasks: [
            "환경변수 설정 (API 키 안전하게 관리하기)",
            "Vercel로 배포하기",
            "친구에게 보여주고 테스트 부탁하기",
          ],
          tools: ["Vercel"],
          tip: "AI 챗봇을 만들었어요! 이력서에 쓸 수 있는 진짜 실력! 🤖",
        },
      ],
    },
    {
      week: 7,
      theme: "프로젝트 4 - 쇼핑몰 대시보드 (전반)",
      emoji: "📊",
      days: [
        {
          day: 31,
          title: "대시보드 기획 & Supabase MCP",
          emoji: "📋",
          description:
            "쇼핑몰 관리 대시보드를 기획하고 MCP 개념을 배워요",
          tasks: [
            "MCP란? (Model Context Protocol = AI가 외부 도구를 직접 쓸 수 있게 해주는 규격)",
            "쉬운 비유: AI에게 '수파베이스 리모컨'을 쥐여주는 것",
            "Supabase MCP 설정하기 (AI가 DB를 직접 조작하게!)",
          ],
          tools: ["Supabase MCP"],
          tip: "MCP = AI에게 도구 사용법을 알려주는 설명서! AI가 직접 DB를 만져요",
        },
        {
          day: 32,
          title: "데이터 시드 만들기",
          emoji: "🌱",
          description:
            "가짜 데이터를 넣어서 대시보드를 테스트할 준비를 해요",
          tasks: [
            "데이터 시드란? (테스트용 가짜 데이터를 넣는 것)",
            "쉬운 비유: 가게 오픈 전에 진열대에 샘플 상품 놓는 것",
            "상품, 주문, 고객 테이블 만들고 시드 데이터 넣기",
          ],
          tools: ["Supabase"],
        },
        {
          day: 33,
          title: "Supabase 인증 & 스토리지",
          emoji: "🔑",
          description:
            "관리자 로그인과 상품 이미지 업로드를 만들어요",
          tasks: [
            "Supabase Auth로 관리자 로그인 만들기",
            "Supabase Storage란? (파일/이미지를 저장하는 클라우드 공간)",
            "이미지 업로드 기능 만들기 (상품 사진 올리기)",
          ],
          tools: ["Supabase Auth", "Supabase Storage"],
        },
        {
          day: 34,
          title: "룰 & 워크플로 이해하기",
          emoji: "📏",
          description:
            "AI 에이전트가 규칙을 따르게 만드는 방법을 배워요",
          tasks: [
            "룰이란? (AI가 지켜야 할 규칙, 예: '항상 한국어로 답하기')",
            "워크플로란? (여러 단계를 순서대로 실행하는 것)",
            "쉬운 비유: 룰 = 교칙, 워크플로 = 수업 시간표",
          ],
        },
        {
          day: 35,
          title: "대시보드 UI 만들기",
          emoji: "📈",
          description:
            "매출, 주문, 고객 현황을 보여주는 대시보드 화면!",
          tasks: [
            "AI에게 '쇼핑몰 관리자 대시보드 UI 만들어줘' 요청",
            "차트/그래프 라이브러리 사용하기",
            "상품 목록, 주문 현황, 매출 요약 카드 만들기",
          ],
          tools: ["React", "Tailwind CSS"],
        },
      ],
    },
    {
      week: 8,
      theme: "프로젝트 4 - 대시보드 완성",
      emoji: "🏪",
      days: [
        {
          day: 36,
          title: "병렬 에이전트 작업",
          emoji: "⚡",
          description:
            "여러 AI가 동시에 일하는 병렬 에이전트를 배워요",
          tasks: [
            "병렬 에이전트란? (여러 AI가 동시에 다른 일을 하는 것)",
            "쉬운 비유: 식당에서 셰프 3명이 각자 다른 요리를 동시에 만드는 것",
            "상품 관리 + 주문 처리 + 통계 생성을 동시에 처리하기",
          ],
          tip: "병렬 = 동시에! 에이전트 3개가 각자 일하면 3배 빠름! ⚡",
        },
        {
          day: 37,
          title: "상품 CRUD 기능",
          emoji: "🛍️",
          description: "상품 추가/수정/삭제 + 이미지 업로드 완성",
          tasks: [
            "상품 등록 폼 (이름, 가격, 설명, 이미지)",
            "이미지를 Supabase Storage에 업로드하기",
            "상품 수정/삭제 기능 추가",
          ],
          tools: ["Supabase Storage"],
        },
        {
          day: 38,
          title: "주문 관리 & 통계",
          emoji: "📦",
          description: "주문 목록과 매출 통계를 보여줘요",
          tasks: [
            "주문 목록 페이지 만들기 (상태별 필터)",
            "매출 통계 차트 만들기",
            "날짜별/상품별 매출 분석",
          ],
        },
        {
          day: 39,
          title: "대시보드 마무리",
          emoji: "🎨",
          description: "반응형 디자인과 에러 처리를 추가해요",
          tasks: [
            "모바일에서도 잘 보이게 반응형 적용",
            "로딩 상태, 에러 상태 처리",
            "빈 데이터일 때 안내 메시지",
          ],
        },
        {
          day: 40,
          title: "대시보드 배포!",
          emoji: "🎊",
          description:
            "네 번째 프로젝트 완성! 배포하고 2개월차 회고!",
          tasks: [
            "Vercel로 배포하기",
            "환경변수 설정 확인",
            "2개월차 회고: 4개 프로젝트 완성!",
          ],
          tools: ["Vercel"],
          tip: "벌써 4개 프로젝트 완성! 취업 포트폴리오가 채워지고 있어요! 💼",
        },
      ],
    },
  ],
};

const month3: CurriculumMonth = {
  month: 3,
  title: "심화 완성! 결제 SaaS & 포트폴리오",
  subtitle: "진짜 돈이 되는 서비스를 만들고 포트폴리오를 완성해요!",
  color: "bg-purple-100",
  weeks: [
    {
      week: 9,
      theme: "프로젝트 5 - 구독결제 SaaS 플랫폼 (전반)",
      emoji: "💳",
      days: [
        {
          day: 41,
          title: "HTML 기반 디자인 시작",
          emoji: "🎨",
          description:
            "HTML과 CSS만으로 깔끔한 SaaS 페이지를 만들어요",
          tasks: [
            "HTML 기반 디자인이란? (프레임워크 없이 순수 HTML/CSS로 만드는 것)",
            "장점: 가볍고, 빠르고, 누구나 이해할 수 있음",
            "랜딩 페이지 + 가격표 + 결제 페이지 구조 잡기",
          ],
          tip: "때로는 심플한 게 최고! HTML만으로도 멋진 SaaS를 만들 수 있어요",
        },
        {
          day: 42,
          title: "OG 메타데이터",
          emoji: "🏷️",
          description:
            "카톡에 링크 보냈을 때 예쁜 미리보기가 뜨게 만들어요",
          tasks: [
            "OG 메타데이터란? (Open Graph = 링크 공유할 때 보이는 제목/설명/이미지)",
            "쉬운 비유: 책의 표지 디자인 같은 것! 링크의 첫인상",
            "og:title, og:description, og:image 태그 넣기",
          ],
          tip: "카톡/슬랙에 링크 보냈을 때 예쁘게 나오는 비결이 바로 OG 태그!",
        },
        {
          day: 43,
          title: "토스페이먼츠 결제 연동 (1)",
          emoji: "💰",
          description:
            "진짜 결제가 되는 시스템을 만들어요! (테스트 모드)",
          tasks: [
            "토스페이먼츠란? (한국에서 가장 많이 쓰는 온라인 결제 서비스)",
            "토스페이먼츠 개발자 가입하고 테스트 키 받기",
            "결제 위젯 연동하기 (카드, 간편결제 등)",
          ],
          tools: ["토스페이먼츠"],
        },
        {
          day: 44,
          title: "토스페이먼츠 결제 연동 (2)",
          emoji: "🔄",
          description: "결제 확인과 구독 관리 기능을 만들어요",
          tasks: [
            "결제 승인 API 연동하기",
            "구독 결제 (매달 자동 결제) 설정하기",
            "결제 성공/실패 페이지 만들기",
          ],
          tools: ["토스페이먼츠"],
        },
        {
          day: 45,
          title: "스킬 및 작업 검증 워크플로",
          emoji: "✅",
          description:
            "결제 전후로 자동 검증하는 워크플로를 만들어요",
          tasks: [
            "작업 검증 워크플로란? (각 단계가 제대로 됐는지 자동으로 확인하는 것)",
            "쉬운 비유: 택배 배송 추적처럼 각 단계를 체크하는 것",
            "결제 요청 → 검증 → 승인 → 확인 이메일 워크플로 만들기",
          ],
          tip: "워크플로 = 자동 체크리스트! 빠뜨리는 단계 없이 안전하게 처리해요",
        },
      ],
    },
    {
      week: 10,
      theme: "프로젝트 5 - SaaS 완성",
      emoji: "🏆",
      days: [
        {
          day: 46,
          title: "회원 관리 & 대시보드",
          emoji: "👥",
          description:
            "가입한 회원과 구독 현황을 관리하는 페이지를 만들어요",
          tasks: [
            "회원 목록 페이지 만들기",
            "구독 현황 (활성/만료/해지) 관리",
            "매출 통계 대시보드",
          ],
        },
        {
          day: 47,
          title: "Vercel 배포 심화",
          emoji: "▲",
          description: "프로답게 배포하고 도메인도 연결해요",
          tasks: [
            "Vercel 환경변수 설정 (API 키 보안)",
            "커스텀 도메인 연결하기",
            "자동 배포 (git push → 자동 반영) 확인",
          ],
          tools: ["Vercel"],
        },
        {
          day: 48,
          title: "에러 처리 & 보안",
          emoji: "🛡️",
          description:
            "결제 서비스는 보안이 생명! 안전하게 만들어요",
          tasks: [
            "API 키를 환경변수로 안전하게 관리",
            "결제 관련 에러 처리 강화",
            "HTTPS, CORS 개념 이해하기",
          ],
        },
        {
          day: 49,
          title: "최종 테스트",
          emoji: "🧪",
          description:
            "전체 결제 흐름을 처음부터 끝까지 테스트해요",
          tasks: [
            "회원가입 → 구독 선택 → 결제 → 이용 전체 흐름 테스트",
            "모바일에서 결제 테스트",
            "다양한 에러 상황 테스트 (카드 거절, 네트워크 오류 등)",
          ],
        },
        {
          day: 50,
          title: "프로젝트 5 완성!",
          emoji: "🎉",
          description:
            "다섯 번째 프로젝트 완성! 진짜 돈 받는 서비스를 만들었어요!",
          tasks: [
            "최종 배포 확인",
            "README.md 작성",
            "프로젝트 회고 작성",
          ],
          tip: "결제까지 되는 SaaS를 만들었어요! 이건 진짜 실력이에요! 🚀💰",
        },
      ],
    },
    {
      week: 11,
      theme: "포트폴리오 통합 & 정리",
      emoji: "💼",
      days: [
        {
          day: 51,
          title: "포트폴리오 사이트 만들기",
          emoji: "🌟",
          description:
            "5개 프로젝트를 멋지게 보여주는 포트폴리오 사이트!",
          tasks: [
            "포트폴리오 사이트 기획 (소개, 프로젝트, 기술스택, 연락처)",
            "AI에게 '개발자 포트폴리오 사이트 만들어줘' 요청",
            "5개 프로젝트 정보 넣기",
          ],
        },
        {
          day: 52,
          title: "포트폴리오 완성 & 배포",
          emoji: "🚀",
          description:
            "포트폴리오를 배포하고 GitHub 프로필을 정리해요",
          tasks: [
            "포트폴리오 Vercel 배포",
            "GitHub 프로필 README 작성",
            "각 프로젝트 README 최종 정리",
          ],
          tools: ["Vercel", "GitHub"],
        },
        {
          day: 53,
          title: "코드 품질 개선",
          emoji: "✨",
          description: "5개 프로젝트 코드를 깔끔하게 정리해요",
          tasks: [
            "코드 리팩토링이란? (동작은 같지만 코드를 깔끔하게 다시 쓰는 것)",
            "AI에게 '이 코드 개선해줘' 요청하기",
            "각 프로젝트에서 가장 지저분한 부분 1개씩 개선",
          ],
        },
        {
          day: 54,
          title: "프로젝트별 개선점 추가",
          emoji: "💡",
          description:
            "각 프로젝트에 한 가지씩 새 기능을 추가해요",
          tasks: [
            "프로젝트 1: 애니메이션 추가",
            "프로젝트 2: 댓글 기능 추가",
            "프로젝트 3~5: 자유롭게 개선",
          ],
        },
        {
          day: 55,
          title: "기술 블로그 글 쓰기",
          emoji: "✍️",
          description:
            "배운 것을 글로 정리하면 실력이 두 배가 돼요!",
          tasks: [
            "'바이브코딩으로 3개월만에 5개 프로젝트 만든 후기' 글 쓰기",
            "가장 어려웠던 기술과 극복 방법 공유",
            "블로그에 올리기",
          ],
          tip: "개발자의 실력은 코드 + 글쓰기! 기술 블로그가 최고의 이력서예요",
        },
      ],
    },
    {
      week: 12,
      theme: "마무리 & 수료!",
      emoji: "🎓",
      days: [
        {
          day: 56,
          title: "전체 기술 스택 정리",
          emoji: "🗺️",
          description:
            "3개월간 배운 모든 기술을 한눈에 정리해요",
          tasks: [
            "기술 스택 맵 만들기 (프론트엔드, 백엔드, AI, 배포, 도구)",
            "각 기술별 한 줄 정리",
            "자신있는 기술 / 더 배울 기술 분류",
          ],
        },
        {
          day: 57,
          title: "개발자 커뮤니티 참여",
          emoji: "👥",
          description:
            "혼자 공부 끝! 커뮤니티에서 함께 성장해요",
          tasks: [
            "개발자 디스코드/오픈카톡 참여하기",
            "내 프로젝트 공유하고 피드백 받기",
            "다른 사람의 프로젝트에 피드백 남기기",
          ],
        },
        {
          day: 58,
          title: "다음 목표 설정",
          emoji: "🎯",
          description: "3개월 이후의 방향을 정해요",
          tasks: [
            "관심 분야 선택: 프론트엔드? 백엔드? AI? 풀스택?",
            "다음 3개월 학습 계획 세우기",
            "도전할 새 프로젝트 아이디어 정리",
          ],
        },
        {
          day: 59,
          title: "최종 포트폴리오 점검",
          emoji: "🔍",
          description:
            "모든 프로젝트가 잘 돌아가는지 최종 점검!",
          tasks: [
            "5개 프로젝트 URL 모두 접속 확인",
            "모바일에서 전부 테스트",
            "GitHub 프로필 & 포트폴리오 최종 확인",
          ],
        },
        {
          day: 60,
          title: "수료! 🎉🎓",
          emoji: "🎓",
          description:
            "축하합니다! 3개월 바이브코딩 마스터 과정 수료!",
          tasks: [
            "3개월 학습 여정 회고 작성",
            "완성한 5개 프로젝트 + 포트폴리오 자랑하기!",
            "이제 진짜 바이브코더! 다음 여정을 시작해요!",
          ],
          tip: "축하합니다! 🎉🎓 3개월 전에는 코딩을 몰랐는데, 지금은 5개 프로젝트를 가진 바이브코더예요! 정말 대단해요!",
        },
      ],
    },
  ],
};

export const curriculum: CurriculumMonth[] = [month1, month2, month3];
