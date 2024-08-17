"use client";
import React, { useId, useEffect, useState } from "react";
import Particles from "@tsparticles/react"; // Make sure particles are imported correctly
import { loadSlim } from "@tsparticles/slim"; // Load the slim version
import { cn } from "@/lib/utils"; // Your utility function for class names
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const loadParticles = async () => {
      const engine = await loadSlim(); // Load particles engine
      setInit(true); // Set initialized state to true
    };

    loadParticles();
  }, []);

  const particlesLoaded = (container) => {
    if (container) {
      console.log(container);
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "#0d47a1" },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              number: {
                value: particleDensity || 120,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: particleColor || "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                },
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  enable: false,
                },
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: {
                  default: "out",
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
