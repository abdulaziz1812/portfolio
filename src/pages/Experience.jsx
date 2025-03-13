import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("/Experience.json") 
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching experience data:", error));
  }, []);

  if (!experiences) {
    return (
      <section className="py-20 bg-base-200 min-h-screen">
        <div className="container mx-auto text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </section>
    );
  }

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
    <section id="experience" className="py-20 bg-base-200">
      <div className="container max-w-4xl w-11/12 mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
          {...animationTop}
        >
          <FaBriefcase className="text-4xl text-primary" /> Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="card bg-base-100 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
              {...animationBtm}
            >
              <div className="card-body">
                <h3 className="card-title text-2xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-gray-200">{exp.company}</p>
                <p className="text-sm text-gray-400">
                  {exp.location} | {exp.duration}
                </p>

                <h4 className="text-xl font-semibold ">Responsibilities</h4>
                <ul className="list-disc list-inside text-lg">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold">Skills</h4>
                <ul className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <li key={index} className="badge badge-accent  shadow-[0_0_12px_0_rgba(59,130,246)]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;