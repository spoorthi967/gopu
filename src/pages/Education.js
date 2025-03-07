import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Education.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Education = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Default slick arrows will be used
  };

  return (
    <div className="education-main-container">
      <div className="education-content">
        <h1 className="education-title">
          <i className="bi bi-mortarboard"></i> My Education
        </h1>

        <Slider {...settings}>
          <div className="education-card">
            <h2><i className="bi bi-mortarboard"></i> Master of Science in Information Systems</h2>
            <p className="education-institute">
              <i className="bi bi-building"></i> Indiana Institute of Technology, Fort Wayne
            </p>
            <p className="education-duration">
              <i className="bi bi-calendar"></i> May 2023 – December 2024
            </p>
            <p className="education-gpa">
              <i className="bi bi-bar-chart"></i> GPA: 3.7/4
            </p>
          </div>

          <div className="education-card">
            <h2><i className="bi bi-mortarboard"></i> Bachelor of Technology in Electronics and Communication Engineering</h2>
            <p className="education-institute">
              <i className="bi bi-building"></i> Swami Vivekananda Institute of Technology
            </p>
            <p className="education-duration">
              <i className="bi bi-calendar"></i> August 2016 – May 2020
            </p>
            <p className="education-gpa">
              <i className="bi bi-bar-chart"></i> CGPA: 6.8/10
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Education;
