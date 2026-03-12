import { NavLink } from 'react-router-dom';
import { Home, GraduationCap, MessageCircle, BookA, Calendar, FolderOpen } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: '홈' },
  { to: '/curriculum', icon: GraduationCap, label: '커리큘럼' },
  { to: '/chatbot', icon: MessageCircle, label: '챗봇' },
  { to: '/dictionary', icon: BookA, label: '사전' },
  { to: '/calendar', icon: Calendar, label: '달력' },
  { to: '/portfolio', icon: FolderOpen, label: '작품' },
];

export default function BottomNav() {
  return (
    <nav className="sticky top-14 bg-white border-b border-gray-200 z-40">
      <div className="max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto flex justify-around">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center py-1.5 px-1 text-[10px] no-underline transition-colors ${
                isActive ? 'text-indigo-600' : 'text-gray-400'
              }`
            }
          >
            <Icon size={18} />
            <span className="mt-0.5">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
