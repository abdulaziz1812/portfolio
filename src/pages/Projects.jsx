import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  if (!projects) {
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
    <section id="projects" className="py-4 md:py-20 bg-base-200">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
          {...animationTop}
        >
          <FaProjectDiagram className="text-4xl text-primary" />
          Projects
        </motion.h2>

        <div className="max-w-5xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
          {projects.map((project) => (
            <motion.div
              className="card bg-base-100 rounded-2xl shadow-[0_0_17px_0_rgba(255,255,255,.4)] hover:shadow-[0_0_20px_2px_rgba(255,255,255,.5)] transition-shadow duration-300"
              {...animationBtm}
              transition={{
                duration: 0.5,
                delay: project.id * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              key={projects.id}
            >
              <figure>
                <motion.img
                  src={project.image} 
                  alt={project.name}
                  className="h-48 w-full object-cover object-top  "
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </figure>
              <div className="card-body items-center">
                <h3 className="card-title text-2xl font-semibold">
                  {project.name}
                </h3>
                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-soft btn-accent mt-4 flex items-center gap-2"
                >
                  <FaEye /> View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
