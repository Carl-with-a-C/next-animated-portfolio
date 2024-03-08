"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import hakkapoLogo from "../../../public/hakkapo.svg";
import buztekLogo from "../../../public/buztekWORD.svg";
import RJNWLogo from "../../../public/RJNW.svg";
import flexboxLogo from "../../../public/flexbox.svg";

const items = [
  {
    id: 1,
    title: "Hakkapo",
    logoPath: hakkapoLogo,
    desc: "A beautiful Japanese restaurant based in Manchester UK. Krzysztof and Simon wanted a welcoming and unique brand identity. I completed all design and branding on this project, as well as building a fun, cohesive website",
    link: "https://hakkapo.co.uk",
  },
  {
    id: 2,
    title: "Buztek Ltd",
    logoPath: buztekLogo,
    desc: "As creative director of Buztek Ltd, I designed and built the website as well as completed all branding for the company",
    link: "https://buztek.co",
  },
  {
    id: 3,
    title: "Roofing & Joinery Northwest",
    logoPath: RJNWLogo,
    desc: "A local roofing and joinery company needed a new website to inform their customers of their services. I designed and built the site while modifying the logo subtly to match the aestetic",
    link: "https://www.roofingandjoinery.com",
  },
  {
    id: 4,
    title: "Flexbox",
    logoPath: flexboxLogo,
    desc: "A dynamic outdoor kitchen supplier required a dynamic website. I designed and built all aspects of the site and I am currently working on a kitchen builder accompanying project",
    link: "https://theflexbox.co.uk",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0.2, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-12   text-center">
          <h1 className="font-Amulya uppercase font-semibold text-6xl lg:text-8xl">
            My Work
          </h1>
          <p className="font-Synonym">{`(scroll)`}</p>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.title}
                className={"h-screen w-screen flex items-center justify-center"}
              >
                <motion.div
                  className="relative h-[70%] w-[90%] md:w-[80%] lg:w-[70%] ring-2 ring-[#EFEFDC] rounded-lg flex justify-center hover:bg-[#271624] transition-color duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.25, delay: 0.25 }}
                >
                  <div className="relative flex flex-col gap-4 text-[#EFEFDC] p-4md:p-8 lg:p-12 justify-center items-center ">
                    {/* <h1 className="font-Amulya text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-center">
                      {item.title}
                    </h1> */}
                    <Image
                      className="w-[200px] h-[100px]"
                      src={item.logoPath}
                      alt={`${item.title} logo`}
                      width={200}
                      height={100}
                    ></Image>
                    <p className="font-Synonym w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-center">
                      {item.desc}
                    </p>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-end"
                    >
                      <motion.button
                        className="p-2 text-sml md:text-md lg:p-6 lg:text-lg bg-[#EFEFDC] text-[#271624] hover:bg-[#D36AC3] hover:text-[#EFEFDC] font-semibold m-4 rounded"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        Visit Site
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="font-Amulya text-2xl font-semibold">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#271624">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-[#271624] text-white rounded-full flex items-center justify-center text-sm md:text-md"
          >
            Hire Me
          </Link>
        </div>
      </div>
      ;
    </motion.div>
  );
};

export default PortfolioPage;
