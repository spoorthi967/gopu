import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Moreabout.css";
import clickSound from "../Images/click1.wav";

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Moreabout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play().catch((err) => console.warn("Audio blocked:", err));
  };

  return (
    <div className="container moreabout-container">
      <div className="content">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="about-section">
            <h2>Who Am I?</h2>
            <p>
              I am a passionate Full-Stack Developer with experience in modern
              web technologies. I love solving complex problems and building
              scalable applications. My expertise spans from Frontend to Backend
              development.
            </p>
          </div>

          {/* Slide 2 */}
          <div className="skills-section">
            <h2>Technical Skills</h2>
            <ul className="skills-list">
              <li>
                <FaCode className="icon" /> <span>Backend: Node.js, Express.js</span>
              </li>
              <li>
                <FaDatabase className="icon" /> <span>Database: MongoDB, MySQL</span>
              </li>
              <li>
                <FaCloud className="icon" /> <span>Cloud: AWS, Firebase</span>
              </li>
              <li>
                <FaTools className="icon" /> <span>DevOps: Docker, Git, CI/CD</span>
              </li>
            </ul>
          </div>

          {/* Slide 3 */}
          <div className="goals-section">
            <h2>Future Goals</h2>
            <p>
              My goal is to deepen my expertise in Full-Stack Development,
              contribute to impactful projects, and stay ahead of emerging
              technologies in AI and Cloud Computing.
            </p>
          </div>
        </Slider>

        {/* Back Link */}
        <div className="back-link">
          <Link to="/about" onClick={playClickSound}>
            Back to About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moreabout;
