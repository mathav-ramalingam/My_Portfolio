// const projects = [
//   {
//     id: 1,
//     title: "Dustless Vacuum Board Cleaner",
//     image: rf,
//     description:
//       "A rechargeable dustless vacuum board cleaner that eliminates chalk dust from blackboards effectively.",
//     github: "https://github.com/mathav-ramalingam",
//   },
//   {
//     id: 2,
//     title: "Hospital Management System",
//     image: HMS,
//     description:
//       "A Python-based system to streamline hospital operations, manage patient records, and appointments efficiently.",
//     github: "https://github.com/mathav-ramalingam/Hostipal_Management_System_using_Python.git",
//   },
//   {
//     id: 3,
//     title: "Agri Machinery INC",
//     image: agri,
//     description:
//       "An AI-powered surveillance system for real-time monitoring to enhance women's safety.",
//     github: "https://github.com/mathav-ramalingam/Women_Safety_Analytics",
//     live: "",
//   },
//   {
//     id: 4,
//     title: "My Portfolio",
//     image: port,
//     description: "A personal portfolio showcasing projects and technical skills.",
//     github: "https://github.com/mathav-ramalingam/My_Portfolio",
//     live: "#render link",
//   },
//   {
//     id: 5,
//     title: "Expense Tracker",
//     image: ext,
//     description:
//       "A simple expense tracking application to manage daily expenses efficiently.",
//     github: "https://github.com/mathav-ramalingam/Expense_Tracker",
//     live: "https://mr-expense-tracker.vercel.app/",
//   },

// ];

// export const Project = () => {
//   const [flipped, setFlipped] = useState({});

//   const handleFlip = (id, isFlipped) => {
//     setFlipped((prev) => ({ ...prev, [id]: isFlipped }));
//   };

//   return (
//     <>
//     <div id="project" className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
//       <div className="text-2xl md:text-4xl font-bold tracking-tight font-sans text-center mb-10 lg:pt-10">
//         My <span className="text-violet-600">Projects</span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
//         {projects.map((project) => (
//           <ReactCardFlip
//             key={project.id}
//             isFlipped={flipped[project.id] || false}
//             flipDirection="horizontal"
//           >
//             {/* Front Side (Image) */}
//             <div
//               className="relative h-52 md:h-56 w-full flex justify-center items-center cursor-pointer shadow-lg rounded-lg overflow-hidden"
//               onMouseEnter={() => handleFlip(project.id, true)}
//             >
//               <img className=" w-full h-full lg:w-96 object-cover" src={project.image} alt={project.title} />
//             </div>

//             {/* Back Side (Details) */}
//             <div
//               className="relative flex flex-col justify-center items-center bg-gray-800 text-white h-60 md:h-64 p-4 rounded-lg cursor-pointer shadow-lg"
//               onMouseLeave={() => handleFlip(project.id, false)}
//             >
//               <h1 className="text-lg md:text-xl font-bold mb-2 text-center">{project.title}</h1>
//               <p className="text-sm text-center md:text-base">{project.description}</p>
//               <div className="mt-4 flex gap-4 md:gap-6">
//                 <button
//                   onClick={() => window.open(project.github, "_blank")}
//                   className="flex items-center gap-2 bg-gray-600 py-2 px-3 md:py-2.5 md:px-4 rounded-lg text-white hover:bg-gray-700 transition"
//                 >
//                   <FaGithub /> GitHub
//                 </button>
//                 {project.live && (
//                   <button
//                     onClick={() => window.open(project.live, "_blank")}
//                     className="flex items-center gap-2 bg-blue-600 py-2 px-3 md:py-2.5 md:px-4 rounded-lg text-white hover:bg-blue-700 transition"
//                   >
//                     <IoIosRocket /> Go Live
//                   </button>
//                 )}
//               </div>
//             </div>

//           </ReactCardFlip>

//         ))}
//       </div>
//     </div>
//       <div className=" flex justify-between bg-white dark:bg-[#1a1a1a] text-black dark:text-white ">
//           <div className="hidden md:block  pl-6 ">
//             <a href="#skills">
//               <BiSolidUpArrowCircle className="size-12  cursor-pointer hover:scale-110 transition-transform " />
//             </a>
//           </div>

//           {/* Down Arrow */}
//           <div className="hidden md:block  pr-5 ">
//             <a href="#certification">
//               <BiSolidDownArrowCircle className="size-12 cursor-pointer hover:scale-110 transition-transform " />
//             </a>
//           </div>
//         </div>
//       </>
//   );
// };

import { BiSolidUpArrowCircle, BiSolidDownArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import dvbc from "../assets/Image/dvbc.png";
import bsb from "../assets/Image/bsb.png";
import port from "../assets/Image/port.png";
import jb from "../assets/Image/jb.png";
import agri from "../assets/Image/agri.png";

import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { FaGithubAlt } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";

const Project = () => {
  const projects = [
    {
      title: "Dustless Vacuum Board Cleaner",
      desc: "Developed a prototype solution to address a real-time classroom problem chalk dust affecting teachers and front-row students. Designed a duster with vacuum and storage chamber to collect the chalk dust while cleaning the black board, ensuring a clean and healthier environment. ",
      img: dvbc,
      link: "https://www.linkedin.com/in/mathav-ramalingam/details/projects/",
      live: "https://drive.google.com/drive/folders/1ZDBgp5fPRwA3fQjOKTW_PJZeMJpQZqU5?usp=drive_link",
    },
    {
      title: "Bike Service Booking (Backend System)",
      desc: "This is the backend of a Bike Service Booking Application that allows bike service station owners to manage their offered services and customer bookings. Customers can register, book services, and track booking status, while the service provider gets notified and updates service progress.",
      img: bsb,
      link: "https://github.com/mathav-ramalingam/Bike_service_application.git",
      live: "https://github.com/mathav-ramalingam/Bike_service_application.git",
    },

    {
      title: "Personal Portfolio",
      desc: "A responsive and modern personal portfolio website developed using React and Tailwind CSS to showcase projects, skills, and experience. The website features smooth navigation, sleek animations, and a clean UI that highlights professional and creative work effectively. The portfolio serves as an interactive resume, providing visitors with an overview of my work in backend and full-stack development.",
      img: port,
      link: "https://github.com/mathav-ramalingam/My_Portfolio.git",
      live: "https://www.mathavramalingam.me/",
    },
    {
      title: "JobConnect",
      desc: "It is an web-based job portal application developed using the Django framework. The platform bridges the gap between job seekers and company by providing an intuitive and interactive interface for job postings and applications. It simplifies the recruitment process for companies and offers job seekers a streamlined experience for discovering and applying to relevant job opportunities.",
      img: jb,
      link: "https://github.com/mathav-ramalingam/JobConnect.git",
      live: "https://github.com/mathav-ramalingam/JobConnect.git",
    },
    {
      title: "Agri Machinery Mart",
      desc: "I built the AGRI MACHINERIES MART website using the MERN stack , creating an easy-to-use interface where customers can browse and view varies agri products. MongoDB securely manages data, while the admin dashboard enables stock monitoring and PDF downloads. React’s responsive design provides an engaging experience, and Express.js with Node.js ensures seamless backend operations, perfect for peak seasonal demand",
      img: agri,
      link: "https://github.com/mathav-ramalingam/Agri_Machinery_INC.git",
      live: "https://agri-machinery-inc.vercel.app/",
    },
  ];

  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      if (tiltRef) {
        VanillaTilt.init(tiltRef, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
    return () => {
      tiltRefs.current.forEach((tiltRef) => tiltRef?.vanillaTilt.destroy());
    };
  }, [projects]);

  const handleGithubLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleLiveLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        id="project"
        className="container mx-auto mt-20  text-black dark:text-white m-3 md:w-[170vh] "
      >
        <div className="text-2xl md:text-4xl font-bold tracking-tight font-sans text-center mb-20 lg:pt-16">
          My <span className="text-violet-600">Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 leading-5 ">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (tiltRefs.current[index] = el)}
              className="dark:bg-[#262626] bg-[#1a1a1a] rounded-lg p-4"
              data-tilt
            >
              <div>
                <img
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  className="rounded-lg h-auto object-cover"
                />
              </div>
              <div className="mt-4 text-white font-sans text-2xl">
                <h1 className="font-mono">{project.title}</h1>
                <p className="mt-2 text-sm font-medium tracking-tight font-sans">{project.desc}</p>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleGithubLink(project.link)}
                  className="bg-violet-800 font-sans rounded-lg px-4 py-2 mt-4 flex"
                >
                  <FaGithubAlt className="mt-1 text-1xl" />
                  &nbsp;Github
                </button>

                <div>
                  <button
                    className="bg-violet-800 font-sans rounded-lg px-4 py-2 mt-4 flex"
                    onClick={() => handleLiveLink(project.live)}
                  >
                    <MdRocketLaunch className="mt-1 me-2" /> Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between bg-white dark:bg-[#1a1a1a] text-black dark:text-white ">
        <div className="hidden md:block  pl-6 ">
          <a href="#skills">
            <BiSolidUpArrowCircle className="size-12  cursor-pointer hover:scale-110 transition-transform " />
          </a>
        </div>
        {/* Down Arrow */}
        <div className="hidden md:block  pr-5 ">
          <a href="#certification">
            <BiSolidDownArrowCircle className="size-12 cursor-pointer hover:scale-110 transition-transform " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
