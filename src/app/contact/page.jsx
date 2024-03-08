"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = `Say_Hello`;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*TEXT CONTAINER*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div className="flex">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.svg
              animate={{ rotate: [15, 45, 15] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.906 3.92194C17.8921 2.88646 16.4461 2.50452 15.0306 2.9073C14.6322 3.02066 14.2173 2.78959 14.104 2.39119C13.9906 1.99279 14.2217 1.57792 14.6201 1.46456C16.5583 0.913072 18.5747 1.43959 19.9778 2.8725C20.2676 3.16846 20.2626 3.64331 19.9666 3.9331C19.6706 4.2229 19.1958 4.2179 18.906 3.92194ZM11.1904 3.30839C10.9763 2.94131 10.3525 2.7187 9.71882 3.08085C9.08746 3.44168 8.97642 4.07772 9.18675 4.4384L11.7124 8.76952C11.9211 9.12734 11.8001 9.58656 11.4423 9.79522C11.0845 10.0039 10.6253 9.88296 10.4166 9.52514L7.89098 5.19403C7.89085 5.19381 7.8911 5.19424 7.89098 5.19403L7.04909 3.75032C6.83503 3.38324 6.21122 3.16063 5.57755 3.52278C4.94619 3.88361 4.83515 4.51965 5.04548 4.88033L8.83397 11.377C9.04263 11.7348 8.92171 12.1941 8.56389 12.4027C8.20607 12.6114 7.74685 12.4905 7.53819 12.1326L5.85442 9.24522C5.64036 8.87814 5.01655 8.65553 4.38288 9.01768C3.75152 9.37851 3.64048 10.0145 3.85081 10.3752L7.6393 16.8719C9.24824 19.631 13.2186 20.5264 16.5856 18.6021C19.9502 16.6792 21.1463 12.8377 19.5411 10.085L17.0154 5.75387C16.8013 5.3868 16.1775 5.16418 15.5439 5.52633C14.9125 5.88716 14.8015 6.5232 15.0118 6.88389L16.6956 9.7713C16.7963 9.94411 16.8239 10.15 16.7721 10.3432C16.7203 10.5365 16.5935 10.701 16.4198 10.8003C14.8774 11.6818 14.4047 13.3863 15.0799 14.5443C15.2886 14.9022 15.1677 15.3614 14.8099 15.57C14.4521 15.7787 13.9928 15.6578 13.7842 15.3C12.7249 13.4835 13.3917 11.2368 15.0475 9.92287L11.1904 3.30839ZM13.9186 5.00916L12.4861 2.55277C11.7703 1.32517 10.163 1.09928 8.97453 1.77853C8.60823 1.98787 8.29668 2.27483 8.06179 2.60775C7.26173 1.72687 5.8839 1.62001 4.83326 2.22046C3.64241 2.90104 3.03012 4.40197 3.74971 5.63596L4.75188 7.35452C4.36684 7.39635 3.98493 7.51742 3.63859 7.71536C2.44774 8.39595 1.83545 9.89687 2.55504 11.1309L6.34352 17.6275C8.45427 21.2471 13.408 22.1458 17.3299 19.9044C21.254 17.6617 22.9513 12.9554 20.8368 9.32937L18.3112 4.99825C17.5953 3.77065 15.9881 3.54476 14.7996 4.22401C14.4495 4.42406 14.1495 4.69498 13.9186 5.00916ZM4.41401 17.859C4.77183 17.6504 5.23105 17.7713 5.43971 18.1291C6.26657 19.5471 7.53066 20.6193 9.08954 21.3151C9.46779 21.4839 9.63757 21.9274 9.46875 22.3057C9.29993 22.6839 8.85645 22.8537 8.4782 22.6849C6.66668 21.8764 5.14688 20.6046 4.14393 18.8847C3.93527 18.5269 4.05619 18.0677 4.41401 17.859Z"
                fill="#271624"
              />
            </motion.svg>
          </motion.div>
        </div>
        {/*FORM CONTAINER*/}
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 ring-2 ring-[#271624] rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        >
          <span className="font-Synonym">Hi Carl,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-[#271624] outline-none resize-none"
            name="user_message"
            required
          />
          <span className="font-Synonym">My email address is:</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-[#271624] outline-none"
            name="user_email"
            required
          />
          <span className="font-Synonym">Regards</span>
          <button
            className="bg-[#271624] hover:bg-[rgb(211,106,195)] rounded font-semibold text-[#EFEFDC] p-4 transition-colors duration-300"
            type="submit"
          >
            SEND
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent. Thank you!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Oh, something went wrong!
            </span>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
