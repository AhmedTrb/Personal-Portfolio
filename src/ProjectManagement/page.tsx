import schemaImage from "./images/schema.png";
import { Link } from "react-router-dom";
import previewImage from "./images/preview.png";
type Props = {};

export default function ProjectManagement({}: Props) {
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
      <div className="flex flex-col justify-start px-6 md:px-12 lg:px-[20%] gap-6 py-6 pt-18">
        {/* Title & Overview */}
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold">
          Project Management Graph Tool:
          <br /> A Visual Approach to Task Dependencies
        </h1>
        <p className="text-xl text-text-secondary">
          Managing complex projects requires more than just listing tasks—it
          requires understanding task dependencies to ensure smooth execution.
          Traditional project management tools often lack intuitive ways to
          visualize these dependencies, leading to inefficiencies and
          bottlenecks.
          <br />
          <br />
          This project introduces a graph-based project management tool, where
          tasks are represented as nodes and dependencies as edges, helping
          users determine execution order and identify blocking tasks easily.
        </p>
        <hr className="bg-border h-[1px] outline-none border-none" />
        {/* Cover Image (Showcase App UI) */}
        <div>
          <img
            src={previewImage}
            alt="Project Management UI"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* The Problem */}
        <div>
          <h2 className="text-[3rem] text-white font-medium">The Problem</h2>
          <p className="text-xl text-text-secondary">
            Many project management tools struggle to clearly represent task
            dependencies, leading to challenges such as:
          </p>
          <ul className="list-disc flex flex-col gap-y-2 text-xl list-outside pl-5 mt-2 text-text-secondary">
            <li>Unclear execution order of tasks</li>
            <li>Difficulties in identifying blocking tasks</li>
            <li>Lack of a visual, intuitive representation of projects</li>
          </ul>
        </div>
        {/* OBJECTIVES */}
        <div className="flex flex-col py-6">
          <h2 className="text-[3rem] text-white font-medium">Objectives :</h2>
          <ul className="list-disc list-outside pl-5 mt-2 text-2xl text-text-secondary">
            <li>
              Develop a task visualization system that clearly represents
              dependencies.
            </li>
            <li>
              Implement automated task ordering using Kahn’s algorithm
              (topological sorting).
            </li>
            <li>Provide Team collaboration with Team management system</li>
            <li>
              Ensure secure authentication with refresh and access tokens.
            </li>
            <li>
              Deploy the system using Next.js (frontend), Express.js (backend),
              and PostgreSQL (database).
            </li>
          </ul>
        </div>

        {/* FEATURES */}
        <div className="flex flex-col py-6">
          <h2 className="text-[3rem] text-white font-medium">Features :</h2>
          <ul className="list-disc list-outside pl-5 mt-2 text-2xl text-text-secondary">
            <li>
              Task Dependency Visualization: Displays tasks as a directed graph.
            </li>
            <li>
              Automated Execution Order: Uses Kahn’s algorithm to determine task
              ranking.
            </li>
            <li>
              Role-Based Access Control: Admins can create projects and assign
              tasks; team members can track dependencies.
            </li>
            <li>
              Secure Authentication System: Implements JWT-based access and
              refresh tokens for user sessions.
            </li>
            <li>
              Deployment: Frontend on Vercel, backend on Render, database on
              Neon.
            </li>
          </ul>
        </div>
        {/* Technical Overview */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[3rem] text-white font-medium border-b-2 border-border">
            Technical Overview :
          </h2>
          {/* Database Schema & Relationships */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[2rem] text-primary font-medium">
              Database Schema & Relationships
            </h2>
            <p className="text-xl text-text-secondary">
              To model projects, tasks, users, and dependencies, the following
              PostgreSQL schema was designed:
            </p>
            {/* Database Schema Image */}
            <div className="flex justify-center">
              <img
                src={schemaImage}
                alt="Database Schema"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Kahn's Algorithm Implementation */}
          <div className="flex flex-col gap-6 py-6">
            <h2 className="text-[2rem] text-primary font-medium">
              Kahn’s Algorithm for Task Ordering
            </h2>
            <p className="text-xl text-text-secondary">
              The application utilizes Kahn’s algorithm to determine task
              execution order. This ensures that tasks with dependencies are
              scheduled correctly. The process follows these steps:
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 text-2xl text-text-secondary">
              <li>
                Calculate the in-degree (number of dependencies) for each task.
              </li>
              <li>Push tasks with zero dependencies into a queue.</li>
              <li>
                Iteratively process the queue, reducing the in-degree of
                dependent tasks.
              </li>
              <li>Continue until all tasks are sorted.</li>
            </ul>
            {/* Kahn’s Algorithm Diagram */}
            {/* <div className="flex justify-center">
              <img
                src="./images/kahn-algorithm.png"
                alt="Kahn's Algorithm"
                className="rounded-lg shadow-lg"
              />
            </div> */}
          </div>

          {/* Node Visualization Based on Task Degree */}
          <div className="flex flex-col gap-6 py-6">
            <h2 className="text-[2rem] text-white font-medium">
              Node Visualization Based on Task Dependencies
            </h2>
            <p className="text-xl text-text-secondary">
              Tasks are positioned based on their dependencies to create a clear
              and organized graph. Tasks with no dependencies appear first,
              while those that depend on others are placed further down. Using
              Kahn’s algorithm, each task is assigned a level based on how many
              dependencies it has, ensuring a logical order and making it easy
              to see which tasks must be completed first.
            </p>
            {/* Node Placement Diagram */}
            <div className="flex justify-center">
              <img
                src="./images/projectM.png"
                alt="Task Visualization"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Authentication System */}
          <div className="flex flex-col gap-6 py-6">
            <h2 className="text-[2rem] text-white font-medium">
              Secure Authentication Flow
            </h2>
            <p className="text-xl text-text-secondary">
              The authentication system follows a secure JWT-based approach with
              access and refresh tokens. The process ensures safe user sessions
              and smooth token renewal.
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 text-2xl text-text-secondary">
              <li>
                Users log in and receive an access token (short-lived) and
                refresh token (long-lived).
              </li>
              <li>Requests are authenticated using the access token.</li>
              <li>
                When the access token expires, the refresh token is used to
                obtain a new one.
              </li>
              <li>If the refresh token is invalid, the user is logged out.</li>
            </ul>
            {/* Authentication Flow Diagram */}
            {/* <div className="flex justify-center">
              <img
                src="./images/authentication-flow.png"
                alt="Authentication Flow"
                className="rounded-lg shadow-lg"
              />
            </div> */}
          </div>

          {/* Conclusion & Key Takeaways */}
          <div className="flex flex-col gap-6 py-6">
            <h2 className="text-[3rem] text-white font-medium border-b-2 border-border">
              Conclusion & Key Takeaways
            </h2>
            <p className="text-xl text-text-secondary">
              This project combines graph-based visualization with automated
              task ordering to simplify project management. By clearly
              displaying task dependencies and execution order, it helps teams
              identify bottlenecks, streamline workflows, and improve overall
              project tracking. With secure authentication and team
              collaboration features, it provides an efficient and intuitive way
              to manage complex projects.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <a
            href="https://project-management-web-app-lilac.vercel.app"
            className="text-blue-500 text-[1.5rem] font-bold hover:underline"
          >
            👉 Live Demo Here
          </a>
          <p className="text-md text-text-secondary mt-2">
            📧 Test Account: test@gmail.com | 🔒 Password: 1111
          </p>
        </div>
      </div>
      <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
        <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
      </footer>
    </>
  );
}
