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
import rsap from "../assets/Image/rsap.png";
import dvbc from "../assets/Image/DVBC.png";
import bsb from "../assets/Image/bsb.png";
import port from "../assets/Image/portfolio.png";
import jb from "../assets/Image/jb.png";
import agri from "../assets/Image/agri.png";

import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { FaGithubAlt } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";

const Project = () => {
  const projects = [
    {
      title: "Retail Sales Analytics Platform",
      desc: "Developed a Snowflake-based retail analytics platform with SQL transformations, data cleaning, deduplication, and 6 custom UDFs to prepare reliable sales data.Created 7 analytical views to evaluate sales trends, product categories, regional performance, customer segments, and shipping efficiency.Built an interactive Streamlit dashboard with dynamic filters, KPI metrics, and visualizations; performed data quality checks and financial reconciliation across 9,994 records.",
      img: rsap,
      link: "https://github.com/mathav-ramalingam/Retail_Sales_Analytics_Platform.git",
    },
    {
      title: "Bike Service Booking (Backend System)",
      desc: "This is the backend of a Bike Service Booking Application that allows bike service station owners to manage their offered services and customer bookings. Customers can register, book services, and track booking status, while the service provider gets notified and updates service progress.",
      img: bsb,
      link: "https://github.com/mathav-ramalingam/Bike_service_application.git",
    },
    {
      title: "Agri Machinery Mart",
      desc: "Developed the AGRI MACHINERIES MART website using the MERN stack , creating an easy-to-use interface where customers can browse and view varies agri products. MongoDB securely manages data, while the admin dashboard enables stock monitoring and PDF downloads. React’s responsive design provides an engaging experience, and Express.js with Node.js ensures seamless backend operations, perfect for peak seasonal demand.",
      img: agri,
      link: "https://github.com/mathav-ramalingam/Agri_Machinery_INC.git",
      live: "https://agri-machinery-inc.vercel.app/",
    },

    {
      title: "Dustless Vacuum Board Cleaner (Hardware Prototype)",
      desc: "Developed a rechargeable dustless vacuum board cleaner to address classroom health concerns caused by airborne chalk dust, particularly for teachers and front-row students. Designed a vacuum-based duster with an integrated dust collection chamber to capture chalk particles during cleaning. Improved cleaning efficiency and reduced operational noise through iterative prototyping and testing, promoting a cleaner and healthier classroom environment. ",
      img: dvbc,
      link: "https://www.linkedin.com/in/mathav-ramalingam/details/projects/",
      live: "https://drive.google.com/drive/folders/1NW5L6k0fqS0LszwtDy6-ayi-2TaBf0Qb?usp=drive_link",
    },
    
    {
      title: "Personal Portfolio",
      desc: "A responsive and modern personal portfolio website developed using React and Tailwind CSS to showcase projects, skills, and experience. The website features smooth navigation, sleek animations, and a clean UI that highlights professional and creative work effectively. The portfolio serves as an interactive resume, providing visitors with an overview of my work in backend and full-stack development.",
      img: port,
      link: "https://github.com/mathav-ramalingam/My_Portfolio.git",
      live: "https://www.mathavramalingam.me/",
      isCurrent: true,
    },
    {
      title: "JobConnect",
      desc: "It is an web-based job portal application developed using the Django framework. The platform bridges the gap between job seekers and company by providing an intuitive and interactive interface for job postings and applications. It simplifies the recruitment process for companies and offers job seekers a streamlined experience for discovering and applying to relevant job opportunities.",
      img: jb,
      link: "https://github.com/mathav-ramalingam/JobConnect.git",
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
        className="container mx-auto mt-20 w-full max-w-7xl overflow-hidden px-4 text-black dark:text-white sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center text-2xl font-bold tracking-tight font-sans sm:mb-16 md:text-4xl lg:pt-16">
          My <span className="text-violet-600">Projects</span>
        </div>
        <div className="grid grid-cols-1 gap-8 leading-5 sm:gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}  
              ref={(el) => (tiltRefs.current[index] = el)}
              className="rounded-lg border-2 border-[#1a1a1a] bg-transparent p-4 text-black shadow-[0_0_10px_rgba(0,0,0,1.5)] dark:border-0 dark:bg-[#303030] dark:text-white dark:shadow-[0_0_4px_rgba(135,135,135,1)]"
              data-tilt                                                                                                                  // #262626
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-transparent dark:bg-[#303030]">
                <img
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-4 text-black dark:text-white">
                <h2 className="w-fit border-l-4 border-violet-600 pl-3 text-xl font-bold leading-tight tracking-tight font-sans transition-colors duration-300 hover:text-violet-600 md:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-justify text-sm font-normal leading-relaxed tracking-normal font-sans">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                {project.link && (
                  <button
                    onClick={() => handleGithubLink(project.link)}
                    className="mt-4 flex rounded-lg bg-violet-800 px-4 py-2 font-sans text-white"
                  >
                    <FaGithubAlt className="mt-1 text-1xl" />
                    &nbsp;Github
                  </button>
                )}

                {project.live && (
                  <div>
                    <button
                      type="button"
                      disabled={project.isCurrent}
                      className={`mt-4 flex rounded-lg px-4 py-2 font-sans text-white ${
                        project.isCurrent
                          ? "cursor-not-allowed bg-gray-500 opacity-70"
                          : "bg-violet-800"
                      }`}
                      onClick={() => handleLiveLink(project.live)}
                    >
                      <MdRocketLaunch className="mt-1 me-2" />
                      {project.isCurrent ? "You are here" : "Live"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between bg-white px-4 text-black dark:bg-[#1a1a1a] dark:text-white sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <a href="#skills" aria-label="Back to skills">
            <BiSolidUpArrowCircle className="size-12  cursor-pointer hover:scale-110 transition-transform " />
          </a>
        </div>
        {/* Down Arrow */}
        <div className="hidden md:block">
          <a href="#certification" aria-label="Continue to certifications">
            <BiSolidDownArrowCircle className="size-12 cursor-pointer hover:scale-110 transition-transform " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
