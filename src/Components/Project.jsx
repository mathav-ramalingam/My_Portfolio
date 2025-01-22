import React from "react";
import { BiSolidUpArrowCircle, BiSolidDownArrowCircle } from "react-icons/bi";

export const Project = () => {
  return (
    <>
      <div id="project" className=" relative">
        <div className=" p-2 py-10 text-2xl flex justify-center font-bold tracking-tight font-sans md:text-4xl md:py-10 lg:pt-20 text-white bg-[#1a1a1a] ">
          Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-800 p-5 ">
          {/* Card 1 */}
          <div className="group w-72 h-64 mx-auto perspective-[1000px] sm:w-80 sm:h-72">
            <div className="relative w-full h-full transform-style[preserve-3d] transition-transform duration-500 group-hover:rotate-y-180">
              {/* Front */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
                className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
                <p className="text-gray-600">This is the front of the card.</p>
              </div>
              {/* Back */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full bg-blue-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <h2 className="text-xl font-bold">Back Side</h2>
                <p>This is the back of the card.</p>
              </div>
            </div>
          </div>


          
          {/* Card 2 */}
          <div className="group w-72 h-64 mx-auto perspective-[1000px] sm:w-80 sm:h-72">
            <div className="relative w-full h-full transform-style[preserve-3d] transition-transform duration-500  group-hover:rotate-y-180">
              {/* Front */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
                className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center "
              >
                <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
                <p className="text-gray-600">This is the front of the card.</p>
              </div>
              {/* Back */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full bg-green-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <h2 className="text-xl font-bold">Back Side</h2>
                <p>This is the back of the card.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group w-72 h-64 mx-auto perspective-[1000px] sm:w-80 sm:h-72">
            <div className="relative w-full h-full transform-style[preserve-3d] transition-transform duration-500  group-hover:rotate-y-180">
              {/* Front */}
              <div style=
              {{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }} className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center ">
                <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
                <p className="text-gray-600">This is the front of the card.</p>
              </div>
              {/* Back */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full bg-red-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <h2 className="text-xl font-bold">Back Side</h2>
                <p>This is the back of the card.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group w-72 h-64 mx-auto perspective-[1000px] sm:w-80 sm:h-72">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
                className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center "
              >
                <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
                <p className="text-gray-600">This is the front of the card.</p>
              </div>
              {/* Back  */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full bg-red-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center "
              >
                <h2 className="text-xl font-bold">Back Side</h2>
                <p>This is the back of the card.</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group w-72 h-64 mx-auto perspective-[1000px] sm:w-80 sm:h-72">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
                className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center  "
              >
                <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
                <p className="text-gray-600">This is the front of the card.</p>
              </div>
              {/* Back */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full bg-red-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center "
              >
                <h2 className="text-xl font-bold">Back Side</h2>
                <p>This is the back of the card.</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group w-72 h-64 mx-auto perspective-[1000px] sm:w-80 sm:h-72">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
                className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
                <p className="text-gray-600">This is the front of the card.</p>
              </div>
              {/* Back */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full bg-red-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center "
              >
                <h2 className="text-xl font-bold">Back Side</h2>
                <p>This is the back of the card.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 flex justify-between">
          <div className="hidden md:block  pl-6 ">
            <a href="#skills">
              <BiSolidUpArrowCircle className="size-12 text-white cursor-pointer hover:scale-110 transition-transform " />
            </a>
          </div>

          {/* Down Arrow */}
          <div className="hidden md:block  pr-5 ">
            <a href="#skills">
              <BiSolidDownArrowCircle className="size-12 text-white cursor-pointer hover:scale-110 transition-transform " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
