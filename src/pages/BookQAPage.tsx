import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import PhotoUploader from '../components/bookqa/PhotoUploader';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useStudyTracker } from '../hooks/useStudyTracker';
import { STORAGE_KEYS } from '../utils/storageKeys';
import type { BookQuestion } from '../types';

export default function BookQAPage() {
  const [questions, setQuestions] = useLocalStorage<BookQuestion[]>(STORAGE_KEYS.BOOK_QUESTIONS, []);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [questionText, setQuestionText] = useState('');
  const { logActivity } = useStudyTracker();

  const handleSubmit = () => {
    if (!currentImage) return;
    const newQ: BookQuestion = {
      id: crypto.randomUUID(),
      imageDataUrl: currentImage,
      question: questionText.trim(),
      answer: '🤖 AI 응답 기능은 준비 중이에요! 곧 책 사진을 분석해서 쉽게 설명해줄 수 있게 됩니다. 지금은 사진과 질문을 기록해두세요.',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setQuestions(prev => [newQ, ...prev]);
    logActivity('book-qa', '책 사진 질문: ' + (questionText.trim() || '사진으로 질문'));
    setCurrentImage(null);
    setQuestionText('');
  };

  const handleDelete = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  return (
    <PageWrapper title="책 사진 질문" subtitle="모르는 부분을 사진으로 찍어서 질문해요!">
      <div className="space-y-4">
        {!currentImage ? (
          <PhotoUploader onImageSelect={setCurrentImage} />
        ) : (
          <div className="space-y-3">
            <div className="relative">
              <img src={currentImage} alt="업로드된 사진" className="w-full rounded-2xl" />
              <button
                onClick={() => setCurrentImage(null)}
                className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white"
              >
                <Trash2 size={16} className="text-red-500" />
              </button>
            </div>
            <textarea
              value={questionText}
              onChange={e => setQuestionText(e.target.value)}
              placeholder="어떤 부분이 궁금한가요? (선택사항)"
              rows={2}
              className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
            >
              질문 저장하기
            </button>
          </div>
        )}

        {questions.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 mt-6">이전 질문들</h3>
            {questions.map(q => (
              <div key={q.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-gray-400">{q.createdAt}</span>
                  <button onClick={() => handleDelete(q.id)} className="p-1 rounded-full hover:bg-red-50">
                    <Trash2 size={14} className="text-red-400" />
                  </button>
                </div>
                <img src={q.imageDataUrl} alt="질문 사진" className="w-full rounded-xl mb-2" />
                {q.question && <p className="text-sm text-gray-700 mb-2">❓ {q.question}</p>}
                <div className="bg-[#F5F3FF] rounded-xl p-3">
                  <p className="text-sm text-purple-700">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {questions.length === 0 && !currentImage && (
          <div className="text-center py-8 text-gray-400">
            <p className="text-4xl mb-2">📸</p>
            <p className="text-sm">사진을 올리면 여기에 기록돼요!</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
