import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black bg-opacity-50 text-white px-8 py-2 rounded-full shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%]">
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg font-semibold">
        <li>
          <a
            href="#about"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="#team"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Team
          </a>
        </li>
        <li className="flex items-center space-x-1">
          <a
            href="Broucher"
            className="text-pink-400 hover:text-purple-400 transition-colors duration-300"
          >
            Brochure
          </a>
          <span className="text-xl">🎉</span>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex space-x-4 text-xl">
        <a
          href="https://www.linkedin.com/company/upvision-nitd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:example@example.com"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
