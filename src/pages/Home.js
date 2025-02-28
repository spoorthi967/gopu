
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pic from '../Images/pic.jpg';
import './Home.css';
import React, { useState } from "react";
import HireButton from "./HireButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
 
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Dark Overlay for Styling */}
      <div className="content">
        <div className="text-section">
          <h1>Hi, I'm <span>Gopu spoorthi</span></h1>
          <h2>Now iam into web development</h2>
          <p>
            Bringing designs to life with code is not just my job—it's my passion! 
          </p>
          <div className="buttons">
            <button onClick={() => navigate("/hirebutton")}className="latest-btn btn btn-primary">Hire Me</button>
            <button onClick={() => navigate("/latestworks")}className="latest-btn btn btn-primary">Latest works</button>
          </div>
        </div>
        <div className="image-section">
          <img src={pic} alt="Profile" />
        </div>
      </div>
      
    </div>
  
  );
}

export default Home;
