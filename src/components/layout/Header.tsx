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
      <header className="bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#1F1F2E] sticky top-0 z-50">
        <div className="max-w-[520px] mx-auto px-5 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 rounded-lg gradient-gold-red flex items-center justify-center text-white font-black text-sm">
              CM
            </div>
            <span className="gradient-text font-black text-lg tracking-tight">Claude Master</span>
          </Link>
          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#1A1A2E] transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A1A2E] border border-[#F59E0B]/30 flex items-center justify-center text-[10px] font-bold text-[#F59E0B]">
              {user ? user.nickname[0] : '?'}
            </div>
            <span className="text-xs font-bold text-[#9CA3AF]">{user?.nickname}</span>
          </button>
        </div>
      </header>

      {showLogout && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center px-6" onClick={() => setShowLogout(false)}>
          <div className="bg-[#12121A] border border-[#1F1F2E] rounded-2xl p-6 w-full max-w-xs shadow-xl" onClick={e => e.stopPropagation()}>
            <p className="text-center text-base font-bold text-[#E5E7EB] mb-1">로그아웃</p>
            <p className="text-center text-sm text-[#9CA3AF] mb-5">정말 로그아웃 하시겠어요?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 py-3 rounded-xl border border-[#1F1F2E] text-sm font-bold text-[#9CA3AF] hover:bg-[#1A1A2E] transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 rounded-xl gradient-gold-red text-white text-sm font-bold hover:opacity-90 transition-opacity"
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
