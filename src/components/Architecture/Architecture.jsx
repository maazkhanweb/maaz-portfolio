/*
 * File: src/components/Architecture/Architecture.jsx
 * Description: Solar Management System architecture section.
 */

import { motion } from "framer-motion";
import "./Architecture.css";

const architecture = [
  {
    number: "01",
    title: "DATA INPUT",
    subtitle: "SOLAR + WAPDA",
    description:
      "Solar readings, inverter data and WAPDA bills enter the system through structured inputs and uploaded documents.",
  },
  {
    number: "02",
    title: "APPLICATION",
    subtitle: "REACT + LARAVEL",
    description:
      "The frontend communicates with a structured backend API responsible for validation, business logic and system operations.",
  },
  {
    number: "03",
    title: "INTELLIGENCE",
    subtitle: "OCR + AI",
    description:
      "Bill images are processed through OCR and intelligent analysis to convert unstructured information into usable data.",
  },
  {
    number: "04",
    title: "INSIGHT",
    subtitle: "REPORTS + ANALYTICS",
    description:
      "Processed data becomes meaningful dashboards, comparisons, reports and performance insights.",
  },
];

const layers = [
  {
    number: "01",
    type: "CLIENT LAYER",
    title: "REACT",
    description: "Interface, dashboards, forms and data visualization.",
    className: "architecture-layer-react",
  },
  {
    number: "02",
    type: "APPLICATION LAYER",
    title: "LARAVEL",
    description: "APIs, authentication, validation and business logic.",
    className: "architecture-layer-laravel",
  },
  {
    number: "03",
    type: "DATA LAYER",
    title: "POSTGRESQL",
    description: "Structured storage for solar, inverter, bill and report data.",
    className: "architecture-layer-postgresql",
  },
  {
    number: "04",
    type: "INTELLIGENCE LAYER",
    title: "AI + OCR",
    description: "Document extraction, verification and intelligent analysis.",
    className: "architecture-layer-ai",
  },
];

const reveal = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const Architecture = () => {
  return (
    <section id="architecture" className="architecture-section">

      <div className="architecture-header">
        <div className="architecture-heading">

          <motion.div
            className="architecture-section-label"
            {...reveal}
          >
            <span>05</span>
            <i />
            <strong>SYSTEM ARCHITECTURE</strong>
          </motion.div>

          <motion.h2
            {...reveal}
            transition={{ duration: 0.8 }}
          >
            FROM RAW
            <br />
            DATA
            <br />
            <span>TO INTELLIGENCE.</span>
          </motion.h2>

          <motion.p
            className="architecture-description"
            {...reveal}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Solar Management System is designed as a connected
            software ecosystem where data moves through multiple
            layers before becoming useful information.
          </motion.p>

        </div>
      </div>

      <div className="architecture-flow">
        <div className="architecture-flow-line" />

        {architecture.map((item, index) => (
          <motion.div
            className="architecture-node"
            key={item.number}
            {...reveal}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="architecture-node-number">
              {item.number}
            </div>

            <div className="architecture-node-core">
              <span />
            </div>

            <div className="architecture-node-content">
              <small>{item.subtitle}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            {index < architecture.length - 1 && (
              <div className="architecture-node-arrow">→</div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="architecture-layers">
        {layers.map((layer, index) => (
          <motion.div
            className={`architecture-layer ${layer.className}`}
            key={layer.number}
            {...reveal}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <span className="architecture-layer-number">
              {layer.number}
            </span>

            <div className="architecture-layer-title">
              <small>{layer.type}</small>
              <strong>{layer.title}</strong>
            </div>

            <p>{layer.description}</p>

            <span className="architecture-layer-arrow">↗</span>
          </motion.div>
        ))}
      </div>

      <div className="architecture-footer">
        <span>DATA</span>
        <i>→</i>
        <span>PROCESSING</span>
        <i>→</i>
        <span>INTELLIGENCE</span>
        <i>→</i>
        <b>ACTIONABLE INSIGHTS</b>
      </div>

    </section>
  );
};

export default Architecture;