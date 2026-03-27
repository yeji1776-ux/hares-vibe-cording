import { useTipProgress } from '../../hooks/useTipProgress';

export default function CategoryProgressChart() {
  const { getAllCategoryProgress } = useTipProgress();
  const categories = getAllCategoryProgress();

  return (
    <div className="dashboard-card p-4">
      <h3 className="text-sm font-bold text-[#E5E7EB] mb-4">카테고리별 진행률</h3>
      <div className="space-y-3">
        {categories.map(({ category, color, progress, completed, total }) => (
          <div key={category}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs text-[#9CA3AF]">{category}</span>
              </div>
              <span className="text-[10px] font-bold" style={{ color }}>
                {completed}/{total}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#1F1F2E] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
