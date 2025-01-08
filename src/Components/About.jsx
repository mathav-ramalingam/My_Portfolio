import React from "react";
import gif from "../assets/Image/about.gif";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidUpArrowCircle } from "react-icons/bi";


export const About = () => {
  return (
    <>
    <div id="about" className="pt-5 md:pt-20 bg-[#1a1a1a]" >
    <div className="p-2 pb-8 py-4 text-2xl flex justify-center font-bold tracking-tight font-sans md:text-4xl md:py-1 bg-[#1a1a1a] text-white gap-2" >About<span className=" text-violet-600" > Me</span></div>
      <main className="block lg:flex lg:pb-0   ">
        <div className=" lg:p-20 lg:w-3/4 lg:pt-14  ">
          <img
            src={gif}
            className="w-auto md:max-w-2xl md:rounded-[50px] animate-zoomIn"
            alt="About gif"
          ></img>

          <div className="hidden md:flex justify-start">
          <a href="/"><BiSolidUpArrowCircle className="size-12 text-white md:mt-1 md:-ml-10" /></a>
          </div>
        </div>

        <div className="relative lg:w-1/2 pb-2 ">
          <div className="m-3 p-6 pt-1 text-base rounded-lg md:px-6 md:py-8 md:m-10 md:mt-40 md:-ml-6 font-bold tracking-tight font-sans text-white animate-slidedown">
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
          {/* <a href="#skills" className="absolute bottom-10 md:bottom-10 right-5">
            <BiSolidDownArrowCircle className="size-12 text-white" />
          </a> */}
          <div className="hidden md:flex justify-end">
          <a href="#skills"><BiSolidDownArrowCircle className="size-12 text-white md:mt-3 md:mr-4" /></a>
          </div>
        </div>
      </main>
      </div>
    </>
  );
};
