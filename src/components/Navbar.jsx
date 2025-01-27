import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center bg-black bg-opacity-50 text-white px-8 py-2 rounded-full shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%]">
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg font-semibold">
        <li>
          <Link to = "/" className="hover:text-purple-400 transition-colors duration-300">Home</Link>
        </li>
        <li>
          <Link to="/gall" className="hover:text-purple-400 transition-colors duration-300">Gallery</Link>
        </li>
        <li className="flex items-center space-x-1">
          <a
            href="https://drive.google.com/file/d/1dNHFRiU4e4G29sbFle2izJPyqFT7HSkO/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="text-pink-400 hover:text-purple-400 transition-colors duration-300"
          >
            Brochure
          </a>
          <span className="text-xl">🎉</span>
        </li>
        <li>
          <a href="/#ft" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
        </li>
        <li>
          <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">About</Link>
        </li>
      </ul>

      {/* Menu Button for small screens */}
      <button onClick={toggleMenu} className="md:hidden text-3xl">
        {isMenuOpen ? '×' : '≡'}
      </button>

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
          href="https://x.com/NITDofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/upvision_nitdelhi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:techclub@nitdelhi.ac.in"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;