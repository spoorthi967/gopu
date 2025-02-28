import React from "react";
import "./Aboutme.css";
import about from "../Images/about.webp";
import { useNavigate } from "react-router-dom";



const Aboutme = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
    
      <div className="about-text">
        <h1 className="fade-in">About Me</h1>
        <h2 className="highlight">Web Developer & Designer</h2>
        <p className="slide-up">
          I am a passionate <strong>Web Developer</strong> with expertise in <strong>React, JavaScript, and UI/UX design</strong>. 
          With over 5 years of experience, I create engaging, responsive, and user-friendly web applications.
        </p>
        <p className="slide-up delay">
          My focus is on delivering high-quality, performance-optimized solutions that enhance digital experiences.
          I am always eager to learn new technologies and collaborate on exciting projects.
        </p>
        <button onClick={() => navigate("/moreabout")}className="about-btn">Learn More</button>
      </div>
      <div className="about-photo">
        <img src={about} alt="Profile" />
      </div>
    </div>
  );
};

export default Aboutme;
