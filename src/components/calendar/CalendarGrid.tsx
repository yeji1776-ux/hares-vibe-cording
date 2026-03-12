import { useState } from 'react';
import { format, startOfMonth, endOfMonth, getDay, addMonths, subMonths, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DayCell from './DayCell';
import StudyLog from './StudyLog';
import type { StudyRecord } from '../../types';

interface Props {
  records: StudyRecord[];
  hasStudied: (date: string) => boolean;
  getRecord: (date: string) => StudyRecord | undefined;
}

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function CalendarGrid({ records, hasStudied, getRecord }: Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDay = getDay(monthStart);
  const totalDays = monthEnd.getDate();

  const today = new Date();

  const days: (number | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  const getDateStr = (day: number) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return format(d, 'yyyy-MM-dd');
  };

  const studiedCount = records.filter(r => {
    const d = new Date(r.date);
    return d.getFullYear() === currentMonth.getFullYear() && d.getMonth() === currentMonth.getMonth() && r.activities.length > 0;
  }).length;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <div className="text-center">
            <h3 className="font-semibold text-gray-800">
              {format(currentMonth, 'yyyy년 M월', { locale: ko })}
            </h3>
            <p className="text-xs text-gray-400">{studiedCount}일 공부했어요!</p>
          </div>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAYS.map(d => (
            <div key={d} className="text-center text-xs text-gray-400 font-medium py-1">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => {
            if (day === null) return <div key={`empty-${idx}`} />;
            const dateStr = getDateStr(day);
            const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            return (
              <DayCell
                key={idx}
                day={day}
                isToday={isSameDay(dateObj, today)}
                hasStudied={hasStudied(dateStr)}
                isSelected={selectedDate === dateStr}
                onClick={() => setSelectedDate(selectedDate === dateStr ? null : dateStr)}
              />
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <StudyLog date={selectedDate} record={getRecord(selectedDate)} />
      )}
    </div>
  );
}
