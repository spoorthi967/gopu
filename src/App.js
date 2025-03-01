import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo1 from './Images/logo1.png';
import HireButton from "./pages/HireButton";
import Moreabout from "./pages/Moreabout";   
import Latestworks from "./pages/Latestworks";

const App = () => {
  return (
    <Router basename="/gopu">

      <header className="navbar-container">
        <div className="logo">
          <img src={logo1} height={70} width={240} alt="Logo" />
        </div>
        

        <nav className="nav-menu">
          <ul>
            <li><Link to="/"><i className="bi bi-house-door"></i> HOME</Link></li>
            <li><Link to="/about"><i className="bi bi-person"></i> ABOUT ME</Link></li>
            <li><Link to="/education"> <i className="bi bi-mortarboard-fill"></i> EDUCATION</Link></li>
            <li><Link to="/experience"><i className="bi bi-briefcase"></i> EXPERIENCE</Link></li>
            <li><Link to="/skills"><i className="bi bi-lightbulb"></i> SKILLS</Link></li>
            <li><Link to="/contact"><i className="bi bi-envelope"></i> CONTACT</Link></li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/moreabout" element={<Moreabout />} /> 
        <Route path="/latestworks" element={<Latestworks />} />
        <Route path="/hirebutton" element={<HireButton />} />
      </Routes>

      <footer className="footer">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/spoorthi967" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-github"></i>
          </a>
          <a href="mailto:your-gopuspoorthi18@gmail.com">
          <i class="bi bi-envelope-at-fill"></i>
          </a>
        </div>
      </footer>
    </Router>
  );
};

export default App;
