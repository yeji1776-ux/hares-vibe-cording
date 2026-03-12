import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../utils/storageKeys';
import type { StudyRecord, StudyActivity } from '../types';

export function useStudyTracker() {
  const [records, setRecords] = useLocalStorage<StudyRecord[]>(STORAGE_KEYS.STUDY_RECORDS, []);

  const today = new Date().toISOString().split('T')[0];

  const logActivity = (type: string, label: string) => {
    const activity: StudyActivity = {
      id: crypto.randomUUID(),
      type,
      label,
      timestamp: Date.now(),
    };

    setRecords(prev => {
      const existing = prev.find(r => r.date === today);
      if (existing) {
        return prev.map(r =>
          r.date === today
            ? { ...r, activities: [...r.activities, activity] }
            : r
        );
      }
      return [...prev, { date: today, activities: [activity] }];
    });
  };

  const getRecord = (date: string) => records.find(r => r.date === date);
  const hasStudied = (date: string) => records.some(r => r.date === date && r.activities.length > 0);

  return { records, logActivity, getRecord, hasStudied };
}
