import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollTopButton";
export default function Ecommerce() {
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
      <section className="flex flex-col justify-start px-6 md:px-12 lg:px-[20%] gap-12 py-6 pt-18">
        {/* Title & Overview */}
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight text-white mt-4">
          SetUpSprint: A High-Quality PC Components E-commerce Platform
        </h1>
        <div>
          <img
            src="./images/ecommerce.png"
            alt="Ecommerce"
            className="w-full rounded-lg"
          />
        </div>
        <p className="text-xl text-text-secondary">
          SetUpSprint is an e-commerce website developed using HTML, CSS,
          JavaScript, PHP, and MySQL. It serves as a dedicated platform for PC
          enthusiasts looking to build their ideal setups by offering a wide
          range of high-quality PC components. The site features a web scraping
          module that automatically gathers product data and updates the MySQL
          database, ensuring that the catalog remains fresh and accurate.
          <br />
          <br />
          With a simple, user-friendly design, SetUpSprint provides essential
          features like secure user authentication, dynamic product listings, a
          seamless shopping cart, and an intuitive checkout process.
        </p>
        <hr className="bg-border h-[1px] outline-none border-none" />
        {/* Key Features */}
        <div>
          <h2 className="text-[3rem] text-white font-medium">Key Features</h2>
          <ul className="list-disc flex flex-col gap-y-2 text-xl list-outside pl-5 mt-2 text-text-secondary">
            <li>User Authentication for secure sign-up, login, and logout.</li>
            <li>Dynamic Product Listings categorized by type and brand.</li>
            <li>
              Integrated Web Scraping Module to load product data dynamically using <span className="text-white font-medium">Beautifulsoup</span>.
            </li>
            <li>Shopping Cart and Seamless Checkout Process.</li>
            <li>User Profile for managing orders and account details.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[3rem] text-white font-medium">Video Demo</h2>
          <iframe
            src="https://drive.google.com/file/d/1I5cI4qAhnhip99CPLuo-0v1Wjxn7809G/preview"
            width="100%"
            height={480}
            frameBorder="0"
            allow="autoplay"
            className="rounded-lg mt-2"
            title="Video Demo"
            
          ></iframe>
        </div>
      </section>

      <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
        <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </>
  );
}
