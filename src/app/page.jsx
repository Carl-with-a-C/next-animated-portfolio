"use client";

import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import HeadTracker from "../components/headTracker.jsx";

const Homepage = () => {
  const y = useMotionValue(200);
  const handleMouse = (e) => {
    y.set(e.pageY);
  };

  const titleText = `I design UI/UX, build websites and wear hoodies`;

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9 }}
      onMouseMove={handleMouse}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*IMAGE CONTAINER*/}
        <div className="h-1/2 md:h-full lg:w-1/2 relative flex flex-col items-center justify-center ">
          {/* <Image src="/HeroCC.svg" alt="hero image" fill />
           */}

          <HeadTracker y={y} />
        </div>
        {/*TEXT CONTAINER*/}
        <div className="h-1/2 gap-2 lg:h-full lg:w-1/2 flex flex-col  md:gap-4 lg:gap-6 xl:gap-8 items-center justify-around md:justify-center">
          {/*TITLE*/}
          <h1 className="font-Amulya uppercase text-2xl md:text-4xl font-bold z-10">
            {/* I design UI/UX, build websites and wear hoodies */}
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, color: "#D36AC3" }}
                animate={{ opacity: 1, color: "rgb(39, 22, 36)" }}
                transition={{
                  duration: 3,
                  delay: index * 0.05,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          {/*DESCRIPTION*/}
          <motion.p
            className="font-Synonym md:text-xl"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
          >
            Hey I{`'`}m <strong>Carl</strong> a designer and developer who loves
            making things{`,`} including this website. Have a look around and
            get in touch if you{`'`}d like us to work together.
          </motion.p>
          {/*BUTTONS*/}
          <div className="lg:w-full flex gap-4">
            <motion.button
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-[#271624] bg-[#271624] text-[#EFEFDC] z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/portfolio">View my Work</Link>
            </motion.button>
            <motion.button
              href="/contact"
              className="p-4 rounded-lg ring-2 ring-[#271624] font-semiboldz-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/contact">Contact Me</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
