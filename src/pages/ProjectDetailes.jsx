import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  
  useEffect(() => {
    fetch("/Projects.json") 
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === parseInt(id));
        setProject(foundProject);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, [id]);

  
  const animationTop = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  const animationBtm = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };
  const animationL = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true },
  };

  if (!project) {
    return (
      <section className="py-20 bg-base-200 min-h-screen">
        <div className="container mx-auto text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-base-200 min-h-screen ">
      <div className="container mx-auto px-4 ">
       
        <motion.h1
          className="text-4xl font-bold text-center mb-10"
          {...animationTop}
        >
          {project.name}
        </motion.h1>

       
        <motion.div
          className="max-w-4xl mx-auto bg-base-100 p-6 rounded-xl shadow-[0_0_17px_0_rgba(255,255,255,.4)]"
          {...animationBtm}
        >
          
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full  object-cover object-top rounded-lg mb-6"
            {...animationBtm}
            transition={{ duration: 1, delay: 0.2 }}
          />

          
          <motion.div
            {...animationBtm}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <ul className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <motion.li
                  key={tech.id}
                  className="badge badge-accent  shadow-[0_0_12px_0_rgba(59,130,246)]"
                  {...animationL}
                  transition={{
                    duration: 1,
                    delay: tech.id * 0.2,
                  }}
                >
                  {tech.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div
            {...animationBtm}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-lg mb-6">{project.description}</p>
          </motion.div>

          
          <motion.div
            {...animationBtm}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent flex items-center gap-2"
                {...animationL}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
              >
                <FaExternalLinkAlt /> Live Project
              </motion.a>
              <motion.a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
                {...animationL}
                transition={{
                  duration: 1,
                  delay: 0.6,
                }}
              >
                <FaGithub /> GitHub
              </motion.a>
            </div>
          </motion.div>

          
          <motion.div
          {...animationBtm} transition={{ duration: 1, delay: .8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Challenges Faced</h2>
            <ul className="list-disc list-inside text-lg mb-6">
              {project.challenges.map((challenge, index) => (
                <motion.li 
                {...animationL}
                transition={{
                  duration: .8,
                  delay: index+1 *.5,
                }}
                key={index}>{challenge}</motion.li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div {...animationBtm} transition={{ duration: 1, delay: 1.2 }}>
            <h2 className="text-2xl font-semibold mb-4">Future Plans</h2>
            <ul className="list-disc list-inside text-lg mb-6">
              {project.futurePlans.map((plan, index) => (
                <motion.li 
                {...animationL}
                transition={{
                  duration: .8,
                  delay: index+1 * .6,
                }}
                key={index}>{plan}</motion.li>
              ))}
            </ul>
          </motion.div>

          
          <Link
            to="/#projects"
            className="btn btn-primary flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
