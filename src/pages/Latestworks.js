import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Latestworks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaArrowLeft } from "react-icons/fa"; // Importing back arrow icon

const Latestworks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container latest-works-container">
      <h1 className="text-center">Latest Works</h1>
      <Slider {...settings}>
        {/* Project 1 */}
        <div className="project-slide">
          <h2>Capstone Project - Market Data Dashboard</h2>
          <h3>Technologies: React.js, Redux, Node.js, MongoDB, HTML, CSS, API Integration</h3>
          <ul>
            <li>Developed a dynamic dashboard for real-time market data visualization using React.js and Redux.</li>
            <li>Implemented interactive charts and data filters for comprehensive analysis.</li>
            <li>Optimized backend performance with Node.js and MongoDB for efficient data management.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project-slide">
          <h2>Movie Application</h2>
          <h3>Created a responsive movie search application with real-time data from TMDb API.</h3>
          <ul>
            <li>Implemented dynamic UI, search functionalities, and performance optimizations.</li>
            <li>Implemented interactive charts and data filters for comprehensive analysis.</li>
            <li>Ensured mobile responsiveness and cross-browser compatibility.</li>
          </ul>
        </div>
      </Slider>
      <div className="back-button1">
              <Link to="/" className="btn1 btn-primary">
                <FaArrowLeft className="me-2" /> Back to Home
              </Link>
            </div>
    </div>
  );
};

export default Latestworks;
