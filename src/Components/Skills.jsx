import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiSolidDownArrowCircle, BiSolidUpArrowCircle } from "react-icons/bi";
import {
  SiApachespark,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiSnowflake,
} from "react-icons/si";
import { FaChartLine, FaCode, FaDatabase, FaTable } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Programming & Web",
    skills: [
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
      { name: "CSS", icon: SiCss3, color: "text-blue-400" },
    ],
  },
  {
    title: "Data Engineering & Analytics",
    skills: [
      { name: "Snowflake", icon: SiSnowflake, color: "text-cyan-300" },
      { name: "NumPy", icon: FaTable, color: "text-blue-400" },
      { name: "Pandas", icon: SiPandas, color: "text-indigo-400" },
      { name: "Matplotlib", icon: FaChartLine, color: "text-orange-400" },
      { name: "ETL / ELT", icon: FaCode, color: "text-violet-400" },
      { name: "PySpark", icon: SiApachespark, color: "text-orange-300" },
      
    ],
  },
  {
    title: "Databases & Frameworks",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
      { name: "React.js", icon: SiReact, color: "text-cyan-300" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    ],
  },
  {
    title: "Cloud & Developer Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-400" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-200" },
      { name: "Postman", icon: SiPostman, color: "text-orange-300" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
    ],
  },
];

const cardAnimation = (index) => {
  const animations = [
    { x: -120, y: 0 },
    { x: 120, y: 0 },
    { x: 0, y: -120 },
    { x: 0, y: 120 },
  ];

  return animations[index % animations.length];
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(sectionElement);

    return () => observer.unobserve(sectionElement);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="overflow-hidden bg-white pt-4 text-black dark:bg-[#1a1a1a] dark:text-white md:pt-20"
    >
      <h2 className="mb-2 flex justify-center gap-2 p-2 py-4 text-2xl font-bold tracking-tight font-sans md:mb-10 md:py-1 md:text-4xl">
        Professional<span className="text-violet-600">Skillset</span>
      </h2>

      <div className="relative grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 md:px-12 lg:px-16">
        {skillGroups.map((group, index) => {
          const animation = cardAnimation(index);

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, ...animation }}
              animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.08 }}
              className="mb-10 min-w-0 md:mb-0"
            >
              <div
                className="h-full rounded-3xl border-2 border-[#1a1a1a] p-2
                  shadow-[0_0_10px_rgba(0,0,0,1.5)]
                  dark:border-cyan-300 dark:shadow-[0_0_15px_rgba(0,255,255,0.5),_0_0_15px_rgba(0,255,255,0.5)_inset]"
              >
                <h3 className="flex min-h-14 items-center justify-center text-center text-xl font-bold tracking-tight font-sans md:text-2xl">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-3 md:p-4">
                  {group.skills.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-transparent px-1 py-3 text-sm font-medium md:text-base"
                    >
                      <Icon
                        className={`shrink-0 text-lg ${color}`}
                        aria-hidden="true"
                      />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        <a
          href="#about"
          aria-label="Back to about"
          className="hidden h-12 w-12 origin-center cursor-pointer transition-transform duration-300 hover:scale-110 md:flex md:items-center md:justify-center md:self-center"
        >
          <BiSolidUpArrowCircle className="size-12" />
        </a>
        <a
          href="#project"
          aria-label="Continue to projects"
          className="hidden h-12 w-12 origin-center cursor-pointer justify-self-end transition-transform duration-300 hover:scale-110 md:flex md:items-center md:justify-center md:self-center"
        >
          <BiSolidDownArrowCircle className="size-12" />
        </a>
      </div>
    </section>
  );
};
