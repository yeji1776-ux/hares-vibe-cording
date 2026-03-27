import { createContext, useContext, useState, type ReactNode } from 'react';

interface UserProfile {
  nickname: string;
  createdAt: string;
  avatar?: string;
  goal?: string;
}

interface UserContextType {
  user: UserProfile | null;
  register: (nickname: string) => void;
  logout: () => void;
  updateProfile: (updates: Partial<Pick<UserProfile, 'avatar' | 'goal'>>) => void;
}

const UserContext = createContext<UserContextType | null>(null);

function saveUser(data: Record<string, unknown>) {
  localStorage.setItem('cording-user', JSON.stringify(data));
}

function loadUser(): Record<string, unknown> | null {
  try {
    const saved = localStorage.getItem('cording-user');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const parsed = loadUser();
    if (!parsed || !parsed.loggedIn) return null;
    return parsed as unknown as UserProfile;
  });

  const register = (nickname: string) => {
    const profile: UserProfile = {
      nickname,
      createdAt: new Date().toISOString().split('T')[0],
    };
    saveUser({ ...profile, loggedIn: true });
    setUser(profile);
  };

  const logout = () => {
    const parsed = loadUser();
    if (parsed) saveUser({ ...parsed, loggedIn: false });
    setUser(null);
  };

  const updateProfile = (updates: Partial<Pick<UserProfile, 'avatar' | 'goal'>>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    saveUser({ ...updated, loggedIn: true });
  };

  return (
    <UserContext.Provider value={{ user, register, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
