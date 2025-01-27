import React from "react";


const GallPage = () => {
    const commonImage = "https://static.vecteezy.com/system/resources/thumbnails/023/378/438/small_2x/network-technology-background-futuristic-tech-black-background-low-poly-green-wave-3d-wire-illustration-ai-generated-photo.jpg";

    // Event data with names and descriptions
    const events = [
        { name: "FETCHATHON", description: "A 12-hour hackathon for innovators and problem solvers." },
        { name: "SOLANA", description: "Explore the power of Solana blockchain in this event." },
        { name: "GEN AI", description: "Dive into the world of Generative AI and its applications." },
        { name: "TECH ODYSSEY", description: "A journey through cutting-edge technologies." }
    ];

    const photos = [
        "/events/1.jpg"  , 
        "/events/2.jpg"   , 
        "/events/3.jpg"    ,
        "/events/4.jpg"    ,
        "/events/5.jpg"    ,
        "/events/6.jpg"    ,
        "/events/7.jpg"    ,
        "/events/8.jpg" ,
    ];

    return (
        <>
            {/* Event Gallery Section */}
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
                            backgroundPosition: `${index * 25}% 0`,
                            backgroundSize: "400% 100%"
                        }}
                    >
                        <div className="remove">
                            <p className="vertical-text absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl text-white opacity-0 robotic-text">
                                {event.name}
                            </p>
                        </div>

                        <div className="name mt-8 robotic-text">{event.name}</div>
                        <h1 className="hidden  robotic-text group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-3xl text-white">
                            {event.name}
                        </h1>

                        <p className="hidden group-hover:block absolute top-3/4 left-1/2 -translate-x-1/2 text-lg text-white">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full bg-black py-8 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 decoration-white text-white"> Our Other Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <a
                        href=""
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg  hover:no-underline  transition duration-300 text-xl font-medium"
                    >
                        CODEON
                    </a>
                    <a
                        href=""
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:no-underline transition duration-300 text-xl font-medium"
                    >
                        National Space Day Quiz
                    </a>
                    <a
                        href=""
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:no-underline transition duration-300 text-xl font-medium"
                    >
                        Techphoria
                    </a>
                    <a
                        href=""
                        className="block py-4 bg-green-500 bg-opacity-90 rounded-lg hover:no-underline transition duration-300 text-xl font-medium"
                    >
                      Resume Building
                    </a>
                </div>
            </div>
            {/* Photo Gallery Section */}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6 text-center">Photo Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={src}
                                alt={`Photo ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Other Events Section */}
            
        </>
    );
};

export default GallPage;
