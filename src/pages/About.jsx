import React from "react";

import { FcInfo } from "react-icons/fc";

const About = () => {
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
    <section id="about" className=" py-4 md:py-20 bg-base-200">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
          {...animationTop}
        >
          <FcInfo className="text-4xl text-primary" />
          About Me
        </motion.h2>

        <motion.div
          className="card bg-base-100 mx-auto w-11/12 max-w-5xl p-6 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
          {...animationBtm}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            {...animationBtm}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Hi! 👋 I’m Abdul Aziz Abdul Mannan, a Web Developer with a
            background in IT and admin coordination. My coding journey started
            with a curiosity about websites, leading me to learning JavaScript,
            React, Tailwind CSS, Node.js, and MongoDB. I spent years as an IT
            Specialist at APR Energy, but my passion for building digital
            solutions pushed me into web development
          </motion.p>

          <motion.div
            {...animationBtm}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold mt-6">What I Love</h2>
            <p className="text-lg max-w-2xl mx-auto">
              I enjoy crafting user-friendly web apps with React, Tailwind, and
              Node.js, solving technical puzzles, and creating responsive
              designs.
            </p>
          </motion.div>

          <motion.div {...animationBtm} transition={{ duration: 1, delay: 1 }}>
            <h2 className="text-xl font-bold mt-6">Beyond Code</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Outside coding, I explore tech trends, game (classic and new),
              watch football, travel, and learn constantly.
            </p>
          </motion.div>

          <motion.div
            {...animationBtm}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h2 className="text-xl font-bold mt-6">Let’s Connect</h2>
            <p className="text-lg max-w-2xl mx-auto">
              I’m up for collaborations or chats—reach out! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
