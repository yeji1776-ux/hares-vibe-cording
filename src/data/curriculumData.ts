export interface CurriculumDay {
  day: number;
  title: string;
  description: string;
  emoji: string;
  tasks: { task: string; detail: string }[];
  tools?: string[];
  tip?: string;
  content: string;
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
              {
                task: "개발 프로세스란? 기획 → 디자인 → 개발 → 배포 4단계 이해하기",
                detail: "앱을 만드는 과정은 크게 4단계예요. 먼저 '기획'에서 뭘 만들지 정하고, '디자인'에서 어떻게 생겼는지 그리고, '개발'에서 진짜 코드를 짜고, '배포'에서 인터넷에 올려요. 마치 요리할 때 레시피 정하기 → 재료 준비 → 요리하기 → 서빙하기와 같아요!"
              },
              {
                task: "SaaS가 뭔지 알아보기 (매달 돈 내고 쓰는 서비스, 예: 넷플릭스)",
                detail: "SaaS는 'Software as a Service'의 줄임말로, 매달 돈을 내고 쓰는 서비스예요. 넷플릭스, 노션, 피그마가 대표적이에요. 우리가 만들 랜딩 페이지는 이런 서비스의 '첫인상' 역할을 해요!"
              },
              {
                task: "잘 만든 SaaS 랜딩 페이지 5개 구경하기 (어떤 구성인지 관찰)",
                detail: "잘 만든 사이트를 구경하면 어떤 구성이 좋은지 감이 와요. 히어로 섹션(첫 화면), 기능 소개, 가격표, CTA(시작하기 버튼) 같은 공통 패턴을 관찰해보세요."
              },
            ],
          tools: ["브라우저"],
          tip: "개발은 요리와 같아요! 레시피(기획) → 재료손질(디자인) → 요리(개발) → 서빙(배포)",
          content: `## 개발 프로세스란? 🏗️

앱을 만드는 건 집을 짓는 것과 비슷해요!

**1단계: 기획** 📋
"어떤 집을 지을까?" - 어떤 기능이 필요한지 정리해요. 예를 들어 "로그인 기능이 필요해", "글을 쓸 수 있어야 해" 이런 걸 목록으로 만들어요.

**2단계: 디자인** 🎨
"집 설계도 그리기" - 화면이 어떻게 생겼는지 그려봐요. 버튼은 어디에 놓을지, 색은 뭘 쓸지 정해요.

**3단계: 개발** 💻
"실제로 집 짓기" - 코드를 작성해서 만들어요. HTML, CSS, JavaScript 같은 언어를 사용해요.

**4단계: 배포** 🚀
"입주하기" - 인터넷에 올려서 누구나 볼 수 있게 해요. Vercel 같은 서비스를 사용하면 무료로 가능!

> 💡 **SaaS란?** 매달 돈을 내고 쓰는 서비스예요. 넷플릭스(영상), 노션(메모), 피그마(디자인)가 대표적인 SaaS! 우리도 이런 서비스의 "얼굴"인 랜딩 페이지를 만들 거예요.`,
        },
        {
          day: 2,
          title: "스티치디자인으로 디자인하기",
          emoji: "✂️",
          description:
            "코딩 없이 디자인 먼저! 스티치디자인으로 예쁜 페이지 만들기",
          tasks: [
              {
                task: "스티치디자인이 뭔지 알아보기 (AI가 웹 디자인을 만들어주는 도구)",
                detail: "스티치디자인은 AI가 웹 디자인을 자동으로 만들어주는 도구예요. '이런 페이지 만들어줘'라고 말하면 뚝딱 디자인을 만들어줘요! 코딩 없이 디자인부터 시작할 수 있어요."
              },
              {
                task: "스티치디자인 가입하고 둘러보기",
                detail: "가입은 무료이고, 사이트에 접속해서 이리저리 클릭해보며 어떤 기능이 있는지 파악해봐요. 처음엔 구경만 해도 괜찮아요!"
              },
              {
                task: "우리 SaaS 랜딩 페이지 디자인 만들기 (히어로, 기능소개, 가격표, CTA)",
                detail: "랜딩 페이지에 꼭 들어가야 할 4가지 섹션이 있어요. 히어로(첫 화면에서 눈길을 사로잡는 부분), 기능소개, 가격표, CTA(Call To Action, 행동을 유도하는 버튼)예요."
              },
            ],
          tools: ["스티치디자인"],
          tip: "스티치디자인 = AI 디자이너! 말로 설명하면 디자인을 만들어줘요",
          content: `## 스티치디자인으로 디자인하기 ✂️

코딩을 하기 전에, 먼저 **어떻게 생겼는지** 그려봐야 해요!

**스티치디자인이란?** 🤖
AI가 웹 디자인을 만들어주는 도구예요. 말로 "이런 페이지 만들어줘"라고 하면 뚝딱 만들어줘요!

**사용 방법:**
1. 스티치디자인 사이트에 가입해요
2. "SaaS 랜딩 페이지 만들어줘"라고 요청해요
3. AI가 만들어준 디자인을 수정해요

**좋은 요청 예시:** ✅
"파란색 테마의 프로젝트 관리 SaaS 랜딩 페이지를 만들어줘. 히어로 섹션, 기능 소개 3개, 가격표, 시작하기 버튼이 필요해."

**나쁜 요청 예시:** ❌
"페이지 하나 만들어줘" (너무 막연해요!)

> 💡 디자인에서 중요한 4가지 섹션: **히어로**(첫 화면), **기능소개**(뭘 할 수 있는지), **가격표**(얼마인지), **CTA**(시작하기 버튼)`,
        },
        {
          day: 3,
          title: "안티그래비티로 코드 만들기",
          emoji: "🚀",
          description: "디자인을 진짜 웹사이트 코드로 변환해요!",
          tasks: [
              {
                task: "안티그래비티가 뭔지 알아보기 (디자인 → 코드를 자동으로 바꿔주는 도구)",
                detail: "안티그래비티는 디자인 파일을 넣으면 자동으로 HTML/CSS 코드를 만들어주는 도구예요. 그림을 넣으면 진짜 웹사이트 코드가 나오는 마법 같은 도구!"
              },
              {
                task: "안티그래비티에 디자인 넣고 코드 생성하기",
                detail: "스티치디자인에서 만든 디자인을 안티그래비티에 넣으면 코드가 자동 생성돼요. 복잡한 코딩 없이 디자인을 실제 웹사이트로 바꿀 수 있어요."
              },
              {
                task: "생성된 코드 살펴보기 (HTML, CSS 구조 이해)",
                detail: "HTML은 웹사이트의 뼈대(구조), CSS는 옷(스타일)이에요. 생성된 코드를 눈으로 읽어보면서 어떤 부분이 어떤 역할을 하는지 감을 잡아봐요."
              },
            ],
          tools: ["안티그래비티"],
          content: `## 안티그래비티로 코드 만들기 🚀

디자인을 진짜 웹사이트로 바꿔주는 마법 도구!

**안티그래비티란?**
디자인 파일을 넣으면 **자동으로 HTML/CSS 코드**를 만들어주는 도구예요. 그림을 넣으면 진짜 웹사이트가 나와요!

**HTML이란?** 🏠
웹사이트의 **뼈대**예요. "여기에 제목, 여기에 버튼, 여기에 이미지"를 정해줘요.

\`\`\`html
<h1>우리 서비스에 오신 걸 환영해요!</h1>
<p>최고의 프로젝트 관리 도구입니다.</p>
<button>시작하기</button>
\`\`\`

**CSS란?** 🎨
웹사이트의 **옷**이에요. "제목은 파란색, 버튼은 둥글게, 배경은 하얀색"을 정해줘요.

\`\`\`css
h1 { color: blue; font-size: 32px; }
button { background: blue; color: white; border-radius: 8px; }
\`\`\`

> 💡 안티그래비티가 이 코드를 자동으로 만들어줘요! 우리는 결과를 확인하고 수정만 하면 돼요.`,
        },
        {
          day: 4,
          title: "에이전트 개발이란?",
          emoji: "🤖",
          description: "AI 에이전트가 알아서 코딩해주는 새로운 개발 방법!",
          tasks: [
              {
                task: "에이전트 개발이란? (AI가 스스로 생각하고 코드를 짜는 것)",
                detail: "에이전트 개발은 AI가 스스로 생각하고 직접 코드를 짜주는 새로운 개발 방법이에요. 일반 AI는 답만 알려주지만, 에이전트 AI는 직접 파일을 열고 수정하고 저장까지 해줘요!"
              },
              {
                task: "안티그래비티의 AI 에이전트가 코드를 개선하게 해보기",
                detail: "안티그래비티 안에 있는 AI 에이전트에게 '코드를 개선해줘'라고 요청하면, AI가 직접 코드를 분석하고 수정해줘요. 인테리어 상담사가 아니라 시공팀처럼요!"
              },
              {
                task: "에이전트에게 '반응형으로 만들어줘' 요청하기",
                detail: "'반응형'은 핸드폰, 태블릿, 컴퓨터 등 어떤 화면에서도 예쁘게 보이게 만드는 거예요. 에이전트에게 부탁하면 알아서 코드를 수정해줘요."
              },
            ],
          tools: ["안티그래비티"],
          tip: "에이전트 = 스스로 판단하는 AI! '이것도 수정하고 저것도 수정해'라고 하면 알아서 해줘요",
          content: `## 에이전트 개발이란? 🤖

AI가 스스로 생각하고 코드를 짜는 새로운 개발 방법!

**일반 AI vs 에이전트 AI:**
- **일반 AI:** "이 코드 고쳐줘" → 답만 줌 (복붙해야 함)
- **에이전트 AI:** "이 코드 고쳐줘" → 직접 파일을 열고, 수정하고, 저장까지 함!

**쉬운 비유:** 🏠
- 일반 AI = 인테리어 상담사 (조언만 해줌)
- 에이전트 AI = 인테리어 시공팀 (직접 다 해줌!)

**에이전트에게 요청하는 예시:**
\`\`\`
"이 랜딩 페이지를 반응형으로 만들어줘.
모바일에서는 메뉴가 햄버거 버튼으로 바뀌어야 하고,
이미지는 화면 너비에 맞게 줄어들어야 해."
\`\`\`

에이전트는 이 요청을 받으면:
1. 현재 코드를 분석하고 📖
2. 어떻게 수정할지 계획을 세우고 📝
3. 직접 코드를 수정해요! ✨

> 💡 **바이브코딩**이 바로 이거예요! AI 에이전트에게 "이런 거 만들어줘"하면 알아서 코딩해주는 개발 방법!`,
        },
        {
          day: 5,
          title: "랜딩 페이지 완성 & 배포",
          emoji: "🎉",
          description: "첫 번째 프로젝트 완성! 세상에 공개해요!",
          tasks: [
              {
                task: "GitHub에 코드 올리기",
                detail: "GitHub은 코드를 저장하는 온라인 금고예요. 내 코드를 안전하게 보관하고, 다른 사람에게 보여줄 수 있어요. git init, git add, git commit, git push 명령어를 써요."
              },
              {
                task: "Vercel로 배포하기",
                detail: "Vercel은 코드를 인터넷에 올려주는 무료 서비스예요. GitHub에 코드를 올리면 Vercel이 자동으로 웹사이트를 만들어줘요. 클릭 몇 번이면 끝!"
              },
              {
                task: "내 랜딩 페이지 URL 공유하기!",
                detail: "배포가 완료되면 'https://내프로젝트.vercel.app' 같은 URL이 생겨요. 이 주소를 친구에게 보내면 누구나 볼 수 있어요. 첫 웹사이트 완성 축하해요!"
              },
            ],
          tools: ["GitHub", "Vercel"],
          tip: "축하해요! 첫 SaaS 랜딩 페이지 완성! 🎉 URL을 친구에게 보내보세요!",
          content: `## 랜딩 페이지 완성 & 배포! 🎉

드디어 첫 번째 프로젝트를 세상에 공개해요!

**GitHub란?** 🐙
코드를 저장하는 **온라인 금고**예요. 내 코드를 안전하게 보관하고, 다른 사람에게 보여줄 수 있어요.

**Vercel이란?** ▲
코드를 **인터넷에 올려주는 서비스**예요. GitHub에 코드를 올리면 Vercel이 자동으로 웹사이트를 만들어줘요!

**배포 3단계:**

1️⃣ **GitHub에 코드 올리기**
\`\`\`bash
git init
git add .
git commit -m "첫 번째 프로젝트 완성!"
git push
\`\`\`

2️⃣ **Vercel에 연결하기**
- vercel.com 가입 → GitHub 연결 → 프로젝트 선택 → Deploy!

3️⃣ **URL 받기!**
- \`https://내프로젝트.vercel.app\` 같은 주소가 생겨요!

> 💡 이제 이 URL을 친구에게 보내면 누구나 볼 수 있어요! 첫 웹사이트 완성을 축하해요! 🎊`,
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
              {
                task: "풀스택이란? 프론트엔드(화면) + 백엔드(서버) 둘 다 만드는 것",
                detail: "풀스택이란 프론트엔드(사용자가 보는 화면)와 백엔드(데이터 저장, 처리 등 보이지 않는 부분) 둘 다 만드는 거예요. 팬케이크처럼 층층이 쌓여있어서 '스택'이라고 불러요."
              },
              {
                task: "블로그에 필요한 기능 정리 (글 목록, 글 쓰기, 글 읽기)",
                detail: "블로그에는 글 목록 보기, 글 쓰기, 글 읽기 기능이 필요해요. 이런 기능들을 미리 정리해두면 개발할 때 빠뜨리는 게 없어요."
              },
              {
                task: "React + Supabase로 만들 거라는 큰 그림 이해하기",
                detail: "React는 화면을 만드는 도구, Supabase는 데이터를 저장하는 도구예요. 이 두 가지를 합치면 화면도 있고 데이터도 저장되는 완전한 블로그를 만들 수 있어요!"
              },
            ],
          content: `## 풀스택 개발 이해하기 🥞

웹사이트는 **앞면**과 **뒷면** 두 부분으로 나뉘어요!

**프론트엔드 (앞면)** 🖥️
사용자가 보는 화면이에요. 버튼, 글자, 이미지 등 눈에 보이는 모든 것!
- HTML, CSS, JavaScript, React를 사용해요

**백엔드 (뒷면)** ⚙️
사용자가 못 보는 부분이에요. 데이터 저장, 로그인 처리, 계산 등을 해요.
- 서버, 데이터베이스를 사용해요

**풀스택 = 앞면 + 뒷면 둘 다!** 🥞
팬케이크처럼 층층이 쌓여있어서 "스택"이라고 불러요.

**블로그에 필요한 것:**
\`\`\`
프론트엔드: 글 목록 보기, 글 읽기, 글 쓰기 화면
백엔드: 글 데이터 저장, 불러오기, 수정, 삭제
\`\`\`

우리는 **React**(프론트엔드) + **Supabase**(백엔드)로 만들 거예요!

> 💡 Supabase를 쓰면 백엔드를 직접 코딩하지 않아도 돼요. 초보자에게 딱!`,
        },
        {
          day: 7,
          title: "Supabase 시작하기",
          emoji: "💚",
          description: "무료 데이터베이스 서비스 Supabase를 세팅해요",
          tasks: [
              {
                task: "Supabase가 뭔지 알아보기 (무료 데이터베이스 + 서버를 제공하는 서비스)",
                detail: "Supabase는 무료로 데이터베이스, 로그인, 파일 저장을 제공하는 서비스예요. 백엔드를 직접 코딩하지 않아도 서버가 생기니까 초보자에게 딱이에요!"
              },
              {
                task: "Supabase 가입하고 새 프로젝트 만들기",
                detail: "supabase.com에 가입하고 'New Project'를 만들어요. 지역은 'Northeast Asia (Seoul)'을 선택하면 한국에서 빠르게 접속할 수 있어요."
              },
              {
                task: "데이터베이스란? (엑셀처럼 표로 데이터를 저장하는 곳)",
                detail: "데이터베이스는 엑셀처럼 표(테이블)로 데이터를 저장하는 곳이에요. 행은 데이터 한 줄, 열은 항목(제목, 내용 등)이에요."
              },
            ],
          tools: ["Supabase"],
          tip: "Supabase = 무료 백엔드! 데이터 저장, 로그인, 파일 업로드를 다 해줘요",
          content: `## Supabase 시작하기 💚

백엔드를 쉽게 만들어주는 마법 도구!

**Supabase란?**
무료로 데이터베이스, 로그인, 파일 저장을 제공하는 서비스예요. 백엔드 코딩 없이도 서버가 생겨요!

**데이터베이스란?** 📊
엑셀처럼 **표(테이블)로 데이터를 저장하는 곳**이에요.

| id | title | content | created_at |
|----|-------|---------|------------|
| 1 | 첫 글 | 안녕하세요! | 2024-01-01 |
| 2 | 두번째 | 반갑습니다! | 2024-01-02 |

**Supabase 시작하기:**
1. supabase.com 가입하기
2. "New Project" 클릭
3. 프로젝트 이름, 비밀번호 설정
4. 지역은 "Northeast Asia (Seoul)" 선택!

**Supabase가 제공하는 것들:**
- 🗄️ **Database** - 데이터 저장 (엑셀 같은 표)
- 🔐 **Auth** - 로그인/회원가입
- 📁 **Storage** - 이미지/파일 저장
- 🔌 **API** - 프론트엔드와 연결

> 💡 Supabase는 무료 플랜으로도 충분해요! 개인 프로젝트에 딱이에요.`,
        },
        {
          day: 8,
          title: "데이터베이스 테이블 만들기",
          emoji: "📊",
          description: "블로그 글을 저장할 표(테이블)를 만들어요",
          tasks: [
              {
                task: "Supabase에서 'posts' 테이블 만들기 (id, title, content, created_at)",
                detail: "posts 테이블은 블로그 글을 저장하는 표예요. id(글 번호), title(제목), content(내용), created_at(작성 시간) 4개의 열이 필요해요. Supabase의 Table Editor에서 쉽게 만들 수 있어요."
              },
              {
                task: "테이블에 샘플 데이터 3개 직접 넣어보기",
                detail: "테이블을 만들었으면 샘플 데이터를 직접 넣어봐요. 빈 테이블로는 개발하기 어려우니까 테스트용 글 3개를 미리 넣어두면 좋아요."
              },
              {
                task: "Supabase에서 데이터 조회해보기",
                detail: "Supabase 대시보드에서 테이블을 클릭하면 저장된 데이터를 바로 확인할 수 있어요. 엑셀처럼 직관적이라 편해요!"
              },
            ],
          tools: ["Supabase"],
          content: `## 데이터베이스 테이블 만들기 📊

블로그 글을 저장할 표(테이블)를 만들어봐요!

**테이블이란?**
엑셀의 시트 하나라고 생각하면 돼요. **열(Column)**은 항목, **행(Row)**은 데이터 한 줄이에요.

**posts 테이블 만들기:**

| 열 이름 | 데이터 타입 | 설명 |
|---------|-----------|------|
| id | int8 (숫자) | 글 번호 (자동 생성) |
| title | text (글자) | 글 제목 |
| content | text (글자) | 글 내용 |
| created_at | timestamp (시간) | 작성 시간 (자동 생성) |

**Supabase에서 만드는 방법:**
1. Table Editor 클릭
2. "New Table" 클릭
3. 이름: \`posts\` 입력
4. 열 추가: title(text), content(text)
5. Save!

**데이터 넣어보기 (SQL):**
\`\`\`sql
INSERT INTO posts (title, content)
VALUES ('첫 번째 글', '안녕하세요! 블로그를 시작합니다!');
\`\`\`

> 💡 SQL은 데이터베이스와 대화하는 언어예요. INSERT = 넣기, SELECT = 가져오기!`,
        },
        {
          day: 9,
          title: "RLS (행 수준 보안) 이해하기",
          emoji: "🔒",
          description: "내 글은 나만 수정할 수 있게! 보안 규칙 설정하기",
          tasks: [
              {
                task: "RLS가 뭔지 알아보기 (Row Level Security = 줄마다 보안 규칙을 거는 것)",
                detail: "RLS(Row Level Security)는 데이터베이스의 각 줄(행)마다 보안 규칙을 거는 기능이에요. '이 글은 이 사람만 수정할 수 있어'처럼 권한을 세밀하게 관리할 수 있어요."
              },
              {
                task: "쉬운 비유: 아파트 현관문 + 개인 방문 = RLS",
                detail: "아파트에 비유하면, 현관문(로그인)으로 주민만 들어오고, 각 집의 방문(RLS)으로 내 방은 나만 들어갈 수 있는 거예요. 공용 공간(공개 데이터)은 누구나 볼 수 있고요."
              },
              {
                task: "'누구나 읽기 가능, 작성자만 수정/삭제 가능' 정책 만들기",
                detail: "'누구나 글을 읽을 수 있고, 글 작성자만 수정/삭제할 수 있다'는 정책을 SQL로 만들어요. RLS가 없으면 아무나 남의 글을 지울 수 있으니 보안이 정말 중요해요!"
              },
            ],
          tools: ["Supabase"],
          tip: "RLS = 데이터의 자물쇠! '이 줄은 이 사람만 볼 수 있어요' 같은 규칙이에요",
          content: `## RLS (행 수준 보안) 이해하기 🔒

내 글은 나만 수정할 수 있게! 보안 규칙을 만들어요.

**RLS란?**
Row Level Security = 줄(행)마다 보안 규칙을 거는 것!

**아파트 비유:** 🏢
- 아파트 **현관문** = 로그인 (아파트 주민만 들어올 수 있음)
- 각 집의 **방문** = RLS (내 방은 나만 들어갈 수 있음)
- 로비, 놀이터 = 공개 데이터 (누구나 볼 수 있음)

**우리 블로그의 RLS 규칙:**
\`\`\`sql
-- 누구나 글을 읽을 수 있어요 (SELECT)
CREATE POLICY "글 읽기는 모두 가능"
ON posts FOR SELECT
TO public
USING (true);

-- 글 작성자만 수정할 수 있어요 (UPDATE)
CREATE POLICY "내 글만 수정 가능"
ON posts FOR UPDATE
USING (auth.uid() = user_id);
\`\`\`

**RLS 설정 방법:**
1. Supabase → Authentication → Policies
2. "Enable RLS" 클릭
3. "New Policy" 만들기

> 💡 RLS 없으면 아무나 남의 글을 삭제할 수 있어요! 보안은 정말 중요해요!`,
        },
        {
          day: 10,
          title: "React로 블로그 화면 만들기",
          emoji: "⚛️",
          description: "AI에게 블로그 UI를 만들어달라고 요청해요",
          tasks: [
              {
                task: "React 프로젝트 생성 (Vite + React + Tailwind)",
                detail: "React 프로젝트를 만들려면 터미널에서 npm create vite@latest 명령어를 써요. Vite는 프로젝트를 빠르게 만들어주는 도구이고, Tailwind CSS는 클래스 이름으로 스타일을 입히는 도구예요."
              },
              {
                task: "AI에게 '블로그 글 목록 페이지 만들어줘' 요청",
                detail: "AI에게 '블로그 글 목록 페이지를 React로 만들어줘. 카드 형태로 보여줘'라고 구체적으로 요청하면 좋은 결과를 받을 수 있어요."
              },
              {
                task: "Supabase에서 데이터 가져와서 화면에 보여주기",
                detail: "Supabase에서 데이터를 가져오는 코드는 supabase.from('posts').select('*')예요. 이 코드로 모든 글을 가져와서 화면에 보여줄 수 있어요."
              },
            ],
          tools: ["React", "Supabase", "Claude"],
          content: `## React로 블로그 화면 만들기 ⚛️

드디어 진짜 블로그 화면을 만들어요!

**React란?**
웹사이트 화면을 **레고 블록처럼** 조립해서 만드는 도구예요. 각 블록을 **컴포넌트**라고 불러요.

**컴포넌트 예시:**
\`\`\`jsx
function BlogPost({ title, content }) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
\`\`\`

**프로젝트 만들기:**
\`\`\`bash
npm create vite@latest my-blog -- --template react
cd my-blog
npm install @supabase/supabase-js
npm run dev
\`\`\`

**Supabase에서 데이터 가져오기:**
\`\`\`javascript
import { supabase } from './supabaseClient';

const { data: posts } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false });
\`\`\`

> 💡 AI에게 "블로그 글 목록 페이지를 React로 만들어줘. Supabase에서 데이터를 가져와서 카드 형태로 보여줘"라고 요청하면 뚝딱 만들어줘요!`,
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
              {
                task: "글쓰기 폼 만들기 (제목, 내용 입력)",
                detail: "폼(Form)은 사용자가 정보를 입력하는 칸이에요. 제목 입력칸, 내용 입력칸, 저장 버튼으로 구성돼요. HTML의 input과 textarea 태그를 써요."
              },
              {
                task: "Supabase에 글 저장하는 코드 작성",
                detail: "supabase.from('posts').insert()로 데이터를 저장해요. 엑셀에 새 줄을 추가하는 것과 같아요! useState로 입력값을 관리하면 입력이 바뀔 때마다 자동 업데이트돼요."
              },
              {
                task: "저장 후 목록으로 돌아가기",
                detail: "글을 저장한 후에는 navigate('/')로 목록 페이지로 이동시켜요. 사용자가 저장이 잘 됐다는 걸 바로 확인할 수 있어야 해요."
              },
            ],
          content: `## 글쓰기 기능 만들기 📝

블로그에 새 글을 쓰는 기능을 만들어요!

**폼(Form)이란?**
사용자가 정보를 입력하는 칸이에요. 제목 칸, 내용 칸, 저장 버튼으로 구성해요.

**글쓰기 폼 코드:**
\`\`\`jsx
function WritePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    await supabase.from('posts').insert({
      title: title,
      content: content,
    });
    // 저장 완료! 목록으로 이동
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)}
             placeholder="제목을 입력하세요" />
      <textarea value={content} onChange={e => setContent(e.target.value)}
                placeholder="내용을 입력하세요" />
      <button type="submit">저장하기</button>
    </form>
  );
}
\`\`\`

**useState란?** 화면에 보이는 값을 기억하는 상자예요. 입력칸에 글을 쓰면 자동으로 업데이트돼요!

> 💡 \`supabase.from('posts').insert()\`가 데이터를 Supabase에 저장해요. 엑셀에 새 줄 추가하는 것과 같아요!`,
        },
        {
          day: 12,
          title: "수정 & 삭제 기능",
          emoji: "✏️",
          description: "CRUD의 U(수정)와 D(삭제)를 완성해요",
          tasks: [
              {
                task: "CRUD란? Create(생성), Read(읽기), Update(수정), Delete(삭제)",
                detail: "CRUD는 데이터를 다루는 4가지 기본 동작이에요. Create(만들기), Read(읽기), Update(수정), Delete(삭제)! 거의 모든 앱이 이 4가지로 이루어져 있어요."
              },
              {
                task: "글 수정 기능 추가하기",
                detail: "수정은 supabase.from('posts').update().eq('id', id)로 해요. eq('id', id)는 '이 번호의 글만 수정해'라는 뜻이에요."
              },
              {
                task: "글 삭제 기능 추가하기 (확인 모달 포함)",
                detail: "삭제는 되돌릴 수 없으니 '정말 삭제할까요?' 확인 창을 꼭 넣어야 해요. confirm() 함수를 쓰면 확인 팝업이 뜨고, 확인을 눌러야 삭제돼요."
              },
            ],
          content: `## 수정 & 삭제 기능 ✏️

CRUD를 완성해요! 데이터를 다루는 4가지 기본 동작이에요.

**CRUD란?**
- **C**reate = 만들기 (글 쓰기) ✅ 어제 완료!
- **R**ead = 읽기 (글 목록, 글 보기) ✅ 이미 완료!
- **U**pdate = 수정하기 (글 고치기) 👈 오늘!
- **D**elete = 삭제하기 (글 지우기) 👈 오늘!

**글 수정 코드:**
\`\`\`javascript
const updatePost = async (id, newTitle, newContent) => {
  await supabase
    .from('posts')
    .update({ title: newTitle, content: newContent })
    .eq('id', id);  // id가 일치하는 글만 수정
};
\`\`\`

**글 삭제 코드:**
\`\`\`javascript
const deletePost = async (id) => {
  if (confirm('정말 삭제할까요?')) {  // 확인 물어보기
    await supabase
      .from('posts')
      .delete()
      .eq('id', id);  // id가 일치하는 글만 삭제
  }
};
\`\`\`

> 💡 삭제는 되돌릴 수 없으니 꼭 "정말 삭제할까요?" 확인 창을 넣어야 해요!`,
        },
        {
          day: 13,
          title: "로그인 기능 추가",
          emoji: "🔐",
          description: "Supabase Auth로 구글 로그인을 넣어요",
          tasks: [
              {
                task: "Supabase Auth가 뭔지 알아보기 (로그인 기능을 쉽게 만들어주는 것)",
                detail: "Supabase Auth는 로그인 기능을 코드 몇 줄로 만들어주는 서비스예요. 직접 만들면 일주일 걸리지만, Supabase Auth를 쓰면 하루면 돼요!"
              },
              {
                task: "구글 로그인 설정하기",
                detail: "Google Cloud Console에서 OAuth 키를 발급받고, Supabase Authentication 설정에서 Google을 활성화하면 돼요. signInWithOAuth 함수 한 줄이면 구글 로그인 완성!"
              },
              {
                task: "로그인한 사람만 글 쓸 수 있게 만들기",
                detail: "user가 있으면 '글 쓰기' 버튼을 보여주고, 없으면 '로그인' 버튼을 보여줘요. 이렇게 하면 로그인한 사람만 글을 쓸 수 있어요."
              },
            ],
          tools: ["Supabase Auth"],
          content: `## 로그인 기능 추가 🔐

구글 계정으로 간편하게 로그인! Supabase Auth가 다 해줘요.

**Supabase Auth란?**
로그인/회원가입 기능을 **코드 몇 줄**로 만들어주는 서비스! 구글, GitHub, 카카오 로그인 등을 쉽게 추가할 수 있어요.

**구글 로그인 코드:**
\`\`\`javascript
// 구글 로그인 버튼 클릭 시
const handleGoogleLogin = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
};

// 로그아웃
const handleLogout = async () => {
  await supabase.auth.signOut();
};

// 현재 로그인한 사용자 확인
const { data: { user } } = await supabase.auth.getUser();
\`\`\`

**설정 방법:**
1. Supabase → Authentication → Providers
2. Google 활성화
3. Google Cloud Console에서 OAuth 키 발급
4. 키를 Supabase에 입력

**로그인한 사람만 글 쓸 수 있게:**
\`\`\`jsx
{user ? <button>글 쓰기</button> : <button onClick={handleGoogleLogin}>로그인</button>}
\`\`\`

> 💡 로그인 기능을 직접 만들면 일주일 걸리지만, Supabase Auth 쓰면 하루면 돼요!`,
        },
        {
          day: 14,
          title: "블로그 꾸미기 & 반응형",
          emoji: "🎨",
          description: "모바일에서도 예쁘게 보이도록 다듬어요",
          tasks: [
              {
                task: "Tailwind CSS로 디자인 개선",
                detail: "Tailwind CSS는 클래스 이름만 쓰면 스타일이 적용되는 도구예요. 'text-xl'은 글씨 크기, 'bg-blue-500'은 배경색 같은 식이에요. CSS 파일을 따로 안 만들어도 돼요!"
              },
              {
                task: "모바일/태블릿/데스크톱 반응형 확인",
                detail: "반응형은 화면 크기에 따라 레이아웃이 자동으로 바뀌는 거예요. Tailwind에서 sm:, md:, lg: 접두어를 쓰면 핸드폰, 태블릿, 컴퓨터에서 각각 다르게 보여줄 수 있어요."
              },
              {
                task: "다크모드 추가해보기",
                detail: "다크모드는 dark: 접두어를 쓰면 돼요. 예를 들어 'bg-white dark:bg-gray-900'이면 밝은 모드에서는 흰색, 다크모드에서는 짙은 회색 배경이에요."
              },
            ],
          tools: ["Tailwind CSS"],
          content: `## 블로그 꾸미기 & 반응형 🎨

모바일에서도 예쁘게 보이도록 다듬어요!

**반응형이란?**
화면 크기에 따라 레이아웃이 자동으로 바뀌는 것! 핸드폰, 태블릿, 컴퓨터 어디서든 잘 보여요.

**Tailwind CSS로 반응형 만들기:**
\`\`\`jsx
{/* sm: 모바일, md: 태블릿, lg: 데스크톱 */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {posts.map(post => (
    <div className="p-4 border rounded">{post.title}</div>
  ))}
</div>
\`\`\`

**다크모드 추가:**
\`\`\`jsx
{/* dark: 접두어로 다크모드 스타일 지정 */}
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  <h1>내 블로그</h1>
</div>
\`\`\`

**꿀팁 체크리스트:** ✅
- 글씨가 너무 작지 않은지 (최소 16px)
- 버튼이 손가락으로 누를 만큼 큰지
- 이미지가 화면을 넘어가지 않는지

> 💡 Tailwind CSS = 클래스 이름만 쓰면 스타일이 적용되는 마법! CSS 파일을 따로 안 만들어도 돼요.`,
        },
        {
          day: 15,
          title: "블로그 배포!",
          emoji: "🌍",
          description: "두 번째 프로젝트 완성! Vercel로 배포해요!",
          tasks: [
              {
                task: "GitHub에 코드 올리기",
                detail: "git add, git commit, git push로 코드를 GitHub에 올려요. 이미 한 번 해봤으니 이번엔 더 쉬울 거예요!"
              },
              {
                task: "Vercel로 배포하기",
                detail: "Vercel에 배포할 때 Supabase URL과 Key를 환경변수로 넣어줘야 해요. Settings → Environment Variables에서 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 추가하세요."
              },
              {
                task: "README.md 작성하기",
                detail: "README.md는 프로젝트 설명서예요. 어떤 기술을 쓰는지, 어떤 기능이 있는지 적어두면 나중에 다른 사람이 보거나 면접에서 보여줄 때 유용해요."
              },
            ],
          tools: ["GitHub", "Vercel"],
          tip: "프로젝트 2 완성! 이제 풀스택 개발자의 첫걸음을 뗐어요! 💪",
          content: `## 블로그 배포! 🌍

두 번째 프로젝트 완성! 풀스택 블로그를 세상에 공개해요!

**배포 전 체크리스트:** ✅
- 글 목록이 잘 보이나요?
- 글 쓰기/수정/삭제가 되나요?
- 로그인/로그아웃이 되나요?
- 모바일에서도 잘 보이나요?

**GitHub에 올리기:**
\`\`\`bash
git add .
git commit -m "블로그 프로젝트 완성 🎉"
git push origin main
\`\`\`

**Vercel 환경변수 설정:**
Supabase URL과 Key를 Vercel에 넣어줘야 해요!
- Settings → Environment Variables
- VITE_SUPABASE_URL = (수파베이스 URL)
- VITE_SUPABASE_ANON_KEY = (수파베이스 키)

**README.md 작성 팁:**
\`\`\`markdown
# 나의 블로그 📝
React + Supabase로 만든 풀스택 블로그

## 기능
- 글 쓰기/읽기/수정/삭제 (CRUD)
- 구글 로그인
- 반응형 디자인 & 다크모드
\`\`\`

> 💡 프로젝트 2 완성! 이제 여러분은 풀스택 개발을 할 수 있는 사람이에요! 🎊`,
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
              {
                task: "프로젝트 1에서 배운 것: 개발 프로세스, 스티치디자인, 안티그래비티, 에이전트",
                detail: "프로젝트 1에서는 개발 프로세스(기획→디자인→개발→배포), 스티치디자인, 안티그래비티, 에이전트 개발을 배웠어요. 이 개념들을 다시 한번 떠올려 보세요!"
              },
              {
                task: "프로젝트 2에서 배운 것: 풀스택, Supabase, RLS, CRUD, Auth",
                detail: "프로젝트 2에서는 풀스택 개발, Supabase, RLS, CRUD, Auth를 배웠어요. 특히 CRUD(만들기/읽기/수정/삭제)는 거의 모든 앱의 기본이에요."
              },
              {
                task: "모르는 개념 있으면 정리하기",
                detail: "모르는 개념이 있으면 부끄러워하지 말고 정리해봐요. 프로젝트를 만들면서 자연스럽게 익혀가는 거니까 지금 완벽하지 않아도 괜찮아요!"
              },
            ],
          content: `## 프로젝트 1~2 복습 📚

2주간 배운 내용을 정리하고 복습해요!

**프로젝트 1에서 배운 것:**
- 📋 개발 프로세스: 기획 → 디자인 → 개발 → 배포
- ✂️ 스티치디자인: AI로 디자인 만들기
- 🚀 안티그래비티: 디자인 → 코드 변환
- 🤖 에이전트 개발: AI가 직접 코딩하기
- 🎉 배포: GitHub + Vercel

**프로젝트 2에서 배운 것:**
- 🥞 풀스택: 프론트엔드 + 백엔드
- 💚 Supabase: 무료 데이터베이스 서비스
- 📊 테이블: 데이터를 표로 저장
- 🔒 RLS: 행 단위 보안
- ⚛️ React: 컴포넌트로 UI 만들기
- 📝 CRUD: 만들기/읽기/수정/삭제
- 🔐 Auth: 로그인 기능

**자가진단 퀴즈:**
1. SaaS란 무엇인가요?
2. CRUD의 4가지는?
3. RLS는 왜 필요한가요?
4. 프론트엔드와 백엔드의 차이는?

> 💡 모르는 게 있으면 걱정하지 마세요! 프로젝트를 만들면서 자연스럽게 익혀가는 거예요.`,
        },
        {
          day: 17,
          title: "프롬프트 엔지니어링",
          emoji: "💬",
          description: "AI에게 더 똑똑하게 요청하는 법을 배워요",
          tasks: [
              {
                task: "좋은 프롬프트 vs 나쁜 프롬프트 비교하기",
                detail: "같은 기능을 요청해도 프롬프트에 따라 결과가 천차만별이에요. '로그인 만들어줘'보다 'React + Supabase Auth로 구글 로그인 기능 만들어줘'처럼 구체적으로 쓰는 게 훨씬 좋아요."
              },
              {
                task: "구체적으로 요청하기 연습 (기술스택, 스타일, 기능 명시)",
                detail: "좋은 프롬프트 공식은 [역할] + [기술스택] + [구체적 기능] + [스타일]이에요. 예를 들어 '시니어 React 개발자처럼, React+Tailwind로, 카드형 글 목록을 만들어줘'처럼요."
              },
              {
                task: "에러가 났을 때 AI에게 물어보는 방법",
                detail: "에러가 났을 때는 에러 메시지를 그대로 복사해서 AI에게 보여주세요. '이 에러가 뭔지 설명해줘'라고 하면 원인과 해결 방법을 알려줘요."
              },
            ],
          tip: "프롬프트 잘 쓰는 공식: [역할] + [기술스택] + [구체적 기능] + [스타일]",
          content: `## 프롬프트 엔지니어링 💬

AI에게 더 똑똑하게 요청하는 법!

**프롬프트란?**
AI에게 보내는 **요청 메시지**예요. 프롬프트를 잘 쓰면 AI가 더 좋은 결과를 줘요!

**나쁜 프롬프트 vs 좋은 프롬프트:**

❌ 나쁜 예:
\`\`\`
"로그인 만들어줘"
\`\`\`

✅ 좋은 예:
\`\`\`
"React와 Supabase Auth를 사용해서 구글 로그인 기능을 만들어줘.
- 로그인 버튼은 우측 상단에 위치
- 로그인하면 사용자 이름을 보여줘
- 로그아웃 버튼도 필요해
- Tailwind CSS로 스타일링해줘"
\`\`\`

**프롬프트 공식:** 🧪
\`\`\`
[역할] + [기술스택] + [구체적 기능] + [스타일]

예: "시니어 React 개발자처럼,
    React + Tailwind CSS를 사용해서,
    글 목록을 카드 형태로 보여주는 컴포넌트를 만들어줘.
    모던하고 깔끔한 디자인으로 해줘."
\`\`\`

**에러 났을 때:**
에러 메시지를 그대로 복사해서 AI에게 보여주세요!

> 💡 프롬프트 = AI의 능력을 끌어내는 열쇠! 구체적일수록 좋은 결과가 나와요.`,
        },
        {
          day: 18,
          title: "Cursor IDE 마스터",
          emoji: "✨",
          description: "AI가 내장된 코드 에디터 Cursor 사용법을 익혀요",
          tasks: [
              {
                task: "Cursor 설치하기",
                detail: "Cursor는 VS Code에 AI를 합체시킨 코드 에디터예요. cursor.sh에서 다운로드하고 설치하면 됩니다. VS Code를 쓰던 사람이면 설정도 자동으로 가져올 수 있어요."
              },
              {
                task: "Cmd+K로 코드 생성, Cmd+L로 질문하기",
                detail: "Cmd+K는 코드를 생성/수정하는 단축키, Cmd+L은 AI와 대화하는 단축키예요. Cmd+K로 '에러 처리 추가해줘'하면 AI가 직접 코드를 수정해줘요!"
              },
              {
                task: "Tab 자동완성 활용하기",
                detail: "Tab 자동완성은 코드를 쓰다가 Tab을 누르면 AI가 다음 코드를 예측해서 완성해주는 기능이에요. 타이핑을 크게 줄여주니까 꼭 활용하세요!"
              },
            ],
          tools: ["Cursor"],
          content: `## Cursor IDE 마스터 ✨

AI가 내장된 코드 에디터! 코딩이 10배 빨라져요!

**Cursor란?**
VS Code(코드 편집기)에 **AI를 합체**시킨 도구예요. 코드를 쓰면서 바로 AI에게 물어볼 수 있어요!

**핵심 단축키 3가지:**

1️⃣ **Cmd+K** (코드 생성) ⌨️
코드 위에서 Cmd+K를 누르면 AI가 코드를 만들어줘요.
\`\`\`
Cmd+K → "이 함수에 에러 처리 추가해줘" → AI가 코드 수정!
\`\`\`

2️⃣ **Cmd+L** (질문하기) 💬
사이드바에서 AI와 대화할 수 있어요.
\`\`\`
Cmd+L → "이 코드가 뭐하는 건지 설명해줘" → AI가 설명!
\`\`\`

3️⃣ **Tab** (자동완성) ⚡
코드를 쓰다가 Tab을 누르면 AI가 다음 코드를 예측해서 완성해줘요!

**설치 방법:**
1. cursor.sh 접속
2. 다운로드 & 설치
3. VS Code 설정 자동 가져오기

> 💡 Cursor는 바이브코딩의 핵심 도구! AI가 옆에서 코딩을 도와주는 느낌이에요.`,
        },
        {
          day: 19,
          title: "Git & GitHub 심화",
          emoji: "🌿",
          description: "브랜치와 PR을 배워서 프로처럼 코드 관리해요",
          tasks: [
              {
                task: "브랜치란? (나뭇가지처럼 코드를 분리해서 작업하는 것)",
                detail: "브랜치는 코드를 나뭇가지처럼 분리해서 작업하는 기능이에요. 원본(main)은 안전하게 놔두고 새 기능을 따로 만들 수 있어요. 책의 수정 원고 같은 거예요!"
              },
              {
                task: "git branch, git checkout, git merge 연습",
                detail: "git branch로 브랜치를 만들고, git checkout으로 이동하고, git merge로 합쳐요. git checkout -b를 쓰면 만들기+이동을 한 번에 할 수 있어요."
              },
              {
                task: "Pull Request 만들어보기",
                detail: "Pull Request(PR)는 '내가 만든 코드를 봐주세요!'라고 요청하는 거예요. 회사에서는 항상 PR을 통해 코드를 합치니까, 이걸 알면 협업 준비 완료!"
              },
            ],
          tools: ["Git", "GitHub"],
          content: `## Git & GitHub 심화 🌿

브랜치와 PR을 배워서 프로처럼 코드 관리해요!

**브랜치란?**
나뭇가지처럼 코드를 **분리해서 작업**하는 것! 원본(main)은 안전하게 놔두고, 새 기능을 따로 만들어요.

**쉬운 비유:** 📖
- main = 출판된 책
- 브랜치 = 수정 원고 (마음대로 고칠 수 있음)
- merge = 수정 원고를 책에 반영하기

**핵심 명령어:**
\`\`\`bash
# 새 브랜치 만들기
git branch feature/login

# 브랜치로 이동하기
git checkout feature/login

# 한 번에 만들기 + 이동
git checkout -b feature/login

# 작업 완료 후 main에 합치기
git checkout main
git merge feature/login
\`\`\`

**Pull Request (PR)란?**
"내가 만든 코드를 봐주세요!" 라고 요청하는 것!
1. 브랜치에서 작업 완료
2. GitHub에 push
3. "Pull Request" 만들기
4. 코드 리뷰 받기
5. main에 합치기!

> 💡 회사에서는 항상 브랜치를 만들고 PR을 통해 코드를 합쳐요. 이걸 알면 협업 준비 완료!`,
        },
        {
          day: 20,
          title: "1개월차 회고 & 다음 달 준비",
          emoji: "🎯",
          description: "한 달간 배운 것을 정리하고 다음 목표를 세워요",
          tasks: [
              {
                task: "1개월 학습 회고 작성하기",
                detail: "한 달간 배운 것을 글로 정리하면 기억에 더 오래 남아요. 잘한 점, 어려웠던 점, 배운 핵심 기술을 솔직하게 적어보세요."
              },
              {
                task: "완성한 2개 프로젝트 포트폴리오에 정리",
                detail: "완성한 2개 프로젝트의 URL, 스크린샷, 사용 기술을 깔끔하게 정리해두세요. 나중에 포트폴리오에 그대로 쓸 수 있어요!"
              },
              {
                task: "2개월차 프로젝트 미리보기 (챗봇 & 대시보드)",
                detail: "2개월차에는 AI 챗봇(RAG + 벡터DB)과 쇼핑몰 대시보드를 만들어요. 더 재미있고 실용적인 프로젝트가 기다리고 있어요!"
              },
            ],
          tip: "벌써 프로젝트 2개 완성! 대단해요! 🔥",
          content: `## 1개월차 회고 & 다음 달 준비 🎯

한 달간의 여정을 돌아보고, 다음 목표를 세워요!

**1개월차 성과:** 🏆
- ✅ 프로젝트 1: SaaS 랜딩 페이지 완성 & 배포
- ✅ 프로젝트 2: 풀스택 블로그 완성 & 배포
- ✅ 도구: 스티치디자인, 안티그래비티, Supabase, React, Vercel
- ✅ 개념: 개발 프로세스, CRUD, RLS, Auth, Git

**회고 작성 가이드:**
\`\`\`markdown
## 1개월차 학습 회고 📝

### 잘한 점 👍
- (예: 매일 꾸준히 학습했다)

### 어려웠던 점 😅
- (예: RLS 개념이 어려웠다)

### 배운 핵심 기술
- (나열하기)

### 다음 달 목표
- (예: AI 챗봇 만들기!)
\`\`\`

**2개월차 미리보기:** 🔮
- 프로젝트 3: AI 챗봇 (RAG + 벡터DB)
- 프로젝트 4: 쇼핑몰 대시보드

> 💡 한 달 전에는 코딩을 전혀 몰랐는데, 지금은 웹사이트 2개를 만든 사람이에요! 정말 대단해요! 🔥`,
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
              {
                task: "RAG란? (Retrieval Augmented Generation = 검색해서 답하기)",
                detail: "RAG는 Retrieval Augmented Generation의 줄임말로, AI가 우리 데이터를 검색해서 답변하는 기술이에요. 오픈북 시험처럼 AI에게 교과서를 주고 '이걸 보고 답해!'하는 거예요."
              },
              {
                task: "쉬운 비유: AI에게 교과서를 주고 '이걸 보고 답해줘!' 하는 것",
                detail: "일반 AI는 머릿속 지식만으로 답하지만, RAG는 우리가 준 자료(쇼핑 리뷰 등)를 참고해서 답해요. 그래서 훨씬 정확한 답변을 줄 수 있어요!"
              },
              {
                task: "RAG가 필요한 이유: AI가 우리 쇼핑 리뷰 데이터를 모르니까 알려줘야 해요",
                detail: "AI는 우리 쇼핑몰의 리뷰를 모르니까, RAG로 리뷰 데이터를 알려줘야 해요. 그래야 '이 제품 배송 빠른가요?' 같은 질문에 리뷰를 참고해서 답할 수 있어요."
              },
            ],
          tip: "RAG = AI에게 커닝 페이퍼 주기! 📄 '이 자료 보고 답해' 하는 기술이에요",
          content: `## RAG가 뭐야? 🧠

AI가 우리 데이터를 읽고 답변하는 기술!

**RAG란?**
**R**etrieval **A**ugmented **G**eneration = "검색해서 답하기"

**쉬운 비유:** 📚
- 일반 AI = 시험 볼 때 머릿속 지식만으로 답하기
- RAG = 시험 볼 때 **교과서를 보면서** 답하기 (오픈북 시험!)

**왜 RAG가 필요한가요?**
AI(ChatGPT 등)는 우리 쇼핑몰의 리뷰 데이터를 몰라요. 그래서 우리가 **자료를 주고** "이걸 보고 답해"라고 해야 해요!

**RAG의 3단계:**
\`\`\`
1️⃣ 검색 (Retrieval)
   → 사용자 질문과 관련된 리뷰를 데이터에서 찾기

2️⃣ 보강 (Augmented)
   → 찾은 리뷰를 AI에게 함께 전달하기

3️⃣ 생성 (Generation)
   → AI가 리뷰를 참고해서 답변 만들기
\`\`\`

**예시:**
- 질문: "이 신발 사이즈가 어때요?"
- RAG가 리뷰에서 사이즈 관련 내용을 찾아서 AI에게 전달
- AI: "리뷰를 보면 평소보다 한 사이즈 크게 주문하시는 걸 추천해요!"

> 💡 RAG 덕분에 AI가 우리 데이터를 아는 것처럼 답할 수 있어요!`,
        },
        {
          day: 22,
          title: "벡터 데이터베이스 이해하기",
          emoji: "📐",
          description:
            "텍스트를 숫자로 바꿔서 비슷한 것끼리 찾는 기술!",
          tasks: [
              {
                task: "벡터란? (텍스트를 숫자 배열로 바꾼 것)",
                detail: "벡터는 텍스트를 숫자 배열로 바꾼 거예요. '맛있다' → [0.8, 0.2, 0.5, ...] 이런 식이에요. 비슷한 의미의 단어는 비슷한 숫자를 가지게 돼요."
              },
              {
                task: "쉬운 비유: 단어를 지도 위의 점으로 바꾸는 것, 비슷한 단어는 가까이!",
                detail: "단어를 지도 위의 점으로 바꾼다고 생각해봐요. '맛있다'와 '존맛탱'은 의미가 비슷하니까 지도에서 가까이 놓이고, '배송빠름'은 의미가 다르니까 멀리 놓여요."
              },
              {
                task: "벡터 DB가 필요한 이유: '맛있다'와 '존맛탱'이 비슷한 뜻임을 AI가 알게 해주는 것",
                detail: "일반 검색은 '맛있다'가 포함된 글만 찾지만, 벡터 DB는 '존맛탱', '진짜 맛남' 등 비슷한 의미도 찾아줘요. 키워드가 달라도 뜻이 비슷하면 찾아주는 똑똑한 검색이에요!"
              },
            ],
          content: `## 벡터 데이터베이스 이해하기 📐

텍스트를 숫자로 바꿔서 비슷한 것끼리 찾는 기술!

**벡터란?**
텍스트를 **숫자 배열**로 바꾼 것이에요.

\`\`\`
"맛있다" → [0.8, 0.2, 0.5, 0.1, ...]
"존맛탱" → [0.7, 0.3, 0.5, 0.2, ...]  ← 비슷한 숫자!
"배송빠름" → [0.1, 0.9, 0.1, 0.8, ...]  ← 다른 숫자!
\`\`\`

**쉬운 비유 - 지도:** 🗺️
단어를 지도 위의 **점**으로 바꿔요. 비슷한 뜻의 단어는 **가까이**, 다른 뜻은 **멀리** 놓여요.

\`\`\`
        맛있다 ● ● 존맛탱    (가까이 = 비슷!)


  배송빠름 ●                  (멀리 = 다른 의미!)
\`\`\`

**왜 벡터 DB가 필요한가요?**
일반 검색: "맛있다"를 검색하면 "맛있다"가 포함된 글만 찾음
벡터 검색: "맛있다"를 검색하면 "존맛탱", "진짜 맛남", "꿀맛" 등 **비슷한 의미**도 찾음!

> 💡 벡터 DB = 의미를 이해하는 검색엔진! 키워드가 달라도 뜻이 비슷하면 찾아줘요.`,
        },
        {
          day: 23,
          title: "Pinecone 시작하기",
          emoji: "🌲",
          description: "무료 벡터 데이터베이스 Pinecone을 세팅해요",
          tasks: [
              {
                task: "Pinecone이 뭔지 알아보기 (벡터를 저장하는 전문 데이터베이스)",
                detail: "Pinecone은 벡터(숫자 배열)를 전문으로 저장하고 검색하는 데이터베이스예요. 무료 플랜으로 10만 개까지 저장할 수 있어서 우리 프로젝트에 충분해요."
              },
              {
                task: "Pinecone 가입하고 Index 만들기",
                detail: "pinecone.io에 무료 가입하고, New Index를 만들어요. Dimension은 1536으로 설정하세요(OpenAI 임베딩 크기에 맞추는 거예요)."
              },
              {
                task: "샘플 쇼핑 리뷰 데이터 20개 준비하기",
                detail: "챗봇이 답변할 때 참고할 쇼핑 리뷰 데이터 20개를 미리 준비해요. 배송, 품질, 사이즈 등 다양한 주제의 리뷰를 포함하면 좋아요."
              },
            ],
          tools: ["Pinecone"],
          content: `## Pinecone 시작하기 🌲

무료 벡터 데이터베이스를 세팅해요!

**Pinecone이란?**
벡터(숫자 배열)를 전문으로 저장하고 검색하는 데이터베이스예요. 무료 플랜으로 시작할 수 있어요!

**Pinecone vs 일반 DB:**
- 일반 DB (Supabase): "제목이 '맛집'인 글 찾아줘" → 정확히 일치하는 것만
- Pinecone: "맛집과 비슷한 의미의 리뷰 찾아줘" → 의미가 비슷한 것도!

**시작하기:**
1. pinecone.io 가입 (무료)
2. New Index 만들기
3. Dimension: 1536 (OpenAI 임베딩 크기)

**샘플 리뷰 데이터 준비:**
\`\`\`javascript
const reviews = [
  { id: "1", text: "배송이 정말 빨라요! 다음날 바로 왔어요", rating: 5 },
  { id: "2", text: "상품 품질이 좋아요. 가격 대비 만족", rating: 4 },
  { id: "3", text: "사이즈가 좀 작아요. 한 치수 크게 주문하세요", rating: 3 },
  // ... 총 20개 준비!
];
\`\`\`

> 💡 Pinecone 무료 플랜으로 10만 개 벡터까지 저장할 수 있어요! 우리 프로젝트에 충분해요.`,
        },
        {
          day: 24,
          title: "랭체인으로 연결하기",
          emoji: "🔗",
          description: "AI + 벡터DB를 연결해주는 랭체인을 배워요",
          tasks: [
              {
                task: "랭체인이란? (AI 앱을 쉽게 만들어주는 도구 모음)",
                detail: "랭체인(LangChain)은 AI 앱을 쉽게 만들어주는 도구 모음이에요. AI에게 질문하고, 데이터를 검색하고, 답변을 만드는 과정을 블록처럼 조립해서 연결해줘요."
              },
              {
                task: "쉬운 비유: AI 요리에 필요한 주방도구 세트",
                detail: "AI가 셰프, Pinecone이 냉장고라면, 랭체인은 주방도구 세트예요. 셰프가 냉장고에서 재료를 꺼내 요리하듯, AI가 Pinecone에서 데이터를 가져와 답변을 만들어요."
              },
              {
                task: "랭체인 설치하고 기본 코드 이해하기",
                detail: "npm install langchain으로 설치하고, ChatOpenAI와 PineconeStore를 가져와서 기본 연결 코드를 작성해요. 복잡한 연결은 랭체인이 다 해줘요!"
              },
            ],
          tools: ["랭체인(LangChain)"],
          tip: "랭체인 = AI 레고! 여러 AI 기능을 블록처럼 조립해요",
          content: `## 랭체인으로 연결하기 🔗

AI + 벡터DB를 연결해주는 도구를 배워요!

**랭체인(LangChain)이란?**
AI 앱을 쉽게 만들어주는 **도구 모음**이에요. AI에게 질문하고, 데이터를 검색하고, 답변을 만드는 과정을 쉽게 연결해줘요.

**쉬운 비유:** 🍳
- AI = 셰프 (요리하는 사람)
- Pinecone = 냉장고 (재료 보관)
- 랭체인 = 주방도구 세트 (둘을 연결해주는 도구!)

**설치하기:**
\`\`\`bash
npm install langchain @langchain/openai @langchain/pinecone
\`\`\`

**기본 코드:**
\`\`\`javascript
import { ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";

// AI 모델 설정
const model = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0.7,
});

// Pinecone에서 검색하기
const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
  pineconeIndex: index,
});

// 질문하면 관련 리뷰를 찾아서 AI에게 전달!
const results = await vectorStore.similaritySearch("배송 빠른가요?", 3);
\`\`\`

> 💡 랭체인이 복잡한 연결을 다 해줘요! 우리는 레고 블록 조립하듯 기능을 붙이면 돼요.`,
        },
        {
          day: 25,
          title: "리뷰 데이터를 벡터로 변환",
          emoji: "🔄",
          description: "쇼핑 리뷰를 벡터로 바꿔서 Pinecone에 저장해요",
          tasks: [
              {
                task: "임베딩이란? (텍스트를 숫자 벡터로 변환하는 것)",
                detail: "임베딩(Embedding)은 텍스트를 숫자 벡터로 변환하는 거예요. OpenAI API가 해주고, 하나의 텍스트가 1536개의 숫자로 변환돼요."
              },
              {
                task: "OpenAI 임베딩 API로 리뷰를 벡터로 변환",
                detail: "OpenAI Embeddings를 사용해서 리뷰 텍스트를 숫자 벡터로 바꿔요. embeddings.embedQuery('배송 빠르고 좋아요') 한 줄이면 변환 완료!"
              },
              {
                task: "변환된 벡터를 Pinecone에 저장하기",
                detail: "변환된 벡터를 PineconeStore.fromDocuments()로 Pinecone에 저장해요. Pinecone 대시보드에서 벡터 개수가 20개인지 확인하면 성공!"
              },
            ],
          tools: ["Pinecone", "랭체인"],
          content: `## 리뷰 데이터를 벡터로 변환 🔄

쇼핑 리뷰를 숫자(벡터)로 바꿔서 Pinecone에 저장해요!

**임베딩(Embedding)이란?**
텍스트를 **숫자 배열(벡터)**로 변환하는 것! OpenAI API가 해줘요.

\`\`\`
"배송 빠르고 좋아요" → [0.12, 0.45, 0.78, 0.33, ... 1536개 숫자]
\`\`\`

**변환 코드:**
\`\`\`javascript
import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

// 리뷰 하나를 벡터로 변환
const vector = await embeddings.embedQuery("배송 빠르고 좋아요");
console.log(vector); // [0.12, 0.45, 0.78, ...] 1536개 숫자!
\`\`\`

**Pinecone에 저장하기:**
\`\`\`javascript
import { PineconeStore } from "@langchain/pinecone";

// 리뷰 20개를 한번에 벡터로 변환 & 저장!
await PineconeStore.fromDocuments(
  reviews.map(r => ({ pageContent: r.text, metadata: { rating: r.rating } })),
  embeddings,
  { pineconeIndex: index }
);
\`\`\`

**확인 방법:**
Pinecone 대시보드에서 벡터 개수가 20개인지 확인!

> 💡 이제 리뷰가 Pinecone에 저장됐어요! 다음에는 질문하면 관련 리뷰를 찾아오는 기능을 만들어요.`,
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
              {
                task: "사용자 질문이 들어오면 관련 리뷰를 Pinecone에서 검색",
                detail: "파이프라인은 데이터가 단계별로 처리되는 흐름이에요. 사용자 질문 → 벡터 변환 → Pinecone에서 검색 → 관련 리뷰 찾기 → AI에게 전달 → 답변 생성, 이 순서대로 진행돼요."
              },
              {
                task: "검색된 리뷰를 AI에게 전달하고 답변 생성",
                detail: "similaritySearch 함수로 질문과 비슷한 리뷰 3개를 찾고, 찾은 리뷰를 AI에게 함께 전달해서 답변을 만들어요. AI가 리뷰를 '참고'해서 답하니까 훨씬 정확해요!"
              },
              {
                task: "전체 흐름: 질문 → 벡터 검색 → 관련 리뷰 찾기 → AI 답변",
                detail: "전체 흐름을 하나의 함수(askAboutReviews)로 만들면, 질문만 넣으면 자동으로 검색 → AI 답변까지 한 번에 처리돼요."
              },
            ],
          content: `## RAG 파이프라인 만들기 🔧

질문 → 검색 → AI 답변의 전체 흐름을 완성해요!

**파이프라인이란?**
물이 파이프를 타고 흐르듯, 데이터가 **단계별로 처리**되는 것!

\`\`\`
사용자 질문 → 벡터 변환 → Pinecone 검색 → 관련 리뷰 찾기 → AI에게 전달 → 답변!
\`\`\`

**전체 코드:**
\`\`\`javascript
async function askAboutReviews(question) {
  // 1단계: 질문과 비슷한 리뷰 3개 찾기
  const relevantReviews = await vectorStore.similaritySearch(question, 3);

  // 2단계: AI에게 리뷰와 함께 질문하기
  const prompt = \\\`
    아래 쇼핑 리뷰를 참고해서 질문에 답해주세요.

    리뷰들:
    \\\${relevantReviews.map(r => r.pageContent).join("\\n")}

    질문: \\\${question}
  \\\`;

  // 3단계: AI 답변 받기
  const response = await model.invoke(prompt);
  return response.content;
}

// 사용 예시
const answer = await askAboutReviews("이 제품 배송 빠른가요?");
\`\`\`

> 💡 이게 바로 RAG의 핵심! AI가 우리 리뷰를 "참고"해서 답변하는 거예요. AI 단독보다 훨씬 정확해요!`,
        },
        {
          day: 27,
          title: "챗봇 UI 만들기",
          emoji: "💬",
          description: "카카오톡처럼 대화하는 챗봇 화면을 만들어요",
          tasks: [
              {
                task: "React로 채팅 UI 만들기 (메시지 목록 + 입력창)",
                detail: "채팅 UI는 메시지 목록(위에서 아래로), 내 메시지(오른쪽), AI 메시지(왼쪽), 입력창 + 보내기 버튼으로 구성돼요. 카카오톡과 비슷한 구조예요!"
              },
              {
                task: "AI에게 '채팅 인터페이스 만들어줘' 요청",
                detail: "AI에게 '카카오톡 스타일 채팅 UI를 React + Tailwind CSS로 만들어줘'라고 구체적으로 요청하면 예쁜 채팅 화면을 만들어줘요."
              },
              {
                task: "메시지 보내기/받기 기능 연결",
                detail: "useState로 메시지 목록과 입력값을 관리하고, 보내기 버튼을 누르면 askAboutReviews 함수를 호출해서 AI 답변을 받아요."
              },
            ],
          tools: ["React", "Tailwind CSS"],
          content: `## 챗봇 UI 만들기 💬

카카오톡처럼 대화하는 챗봇 화면을 만들어요!

**채팅 UI의 구성요소:**
- 메시지 목록 (위에서 아래로 스크롤)
- 내 메시지 (오른쪽, 파란색)
- AI 메시지 (왼쪽, 회색)
- 입력창 + 보내기 버튼

**채팅 컴포넌트 코드:**
\`\`\`jsx
function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    // 내 메시지 추가
    setMessages(prev => [...prev, { role: 'user', text: input }]);

    // AI 답변 받기
    const answer = await askAboutReviews(input);

    // AI 메시지 추가
    setMessages(prev => [...prev, { role: 'ai', text: answer }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>보내기</button>
    </div>
  );
}
\`\`\`

> 💡 AI에게 "카카오톡 스타일 채팅 UI를 Tailwind CSS로 만들어줘"라고 요청하면 더 예쁘게 만들어줘요!`,
        },
        {
          day: 28,
          title: "챗봇 기능 개선",
          emoji: "⚡",
          description: "답변 품질을 높이고 편의 기능을 추가해요",
          tasks: [
              {
                task: "프롬프트 개선하기 (더 정확한 리뷰 분석 답변)",
                detail: "시스템 프롬프트를 개선하면 AI 답변 품질이 좋아져요. '리뷰에 없는 내용은 모른다고 답하기', '3줄 이내로 답하기' 같은 규칙을 추가해보세요."
              },
              {
                task: "로딩 상태 추가하기",
                detail: "로딩 상태를 추가하면 사용자 경험이 크게 좋아져요. AI가 생각 중일 때 'AI가 생각 중...' 같은 메시지나 애니메이션을 보여주세요."
              },
              {
                task: "대화 기록 저장하기",
                detail: "localStorage에 대화 기록을 저장하면 페이지를 새로고침해도 이전 대화가 유지돼요. JSON.stringify로 저장하고 JSON.parse로 불러오면 돼요."
              },
            ],
          content: `## 챗봇 기능 개선 ⚡

답변 품질을 높이고 편의 기능을 추가해요!

**프롬프트 개선하기:**
AI에게 더 좋은 지시를 주면 답변이 좋아져요!

\`\`\`javascript
const systemPrompt = \\\`
당신은 쇼핑몰 리뷰 분석 전문가입니다.
- 고객 리뷰를 바탕으로 정확하게 답변해주세요
- 리뷰에 없는 내용은 "리뷰에서 확인할 수 없습니다"라고 답해주세요
- 긍정/부정 리뷰를 균형있게 소개해주세요
- 답변은 3줄 이내로 간결하게 해주세요
\\\`;
\`\`\`

**로딩 상태 추가:**
\`\`\`jsx
const [isLoading, setIsLoading] = useState(false);

const sendMessage = async () => {
  setIsLoading(true);  // 로딩 시작
  const answer = await askAboutReviews(input);
  setIsLoading(false);  // 로딩 끝
};

// 로딩 중일 때 점 3개 애니메이션
{isLoading && <div className="animate-pulse">AI가 생각 중...</div>}
\`\`\`

**대화 기록 저장:**
\`\`\`javascript
// localStorage에 대화 기록 저장
localStorage.setItem('chatHistory', JSON.stringify(messages));

// 페이지 새로고침해도 대화 기록 유지!
const saved = JSON.parse(localStorage.getItem('chatHistory') || '[]');
\`\`\`

> 💡 작은 개선이 큰 차이를 만들어요! 로딩 표시만 있어도 사용자 경험이 확 좋아져요.`,
        },
        {
          day: 29,
          title: "챗봇 테스트 & 디버깅",
          emoji: "🐛",
          description: "여러 질문으로 테스트하고 문제를 고쳐요",
          tasks: [
              {
                task: "다양한 질문으로 테스트하기 ('이 제품 배송 빠른가요?', '맛은 어때요?')",
                detail: "다양한 질문으로 테스트해봐요. 정상 질문, 모호한 질문, 관련 없는 질문, 빈 입력, 아주 긴 질문 등 여러 상황에서 챗봇이 잘 동작하는지 확인하세요."
              },
              {
                task: "이상한 답변이 나오면 프롬프트 수정",
                detail: "이상한 답변이 나오면 시스템 프롬프트를 수정해보세요. 예를 들어 '관련 없는 질문에는 쇼핑 리뷰만 답변할 수 있다고 안내해줘' 같은 규칙을 추가할 수 있어요."
              },
              {
                task: "에러 처리 추가하기",
                detail: "try-catch는 안전망이에요! 'try(이거 해봐), catch(실패하면 이렇게 해)'라는 뜻이에요. 에러가 나도 앱이 멈추지 않고 사용자에게 친절한 메시지를 보여줄 수 있어요."
              },
            ],
          content: `## 챗봇 테스트 & 디버깅 🐛

여러 질문으로 테스트하고 문제를 고쳐요!

**테스트 시나리오:**
\`\`\`
✅ 정상 질문: "이 제품 배송 빠른가요?"
✅ 구체적 질문: "색상이 사진과 같나요?"
✅ 모호한 질문: "어때요?"
✅ 관련 없는 질문: "오늘 날씨 어때?"
✅ 빈 입력: "" (아무것도 안 치고 보내기)
✅ 아주 긴 질문: 500자 이상 입력
\`\`\`

**디버깅이란?**
버그(오류)를 찾아서 고치는 것! 벌레(bug)를 잡는다는 뜻이에요. 🐛

**에러 처리 추가:**
\`\`\`javascript
const sendMessage = async () => {
  try {
    setIsLoading(true);
    const answer = await askAboutReviews(input);
    setMessages(prev => [...prev, { role: 'ai', text: answer }]);
  } catch (error) {
    // 에러가 나면 사용자에게 알려주기
    setMessages(prev => [...prev, {
      role: 'ai',
      text: '죄송해요, 오류가 발생했어요. 다시 시도해주세요! 🙏'
    }]);
    console.error('에러:', error);
  } finally {
    setIsLoading(false);
  }
};
\`\`\`

> 💡 try-catch = 안전망! "이거 해봐(try), 실패하면 이렇게 해(catch)" 라는 뜻이에요.`,
        },
        {
          day: 30,
          title: "챗봇 배포!",
          emoji: "🚀",
          description: "세 번째 프로젝트 완성! AI 챗봇 배포!",
          tasks: [
              {
                task: "환경변수 설정 (API 키 안전하게 관리하기)",
                detail: "환경변수(.env)에 API 키를 저장하면 코드에 비밀번호가 노출되지 않아요. .gitignore에 .env를 추가해서 GitHub에 올라가지 않게 하는 것도 중요해요!"
              },
              {
                task: "Vercel로 배포하기",
                detail: "Vercel 대시보드에서 Settings → Environment Variables에 각 API 키를 추가하고 Redeploy하면 배포 완료! 채팅, AI 답변, 로딩 상태가 잘 되는지 확인하세요."
              },
              {
                task: "친구에게 보여주고 테스트 부탁하기",
                detail: "친구에게 URL을 보내고 실제로 써보라고 부탁하세요. 다른 사람의 피드백은 버그를 찾는 가장 좋은 방법이에요!"
              },
            ],
          tools: ["Vercel"],
          tip: "AI 챗봇을 만들었어요! 이력서에 쓸 수 있는 진짜 실력! 🤖",
          content: `## 챗봇 배포! 🚀

세 번째 프로젝트 완성! AI 챗봇을 세상에 공개해요!

**환경변수란?**
API 키(비밀번호) 같은 민감한 정보를 **코드에 직접 쓰지 않고** 따로 보관하는 것!

\`\`\`bash
# .env 파일 (비밀! GitHub에 올리면 안 돼요!)
OPENAI_API_KEY=sk-xxx...
PINECONE_API_KEY=xxx...
VITE_SUPABASE_URL=https://xxx.supabase.co
\`\`\`

**중요! .gitignore에 추가:**
\`\`\`
# .gitignore
.env
.env.local
\`\`\`

**Vercel에 환경변수 설정:**
1. Vercel 대시보드 → Settings → Environment Variables
2. 각 키를 하나씩 추가
3. Redeploy!

**배포 후 체크리스트:** ✅
- 채팅이 잘 되나요?
- AI 답변이 리뷰를 참고하나요?
- 로딩 상태가 보이나요?
- 에러 시 메시지가 나오나요?

> 💡 AI 챗봇을 만들 수 있다는 건 이력서에 큰 플러스예요! "RAG 기반 쇼핑 리뷰 분석 챗봇 개발" 한 줄이면 충분! 🤖`,
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
              {
                task: "MCP란? (Model Context Protocol = AI가 외부 도구를 직접 쓸 수 있게 해주는 규격)",
                detail: "MCP(Model Context Protocol)는 AI가 외부 도구를 직접 쓸 수 있게 해주는 규격이에요. AI에게 'Supabase 리모컨'을 쥐여주는 것처럼, AI가 직접 DB에 접속해서 테이블을 만들 수 있어요!"
              },
              {
                task: "쉬운 비유: AI에게 '수파베이스 리모컨'을 쥐여주는 것",
                detail: "기존에는 AI가 코드를 알려주면 우리가 복붙해서 실행했지만, MCP를 쓰면 AI가 직접 Supabase에 접속해서 작업을 해요. 훨씬 빠르고 편해요!"
              },
              {
                task: "Supabase MCP 설정하기 (AI가 DB를 직접 조작하게!)",
                detail: "대시보드에 필요한 products(상품), orders(주문), customers(고객) 테이블을 MCP를 사용해서 만들어요. AI에게 '이 테이블 만들어줘'하면 진짜로 만들어줘요!"
              },
            ],
          tools: ["Supabase MCP"],
          tip: "MCP = AI에게 도구 사용법을 알려주는 설명서! AI가 직접 DB를 만져요",
          content: `## 대시보드 기획 & Supabase MCP 📋

AI가 직접 데이터베이스를 조작하게 만들어요!

**MCP란?**
Model Context Protocol = AI가 **외부 도구를 직접 쓸 수 있게** 해주는 규격!

**쉬운 비유:** 🎮
- 기존: AI에게 "이런 코드 써줘" → 우리가 복붙 → 실행
- MCP: AI에게 "DB에 테이블 만들어" → AI가 **직접** Supabase에 접속해서 만듦!

마치 AI에게 **Supabase 리모컨**을 쥐여주는 것!

**대시보드에 필요한 테이블:**
\`\`\`sql
-- 상품 테이블
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  image_url TEXT,
  description TEXT
);

-- 주문 테이블
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 고객 테이블
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE
);
\`\`\`

> 💡 MCP를 쓰면 AI가 직접 DB를 만져요! "주문 테이블 만들어줘"하면 진짜로 만들어줌!`,
        },
        {
          day: 32,
          title: "데이터 시드 만들기",
          emoji: "🌱",
          description:
            "가짜 데이터를 넣어서 대시보드를 테스트할 준비를 해요",
          tasks: [
              {
                task: "데이터 시드란? (테스트용 가짜 데이터를 넣는 것)",
                detail: "데이터 시드는 테스트용 가짜 데이터를 넣는 거예요. 가게 오픈 전에 진열대에 샘플 상품을 놓는 것처럼, 대시보드를 개발하기 전에 가짜 데이터를 넣어야 화면이 어떻게 보이는지 확인할 수 있어요."
              },
              {
                task: "쉬운 비유: 가게 오픈 전에 진열대에 샘플 상품 놓는 것",
                detail: "마치 가게가 어떻게 보이는지 미리 확인하려면 진열대에 샘플 상품이 있어야 하듯이, 대시보드도 데이터가 있어야 제대로 개발할 수 있어요."
              },
              {
                task: "상품, 주문, 고객 테이블 만들고 시드 데이터 넣기",
                detail: "supabase.from('products').insert()로 상품, 주문, 고객 데이터를 넣어요. 5~10개 정도의 현실적인 가짜 데이터를 넣으면 개발하기 편해요."
              },
            ],
          tools: ["Supabase"],
          content: `## 데이터 시드 만들기 🌱

테스트용 가짜 데이터를 넣어서 대시보드를 미리 볼 수 있게 해요!

**데이터 시드란?**
**씨앗(seed)**을 심듯이, 테스트용 가짜 데이터를 넣는 것!

**쉬운 비유:** 🏪
가게 오픈 전에 진열대에 **샘플 상품**을 놓는 것과 같아요. 진짜 상품이 들어오기 전에 가게가 어떻게 보이는지 확인!

**시드 데이터 코드:**
\`\`\`javascript
// seed.js - 가짜 데이터 넣기
const products = [
  { name: "무선 이어폰", price: 45000, description: "노이즈캔슬링 지원" },
  { name: "보조배터리", price: 25000, description: "20000mAh 대용량" },
  { name: "노트북 거치대", price: 35000, description: "알루미늄 소재" },
  { name: "마우스패드", price: 15000, description: "대형 사이즈" },
  { name: "USB 허브", price: 28000, description: "7포트 USB 3.0" },
];

// Supabase에 넣기
const { data, error } = await supabase
  .from('products')
  .insert(products);

console.log('시드 데이터 완료!', data);
\`\`\`

> 💡 시드 데이터가 있어야 대시보드를 만들 때 "진짜처럼" 보여요! 빈 화면으로는 개발하기 어려워요.`,
        },
        {
          day: 33,
          title: "Supabase 인증 & 스토리지",
          emoji: "🔑",
          description:
            "관리자 로그인과 상품 이미지 업로드를 만들어요",
          tasks: [
              {
                task: "Supabase Auth로 관리자 로그인 만들기",
                detail: "관리자 로그인은 이메일+비밀번호 방식으로 만들어요. signInWithPassword 함수를 쓰고, 로그인하지 않은 사람은 자동으로 로그인 페이지로 이동시켜요."
              },
              {
                task: "Supabase Storage란? (파일/이미지를 저장하는 클라우드 공간)",
                detail: "Supabase Storage는 파일과 이미지를 저장하는 클라우드 공간이에요. Google Drive 같은 거예요! 버킷(bucket)이라는 폴더를 만들고 거기에 파일을 올려요."
              },
              {
                task: "이미지 업로드 기능 만들기 (상품 사진 올리기)",
                detail: "이미지 업로드는 두 단계예요. 1) Storage에 파일을 올리고, 2) 올려진 이미지의 URL을 상품 테이블에 저장해요. 그러면 상품과 이미지가 연결돼요!"
              },
            ],
          tools: ["Supabase Auth", "Supabase Storage"],
          content: `## Supabase 인증 & 스토리지 🔑

관리자 로그인과 이미지 업로드를 만들어요!

**관리자 전용 로그인:**
대시보드는 아무나 들어오면 안 돼요! 관리자만 접속할 수 있게 만들어요.

\`\`\`javascript
// 관리자 로그인
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@myshop.com',
  password: 'secure_password',
});

// 관리자가 아니면 로그인 페이지로!
if (!user) {
  navigate('/login');
}
\`\`\`

**Supabase Storage란?** 📁
파일과 이미지를 저장하는 **클라우드 공간**이에요. Google Drive 같은 거!

**이미지 업로드 코드:**
\`\`\`javascript
// 상품 이미지 업로드
const handleUpload = async (file) => {
  const fileName = \\\`products/\\\${Date.now()}_\\\${file.name}\\\`;

  const { data, error } = await supabase.storage
    .from('product-images')  // 버킷 이름
    .upload(fileName, file);

  // 업로드된 이미지 URL 가져오기
  const { data: { publicUrl } } = supabase.storage
    .from('product-images')
    .getPublicUrl(fileName);

  return publicUrl;  // 이 URL을 상품 테이블에 저장!
};
\`\`\`

> 💡 Storage 설정: Supabase → Storage → New Bucket → "product-images" 만들기!`,
        },
        {
          day: 34,
          title: "룰 & 워크플로 이해하기",
          emoji: "📏",
          description:
            "AI 에이전트가 규칙을 따르게 만드는 방법을 배워요",
          tasks: [
              {
                task: "룰이란? (AI가 지켜야 할 규칙, 예: '항상 한국어로 답하기')",
                detail: "룰(Rule)은 AI가 지켜야 할 규칙이에요. '항상 한국어로 답하기', 'TypeScript를 사용하기' 같은 규칙을 .cursorrules 파일이나 시스템 프롬프트에 적어놓으면 AI가 따라요."
              },
              {
                task: "워크플로란? (여러 단계를 순서대로 실행하는 것)",
                detail: "워크플로(Workflow)는 여러 단계를 순서대로 실행하는 거예요. 주문이 들어오면 접수 → 재고 확인 → 결제 확인 → 배송 시작 순서로 처리하는 것처럼요."
              },
              {
                task: "쉬운 비유: 룰 = 교칙, 워크플로 = 수업 시간표",
                detail: "학교에 비유하면, 룰은 '교칙'(항상 지켜야 하는 것), 워크플로는 '수업 시간표'(순서대로 진행되는 것)예요. 둘 다 잘 정하면 AI가 실수 없이 일해요!"
              },
            ],
          content: `## 룰 & 워크플로 이해하기 📏

AI 에이전트가 규칙을 따르고, 순서대로 일하게 만들어요!

**룰(Rule)이란?**
AI가 지켜야 할 **규칙**! "항상 이렇게 해!"라고 정해주는 것.

\`\`\`markdown
# .cursorrules 또는 시스템 프롬프트
- 항상 한국어로 답하기
- TypeScript를 사용하기
- 컴포넌트는 함수형으로 작성하기
- Tailwind CSS로 스타일링하기
- 에러 처리를 항상 포함하기
\`\`\`

**워크플로(Workflow)란?**
여러 단계를 **순서대로** 실행하는 것!

\`\`\`
주문 워크플로:
1️⃣ 주문 접수 → 2️⃣ 재고 확인 → 3️⃣ 결제 확인 → 4️⃣ 배송 시작 → 5️⃣ 배송 완료
\`\`\`

**쉬운 비유:**
- 룰 = 학교 **교칙** (항상 지켜야 하는 것)
- 워크플로 = **수업 시간표** (순서대로 진행되는 것)

**대시보드에서 쓰는 룰:**
\`\`\`javascript
// 주문 상태는 이 순서로만 바뀔 수 있어요
const ORDER_FLOW = ['pending', 'confirmed', 'shipping', 'delivered'];
// 배송 중(shipping)에서 접수(pending)로 돌아갈 수 없음!
\`\`\`

> 💡 룰과 워크플로를 잘 정하면 AI가 실수 없이 일해요!`,
        },
        {
          day: 35,
          title: "대시보드 UI 만들기",
          emoji: "📈",
          description:
            "매출, 주문, 고객 현황을 보여주는 대시보드 화면!",
          tasks: [
              {
                task: "AI에게 '쇼핑몰 관리자 대시보드 UI 만들어줘' 요청",
                detail: "AI에게 '쇼핑몰 관리자 대시보드 만들어줘'라고 할 때, 매출/주문/고객 카드, 차트, 테이블, 사이드바 메뉴를 구체적으로 요청하면 좋은 결과가 나와요."
              },
              {
                task: "차트/그래프 라이브러리 사용하기",
                detail: "차트/그래프는 recharts 라이브러리가 쉽고 예뻐요. npm install recharts로 설치하고, BarChart, LineChart 등을 가져와서 쓸 수 있어요."
              },
              {
                task: "상품 목록, 주문 현황, 매출 요약 카드 만들기",
                detail: "대시보드에는 상품 목록, 주문 현황, 매출 요약 카드가 필요해요. 자동차 계기판처럼 쇼핑몰의 상태를 한눈에 볼 수 있게 구성해요."
              },
            ],
          tools: ["React", "Tailwind CSS"],
          content: `## 대시보드 UI 만들기 📈

매출, 주문, 고객 현황을 한눈에 보여주는 대시보드!

**대시보드 = 자동차 계기판!** 🚗
속도, 연료, 온도를 한눈에 보듯이, 쇼핑몰의 상태를 한눈에 볼 수 있어요.

**주요 화면 구성:**
\`\`\`
┌─────────────────────────────────────┐
│  📊 대시보드                          │
├──────────┬──────────┬───────────────┤
│ 💰 매출   │ 📦 주문   │ 👥 고객      │
│ 1,250만원 │ 48건     │ 156명        │
├──────────┴──────────┴───────────────┤
│  📈 매출 차트 (이번 주)               │
│  ▓▓▓▓▓▓░░                           │
├─────────────────────────────────────┤
│  최근 주문 목록                       │
│  1. 무선이어폰 - 45,000원 - 배송중   │
│  2. 보조배터리 - 25,000원 - 준비중   │
└─────────────────────────────────────┘
\`\`\`

**AI에게 요청하는 프롬프트:**
\`\`\`
"React + Tailwind CSS로 쇼핑몰 관리자 대시보드를 만들어줘.
- 상단에 매출/주문/고객 수 요약 카드 3개
- 중간에 매출 차트 (recharts 라이브러리 사용)
- 하단에 최근 주문 목록 테이블
- 사이드바에 메뉴 (대시보드, 상품, 주문, 고객)
- 모던하고 깔끔한 디자인으로"
\`\`\`

> 💡 차트는 recharts 라이브러리가 쉽고 예뻐요! \`npm install recharts\`로 설치하세요.`,
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
              {
                task: "병렬 에이전트란? (여러 AI가 동시에 다른 일을 하는 것)",
                detail: "병렬 에이전트는 여러 AI가 동시에 다른 일을 하는 거예요. 셰프 1명이 3가지 요리를 순서대로 만들면 30분 걸리지만, 셰프 3명이 동시에 만들면 10분이면 돼요!"
              },
              {
                task: "쉬운 비유: 식당에서 셰프 3명이 각자 다른 요리를 동시에 만드는 것",
                detail: "식당에서 셰프 3명이 각자 밥, 국, 반찬을 동시에 만드는 것처럼, 상품 관리, 주문 처리, 통계 생성을 동시에 처리하면 훨씬 빨라요."
              },
              {
                task: "상품 관리 + 주문 처리 + 통계 생성을 동시에 처리하기",
                detail: "JavaScript에서 Promise.all을 쓰면 여러 작업을 동시에 시작하고 다 끝나면 결과를 받을 수 있어요. 대시보드 로딩 시간을 크게 줄여줘요!"
              },
            ],
          tip: "병렬 = 동시에! 에이전트 3개가 각자 일하면 3배 빠름! ⚡",
          content: `## 병렬 에이전트 작업 ⚡

여러 AI가 동시에 일하면 훨씬 빨라요!

**병렬이란?**
여러 작업을 **동시에** 처리하는 것!

**쉬운 비유:** 🍳
- 순차: 셰프 1명이 밥 → 국 → 반찬 순서대로 만들기 (30분)
- 병렬: 셰프 3명이 밥 / 국 / 반찬을 **동시에** 만들기 (10분!)

**JavaScript에서 병렬 처리:**
\`\`\`javascript
// ❌ 순차 처리 (느림)
const products = await fetchProducts();  // 3초
const orders = await fetchOrders();      // 3초
const stats = await fetchStats();        // 3초
// 총 9초!

// ✅ 병렬 처리 (빠름!)
const [products, orders, stats] = await Promise.all([
  fetchProducts(),  // 3초
  fetchOrders(),    // 3초 (동시에!)
  fetchStats(),     // 3초 (동시에!)
]);
// 총 3초!
\`\`\`

**Promise.all이란?**
"이 3가지를 동시에 시작하고, 다 끝나면 알려줘!" 라는 뜻이에요.

**대시보드에서 활용:**
페이지를 열 때 상품, 주문, 통계 데이터를 **동시에** 가져오면 로딩이 훨씬 빨라요!

> 💡 병렬 = 동시에! 기다리는 시간을 크게 줄일 수 있는 강력한 기술이에요.`,
        },
        {
          day: 37,
          title: "상품 CRUD 기능",
          emoji: "🛍️",
          description: "상품 추가/수정/삭제 + 이미지 업로드 완성",
          tasks: [
              {
                task: "상품 등록 폼 (이름, 가격, 설명, 이미지)",
                detail: "상품 등록 폼에는 상품명, 가격, 설명, 이미지 업로드 기능이 필요해요. input 태그로 각 항목을 입력받고, file input으로 이미지를 선택할 수 있어요."
              },
              {
                task: "이미지를 Supabase Storage에 업로드하기",
                detail: "이미지를 Supabase Storage에 업로드하고, 업로드된 이미지의 URL을 가져와서 상품 테이블의 image_url에 저장해요. 이렇게 하면 상품과 이미지가 연결돼요!"
              },
              {
                task: "상품 수정/삭제 기능 추가",
                detail: "상품 수정은 update(), 삭제는 delete()를 써요. 삭제할 때는 Storage에 있는 이미지도 함께 삭제해야 쓸모없는 파일이 안 쌓여요."
              },
            ],
          tools: ["Supabase Storage"],
          content: `## 상품 CRUD 기능 🛍️

상품을 추가, 수정, 삭제하고 이미지도 올려요!

**상품 등록 폼:**
\`\`\`jsx
function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    // 1. 이미지 업로드
    let imageUrl = '';
    if (image) {
      const { data } = await supabase.storage
        .from('product-images')
        .upload(\\\`\\\${Date.now()}_\\\${image.name}\\\`, image);
      imageUrl = supabase.storage
        .from('product-images')
        .getPublicUrl(data.path).data.publicUrl;
    }

    // 2. 상품 정보 저장
    await supabase.from('products').insert({
      name, price: Number(price), image_url: imageUrl
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="상품명" onChange={e => setName(e.target.value)} />
      <input placeholder="가격" type="number" onChange={e => setPrice(e.target.value)} />
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
      <button>상품 등록</button>
    </form>
  );
}
\`\`\`

**상품 삭제 시 주의:**
이미지도 Storage에서 함께 삭제해야 쓸모없는 파일이 안 쌓여요!

> 💡 이미지 업로드는 두 단계: 1) Storage에 파일 올리기 2) URL을 DB에 저장하기!`,
        },
        {
          day: 38,
          title: "주문 관리 & 통계",
          emoji: "📦",
          description: "주문 목록과 매출 통계를 보여줘요",
          tasks: [
              {
                task: "주문 목록 페이지 만들기 (상태별 필터)",
                detail: "주문 목록 페이지에서 '전체', '준비중', '배송중', '완료' 같은 필터 버튼을 만들면 원하는 상태의 주문만 볼 수 있어요. eq('status', filter)로 필터링해요."
              },
              {
                task: "매출 통계 차트 만들기",
                detail: "recharts 라이브러리의 BarChart(막대그래프)로 매출 차트를 만들어요. 날짜별 매출 데이터를 넣으면 한눈에 추이를 볼 수 있어요."
              },
              {
                task: "날짜별/상품별 매출 분석",
                detail: "날짜별, 상품별로 매출을 분석하면 어떤 상품이 잘 팔리는지, 매출이 올라가고 있는지 확인할 수 있어요. 차트가 있으면 대시보드가 훨씬 프로페셔널해 보여요!"
              },
            ],
          content: `## 주문 관리 & 통계 📦

주문 목록과 매출 통계를 보여줘요!

**주문 목록 (상태별 필터):**
\`\`\`jsx
function OrderList() {
  const [filter, setFilter] = useState('all');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let query = supabase.from('orders').select('*, products(name, price)');
    if (filter !== 'all') {
      query = query.eq('status', filter);
    }
    query.then(({ data }) => setOrders(data));
  }, [filter]);

  return (
    <div>
      {/* 필터 버튼 */}
      <div className="flex gap-2">
        {['all', 'pending', 'confirmed', 'shipping', 'delivered'].map(s => (
          <button key={s} onClick={() => setFilter(s)}>{s}</button>
        ))}
      </div>

      {/* 주문 테이블 */}
      <table>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.products.name}</td>
            <td>{order.products.price}원</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
\`\`\`

**매출 차트 (recharts):**
\`\`\`jsx
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

<BarChart data={salesData}>
  <XAxis dataKey="date" />
  <YAxis />
  <Bar dataKey="amount" fill="#3B82F6" />
</BarChart>
\`\`\`

> 💡 차트가 있으면 대시보드가 한층 프로페셔널해 보여요!`,
        },
        {
          day: 39,
          title: "대시보드 마무리",
          emoji: "🎨",
          description: "반응형 디자인과 에러 처리를 추가해요",
          tasks: [
              {
                task: "모바일에서도 잘 보이게 반응형 적용",
                detail: "사이드바를 모바일에서는 숨기고 데스크톱에서만 보이게 만들어요. Tailwind의 hidden md:block 클래스를 쓰고, 모바일에서는 햄버거 메뉴(☰)를 보여줘요."
              },
              {
                task: "로딩 상태, 에러 상태 처리",
                detail: "로딩 중일 때는 빈 화면 대신 animate-pulse 스켈레톤을 보여주고, 에러가 나면 사용자에게 친절한 메시지를 보여줘야 해요."
              },
              {
                task: "빈 데이터일 때 안내 메시지",
                detail: "데이터가 없을 때 '아직 주문이 없어요!' 같은 안내 메시지를 보여주면 사용자가 앱이 고장났다고 생각하지 않아요. 이런 디테일이 프로와 아마추어를 나눠요!"
              },
            ],
          content: `## 대시보드 마무리 🎨

반응형 디자인과 에러 처리로 완성도를 높여요!

**반응형 사이드바:**
\`\`\`jsx
{/* 모바일에서는 숨기고, 데스크톱에서는 보이기 */}
<aside className="hidden md:block w-64 bg-gray-800 text-white">
  <nav>
    <a href="/dashboard">📊 대시보드</a>
    <a href="/products">🛍️ 상품</a>
    <a href="/orders">📦 주문</a>
  </nav>
</aside>

{/* 모바일에서는 햄버거 메뉴 */}
<button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</button>
\`\`\`

**로딩 상태:**
\`\`\`jsx
{isLoading ? (
  <div className="animate-pulse bg-gray-200 h-32 rounded" />
) : (
  <DashboardContent data={data} />
)}
\`\`\`

**빈 데이터 처리:**
\`\`\`jsx
{orders.length === 0 ? (
  <div className="text-center py-10 text-gray-400">
    📦 아직 주문이 없어요!
    <p>첫 주문을 기다리고 있어요~</p>
  </div>
) : (
  <OrderList orders={orders} />
)}
\`\`\`

> 💡 사소한 디테일이 프로와 아마추어를 나눠요! 로딩, 에러, 빈 상태를 꼭 처리하세요.`,
        },
        {
          day: 40,
          title: "대시보드 배포!",
          emoji: "🎊",
          description:
            "네 번째 프로젝트 완성! 배포하고 2개월차 회고!",
          tasks: [
              {
                task: "Vercel로 배포하기",
                detail: "Vercel에 배포하기 전에 환경변수(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)가 잘 설정됐는지 확인하세요. 환경변수가 빠지면 사이트가 제대로 동작하지 않아요."
              },
              {
                task: "환경변수 설정 확인",
                detail: "배포 전에 관리자 로그인, 상품 CRUD, 이미지 업로드, 주문 목록, 매출 차트, 모바일 반응형을 모두 확인하세요. 체크리스트를 만들어 하나씩 확인하면 빠뜨리는 게 없어요."
              },
              {
                task: "2개월차 회고: 4개 프로젝트 완성!",
                detail: "벌써 4개 프로젝트 완성! 랜딩 페이지 → 블로그 → AI 챗봇 → 대시보드까지, HTML도 몰랐던 사람이 2개월 만에 풀스택+AI 앱을 만들 수 있게 된 거예요!"
              },
            ],
          tools: ["Vercel"],
          tip: "벌써 4개 프로젝트 완성! 취업 포트폴리오가 채워지고 있어요! 💼",
          content: `## 대시보드 배포! 🎊

네 번째 프로젝트 완성! 2개월차 회고!

**배포 전 최종 확인:**
\`\`\`
✅ 관리자 로그인이 되나요?
✅ 상품 CRUD가 잘 되나요?
✅ 이미지 업로드가 되나요?
✅ 주문 목록이 잘 보이나요?
✅ 매출 차트가 그려지나요?
✅ 모바일에서도 잘 보이나요?
\`\`\`

**Vercel 환경변수 설정:**
\`\`\`
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
\`\`\`

**2개월차 회고:** 📝

| 프로젝트 | 배운 것 |
|---------|--------|
| 1. 랜딩 페이지 | 개발 프로세스, AI 디자인, 배포 |
| 2. 블로그 | 풀스택, CRUD, Auth, RLS |
| 3. AI 챗봇 | RAG, 벡터DB, 랭체인 |
| 4. 대시보드 | MCP, Storage, 차트, 병렬 처리 |

**기술 성장:**
- 1개월차: HTML도 몰랐음
- 2개월차: 풀스택 + AI 앱을 만들 수 있음!

> 💡 4개 프로젝트 완성! 마지막 달에는 결제 SaaS와 포트폴리오를 만들어요! 💼🔥`,
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
              {
                task: "HTML 기반 디자인이란? (프레임워크 없이 순수 HTML/CSS로 만드는 것)",
                detail: "HTML 기반 디자인은 React 같은 프레임워크 없이 순수 HTML/CSS만으로 만드는 거예요. 가볍고, 빠르고, 누구나 이해할 수 있어서 간단한 SaaS 페이지에 딱이에요."
              },
              {
                task: "장점: 가볍고, 빠르고, 누구나 이해할 수 있음",
                detail: "프레임워크 없이 만들면 구조가 심플하고, 로딩이 빠르고, 코드를 이해하기 쉬워요. 때로는 심플한 게 최고예요!"
              },
              {
                task: "랜딩 페이지 + 가격표 + 결제 페이지 구조 잡기",
                detail: "SaaS 페이지에 필요한 3가지 핵심 페이지는 랜딩 페이지(서비스 소개), 가격표(플랜 비교), 결제 페이지예요. 각 페이지의 HTML 구조를 먼저 잡아봐요."
              },
            ],
          tip: "때로는 심플한 게 최고! HTML만으로도 멋진 SaaS를 만들 수 있어요",
          content: `## HTML 기반 디자인 시작 🎨

프레임워크 없이 순수 HTML/CSS로 깔끔한 페이지를 만들어요!

**왜 HTML만으로?**
React 같은 프레임워크 없이 **순수 HTML/CSS**만으로도 멋진 SaaS 페이지를 만들 수 있어요. 가볍고, 빠르고, 심플해요!

**기본 SaaS 페이지 구조:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>내 SaaS 서비스</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 네비게이션 -->
  <nav>
    <h1>📦 MyService</h1>
    <a href="#pricing">가격</a>
    <a href="/login">로그인</a>
  </nav>

  <!-- 히어로 섹션 -->
  <section class="hero">
    <h2>당신의 업무를 10배 빠르게!</h2>
    <p>AI가 도와주는 최고의 업무 관리 도구</p>
    <button>무료로 시작하기</button>
  </section>

  <!-- 가격표 -->
  <section id="pricing" class="pricing">
    <div class="plan">
      <h3>Free</h3>
      <p class="price">₩0/월</p>
    </div>
    <div class="plan featured">
      <h3>Pro</h3>
      <p class="price">₩9,900/월</p>
    </div>
  </section>
</body>
</html>
\`\`\`

> 💡 때로는 심플한 게 최고! HTML만으로도 실제 결제가 되는 SaaS를 만들 수 있어요.`,
        },
        {
          day: 42,
          title: "OG 메타데이터",
          emoji: "🏷️",
          description:
            "카톡에 링크 보냈을 때 예쁜 미리보기가 뜨게 만들어요",
          tasks: [
              {
                task: "OG 메타데이터란? (Open Graph = 링크 공유할 때 보이는 제목/설명/이미지)",
                detail: "OG 메타데이터(Open Graph)는 카톡이나 슬랙에 링크를 공유할 때 보이는 제목, 설명, 이미지를 정하는 거예요. 링크의 첫인상을 결정하는 책의 표지 디자인 같은 거예요!"
              },
              {
                task: "쉬운 비유: 책의 표지 디자인 같은 것! 링크의 첫인상",
                detail: "책의 표지 디자인이 좋으면 사람들이 읽고 싶어지듯이, OG 태그가 잘 설정되면 사람들이 링크를 클릭하고 싶어져요. 마케팅에도 정말 중요해요!"
              },
              {
                task: "og:title, og:description, og:image 태그 넣기",
                detail: "HTML의 head 태그 안에 og:title, og:description, og:image 메타 태그를 넣으면 돼요. OG 이미지는 1200x630px 크기가 가장 잘 보여요."
              },
            ],
          tip: "카톡/슬랙에 링크 보냈을 때 예쁘게 나오는 비결이 바로 OG 태그!",
          content: `## OG 메타데이터 🏷️

카톡에 링크 보냈을 때 예쁜 미리보기가 뜨게 만들어요!

**OG 메타데이터란?**
Open Graph = 링크를 공유할 때 보이는 **제목, 설명, 이미지**를 정하는 것!

**쉬운 비유:** 📚
책의 **표지 디자인**과 같아요! 카톡이나 슬랙에 링크를 보내면 나오는 미리보기가 바로 OG 태그!

**HTML에 추가하기:**
\`\`\`html
<head>
  <!-- 기본 OG 태그 -->
  <meta property="og:title" content="MyService - 업무를 10배 빠르게" />
  <meta property="og:description" content="AI가 도와주는 최고의 업무 관리 도구. 무료로 시작하세요!" />
  <meta property="og:image" content="https://myservice.com/og-image.png" />
  <meta property="og:url" content="https://myservice.com" />
  <meta property="og:type" content="website" />

  <!-- 트위터 카드 -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="MyService - 업무를 10배 빠르게" />
</head>
\`\`\`

**OG 이미지 팁:**
- 크기: 1200 x 630px (이 비율이 제일 잘 보여요)
- 서비스 이름과 한 줄 설명을 넣기
- Canva나 Figma로 쉽게 만들 수 있어요!

> 💡 OG 태그 테스트: developers.facebook.com/tools/debug/ 에서 확인할 수 있어요!`,
        },
        {
          day: 43,
          title: "토스페이먼츠 결제 연동 (1)",
          emoji: "💰",
          description:
            "진짜 결제가 되는 시스템을 만들어요! (테스트 모드)",
          tasks: [
              {
                task: "토스페이먼츠란? (한국에서 가장 많이 쓰는 온라인 결제 서비스)",
                detail: "토스페이먼츠는 한국에서 가장 많이 쓰는 온라인 결제 서비스예요. 카드, 카카오페이, 토스 등 다양한 결제 수단을 쉽게 연동할 수 있어요."
              },
              {
                task: "토스페이먼츠 개발자 가입하고 테스트 키 받기",
                detail: "developers.tosspayments.com에 가입하면 테스트 키를 받을 수 있어요. 테스트 모드에서는 진짜 돈이 빠지지 않으니 안심하고 마음껏 테스트하세요!"
              },
              {
                task: "결제 위젯 연동하기 (카드, 간편결제 등)",
                detail: "결제 위젯은 토스페이먼츠가 제공하는 결제 화면이에요. renderPaymentMethods로 결제 방법 선택 UI를 그리고, requestPayment로 결제를 진행해요."
              },
            ],
          tools: ["토스페이먼츠"],
          content: `## 토스페이먼츠 결제 연동 (1) 💰

진짜 결제가 되는 시스템을 만들어요! (테스트 모드)

**토스페이먼츠란?**
한국에서 가장 많이 쓰는 **온라인 결제 서비스**! 카드, 카카오페이, 토스 등 다양한 결제를 쉽게 연동할 수 있어요.

**시작하기:**
1. developers.tosspayments.com 가입
2. 테스트 키 받기 (진짜 돈이 빠지지 않아요!)
3. 클라이언트 키, 시크릿 키 저장

**결제 위젯 연동:**
\`\`\`html
<script src="https://js.tosspayments.com/v1/payment-widget"></script>

<script>
  const clientKey = "test_ck_xxx"; // 테스트 클라이언트 키
  const paymentWidget = PaymentWidget(clientKey, "고객ID");

  // 결제 방법 선택 위젯 그리기
  paymentWidget.renderPaymentMethods("#payment-method", 9900);

  // 결제하기 버튼 클릭 시
  document.getElementById("pay-button").addEventListener("click", () => {
    paymentWidget.requestPayment({
      orderId: "order_" + Date.now(),
      orderName: "Pro 플랜 (월간)",
      successUrl: window.location.origin + "/success",
      failUrl: window.location.origin + "/fail",
    });
  });
</script>
\`\`\`

> 💡 테스트 모드에서는 진짜 돈이 빠지지 않아요! 안심하고 마음껏 테스트하세요! 🧪`,
        },
        {
          day: 44,
          title: "토스페이먼츠 결제 연동 (2)",
          emoji: "🔄",
          description: "결제 확인과 구독 관리 기능을 만들어요",
          tasks: [
              {
                task: "결제 승인 API 연동하기",
                detail: "결제 승인은 사용자가 결제를 완료한 후 서버에서 '진짜 결제가 맞는지' 확인하는 단계예요. 반드시 서버에서 해야 해요. 클라이언트에서 하면 금액 조작이 가능하거든요!"
              },
              {
                task: "구독 결제 (매달 자동 결제) 설정하기",
                detail: "구독 결제는 매달 자동으로 결제되는 방식이에요. 넷플릭스처럼 한 번 결제 설정하면 매달 자동으로 빠져나가요. 토스페이먼츠의 빌링키를 사용해서 구현해요."
              },
              {
                task: "결제 성공/실패 페이지 만들기",
                detail: "결제 성공 시 '결제가 완료되었습니다!' 페이지, 실패 시 '다시 시도해주세요' 페이지를 만들어요. 사용자에게 결과를 명확히 알려주는 게 중요해요."
              },
            ],
          tools: ["토스페이먼츠"],
          content: `## 토스페이먼츠 결제 연동 (2) 🔄

결제 확인과 구독 관리 기능을 만들어요!

**결제 흐름:**
\`\`\`
사용자가 결제 → 토스 페이지로 이동 → 결제 완료 → 우리 사이트로 돌아옴
→ 서버에서 결제 확인(승인) → 완료!
\`\`\`

**결제 승인 API (서버 코드):**
\`\`\`javascript
// /api/confirm-payment.js (Vercel 서버리스 함수)
export default async function handler(req, res) {
  const { paymentKey, orderId, amount } = req.body;

  const response = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(process.env.TOSS_SECRET_KEY + ":"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ paymentKey, orderId, amount }),
  });

  const data = await response.json();

  if (data.status === "DONE") {
    // 결제 성공! DB에 구독 정보 저장
    await supabase.from('subscriptions').insert({
      user_id: userId,
      plan: 'pro',
      status: 'active',
    });
    res.json({ success: true });
  }
}
\`\`\`

**결제 결과 페이지:**
성공 → "결제가 완료되었습니다! Pro 플랜을 시작해요! 🎉"
실패 → "결제에 실패했어요. 다시 시도해주세요. 😢"

> 💡 결제 승인은 반드시 서버에서! 클라이언트에서 하면 누군가 금액을 조작할 수 있어요!`,
        },
        {
          day: 45,
          title: "스킬 및 작업 검증 워크플로",
          emoji: "✅",
          description:
            "결제 전후로 자동 검증하는 워크플로를 만들어요",
          tasks: [
              {
                task: "작업 검증 워크플로란? (각 단계가 제대로 됐는지 자동으로 확인하는 것)",
                detail: "작업 검증 워크플로는 각 단계가 제대로 됐는지 자동으로 확인하는 시스템이에요. 택배 배송 추적처럼 접수 → 발송 → 배달중 → 배달완료를 각 단계마다 체크하는 거예요."
              },
              {
                task: "쉬운 비유: 택배 배송 추적처럼 각 단계를 체크하는 것",
                detail: "택배 추적이 각 단계를 체크하듯이, 결제 워크플로도 금액 검증 → 결제 승인 → DB 저장 → 이메일 발송 → 로그 기록 순서로 체크해요."
              },
              {
                task: "결제 요청 → 검증 → 승인 → 확인 이메일 워크플로 만들기",
                detail: "결제 요청이 들어오면 금액이 맞는지 확인하고, 결제를 승인하고, DB에 구독 정보를 저장하고, 확인 이메일을 보내요. 돈이 오가는 기능은 검증이 생명이에요!"
              },
            ],
          tip: "워크플로 = 자동 체크리스트! 빠뜨리는 단계 없이 안전하게 처리해요",
          content: `## 스킬 및 작업 검증 워크플로 ✅

결제 전후로 자동 검증하는 워크플로를 만들어요!

**작업 검증 워크플로란?**
각 단계가 제대로 됐는지 **자동으로 확인**하는 시스템!

**쉬운 비유:** 📦
택배 배송 추적처럼 각 단계를 체크하는 것!
접수 → 발송 → 배달중 → 배달완료 (각 단계를 확인!)

**결제 워크플로:**
\`\`\`javascript
async function processPayment(paymentData) {
  // 1단계: 금액 검증 ✅
  if (paymentData.amount !== expectedAmount) {
    throw new Error('금액이 일치하지 않습니다!');
  }

  // 2단계: 결제 승인 요청 ✅
  const result = await confirmPayment(paymentData);
  if (!result.success) {
    throw new Error('결제 승인 실패!');
  }

  // 3단계: DB에 구독 정보 저장 ✅
  await saveSubscription(paymentData.userId, 'pro');

  // 4단계: 확인 이메일 발송 ✅
  await sendConfirmationEmail(paymentData.email);

  // 5단계: 로그 기록 ✅
  await logPayment(paymentData);

  return { success: true, message: '모든 단계 완료!' };
}
\`\`\`

**검증이 필요한 이유:**
- 결제 금액이 조작되지 않았는지 확인
- 중복 결제가 되지 않았는지 확인
- 모든 단계가 순서대로 완료됐는지 확인

> 💡 돈이 오가는 기능은 검증이 생명! 한 단계라도 빠지면 큰 문제가 될 수 있어요!`,
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
              {
                task: "회원 목록 페이지 만들기",
                detail: "회원 목록 페이지에서 가입한 사람들의 이름, 이메일, 플랜, 구독 상태를 테이블로 보여줘요. Supabase에서 subscriptions와 profiles를 join해서 가져와요."
              },
              {
                task: "구독 현황 (활성/만료/해지) 관리",
                detail: "구독 상태는 active(활성), expired(만료), cancelled(해지) 3가지로 나눠요. 각 상태를 색깔로 구분하면(초록/빨강) 한눈에 파악하기 쉬워요."
              },
              {
                task: "매출 통계 대시보드",
                detail: "총 회원 수, 활성 구독 수, 이번 달 매출, Free vs Pro 비율 같은 통계를 요약 카드로 보여주면 서비스 현황을 한눈에 파악할 수 있어요."
              },
            ],
          content: `## 회원 관리 & 대시보드 👥

가입한 회원과 구독 현황을 관리하는 페이지를 만들어요!

**회원 목록 페이지:**
\`\`\`jsx
function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data } = await supabase
        .from('subscriptions')
        .select('*, profiles(name, email)')
        .order('created_at', { ascending: false });
      setMembers(data);
    };
    fetchMembers();
  }, []);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>이름</th><th>이메일</th><th>플랜</th><th>상태</th>
        </tr>
      </thead>
      <tbody>
        {members.map(m => (
          <tr key={m.id}>
            <td>{m.profiles.name}</td>
            <td>{m.profiles.email}</td>
            <td>{m.plan}</td>
            <td>
              <span className={m.status === 'active' ? 'text-green-500' : 'text-red-500'}>
                {m.status === 'active' ? '✅ 활성' : '❌ 만료'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
\`\`\`

**구독 통계 요약:**
- 총 회원 수, 활성 구독 수, 이번 달 매출
- 플랜별 비율 (Free vs Pro)

> 💡 관리자 대시보드는 서비스 운영의 핵심! 한눈에 현황을 파악할 수 있어야 해요.`,
        },
        {
          day: 47,
          title: "Vercel 배포 심화",
          emoji: "▲",
          description: "프로답게 배포하고 도메인도 연결해요",
          tasks: [
              {
                task: "Vercel 환경변수 설정 (API 키 보안)",
                detail: "Vercel 환경변수는 Production(실제), Preview(PR 미리보기), Development(로컬) 3가지 환경으로 나눠서 관리할 수 있어요. 각 환경에 맞는 키를 설정하세요."
              },
              {
                task: "커스텀 도메인 연결하기",
                detail: "커스텀 도메인은 'myservice.com' 같은 자기만의 주소예요. Vercel Settings에서 도메인을 추가하고 DNS 설정만 하면 돼요. .vercel.app보다 훨씬 프로페셔널해 보여요!"
              },
              {
                task: "자동 배포 (git push → 자동 반영) 확인",
                detail: "자동 배포(CI/CD)는 git push만 하면 Vercel이 자동으로 빌드하고 배포해주는 거예요. main 브랜치에 push하면 실제 서비스가 업데이트되고, PR을 만들면 미리보기 URL이 생겨요."
              },
            ],
          tools: ["Vercel"],
          content: `## Vercel 배포 심화 ▲

프로답게 배포하고 도메인도 연결해요!

**Vercel 환경변수 관리:**
\`\`\`
Settings → Environment Variables

Production: 실제 서비스에 쓰는 키
Preview: PR 미리보기에 쓰는 키
Development: 로컬 개발에 쓰는 키
\`\`\`

**커스텀 도메인 연결:**
1. 도메인 구매 (예: myservice.com)
2. Vercel → Settings → Domains
3. 도메인 추가 (예: myservice.com)
4. DNS 설정: CNAME → cname.vercel-dns.com

\`\`\`
Before: https://my-project-abc123.vercel.app
After:  https://myservice.com  ← 훨씬 프로페셔널!
\`\`\`

**자동 배포 (CI/CD):**
\`\`\`
git push → GitHub에 코드 올라감 → Vercel이 자동 감지 → 빌드 → 배포!

main 브랜치 push → 실제 서비스 업데이트
PR 만들기 → 미리보기 URL 자동 생성
\`\`\`

**성능 최적화:**
- Vercel Analytics로 방문자 수, 로딩 속도 확인
- Edge Functions로 전세계에서 빠르게 접근

> 💡 커스텀 도메인이 있으면 "내가 만든 서비스"라는 느낌이 확 달라져요!`,
        },
        {
          day: 48,
          title: "에러 처리 & 보안",
          emoji: "🛡️",
          description:
            "결제 서비스는 보안이 생명! 안전하게 만들어요",
          tasks: [
              {
                task: "API 키를 환경변수로 안전하게 관리",
                detail: "API 키는 절대 코드에 직접 쓰지 마세요! 반드시 환경변수(.env)로 관리하고, .gitignore에 .env를 추가해서 GitHub에 올라가지 않게 하세요."
              },
              {
                task: "결제 관련 에러 처리 강화",
                detail: "결제 관련 에러는 특히 꼼꼼하게 처리해야 해요. 네트워크 오류, 카드 거절, 중복 결제 등 다양한 에러 상황에 대비하고 사용자에게 알기 쉬운 메시지를 보여주세요."
              },
              {
                task: "HTTPS, CORS 개념 이해하기",
                detail: "HTTPS는 데이터를 암호화해서 보내는 거고(Vercel이 자동 적용), CORS는 허용된 사이트에서만 API를 쓸 수 있게 막는 거예요. 둘 다 보안의 기본이에요!"
              },
            ],
          content: `## 에러 처리 & 보안 🛡️

결제 서비스는 보안이 생명! 안전하게 만들어요.

**API 키 보안:**
\`\`\`javascript
// ❌ 절대 하면 안 되는 것!
const secretKey = "sk_live_xxxxx"; // 코드에 직접 쓰면 위험!

// ✅ 환경변수로 관리!
const secretKey = process.env.TOSS_SECRET_KEY;
\`\`\`

**HTTPS란?** 🔐
데이터를 **암호화**해서 보내는 것! 비밀편지와 같아요.
- HTTP: "비밀번호는 1234야" (누구나 볼 수 있음!)
- HTTPS: "dk#@fs!23sd" (암호화됨, 안전!)
- Vercel은 자동으로 HTTPS를 적용해줘요!

**CORS란?** 🚧
Cross-Origin Resource Sharing = 다른 사이트에서 우리 API를 못 쓰게 막는 것!
\`\`\`javascript
// 허용된 도메인만 접근 가능하게 설정
const allowedOrigins = ['https://myservice.com'];
\`\`\`

**결제 보안 체크리스트:**
\`\`\`
✅ API 키는 환경변수로 관리
✅ 결제 승인은 서버에서만 처리
✅ 금액 조작 방지 (서버에서 검증)
✅ HTTPS 사용 (Vercel 자동 적용)
✅ 에러 시 민감한 정보 노출 금지
\`\`\`

> 💡 보안은 "나중에"가 아니라 "처음부터"! 특히 결제 관련은 더 신경 써야 해요.`,
        },
        {
          day: 49,
          title: "최종 테스트",
          emoji: "🧪",
          description:
            "전체 결제 흐름을 처음부터 끝까지 테스트해요",
          tasks: [
              {
                task: "회원가입 → 구독 선택 → 결제 → 이용 전체 흐름 테스트",
                detail: "회원가입 → 구독 선택 → 결제 → 이용까지 전체 흐름을 처음부터 끝까지 테스트해요. 한 단계라도 문제가 있으면 사용자가 이탈하니까 꼼꼼히 확인하세요."
              },
              {
                task: "모바일에서 결제 테스트",
                detail: "실제 스마트폰에서 결제 테스트를 꼭 해보세요. Chrome 개발자도구의 모바일 모드도 좋지만, 진짜 폰에서 해봐야 터치 크기, 키보드 등을 정확히 확인할 수 있어요."
              },
              {
                task: "다양한 에러 상황 테스트 (카드 거절, 네트워크 오류 등)",
                detail: "카드 거절, 네트워크 오류, 결제 중 뒤로가기, 새로고침 등 다양한 에러 상황을 일부러 만들어서 테스트해요. 토스페이먼츠 테스트 카드(4330...)를 사용하면 돼요."
              },
            ],
          content: `## 최종 테스트 🧪

전체 결제 흐름을 처음부터 끝까지 테스트해요!

**테스트 시나리오:**
\`\`\`
🧪 시나리오 1: 정상 결제
1. 회원가입 → 2. Pro 플랜 선택 → 3. 결제 → 4. 성공 페이지 → 5. Pro 기능 사용 가능

🧪 시나리오 2: 결제 실패
1. 결제 진행 → 2. 카드 거절 → 3. 실패 페이지 → 4. 다시 시도 가능

🧪 시나리오 3: 모바일 결제
1. 스마트폰에서 접속 → 2. 결제 화면 잘 보이는지 → 3. 터치로 결제 가능한지

🧪 시나리오 4: 예외 상황
1. 결제 중 뒤로가기 → 2. 새로고침 → 3. 네트워크 끊김
\`\`\`

**토스페이먼츠 테스트 카드:**
\`\`\`
카드번호: 4330000000000000 (테스트용)
유효기간: 아무 날짜
CVC: 아무 숫자
\`\`\`

**모바일 테스트 팁:**
- Chrome 개발자도구(F12) → 모바일 모드 📱
- 실제 스마트폰에서도 확인!
- 결제 버튼이 너무 작지 않은지 체크

**버그 발견 시:**
\`\`\`
1. 어떤 상황에서 버그가 나는지 기록
2. 에러 메시지 캡처
3. AI에게 물어보기: "이 에러 메시지가 뭔지 알려줘"
4. 수정 후 다시 테스트!
\`\`\`

> 💡 테스트는 귀찮지만 정말 중요해요! 결제 관련 버그는 큰 문제가 될 수 있어요.`,
        },
        {
          day: 50,
          title: "프로젝트 5 완성!",
          emoji: "🎉",
          description:
            "다섯 번째 프로젝트 완성! 진짜 돈 받는 서비스를 만들었어요!",
          tasks: [
              {
                task: "최종 배포 확인",
                detail: "배포 전에 랜딩 페이지, OG 태그(카톡에 링크 보내서 확인), 회원가입/로그인, 결제, 구독 상태, 관리자 대시보드, 모바일 반응형을 모두 체크하세요."
              },
              {
                task: "README.md 작성",
                detail: "프로젝트 설명서(README.md)에 사용 기술, 핵심 기능, 배운 점을 정리해두세요. 면접에서 이 프로젝트를 설명할 때 그대로 참고할 수 있어요."
              },
              {
                task: "프로젝트 회고 작성",
                detail: "5개 프로젝트 완성! 랜딩 페이지 → 블로그 → AI 챗봇 → 대시보드 → 구독결제 SaaS! 이력서에 '결제 시스템 연동 경험'이라고 쓸 수 있어요!"
              },
            ],
          tip: "결제까지 되는 SaaS를 만들었어요! 이건 진짜 실력이에요! 🚀💰",
          content: `## 프로젝트 5 완성! 🎉

다섯 번째 프로젝트 완성! 진짜 돈 받는 서비스를 만들었어요!

**최종 배포 체크리스트:**
\`\`\`
✅ 랜딩 페이지가 잘 보이나요?
✅ OG 태그가 제대로 나오나요? (카톡에 링크 보내서 확인)
✅ 회원가입/로그인이 되나요?
✅ 결제가 정상 작동하나요?
✅ 구독 상태가 DB에 저장되나요?
✅ 관리자 대시보드가 잘 보이나요?
✅ 모바일에서 전부 잘 되나요?
\`\`\`

**프로젝트 회고 작성:**
\`\`\`markdown
## 프로젝트 5: 구독결제 SaaS 플랫폼

### 사용 기술
HTML/CSS, JavaScript, Supabase, 토스페이먼츠, Vercel

### 핵심 기능
- 구독 결제 (토스페이먼츠 연동)
- 회원 관리 대시보드
- OG 메타데이터로 SNS 미리보기

### 배운 점
- 결제 시스템의 보안 중요성
- 워크플로 검증의 필요성
\`\`\`

**5개 프로젝트 완성! 🏆**
1. SaaS 랜딩 페이지
2. 풀스택 블로그
3. AI 리뷰 챗봇
4. 쇼핑몰 대시보드
5. 구독결제 SaaS 플랫폼

> 💡 결제까지 되는 SaaS를 만들었어요! 이력서에 "결제 시스템 연동 경험"이라고 쓸 수 있어요! 🚀`,
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
              {
                task: "포트폴리오 사이트 기획 (소개, 프로젝트, 기술스택, 연락처)",
                detail: "포트폴리오 사이트에는 소개(이름, 한 줄 소개), 기술 스택, 프로젝트 카드 5개, 연락처(이메일, GitHub)가 필요해요. 이것이 여러분의 '개발자 명함'이에요!"
              },
              {
                task: "AI에게 '개발자 포트폴리오 사이트 만들어줘' 요청",
                detail: "AI에게 구체적으로 요청하세요. '히어로 섹션, 기술 스택 아이콘, 프로젝트 카드(스크린샷+설명+기술태그+링크), 연락처, 스크롤 애니메이션, 다크모드'를 포함해달라고 하면 좋아요."
              },
              {
                task: "5개 프로젝트 정보 넣기",
                detail: "5개 프로젝트의 제목, 설명, 사용 기술, 라이브 URL, GitHub URL을 정리해서 카드 형태로 보여줘요. 스크린샷이 있으면 더 좋아요!"
              },
            ],
          content: `## 포트폴리오 사이트 만들기 🌟

5개 프로젝트를 멋지게 보여주는 포트폴리오 사이트!

**포트폴리오 구성:**
\`\`\`
1. 소개 섹션: 이름, 한 줄 소개, 프로필 사진
2. 기술 스택: 사용할 수 있는 기술 목록
3. 프로젝트: 5개 프로젝트 카드
4. 연락처: 이메일, GitHub, 블로그 링크
\`\`\`

**AI에게 요청하는 프롬프트:**
\`\`\`
"React + Tailwind CSS로 개발자 포트폴리오 사이트를 만들어줘.
- 히어로 섹션: 이름, 소개, 프로필 이미지
- 기술 스택: 아이콘과 함께 보여주기
- 프로젝트 섹션: 카드 형태로 5개 프로젝트
  (각 카드에 스크린샷, 제목, 설명, 기술 태그, 링크)
- 연락처 섹션: 이메일, GitHub
- 스크롤 애니메이션 추가
- 다크모드 지원"
\`\`\`

**프로젝트 카드에 넣을 정보:**
\`\`\`javascript
const projects = [
  {
    title: "SaaS 랜딩 페이지",
    description: "AI 디자인 도구로 만든 반응형 랜딩 페이지",
    tech: ["HTML", "CSS", "스티치디자인", "Vercel"],
    liveUrl: "https://...",
    githubUrl: "https://..."
  },
  // ... 5개 프로젝트
];
\`\`\`

> 💡 포트폴리오는 여러분의 "개발자 명함"이에요! 첫인상이 중요합니다.`,
        },
        {
          day: 52,
          title: "포트폴리오 완성 & 배포",
          emoji: "🚀",
          description:
            "포트폴리오를 배포하고 GitHub 프로필을 정리해요",
          tasks: [
              {
                task: "포트폴리오 Vercel 배포",
                detail: "포트폴리오를 Vercel로 배포하면 나만의 포트폴리오 URL이 생겨요. 커스텀 도메인을 연결하면 더 프로페셔널해 보여요!"
              },
              {
                task: "GitHub 프로필 README 작성",
                detail: "GitHub에서 자기 이름과 같은 리포지토리를 만들면 프로필 페이지에 README가 보여요! 프로젝트 목록, 기술 스택, 연락처를 깔끔하게 정리해두세요."
              },
              {
                task: "각 프로젝트 README 최종 정리",
                detail: "각 프로젝트의 README.md에 프로젝트 설명, 사용 기술, 실행 방법, 스크린샷을 넣어두세요. 채용 담당자가 GitHub를 볼 때 좋은 인상을 줘요!"
              },
            ],
          tools: ["Vercel", "GitHub"],
          content: `## 포트폴리오 완성 & 배포 🚀

포트폴리오를 배포하고 GitHub 프로필을 정리해요!

**Vercel 배포:**
\`\`\`bash
git add .
git commit -m "포트폴리오 사이트 완성!"
git push origin main
# Vercel이 자동으로 배포!
\`\`\`

**GitHub 프로필 README:**
GitHub에서 자기 이름과 같은 리포지토리를 만들면 프로필에 README가 보여요!

\`\`\`markdown
# 안녕하세요! 👋 바이브코더 [이름]입니다!

## 🚀 프로젝트
| 프로젝트 | 설명 | 링크 |
|---------|------|------|
| SaaS 랜딩 페이지 | AI 디자인 + 배포 | [보기](url) |
| 풀스택 블로그 | React + Supabase | [보기](url) |
| AI 리뷰 챗봇 | RAG + Pinecone | [보기](url) |
| 쇼핑몰 대시보드 | CRUD + 차트 | [보기](url) |
| 구독결제 SaaS | 토스페이먼츠 연동 | [보기](url) |

## 🛠️ 기술 스택
React, Supabase, Tailwind CSS, Vercel, Pinecone, LangChain

## 📫 연락처
- Email: myemail@gmail.com
\`\`\`

> 💡 GitHub 프로필은 개발자의 첫인상! 깔끔하게 정리해놓으면 좋은 인상을 줘요.`,
        },
        {
          day: 53,
          title: "코드 품질 개선",
          emoji: "✨",
          description: "5개 프로젝트 코드를 깔끔하게 정리해요",
          tasks: [
              {
                task: "코드 리팩토링이란? (동작은 같지만 코드를 깔끔하게 다시 쓰는 것)",
                detail: "리팩토링은 동작은 같지만 코드를 더 깔끔하고 읽기 좋게 다시 쓰는 거예요. 방 청소처럼 물건은 그대로지만 정리하면 찾기 쉽고 깔끔해져요!"
              },
              {
                task: "AI에게 '이 코드 개선해줘' 요청하기",
                detail: "AI에게 '이 코드 리팩토링해줘. 변수명 명확하게, 에러 처리 추가, 중복 제거, 주석 추가해줘'라고 요청하면 깔끔한 코드로 바꿔줘요."
              },
              {
                task: "각 프로젝트에서 가장 지저분한 부분 1개씩 개선",
                detail: "5개 프로젝트 각각에서 가장 지저분한 부분 1개씩 골라서 개선해봐요. 작은 개선이 모이면 코드 품질이 크게 좋아져요!"
              },
            ],
          content: `## 코드 품질 개선 ✨

5개 프로젝트 코드를 깔끔하게 정리해요!

**리팩토링이란?**
동작은 같지만 코드를 **더 깔끔하고 읽기 좋게** 다시 쓰는 것!

**쉬운 비유:** 🧹
방 청소! 물건은 그대로지만, 정리하면 찾기 쉽고 깔끔해져요.

**Before (지저분한 코드):**
\`\`\`javascript
// ❌ 반복되는 코드, 이름이 불명확
const d = await supabase.from('posts').select('*');
const d2 = d.data;
if(d2){
  for(let i=0;i<d2.length;i++){
    console.log(d2[i].title)
  }
}
\`\`\`

**After (깔끔한 코드):**
\`\`\`javascript
// ✅ 명확한 이름, 에러 처리, 모던 문법
const { data: posts, error } = await supabase
  .from('posts')
  .select('*');

if (error) {
  console.error('글을 불러오는데 실패했습니다:', error);
  return;
}

posts?.forEach(post => console.log(post.title));
\`\`\`

**AI에게 리팩토링 요청:**
\`\`\`
"이 코드를 리팩토링해줘.
- 변수명을 더 명확하게
- 에러 처리 추가
- 중복 코드 제거
- 주석 추가"
\`\`\`

> 💡 깔끔한 코드 = 미래의 나에게 주는 선물! 6개월 후에 봐도 이해할 수 있어야 해요.`,
        },
        {
          day: 54,
          title: "프로젝트별 개선점 추가",
          emoji: "💡",
          description:
            "각 프로젝트에 한 가지씩 새 기능을 추가해요",
          tasks: [
              {
                task: "프로젝트 1: 애니메이션 추가",
                detail: "프로젝트 1 랜딩 페이지에 스크롤 애니메이션을 추가하면 훨씬 역동적이고 멋져 보여요. CSS의 opacity와 transform을 활용하면 돼요."
              },
              {
                task: "프로젝트 2: 댓글 기능 추가",
                detail: "프로젝트 2 블로그에 댓글 기능을 추가해봐요. comments 테이블을 만들고, post_id로 글과 연결하면 돼요. CRUD를 이미 배웠으니 어렵지 않을 거예요!"
              },
              {
                task: "프로젝트 3~5: 자유롭게 개선",
                detail: "프로젝트 3~5도 하나씩 개선해봐요. 챗봇에 추천 질문 버튼, 대시보드에 엑셀 내보내기, SaaS에 요금제 비교표 등을 추가하면 완성도가 올라가요."
              },
            ],
          content: `## 프로젝트별 개선점 추가 💡

각 프로젝트에 한 가지씩 새 기능을 추가해요!

**프로젝트 1 - 랜딩 페이지: 애니메이션 추가** ✨
\`\`\`css
/* 스크롤하면 나타나는 효과 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
\`\`\`

**프로젝트 2 - 블로그: 댓글 기능 추가** 💬
\`\`\`javascript
// comments 테이블 만들기
const { data } = await supabase
  .from('comments')
  .insert({
    post_id: postId,
    content: commentText,
    user_id: user.id
  });
\`\`\`

**프로젝트 3 - 챗봇: 추천 질문 버튼** 🤖
자주 묻는 질문을 버튼으로 보여주기!

**프로젝트 4 - 대시보드: 엑셀 내보내기** 📊
주문 목록을 CSV 파일로 다운로드!

**프로젝트 5 - SaaS: 요금제 비교 표** 💳
Free vs Pro 기능 비교를 한눈에!

> 💡 작은 기능 하나가 프로젝트를 더 완성도 있게 만들어요! 면접에서 "추가로 이런 개선을 했어요"라고 말할 수 있어요.`,
        },
        {
          day: 55,
          title: "기술 블로그 글 쓰기",
          emoji: "✍️",
          description:
            "배운 것을 글로 정리하면 실력이 두 배가 돼요!",
          tasks: [
              {
                task: "'바이브코딩으로 3개월만에 5개 프로젝트 만든 후기' 글 쓰기",
                detail: "'바이브코딩으로 3개월만에 5개 프로젝트 만든 후기'라는 주제로 글을 써봐요. 시작 배경, 각 프로젝트 소개, 어려웠던 점, 배운 점을 정리하면 좋은 글이 돼요."
              },
              {
                task: "가장 어려웠던 기술과 극복 방법 공유",
                detail: "가장 어려웠던 기술(예: RAG, RLS)과 어떻게 극복했는지를 솔직하게 공유해봐요. 초보자의 시선으로 쓴 글이 오히려 더 많은 사람에게 도움이 돼요!"
              },
              {
                task: "블로그에 올리기",
                detail: "velog.io(한국 개발자 블로그), medium.com, 또는 직접 만든 블로그에 올려보세요. 기술 블로그는 최고의 이력서예요!"
              },
            ],
          tip: "개발자의 실력은 코드 + 글쓰기! 기술 블로그가 최고의 이력서예요",
          content: `## 기술 블로그 글 쓰기 ✍️

배운 것을 글로 정리하면 실력이 두 배가 돼요!

**왜 기술 블로그를 써야 하나요?**
- 📝 글로 쓰면 더 잘 이해하게 돼요
- 👀 다른 사람이 보고 실력을 알 수 있어요
- 💼 취업할 때 큰 도움이 돼요
- 🎁 초보자에게 도움을 줄 수 있어요

**블로그 글 구조:**
\`\`\`markdown
# 바이브코딩으로 3개월만에 5개 프로젝트 만든 후기

## 시작 배경
코딩을 전혀 몰랐던 내가 바이브코딩을 시작한 이유...

## 프로젝트 소개
### 1. SaaS 랜딩 페이지
- 사용 기술: 스티치디자인, 안티그래비티, Vercel
- 배운 점: AI 디자인 도구의 가능성

### 2. 풀스택 블로그
- 사용 기술: React, Supabase, Tailwind CSS
- 가장 어려웠던 점: RLS 개념 이해하기

## 가장 어려웠던 순간
RAG 개념을 처음 접했을 때... 하지만 비유로 이해하니까 쉬웠어요!

## 앞으로의 계획
더 복잡한 프로젝트에 도전하고 싶어요!
\`\`\`

**어디에 올릴까?**
- velog.io (한국 개발자 블로그)
- medium.com
- 직접 만든 블로그!

> 💡 완벽하지 않아도 괜찮아요! 초보자의 시선으로 쓴 글이 오히려 더 많은 사람에게 도움이 돼요.`,
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
              {
                task: "기술 스택 맵 만들기 (프론트엔드, 백엔드, AI, 배포, 도구)",
                detail: "3개월간 배운 기술을 프론트엔드, 백엔드, AI, 결제, 배포&도구 카테고리로 분류해서 한눈에 보이는 기술 스택 맵을 만들어봐요."
              },
              {
                task: "각 기술별 한 줄 정리",
                detail: "각 기술별로 한 줄 정리를 해봐요. 예: 'React = 레고 블록처럼 UI를 조립하는 도구', 'Supabase = 무료 백엔드 서비스'. 면접에서 물어볼 때 바로 답할 수 있어요!"
              },
              {
                task: "자신있는 기술 / 더 배울 기술 분류",
                detail: "자신있는 기술(별 3개), 쓸 수 있는 기술(별 2개), 더 배울 기술(별 1개)로 분류해봐요. 이 목록을 이력서의 '기술 스택' 섹션에 그대로 쓸 수 있어요!"
              },
            ],
          content: `## 전체 기술 스택 정리 🗺️

3개월간 배운 모든 기술을 한눈에 정리해요!

**기술 스택 맵:**
\`\`\`
🎨 프론트엔드
├── HTML / CSS
├── JavaScript
├── React
├── Tailwind CSS
└── 반응형 디자인

⚙️ 백엔드
├── Supabase (DB + Auth + Storage)
├── SQL (기본 CRUD)
├── RLS (보안)
└── API 연동

🤖 AI
├── RAG (검색 기반 AI 답변)
├── 벡터 DB (Pinecone)
├── 랭체인 (LangChain)
├── 임베딩
└── 프롬프트 엔지니어링

💳 결제
├── 토스페이먼츠
└── 구독 결제 시스템

🚀 배포 & 도구
├── Git / GitHub
├── Vercel
├── Cursor IDE
├── 스티치디자인
├── 안티그래비티
└── MCP
\`\`\`

**자기 평가:**
- ⭐⭐⭐ 자신있는 기술: (예: React, Supabase, Vercel)
- ⭐⭐ 쓸 수 있는 기술: (예: RAG, 토스페이먼츠)
- ⭐ 더 배울 기술: (예: TypeScript, Next.js)

> 💡 이 목록을 이력서의 "기술 스택" 섹션에 그대로 쓸 수 있어요!`,
        },
        {
          day: 57,
          title: "개발자 커뮤니티 참여",
          emoji: "👥",
          description:
            "혼자 공부 끝! 커뮤니티에서 함께 성장해요",
          tasks: [
              {
                task: "개발자 디스코드/오픈카톡 참여하기",
                detail: "개발자 디스코드 서버나 오픈카톡방에 가입해봐요. '프론트엔드 코리아', 'Supabase Korea', '바이브코딩' 같은 커뮤니티에서 다른 개발자들과 소통할 수 있어요."
              },
              {
                task: "내 프로젝트 공유하고 피드백 받기",
                detail: "내가 만든 프로젝트를 커뮤니티에 공유하고 피드백을 받아봐요. '코딩 초보가 만든 5개 프로젝트입니다. 피드백 환영!' 이렇게 올리면 다들 응원해줘요!"
              },
              {
                task: "다른 사람의 프로젝트에 피드백 남기기",
                detail: "다른 사람의 프로젝트에도 피드백을 남겨봐요. 코드를 읽는 것도 실력이 되고, 피드백을 주다 보면 더 많이 배울 수 있어요."
              },
            ],
          content: `## 개발자 커뮤니티 참여 👥

혼자 공부 끝! 커뮤니티에서 함께 성장해요!

**왜 커뮤니티가 중요한가요?**
- 🤝 모르는 것을 물어볼 수 있어요
- 💡 다른 사람의 코드에서 배워요
- 🔥 동기부여를 받아요
- 🎯 취업/프리랜서 기회를 얻어요

**추천 커뮤니티:**
\`\`\`
🇰🇷 한국 커뮤니티
- 디스코드: 코딩 관련 서버 (프론트엔드 코리아, Supabase Korea 등)
- 오픈카톡: "바이브코딩", "React 스터디" 등
- velog: 기술 블로그 플랫폼

🌍 글로벌 커뮤니티
- GitHub: 오픈소스 프로젝트 참여
- Reddit: r/webdev, r/reactjs
- Discord: 각 기술별 공식 서버
\`\`\`

**프로젝트 공유하는 방법:**
\`\`\`markdown
## 🚀 3개월간 만든 5개 프로젝트 공유합니다!

코딩을 전혀 몰랐던 초보가 바이브코딩으로 만든 프로젝트입니다.
피드백 환영합니다! 🙏

1. [SaaS 랜딩 페이지](URL)
2. [풀스택 블로그](URL)
3. [AI 리뷰 챗봇](URL)
4. [쇼핑몰 대시보드](URL)
5. [구독결제 SaaS](URL)
\`\`\`

> 💡 피드백을 받으면 성장이 빨라져요! 비판이 아니라 배움의 기회로 생각하세요.`,
        },
        {
          day: 58,
          title: "다음 목표 설정",
          emoji: "🎯",
          description: "3개월 이후의 방향을 정해요",
          tasks: [
              {
                task: "관심 분야 선택: 프론트엔드? 백엔드? AI? 풀스택?",
                detail: "프론트엔드, 백엔드, AI, 풀스택 중 가장 재미있었던 분야를 선택해봐요. '뭐든 잘 하고 싶다'보다 '이걸 잘 하고 싶다'가 훨씬 빠르게 성장해요!"
              },
              {
                task: "다음 3개월 학습 계획 세우기",
                detail: "다음 3개월 학습 계획을 세워봐요. 예를 들어 '4개월차: TypeScript + Next.js → 5개월차: 프로젝트 1개 → 6개월차: 취업 준비' 이런 식으로요."
              },
              {
                task: "도전할 새 프로젝트 아이디어 정리",
                detail: "소셜 미디어 클론, 음악 추천 AI 앱, 일정 관리 SaaS 등 새 프로젝트 아이디어를 정리해봐요. 직접 쓰고 싶은 앱을 만드는 게 가장 재미있어요!"
              },
            ],
          content: `## 다음 목표 설정 🎯

3개월 이후의 방향을 정해요!

**관심 분야 선택:**
\`\`\`
🎨 프론트엔드 전문가
- Next.js, TypeScript 배우기
- 애니메이션 (Framer Motion)
- 접근성, 성능 최적화

⚙️ 백엔드 전문가
- Node.js, Python
- PostgreSQL 심화
- AWS, Docker

🤖 AI 엔지니어
- 파인튜닝, 프롬프트 엔지니어링 심화
- AI 에이전트 개발
- 멀티모달 AI

🥞 풀스택 개발자
- Next.js (프론트+백 통합)
- 인증/보안 심화
- 대규모 서비스 설계
\`\`\`

**다음 3개월 학습 계획 예시:**
\`\`\`
4개월차: TypeScript + Next.js 기초
5개월차: Next.js로 프로젝트 1개 만들기
6개월차: 취업 준비 또는 프리랜서 시작!
\`\`\`

**새 프로젝트 아이디어:**
- 📱 소셜 미디어 클론 (인스타그램 스타일)
- 🎵 음악 추천 AI 앱
- 📅 일정 관리 SaaS
- 🛒 실제 쇼핑몰 (결제 포함)

> 💡 방향을 정하는 게 중요해요! "뭐든 잘 하고 싶다"보다 "이걸 잘 하고 싶다"가 훨씬 빠르게 성장해요.`,
        },
        {
          day: 59,
          title: "최종 포트폴리오 점검",
          emoji: "🔍",
          description:
            "모든 프로젝트가 잘 돌아가는지 최종 점검!",
          tasks: [
              {
                task: "5개 프로젝트 URL 모두 접속 확인",
                detail: "5개 프로젝트 URL에 모두 접속해서 잘 되는지 확인하세요. 무료 서비스는 가끔 슬립 모드로 들어가니까, 중요한 프로젝트는 주기적으로 접속해주는 게 좋아요."
              },
              {
                task: "모바일에서 전부 테스트",
                detail: "각 프로젝트를 실제 스마트폰에서 접속해봐요. 글씨 크기, 버튼 터치 영역, 레이아웃 깨짐이 없는지 꼼꼼히 확인하세요."
              },
              {
                task: "GitHub 프로필 & 포트폴리오 최종 확인",
                detail: "GitHub 프로필 README가 최신 상태인지, 각 리포지토리에 README.md가 있는지, 코드에 .env 키 같은 민감한 정보가 없는지 최종 확인하세요."
              },
            ],
          content: `## 최종 포트폴리오 점검 🔍

모든 프로젝트가 잘 돌아가는지 최종 점검!

**5개 프로젝트 접속 체크:**
\`\`\`
프로젝트 1 - SaaS 랜딩 페이지
  ✅ URL 접속 가능?
  ✅ 반응형 (모바일) 동작?
  ✅ 모든 섹션 표시?

프로젝트 2 - 풀스택 블로그
  ✅ 글 목록 표시?
  ✅ 글 쓰기/수정/삭제?
  ✅ 로그인 기능?

프로젝트 3 - AI 챗봇
  ✅ 채팅 동작?
  ✅ AI 답변 정상?
  ✅ 로딩 표시?

프로젝트 4 - 쇼핑몰 대시보드
  ✅ 관리자 로그인?
  ✅ 상품 CRUD?
  ✅ 차트 표시?

프로젝트 5 - 구독결제 SaaS
  ✅ 결제 흐름 정상?
  ✅ OG 태그 표시?
  ✅ 회원 관리?
\`\`\`

**모바일 테스트:**
각 프로젝트를 스마트폰에서 접속해보세요!
- 글씨가 너무 작지 않은지
- 버튼이 잘 눌리는지
- 레이아웃이 깨지지 않는지

**GitHub 정리:**
- 각 리포지토리에 README.md 있는지
- 코드에 민감한 정보(.env 키 등) 없는지
- GitHub 프로필 README 최신 상태인지

> 💡 포트폴리오는 여러분의 실력 증명서! 꼼꼼히 점검하세요.`,
        },
        {
          day: 60,
          title: "수료! 🎉🎓",
          emoji: "🎓",
          description:
            "축하합니다! 3개월 바이브코딩 마스터 과정 수료!",
          tasks: [
              {
                task: "3개월 학습 여정 회고 작성",
                detail: "3개월간의 여정을 회고해봐요. Day 1에 '코딩이 뭐예요?'했던 사람이 Day 60에 '5개 프로젝트+포트폴리오 완성!'까지 왔어요. 정말 대단한 성장이에요!"
              },
              {
                task: "완성한 5개 프로젝트 + 포트폴리오 자랑하기!",
                detail: "완성한 5개 프로젝트(랜딩 페이지, 블로그, AI 챗봇, 대시보드, 구독결제 SaaS)와 포트폴리오 사이트를 주변 사람에게 자랑해봐요. 여러분의 실력 증명이에요!"
              },
              {
                task: "이제 진짜 바이브코더! 다음 여정을 시작해요!",
                detail: "이제 아이디어를 실제 서비스로 만들고, AI를 활용해서 빠르게 개발하고, 포트폴리오로 실력을 증명할 수 있어요. 진짜 바이브코더의 새로운 여정을 시작하세요!"
              },
            ],
          tip: "축하합니다! 🎉🎓 3개월 전에는 코딩을 몰랐는데, 지금은 5개 프로젝트를 가진 바이브코더예요! 정말 대단해요!",
          content: `## 수료! 🎉🎓

축하합니다! 3개월 바이브코딩 마스터 과정 수료!

**3개월간의 여정:**
\`\`\`
Day 1:  "코딩이 뭐예요?" 🐣
Day 20: "풀스택 블로그를 만들었어요!" 💪
Day 40: "AI 챗봇과 대시보드까지!" 🤖
Day 60: "결제 SaaS + 포트폴리오 완성!" 🏆
\`\`\`

**완성한 프로젝트:**
1. 🎨 SaaS 랜딩 페이지 - AI 디자인 + 배포
2. 📝 풀스택 블로그 - React + Supabase + Auth
3. 🤖 AI 리뷰 챗봇 - RAG + 벡터DB + 랭체인
4. 📊 쇼핑몰 대시보드 - CRUD + Storage + 차트
5. 💳 구독결제 SaaS - 토스페이먼츠 + 보안
6. 🌟 포트폴리오 사이트 - 모든 프로젝트 통합

**배운 기술:**
React, Supabase, Tailwind CSS, Git, Vercel, RAG, Pinecone, LangChain, 토스페이먼츠, MCP, Cursor...

**여러분은 이제:**
- ✅ 아이디어를 실제 서비스로 만들 수 있어요
- ✅ AI를 활용해서 빠르게 개발할 수 있어요
- ✅ 포트폴리오로 실력을 증명할 수 있어요
- ✅ 진짜 바이브코더예요!

> 🎊 **정말 축하합니다!** 3개월 전에는 코딩을 전혀 몰랐는데, 지금은 5개 프로젝트를 가진 개발자예요! 이제 여러분의 새로운 여정을 시작하세요! 🚀`,
        },
      ],
    },
  ],
};

export const curriculum: CurriculumMonth[] = [month1, month2, month3];
