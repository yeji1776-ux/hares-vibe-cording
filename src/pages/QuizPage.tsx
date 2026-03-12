import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Sparkles } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { dictionaryTerms } from '../data/dictionaryTerms';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface QuizQuestion {
  termId: string;
  question: string;
  correct: string;
  options: string[];
}

function generateQuiz(count: number): QuizQuestion[] {
  const shuffled = [...dictionaryTerms].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return selected.map(term => {
    const wrong = dictionaryTerms
      .filter(t => t.id !== term.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(t => t.term);

    const options = [term.term, ...wrong].sort(() => Math.random() - 0.5);

    return {
      termId: term.id,
      question: term.definition,
      correct: term.term,
      options,
    };
  });
}



export default function QuizPage() {
  const [quizStats, setQuizStats] = useLocalStorage<{ totalCorrect: number; totalAttempts: number }>('cording-quiz-stats', { totalCorrect: 0, totalAttempts: 0 });
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => generateQuiz(5));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[currentIdx];

  const handleSelect = (option: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    if (option === current.correct) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
      setQuizStats(prev => ({
        totalCorrect: prev.totalCorrect + correctCount + (selectedAnswer === current.correct ? 1 : 0),
        totalAttempts: prev.totalAttempts + questions.length,
      }));
    } else {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRetry = () => {
    setQuestions(generateQuiz(5));
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setFinished(false);
  };

  if (finished) {
    const finalScore = correctCount + (selectedAnswer === current.correct ? 1 : 0);
    const emoji = finalScore === questions.length ? '🎉' : finalScore >= 3 ? '👏' : '💪';
    return (
      <PageWrapper title="오늘의 퀴즈" subtitle="결과를 확인해요!">
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center animate-fade-in">
          <p className="text-5xl mb-4">{emoji}</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {finalScore}/{questions.length} 정답!
          </h2>
          <p className="text-gray-500 mb-2">
            {finalScore === questions.length ? '완벽해요! 천재인가요?!' :
             finalScore >= 3 ? '잘했어요! 거의 다 맞혔어요!' :
             '괜찮아요! 다시 도전해봐요!'}
          </p>
          <p className="text-xs text-gray-400 mb-6">
            누적 정답률: {quizStats.totalAttempts > 0 ? Math.round((quizStats.totalCorrect / quizStats.totalAttempts) * 100) : 0}%
          </p>
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
          >
            <RotateCcw size={16} /> 다시 도전하기
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title="오늘의 퀴즈" subtitle={`${currentIdx + 1} / ${questions.length} 문제`}>
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-indigo-500" />
          <span className="text-xs text-indigo-500 font-semibold">이 설명에 맞는 용어는?</span>
        </div>
        <p className="text-gray-800 leading-relaxed">{current.question}</p>
      </div>

      <div className="space-y-2 mb-4">
        {current.options.map(option => {
          let style = 'bg-white text-gray-800 hover:bg-gray-50';
          if (selectedAnswer) {
            if (option === current.correct) {
              style = 'bg-green-50 text-green-700 border-green-300';
            } else if (option === selectedAnswer) {
              style = 'bg-red-50 text-red-700 border-red-300';
            } else {
              style = 'bg-gray-50 text-gray-400';
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={!!selectedAnswer}
              className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${style}`}
            >
              <span>{option}</span>
              {selectedAnswer && option === current.correct && <CheckCircle2 size={18} className="text-green-500" />}
              {selectedAnswer && option === selectedAnswer && option !== current.correct && <XCircle size={18} className="text-red-500" />}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
        >
          {currentIdx + 1 >= questions.length ? '결과 보기' : '다음 문제'}
        </button>
      )}
    </PageWrapper>
  );
}
