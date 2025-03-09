import { useState } from "react";
import myphoto from "../assets/pdp.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects.json";
export default function HomePage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <div className="flex flex-col gap-y-16">
      {/* Landing Page */}
      <section className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full border-b-2 border-[var(--color-border)] py-4 px-6 md:px-12 lg:px-[7%] h-18">
        {/* NAME */}
        <div className="text-2xl font-bold cursor-pointer">AT</div>

        {/* Navigation */}
        <div className="flex items-center">
          {/* Hamburger Icon with Animation */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden cursor-pointer">
            <motion.div
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
              className="w-8 h-8 flex flex-col justify-between"
            >
              {/* Top Line */}
              <motion.div
                className="bg-white h-1 rounded"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 13 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Middle Line (Hidden when menu is open) */}
              <motion.div
                className="bg-white h-1 rounded"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Bottom Line */}
              <motion.div
                className="bg-white h-1 rounded"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -15 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>

          {/* NAV LINKS (Hidden on small screens) */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/about" className="text-text-secondary hover:text-white px-2">
              About
            </a>
            <div className="h-8 w-[1.5px] bg-border"></div>
            <a href="/projects" className="text-text-secondary hover:text-white px-2">
              Projects
            </a>
            <div className="h-8 w-[1.5px] bg-border"></div>
            <a href="/contact" className="text-text-secondary hover:text-white px-2">
              Contact
            </a>
            <div className="bg-white px-3 py-1 rounded-lg font-medium text-background">
              <a href="/resume">Resume</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Shown when hamburger is clicked) */}
      {/* Blur Overlay (When menu is open) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inset-0 bg-black/50 backdrop-blur-md z-40 absolute top-18 w-screen h-full"
          onClick={() => setIsMenuOpen(false)} // Clicking the overlay closes the menu
        ></motion.div>
      )}

      {/* Animated Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-[4.1rem] left-0 w-full bg-background text-white flex flex-col items-center space-y-4 px-6 py-4 z-50 `}
      >
        <a href="/about" className="block px-2 py-1">About</a>
        <a href="/projects" className="block px-2 py-1">Projects</a>
        <a href="/contact" className="block px-2 py-1">Contact</a>
        <a href="/resume" className="block px-2 py-1 bg-white text-black rounded-lg">Resume</a>
      </motion.div>

      {/* HERO SECTION */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between w-full min-h-screen px-6 md:px-12 lg:px-[7%] gap-6 py-6">
        {/* Text Content */}
        <div className="flex flex-col space-y-4 w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white hover:underline transition-all duration-500 cursor-pointer">
            Hi, I'm Ahmed Trabelsi.
          </h1>
          <p className="text-xl font-bold text-text-secondary">
            Computer Science Student | Full Stack Developer | Hackathon Enthusiast | Curious Learner
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link to="contact" className="bg-white text-background px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Get in Touch!
            </Link>
            <Link to="projects" className="bg-background text-white border-2 border-border px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                View Projects
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 flex justify-center">
          <img
            src={myphoto}
            alt="Ahmed Trabelsi"
            className="h-80 md:h-96 w-96 object-cover"
          />
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="flex flex-col gap-y-6 w-full min-h-screen px-6 md:px-12 lg:px-[7%] md:w-1/2 lg:w-2/3" id="About">
      <h1 className="font-bold text-[4rem] text-white">About Me :</h1>
      
      <p className="text-text-secondary text-2xl">
      I’m an aspiring software developer based in Tunis, Tunisia, currently pursuing a Computer Science Engineering degree at the <b className="text-white">National School of Computer Science (ENSI)</b>, 
      set to graduate in <b className="text-white">2026</b>. 
      What I love most about technology is the freedom it gives me to explore my curiosity, bring ideas to life, and solve real-world problems.
        <br/><br/>
      Whether it’s building innovative software, diving into AI and machine learning, or competing in hackathons, 
      I’m always looking for new challenges that push me further. 
      I thrive on learning, experimenting, and collaborating with like-minded people to create meaningful impact through technology.
      </p>
    </section>
    
    {/* Projects Section */}
    <section className="flex flex-col gap-y-6 w-full min-h-screen px-6 md:px-12 lg:px-[7%]" id="Projects">
      <h1 className="font-bold text-[4rem] text-white">Projects :</h1>
      
      <p className="text-text-secondary text-lg w-full lg:w-2/3 md:w-1/2">
      I have worked on a variety of projects ranging from web development to machine learning and AI. 
      Here are some of my recent projects that I’m proud of:
      </p>
      <hr className="w-full border-text-secondary opacity-20"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card */}
        
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    </div>
  );
}
