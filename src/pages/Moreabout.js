import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import "./Moreabout.css";

const Moreabout = () => {
  return (
    <div className="moreabout-container">
     

        <div className="about-section">
          <h2>Who Am I?</h2>
          <p>
            I am a passionate Full-Stack Developer with experience in modern web technologies.
            I love solving complex problems and building scalable applications.
            My expertise spans from Frontend to Backend development.
          </p>
        </div>

        <div className="skills-section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li><FaCode className="icon" /> <span>Backend: Node.js, Express.js</span></li>
            <li><FaDatabase className="icon" /> <span>Database: MongoDB, MySQL</span></li>
            <li><FaCloud className="icon" /> <span>Cloud: AWS, Firebase</span></li>
            <li><FaTools className="icon" /> <span>DevOps: Docker, Git, CI/CD</span></li>
          </ul>
        </div>

        <div className="goals-section">
          <h2>Future Goals</h2>
          <p>
            My goal is to deepen my expertise in Full-Stack Development, contribute to impactful projects,
            and stay ahead of emerging technologies in AI and Cloud Computing.
          </p>
        </div>

        <div className="back-link">
          <Link to="/about">← Back to About Me</Link>
        </div>
      </div>
   
  );
};

export default Moreabout;
