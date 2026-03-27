import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export default function AuthPage() {
  const { register } = useUser();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요');
      return;
    }
    register(nickname.trim());
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-gold-red flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">CM</div>
          <h1 className="text-2xl font-black text-[#E5E7EB] tracking-tight">Claude Master</h1>
          <p className="text-[#9CA3AF] text-sm font-medium mt-1">클로드 활용 100가지 팁 마스터하기</p>
        </div>

        <div className="bg-[#12121A] rounded-2xl border border-[#1F1F2E] p-6">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#F59E0B]/15 flex items-center justify-center mx-auto mb-3">
              <User size={24} className="text-[#F59E0B]" />
            </div>
            <p className="font-bold text-[#E5E7EB]">시작하기</p>
            <p className="text-xs text-[#9CA3AF] mt-0.5">닉네임을 입력해주세요</p>
          </div>

          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={10}
            autoFocus
            className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0F] border border-[#1F1F2E] text-[#E5E7EB] text-sm font-medium text-center focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />

          {error && <p className="text-xs text-red-500 font-medium mt-3 text-center">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-3.5 gradient-gold-red text-white rounded-xl text-sm font-bold transition-colors active:scale-[0.98]"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
