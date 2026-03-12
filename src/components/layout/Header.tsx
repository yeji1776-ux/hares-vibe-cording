import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src="/favicon.svg" alt="logo" className="w-8 h-8" />
          <span className="text-gray-900 font-extrabold text-xl tracking-tight">Hare's Vibe Cording</span>
        </Link>
        <span className="text-[10px] text-gray-300">by Hare_table</span>
      </div>
    </header>
  );
}
