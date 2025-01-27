import React from "react";
import Broucher from "../components/Broucher";

const HomePage = () => {
  return (
    <>
      {/* Render Particles */}

      <div className="min-h-screen flex flex-col text-white">
        {/* Hero Section with Blurred Background */}
        <div className="relative h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-6xl md:text-8xl font-extrabold text-center drop-shadow-lg">
              SENTIENCE
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-center max-w-2xl drop-shadow-md">
              Discover the future with cutting-edge technology and innovation.
            </p>
          </div>
        </div>

        {/* Events Section */}
        <Broucher />
      </div>
    </>
  );
};

export default HomePage;
