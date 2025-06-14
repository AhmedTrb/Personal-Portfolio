import { useState } from "react";
import myphoto from "../assets/pdp.jpg";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects.json";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import emailIcon from "../assets/icons/gmail.svg";

import ActivityCard from "../components/ActivityCard";
import activities from "../assets/activities.json";
import ScrollToTop from "../components/ScrollTopButton";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  // const softwareSkills = [
  //   "C/C++",
  //   "Java",
  //   "Python",
  //   "Git & GitHub",
  //   "Docker",
  //   "SQL / PL-SQL",
  //   "PostgreSQL",
  //   "MongoDB",
  //   "REST APIs",
  //   "Postman",
  // ];

  // const webMobileSkills = [
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "TypeScript",
  //   "React",
  //   "Next.js",
  //   "Node.js",
  //   "Express.js",
  //   "MERN Stack",
  //   "TailwindCSS",
  //   "Flutter",
  //   "Dart",
  // ];

  // const aiDataScienceSkills = [
  //   "Machine Learning",
  //   "Scikit-learn",
  //   "TensorFlow",
  //   "NLP",
  //   "Numpy",
  //   "Pandas",
  //   "Matplotlib",
  // ];
  return (
    <>
      <div className="flex flex-col gap-y-16 bg-background">
        {/* Landing Page */}
        <section className="flex flex-col h-screen">
          {/* Navbar */}
          <div className="fixed mb-18 flex justify-between items-center w-full border-b-2 border-border py-4 px-6 md:px-12 lg:px-[7%] h-18 z-50 bg-background">
            {/* NAME */}
            <div className="text-xl text-white lg:text-2xl font-bold cursor-pointer">
              AHMED TRABELSI
            </div>

            {/* Navigation */}
            <div className="flex items-center z-20">
              {/* Hamburger Icon with Animation */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden cursor-pointer"
              >
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
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-text-secondary cursor-pointer hover:text-white px-2"
                >
                  About
                </ScrollLink>
                <div className="h-8 w-[2px] bg-border"></div>
                <ScrollLink
                  to="experiences"
                  smooth={true}
                  duration={500}
                  className="text-text-secondary cursor-pointer hover:text-white px-2"
                >
                  Experiences
                </ScrollLink>

                <div className="h-8 w-[1.5px] bg-border"></div>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-text-secondary cursor-pointer hover:text-white px-2"
                >
                  Projects
                </ScrollLink>
                <div className="h-8 w-[1.5px] bg-border"></div>
                <ScrollLink
                  to="activities"
                  smooth={true}
                  duration={500}
                  className="text-text-secondary cursor-pointer hover:text-white px-2"
                >
                  Activities
                </ScrollLink>
                <div className="h-8 w-[1.5px] bg-border"></div>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-text-secondary cursor-pointer hover:text-white px-2"
                >
                  Contact
                </ScrollLink>
                <div className="bg-white px-3 py-1 rounded-lg font-medium text-background">
                  <a
                    href="https://drive.google.com/file/d/12DIWkuFASaXp53zeXgQ1EF4BiBs7Cq9Y/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </div>
              </div>
              {/* Mobile Menu (Shown when hamburger is clicked) */}
              {/* Blur Overlay (When menu is open) */}
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inset-0 bg-black/50 backdrop-blur-md z-49 absolute top-18 w-screen h-screen"
                  onClick={() => setIsMenuOpen(false)} // Clicking the overlay closes the menu
                ></motion.div>
              )}

              {/* Animated Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.3 }}
                className={`absolute top-[4.1rem] left-0 w-full bg-background text-white flex flex-col items-center space-y-4 px-6 py-4 z-50 `}
              >
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={400}
                  className="block px-2 py-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="experiences"
                  smooth={true}
                  duration={500}
                  className="block px-2 py-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                >
                  Experiences
                </ScrollLink>

                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="block px-2 py-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="activities"
                  smooth={true}
                  duration={800}
                  className="block px-2 py-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                >
                  Activities
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={900}
                  className="block cursor-pointer px-2 py-1"
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                >
                  Contact
                </ScrollLink>
                <a
                  href="https://drive.google.com/file/d/12DIWkuFASaXp53zeXgQ1EF4BiBs7Cq9Y/view?usp=sharing"
                  className="block px-2 py-1 bg-white text-black rounded-lg"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </div>

          {/* HERO SECTION */}

          
            <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between w-full min-h-screen px-6 md:px-12 lg:px-[7%] gap-6 py-8 mt-18">
            {/* Text Content */}
            <div className="relative flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12 lg:px-24 py-16">
              {/* Text Content */}
              <motion.div
                className="flex flex-col space-y-4 w-full md:w-2/3 lg:w-1/2 text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
                  },
                }}
              >
                <motion.h1
                  className="text-[3.5rem] md:text-[4.5rem] font-bold text-white hover:underline transition-all duration-500 cursor-pointer leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Hi, I&apos;m Ahmed Trabelsi.
                </motion.h1>

                <motion.p
                  className="text-xl font-bold text-text-secondary"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Computer Science Student | Full Stack Developer | Hackathon
                  Enthusiast | Curious Learner
                </motion.p>

                <motion.div
                  className="mt-6 flex justify-center md:justify-start space-x-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.a
                    href="mailto:ahmed.trabelsi@ensi-uma.tn"
                    className="bg-white text-background px-4 py-2 rounded-lg font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Get in Touch!
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ScrollLink
                      to="projects"
                      smooth={true}
                      duration={500}
                      className="bg-background text-white border-2 border-border px-4 py-2 rounded-lg font-medium cursor-pointer inline-block"
                    >
                      View Projects
                    </ScrollLink>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Image */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 flex justify-center">
                <img
                  src={myphoto}
                  alt="Ahmed Trabelsi"
                  className="h-80 md:h-96 w-96 object-cover"
                />
              </div>
            </div>
          </div>
          
        </section>

        {/* About Section */}
        <section
          className="flex flex-col gap-y-6 w-full min-h-screen  justify-center px-6 md:px-12 lg:px-[7%] "
          id="about"
        >
          <h1 className="font-bold text-[4rem] text-white">About Me :</h1>

          <p className="text-text-secondary text-xl md:text-2xl lg:w-2/3">
            I’m an aspiring software developer based in Tunis, Tunisia,
            currently pursuing a Computer Science Engineering degree at the{" "}
            <b className="text-white">
              National School of Computer Science (ENSI)
            </b>
            , set to graduate in <b className="text-white">2026</b>. What I love
            most about technology is the freedom it gives me to explore my
            curiosity, bring ideas to life, and solve real-world problems.
            <br />
            <br />
            Whether it’s building innovative software, diving into AI and
            machine learning, or competing in hackathons, I’m always looking for
            new challenges that push me further. I thrive on learning,
            experimenting, and collaborating with like-minded people to create
            meaningful impact through technology.
          </p>

          {/* <h1 className="font-bold text-[2rem] text-white">Technologies :</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Software Engineering" skills={softwareSkills} />
          <SkillCard
            title="Web & Mobile Development"
            skills={webMobileSkills}
          />
          <SkillCard title="AI & Data Science" skills={aiDataScienceSkills} />
        </div> */}
        </section>

        {/* Experiences */}
        <section
          className="flex flex-col gap-y-10 w-full pt-18 px-6 md:px-12 lg:px-[7%]"
          id="experiences">
            <h1 className="font-bold text-[4rem] text-white"> Experiences :</h1>
            <ExperienceTimeline />
          </section>
        {/* Projects Section */}


        <section
          className="flex flex-col gap-y-6 w-full pt-18  px-6 md:px-12 lg:px-[7%]"
          id="projects"
        >
          <h1 className="font-bold text-[4rem] text-white">Projects :</h1>

          <p className="text-text-secondary text-lg w-full lg:w-2/3">
            I have worked on a variety of projects ranging from web development
            to machine learning and AI. Here are some of my recent projects:
          </p>
          <hr className="w-full border-text-secondary opacity-20" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Ensures animation runs only once
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, duration: 1 },
              },
            }}
          >
            {projects
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    whileHover: { scale: 1.1 },
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
          </motion.div>
        </section>


        {/* Activities */}
        <section
          className="flex flex-col gap-y-6 w-full pt-18  px-6 md:px-12 lg:px-[7%]"
          id="activities"
        >
          <h1 className="font-bold text-[4rem] text-white">Activities :</h1>
          <p className="text-text-secondary text-lg w-full lg:w-2/3">
            Participating in hackathons and competitions has been my sandbox for
            experimentation, pushing me to learn new technologies on the fly.
            Each challenge taught me resilience under pressure and the value of
            rapid iteration.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {activities
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ActivityCard
                    bgImage={activity.bgImage}
                    title={activity.title}
                    description={activity.description}
                    date={activity.date}
                  />
                </motion.div>
              ))}
          </motion.div>
        </section>
        {/* Contact */}
        <section
          className="flex flex-col gap-y-6 w-full  px-6 md:px-12 lg:px-[7%]"
          id="contact"
        >
          <hr className="w-full flex self-center border-text-secondary opacity-20" />
          <h1 className="font-bold text-[4rem] text-white leading-tight">
            Contact Me :
          </h1>

          <p className="text-text-secondary text-2xl w-full lg:w-2/3">
            Currently looking for software engineering internship position.
            Whether you have any open opportunity or just want to say hi, my
            inbox is always open!
          </p>

          <div className="flex justify-start items-center gap-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/ahmed-trabelsi-42986116b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={linkedinIcon}
                alt="linkedin"
                className="w-12 h-12 cursor-pointer"
              />
            </a>

            <a
              href="https://github.com/AhmedTrb"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-12 h-12 cursor-pointer"
              />
            </a>

            <a
              href="mailto:ahmed.trabelsi@ensi-uma.tn"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={emailIcon}
                alt="email"
                className="w-12 h-12 cursor-pointer"
              />
            </a>
          </div>
        </section>
        <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
          <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
        </footer>
      </div>
      <ScrollToTop />
    </>
  );
}
