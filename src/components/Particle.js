import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (engine) => {
    console.log("Particles Engine Loaded:", engine);
    await loadFull(engine); // Loads all tsparticles features
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#000000", // Set the background color (optional)
      },
    },
    particles: {
      number: {
        value: 50, // Number of particles
        density: {
          enable: true,
          area: 800, // Density area
        },
      },
      color: {
        value: "#ffffff", // Particle color
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 5,
        random: true, // Randomize particle sizes
      },
      move: {
        enable: true,
        speed: 2, // Speed of particles
        direction: "none", // Movement direction
        random: false,
        straight: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Effect when hovered
        },
        onClick: {
          enable: true,
          mode: "push", // Effect when clicked
        },
      },
      modes: {
        repulse: {
          distance: 100, // Distance for repulsion
          duration: 0.4,
        },
        push: {
          quantity: 4, // Number of particles to add
        },
      },
    },
    fullScreen: {
      enable: true, // Makes it fullscreen
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default Particle;
