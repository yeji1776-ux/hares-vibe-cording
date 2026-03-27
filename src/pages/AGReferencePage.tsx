import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { agReferenceData, AG_SECTIONS } from '../data/agReferenceData';
import type { AGReferenceSection, AGTag } from '../types';

const SECTION_EMOJIS: Record<AGReferenceSection, string> = {
  'AG란?': '🚀',
  'Mac 단축키': '⌨️',
  'AG 채팅 명령어': '💻',
  '터미널 명령어': '🖥️',
  '클로드 코드 명령어': '🧠',
  'AI 모델 비교': '🤖',
  '주요 파일 & 설정': '📁',
  '코딩 언어 & 기술': '💻',
  '배포 & 실전': '🌐',
  '실전 꿀팁': '💡',
};

const TAG_COLORS: Record<AGTag, string> = {
  '필수': 'bg-[#EF4444]/20 text-[#EF4444]',
  '핵심': 'bg-[#F59E0B]/20 text-[#F59E0B]',
  '기초': 'bg-[#10B981]/20 text-[#10B981]',
  '추천': 'bg-[#3B82F6]/20 text-[#3B82F6]',
  '유용': 'bg-[#8B5CF6]/20 text-[#8B5CF6]',
  '중급': 'bg-[#EC4899]/20 text-[#EC4899]',
  '고급': 'bg-[#EF4444]/20 text-[#EF4444]',
  '인기': 'bg-[#F59E0B]/20 text-[#F59E0B]',
  '유료': 'bg-[#6B7280]/20 text-[#6B7280]',
  '무료': 'bg-[#10B981]/20 text-[#10B981]',
  '강력': 'bg-[#EF4444]/20 text-[#EF4444]',
};

export default function AGReferencePage() {
  const [search, setSearch] = useState('');
  const [selectedSection, setSelectedSection] = useState<AGReferenceSection | '전체'>('전체');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(AG_SECTIONS));

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  const filtered = agReferenceData.filter(item => {
    const matchSearch = !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase());
    const matchSection = selectedSection === '전체' || item.section === selectedSection;
    return matchSearch && matchSection;
  });

  // Group by section
  const grouped = AG_SECTIONS.reduce((acc, section) => {
    const items = filtered.filter(item => item.section === section);
    if (items.length > 0) {
      acc.push({ section, items });
    }
    return acc;
  }, [] as { section: AGReferenceSection; items: typeof filtered }[]);

  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-4 pb-24">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-[#E5E7EB]">AG 레퍼런스</h1>
        <p className="text-sm text-[#9CA3AF] mt-1">코딩 초보를 위한 실전 치트시트</p>
      </div>

      {/* 검색 */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-[#12121A] rounded-xl border border-[#1F1F2E] text-sm text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#F59E0B]/50"
        />
      </div>

      {/* 섹션 필터 */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
        <button
          onClick={() => setSelectedSection('전체')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            selectedSection === '전체'
              ? 'gradient-gold-red text-white'
              : 'bg-[#12121A] text-[#9CA3AF] border border-[#1F1F2E]'
          }`}
        >
          전체
        </button>
        {AG_SECTIONS.map(section => (
          <button
            key={section}
            onClick={() => setSelectedSection(section)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedSection === section
                ? 'gradient-gold-red text-white'
                : 'bg-[#12121A] text-[#9CA3AF] border border-[#1F1F2E]'
            }`}
          >
            {SECTION_EMOJIS[section]} {section}
          </button>
        ))}
      </div>

      {/* 콘텐츠 */}
      {grouped.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-3xl mb-2">🔍</p>
          <p className="text-[#9CA3AF]">검색 결과가 없어요</p>
        </div>
      ) : (
        <div className="space-y-4">
          {grouped.map(({ section, items }) => (
            <div key={section} className="dashboard-card overflow-hidden">
              {/* Section header */}
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#1A1A2E] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{SECTION_EMOJIS[section]}</span>
                  <h2 className="text-sm font-bold text-[#E5E7EB]">{section}</h2>
                  <span className="text-[10px] text-[#6B7280] bg-[#1F1F2E] px-1.5 py-0.5 rounded-full">{items.length}</span>
                </div>
                {expandedSections.has(section) ? (
                  <ChevronUp size={16} className="text-[#6B7280]" />
                ) : (
                  <ChevronDown size={16} className="text-[#6B7280]" />
                )}
              </button>

              {/* Items */}
              {expandedSections.has(section) && (
                <div className="border-t border-[#1F1F2E]">
                  {items.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`p-4 ${idx < items.length - 1 ? 'border-b border-[#1F1F2E]/50' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-sm font-bold text-[#E5E7EB]">{item.title}</h3>
                        <div className="flex gap-1 flex-shrink-0">
                          {item.tags.map(tag => (
                            <span key={tag} className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${TAG_COLORS[tag]}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
