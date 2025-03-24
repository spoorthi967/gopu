import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Experience.css";
import experience from "../Images/experience.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

// Custom Previous Arrow (Left Side)
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

// Custom Next Arrow (Right Side)
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};


const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true ,
    prevArrow: <CustomPrevArrow />, // Left arrow
    nextArrow: <CustomNextArrow />, // Right arrow
  };

  return (
    <div className="experience-main-container">
  

      {/* Right Section - Sliding Experience Content */}
      <div className="experience-content">
        <h1 className="experience-title">
          <i className="bi bi-briefcase-fill"></i> Professional Experience
        </h1>
        <Slider {...settings}>
          {/* IT Conference Services */}
          <div className="experience-card">
            <h2><i className="bi bi-display"></i> IT Conference Services Team Member</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> Indiana Institute of Technology, Fort Wayne
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> June 2023 – December 2024
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-tools"></i> Provided technical support for IT infrastructure during conferences and meetings.</li>
              <li><i className="bi bi-mic"></i> Set up and troubleshot AV systems, video conferencing tools, and networking equipment.</li>
              <li><i className="bi bi-people"></i> Assisted speakers and attendees with IT-related issues.</li>
            </ul>
          </div>

          {/* Front-End Developer */}
          <div className="experience-card">
            <h2><i className="bi bi-code-slash"></i> Front-End Developer</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> Wipro
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> August 2020 – March 2023
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-laptop"></i>Developed responsive, mobile-friendly web applications using React.js and JavaScript .</li>
              <li><i className="bi bi-braces"></i> Implemented state management solutions with Redux to handle complex application states
              efficiently.</li>
              <li><i className="bi bi-globe2"></i> Integrated RESTful APIs for dynamic data rendering and asynchronous request handling.</li>
              <li><i className="bi bi-laptop"></i>Utilized Webpack and Babel for front-end build optimization and faster load times .</li>
              <li><i className="bi bi-braces"></i>Collaborated closely with UI/UX teams to ensure design consistency and user-centered features .</li>
              <li><i className="bi bi-globe2"></i> Leveraged Git for version control, managing code repositories and contributing to continuous
              integration workflows.</li>
            </ul>
          </div>

          
        
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
