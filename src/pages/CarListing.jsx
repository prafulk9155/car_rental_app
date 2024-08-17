// src/components/CarListing.jsx
import React, { useEffect, useState } from "react";
import carData from '../assets/json/carDetails.json'; // Update the path to your JSON file

const CarListing = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Simulating data fetching. In a real application, you might want to fetch this from an API.
        setCars(carData);
    }, []);

    return (
        <div className="container mx-auto p-4 carList">
            {cars.map((car, index) => (
                <div
                    key={index}
                    className={`flex items-center my-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                    {/* Left Side: Car Details */}
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold">{car.make} {car.model}</h2>
                        <p><strong>Year:</strong> {car.year}</p>
                        <p><strong>Price:</strong> {car.price}</p>
                        <p>{car.description}</p>
                        
                    </div>

                    {/* Right Side: Car Image */}
                    <div className="md:w-1/2 p-4">
                        <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-auto rounded" />
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default CarListing;
