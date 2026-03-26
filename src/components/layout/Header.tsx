import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export default function Header() {
  const { user, logout } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    logout();
    setShowLogout(false);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <img src="/favicon.png" alt="Vibe" className="w-10 h-10 object-contain drop-shadow-md" />
            <span className="text-gray-900 font-black text-xl tracking-tight">Hare's Vibe Cording</span>
          </Link>
          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#F5F3FF] border border-purple-100 flex items-center justify-center text-[11px] font-bold text-[#8B5CF6]">
              {user ? user.nickname[0] : '?'}
            </div>
            <span className="text-sm font-bold text-gray-700">{user?.nickname}</span>
          </button>
        </div>
      </header>

      {showLogout && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-6" onClick={() => setShowLogout(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-xs shadow-xl" onClick={e => e.stopPropagation()}>
            <p className="text-center text-base font-bold text-gray-900 mb-1">로그아웃</p>
            <p className="text-center text-sm text-gray-400 mb-5">정말 로그아웃 하시겠어요?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 rounded-xl bg-[#8B5CF6] text-white text-sm font-bold hover:bg-[#7C3AED] transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
