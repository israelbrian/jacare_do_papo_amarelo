import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const RainEffect = () => {
  const particlesInit = useCallback(async (engine) => {
    // Inicia o motor de partículas
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 100, // Densidade da chuva
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
      move: {
        enable: true,
        speed: 10, // Velocidade da chuva
        direction: "bottom",
        straight: true,
      },
      opacity: {
        value: 0.5,
      },
      color: {
        value: "#ffffff", // Cor das gotas
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default RainEffect;
