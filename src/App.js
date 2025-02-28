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
    // Add basename here for GitHub Pages
    <Router basename="/gopu">
      <header className="navbar-container">
        <div className="logo">
          <img src={logo1} height={70} width={240} alt="Logo" />
        </div>
        <nav className="nav-menu">
  <ul>
    <li><Link to="/"><i className="bi bi-house-door"></i> HOME</Link></li> {/* Home Icon */}
    <li><Link to="/about"><i className="bi bi-person"></i> ABOUT ME</Link></li> {/* Person Icon */}
    <li><Link to="/education"> <i class="bi bi-mortarboard-fill"></i>EDUCATION</Link></li> {/* Graduation Cap Icon */}
    <li><Link to="/experience"><i className="bi bi-briefcase"></i> EXPERIENCE</Link></li> {/* Briefcase Icon */}
    <li><Link to="/skills"><i className="bi bi-lightbulb"></i> SKILLS</Link></li> {/* Lightbulb Icon */}
    <li><Link to="/contact"><i className="bi bi-envelope"></i> CONTACT</Link></li> {/* Envelope Icon */}
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
            <img src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/spoorthi967" target="_blank" rel="noopener noreferrer">
            <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-orange.png" alt="GitHub" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src="https://static.vecteezy.com/system/resources/previews/021/514/701/non_2x/google-gmail-logo-symbol-design-illustration-with-black-background-free-vector.jpg" height={40} width={40} alt="Email" />
          </a>
        </div>
      </footer>
    </Router>
  );
};

export default App;
