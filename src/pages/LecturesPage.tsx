import { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';
import { lectureContent } from '../data/lectureContent';
import type { LectureWeek, LectureSection } from '../data/lectureContent';

function SectionCard({ section }: { section: LectureSection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-3.5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg flex-shrink-0">{section.emoji}</span>
        <span className="flex-1 font-bold text-sm text-gray-800">{section.title}</span>
        {open ? (
          <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-3.5 pb-3.5 animate-fade-in">
          <p className="text-sm text-gray-600 leading-relaxed mb-2">{section.content}</p>
          {section.tips && section.tips.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-3 space-y-1.5">
              {section.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                  <span className="text-gray-300 mt-0.5 flex-shrink-0">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          )}
          {section.code && (
            <pre className="mt-2 bg-gray-900 text-green-300 text-xs rounded-lg p-3 overflow-x-auto">
              {section.code}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

function WeekCard({ week }: { week: LectureWeek }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dashboard-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${week.color}`}>
          <BookOpen size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{week.weeks}</p>
          <h3 className="font-bold text-gray-900 text-sm">{week.title}</h3>
          <p className="text-[11px] text-gray-400 mt-0.5">{week.sections.length}개 주제</p>
        </div>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-4 animate-fade-in space-y-2">
          <div className="space-y-1.5">
            {week.sections.map((section, i) => (
              <SectionCard key={i} section={section} />
            ))}
          </div>
          <a
            href={week.slideFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-100 text-gray-600 rounded-xl text-xs font-bold hover:bg-gray-200 transition-colors no-underline mt-3"
          >
            <ExternalLink size={14} />
            슬라이드로도 보기
          </a>
        </div>
      )}
    </div>
  );
}

export default function LecturesPage() {
  return (
    <div className="animate-fade-in max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-8 pb-16">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">교안 자료</h1>
        <p className="text-gray-400 font-medium text-sm mt-1">주차별 강의 내용을 읽고 복습하세요!</p>
      </div>

      <div className="space-y-3">
        {lectureContent.map((week) => (
          <WeekCard key={week.id} week={week} />
        ))}
      </div>

      <div className="mt-6 dashboard-card p-4 flex items-start gap-3">
        <Lightbulb size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-gray-700 mb-0.5">학습 팁</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            각 주차를 펼쳐서 내용을 읽고, 모르는 용어는 용어 사전에서 찾아보세요!
            슬라이드 버전도 함께 제공됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
