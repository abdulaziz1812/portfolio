import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
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
    <section id="contact" className="py-20 bg-base-200">
      <div className="container max-w-5xl w-11/12 mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
          {...animationTop}
        >
          <FaEnvelope className="text-4xl text-primary" /> Contact Me
        </motion.h2>
        <motion.div
          className="bg-base-100 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300 p-8 max-w-lg mx-auto"
          {...animationBtm}
        >
          <div className="space-y-6">
            <motion.div
              className="flex items-center justify-center gap-3 text-lg"
              {...animationBtm}
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-primary text-2xl" />
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:abdulaziz.abdulmannan1@gmail.com"
                  className="text-accent hover:underline"
                >
                  abdulaziz.abdulmannan1@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-lg"
              {...animationBtm}
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="text-primary text-2xl" />
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+8801700766210"
                  className="text-accent hover:underline"
                >
                  +88 01700766210
                </a>
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-lg"
              {...animationBtm}
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp className="text-primary text-2xl" />
              <p>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/+8801700766210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  +88 01700766210
                </a>
              </p>
            </motion.div>

            <motion.div {...animationBtm}>
              <h4 className="text-xl font-semibold mt-6 mb-4">
                Send a Message
              </h4>
              <form
                action="mailto:abdulaziz.abdulmannan1@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-base-200 text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-base-200 text-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full bg-base-200 text-white"
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className="btn btn-accent w-full">
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
