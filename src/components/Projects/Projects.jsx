
/*
|--------------------------------------------------------------------------
| File: src/components/Projects/Projects.jsx
| Description: Responsive portfolio project gallery with live links.
|--------------------------------------------------------------------------
*/

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "SOLAR MANAGEMENT SYSTEM",
    category: "ENERGY MANAGEMENT",
    description:
      "An intelligent solar monitoring and reporting platform with inverter management, WAPDA bills and energy analysis.",
    stack: "REACT / LARAVEL / POSTGRESQL / AI",
    image: "/images/projects/solar-managementcover.png",
    url: "https://solar-management-system-tau.vercel.app/",
  },
  {
    number: "02",
    title: "PROFESSOR'S DASTARKHWAN",
    category: "FOOD & HOSPITALITY",
    description:
      "A digital food and hospitality platform built to deliver a convenient online experience.",
    stack: "LIVE WEB APPLICATION",
    image: "/images/projects/professors-dastarkhwancover.png",
    url: "https://professors-dastarkhwan-frontend.vercel.app/",
  },
  {
    number: "03",
    title: "NOOR VIRTUAL ACADEMY",
    category: "ONLINE EDUCATION",
    description:
      "An online academy experience designed to present educational services and learning opportunities.",
    stack: "LIVE WEB APPLICATION",
    image: "/images/projects/noor-virtual-academycover.png",
    url: "https://noor-vitrtual-academy-tu69.vercel.app/",
  },
  {
    number: "04",
    title: "MOBILE PHYSIO",
    category: "HEALTHCARE",
    description:
      "A digital healthcare platform for presenting mobile physiotherapy services.",
    stack: "LIVE WEB APPLICATION",
    image: "/images/projects/mobile-physiocover.png",
    url: "https://mobile-physio.vercel.app/",
  },
  {
    number: "05",
    title: "KHAN MOBILES",
    category: "MOBILE & TECHNOLOGY",
    description:
      "A mobile retail website showcasing a digital shopping experience for mobile devices.",
    stack: "LIVE WEB APPLICATION",
    image: "/images/projects/khan-mobilescover.png",
    url: "https://khan-mobiles.vercel.app/",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-heading">
          <motion.div
            className="projects-section-label"
            {...reveal}
          >
            <span>06</span>
            <i />
            <strong>SELECTED WORK</strong>
          </motion.div>

          <motion.p
            className="projects-kicker"
            {...reveal}
          >
            THINGS I BUILD
          </motion.p>

          <motion.h2
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            PROJECTS
            <br />
            <span>WITH PURPOSE.</span>
          </motion.h2>

          <motion.p
            className="projects-description"
            {...reveal}
          >
            Explore a selection of live digital products and
            applications. Open any project to experience it live.
          </motion.p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            className={`project-card project-card-${index + 1}`}
            key={project.number}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live project: ${project.title}`}
            {...reveal}
            transition={{
              duration: 0.55,
              delay: (index % 2) * 0.1,
            }}
          >
            <div className="project-card-image">
              <img
                src={project.image}
                alt={`${project.title} website screenshot`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              <span className="project-card-number">
                {project.number}
              </span>

              <span className="project-card-image-action">
                <FiArrowUpRight />
              </span>
            </div>

            <div className="project-card-content">
              <div className="project-card-meta">
                <span>{project.category}</span>
                <span className="project-live-status">
                  <i />
                  LIVE
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-card-stack">
                {project.stack}
              </div>

              <div className="project-card-link">
                <span>VIEW PROJECT</span>
                <FiArrowUpRight />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="projects-footer"
        {...reveal}
      >
        <span>DESIGNED</span>
        <i>+</i>
        <span>DEVELOPED</span>
        <i>+</i>
        <span>DEPLOYED</span>
        <i>→</i>
        <strong>DIGITAL EXPERIENCES</strong>
      </motion.div>
    </section>
  );
};

export default Projects;
