import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import gif from "../assets/Image/about.gif";
import { BiSolidDownArrowCircle, BiSolidUpArrowCircle } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const About = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltRef.current?.vanillaTilt.destroy();
  }, []);

  return (
    <div
      id="about"
      className="pt-5 md:pt-20 bg-white dark:bg-[#1a1a1a] text-black dark:text-white"
    >
      <div className="text-2xl md:text-4xl font-bold tracking-tight font-sans text-center mb-5 lg:pt-5 lg:-mb-4">
        About <span className="text-violet-600">Me</span>
      </div>
      <main className="block lg:flex lg:pb-0  ">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}  
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="relative lg:p-20 lg:w-3/4 lg:pt-14 flex justify-center "
        >
          <img
            src={gif}
            className="w-full max-w-sm sm:max-w-md md:max-w-2xl rounded-[50px]"
            alt="About gif"
            ref={tiltRef}
          />
          <div className="hidden lg:flex absolute bottom-7 left-5 cursor-pointer hover:scale-110 transition-transform">
            <a href="#home">
              <BiSolidUpArrowCircle className="text-5xl" />
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative lg:w-1/2 pb-2"
        >
          <div className="p-6 text-base rounded-lg lg:pr-16 md:py-8 lg:mt-24 font-bold tracking-tight font-sans text-justify ">
            <p className="text-xl md:text-2xl">
              Passionate Computer Science and Engineering enthusiast
              specializing in
              <span className="text-violet-500">
                {" "}
                Python, DBMS, Computer Network, and Backend Technologies
              </span>
              . Skilled in building scalable solutions, solving complex
              problems, and optimizing performance. Committed to continuous
              learning, innovation, and delivering high-quality software
              solutions.
            </p>
            <div className="mt-5 md:mt-7">
              <a
                download
                href="/assets/Mathav_Ramalingam_Resume.pdf"
                className="flex items-center justify-center bg-[#1a1a1a] text-white dark:bg-white dark:text-black font-medium px-4 py-3 rounded-2xl shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black dark:hover:bg-gray-300 duration-300 w-fit animate-pulse"
              >
                <IoDocumentTextOutline className="mr-2 text-lg" />
                Download CV
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-end absolute bottom-8 right-5 cursor-pointer hover:scale-110 transition-transform">
            <a href="#skills">
              <BiSolidDownArrowCircle className="text-5xl" />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
