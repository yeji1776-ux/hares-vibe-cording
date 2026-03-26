import { NavLink } from 'react-router-dom';
import { Home, BookOpen, FileCode, Calendar, FolderOpen, NotebookPen } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: '홈' },
  { to: '/lectures', icon: BookOpen, label: '학습하기' },
  { to: '/cheatsheet', icon: FileCode, label: '코드 치트시트' },
  { to: '/calendar', icon: Calendar, label: '학습 달력' },
  { to: '/portfolio', icon: FolderOpen, label: '웹앱 모음' },
  { to: '/memo', icon: NotebookPen, label: '메모장' },
];

export default function BottomNav() {
  return (
    <nav className="sticky top-16 bg-white border-b border-gray-100 z-40">
      <div className="max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-6 h-12 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `px-5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all no-underline ${isActive
                ? 'bg-gray-900 text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
