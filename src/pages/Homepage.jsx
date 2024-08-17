import React from 'react'
import car1 from '../assets/images/car1.jpg'
import CarListing from './CarListing'
import Lists from './Cars/Lists'
import DisplaySection from './DisplaySection'

export default function Homepage() {
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
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
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

<CarListing />
{/* <DisplaySection /> */}
</section>


  )
}
