/*
 * File: src/components/Capabilities/Capabilities.jsx
 * Description: Software development capabilities section.
 */

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./Capabilities.css";

const capabilities = [
  {
    number: "01",
    category: "FRONTEND",
    title: "INTERFACES",
    description:
      "Modern, responsive and interactive interfaces focused on clarity, usability and meaningful user experiences.",
    stack: "REACT / VITE / JAVASCRIPT",
  },
  {
    number: "02",
    category: "BACKEND",
    title: "SYSTEMS",
    description:
      "Structured APIs, authentication, business logic and backend architecture designed to support complete applications.",
    stack: "LARAVEL / PHP / REST API",
  },
  {
    number: "03",
    category: "DATA",
    title: "ARCHITECTURE",
    description:
      "Reliable relational data models designed for complex applications, reporting and long-term scalability.",
    stack: "POSTGRESQL / SQL / DATABASE",
  },
  {
    number: "04",
    category: "INTELLIGENCE",
    title: "AI + OCR",
    description:
      "Intelligent document processing and AI-powered workflows that transform raw information into useful digital data.",
    stack: "AI / OCR / GEMINI",
  },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const Capabilities = () => {
  return (
    <section id="capabilities" className="capabilities-section">

      <div className="capabilities-header">

        <motion.div
          className="capabilities-label"
          {...reveal}
        >
          <span>07</span>
          <i />
          <strong>CAPABILITIES</strong>
        </motion.div>

        <div className="capabilities-heading">

          <motion.p
            className="capabilities-kicker"
            {...reveal}
          >
            WHAT I BRING
          </motion.p>

          <motion.h2
            {...reveal}
            transition={{ duration: 0.8 }}
          >
            I BUILD
            <br />
            <span>COMPLETE</span>
            <br />
            <span>SYSTEMS.</span>
          </motion.h2>

          <motion.p
            className="capabilities-description"
            {...reveal}
          >
            From the first interface to the database behind it,
            I work across the complete software stack to turn
            ideas into functional digital products.
          </motion.p>

        </div>
      </div>

      <div className="capabilities-grid">

        {capabilities.map((item, index) => (
          <motion.article
            key={item.number}
            className={`capability-card capability-card-${index + 1}`}
            {...reveal}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
          >
            <span className="capability-number">
              {item.number}
            </span>

            <span className="capability-category">
              {item.category}
            </span>

            <div className="capability-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.stack}</span>
            </div>

            <button
              type="button"
              className="capability-arrow"
              aria-label={`Explore ${item.title}`}
            >
              <FiArrowUpRight />
            </button>
          </motion.article>
        ))}

      </div>

      <motion.div
        className="capabilities-bottom"
        {...reveal}
      >
        <span>FRONTEND</span>
        <i>+</i>
        <span>BACKEND</span>
        <i>+</i>
        <span>DATABASE</span>
        <i>+</i>
        <span>AI</span>
        <i>=</i>
        <strong>DIGITAL SYSTEMS</strong>
      </motion.div>

    </section>
  );
};

export default Capabilities;