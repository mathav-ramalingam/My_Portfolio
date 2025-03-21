import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const certifications = [
  {
    company: "Raat.ai",
    role: "FrontEnd Dev in the MERN and MEAN Stack",
    type: "Freelance",
    logo: "https://your-image-link.com/raatai.png",
  },
  {
    company: "CentillionLabs",
    role: "Full Stack Developer with AWS experience in EC2, S3, and Elastic Beanstalk.",
    type: "Internship",
    logo: "https://your-image-link.com/centillionlabs.png",
  },
  {
    company: "SomeCompany",
    role: "Backend Developer with expertise in Node.js & MongoDB.",
    type: "Internship",
    logo: "https://your-image-link.com/somecompany.png",
  },
  {
    company: "TechCorp",
    role: "Cloud Engineer specialized in AWS Lambda & DynamoDB.",
    type: "Internship",
    logo: "https://your-image-link.com/techcorp.png",
  },
  

];

export const Certifications = () => {
  return (
    <div id="certification" className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white py-10">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center mb-10">
        Certifications & <span className="text-violet-600">Internships</span>
      </h2>

      {/* Carousel for Small Screens (1 item per slide) */}
      <div className="md:hidden">
        <Carousel showThumbs={false} showIndicators={true} showArrows={false} autoPlay infiniteLoop>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-red-900 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center m-5"
            >
              <img src={cert.logo} alt={cert.company} className="w-16 h-16 rounded-full mb-4" />
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
        >
          {certifications.reduce((acc, _, i, arr) => {
            if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
            return acc;
          }, []).map((pair, index) => (
            <div key={index} className="flex justify-center gap-6">
              {pair.map((cert, i) => (
                <div
                  key={i}
                  className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center w-1/2"
                >
                  <img src={cert.logo} alt={cert.company} className="w-16 h-16 rounded-full mb-4" />
                  <p className="text-lg font-semibold">{cert.role}</p>
                  <p className="text-gray-400">-- {cert.company} </p>
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
