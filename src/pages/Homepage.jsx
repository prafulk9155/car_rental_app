import React from 'react'
import car1 from '../assets/images/car1.jpg'
import CarListing from './CarListing'
import Lists from './Cars/Lists'
import DisplaySection from './DisplaySection'
import { ServicesComponent } from './Services'
import { OffersComponent } from './Offers'
import Feedback from './Feedback'
import { FlipWords } from "../components/ui/flip-words.jsx";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight.jsx";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect.jsx";
import { useScroll, useTransform } from "framer-motion";
import { apiGet, apiPost } from '../services/api.service.js';
import { useEffect } from 'react'
 


export default function Homepage() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const loadCars = async () => {
        try {
            const carData = await apiGet('/'); 
            setCars(carData);
        } catch (err) {
            setError(err);
        }
    };

    // loadCars();
}, []);


  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  
  const words = ["Luxury", "Adventure", "Freedom", "Comfort"];
const handlelearnMore = ()=>{
    
    const element =document.querySelector('.carList');
    console.log(element,"element")
    window.scrollTo({
        top:element.getBoundingClientRect().top,
        left:0,
        behavior:'smooth'

    })
}



  return (
   
    <section className="bg-gray-900 text-white">
      {/* <GoogleGeminiEffect
    pathLengths={[
      pathLengthFirst,
      pathLengthSecond,
      pathLengthThird,
      pathLengthFourth,
      pathLengthFifth,
    ]}
  /> */}
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ">
  <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >

Enhance User Experience.
        <span className="sm:block">Boost Engagement. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea! */}


Experience the road like never before - 
        <FlipWords words={words} /> 
        awaits
  
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#" onClick={handlelearnMore}
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Our Cars List
        </h1>
        <p></p>
        </div>

<CarListing />  

<div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Services
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
      </div>
<ServicesComponent />


<div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Accessories
        </h1>
        <p></p>
        </div>

        <div className='container mx-auto p-4 carList'>
  <div className="flex items-center my-4 flex-row">
    {/* Left Side: Car Details */}
    <div className="w-2/3 p-4">
      <OffersComponent /> 
    </div>  
        <div className="w-1/3 p-4" style={{
          transform: "rotateX(20deg) translateZ(70px)",
        }}>
        <h2 className="text-2xl font-bold">Enhance Your Ride</h2>
        <p><strong>Special Offers on Accessories! </strong></p>
        <p><strong>GPS Navigation System:</strong> Find your way with ease – only $5/day.</p>
        <p>Upgrade your rental experience with our exclusive accessories. Whether you're traveling with family, need navigation, or want to stay connected, we've got you covered.</p>
        <a href="/accessories" className="inline-block bg-teal-600 text-white px-5 py-3 mt-5 rounded-md font-medium shadow-md hover:bg-teal-500 transition">
    Explore Accessories
  </a>
        </div>

    {/* Right Side: Offers Component */}
    
  </div>
</div>



<DisplaySection />

<div className="max-w-2xl mx-auto p-4 feedback">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Feedback
        </h1>
        <p></p>
        
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
      </div>

      <Feedback />  
</section>






  )
}
