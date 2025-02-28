import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Importing back arrow icon
import "./Hirebutton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const HireButton = () => {
  return (
    <div className="Hire-me-containner">
      <div className="heading-titles">
        <h1>Thank you for reaching out to me</h1>
        <h2>
          I'm excited to collaborate! You can reach me at{" "}
          <a href="mailto:gopuspoorthi18@gmail.com">gopuspoorthi18@gmail.com</a>{" "}
          or +1 (260) 580-5457
        </h2>
      </div>
      
      {/* Back Button */}
      <div className="back-button">
        <Link to="/" className="btn btn-primary">
          <FaArrowLeft className="me-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default HireButton;
