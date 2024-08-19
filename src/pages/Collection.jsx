import React, { useEffect, useState } from 'react';
import carData from '../../public/json/carDetails.json'; 
import { LampContainer } from "../components/ui/lamp.jsx"
import { motion } from "framer-motion";

export default function Collection() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulating fetching of car data. Replace this with your actual data fetching if needed.
    setCars(carData);
  }, []);

  return (
    <section>
         {/* <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer> */}
      <div className=" max-w-screen-xl   sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>
        
        </header>

        <ul className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
          {cars.map((car, index) => (
            <li key={index}>
              <a href="#" className="group relative block">
                <img
                  src={car.image}  // Assuming carData has an 'image' field
                  alt={car.title}   // Assuming carData has a 'title' field
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">{car.title}</h3> {/* Display car title */}
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Rent Now
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
