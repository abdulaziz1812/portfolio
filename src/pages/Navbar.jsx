import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (
    <>
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#skills">Skills</Link>
        </li>
        <li>
          <Link to="/#education">Education</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#experience">Experience</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </>
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 z-10 transition-all duration-400 w-full ${
        isScrolled ? "bg-base-300 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className=" max-w-5xl w-11/12 mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="/assets/Abdul_aziz_Abdul_mannan_Resume.pdf"
            download
            className={`btn ${
              isScrolled ? "btn-accent" : "btn-outline text-white"
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
