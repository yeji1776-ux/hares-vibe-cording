import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../utils/storageKeys';
import { tipsData } from '../data/tipsData';
import type { TipCategory } from '../types';
import { CATEGORY_COLORS } from '../types';

export function useTipProgress() {
  const [completedTips, setCompletedTips] = useLocalStorage<number[]>(
    STORAGE_KEYS.TIP_PROGRESS,
    []
  );

  const markComplete = (tipId: number) => {
    setCompletedTips((prev) => {
      if (prev.includes(tipId)) {
        return prev.filter((id) => id !== tipId);
      }
      return [...prev, tipId];
    });
  };

  const isComplete = (tipId: number) => completedTips.includes(tipId);

  const totalProgress = Math.round((completedTips.length / 100) * 100);

  const getWeekProgress = (week: number) => {
    const weekTips = tipsData.filter((t) => t.week === week);
    if (weekTips.length === 0) return 0;
    const completed = weekTips.filter((t) => completedTips.includes(t.id)).length;
    return Math.round((completed / weekTips.length) * 100);
  };

  const getWeekCompletedCount = (week: number) => {
    const weekTips = tipsData.filter((t) => t.week === week);
    return weekTips.filter((t) => completedTips.includes(t.id)).length;
  };

  const getWeekTotalCount = (week: number) => {
    return tipsData.filter((t) => t.week === week).length;
  };

  const getCategoryProgress = (category: TipCategory) => {
    const categoryTips = tipsData.filter((t) => t.category === category);
    if (categoryTips.length === 0) return 0;
    const completed = categoryTips.filter((t) => completedTips.includes(t.id)).length;
    return Math.round((completed / categoryTips.length) * 100);
  };

  const getAllCategoryProgress = () => {
    return (Object.keys(CATEGORY_COLORS) as TipCategory[]).map((category) => ({
      category,
      color: CATEGORY_COLORS[category],
      progress: getCategoryProgress(category),
      completed: tipsData.filter((t) => t.category === category && completedTips.includes(t.id)).length,
      total: tipsData.filter((t) => t.category === category).length,
    }));
  };

  return {
    completedTips,
    completedCount: completedTips.length,
    markComplete,
    isComplete,
    totalProgress,
    getWeekProgress,
    getWeekCompletedCount,
    getWeekTotalCount,
    getCategoryProgress,
    getAllCategoryProgress,
  };
}
