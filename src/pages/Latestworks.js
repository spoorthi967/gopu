import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Latestworks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaReact, FaDesktop, FaCode, FaServer, FaChartBar, FaMobileAlt } from 'react-icons/fa'; 
import { SiRedux, SiAxios, SiMongodb } from 'react-icons/si';
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


const Latestworks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, // Left arrow
    nextArrow: <CustomNextArrow />, // Right arrow
  };

  return (


    <div className="container latest-works-container">
    
    <div className="back-button1">
              <Link to="/" className="btn1 ">  

                <FaArrowLeft className="me-2" />
              </Link>
            </div>
     
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
    <li><FaChartBar /> Implemented interactive charts and data filters for comprehensive analysis.</li>
    <li><FaMobileAlt /> Ensured mobile responsiveness and cross-browser compatibility.</li>
  </ul>
</div>

{/* Project 3 */}
<div className="project-slide">
  <h2>Portfolio</h2>
  <h3>"A Modern Portfolio Showcasing My Skills, Projects, and Passion for Front-End Development!"</h3>
  <ul>
    <li><FaReact /> By using React.js & JavaScript, built modular, reusable components with React Hooks (useState, useEffect), ensuring dynamic and interactive UI.</li>
    <li><FaDesktop /> Designed fully responsive layouts using Bootstrap’s grid system and customized styles with Tailwind for a modern UI.</li>
    <li><SiAxios /> Fetched real-time data using REST APIs (fetch, Axios), implemented error handling, and optimized API calls for performance.</li>
    <li><SiRedux /> Used React Context API and Redux for efficient state management, applied lazy loading and debouncing for better performance.</li>
  </ul>
</div>

      </Slider>

    
      
    </div>
  );
};

export default Latestworks;
