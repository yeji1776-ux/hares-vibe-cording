import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';

interface Memo {
  id: string;
  title: string;
  content: string;
  date: string; // YYYY-MM-DD
  updatedAt: string;
}

const STORAGE_KEY = 'cording-memos';

function loadMemos(): Memo[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveMemos(memos: Memo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
}

export default function MemoPage() {
  const [memos, setMemos] = useState<Memo[]>(loadMemos);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [editing, setEditing] = useState<Memo | null>(null as Memo | null);
  const [isNew, setIsNew] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const [year, month] = selectedMonth.split('-').map(Number);

  const months = (() => {
    const set = new Set<string>();
    const now = new Date();
    // Always include current month
    set.add(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`);
    memos.forEach(m => set.add(m.date.slice(0, 7)));
    return Array.from(set).sort().reverse();
  })();

  const filtered = memos
    .filter(m => m.date.startsWith(selectedMonth))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  const prevMonth = () => {
    const d = new Date(year, month - 2, 1);
    setSelectedMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
  };
  const nextMonth = () => {
    const d = new Date(year, month, 1);
    setSelectedMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
  };

  const openNew = () => {
    const today = new Date().toISOString().split('T')[0];
    const memo: Memo = {
      id: Date.now().toString(),
      title: '',
      content: '',
      date: today.slice(0, 7) === selectedMonth ? today : `${selectedMonth}-01`,
      updatedAt: new Date().toISOString(),
    };
    setEditing(memo);
    setIsNew(true);
  };

  const openEdit = (memo: Memo) => {
    setEditing({ ...memo });
    setIsNew(false);
  };

  const save = () => {
    if (!editing) return;
    const updated = { ...editing, updatedAt: new Date().toISOString() };
    const newMemos = isNew
      ? [updated, ...memos]
      : memos.map(m => m.id === updated.id ? updated : m);
    setMemos(newMemos);
    saveMemos(newMemos);
    setEditing(null);
  };

  const deleteMemo = (id: string) => {
    const newMemos = memos.filter(m => m.id !== id);
    setMemos(newMemos);
    saveMemos(newMemos);
    setConfirmDelete(null);
    if (editing?.id === id) setEditing(null);
  };

  useEffect(() => {
    if (editing && isNew) titleRef.current?.focus();
  }, [editing, isNew]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  const formatUpdated = (iso: string) => {
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 60000) return '방금';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}분 전`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}시간 전`;
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  // Edit view
  if (editing) {
    return (
      <div className="animate-fade-in max-w-[520px] mx-auto px-6 pt-8 pb-24">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setEditing(null)}
            className="flex items-center gap-1.5 text-sm font-bold text-[#6B7280] hover:text-[#E5E7EB] transition-colors"
          >
            <ChevronLeft size={16} /> 목록으로
          </button>
          <div className="flex items-center gap-2">
            {!isNew && (
              <button
                onClick={() => setConfirmDelete(editing.id)}
                className="p-2 rounded-full text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            )}
            <button
              onClick={save}
              className="flex items-center gap-1.5 px-4 py-2 gradient-gold-red text-white rounded-full text-sm font-bold transition-colors active:scale-95"
            >
              <Check size={14} /> 저장
            </button>
          </div>
        </div>

        <input
          ref={titleRef}
          type="text"
          value={editing.title}
          onChange={e => setEditing({ ...editing, title: e.target.value })}
          placeholder="제목"
          className="w-full text-2xl font-black text-[#E5E7EB] bg-transparent border-none outline-none placeholder-[#4B5563] mb-4"
        />
        <div className="flex items-center gap-2 mb-6">
          <input
            type="date"
            value={editing.date}
            onChange={e => setEditing({ ...editing, date: e.target.value })}
            className="text-xs text-[#9CA3AF] font-medium bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-[#F59E0B]"
          />
        </div>
        <textarea
          value={editing.content}
          onChange={e => setEditing({ ...editing, content: e.target.value })}
          placeholder="내용을 입력하세요..."
          className="w-full min-h-[60vh] text-sm text-[#E5E7EB] bg-transparent border-none outline-none resize-none leading-relaxed placeholder-[#4B5563] font-medium"
        />

        {confirmDelete === editing.id && (
          <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-6" onClick={() => setConfirmDelete(null)}>
            <div className="bg-[#12121A] border border-[#1F1F2E] rounded-2xl p-6 w-full max-w-xs shadow-xl" onClick={e => e.stopPropagation()}>
              <p className="text-center text-base font-bold text-[#E5E7EB] mb-1">메모 삭제</p>
              <p className="text-center text-sm text-[#9CA3AF] mb-5">삭제하면 되돌릴 수 없어요</p>
              <div className="flex gap-3">
                <button onClick={() => setConfirmDelete(null)} className="flex-1 py-3 rounded-xl border border-[#1F1F2E] text-sm font-bold text-[#6B7280] hover:bg-[#1A1A2E]">취소</button>
                <button onClick={() => deleteMemo(editing.id)} className="flex-1 py-3 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">삭제</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // List view
  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-6 pt-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#E5E7EB] tracking-tight">메모장</h1>
          <p className="text-sm text-[#9CA3AF] font-medium mt-0.5">생각과 배움을 기록해요</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-1.5 px-4 py-2 gradient-gold-red text-white rounded-full text-sm font-bold transition-colors active:scale-95 shadow-sm"
        >
          <Plus size={15} /> 새 메모
        </button>
      </div>

      {/* Month tabs */}
      <div className="flex items-center gap-2 mb-6">
        <button onClick={prevMonth} className="p-1.5 rounded-full hover:bg-[#1A1A2E] transition-colors text-[#9CA3AF]">
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
          {months.map(m => {
            const [y, mo] = m.split('-');
            return (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  m === selectedMonth
                    ? 'gradient-gold-red text-white'
                    : 'text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1A1A2E]'
                }`}
              >
                {y}.{mo}
              </button>
            );
          })}
        </div>
        <button onClick={nextMonth} className="p-1.5 rounded-full hover:bg-[#1A1A2E] transition-colors text-[#9CA3AF]">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Memo list */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">📝</p>
          <p className="text-[#9CA3AF] font-medium text-sm">이 달의 메모가 없어요</p>
          <button onClick={openNew} className="mt-4 px-4 py-2 bg-[#F59E0B]/15 text-[#F59E0B] rounded-full text-sm font-bold hover:bg-[#F59E0B]/25 transition-colors">
            첫 메모 작성하기
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(memo => (
            <div
              key={memo.id}
              onClick={() => openEdit(memo)}
              className="dashboard-card p-5 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-[#E5E7EB] text-sm leading-snug truncate flex-1">
                  {memo.title || '제목 없음'}
                </h3>
                <button
                  onClick={e => { e.stopPropagation(); setConfirmDelete(memo.id); }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-full text-[#4B5563] hover:text-red-400 hover:bg-red-500/10 transition-all flex-shrink-0"
                >
                  <X size={13} />
                </button>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-3 mb-3 font-medium">
                {memo.content || '내용 없음'}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#4B5563]">{formatDate(memo.date)}</span>
                <span className="text-[10px] font-medium text-[#4B5563]">{formatUpdated(memo.updatedAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-6" onClick={() => setConfirmDelete(null)}>
          <div className="bg-[#12121A] border border-[#1F1F2E] rounded-2xl p-6 w-full max-w-xs shadow-xl" onClick={e => e.stopPropagation()}>
            <p className="text-center text-base font-bold text-[#E5E7EB] mb-1">메모 삭제</p>
            <p className="text-center text-sm text-[#9CA3AF] mb-5">삭제하면 되돌릴 수 없어요</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-3 rounded-xl border border-[#1F1F2E] text-sm font-bold text-[#6B7280] hover:bg-[#1A1A2E]">취소</button>
              <button onClick={() => deleteMemo(confirmDelete)} className="flex-1 py-3 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">삭제</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
