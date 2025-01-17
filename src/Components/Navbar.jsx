import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50">
        {/* Desktop Navbar */}
        <div className=" hidden lg:flex bg-[#1a1a1a] p-4 items-center shadow-md">
          <div className="flex items-end w-2/5 text-white text-2xl pl-16">
            <div>
              <FaChevronLeft className="h-8 w-7 text-violet-600" />
            </div>
            <h1 className="text-3xl font-bold items-center ">
              M<span className="text-4xl font-bold text-violet-600">/</span>R
            </h1>
            <div>
              <FaChevronRight className="h-8 w-7 text-violet-600" />
            </div>
          </div>
          <div className="w-3/5 text-white text-xl pr-16 font-bold">
            <ol className="lg:flex gap-10 justify-end">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#certifications">Certifications</a>
              </li>
              <li>
                <a href="project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden bg-[#1a1a1a] text-white p-6 flex justify-between items-center">
          <div className="flex items-end">
          <div>
              <FaChevronLeft className="h-8 w-5 text-violet-600" />
            </div>
            <h1 className="text-2xl font-bold items-center ">
              M<span className="text-3xl font-bold text-violet-600">/</span>R
            </h1>
            <div>
              <FaChevronRight className="h-8 w-5 text-violet-600" />
            </div>
          </div>
          <button
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleMenu}
          >
            <div>
              {isMenuOpen ? (
                <AiOutlineClose className="size-8" />
              ) : (
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
              )}
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] text-white  text-xl px-7 pb-2 space-y-4 ">
            <a
              href="/"
              className="block rounded-md px-3 py-2 pt-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Skill
            </a>
            <a
              href="#certifications"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Certifications
            </a>
            <a
              href="#project"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Project
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
