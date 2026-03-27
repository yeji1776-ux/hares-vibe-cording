import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import { TimerProvider } from './contexts/TimerContext';
import { UserProvider, useUser } from './contexts/UserContext';
import MiniTimer from './components/timer/MiniTimer';
import HomePage from './pages/HomePage';
import WeekPage from './pages/WeekPage';
import TipDetailPage from './pages/TipDetailPage';
import AGReferencePage from './pages/AGReferencePage';
import DictionaryPage from './pages/DictionaryPage';
import CalendarPage from './pages/CalendarPage';
import PortfolioPage from './pages/PortfolioPage';
import TimerPage from './pages/TimerPage';
import LecturesPage from './pages/LecturesPage';
import MemoPage from './pages/MemoPage';
import AuthPage from './pages/AuthPage';

function AppContent() {
  const { user } = useUser();

  if (!user) {
    return <AuthPage />;
  }

  return (
    <TimerProvider>
    <div className="min-h-screen bg-[#0A0A0F]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/week/:weekId" element={<WeekPage />} />
          <Route path="/tip/:tipId" element={<TipDetailPage />} />
          <Route path="/ag-reference" element={<AGReferencePage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/lectures" element={<LecturesPage />} />
          <Route path="/memo" element={<MemoPage />} />
        </Routes>
      </main>
      <MiniTimer />
      <BottomNav />
    </div>
    </TimerProvider>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
