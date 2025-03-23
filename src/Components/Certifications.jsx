import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import guvi from "../assets/Image/guvi.png"
import auro from "../assets/Image/auro2.png"
import mdb from '../assets/Image/db.png'
import is from '../assets/Image/infosys.png'

const certifications = [
  {
    company: "GUVI",
    role: "Python Zero to Hero",
    type: "Certification",
    logo: guvi,
    
  },
  {
    company: "MongoDB",
    role: "MongoDB Associate Developer in Python",
    type: "Certification",
    logo: mdb,
  },
  {
    company: "Infosys Springboard",
    role: "Introduction to Python",
    type: "Certification",
    logo: is,
  },
  {
    company: "Auro Tech Solution",
    role: "Python Developer",
    type: "Internship",
    logo: auro,
  },
  

];

export const Certifications = () => {
  return (
    <div id="certification" className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white py-20">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center mb-20">
        Certifications & <span className="text-violet-600">Internships</span>
      </h2>

      {/* Carousel for Small Screens (1 item per slide) */}
      <div className="md:hidden">
        <Carousel showThumbs={false} showIndicators={true} showArrows={false} autoPlay infiniteLoop showStatus={false} >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#262626] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center mx-10"
            >
              <img src={cert.logo} alt={cert.company} className="w-16 h-16 rounded-xl object-contain  bg-[#262626]" />
              <p className="text-lg font-semibold">{cert.role}</p>
              <p className="text-gray-400">-- {cert.company} ({cert.type})</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Carousel for Medium & Large Screens (2 items per slide) */}
      <div className="hidden md:block lg:block px-6 lg:px-20">
        <Carousel
          showThumbs={false}
          showIndicators={true}
          showArrows={false}
          autoPlay
          infiniteLoop
          emulateTouch
          showStatus={false}
        >
          {certifications.reduce((acc, _, i, arr) => {
            if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
            return acc;
          }, []).map((pair, index) => (
            <div key={index} className="flex justify-center gap-24">
              {pair.map((cert, i) => (
                <div
                  key={i}
                  className="bg-[#262626] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center w-1/2"
                >
                  <img src={cert.logo} alt={cert.company} className="w-16 h-16 rounded-xl object-contain  bg-[#262626]" />
                  <p className="text-lg font-semibold">{cert.role}</p>
                  <p className="text-gray-400">-- {cert.company} ({cert.type})</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Certifications;
