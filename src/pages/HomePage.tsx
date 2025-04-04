import { useState } from "react";
import myphoto from "../assets/pdp.jpg";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects.json";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import emailIcon from "../assets/icons/gmail.svg";
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
                to="contact"
                smooth={true}
                duration={500}
                className="text-text-secondary cursor-pointer hover:text-white px-2"
              >
                Contact
              </ScrollLink>
              <div className="bg-white px-3 py-1 rounded-lg font-medium text-background">
                <a
                  href="https://drive.google.com/file/d/1uyU0vxEPrKkHQgCorzQxhFW9fbbt1UOv/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
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
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="block px-2 py-1 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="block px-2 py-1 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer px-2 py-1"
          >
            Contact
          </ScrollLink>
          <a
            href="https://drive.google.com/file/d/1uyU0vxEPrKkHQgCorzQxhFW9fbbt1UOv/view?usp=sharing"
            className="block px-2 py-1 bg-white text-black rounded-lg"
          >
            Resume
          </a>
        </motion.div>

        {/* HERO SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between w-full min-h-screen px-6 md:px-12 lg:px-[7%] gap-6 py-8">
          {/* Text Content */}
          <div className="flex flex-col space-y-4 w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white hover:underline transition-all duration-500 cursor-pointer">
              Hi, I'm Ahmed Trabelsi.
            </h1>
            <p className="text-xl font-bold text-text-secondary">
              Computer Science Student | Full Stack Developer | Hackathon
              Enthusiast | Curious Learner
            </p>

            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:ahmed.trabelsi@ensi-uma.tn"
                className="bg-white text-background px-4 py-2 rounded-lg font-medium cursor-pointer"
              >
                Get in Touch!
              </a>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="bg-background text-white border-2 border-border px-4 py-2 rounded-lg font-medium cursor-pointer"
              >
                View Projects
              </ScrollLink>
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
      <section
        className="flex flex-col gap-y-6 w-full  px-6 md:px-12 lg:px-[7%] md:w-1/2 lg:w-2/3"
        id="about"
      >
        <h1 className="font-bold text-[4rem] text-white">About Me :</h1>

        <p className="text-text-secondary text-2xl">
          I’m an aspiring software developer based in Tunis, Tunisia, currently
          pursuing a Computer Science Engineering degree at the{" "}
          <b className="text-white">
            National School of Computer Science (ENSI)
          </b>
          , set to graduate in <b className="text-white">2026</b>. What I love
          most about technology is the freedom it gives me to explore my
          curiosity, bring ideas to life, and solve real-world problems.
          <br />
          <br />
          Whether it’s building innovative software, diving into AI and machine
          learning, or competing in hackathons, I’m always looking for new
          challenges that push me further. I thrive on learning, experimenting,
          and collaborating with like-minded people to create meaningful impact
          through technology.
        </p>
      </section>
      {/* Activities section */}
      <section
        className="flex flex-col gap-y-6 w-full px-6 md:px-12 lg:px-[7%]"
        id="activities"
      >
        <h1 className="font-bold text-[4rem] text-white">Activities</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hackathons */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              🚀 Hackathons
            </h2>
            <p className="text-gray-300 mt-2">
              I thrive in fast-paced, collaborative environments where
              creativity meets technology. From building AI-driven solutions to
              tackling real-world problems, hackathons have shaped my skills and
              mindset.
            </p>
            <ul className="mt-4 text-gray-400">
              <li>
                🏆 <strong>TSYP12 AESS Challenge</strong> – 3rd Place
              </li>
              <li>
                ⚡ Multiple ENSI Hackathons – AI, Web, and Competitive
                Programming
              </li>
              <li>💡 Innovative projects in AI, ML, and Web</li>
            </ul>
          </div>

          {/* Competitions */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              🏅 Competitions
            </h2>
            <p className="text-gray-300 mt-2">
              I’ve put my problem-solving skills to the test in various coding
              and AI competitions, pushing my limits and refining my technical
              expertise.
            </p>
            <ul className="mt-4 text-gray-400">
              <li>
                🤖 <strong>Tunisian Olympiad in Programming</strong> – Early
                exposure to problem-solving
              </li>
              <li>
                📊 <strong>IEEE AESS Technical Challenge</strong> – AI-driven
                project competition
              </li>
              <li>🧠 Competitive programming contests & AI challenges</li>
            </ul>
          </div>

          {/* Leadership & Community */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              🌍 Leadership & Community
            </h2>
            <p className="text-gray-300 mt-2">
              Beyond coding, I actively contribute to the tech community,
              organizing events and mentoring peers.
            </p>
            <ul className="mt-4 text-gray-400">
              <li>
                🎤 <strong>IEEE ENSI Senior Member</strong> – Organized{" "}
                <strong>GODS 3.0</strong> & led hackathon teams
              </li>
              <li>
                📢 <strong>Open Startup Tunisia</strong> – Part of a startup
                building an MVP
              </li>
              <li>🤝 Knowledge-sharing & mentoring in software development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="flex flex-col gap-y-6 w-full  px-6 md:px-12 lg:px-[7%]"
        id="projects"
      >
        <h1 className="font-bold text-[4rem] text-white">Projects :</h1>

        <p className="text-text-secondary text-lg w-full lg:w-2/3 md:w-1/2">
          I have worked on a variety of projects ranging from web development to
          machine learning and AI. Here are some of my recent projects:
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
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((project, index) => (
              <motion.div
                key={index}
                variants={{
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
      <section
        className="flex flex-col gap-y-6 w-full  px-6 md:px-12 lg:px-[7%]"
        id="contact"
      >
        <hr className="w-full flex self-center border-text-secondary opacity-20" />
        <h1 className="font-bold text-[4rem] text-white">Contact Me :</h1>

        <p className="text-text-secondary text-2xl w-full lg:w-2/3">
          Currently looking for software engineering internship position.
          Whether you have any open opportunity or just want to say hi, my inbox
          is always open!
        </p>

        <div className="flex justify-start items-center gap-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/ahmed-trabelsi-42986116b/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="linkedin"
              color="white"
              className="w-12 h-12 cursor-pointer"
            />
          </a>
          <a href="https://github.com/AhmedTrb" target="_blank">
            <img
              src={githubIcon}
              alt="github"
              className="w-12 h-12 cursor-pointer"
              color="white"
            />
          </a>

          <a href="mailto:ahmed.trabelsi@ensi-uma.tn">
            <img
              src={emailIcon}
              alt="email"
              className="w-12 h-12 cursor-pointer"
              color="white"
            />
          </a>
        </div>
      </section>
      <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
        <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
      </footer>
    </div>
  );
}
