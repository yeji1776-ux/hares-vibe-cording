import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Rocket, BookMarked } from 'lucide-react';

const navItems = [
  { to: '/', icon: BookOpen, label: '학습' },
  { to: '/ag-reference', icon: Rocket, label: 'AG 레퍼런스' },
  { to: '/dictionary', icon: BookMarked, label: '용어 사전' },
];

// 학습 탭 관련 서브 라우트들
const learningSubRoutes = ['/week', '/tip', '/lectures', '/calendar', '/portfolio', '/memo', '/timer', '/bookmarks'];

export default function BottomNav() {
  const location = useLocation();

  const isLearningRoute = (path: string) => {
    if (path !== '/') return false;
    // 현재 경로가 메인(/) 이거나 학습 관련 서브 라우트인 경우
    return location.pathname === '/' || learningSubRoutes.some(r => location.pathname.startsWith(r));
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0A0A0F]/95 backdrop-blur-md border-t border-[#1F1F2E] z-50 safe-area-bottom">
      <div className="max-w-[520px] mx-auto flex items-center justify-around h-16 px-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = to === '/'
            ? isLearningRoute(to)
            : location.pathname === to;

          return (
            <NavLink
              key={to}
              to={to}
              className="flex flex-col items-center gap-1 py-2 px-4 no-underline transition-all"
            >
              <Icon
                size={22}
                className={isActive ? 'text-[#F59E0B]' : 'text-[#4B5563]'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-[10px] font-bold ${
                  isActive ? 'text-[#F59E0B]' : 'text-[#4B5563]'
                }`}
              >
                {label}
              </span>
              {isActive && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[#F59E0B]" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
