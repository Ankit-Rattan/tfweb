import React from "react";

// import assets from "..assets/assets";

const HomePage = () => {
  const handleClick = () => {
    window.open("https://forms.gle/6fHaKbR5r8WjaE2p7", "_blank"); // Replace with your desired link
  };
  return (
    <div id="hm" className=" min-h-screen flex flex-col text-white">
      {/* Top Section with Blurred Background */}
      <div className="relative h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 bg-cover h-auto max-w-full bg-fix  flex flex-col justify-center items-center">
          <img src="/images/Robot1.gif" alt="UpVision Logo" className="logo" />
          <h1 className="text-6xl md:text-8xl font-extrabold text-center drop-shadow-lg robotic-text">
            SENTIENCE
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-center max-w-2xl drop-shadow-md ">
            Discover the future with cutting-edge technology and innovation.
          </p>

          <button onClick={handleClick} class="frutiger-button">
            <div class="inner">
              <div class="top-white"></div>
              <span class="text">Sponsor Us</span>
            </div>
          </button>
        </div>
      </div>

      {/* Events Section */}
    </div>
  );
};

export default HomePage;
