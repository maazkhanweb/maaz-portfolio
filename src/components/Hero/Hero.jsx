/*
 * File: src/components/Hero/Hero.jsx
 * Description: Main portfolio hero section.
 */

import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import ThreeScene from "../ThreeScene/ThreeScene";
import "./Hero.css";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-status">
        <div className="hero-status-left">
          <span className="hero-status-dot" />
          <span>SYSTEM ONLINE</span>
        </div>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="hero-container">
        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span>01</span>
            <i />
            <strong>FULL-STACK DEVELOPER</strong>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            SYSTEMS.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            I design and develop modern digital products,
            intelligent systems and practical software
            solutions that solve real-world problems.
          </motion.p>

          <motion.div
            className="hero-technologies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span>REACT</span>
            <i>·</i>
            <span>LARAVEL</span>
            <i>·</i>
            <span>POSTGRESQL</span>
            <i>·</i>
            <span>AI</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <button
              type="button"
              className="hero-primary-button"
              onClick={() => scrollTo("projects")}
            >
              <span>VIEW MY WORK</span>
              <FiArrowUpRight />
            </button>

            <button
              type="button"
              className="hero-secondary-button"
              onClick={() => scrollTo("contact")}
            >
              <span>CONTACT ME</span>
              <FiArrowUpRight />
            </button>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <a
              href="https://github.com/maazkhanweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/maaz-ali-974350429/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
          </motion.div>

        </div>

        <motion.div
          className="hero-three-wrapper"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-three-label">
            <span>INTERACTIVE OBJECT</span>
            <i />
            <strong>3D</strong>
          </div>

          <ThreeScene />

          <div className="hero-three-info">
            <span>ROTATE / EXPLORE</span>
            <span>THREE.JS</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <FiArrowDown />
        </div>

        <div className="hero-location">
          <span>BASED IN</span>
          <strong>PAKISTAN</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;