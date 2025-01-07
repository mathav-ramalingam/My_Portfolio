import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import py from "../assets/Image/python.png";

export const Skills = () => {
  return (
    <>
      <div className="-mt-6 md:mt-0 md:grid  grid-cols-2  bg-[#1a1a1a]  ">



        <div className="mb-10  md:mb-0 md:px-14  ">
          <div className="mx-8 my-6 bg-white md:m-10 border-black border-2 rounded-3xl md:py-1">
              <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl">Frontend</div>
              <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-3 gap-2 content-center md:p-6">
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <IoDocumentTextOutline className="text-base mr-2 md:text-lg" />
                  HTML
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img src={py} className="text-base mr-2 md:text-lg size-5" />
                  CSS
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  JavaScript
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  React JS
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg   ">
                  Tailwind CSS
                  </div>
              </div>

          </div>
        </div>



        <div className="mb-10 md:mb-0 md:px-14">
          <div className="mx-8 my-6 bg-white md:m-10 border-black border-2 rounded-3xl md:py-1">
              <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl">Backend</div>
              <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-3 gap-2 content-center md:p-6">
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <IoDocumentTextOutline className="text-base mr-2 md:text-lg" />
                  Django
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  MongoDB
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  MySQL
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  Node JS
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg   ">
                  Express JS
                  </div>
              </div>
              
          </div>
        </div>




        <div className=" mb-10  md:mb-8 md:px-14">
        <div className="mx-8 my-6 bg-white md:m-10 border-black border-2 rounded-3xl md:py-1">
              <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl">Others</div>
              <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-2 gap-2 content-center md:p-6">
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <img src={py} className="text-base mr-2 md:text-lg size-5" />
                  Python
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  C
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  Git
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  GitHub
                  </div>
                  
              </div>
              
          </div>
        </div>





        <div className=" mb-8 md:px-14">
        <div className="mx-8 my-6 bg-white md:m-10 border-black border-2 rounded-3xl md:py-1">
              <div className="text-2xl flex justify-center font-bold tracking-tight font-sans md:text-3xl">Tools I Use</div>
              <div className="p-4 grid grid-cols-2 md:grid md:grid-cols-2 gap-2 content-center md:p-6">
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  <IoDocumentTextOutline className="text-base mr-2 md:text-lg" />
                  VS Code
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  PyCharm
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  Postman
                  </div>
                  <div className="text-sm py-2 flex items-center justify-center bg-black text-white font-medium md:px-4 md:py-3 rounded-2xl md:w-auto md:text-lg ">
                  Canva
                  </div>
              </div>
              
        </div>

            <div className=" flex justify-end ">
            <button><BiSolidDownArrowCircle className="size-12 text-white" /></button>
            </div>
      </div>


      </div>
    </>
  );
};
