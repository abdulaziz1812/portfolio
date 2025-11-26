import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import background from "../assets/background.jpg";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Banner = () => {
  const animationLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  const animationRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <section
      className="hero text-white flex min-h-screen items-center justify-center relative overflow-hidden pt-20 p-6
      "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="hero-content flex flex-col-reverse md:flex md:flex-row justify-between  items-center w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex flex-col justify-end ">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            {...animationLeft}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hello, I’m
          </motion.h1>

          <motion.h1
            className="text-2xl md:text-4xl font-bold mt-4"
            {...animationLeft}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Abdul aziz Abdul mannan
          </motion.h1>

          <motion.p
            className="text-gray-300 text-2xl mt-4"
            {...animationLeft}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A Passionate Web Developer Crafting Modern Solutions
          </motion.p>

          <motion.a
            href="/assets/Abdul_aziz_Abdul_mannan_Frontend_Developer_Resume.pdf"
            download
            className="btn btn-accent  md:btn-lg w-fit mt-4"
            {...animationLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Download Resume
          </motion.a>

          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.a
              href="https://github.com/abdulaziz1812"
              target="_blank"
              className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black"
              {...animationLeft}
              whileHover={{ scale: 1.2 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdul-aziz-abdul-mannan1/"
              target="_blank"
              className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black"
              {...animationLeft}
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://wa.me/+8801700766210"
              target="_blank"
              className="btn btn-circle btn-outline text-white hover:bg-white hover:text-black"
              {...animationLeft}
              whileHover={{ scale: 1.2 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </div>

        <div>
          <motion.img
            src={profile}
            alt="Profile"
            className="w-70  rounded-full ring-4 ring-white shadow-xl "
            {...animationRight}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
