import React from "react";
import './gallPage.css';

const GallPage = () => {
    const commonImage = "https://static.vecteezy.com/system/resources/thumbnails/023/378/438/small_2x/network-technology-background-futuristic-tech-black-background-low-poly-green-wave-3d-wire-illustration-ai-generated-photo.jpg";

    const events = [
      { 
          name: "SOLOANA", 
          description: "Discover the limitless potential of the Solana blockchain. Build decentralized applications that transform industries. Dive into cutting-edge blockchain technology." 
      },
      { 
          name: "FETCHATHON", 
          description: "Participate in a thrilling 12-hour hackathon for innovators. Solve challenging problems and showcase your skills. Collaborate, create, and win exciting rewards." 
      },
      { 
          name: "TECH ODESSEY", 
          description: "Experience a captivating journey through modern technology. Learn about trends shaping the tech landscape. Interact with experts and explore new ideas." 
      },
      { 
          name: "GEN AI", 
          description: "Explore the incredible applications of Generative AI. Understand how AI is transforming creativity and innovation. Gain insights into its real-world impact." 
      }
  ];
  

    const photos = [
"/events/1.jpg"  , 

        "/events/2.jpg"   , 

        "/events/3.jpg"    ,

        "/events/4.jpg"    ,

        "/events/5.jpg"    ,

        "/events/6.jpg"    ,

        "/events/7.jpg"    ,

        "/events/8.jpg"    ,
    ];

    return (
        <>
            {/* Event Gallery Section */}
            <div className="bg-black flex flex-wrap lg:flex-nowrap overflow-hidden">
                <div className="w-full lg:w-[17%] text-7xl text-white flex justify-center items-center lg:mr-4">
                    <p className="vertical-text">Events</p>
                </div>

                <div className="event-grid">
                    {events.map((event, index) => (
                      
                        <div
                            key={index}
                            
                            className="event-card h-64 sm:h-72 md:h-80 lg:h-96"
                            style={{
                                backgroundImage: `url(${commonImage})`,
                                backgroundPosition: `${index * 25}% 0`,
                                backgroundSize: "400% 100%"
                            }}
                        >
                          
                            <div className="overlay">
                                <p className="event-name">{event.name}</p>
                                <p className="event-description">{event.description}</p>
                            </div>
                        </div>
                    ))}
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
        </>
    );
};

export default GallPage;
