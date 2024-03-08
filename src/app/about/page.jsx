"use client";

import Brain from "../../components/brain.jsx";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "ReactJS" },
  { name: "NextJS" },
  { name: "NodeJS" },
  { name: "ExpressJS" },
  { name: "PostgreSQL" },
  { name: "GraphQl" },
  { name: "SCSS" },
  { name: "Tailwind CSS" },
  { name: "Framer-Motion" },
  { name: "Figma" },
  { name: "AWS" },
];
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    once: true,
    margin: "-100px",
  });

  const skillsVariants = {
    closed: {
      x: "100vw",
    },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const skillsItemVariants = {
    closed: {
      y: 10,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
    },
  };

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/*CONTAINER*/}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/*TEXT CONTAINER*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:pr-0 xl:w-1/2">
          {/*BIO CONTAINER*/}
          <div className="flex flex-col gap-8 justify-center">
            {/*BIO TITLE*/}
            <h1 className="font-Amulya font-bold text-6xl">BIOGRAPHY</h1>
            {/*BIO DESCRIPTION*/}

            <p className="font-Synonym text-lg">
              I use a big metal brain, there are lots of cogs moving at
              different speeds. I have spent a long time oiling this thing and
              tuning it up.
            </p>
            {/*BIO QUOTE*/}

            <span className="font-Synonym italic">
              "Design is where science and art break even."
            </span>
            {/*BIO SCROLL SVG*/}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6V14"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </motion.svg>
            </div>
          </div>
          {/*SKILLS CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/*SKILLS TITLE*/}
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>
            {/*SKILLS LIST*/}
            <motion.div
              className="flex gap-4 flex-wrap"
              variants={skillsVariants}
              animate={isSkillRefInView ? "open" : "closed"}
            >
              {skills.map((skill) => (
                <motion.div
                  variants={skillsItemVariants}
                  key={skill.name}
                  className="font-Synonym rounded p-2 text-sm cursor-pointer bg-[#271624] text-[#EFEFDC] hover:scale-105 hover:bg-[rgb(211,106,195)] transition-colors duration-300"
                >
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/*EXPERIENCE CONTAINER*/}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/*EXPERIENCE TITLE*/}
            <motion.h1
              initial={{ x: -500 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-Amulya font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/*EXPERIENCE LIST*/}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={
                isExperienceRefInView
                  ? { opacity: 1, transition: { delay: 0.2, duration: 3 } }
                  : {}
              }
            >
              {/*EXPERIENCE LIST ITEM 1*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3 flex flex-col justify-center items-start">
                  {/*JOB TITLE*/}
                  <div className="font-Synonym bg-[#EFEFDC] p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Creative Director
                  </div>
                  {/*JOB DESCRIPTION*/}
                  <div className="font-Synonym p-3 text-sml italic">
                    Lead designer and front-end software developer
                  </div>
                  {/*JOB DATE*/}
                  <div className="font-Synonym p-3 text-sml text-[#D36AC3] font-semibold">
                    JAN 2024 - PRESENT
                  </div>
                  {/*JOB COMPANY*/}
                  <div className="font-Synonym ml-2 p-1 rounded bg-[#271624] text-[#EFEFDC] text-sml font-semibold w-fit ">
                    Buztek Ltd
                  </div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6 flex items-center justify-center">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*CIRCLE*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D36AC3] bg-[#EFEFDC] -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3"></div>
              </div>
              {/*EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3 flex flex-col justify-center items-start"></div>
                {/*CENTER*/}
                <div className="w-1/6 flex items-center justify-center">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*CIRCLE*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D36AC3] bg-[#EFEFDC] -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3">
                  {/*JOB TITLE*/}
                  <div className="bg-[#EFEFDC] p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Web Developer
                  </div>
                  {/*JOB DESCRIPTION*/}
                  <div className="p-3 text-sml italic">
                    Designing and building web applications for business clients
                    on reactJS framework, deployed on AWS
                  </div>
                  {/*JOB DATE*/}
                  <div className="font-Synonym p-3 text-sml text-[#D36AC3] font-semibold">
                    JAN 2023 - PRESENT
                  </div>
                  {/*JOB COMPANY*/}
                  <div className="font-Synonym ml-2 p-1 rounded bg-[#271624] text-[#EFEFDC] text-sml font-semibold w-fit">
                    Various
                  </div>
                </div>
              </div>
              {/*EXPERIENCE LIST ITEM 3*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3 flex flex-col justify-center items-start">
                  {/*JOB TITLE*/}
                  <div className="bg-[#EFEFDC] p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior full-stack Developer Student
                  </div>
                  {/*JOB DESCRIPTION*/}
                  <div className="p-3 text-sml italic">
                    I enrolled on the software developer bootcamp, specialising
                    in full stack software development
                  </div>
                  {/*JOB DATE*/}
                  <div className="p-3 text-sml text-[#D36AC3] font-semibold">
                    OCT 2022 - JAN 2023
                  </div>
                  {/*JOB COMPANY*/}
                  <div className="font-Synonym ml-2 p-1 rounded bg-[#271624] text-[#EFEFDC] text-sml font-semibold w-fit">
                    Northcoders
                  </div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6 flex items-center justify-center">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*CIRCLE*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D36AC3] bg-[#EFEFDC] -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/*SVG CONTAINER*/}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 lg:w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
