import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  
  const animationTop = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  const animationL = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <section id="education" className="py-4 md:py-20 bg-base-200">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
          {...animationTop}
        >
          <FaGraduationCap className="text-4xl text-primary" />
          Education
        </motion.h2>

        <div className="space-y-8 max-w-3xl w-11/12 mx-auto">
          <motion.div
            className="flex items-center gap-4 bg-base-100 p-6 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)]"
            {...animationL}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaBook className="text-4xl text-orange-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">
                AABPS Advanced Diploma in Business Management Studies
              </h3>
              <p className="text-lg text-gray-600">
                Global College London, UK - 2014
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-base-100 p-6 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
            {...animationL}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FaBook className="text-4xl text-orange-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Certificate in IT</h3>
              <p className="text-lg text-gray-600">
                London Victoria College, UK - 2012
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-base-100 p-6 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
            {...animationL}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <FaBook className="text-4xl text-orange-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">
                Diploma in Sales & Marketing Management
              </h3>
              <p className="text-lg text-gray-600">Limra College, UK - 2010</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
