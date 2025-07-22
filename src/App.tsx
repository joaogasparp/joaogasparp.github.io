import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AcademicProjects from './pages/AcademicProjects';
import PersonalProjects from './pages/PersonalProjects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academic-projects" element={<AcademicProjects />} />
            <Route path="/personal-projects" element={<PersonalProjects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
