import React from "react";
import './Gallery.css';

const Gallery = () => {
    const commonImage = "https://static.vecteezy.com/system/resources/thumbnails/023/378/438/small_2x/network-technology-background-futuristic-tech-black-background-low-poly-green-wave-3d-wire-illustration-ai-generated-photo.jpg";

    // Event data with names and descriptions
    const events = [
        { name: "SOLOANA", description: "Explore the power of Solana blockchain in this event." },
        { name: "FETCHATHON", description: "A 12-hour hackathon for innovators and problem solvers." },
        { name: "TECH ODESSEY", description: "A journey through cutting-edge technologies." },
        { name: "GEN AI", description: "Dive into the world of Generative AI and its applications." }
    ];

    return (
        <>
            <div className="bg-black h-screen flex overflow-hidden">
                <div className="w-[17%] text-7xl text-white flex justify-center items-center mr-4">
                    <p className="vertical-text">Events</p>
                </div>

                {events.map((event, index) => (
                    <div
                        key={index}
                        className="group w-[17%] bg-cover bg-no-repeat text-lg text-white mr-4 mt-6 relative hover:scale-110 transition-transform duration-300 bg-none"
                        style={{
                            backgroundImage: `url(${commonImage})`,
                            backgroundPosition: `${index * 25}% 0`, // Divide the image into four sections
                            backgroundSize: "400% 100%" // Ensure the full image spans across all divs
                        }}
                    >
                        {/* Event Name (Initially Hidden - No Vertical Text) */}
                        <div className="remove">
                            <p className="vertical-text absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl text-white opacity-0">
                                {event.name}
                            </p>
                        </div>

                        {/* Event Name (Horizontally Appearing on Hover) */}
                        <div className="name mt-8">{event.name}</div>
                        <h1 className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-4xl text-white">
                            {event.name}
                        </h1>

                        {/* Event Description (Appearing on Hover) */}
                        <p className="hidden group-hover:block absolute top-3/4 left-1/2 -translate-x-1/2 text-lg text-white">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="w-full bg-black py-8 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 decoration-white text-white">Other Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <a
                        href="#codeon"
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
                    >
                        CODEON
                    </a>
                    <a
                        href="#fetchathon"
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
                    >
                        FETCHATHON
                    </a>
                    <a
                        href="#tech-odyssey"
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
                    >
                        TECH ODESSEY
                    </a>
                    <a
                        href="#gen-ai"
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:bg-blue-500 transition duration-300 text-xl font-medium"
                    >
                        GEN AI
                    </a>
                </div>
            </div>
        </>
    );
};

export default Gallery;
