"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const transitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-[#EFEFDC]">
        <motion.div
          className="h-screen w-screen fixed bg-[#D36AC3] rounded-b-sm z-30"
          animate={{ height: "0vh" }}
          exit={{ height: "120vh", backgroundColor: "#271624" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <motion.div
          className="h-screen w-screen fixed bg-[#271624] rounded-t-sm bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default transitionProvider;
