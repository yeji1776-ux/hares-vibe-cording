import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-[#0066FF] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-5 h-5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="text-gray-900 font-black text-xl tracking-tight">Hare's Vibe Cording</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-400">
            H
          </div>
        </div>
      </div>
    </header>
  );
}
