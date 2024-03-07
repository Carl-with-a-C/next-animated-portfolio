"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const transitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-pink-50"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-sm z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "120vh" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
          }}
          exit={{ opacity: 0 }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-sm bottom-0 z-40"
          initial={{ height: "120vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
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
