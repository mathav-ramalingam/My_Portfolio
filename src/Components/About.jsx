import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import gif from "../assets/Image/about.gif";
import { BiSolidDownArrowCircle, BiSolidUpArrowCircle } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const About = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const imageElement = tiltRef.current;

    if (!imageElement) {
      return undefined;
    }

    VanillaTilt.init(imageElement, {
      max: 25,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    });

    return () => imageElement.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      id="about"
      className="overflow-hidden bg-white pt-5 text-black dark:bg-[#1a1a1a] dark:text-white md:pt-20"
    >
      <div className="mb-5 text-center text-2xl font-bold tracking-tight font-sans md:text-4xl lg:pt-5 lg:-mb-4">
        About <span className="text-violet-600">Me</span>
      </div>
      <main className="block lg:flex">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}  
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0 }}
          className="relative flex min-w-0 justify-center lg:w-1/2 lg:p-20 lg:pt-14"
        >
          <img
            src={gif}
            className="h-auto w-full max-w-sm rounded-[50px] object-cover sm:max-w-md md:max-w-2xl"
            alt="Animated illustration representing the About Me section"
            ref={tiltRef}
          />
          <div className="hidden lg:flex absolute bottom-7 left-5 cursor-pointer hover:scale-110 transition-transform">
            <a href="#home" aria-label="Back to home">
              <BiSolidUpArrowCircle className="text-5xl" />
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4 }}
          className="relative min-w-0 pb-2 lg:w-1/2"
        >
          <div className="rounded-lg p-6 text-base font-bold tracking-tight font-sans text-justify md:py-8 lg:mt-4 lg:pr-16">
            <p className="text-xl md:text-2xl">
              Passionate Computer Science and Engineering student with a strong
              interest in
              <span className="text-violet-500">
                {" "}
                Data Engineering, Python Development, and Backend Engineering.
              </span>{" "}
              Experienced in working with Python, SQL, Snowflake, Node.js,
              Express.js, REST APIs, MySQL, and MongoDB. Hands-on experience in
              building backend applications, developing data transformation
              workflows, and creating interactive analytics dashboards using
              Streamlit. Enthusiastic about problem-solving, exploring emerging
              technologies, and continuously improving my skills to build
              efficient and reliable software solutions.
            </p>
            <div className="mt-5 md:mt-7">
              <a
                download="Mathav_Ramalingam_Resume.pdf"
                href="/assets/Resume/Mathav_Ramalingam_Resume.pdf"
                className="flex items-center justify-center bg-[#1a1a1a] text-white dark:bg-white dark:text-black font-medium px-4 py-3 rounded-2xl shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black dark:hover:bg-gray-300 duration-300 w-fit animate-pulse"
              >
                <IoDocumentTextOutline className="mr-2 text-lg" />
                Download CV
              </a>
            </div>
          </div>
          <div className="hidden lg:flex absolute bottom-8 right-5 justify-end cursor-pointer hover:scale-110 transition-transform">
            <a href="#skills" aria-label="Continue to skills">
              <BiSolidDownArrowCircle className="text-5xl" />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
