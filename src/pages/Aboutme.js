import React from "react";
import "./Aboutme.css";
import about from "../Images/about.webp";
import { useNavigate } from "react-router-dom";
import clickSound from "../Images/click.mp3"; // ✅ Import the sound file

const Aboutme = () => {
  const navigate = useNavigate();

  // ✅ Play sound and navigate after a short delay
  const handleLearnMoreClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;

    audio.play().then(() => {
      setTimeout(() => {
        navigate("/moreabout");
      }, 200); // Small delay to let sound play
    }).catch((err) => {
      console.warn("Audio failed to play:", err);
      navigate("/moreabout"); // Navigate anyway if sound fails
    });
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="fade-in">About Me</h1>
        <h2 className="highlight">Web Developer & Designer</h2>
        <p className="slide-up">
        I’m a passionate Web Developer with 3+ years of IT experience, specializing in building responsive, user-friendly applications using React, JavaScript (ES6+), 
        and UI/UX design principles. Skilled in Redux, Tailwind CSS, and RESTful APIs,
         I recently developed a Market Dashboard featuring real-time data and clean UI. I also have hands-on backend experience with Node.js, 
         Express.js, and MongoDB from projects completed during my M.S. in Information Systems.
        </p>
        <p className="slide-up delay">
          My focus is on delivering high-quality, performance-optimized solutions that enhance digital experiences.
          I am always eager to learn new technologies and collaborate on exciting projects.
        </p>
        
        {/* ✅ Sound-enabled Learn More button */}
        <button onClick={handleLearnMoreClick} className="about-btn">
          Learn More
        </button>
      </div>

      <div className="about-photo">
        <img src={about} alt="Profile" />
      </div>
    </div>
  );
};

export default Aboutme;
