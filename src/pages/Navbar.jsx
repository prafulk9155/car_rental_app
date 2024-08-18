import React from 'react';
import logo from '../assets/images/logo.png';
import './Style.css';
import menuData from '../../public/json/navbarMenu.json';

export default function Navbar() {
  const handleServicesList = () => {
    const element = document.querySelector('.services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const handleOffersList = () => {
    const element = document.querySelector('.offers');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const handleAboutList = () => {
    const element = document.querySelector('.feedback');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="Logo" className="logo-img" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {menuData.map((item, index) => (
                  <li key={index}>
                  <a
  className="text-dark-1000 transition hover:text-gray-500/75"
  href={item.route === '/services' || item.route === '/offers' ? '#' : item.route}
  onClick={(e) => {
    if (item.route === '/services') {
      handleServicesList();
    } else if (item.route === '/offers') {
      handleOffersList();
    }
  else if (item.route === '/about') {
    handleAboutList();
  }
  }}
>
  {item.name}
</a>

                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/login"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="user/register"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
