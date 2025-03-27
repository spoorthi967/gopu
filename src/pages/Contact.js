import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact </h2>
      <p className="contact-subtext">
        I'm open to opportunities, collaborations, and conversations. Reach out through mail  below:
      </p>

      <div className="contact-info">
        <div className="contact-item">
    
          <a href="mailto:gopuspoorthi18@gmail.com">gopuspoorthi18@gmail.com</a>
        </div>

        

       
      </div>
    </div>
  );
};

export default Contact;
