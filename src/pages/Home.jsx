import React from "react";

// import assets from "..assets/assets";

const HomePage = () => {
  return ( 
    <div className="min-h-screen flex flex-col text-white">
      {/* Top Section with Blurred Background */}
      <div className="relative h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 bg-cover h-auto max-w-full bg-fix  flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-center drop-shadow-lg ">
            SENTIENCE
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-center max-w-2xl drop-shadow-md">
            Discover the future with cutting-edge technology and innovation.
          </p>
        </div>
      </div>
           
      {/* Events Section */}
      <div className="w-full bg-black py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <a
            href="#soloana"
            className="block py-4 bg-gray-800 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
          >
            SOLOANA
          </a>
          <a
            href="#fetchathon"
            className="block py-4 bg-gray-800 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
          >
            FETCHATHON
          </a>
          <a
            href="#tech-odyssey"
            className="block py-4 bg-gray-800 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
          >
            TECH ODYSSEY
          </a>
          <a
            href="#gen-ai"
            className="block py-4 bg-gray-800 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
          >
            GEN AI
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// Animation styles
// @keyframes slide-in-left {
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// }

// .animate-slide-in-left {
//   animation: slide-in-left 0.5s ease-in-out forwards;
// }