import React from 'react'
import logo from '../assets/images/logo.png'
import './Style.css';

export default function Navbar() {
  const handleServicesList = ()=>{
    
    const element =document.querySelector('.services');
    console.log(element,"element")
    window.scrollTo({
        top:element.getBoundingClientRect().top,
        left:0,
        behavior:'smooth'

    })
}

  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
             <img src={logo}  className='logo-img'/>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
          <li>
              <a className="text-dark-1000 transition hover:text-gray-500/75 " href="/" > Home </a>
            </li>
            <li>
              <a className="text-dark-1000 transition hover:text-gray-500/75 " href="#" onClick={handleServicesList} > Services </a>
            </li>

            <li>
              <a className="text-dark-500 transition hover:text-gray-500/75" href="#"> Accessories </a>
            </li>

            <li>
              <a className="text-dark-500 transition hover:text-gray-500/75" href="car/store"> Store </a>
            </li>

           

            <li>
              <a className="text-dark-500 transition hover:text-gray-500/75" href="#"> Carrer </a>
            </li>

            <li>
              <a className="text-dark-500 transition hover:text-gray-500/75" href="#"> About Us </a>
            </li>
            <li>
              <a className="text-dark-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
