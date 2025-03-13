import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";

const Skill = () => {
  const animationTop = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  const animationBtm = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <section id="skills" className="py-4 md:py-20 bg-base-200">
      <div className="container mx-auto max-w-5xl w-11/12 text-center">
        {/* Heading with simple animation */}
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
          {...animationTop}
        >
          <GiSkills className="text-4xl text-primary" />
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <motion.div
            className="card bg-base-100 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
            {...animationBtm}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="card-body items-center">
              <div className="flex items-center gap-3 mb-3">
                <FaReact className="text-4xl text-blue-500" />
                <h3 className="card-title text-2xl font-semibold">Frontend</h3>
              </div>
              <p className="text-base flex items-center gap-2 justify-center flex-wrap">
                <span className="flex items-center">
                  <FaHtml5 className="text-orange-500 mr-1" /> HTML
                </span>
                <span className="flex items-center">
                  <FaCss3Alt className="text-blue-600 mr-1" /> CSS
                </span>
                <span className="flex items-center">
                  <FaJs className="text-yellow-500 mr-1" /> JavaScript
                </span>
                <span className="flex items-center">
                  <FaReact className="text-cyan-500 mr-1" /> React
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card bg-base-100 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
            {...animationBtm}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="card-body items-center">
              <div className="flex items-center gap-3 mb-3">
                <FaNodeJs className="text-4xl text-green-500" />
                <h3 className="card-title text-2xl font-semibold">Backend</h3>
              </div>
              <p className="text-base flex items-center gap-2 justify-center flex-wrap">
                <span className="flex items-center">
                  <FaNodeJs className="text-green-500 mr-1" /> Node.js
                </span>
                <span className="flex items-center">
                  <SiExpress className="text-gray-700 mr-1" /> Express
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card bg-base-100 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
            {...animationBtm}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="card-body items-center">
              <div className="flex items-center gap-3 mb-3">
                <FaTools className="text-4xl text-gray-500" />
                <h3 className="card-title text-2xl font-semibold">Tools</h3>
              </div>
              <p className="text-base flex items-center gap-2 justify-center flex-wrap">
                <span className="flex items-center">
                  <FaGitAlt className="text-orange-600 mr-1" /> Git
                </span>
                <span className="flex items-center">
                  <VscVscode className="text-blue-600 mr-1" /> VS Code
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
