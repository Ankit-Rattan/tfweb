import React from 'react';
import './Footer.css'; // Ensure to create this CSS file for styling.
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id='ft'>
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src="/images/upvision_logo.gif" alt="UpVision Logo" className="footer-logo" />
          <h3>UpVision</h3>
          <p>Technical Club of NIT Delhi</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Follow Us On</h3>
          <div className="footer-social-icons">

            <a href="https://www.instagram.com/upvision_nitdelhi" target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
            </a>
            <a href="https://www.linkedin.com/company/upvision-nitd" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a href="https://x.com/NITDofficial" target="_blank" rel="noopener noreferrer">
              <FaTwitter/>
            </a>
          </div>
          <p>
            <a href="mailto:techclub@nitdelhi.ac.in">techclub@nitdelhi.ac.in</a>
            <div className='flex flex-row gap-2 mt-1'>

            <p>Developed By :</p>
            <p>Sumit Kumar | </p>
            <p>Vashu Kumar</p>
            </div>
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <img src="/images/NIT-Delhi_Logo.png" alt="NIT Delhi Logo" className="footer-logo" />
          <p>National Institute of Technology Delhi</p>
          <p>
            Plot No. FA7, Zone P1, GT Karnal Road, Delhi, 110036
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
