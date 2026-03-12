import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RotateCcw } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: number;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'bot',
  content: '안녕하세요! 🐰 저는 Hare\'s Vibe Cording의 코딩 도우미예요!\n\n무엇이든 물어보세요:\n• "변수가 뭐야?"\n• "React 알려줘"\n• "바이브코딩이 뭐야?"\n• "Supabase 설명해줘"\n\n쉽게 설명해드릴게요! 💬',
  timestamp: Date.now(),
};

const QUICK_QUESTIONS = [
  '바이브코딩이 뭐야?',
  'React가 뭐야?',
  'API가 뭐야?',
  'Git 어떻게 써?',
  'Supabase가 뭐야?',
  'RAG가 뭐야?',
];

// Knowledge base for the chatbot
const KNOWLEDGE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['바이브코딩', 'vibe coding', '바이브 코딩'],
    answer: '🎵 **바이브코딩**이란?\n\nAI에게 말로 설명하면 코드를 만들어주는 새로운 코딩 방법이에요!\n\n예를 들어:\n• "로그인 페이지 만들어줘" → AI가 코드 생성!\n• "이 버그 고쳐줘" → AI가 수정!\n\n직접 코드를 다 쓰지 않아도 앱을 만들 수 있어요. 핵심은 **무엇을 만들고 싶은지 명확하게 설명하는 것**이에요! 💪',
  },
  {
    keywords: ['변수', 'variable', 'let', 'const'],
    answer: '📦 **변수**는 데이터를 담아두는 상자예요!\n\n```\nlet myName = "디미";\nconst age = 20;\n```\n\n• `let` = 나중에 바꿀 수 있는 상자\n• `const` = 한번 넣으면 못 바꾸는 상자\n\n비유하면 이름표 붙은 서랍이에요. "myName" 서랍을 열면 "디미"가 나오는 거죠! 🏷️',
  },
  {
    keywords: ['함수', 'function', '펑션'],
    answer: '🧑‍🍳 **함수**는 반복해서 쓸 수 있는 레시피예요!\n\n```\nfunction sayHello(name) {\n  console.log("안녕, " + name + "!");\n}\n\nsayHello("디미"); // "안녕, 디미!"\nsayHello("하레"); // "안녕, 하레!"\n```\n\n한 번 만들어두면 이름만 불러서 실행할 수 있어요! 🔄',
  },
  {
    keywords: ['react', '리액트'],
    answer: '⚛️ **React**는 웹페이지를 레고 블록처럼 조립해서 만드는 도구예요!\n\n각 블록을 **컴포넌트**라고 해요:\n```\nfunction Button() {\n  return <button>클릭!</button>;\n}\n```\n\n• 버튼 블록, 헤더 블록, 카드 블록...\n• 블록을 조합하면 완성된 페이지!\n\nInstagram, Netflix도 React로 만들었어요! 🧱',
  },
  {
    keywords: ['api', '에이피아이'],
    answer: '📞 **API**는 프로그램끼리 대화하는 전화기예요!\n\n예를 들어:\n• 날씨 앱 → 기상청 API에 전화 → "서울 날씨 알려줘" → "맑음, 25도"\n\n```\nfetch("/api/weather?city=서울")\n  .then(res => res.json())\n  .then(data => console.log(data));\n```\n\n우리 앱이 다른 서비스의 데이터를 가져올 수 있게 해줘요! 🌐',
  },
  {
    keywords: ['git', '깃'],
    answer: '⏰ **Git**은 코드의 타임머신이에요!\n\n자주 쓰는 명령어:\n```\ngit add .          # 변경사항 준비\ngit commit -m "메시지"  # 저장 지점 만들기\ngit push           # GitHub에 올리기\n```\n\n• 실수해도 과거로 돌아갈 수 있어요\n• GitHub에 올리면 어디서든 코드를 볼 수 있어요\n\n게임의 세이브 포인트와 같아요! 💾',
  },
  {
    keywords: ['supabase', '수파베이스'],
    answer: '💚 **Supabase**는 무료 백엔드 서비스예요!\n\n한 곳에서 다 해줘요:\n• 📊 데이터베이스 (데이터 저장)\n• 🔐 로그인 (Auth)\n• 📁 파일 저장 (Storage)\n• ⚡ 실시간 업데이트\n\n```\nconst { data } = await supabase\n  .from("posts")\n  .select("*");\n```\n\n백엔드를 직접 만들 필요 없이 Supabase가 다 해줘요! 🚀',
  },
  {
    keywords: ['rag'],
    answer: '🧠 **RAG** (Retrieval Augmented Generation)란?\n\nAI에게 커닝 페이퍼를 주는 기술이에요! 📄\n\n1. 우리 데이터를 벡터로 변환해서 저장\n2. 질문이 들어오면 관련 데이터를 검색\n3. 찾은 데이터를 AI에게 "이걸 보고 답해!" 전달\n\n예: "이 상품 배송 빠른가요?"\n→ 관련 리뷰 검색 → AI가 리뷰 기반으로 답변!\n\nAI가 우리 데이터를 아는 척(?) 할 수 있게 해줘요! 😄',
  },
  {
    keywords: ['html'],
    answer: '🦴 **HTML**은 웹페이지의 뼈대예요!\n\n```\n<h1>제목이에요</h1>\n<p>여기는 문단이에요</p>\n<button>클릭!</button>\n<img src="photo.jpg" />\n```\n\n• `<h1>` = 큰 제목\n• `<p>` = 문단\n• `<button>` = 버튼\n• `<img>` = 이미지\n\n글, 사진, 버튼의 위치를 정해주는 설계도예요! 📐',
  },
  {
    keywords: ['css'],
    answer: '🎨 **CSS**는 웹페이지의 스타일리스트예요!\n\nHTML이 뼈대라면, CSS는 옷과 화장이에요:\n```\nh1 {\n  color: blue;\n  font-size: 24px;\n}\n\nbutton {\n  background: purple;\n  border-radius: 10px;\n}\n```\n\n색깔, 크기, 위치, 애니메이션 등 모든 디자인을 담당해요! ✨',
  },
  {
    keywords: ['javascript', '자바스크립트', 'js'],
    answer: '🧙 **JavaScript**는 웹페이지에 생명을 불어넣는 마법사예요!\n\nHTML = 뼈대, CSS = 옷, JavaScript = 움직임!\n\n```\nbutton.addEventListener("click", () => {\n  alert("클릭했어요!");\n});\n```\n\n• 버튼 클릭하면 반응하기\n• 데이터 가져와서 보여주기\n• 실시간으로 화면 바꾸기\n\n웹의 모든 동적인 기능은 JavaScript 덕분이에요! 💫',
  },
  {
    keywords: ['vercel', '버셀'],
    answer: '▲ **Vercel**은 웹사이트를 인터넷에 무료로 올려주는 서비스예요!\n\n사용법이 정말 쉬워요:\n1. GitHub에 코드 올리기\n2. Vercel에서 연결하기\n3. 끝! 자동으로 배포!\n\n```\ngit push → Vercel 자동 감지 → 빌드 → 배포!\nhttps://my-app.vercel.app 완성!\n```\n\ngit push만 하면 자동으로 업데이트돼요! 🌍',
  },
  {
    keywords: ['tailwind', '테일윈드'],
    answer: '🎨 **Tailwind CSS**는 클래스 이름으로 스타일링하는 도구예요!\n\n일반 CSS:\n```\n.button { background: blue; padding: 8px 16px; border-radius: 8px; }\n```\n\nTailwind:\n```\n<button class="bg-blue-500 px-4 py-2 rounded-lg">\n```\n\n클래스 이름만 적으면 끝! CSS 파일을 따로 안 만들어도 돼요. 빠르고 편해요! ⚡',
  },
  {
    keywords: ['mcp'],
    answer: '🎮 **MCP** (Model Context Protocol)란?\n\nAI에게 외부 도구의 리모컨을 쥐여주는 규격이에요!\n\n예를 들어 Supabase MCP를 연결하면:\n• AI가 직접 DB에서 데이터를 조회하고\n• 테이블을 만들고\n• 데이터를 수정할 수 있어요!\n\n"AI야, 이 리모컨으로 Supabase를 직접 조작해!" 하는 거예요. 🕹️',
  },
  {
    keywords: ['프롬프트', 'prompt'],
    answer: '💬 **프롬프트**는 AI에게 하는 요청이에요!\n\n❌ 나쁜 프롬프트:\n"웹사이트 만들어줘"\n\n✅ 좋은 프롬프트:\n"React + Tailwind로 할일 목록 앱을 만들어줘.\n체크박스, 삭제 버튼, localStorage 저장 포함해줘"\n\n**좋은 프롬프트 공식:**\n[기술스택] + [구체적 기능] + [스타일] + [제약조건]\n\n구체적일수록 AI가 더 좋은 결과를 줘요! 🎯',
  },
  {
    keywords: ['cursor', '커서'],
    answer: '✨ **Cursor**는 AI가 내장된 코드 에디터예요!\n\nVS Code랑 비슷하게 생겼는데, AI가 코드를 도와줘요:\n\n• **Cmd+K**: AI에게 코드 생성/수정 요청\n• **Cmd+L**: AI와 대화하며 질문\n• **Tab**: AI 자동완성 수락\n\n코딩하면서 바로 AI에게 물어볼 수 있어서 정말 편해요! 🚀',
  },
  {
    keywords: ['안티그래비티', 'antigravity'],
    answer: '🚀 **안티그래비티**는 바이브코딩 플랫폼이에요!\n\nAI에게 말하면 웹사이트를 뚝딱 만들어주는 서비스:\n\n1. "쇼핑몰 만들어줘" 요청\n2. AI가 디자인 + 코드 자동 생성\n3. 바로 배포까지!\n\n코딩을 하나도 몰라도 AI 에이전트가 알아서 만들어줘요. 디자인부터 배포까지 한 번에! ⚡',
  },
  {
    keywords: ['토스페이먼츠', 'toss', '결제'],
    answer: '💳 **토스페이먼츠**는 온라인 결제를 쉽게 넣을 수 있는 서비스예요!\n\n카드, 간편결제, 계좌이체 등을 내 앱에 연동할 수 있어요:\n\n```\ntossPayments.requestPayment("카드", {\n  amount: 9900,\n  orderId: "order-001",\n  orderName: "프리미엄 구독"\n});\n```\n\n테스트 모드로 안전하게 연습할 수 있어요! 💰',
  },
  {
    keywords: ['pinecone', '파인콘'],
    answer: '🌲 **Pinecone**은 벡터 데이터베이스예요!\n\n텍스트를 숫자(벡터)로 바꿔서 저장하면:\n• "맛있다" → [0.8, 0.2, ...]\n• "존맛탱" → [0.79, 0.21, ...]\n→ 비슷한 벡터 = 비슷한 의미!\n\nRAG 챗봇을 만들 때 핵심이에요.\n질문이 들어오면 관련 데이터를 "의미" 기반으로 찾아줘요! 🔍',
  },
  {
    keywords: ['랭체인', 'langchain'],
    answer: '🔗 **랭체인(LangChain)**은 AI 앱을 레고처럼 조립하는 도구예요!\n\n여러 기능을 블록처럼 연결:\n• AI 모델 + 벡터DB + 검색 + 메모리\n\n```\n질문 → 관련 문서 검색 → AI에게 전달 → 답변 생성\n```\n\nRAG 챗봇, 문서 분석, 데이터 처리 등\nAI 앱을 만들 때 가장 많이 쓰는 도구예요! 🧩',
  },
  {
    keywords: ['배열', 'array'],
    answer: '🚂 **배열**은 여러 데이터를 한 줄로 세워놓은 기차예요!\n\n```\nlet fruits = ["사과", "바나나", "딸기"];\n\nconsole.log(fruits[0]); // "사과"\nconsole.log(fruits[1]); // "바나나"\nconsole.log(fruits.length); // 3\n```\n\n• 칸마다 번호(인덱스)가 있어요 (0부터 시작!)\n• 데이터를 추가/삭제/검색할 수 있어요 📋',
  },
  {
    keywords: ['rls', '보안'],
    answer: '🔒 **RLS** (Row Level Security)는 데이터의 자물쇠예요!\n\n줄(행)마다 "누가 볼 수 있는지" 규칙을 정해요:\n\n```\n-- 내가 쓴 글만 수정 가능!\nCREATE POLICY "본인만 수정"\nON posts FOR UPDATE\nUSING (auth.uid() = user_id);\n```\n\n비유: 아파트 현관문(전체 보안) + 각 방 자물쇠(RLS) 🏠',
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  // Check knowledge base
  for (const entry of KNOWLEDGE) {
    if (entry.keywords.some(kw => lower.includes(kw.toLowerCase()))) {
      return entry.answer;
    }
  }

  // Greeting responses
  if (lower.match(/^(안녕|하이|hello|hi|헬로|반가)/)) {
    return '안녕하세요! 🐰 무엇이든 물어보세요!\n\n코딩 용어, 바이브코딩 도구, 기술 개념 등 쉽게 설명해드릴게요! 💬';
  }

  if (lower.match(/(고마워|감사|땡큐|thanks|thank)/)) {
    return '천만에요! 😊 더 궁금한 거 있으면 언제든 물어보세요! 🐰';
  }

  if (lower.match(/(어려|모르겠|힘들|포기)/)) {
    return '괜찮아요! 😊 처음엔 누구나 어려워요.\n\n바이브코딩의 좋은 점은 AI가 도와준다는 거예요!\n모르는 건 AI에게 물어보면 되고, 하나씩 차근차근 하면 돼요.\n\n"천 리 길도 한 걸음부터" 🐢💨\n\n어떤 부분이 어려운지 구체적으로 말해주면 더 잘 도와줄 수 있어요!';
  }

  // Default response
  return `🤔 아직 "${input}"에 대한 답변을 준비 중이에요!\n\n이런 것들을 물어보면 잘 대답할 수 있어요:\n• 코딩 용어 (변수, 함수, 배열, API 등)\n• 바이브코딩 도구 (Cursor, 안티그래비티 등)\n• 기술 스택 (React, Supabase, Vercel 등)\n• AI 기술 (RAG, 랭체인, Pinecone 등)\n\n다시 질문해주세요! 💪`;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useLocalStorage<Message[]>('cording-chat-messages', [WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    };

    const botResponse = getResponse(text);
    const botMsg: Message = {
      id: crypto.randomUUID(),
      role: 'bot',
      content: botResponse,
      timestamp: Date.now() + 1,
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
  };

  return (
    <PageWrapper title="대화하며 배우기" subtitle="궁금한 건 뭐든 물어보세요! 🐰">
      {/* Quick Questions */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-hide">
        {QUICK_QUESTIONS.map(q => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs whitespace-nowrap hover:bg-indigo-100 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-3 h-[55vh] md:h-[65vh] overflow-y-auto">
        <div className="space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'bot' ? 'bg-indigo-100' : 'bg-gray-100'
              }`}>
                {msg.role === 'bot' ? <Bot size={16} className="text-indigo-600" /> : <User size={16} className="text-gray-600" />}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'bot'
                    ? 'bg-gray-50 text-gray-700'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <button
          type="button"
          onClick={handleReset}
          className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors shrink-0"
          title="대화 초기화"
        >
          <RotateCcw size={18} className="text-gray-500" />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="궁금한 걸 물어보세요..."
          className="flex-1 px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          <Send size={18} />
        </button>
      </form>
    </PageWrapper>
  );
}
