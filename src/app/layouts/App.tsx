import './App.sass';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/about';
import { GamesPage } from '../../pages/games';
import { NotFoundPage } from '../../pages/notfoundpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GamesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
