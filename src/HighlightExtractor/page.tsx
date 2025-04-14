import { Link } from "react-router-dom";
import coverPhoto from "./images/cover.png";
import app from './images/app.png';
import githubIcon from "../assets/icons/github.svg";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollTopButton";
export default function HighlightExtractor() {
  // Scroll to top on page load
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center w-full border-b-2 border-border bg-background fixed z-10 py-4 px-6 md:px-12 lg:px-[7%] h-18">
        {/* NAME */}
        <Link to={"/"}>
          <div className="text-2xl font-bold cursor-pointer">AT</div>
        </Link>
      </div>
      {/* CASE STUDY */}

      <section
        className="flex flex-col justify-start px-6 md:px-12 lg:px-[20%] gap-6 py-6 pt-18"
        id="case-study"
      >
        {/* Title & Overview */}
        <h1 className="text-[2rem] md:text-[3.5rem] mt-4 font-bold leading-tight text-white">
          PDF Highlight Extractor:
          <br /> Turning Scattered Highlights into Structured Knowledge
        </h1>
        <p className="text-xl text-text-secondary">
          As someone who frequently reads books, research papers, and technical
          documents in PDF format, I often highlight key insights and write
          comments to reflect on later. However, these highlights and notes
          remained buried within the PDFs—disconnected from my note-taking
          workflow and difficult to revisit.
          <br />
          <br />
          This project introduces a custom Python-based desktop tool that
          extracts highlights and comment popups from PDFs, organizes them by
          highlight color or user-defined criteria, and exports them into a
          structured Markdown file—ready to integrate into note-taking systems
          like Obsidian.
        </p>
        <hr className="bg-border h-[1px] outline-none border-none" />

        {/* Cover Image (Showcase App UI) */}
        <div className="my-6">
          <img
            src={coverPhoto}
            alt="PDF Highlight Extractor UI"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* The Problem */}
        <div>
          <h2 className="text-[3rem] text-white font-medium">The Problem :</h2>
          <p className="text-xl text-text-secondary">
            Despite highlighting valuable content in PDFs, most tools don’t make
            it easy to review or organize that information afterward. This leads
            to several issues:
          </p>
          <ul className="list-disc flex flex-col gap-y-2 text-xl list-outside pl-5 mt-4 text-text-secondary">
            <li>
              Highlights and comments becoming lost or forgotten after reading
            </li>
            <li>Difficulty transferring insights into structured notes</li>
            <li>
              No seamless integration with personal knowledge systems like
              Obsidian
            </li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="mt-10">
          <h2 className="text-[3rem] text-white font-medium">The Solution :</h2>
          <p className="text-xl text-text-secondary">
            The PDF Highlight Extractor is a lightweight Python-based tool that:
          </p>
          <ul className="list-disc flex flex-col gap-y-2 text-xl list-outside pl-5 mt-2 text-text-secondary">
            <li>Extracts all highlights and comment popups from PDF files</li>
            <li>
              Categorizes highlights based on color (e.g., yellow = notes, blue
              = reflections, pink = quotes)
            </li>
            <li>Exports the data as clean, well-structured Markdown files</li>
            <li>Seamlessly integrates with note-taking tools like Obsidian</li>
          </ul>
        </div>

        

        {/* How It Works */}
        <div className="mt-10">
          <h2 className="text-[3rem] text-white font-medium">How It Works :</h2>
          <ol className="list-decimal flex flex-col gap-y-2 text-xl list-outside pl-5 text-text-secondary">
            <li>
              User selects a PDF file containing highlights and/or comments
            </li>
            <li>
              The tool parses annotations using Python libraries like{" "}
              <code>PyMuPDF</code> or <code>pdfminer</code>
            </li>
            <li>
              Each highlight is categorized based on its color or custom tag
            </li>
            <li>The organized content is exported to a Markdown file</li>
            <li>
              The file can be opened and edited directly in Obsidian or any
              markdown editor
            </li>
          </ol>
        </div>
        {/* App UI */}
        <div className="my-6">
          <img
            src={app}
            alt="app UI"
            className="rounded-lg shadow-lg object-contain h-[500px]"
          />
        </div>
        <hr className="bg-border h-[1px] outline-none border-none"/>
        {/* Final Thoughts */}
        <div>
          <h2 className="text-[3rem] text-white font-medium">Final Thoughts</h2>
          <p className="text-xl text-text-secondary">
            This tool isn’t meant to be a one-size-fits-all solution. Instead,
            it’s a personal productivity tool designed to streamline my learning
            process and enhance knowledge retention. It reflects my belief that
            technology is most powerful when it’s tailored to real personal
            needs.
          </p>
        </div>

        {/* GitHub Link */}
        <div className="mt-8 w-fit">
        <a href="https://github.com/AhmedTrb/PDF_highlight_extractor" target="_blank"  className='bg-background flex items-center gap-x-2 text-white border-2 border-border px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300'><img alt='github' src={githubIcon} className='w-6 h-6'/> Download & Try on GitHub</a>
        </div>
      </section>
      <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
        <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </>
  );
}
