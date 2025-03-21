import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Latestworks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaReact, FaDesktop, FaCode, FaServer, FaChartBar, FaMobileAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { SiRedux, SiAxios, SiMongodb } from 'react-icons/si';
import clickSound from "../Images/click1.wav"; // ✅ Make sure this file exists

// ✅ Global sound player function
const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.volume = 0.5;
  audio.currentTime = 0;
  audio.play().catch(err => console.warn("Audio blocked:", err));
};

// Custom Previous Arrow (Left Side)
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={() => {
      playClickSound();
      onClick();
    }}>
      <FaArrowLeft />
    </div>
  );
};

// Custom Next Arrow (Right Side)
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={() => {
      playClickSound();
      onClick();
    }}>
      <FaArrowRight />
    </div>
  );
};

const Latestworks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container latest-works-container">
      
      {/* ✅ Back Button with sound */}
      
      <Slider {...settings}>

        {/* Project 1 */}
        <div className="project-slide">
          <h2>Capstone Project - Market Data Dashboard</h2>
          <h3>Technologies: React.js, Redux, Node.js, MongoDB, HTML, CSS, API Integration</h3>
          <ul>
            <li><FaReact /> Developed a dynamic dashboard for real-time market data visualization using React.js and Redux.</li>
            <li><FaChartBar /> Implemented interactive charts and data filters for comprehensive analysis.</li>
            <li><FaServer /> Optimized backend performance with Node.js and MongoDB for efficient data management.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project-slide">
          <h2>Movie Application</h2>
          <h3>Created a responsive movie search application with real-time data from TMDb API.</h3>
          <ul>
            <li><FaReact /> Implemented dynamic UI, search functionalities, and performance optimizations.</li>
            <li><FaChartBar /> Integrated real-time insights with beautiful visuals.</li>
            <li><FaMobileAlt /> Ensured mobile responsiveness and cross-browser compatibility.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="project-slide">
          <h2>Portfolio</h2>
          <h3>"A Modern Portfolio Showcasing My Skills, Projects, and Passion for Front-End Development!"</h3>
          <ul>
            <li><FaReact /> Built reusable components with React Hooks for interactive UI.</li>
            <li><FaDesktop /> Designed responsive layouts using Bootstrap and Tailwind CSS.</li>
            <li><SiAxios /> Integrated REST APIs using Axios with error handling and optimizations.</li>
            <li><SiRedux /> Used Redux & Context API for efficient state management.</li>
          </ul>

       
        </div>
      


      </Slider>
      <div className="back-button1">
        <Link to="/" className="btn1" onClick={playClickSound}>
          <FaArrowLeft className="me-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Latestworks;
