import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index/Index';
import AboutMe from './Pages/AboutMe/AboutMe';
import Skils from './Pages/Skils/Skils';
import Projects from './Pages/Projects/Projects';
import WorkingHistory from './Pages/History/History';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skils />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/History" element={<WorkingHistory />} />
      </Routes>
    </HashRouter>
  );
}

export default App;