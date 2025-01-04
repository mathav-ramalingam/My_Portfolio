import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        {/* Desktop Navbar */}
        <div className="hidden lg:flex bg-black p-7">
          <div className="w-2/5 text-white text-2xl pl-16">
            <h1>Mathav Ramalingam</h1>
          </div>
          <div className="w-3/5 text-white text-xl pr-16">
            <ol className="lg:flex gap-10 justify-end">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ol>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden bg-black text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl">Mathav Ramalingam</h1>
          <button
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleMenu} 
          >
            <div className={isMenuOpen ? "rotate-90":"rotate-0"}>
            <svg
              class="block size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            </div>

          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-black text-white  text-xl px-7 pb-2 space-y-4 ">
                <a hef="/" className="block rounded-md px-3 py-2 pt-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                <a hef="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                <a hef="/services" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
                <a hef="/portfolio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Portfolio</a>
                <a hef="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
};
