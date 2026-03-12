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
          ? 'bg-indigo-600 text-white shadow-md'
          : isToday
          ? 'bg-indigo-50 text-indigo-600 font-bold'
          : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <span>{day}</span>
      {hasStudied && !isSelected && (
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-0.5" />
      )}
      {hasStudied && isSelected && (
        <span className="w-1.5 h-1.5 bg-white rounded-full mt-0.5" />
      )}
    </button>
  );
}
