import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollTopButton";
import githubIcon from "../assets/icons/github.svg";

import marketResearchCover from "./market_research_cover.png";
import appDashboard from "./report.png";

export default function MarketResearchCaseStudy() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center w-full border-b-2 border-border bg-background fixed z-10 py-4 px-6 md:px-12 lg:px-[7%] h-18">
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
          AI-Powered Market Research:
          <br /> Transforming Web Data into Actionable Insights
        </h1>
        <p className="text-xl text-text-secondary">
          In today's rapidly evolving digital landscape, businesses are
          overwhelmed by an exponential volume of unstructured text data from
          online sources like customer reviews, forums, and social media. This
          data holds invaluable insights into consumer perceptions, market
          trends, and product opportunities. However, manually processing and
          synthesizing this information is an{" "}
          <b className="text-white">
            time-consuming, and often incomplete task.
          </b>
          <br />
          <br />
          This project introduces an AI-powered Market Research and Analysis
          Tool, built on a{" "}
          <b className="text-white">
            Retrieval Augmented Generation (RAG) architecture
          </b>
          . It automates the extraction, analysis, and synthesis of vast amounts
          of web data, delivering structured, actionable market reports that
          empower businesses to make informed strategic decisions.
        </p>
        <hr className="bg-border h-[1px] outline-none border-none" />

        {/* Cover Image (Showcase App UI) */}
        <div className="my-6">
          <img
            src={marketResearchCover}
            alt="Market Research Dashboard UI"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* The Problem */}
        <div className="min-h-screen flex flex-col justify-center px-4 md:px-0 mt-10">
          {" "}
          {/* Added alignment classes and padding */}
          <h2 className="text-[2.5rem] lg:text-[3.5rem] text-white font-medium mb-6">
            The Problem :
          </h2>{" "}
          {/* Added mb-6 for spacing */}
          <p className="text-2xl text-text-secondary">
            {" "}
            {/* Added max-w for readability */}
            Businesses face significant challenges in understanding market
            dynamics due to the sheer volume and unstructured nature of online
            text data. Key issues include:
          </p>
          <ul className="list-disc flex flex-col gap-y-4 text-2xl list-outside pl-5 mt-8 text-text-secondary  text-left">
            <li>
              <b className="text-white">Information Overload:</b> Businesses are
              drowning in a sea of customer reviews, forum discussions, and
              social media posts, making it impossible to manually extract
              value.
            </li>
            <li>
              <b className="text-white">Manual Analysis Limitations:</b>{" "}
              Traditional market research methods are slow, expensive, and often
              fail to capture the nuanced insights crucial for competitive
              advantage.
            </li>
            <li>
              <b className="text-white">Lack of Actionable Insights:</b> Raw
              data doesn't directly translate into clear, summarized, and
              actionable business intelligence, requiring extensive human
              interpretation.
            </li>
            <li>
              <b className="text-white">Scalability Issues:</b> The inability to
              process and analyze data at the speed and scale required by modern
              markets leads to missed opportunities and outdated information.
            </li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="min-h-screen flex flex-col justify-center  px-4 md:px-0 mt-10">
          <h2 className="text-[2.5rem] lg:text-[3.5rem] text-white font-medium mb-6">
            The Solution :
          </h2>
          <p className="text-2xl text-text-secondary ">
            Our AI-Powered Market Research Tool directly addresses these
            challenges by providing a comprehensive, automated solution that:
          </p>
          <ul className="list-disc flex flex-col gap-y-4 text-2xl list-outside pl-5 mt-8 text-text-secondary  text-left">
            {" "}
            {/* Adjusted mt-2 to mt-8, added text-left */}
            <li>
              <b className="text-white">Automates Data Processing:</b>{" "}
              Efficiently cleans, analyzes, and enriches vast amounts of raw
              text data from the web.
            </li>
            <li>
              <b className="text-white">Leverages Advanced AI:</b> Combines
              intelligent information retrieval with powerful Large Language
              Model generation to create meaningful reports.
            </li>
            <li>
              <b className="text-white">Delivers Actionable Insights:</b>{" "}
              Synthesizes complex data into concise, structured market reports,
              ready for immediate business use.
            </li>
            <li>
              <b className="text-white">Offers Intuitive Access:</b> Provides a
              user-friendly web interface for seamless query submission,
              insightful visualization, and convenient history management.
            </li>
          </ul>
        </div>

        {/* Technical Overview */}
        <div className="mt-10">
          <h2 className="text-[2.5rem] lg:text-[3.5rem] text-white font-medium">
            Technical Overview :
          </h2>
          <p className="text-2xl text-text-secondary mt-4">
            Our solution is built upon a modular and scalable architecture,
            designed to handle the complexities of data ingestion, processing,
            and intelligent report generation. The core technology stack
            includes: <b className="text-white">Python</b> for backend logic and
            NLP, with <b className="text-white">Flask</b> for RESTful APIs. The
            frontend is developed using <b className="text-white">React.js</b>,
            styled with <b className="text-white">Tailwind CSS</b>.{" "}
            <b className="text-white">ChromaDB</b> serves as the vector
            database. AI functionalities are powered by{" "}
            <b className="text-white">Google Generative AI</b> models,
            orchestrated via <b className="text-white">LangChain</b>.
          </p>
          <hr className="bg-border h-[1px] outline-none border-none mt-6" />
          {/* Data Pipeline */}
          <h3 className="text-[2rem] text-white font-medium mt-10">
            Data Pipeline :
          </h3>{" "}
          {/* Increased mt for more spacing */}
          <p className="text-2xl text-text-secondary mt-2">
            The backbone of our system is an{" "}
            <b className="text-white">end-to-end data processing pipeline</b>{" "}
            responsible for transforming raw, unstructured web data into a rich,
            queryable knowledge base. This involves:
          </p>
          <ul className="list-disc flex flex-col gap-y-4 text-xl list-outside pl-5 mt-4 text-text-secondary">
            <li>
              <b className="text-white">Data Ingestion & Cleaning:</b>{" "}
              Collecting text data from diverse online sources (e.g., Amazon
              reviews, Reddit comments), followed by robust pre-processing
              (noise removal, tokenization, lemmatization, stop-word removal)
              using Python and spaCy.
            </li>
            <li>
              <b className="text-white">Advanced NLP Analysis:</b> Applying
              sophisticated techniques like VADER for global sentiment, spaCy
              for Aspect-Based Sentiment Analysis (ABSA) and Named Entity
              Recognition (NER), and scikit-learn for TF-IDF/LDA topic modeling.
              This enriches each document with valuable metadata.
            </li>
            <li>
              <b className="text-white">Vectorization & Storage:</b> Converting
              analyzed text into high-dimensional numerical embeddings using
              Google Generative AI Embedding models, then storing all vectorized
              documents and their metadata in ChromaDB for efficient semantic
              search.
            </li>
          </ul>
          {/* Optional: Image for Data Pipeline Diagram */}
          {/* <div className="my-6 flex justify-center">
            <img
              src={dataPipelineDiagram}
              alt="Data Processing Pipeline Diagram"
              className="rounded-lg shadow-lg object-contain w-full max-w-4xl"
            />
          </div> */}
          {/* RAG Chain */}
          <h3 className="text-[2rem] text-white font-medium mt-10">
            RAG Chain & Report Generation :
          </h3>{" "}
          {/* Increased mt for more spacing */}
          <p className="text-2xl text-text-secondary mt-2">
            The core intelligence of the system resides in its{" "}
            <b className="text-white">
              Retrieval Augmented Generation (RAG) chain
            </b>
            , orchestrated by LangChain. This module is responsible for:
          </p>
          <ul className="list-disc flex flex-col gap-y-4 text-2xl list-outside pl-5 mt-4 text-text-secondary">
            <li>
              <b className="text-white">Query Processing & Retrieval:</b> Taking
              user queries, applying various retrieval strategies (similarity,
              sentiment-filtered) to fetch the most relevant documents from
              ChromaDB.
            </li>
            <li>
              <b className="text-white">Contextual Generation:</b> Feeding the
              retrieved, relevant context to the Google Generative AI (LLM),
              enabling it to synthesize information, generate structured
              insights, and minimize hallucinations.
            </li>
            <li>
              <b className="text-white">Structured Output:</b> Through careful
              prompt engineering, the LLM generates a comprehensive market
              report in a standardized JSON format, facilitating easy parsing
              and display in the UI.
            </li>
          </ul>
          {/* Optional: Image for RAG Architecture Diagram */}
          {/* <div className="my-6 flex justify-center">
            <img
              src={ragArchitectureDiagram}
              alt="RAG Architecture Diagram"
              className="rounded-lg shadow-lg object-contain w-full max-w-4xl"
            />
          </div> */}
        </div>

        {/* App UI */}
        <div className="my-6 flex justify-center">
          <img
            src={appDashboard}
            alt="Market Research App Dashboard"
            className="rounded-lg shadow-lg object-contain h-[500px] w-full max-w-4xl" // Adjusted styling for better fit
          />
        </div>
        {/* Target Audience */}
        <div className="mt-10">
          <h2 className="text-[2.5rem] lg:text-[3.5rem] text-white font-medium">
            Target Audience :
          </h2>
          <p className="text-2xl text-text-secondary mt-4">
            This solution is particularly useful for:
          </p>
          <ul className="list-disc flex flex-col gap-y-4 text-2xl list-outside pl-5 mt-4 text-text-secondary">
            <li>
              <b className="text-white">Businesses launching new products:</b>{" "}
              Gaining a clear view on the current state of products, their pain
              points, and advantages in the market to ensure success.
            </li>
            <li>
              <b className="text-white">Brand Monitoring:</b> Companies needing
              to continuously track their brand reputation and user opinions
              across various online platforms.
            </li>
            <li>
              <b className="text-white">Product Development:</b> Identifying
              customer pain points with current products to inform and enhance
              the creation of new offerings.
            </li>
          </ul>
        </div>
        {/* Conclusion */}
        <div className="mt-10">
          <h2 className="text-[2.5rem] lg:text-[3.5rem] text-white font-medium">
            Conclusion :
          </h2>
          <hr className="bg-border h-[1px] outline-none border-none mt-6" />
           <p className="text-2xl text-text-secondary mt-4">
            This AI-powered Market Research Tool represents a significant step
            towards democratizing access to deep market insights. By automating
            the complex process of data analysis and report generation, it
            empowers businesses to react faster to market changes, understand
            customer needs more profoundly, and make data-driven decisions with
            unprecedented efficiency.
          </p>
          <p className="text-2xl text-text-secondary mt-4">
            Finally, this project was developed as part of our final year project
            at the National School of Computer Science in collaboration with my
            teammates:{" "}
            <a
              href="https://www.linkedin.com/in/nassim-younes-4127502a4/"
              className="hover:underline text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nassim Younes
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/mohamed-amine-gannouni-b0a873298/"
              className="hover:underline text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mohamed Amine Gannouni
            </a>
            .
          </p>
        </div>

        {/* GitHub Link */}
        <div className="mt-8 w-fit">
          <a
            href="https://github.com/AhmedTrb/RAG-Solution-for-Market-Research/" // **IMPORTANT: Replace with your actual GitHub repository link**
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex items-center gap-x-2 text-white border-2 border-border px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            <img alt="github" src={githubIcon} className="w-6 h-6" /> View
            Project on GitHub
          </a>
        </div>
      </section>

      <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
        <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </>
  );
}
