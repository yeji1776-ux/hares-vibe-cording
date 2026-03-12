import { useState } from 'react';
import { Search, Heart } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import TermCard from '../components/dictionary/TermCard';
import TermDetail from '../components/dictionary/TermDetail';
import CategoryFilter from '../components/dictionary/CategoryFilter';
import { dictionaryTerms } from '../data/dictionaryTerms';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { DictionaryTerm } from '../types';

export default function DictionaryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('전체');
  const [selected, setSelected] = useState<DictionaryTerm | null>(null);
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('cording-bookmarks', []);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const filtered = dictionaryTerms.filter(t => {
    const matchSearch = t.term.includes(search) || t.termEnglish.toLowerCase().includes(search.toLowerCase()) || t.definition.includes(search);
    const matchCategory = category === '전체' || t.category === category;
    const matchBookmark = !showBookmarksOnly || bookmarks.includes(t.id);
    return matchSearch && matchCategory && matchBookmark;
  });

  return (
    <PageWrapper title="코딩 용어 사전" subtitle="초등학생도 이해할 수 있는 쉬운 설명!">
      <div className="mb-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="용어 검색..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 overflow-x-auto">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>
        <button
          onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors shrink-0 ${
            showBookmarksOnly
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Heart size={14} fill={showBookmarksOnly ? 'white' : 'none'} />
          <span>{bookmarks.length}</span>
        </button>
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-2">{showBookmarksOnly ? '💛' : '🔍'}</p>
            <p>{showBookmarksOnly ? '아직 즐겨찾기한 용어가 없어요!' : '검색 결과가 없어요'}</p>
            {showBookmarksOnly && <p className="text-sm mt-1">하트를 눌러 추가해보세요</p>}
          </div>
        ) : (
          filtered.map(term => (
            <div key={term.id} className="relative">
              <TermCard term={term} onClick={() => setSelected(term)} />
              <button
                onClick={e => { e.stopPropagation(); toggleBookmark(term.id); }}
                className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart
                  size={16}
                  className={bookmarks.includes(term.id) ? 'text-red-500 fill-red-500' : 'text-gray-300'}
                />
              </button>
            </div>
          ))
        )}
      </div>

      {selected && <TermDetail term={selected} onClose={() => setSelected(null)} />}
    </PageWrapper>
  );
}
