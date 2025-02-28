import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Experience.css";
import experience from "../Images/experience.jpg";

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="experience-main-container">
      {/* Left Section - Image */}
      <div className="experience-image">
        <img src={experience} alt="Experience" />
      </div>

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
              <li><i className="bi bi-laptop"></i> Developed responsive, mobile-friendly web applications using React.js.</li>
              <li><i className="bi bi-braces"></i> Implemented state management solutions with Redux.</li>
              <li><i className="bi bi-globe2"></i> Integrated RESTful APIs for dynamic data rendering.</li>
            </ul>
          </div>

          {/* Web Development Intern */}
          <div className="experience-card">
            <h2><i className="bi bi-briefcase"></i> Web Development Intern</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> Electronics Corporation of India Limited (ECIL)
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> 2018 – 2020
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-code"></i> Assisted in developing and maintaining web applications.</li>
              <li><i className="bi bi-palette"></i> Implemented responsive web interfaces using HTML, CSS, and JavaScript.</li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
