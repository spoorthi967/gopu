import React from "react";
import "./Aboutme.css";
import about from "../Images/about.webp";
import { useNavigate } from "react-router-dom";
import clickSound from "../Images/click1.wav"; // ✅ Import the sound file

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
          I am a passionate <strong>Web Developer</strong> with expertise in <strong>React, JavaScript, and UI/UX design</strong>. 
          With over 5 years of experience, I create engaging, responsive, and user-friendly web applications.
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
