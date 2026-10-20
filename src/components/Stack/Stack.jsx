/*
 * File: src/components/Stack/Stack.jsx
 * Description: Interactive technology stack section.
 */

import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiVite,
  SiGit,
  SiGithub,
  SiGoogle,
} from "react-icons/si";

import "./Stack.css";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "REACT",
    category: "FRONTEND",
    icon: <SiReact />,
    description:
      "Building modern, component-based interfaces and interactive web applications.",
  },

  {
    name: "JAVASCRIPT",
    category: "LANGUAGE",
    icon: <SiJavascript />,
    description:
      "Creating dynamic application logic, interactions and browser-based experiences.",
  },

  {
    name: "LARAVEL",
    category: "BACKEND",
    icon: <SiLaravel />,
    description:
      "Developing structured APIs, authentication systems and backend business logic.",
  },

  {
    name: "PHP",
    category: "LANGUAGE",
    icon: <SiPhp />,
    description:
      "Server-side development and backend application architecture.",
  },

  {
    name: "POSTGRESQL",
    category: "DATABASE",
    icon: <SiPostgresql />,
    description:
      "Designing reliable relational databases for complex digital systems.",
  },

  {
    name: "PYTHON",
    category: "LANGUAGE",
    icon: <SiPython />,
    description:
      "Building automation, data processing and intelligent application workflows.",
  },

  {
    name: "DJANGO",
    category: "BACKEND",
    icon: <SiDjango />,
    description:
      "Developing secure and structured Python-based web applications.",
  },

  {
    name: "VITE",
    category: "TOOLING",
    icon: <SiVite />,
    description:
      "Fast modern development environment for frontend applications.",
  },

  {
    name: "GIT",
    category: "VERSION CONTROL",
    icon: <SiGit />,
    description:
      "Managing source code, branches and development workflows.",
  },

  {
    name: "GITHUB",
    category: "COLLABORATION",
    icon: <SiGithub />,
    description:
      "Hosting projects and maintaining professional software repositories.",
  },

  {
    name: "GEMINI AI",
    category: "AI",
    icon: <SiGoogle />,
    description:
      "Integrating AI-powered workflows, analysis and intelligent application features.",
  },
];

/* =========================================================
   STACK COMPONENT
========================================================= */

const Stack = () => {
  return (
    <section
      id="stack"
      className="stack-section"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="stack-header">

        {/* ===============================================
            SECTION LABEL
        =============================================== */}

        <motion.div
          className="stack-label"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>03</span>

          <i />

          <strong>
            TECHNOLOGY STACK
          </strong>
        </motion.div>

        {/* ===============================================
            MAIN HEADING
        =============================================== */}

        <div className="stack-heading">

          <motion.p
            className="stack-kicker"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            TOOLS OF THE TRADE
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            THE
            <br />

            <span>STACK</span>

            <br />

            BEHIND IT.
          </motion.h2>

          <motion.p
            className="stack-description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            A practical technology stack selected to build
            complete, scalable and intelligent digital systems.
          </motion.p>

        </div>

      </div>

      {/* =================================================
          TECHNOLOGY GRID
      ================================================= */}

      <div className="stack-grid">

        {technologies.map((technology, index) => (
          <motion.article
            className="stack-card"
            key={technology.name}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* =========================================
                CARD TOP
            ========================================= */}

            <div className="stack-card-top">

              <span className="stack-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="stack-card-category">
                {technology.category}
              </span>

            </div>

            {/* =========================================
                ICON
            ========================================= */}

            <div className="stack-card-icon">
              {technology.icon}
            </div>

            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="stack-card-content">

              <h3>
                {technology.name}
              </h3>

              <p>
                {technology.description}
              </p>

            </div>

            {/* =========================================
                HOVER LINE
            ========================================= */}

            <div className="stack-card-line" />

          </motion.article>
        ))}

      </div>

      {/* =================================================
          STACK FOOTER
      ================================================= */}

      <motion.div
        className="stack-footer"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <span>FRONTEND</span>

        <i>→</i>

        <span>BACKEND</span>

        <i>→</i>

        <span>DATABASE</span>

        <i>→</i>

        <span>AI</span>

        <i>→</i>

        <strong>
          COMPLETE SYSTEM
        </strong>

      </motion.div>

    </section>
  );
};

export default Stack;