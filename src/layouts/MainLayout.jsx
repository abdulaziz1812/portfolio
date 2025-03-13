import React, { useEffect } from "react";
import Navbar from "../pages/Navbar";
import Banner from "../pages/Banner";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetailes";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import { useLocation } from "react-router-dom";
import Experience from "../pages/Experience";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      console.log(section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if no hash
    }
  }, [location]);

  return (
    <div>
      <Navbar></Navbar>
      <section id="home">
        <Banner></Banner>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skill></Skill>
      </section>
      <section id="education">
        <Education></Education>
      </section>
      <section id="experience">
      <Experience></Experience>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="contact">
      <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
