import { useState } from 'react';
import { Search, Plus, X, Pencil, Trash2 } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storageKeys';
import type { UserDictionaryTerm, UserDictionaryCategory } from '../types';

const CATEGORIES: UserDictionaryCategory[] = ['일반', '프롬프트', '코딩', 'AI용어', '비즈니스', 'AG관련'];

const CATEGORY_COLORS: Record<UserDictionaryCategory, string> = {
  '일반': '#9CA3AF',
  '프롬프트': '#F59E0B',
  '코딩': '#3B82F6',
  'AI용어': '#8B5CF6',
  '비즈니스': '#EC4899',
  'AG관련': '#10B981',
};

export default function DictionaryPage() {
  const [terms, setTerms] = useLocalStorage<UserDictionaryTerm[]>(STORAGE_KEYS.USER_DICTIONARY, []);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<UserDictionaryCategory | '전체'>('전체');
  const [showForm, setShowForm] = useState(false);
  const [editingTerm, setEditingTerm] = useState<UserDictionaryTerm | null>(null);
  const [formName, setFormName] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formCategory, setFormCategory] = useState<UserDictionaryCategory>('일반');
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const openAddForm = () => {
    setEditingTerm(null);
    setFormName('');
    setFormDesc('');
    setFormCategory('일반');
    setShowForm(true);
  };

  const openEditForm = (term: UserDictionaryTerm) => {
    setEditingTerm(term);
    setFormName(term.name);
    setFormDesc(term.description);
    setFormCategory(term.category);
    setShowForm(true);
  };

  const saveTerm = () => {
    if (!formName.trim()) return;

    if (editingTerm) {
      setTerms(prev => prev.map(t =>
        t.id === editingTerm.id
          ? { ...t, name: formName.trim(), description: formDesc.trim(), category: formCategory }
          : t
      ));
    } else {
      const newTerm: UserDictionaryTerm = {
        id: crypto.randomUUID(),
        name: formName.trim(),
        description: formDesc.trim(),
        category: formCategory,
        createdAt: new Date().toISOString().split('T')[0],
      };
      setTerms(prev => [newTerm, ...prev]);
    }
    setShowForm(false);
  };

  const deleteTerm = (id: string) => {
    setTerms(prev => prev.filter(t => t.id !== id));
    setDeleteTarget(null);
  };

  const filtered = terms.filter(t => {
    const matchSearch = !search || t.name.includes(search) || t.description.includes(search);
    const matchCategory = filterCategory === '전체' || t.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-4 pb-24">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold text-[#E5E7EB]">나만의 용어 사전</h1>
          <p className="text-sm text-[#9CA3AF] mt-1">배운 용어를 직접 정리해요</p>
        </div>
        <button
          onClick={openAddForm}
          className="w-9 h-9 rounded-xl gradient-gold-red flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <Plus size={20} className="text-white" />
        </button>
      </div>

      {/* 검색 */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="용어 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-[#12121A] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#F59E0B]/50"
        />
      </div>

      {/* 카테고리 필터 */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
        <button
          onClick={() => setFilterCategory('전체')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            filterCategory === '전체'
              ? 'gradient-gold-red text-white'
              : 'bg-[#12121A] text-[#9CA3AF] border border-[#1F1F2E]'
          }`}
        >
          전체 ({terms.length})
        </button>
        {CATEGORIES.map(cat => {
          const count = terms.filter(t => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                filterCategory === cat
                  ? 'gradient-gold-red text-white'
                  : 'bg-[#12121A] text-[#9CA3AF] border border-[#1F1F2E]'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* 용어 목록 */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">{terms.length === 0 ? '📒' : '🔍'}</p>
          <p className="text-[#9CA3AF] font-medium">
            {terms.length === 0 ? '아직 등록된 용어가 없어요' : '검색 결과가 없어요'}
          </p>
          {terms.length === 0 && (
            <button onClick={openAddForm} className="mt-3 text-[#F59E0B] text-sm font-bold">
              + 첫 번째 용어 추가하기
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(term => (
            <div key={term.id} className="dashboard-card p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${CATEGORY_COLORS[term.category]}20`,
                        color: CATEGORY_COLORS[term.category],
                      }}
                    >
                      {term.category}
                    </span>
                    <span className="text-[10px] text-[#6B7280]">{term.createdAt}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#E5E7EB] mb-1">{term.name}</h3>
                  {term.description && (
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{term.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => openEditForm(term)}
                    className="p-1.5 rounded-lg hover:bg-[#1A1A2E] transition-colors"
                  >
                    <Pencil size={14} className="text-[#6B7280]" />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(term.id)}
                    className="p-1.5 rounded-lg hover:bg-[#EF4444]/10 transition-colors"
                  >
                    <Trash2 size={14} className="text-[#6B7280]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 추가/수정 모달 */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-end justify-center" onClick={() => setShowForm(false)}>
          <div
            className="bg-[#12121A] border-t border-[#1F1F2E] rounded-t-3xl p-6 w-full max-w-[520px] animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-[#E5E7EB]">
                {editingTerm ? '용어 수정' : '새 용어 추가'}
              </h2>
              <button onClick={() => setShowForm(false)} className="p-1">
                <X size={20} className="text-[#6B7280]" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#9CA3AF] mb-1.5 block">용어 이름</label>
                <input
                  type="text"
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="예: API, 프롬프트, 컴포넌트..."
                  className="w-full px-3 py-2.5 bg-[#0A0A0F] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#F59E0B]/50"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#9CA3AF] mb-1.5 block">설명 / 메모</label>
                <textarea
                  value={formDesc}
                  onChange={e => setFormDesc(e.target.value)}
                  placeholder="이 용어에 대한 나만의 설명을 적어보세요..."
                  rows={3}
                  className="w-full px-3 py-2.5 bg-[#0A0A0F] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#F59E0B]/50 resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#9CA3AF] mb-1.5 block">카테고리</label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFormCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        formCategory === cat
                          ? 'text-white'
                          : 'bg-[#0A0A0F] border border-[#1F1F2E] text-[#9CA3AF]'
                      }`}
                      style={formCategory === cat ? { backgroundColor: CATEGORY_COLORS[cat] } : {}}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={saveTerm}
                disabled={!formName.trim()}
                className="w-full py-3 rounded-xl gradient-gold-red text-white font-bold text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                {editingTerm ? '수정 완료' : '추가하기'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 삭제 확인 모달 */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center px-6" onClick={() => setDeleteTarget(null)}>
          <div className="bg-[#12121A] border border-[#1F1F2E] rounded-2xl p-6 w-full max-w-xs" onClick={e => e.stopPropagation()}>
            <p className="text-center text-base font-bold text-[#E5E7EB] mb-1">용어 삭제</p>
            <p className="text-center text-sm text-[#9CA3AF] mb-5">정말 삭제하시겠어요?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-3 rounded-xl border border-[#1F1F2E] text-sm font-bold text-[#9CA3AF] hover:bg-[#1A1A2E] transition-colors"
              >
                취소
              </button>
              <button
                onClick={() => deleteTerm(deleteTarget)}
                className="flex-1 py-3 rounded-xl bg-[#EF4444] text-white text-sm font-bold hover:bg-[#DC2626] transition-colors"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
