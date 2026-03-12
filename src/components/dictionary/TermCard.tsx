import type { DictionaryTerm } from '../../types';

interface Props {
  term: DictionaryTerm;
  onClick: () => void;
}

export default function TermCard({ term, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{term.visualEmoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="font-semibold text-gray-800">{term.term}</h3>
            <span className="text-xs text-gray-400">{term.termEnglish}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{term.definition}</p>
          <span className="inline-block mt-2 text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
            {term.category}
          </span>
        </div>
      </div>
    </button>
  );
}
