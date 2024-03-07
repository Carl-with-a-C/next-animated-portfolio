"use client";

import NavLink from "./navLink";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { motion } from "framer-motion";

const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      y: 10,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {Links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className=" text-white  mr-1">carl</span>
          <span className="w-12 h-8 bg-white text-black flex justify-center items-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="github icon" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image
            src="/dribbble.png"
            alt="dribbble icon"
            width={24}
            height={24}
          />
        </Link>{" "}
        <Link href="/">
          <Image
            src="/linkedin.png"
            alt="linkedin icon"
            width={24}
            height={24}
          />
        </Link>{" "}
        <Link href="/">
          <Image
            src="/instagram.png"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}

      <div className="md:hidden">
        {/* HAMBURGER MENU */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>{" "}
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="open"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {Links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} className="">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
