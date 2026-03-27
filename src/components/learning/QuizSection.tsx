import { useState } from 'react';
import type { TipQuiz } from '../../types';

interface Props {
  quiz: TipQuiz;
}

export default function QuizSection({ quiz }: Props) {
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);
  const isCorrect = selected === quiz.answer;

  return (
    <div className="dashboard-card p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">🧠</span>
        <h3 className="text-sm font-bold text-[#E5E7EB]">퀴즈</h3>
      </div>
      <p className="text-sm text-[#9CA3AF] mb-4">{quiz.question}</p>

      <div className="space-y-2">
        {(['A', 'B'] as const).map((option) => {
          const text = option === 'A' ? quiz.optionA : quiz.optionB;
          const isThis = selected === option;
          const isAnswer = quiz.answer === option;

          let borderColor = 'border-[#1F1F2E]';
          let bgColor = 'bg-[#0A0A0F]';
          if (selected) {
            if (isAnswer) {
              borderColor = 'border-[#10B981]/50';
              bgColor = 'bg-[#10B981]/10';
            } else if (isThis && !isAnswer) {
              borderColor = 'border-[#EF4444]/50';
              bgColor = 'bg-[#EF4444]/10';
            }
          }

          return (
            <button
              key={option}
              onClick={() => !selected && setSelected(option)}
              disabled={!!selected}
              className={`w-full text-left p-3 rounded-xl border ${borderColor} ${bgColor} transition-all`}
            >
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-[#9CA3AF] mt-0.5">{option}.</span>
                <span className={`text-sm ${selected && isAnswer ? 'text-[#10B981] font-bold' : 'text-[#E5E7EB]'}`}>
                  {text}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className={`mt-3 p-3 rounded-xl ${isCorrect ? 'bg-[#10B981]/10' : 'bg-[#EF4444]/10'}`}>
          <p className={`text-xs font-bold mb-1 ${isCorrect ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
            {isCorrect ? '정답!' : '오답!'}
          </p>
          <p className="text-xs text-[#9CA3AF]">{quiz.explanation}</p>
        </div>
      )}
    </div>
  );
}
