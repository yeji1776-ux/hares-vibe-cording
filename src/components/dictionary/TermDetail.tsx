import { X } from 'lucide-react';
import type { DictionaryTerm } from '../../types';

interface Props {
  term: DictionaryTerm;
  onClose: () => void;
}

export default function TermDetail({ term, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div
        className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-2xl p-6 max-h-[80vh] overflow-y-auto animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{term.visualEmoji}</span>
            <div>
              <h2 className="text-lg font-bold text-gray-800">{term.term}</h2>
              <span className="text-sm text-gray-400">{term.termEnglish}</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase mb-1">설명</h4>
            <p className="text-gray-700 leading-relaxed">{term.definition}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase mb-1">코드 예시</h4>
            <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-xl overflow-x-auto whitespace-pre-wrap">
              {term.example}
            </pre>
          </div>
          <span className="inline-block text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
            {term.category}
          </span>
        </div>
      </div>
    </div>
  );
}
