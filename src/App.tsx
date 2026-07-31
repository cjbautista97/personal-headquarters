import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { WorkPage } from '@/pages/WorkPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<WorkPage />} />
    </Routes>
  );
}

export default App;
