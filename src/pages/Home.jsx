import React from "react";
import "../App.css"; // Import the CSS file
import "../pages/home.css";
import Broucher from "../components/Brochure";
import Upcoming from "../components/Upcoming";

import Sponsors from "../components/sponsors";
const HomePage = () => {
  const handleClick = () => {
    window.open("https://forms.gle/6fHaKbR5r8WjaE2p7", "_blank"); // Replace with your desired link
  };

  return (
    <>
      <div id="hm" className="min-h-screen flex flex-col text-white">
        {/* Top Section with Blurred Background */}
        <div className="relative h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center">
            <img
              src="/images/Robot1.gif"
              alt="UpVision Logo"
              className="logo"
            />
            <h1 className="sen text-6xl md:text-8xl font-bold text-center drop-shadow-lg robotic-text">
              SENTIENCE
            </h1>
            <p className=" mt-4 text-xl md:text-2xl text-center max-w-2xl drop-shadow-md robotic-text">
              2025
            </p>

            <button onClick={handleClick} className="frutiger-button">
              <div className="inner">
                <div className="top-white"></div>
                <span className="text">Sponsor Us</span>
              </div>
            </button>
          </div>
        </div>

        {/* Events Section */}
      </div>

      <div className="all">
        <div className="up  robotic-text ">
          <h1>Upcoming Events</h1>
        </div>
        <div className="upcome">
          <Upcoming />
        </div>
        <div className="up  robotic-text">
          <h1>Past Events</h1>
        </div>
        <div className="upcome">
          <Broucher />
        </div>
        <div className="up  robotic-text">
          <h1>Our Sponsors</h1>
        </div>
        <div className="upcome">
          <Sponsors />
        </div>
      </div>
    </>
  );
};

export default HomePage;
