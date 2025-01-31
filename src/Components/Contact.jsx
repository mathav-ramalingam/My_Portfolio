import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { BiSolidUpArrowCircle } from "react-icons/bi";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log("Form Data:", formData);

    // Clear form inputs
    setFormData({
      name: "",
      email: "",
      project: "",
    });

    alert("Message sent successfully!"); // Optional feedback for the user
  };

  return (
    <>
      <div id="contact" className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white  lg:pb-10">
        <div className="p-2 pb-8 py-4 text-2xl flex justify-center font-bold tracking-tight font-sans md:text-4xl lg:py-16  gap-2">
          Get in <span className=" text-violet-600">Touch</span>
        </div>
        <div className=" flex flex-col lg:flex-row gap-8 ">
          {/* Left Section */}
          <div className="flex-1">
            <div className="grid gap-7 justify-center items-center lg:m-10 lg:ml-40 p-2">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-[#262626] border-2 dark:border-gray-300  border-black">
                <MdOutgoingMail className="text-4xl text-white" />
                <div>
                  <h3 className="font-bold tracking-tight font-sans text-white">
                    Email
                  </h3>
                  <span className="font-bold tracking-tight font-sans text-white">
                    mathavramalingam1608@gmail.com
                  </span>
                  <a
                    href="mailto:mathavramalingam1608@gmail.com"
                    className="flex items-center text-violet-500 hover:animate-pulse"
                  >
                    Write me
                    <IoArrowForward className=" ml-1 text-xl pt-1" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-[#262626] border-2 dark:border-gray-300  border-black">
                <FaWhatsapp className="text-4xl text-white" />
                <div>
                  <h3 className="font-bold tracking-tight font-sans text-white">
                    Whatsapp
                  </h3>
                  <span className="font-bold tracking-tight font-sans text-white">
                    +91787*******
                  </span>
                  <a
                    href="https://web.whatsapp.com/send?phone=+917871937373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-violet-500 hover:animate-pulse"
                  >
                    Message
                    <IoArrowForward className=" ml-1 text-xl pt-1" />
              
                  </a>
                </div>
              </div>



              {/* Linkedin Card */}
              <div className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-[#262626] border-2 dark:border-gray-300  border-black">
                <CiLinkedin className="text-4xl text-white" />
                <div>
                  <h3 className="font-bold tracking-tight font-sans text-white">
                    Linkedin
                  </h3>
                  <span className="font-bold tracking-tight font-sans text-white">
                  Mathav Ramalingam
                  </span>
                  <a
                    href="https://www.linkedin.com/in/mathav-ramalingam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-violet-500 hover:animate-pulse"
                  >
                    Message
                    <IoArrowForward className=" ml-1 text-xl pt-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/*Right */}
          {/* Contact Form */}
          <form
            className="flex-1  p-6  m-2 lg:mr-20 "
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 mx-10 lg:mx-32">
              {/* Name Field */}
              <div className="grid gap-1">
                <label
                  htmlFor="name"
                  className="font-extrabold tracking-tight font-sans "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 dark:bg-[#1a1a1a] border dark:border-white border-black rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="grid gap-1">
                <label
                  htmlFor="email"
                  className="font-extrabold tracking-tight font-sans "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 dark:bg-[#1a1a1a] border dark:border-white border-black rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Project Field */}
              <div className="grid gap-1">
                <label
                  htmlFor="project"
                  className="font-extrabold tracking-tight font-sans "
                >
                  Message
                </label>
                <textarea
                  name="project"
                  id="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="p-3 dark:bg-[#1a1a1a] border dark:border-white border-black rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-400"
                  placeholder="Your message"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="button flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-medium px-4 py-3 rounded-2xl shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black dark:hover:bg-gray-300 duration-300 w-fit animate-pulse"
                type="submit"
              >
                Send Message
                <IoIosSend className="text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
