import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import py from "../assets/Image/python.png";
import c from "../assets/Image/c.png";
import css from "../assets/Image/css.png";
import github from "../assets/Image/gh.png";
import gitl from "../assets/Image/gitl.png";
import html from "../assets/Image/html.png";
import js from "../assets/Image/js.png";
import njs from "../assets/Image/nodejs.png";
import react from "../assets/Image/react.png";
import vs from "../assets/Image/vs.png";
import dj from "../assets/Image/dj.png";
import mdb from "../assets/Image/mongodb.png";
import t from "../assets/Image/tailwind-css.png";
import e from "../assets/Image/express.png";
import p from "../assets/Image/postman.png";
import mysql from "../assets/Image/mysql.png";
import canva from "../assets/Image/canva.png";
import pyc from "../assets/Image/pycharm.png";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        id="skills"
        className="pt-4 md:pt-16 bg-white dark:bg-[#1a1a1a] text-black dark:text-white  "
      >
        <div className="p-2 pb-8  py-4 text-2xl flex justify-center font-bold tracking-tight font-sans md:text-4xl md:py-1  gap-2">
          Professional<span className=" text-violet-600"> Skillset</span>
        </div>
        <div className="md:grid grid-cols-2 gap-10 px-4 md:px-16  ">
          <motion.div
            className="mb-10  md:mb-0  "
            initial={{ opacity: 0, x: -200 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 3 }}
          >
            <div className=" rounded-3xl md:py-1 md:mt-8 border-cyan-300 border-2 shadow-custom ">
              <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl  md:pt-2 pt-2">
                Frontend
              </div>
              <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-3 gap-2 content-center md:p-6">
                <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img
                    src={html}
                    className="text-base mr-2 md:text-lg size-5"
                  />
                  HTML
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img src={css} className="text-base mr-2 md:text-lg size-5" />
                  CSS
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img src={js} className="text-base mr-2 md:text-lg size-5" />
                  JavaScript
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img
                    src={react}
                    className="text-base mr-2 md:text-lg size-5 animate-spin-slow"
                  />
                  React JS
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg   ">
                  <img src={t} className="text-base mr-2 md:text-lg size-5" />
                  Tailwind CSS
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-10 md:mb-0 "
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 3 }}
          >
            <div className=" rounded-3xl md:py-1 md:mt-8 border-cyan-300 border-2 shadow-custom">
              <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl md:pt-2 pt-2 ">
                Backend
              </div>
              <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-3 gap-2 content-center md:p-6">
                <div className="text-sm py-2 flex items-center justify-center bg-transparent   font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img
                    src={dj}
                    className="text-base mr-2 md:text-lg size-5 animate-bounce"
                  />
                  Django
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img src={mdb} className="text-base mr-2 md:text-lg size-5" />
                  MongoDB
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img
                    src={mysql}
                    className="text-base mr-2 md:text-lg size-5"
                  />
                  MySQL
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img src={njs} className="text-base mr-2 md:text-lg size-6" />
                  Node JS
                </div>
                <div className="text-sm py-2 flex items-center justify-center bg-transparent  font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg   ">
                  <img src={e} className="text-base mr-2 md:text-lg size-7 " />
                  Express JS
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative mb-10 md:mb-0"
            initial={{ opacity: 0, y: -200 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2 }}
          >
            {/* Wrap the content inside another div so animation applies only to content */}
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.1 }}
            >
              <div className="mx-8 my-6 md:py-1 md:mt-8 border-cyan-200 border-2 shadow-custom rounded-3xl">
                <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl md:pt-2 pt-2">
                  Others
                </div>
                <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-2 gap-2 content-center md:p-6">
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img
                      src={py}
                      className="text-base mr-2 md:text-lg size-5 animate-flipp"
                    />
                    Python
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img src={c} className="text-base mr-2 md:text-lg size-5" />
                    C
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img
                      src={gitl}
                      className="text-base mr-2 md:text-lg size-5"
                    />
                    Git
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img
                      src={github}
                      className="text-base mr-2 md:text-lg size-5"
                    />
                    GitHub
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Keep arrow outside of animated section */}
            <div className="hidden md:block absolute bottom-4 -left-11 cursor-pointer hover:scale-110 transition-transform">
              <a href="#about">
                <BiSolidUpArrowCircle className="size-12" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -200 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Animated Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }}
            >
              <div className="mx-8 md:py-1 md:mt-8 border-cyan-200 border-2 shadow-custom rounded-3xl animate-slideup">
                <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl md:pt-2 pt-2">
                  Tools I Use
                </div>
                <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-2 gap-2 content-center md:p-6">
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img
                      src={vs}
                      className="text-base mr-2 md:text-lg size-5 animate-pulse"
                    />
                    VS Code
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img
                      src={pyc}
                      className="text-base mr-2 md:text-lg size-5"
                    />
                    PyCharm
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img src={p} className="text-base mr-2 md:text-lg size-5" />
                    Postman
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-transparent font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg">
                    <img
                      src={canva}
                      className="text-base mr-2 md:text-lg size-5"
                    />
                    Canva
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow remains outside of the animated content */}
            <div className="hidden md:block absolute bottom-4 -right-11 cursor-pointer hover:scale-110 transition-transform">
              <a href="#project">
                <BiSolidDownArrowCircle className="size-12" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
