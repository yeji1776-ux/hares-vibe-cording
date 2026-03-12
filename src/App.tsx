import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import HomePage from './pages/HomePage';
import DictionaryPage from './pages/DictionaryPage';
import CalendarPage from './pages/CalendarPage';
import PortfolioPage from './pages/PortfolioPage';
import BookQAPage from './pages/BookQAPage';
import YouTubePage from './pages/YouTubePage';
import CurriculumPage from './pages/CurriculumPage';
import ChatbotPage from './pages/ChatbotPage';
import QuizPage from './pages/QuizPage';
import BadgesPage from './pages/BadgesPage';
import CheatsheetPage from './pages/CheatsheetPage';
import TimerPage from './pages/TimerPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="md:pt-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/book-qa" element={<BookQAPage />} />
          <Route path="/youtube" element={<YouTubePage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/cheatsheet" element={<CheatsheetPage />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}
