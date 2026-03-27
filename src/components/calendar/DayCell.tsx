interface Props {
  day: number | null;
  isToday: boolean;
  hasStudied: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function DayCell({ day, isToday, hasStudied, isSelected, onClick }: Props) {
  if (day === null) return <div />;

  return (
    <button
      onClick={onClick}
      className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm transition-all ${
        isSelected
          ? 'bg-[#F59E0B] text-[#0A0A0F] shadow-md font-bold'
          : isToday
          ? 'bg-[#F59E0B]/15 text-[#F59E0B] font-bold'
          : 'hover:bg-[#1A1A2E] text-[#E5E7EB]'
      }`}
    >
      <span>{day}</span>
      {hasStudied && !isSelected && (
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-0.5" />
      )}
      {hasStudied && isSelected && (
        <span className="w-1.5 h-1.5 bg-[#0A0A0F] rounded-full mt-0.5" />
      )}
    </button>
  );
}
