import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BiSolidUpArrowCircle, BiSolidDownArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import HMS from "../assets/Image/HMS.png";
import DVBC from "../assets/Image/DVBC.png";
import port from "../assets/Image/port.png";
import ext from "../assets/Image/ext.png";


const projects = [
  {
    id: 1,
    title: "Dustless Vacuum Board Cleaner",
    image: DVBC,
    description:
      "A rechargeable dustless vacuum board cleaner that eliminates chalk dust from blackboards effectively.",
    github: "https://github.com/mathav-ramalingam",
  },
  {
    id: 2,
    title: "Hospital Management System",
    image: HMS,
    description:
      "A Python-based system to streamline hospital operations, manage patient records, and appointments efficiently.",
    github: "https://github.com/mathav-ramalingam/Hostipal_Management_System_using_Python.git",
  },
  {
    id: 3,
    title: "HerProTech - Women Safety Analytics",
    image: HMS,
    description:
      "An AI-powered surveillance system for real-time monitoring to enhance women's safety.",
    github: "https://github.com/mathav-ramalingam/Women_Safety_Analytics",
    live: "https://github.com/mathav-ramalingam/Hostipal_Management_System_using_Python.git",
  },
  {
    id: 4,
    title: "My Portfolio",
    image: port,
    description: "A personal portfolio showcasing projects and technical skills.",
    github: "https://github.com/mathav-ramalingam/My_Portfolio",
    live: "#render link",
  },
  {
    id: 5,
    title: "Expense Tracker",
    image: ext,
    description:
      "A simple expense tracking application to manage daily expenses efficiently.",
    github: "https://github.com/mathav-ramalingam/Expense_Tracker",
    live: "https://mr-expense-tracker.vercel.app/",
  },
  
];

export const Project = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id, isFlipped) => {
    setFlipped((prev) => ({ ...prev, [id]: isFlipped }));
  };

  return (
    <>
    <div id="project" className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="text-2xl md:text-4xl font-bold tracking-tight font-sans text-center mb-10 lg:pt-10">
        My <span className="text-violet-600">Projects</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <ReactCardFlip
            key={project.id}
            isFlipped={flipped[project.id] || false}
            flipDirection="horizontal"
          >
            {/* Front Side (Image) */}
            <div
              className="relative h-60 md:h-64 w-full flex justify-center items-center cursor-pointer shadow-lg rounded-lg overflow-hidden"
              onMouseEnter={() => handleFlip(project.id, true)}
            >
              <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
            </div>

            {/* Back Side (Details) */}
            <div
              className="relative flex flex-col justify-center items-center bg-gray-800 text-white h-60 md:h-64 p-4 rounded-lg cursor-pointer shadow-lg"
              onMouseLeave={() => handleFlip(project.id, false)}
            >
              <h1 className="text-lg md:text-xl font-bold mb-2 text-center">{project.title}</h1>
              <p className="text-sm text-center md:text-base">{project.description}</p>
              <div className="mt-4 flex gap-4 md:gap-6">
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex items-center gap-2 bg-gray-600 py-2 px-3 md:py-2.5 md:px-4 rounded-lg text-white hover:bg-gray-700 transition"
                >
                  <FaGithub /> GitHub
                </button>
                {project.live && (
                  <button
                    onClick={() => window.open(project.live, "_blank")}
                    className="flex items-center gap-2 bg-blue-600 py-2 px-3 md:py-2.5 md:px-4 rounded-lg text-white hover:bg-blue-700 transition"
                  >
                    <IoIosRocket /> Go Live
                  </button>
                )}
              </div>
            </div>
            
          </ReactCardFlip>
          
        ))}
      </div>
    </div>
      <div className=" flex justify-between bg-white dark:bg-[#1a1a1a] text-black dark:text-white ">
          <div className="hidden md:block  pl-6 ">
            <a href="#skills">
              <BiSolidUpArrowCircle className="size-12  cursor-pointer hover:scale-110 transition-transform " />
            </a>
          </div>

          {/* Down Arrow */}
          <div className="hidden md:block  pr-5 ">
            <a href="#contact">
              <BiSolidDownArrowCircle className="size-12 cursor-pointer hover:scale-110 transition-transform " />
            </a>
          </div>
        </div>
      </>
  );
};
