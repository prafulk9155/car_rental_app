import React from 'react';
import data from '../../public/json/feedback.json'; // Ensure this path is correct
import './feedback.css'
const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: rating }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
};

export default function Feedback() {
  return (
    <section className="bg-gray-900 feedback">
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4 md:space-x-8">
            {data.map((item, index) => (
              <blockquote
                key={index}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 max-w-sm flex-shrink-0 rounded overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    alt={item.name || 'Customer Image'}
                    src={item.image || "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <RatingStars rating={item.rating} />
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">{item.name}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{item.feedback}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
