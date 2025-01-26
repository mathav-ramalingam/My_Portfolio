import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div class="p-4 text-center bg-[#1a1a1a] ">
        <div class="flex flex-col items-center">
          <div class="text-xl font-bold tracking-tight font-sans mb-2 text-white">Mathav Ramalingam</div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/mathav-ramalingam/"
              target="_blank"
              class="text-white hover:text-violet-500"
            >
             <FaLinkedin className="h-7 w-5"/>
            </a>
            <a
              href="https://www.linkedin.com/in/mathav-ramalingam/"
              target="_blank"
              class="text-white hover:text-violet-500"
            >
             <FaGithubSquare className="h-7 w-5"/>
            </a>
            <a
              href="mailto:mathavramalingam1608@gmail.com"
              class="text-white hover:text-red-500"
            >
              <IoMdMailUnread className="h-7 w-7" />

            </a>
          </div>
        </div>

        <nav class="flex justify-center mt-4 space-x-6">
          <a href="/" class="text-white hover:text-violet-600 font-bold tracking-tight font-sans">
            Home
          </a>
          <a href="#about" class="text-white hover:text-violet-600 font-bold tracking-tight font-sans">
            About
          </a>
          <a
            href="#skills"
            class="text-white hover:text-violet-600 font-bold tracking-tight font-sans"
          >
            Skills
          </a>
          <a href="#project" class="text-white hover:text-violet-600 font-bold tracking-tight font-sans">
            Projects
          </a>
          <a
            href="#contact"
            class="text-white hover:text-violet-600 font-bold tracking-tight font-sans"
          >
           Contact
          </a>
        </nav>

        <p class="mt-4 text-sm text-white hover:text-violet-600 font-bold tracking-tight font-sans">
          © 2025 Mathav Ramalingam. All rights reserved.
        </p>
      </div>
    </>
  );
};
