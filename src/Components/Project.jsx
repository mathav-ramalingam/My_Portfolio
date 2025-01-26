import React from "react";
import { BiSolidUpArrowCircle, BiSolidDownArrowCircle } from "react-icons/bi";
import HMS from "../assets/Image/HMS.png";
import DVBC from "../assets/Image/DVBC.jpeg";
import port from "../assets/Image/port.png";
import ext from "../assets/Image/ext.png";
import { FaGithub } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

export const Project = () => {
  return (
    <>
      <div id="project" className=" relative">
        <div className=" p-2 py-10 text-2xl flex justify-center font-bold tracking-tight font-sans md:text-4xl md:py-10 lg:pt-20 text-white bg-[#1a1a1a] gap-2 ">
          My<span className=" text-violet-600">Projects</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  bg-[#1a1a1a]  p-8 ">
          {/* Card 1 */}
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-700 transition-shadow rounded-2xl">
            {/* Image */}
            <div className="h-[50vh] ">
              <img
                className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"
                src={DVBC}
                alt="Project Image"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:from-black/70 group-hover:via-black group-hover:to-black transition-all duration-500"></div>

            {/* Text Content */}
            <div className=" absolute inset-0 flex flex-col items-center text-center group-hover:justify-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 rounded-2xl ">
              <h1 className="text-2xl font-bold tracking-tight text-white font-sans pt-14 md:pt-12">
              Dustless Vacuum Board Cleaner
              </h1>
              <p className="text-base italic text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              I worked on developing a Rechargeable Dustless Vacuum Board Cleaner that eliminates chalk dust from blackboards effectively without releasing dust into the air.
              This project aimed to address health concerns related to chalk dust exposure in classrooms, while also providing an efficient and user-friendly cleaning tool.
              </p>
              <div className=" w-full flex justify-around  lg:pt-3 pt-0">
              <button
                   onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/mathav-ramalingam/',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-700 transition-shadow rounded-2xl">
            {/* Image */}
            <div className="h-[50vh] ">
              <img
                className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"
                src={HMS}
                alt="Project Image"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:from-black/70 group-hover:via-black group-hover:to-black transition-all duration-500"></div>

            {/* Text Content */}
            <div className=" absolute inset-0 flex flex-col items-center text-center group-hover:justify-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 rounded-2xl ">
              <h1 className="text-2xl font-bold tracking-tight text-white font-sans pt-12 ">
                Hospital Management System using Python
              </h1>
              <p className="text-base italic text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                A Python-based system to streamline hospital operations, manage
                patient records, doctor details, appointments, and billing
                efficiently. It features an intuitive interface and secure data
                management, showcasing expertise in Python and database
                integration.
              </p>
              <div className=" w-full flex justify-around  lg:pt-3 pt-0 ">
              <button
                   onClick={() =>
                    window.open(
                      'https://github.com/mathav-ramalingam/Hostipal_Management_System_using_Python.git',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>
              </div>
            </div>
          </div>


          {/* Card 3 */}
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-700 transition-shadow rounded-2xl">
            {/* Image */}
            <div className="h-[50vh] ">
              <img
                className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"
                src={HMS}
                alt="Project Image"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:from-black/70 group-hover:via-black group-hover:to-black transition-all duration-500"></div>

            {/* Text Content */}
            <div className=" absolute inset-0 flex flex-col items-center text-center group-hover:justify-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 rounded-2xl ">
              <h1 className="text-2xl font-bold tracking-tight text-white font-sans pt-12 ">
               HerProTech - Women Safety Analytics
              </h1>
              <p className="text-base italic text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-0">
              Our project enhances women's safety using AI-powered surveillance and real-time monitoring. 
              It analyzes live CCTV footage to detect unsafe situations, trigger SOS alerts, and upload crime data to the cloud for hotspot identification.
              A companion mobile app enables users to discreetly send emergency alerts via voice recognition for swift assistance
              </p>
              <div className=" w-full flex justify-around lg:pt-3 pt-0">
              <button
                   onClick={() =>
                    window.open(
                      'https://github.com/mathav-ramalingam/Women_Safety_Analytics',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>

                <button
                   onClick={() =>
                    window.open(
                      'https://github.com/mathav-ramalingam/Hostipal_Management_System_using_Python.git',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <IoIosRocket className="text-xl" />
                  Go Live
                </button>
              </div>
            </div>
          </div>



           {/* Card 4 */}
           <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-700 transition-shadow rounded-2xl">
            {/* Image */}
            <div className="h-[50vh] ">
              <img
                className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"
                src={port}
                alt="Project Image"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:from-black/70 group-hover:via-black group-hover:to-black transition-all duration-500"></div>

            {/* Text Content */}
            <div className=" absolute inset-0 flex flex-col items-center text-center group-hover:justify-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 rounded-2xl ">
              <h1 className="text-3xl font-bold tracking-tight text-white font-sans pt-12 ">
               My Portfolio
              </h1>
              <p className="text-base italic text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio alias architecto, explicabo molestiae laudantium repudiandae magnam. 
              Officia quam reprehenderit debitis pariatur in eligendi? Consequuntur soluta consequatur ab placeat culpa commodi.
              </p>
              <div className=" w-full flex justify-around lg:pt-3 pt-0">
              <button
                   onClick={() =>
                    window.open(
                      'https://github.com/mathav-ramalingam/My_Portfolio',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>

                <button
                   onClick={() =>
                    window.open(
                      '#render link',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <IoIosRocket className="text-xl" />
                  Go Live
                </button>
              </div>
            </div>
          </div>



          {/* Card 5 */}
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-700 transition-shadow rounded-2xl">
            {/* Image */}
            <div className="h-[50vh] ">
              <img
                className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"
                src={ext}
                alt="Project Image"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:from-black/70 group-hover:via-black group-hover:to-black transition-all duration-500"></div>

            {/* Text Content */}
            <div className=" absolute inset-0 flex flex-col items-center text-center group-hover:justify-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 rounded-2xl ">
              <h1 className="text-3xl font-bold tracking-tight text-white font-sans pt-12 ">
               Expense Tracker 
              </h1>
              <p className="text-base italic text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio alias architecto, explicabo molestiae laudantium repudiandae magnam. 
              Officia quam reprehenderit debitis pariatur in eligendi? Consequuntur soluta consequatur ab placeat culpa commodi.
              </p>
              <div className=" w-full flex justify-around lg:pt-3 pt-0">
              <button
                   onClick={() =>
                    window.open(
                      'https://github.com/mathav-ramalingam/Expense_Tracker',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>

                <button
                   onClick={() =>
                    window.open(
                      'https://mr-expense-tracker.vercel.app/',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <IoIosRocket className="text-xl" />
                  Go Live
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-700 transition-shadow rounded-2xl">
            {/* Image */}
            <div className="h-[50vh] ">
              <img
                className="h-full w-full object-cover group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"
                src={ext}
                alt="Project Image"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black group-hover:from-black/70 group-hover:via-black group-hover:to-black transition-all duration-500"></div>

            {/* Text Content */}
            <div className=" absolute inset-0 flex flex-col items-center text-center group-hover:justify-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 rounded-2xl ">
              <h1 className="text-3xl font-bold tracking-tight text-white font-sans pt-12 ">
               empty
              </h1>
              <p className="text-base italic text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio alias architecto, explicabo molestiae laudantium repudiandae magnam. 
              Officia quam reprehenderit debitis pariatur in eligendi? Consequuntur soluta consequatur ab placeat culpa commodi.
              </p>
              <div className=" w-full flex justify-around lg:pt-3 pt-0">
              <button
                   onClick={() =>
                    window.open(
                      '#',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>

                <button
                   onClick={() =>
                    window.open(
                      '#',
                      '_blank'
                    )
                  }
                  className="flex gap-2 rounded-lg bg-gray-500 py-2 px-5 text-sm  font-bold tracking-tight text-white font-sans  shadow shadow-black/60 transition-shadow duration-300 "
                >
                  <IoIosRocket className="text-xl" />
                  Go Live
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-[#1a1a1a]   flex justify-between">
          <div className="hidden md:block  pl-6 ">
            <a href="#skills">
              <BiSolidUpArrowCircle className="size-12 text-white cursor-pointer hover:scale-110 transition-transform " />
            </a>
          </div>

          {/* Down Arrow */}
          <div className="hidden md:block  pr-5 ">
            <a href="#contact">
              <BiSolidDownArrowCircle className="size-12 text-white cursor-pointer hover:scale-110 transition-transform " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
