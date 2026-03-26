import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export default function AuthPage() {
  const { register, login } = useUser();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const handleSubmit = () => {
    setError('');
    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      setError('PIN은 숫자 4자리로 입력해주세요');
      return;
    }
    if (mode === 'register') {
      if (!nickname.trim()) {
        setError('닉네임을 입력해주세요');
        return;
      }
      register(nickname.trim(), pin);
      navigate('/');
    } else {
      if (login(pin)) {
        navigate('/');
      } else {
        setError('PIN이 일치하지 않아요');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src="/favicon.png" alt="Vibe" className="w-16 h-16 object-contain mx-auto mb-4 drop-shadow-lg" />
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Hare's Vibe Cording</h1>
          <p className="text-gray-400 text-sm font-medium mt-1">바이브코딩 학습 도우미</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {mode === 'login' ? (
            <>
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center mx-auto mb-3">
                  <User size={24} className="text-[#8B5CF6]" />
                </div>
                <p className="font-bold text-gray-900">로그인</p>
                <p className="text-xs text-gray-400 mt-0.5">PIN 4자리를 입력해주세요</p>
              </div>
              <input
                type="password"
                inputMode="numeric"
                placeholder="PIN 4자리"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                maxLength={4}
                autoFocus
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]"
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-3">
                  <User size={24} className="text-gray-300" />
                </div>
                <p className="font-bold text-gray-900">회원가입</p>
                <p className="text-xs text-gray-400 mt-0.5">닉네임과 PIN을 설정해주세요</p>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  maxLength={10}
                  autoFocus
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-center focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]"
                />
                <input
                  type="password"
                  inputMode="numeric"
                  placeholder="PIN 4자리 (숫자)"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  maxLength={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]"
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
              </div>
            </>
          )}

          {error && <p className="text-xs text-red-500 font-medium mt-3 text-center">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-3.5 bg-[#8B5CF6] text-white rounded-xl text-sm font-bold hover:bg-[#7C3AED] transition-colors active:scale-[0.98]"
          >
            {mode === 'login' ? '로그인' : '가입하기'}
          </button>

          <button
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); setPin(''); setNickname(''); }}
            className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 font-medium py-2"
          >
            {mode === 'login' ? '회원가입' : '로그인으로 돌아가기'}
          </button>
        </div>
      </div>
    </div>
  );
}
