import React from "react";
import gif from "../assets/Image/crop.gif";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const About = () => {
  return (
    <>
      <main className="block lg:flex lg:pb-5 bg-[#1a1a1a] ">
        <div className="pt-4 lg:p-20 lg:w-3/4 lg:pt-16">
          <img
            src={gif}
            className="w-auto md:max-w-2xl md:rounded-[50px] "
            alt="About gif"
          ></img>
        </div>

        <div className="relative lg:w-1/2 pb-2">
          <div className="m-3 p-6 pt-1 text-base rounded-lg md:px-6 md:py-8 md:m-10 md:mt-40 md:-ml-6 font-bold tracking-tight font-sans text-white">
            <p className="text-xl md:text-2xl">
              I am a passionate developer with an interest in{" "}
              <span className="text-violet-500">
                Python, Computer Network and Backend Development{" "}
              </span>
              . Driven by curiosity and creativity, I enjoy solving complex
              problems and creating impactful, user-focused solutions.
            </p>
            <div className="mt-5 md:mt-7">
              <a
                download
                href=""
                className="flex items-center justify-center bg-white text-black font-medium px-4 py-3 rounded-2xl shadow-mdtransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 w-fit animate-pulse"
              >
                <IoDocumentTextOutline className="mr-2 text-lg" />
                Download CV
              </a>
            </div>
          </div>
          <button className="absolute bottom-10 md:-bottom-1 right-5">
            <BiSolidDownArrowCircle className="size-12 text-white" />
          </button>
        </div>
      </main>
    </>
  );
};
