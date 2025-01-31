import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div class="p-4 text-center bg-white dark:bg-[#1a1a1a] text-black dark:text-white  show shadow-[0_-4px_10px_rgba(0,0,0,0.5)] ">
        <div class="flex flex-col items-center">
          <div class="text-xl font-bold tracking-tight font-sans mb-2 ">Mathav Ramalingam</div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/mathav-ramalingam/"
              target="_blank"
              class=" hover:text-blue-500"
            >
             <FaLinkedin className="h-7 w-5"/>
            </a>
            <a
              href="https://github.com/mathav-ramalingam"
              target="_blank"
              class=" hover:text-violet-500"
            >
             <FaGithubSquare className="h-7 w-6"/>
            </a>
            <a
              href="mailto:mathavramalingam1608@gmail.com"
              class=" hover:text-red-500"
            >
              <IoMdMailUnread className="h-7 w-7" />

            </a>
          </div>
        </div>

        <nav class="flex justify-center mt-4 space-x-6">
          <a href="#home" class=" hover:text-violet-600 font-bold tracking-tight font-sans">
            Home
          </a>
          <a href="#about" class=" hover:text-violet-600 font-bold tracking-tight font-sans">
            About
          </a>
          <a
            href="#skills"
            class=" hover:text-violet-600 font-bold tracking-tight font-sans"
          >
            Skills
          </a>
          <a href="#project" class=" hover:text-violet-600 font-bold tracking-tight font-sans">
            Projects
          </a>
          <a
            href="#contact"
            class=" hover:text-violet-600 font-bold tracking-tight font-sans"
          >
           Contact
          </a>
        </nav>

        <p class="mt-4 text-sm  font-bold tracking-tight font-sans">
          © 2025 Mathav Ramalingam. All rights reserved.
        </p>
      </div>
    </>
  );
};
