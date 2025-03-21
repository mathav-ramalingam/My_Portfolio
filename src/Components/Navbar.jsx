import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronRight, FaChevronLeft, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex bg-white dark:bg-[#1a1a1a] text-black dark:text-white  p-4 items-center shadow-md">
          <div className="flex items-end w-2/5  text-2xl pl-16">
            <FaChevronLeft className="h-8 w-7 text-violet-600" />
            <h1 className="text-3xl font-bold">
              M<span className="text-4xl font-bold text-violet-600">/</span>R
            </h1>
            <FaChevronRight className="h-8 w-7 text-violet-600" />
          </div>
          <div className="w-3/5  text-xl pr-16 font-bold">
            <ol className="lg:flex gap-10 justify-end">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#certification">Certification</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="pl-12 rounded-full focus:outline-none transition"
                >
                  {theme === "dark" ? (
                    <FaSun className="text-yellow-500" size={26} />
                  ) : (
                    <FaMoon className="text-gray-800" size={26} />
                  )}
                </button>
              </li>
            </ol>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden bg-white dark:bg-[#1a1a1a] text-black dark:text-white  p-6 flex justify-between items-center">
          <div className="flex items-end">
            <FaChevronLeft className="h-8 w-5 text-violet-600" />
            <h1 className="text-2xl font-bold">
              M<span className="text-3xl font-bold text-violet-600">/</span>R
            </h1>
            <FaChevronRight className="h-8 w-5 text-violet-600" />
          </div>
          <div >
          <button
                  onClick={toggleTheme}
                  className="rounded-full focus:outline-none transition w-14 "
                >
                  {theme === "dark" ? (
                    <FaSun className="text-yellow-500 h-7 w-8"  />
                  ) : (
                    <FaMoon className="text-gray-800 h-7 w-8"  />
                  )}
                </button>
          <button
            className="rounded-md focus:outline-none transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-8 w-8" />
            ) : (
              <svg
                className="block h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#1a1a1a] text-black dark:text-white   text-xl px-7 pb-2 space-y-4">
            <a href="#home" className="block px-3 py-2 hover:bg-gray-700" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="block px-3 py-2 hover:bg-gray-700" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="block px-3 py-2 hover:bg-gray-700" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#project" className="block px-3 py-2 hover:bg-gray-700" onClick={toggleMenu}>
              Project
            </a>
            <a href="#certification" className="block px-3 py-2 hover:bg-gray-700" onClick={toggleMenu}>
              Certification
            </a>
            <a href="#contact" className="block px-3 py-2 hover:bg-gray-700" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
