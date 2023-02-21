import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectView from './pages/ProjectView';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/:id" element={<ProjectView />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
