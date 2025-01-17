import React from "react";

export const Project = () => {
  return (
    <div id="project" className="bg-[#1a1a1a]">
      <div className="p-2 pb-8 py-4 text-2xl flex justify-center font-bold tracking-tight font-sans md:text-4xl md:py-4 bg-[#1a1a1a] text-white">
        Projects
      </div>
      <div className="md:grid grid-cols-3 gap-6 bg-gray-800 p-4">
        {/* Card 1 */}
        <div className="group w-72 h-64 mx-auto perspective-[1000px]">
          <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            {/* Front */}
            <div
              className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center backface-hidden"
            >
              <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
              <p className="text-gray-600">This is the front of the card.</p>
            </div>
            {/* Back */}
            <div
              className="absolute w-full h-full bg-blue-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden"
            >
              <h2 className="text-xl font-bold">Back Side</h2>
              <p>This is the back of the card.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group w-72 h-64 mx-auto perspective-[1000px]">
          <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            {/* Front */}
            <div
              className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center backface-hidden"
            >
              <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
              <p className="text-gray-600">This is the front of the card.</p>
            </div>
            {/* Back */}
            <div
              className="absolute w-full h-full bg-green-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden"
            >
              <h2 className="text-xl font-bold">Back Side</h2>
              <p>This is the back of the card.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group w-72 h-64 mx-auto perspective-[1000px]">
          <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            {/* Front */}
            <div
              className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center backface-hidden"
            >
              <h2 className="text-xl font-bold text-gray-800">Front Side</h2>
              <p className="text-gray-600">This is the front of the card.</p>
            </div>
            {/* Back */}
            <div
              className="absolute w-full h-full bg-red-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden"
            >
              <h2 className="text-xl font-bold">Back Side</h2>
              <p>This is the back of the card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
