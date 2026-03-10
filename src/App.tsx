import './App.sass';
import { Route, Routes } from 'react-router-dom';
import GamesPage from './components/Pages/GamesPage/GamesPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import type { JSX } from 'react';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<GamesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
