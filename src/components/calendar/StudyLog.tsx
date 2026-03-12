import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { StudyRecord, BookQuestion } from '../../types';

interface Props {
  date: string;
  record: StudyRecord | undefined;
  bookQuestions?: BookQuestion[];
}

export default function StudyLog({ date, record, bookQuestions = [] }: Props) {
  const dateObj = new Date(date + 'T00:00:00');
  const formatted = format(dateObj, 'M월 d일 (EEEE)', { locale: ko });
  const dayPhotos = bookQuestions.filter(q => q.createdAt === date);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm animate-fade-in">
      <h3 className="font-semibold text-gray-800 mb-2">{formatted}</h3>
      {!record || record.activities.length === 0 ? (
        <p className="text-sm text-gray-400 py-4 text-center">
          이 날은 아직 기록이 없어요 📝
        </p>
      ) : (
        <div className="space-y-2">
          {record.activities.map(act => (
            <div key={act.id} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-700">{act.label}</span>
              <span className="text-xs text-gray-400 ml-auto">
                {new Date(act.timestamp).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
        </div>
      )}

      {dayPhotos.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mb-3">
            📸 책 사진 질문
          </h4>
          <div className="space-y-2">
            {dayPhotos.map(q => (
              <div key={q.id} className="bg-gray-50 rounded-xl p-2">
                <img src={q.imageDataUrl} alt="책 사진" className="w-full rounded-lg mb-1" />
                {q.question && <p className="text-xs text-gray-600">❓ {q.question}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
