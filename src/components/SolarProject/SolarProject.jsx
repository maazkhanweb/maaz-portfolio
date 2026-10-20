/*
 * File: src/components/SolarProject/SolarProject.jsx
 * Description: Featured Solar Management System project.
 */

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDatabase,
  FiCpu,
  FiFileText,
  FiActivity,
} from "react-icons/fi";
import "./SolarProject.css";

const features = [
  {
    icon: <FiActivity />,
    title: "SOLAR MONITORING",
    text: "Track solar generation, inverter readings and system performance through a centralized platform.",
  },
  {
    icon: <FiFileText />,
    title: "OCR BILL PROCESSING",
    text: "Extract useful information from WAPDA bill images and convert documents into structured data.",
  },
  {
    icon: <FiCpu />,
    title: "AI ANALYSIS",
    text: "Use intelligent processing to verify, analyze and generate meaningful insights from energy data.",
  },
  {
    icon: <FiDatabase />,
    title: "CENTRALIZED DATA",
    text: "Store solar, inverter, bill and reporting information in a structured PostgreSQL database.",
  },
];

const metrics = [
  ["AI", "POWERED ANALYSIS"],
  ["OCR", "DOCUMENT PROCESSING"],
  ["API", "BACKEND ARCHITECTURE"],
  ["∞", "SCALABLE DATA"],
];

const SolarProject = () => {
  const handleExploreSystem = () => {
    document
      .getElementById("architecture")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="solar-project-section" id="solar-project">

      <div className="solar-project-hero">

        <div className="solar-project-copy">

          <motion.div
            className="solar-project-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>04</span>
            <i />
            <strong>FEATURED PROJECT</strong>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SOLAR
            <br />
            <span>MANAGEMENT</span>
            <br />
            SYSTEM.
          </motion.h2>

          <motion.p
            className="solar-project-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A production-focused platform designed to manage solar
            energy data, inverter readings, WAPDA bills, OCR processing,
            AI analysis and intelligent reporting through one connected
            digital system.
          </motion.p>

          <div className="solar-project-tech">
            <span>REACT</span>
            <i>+</i>
            <span>LARAVEL</span>
            <i>+</i>
            <span>POSTGRESQL</span>
            <i>+</i>
            <span>AI</span>
          </div>

        </div>

        <motion.div
          className="solar-system-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="solar-visual-glow" />

          <div className="solar-dashboard">

            <div className="solar-dashboard-top">
              <div>
                <span>SOLAR MANAGEMENT</span>
                <strong>ENERGY OVERVIEW</strong>
              </div>

              <div className="solar-live">
                <b />
                LIVE
              </div>
            </div>

            <div className="solar-dashboard-main">

              <div className="solar-energy-ring">
                <div className="solar-ring-inner">
                  <span>84%</span>
                  <small>SYSTEM EFFICIENCY</small>
                </div>
              </div>

              <div className="solar-chart">
                <div className="solar-chart-lines">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <span key={item} />
                  ))}
                </div>

                <div className="solar-chart-line">
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <i key={item} />
                  ))}
                </div>
              </div>

            </div>

            <div className="solar-dashboard-stats">
              <div>
                <small>GENERATION</small>
                <strong>24.8 kWh</strong>
              </div>

              <div>
                <small>CONSUMPTION</small>
                <strong>18.4 kWh</strong>
              </div>

              <div>
                <small>SAVINGS</small>
                <strong>32.6%</strong>
              </div>
            </div>

          </div>

          <div className="solar-floating-card solar-floating-card-one">
            <small>INVERTER</small>
            <strong>ONLINE</strong>
            <span>●</span>
          </div>

          <div className="solar-floating-card solar-floating-card-two">
            <small>AI ANALYSIS</small>
            <strong>READY</strong>
            <span>↗</span>
          </div>

        </motion.div>

      </div>

      <div className="solar-metrics">
        {metrics.map(([value, label]) => (
          <div className="solar-metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="solar-features">
        {features.map((feature) => (
          <article className="solar-feature" key={feature.title}>
            <div className="solar-feature-icon">
              {feature.icon}
            </div>

            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="solar-project-cta">
        <div>
          <small>FLAGSHIP SYSTEM</small>

          <h3>
            BUILT TO TURN <span>ENERGY DATA</span> INTO DECISIONS.
          </h3>
        </div>

        <button type="button" onClick={handleExploreSystem}>
          <span>EXPLORE SYSTEM</span>
          <FiArrowUpRight />
        </button>
      </div>

    </section>
  );
};

export default SolarProject;