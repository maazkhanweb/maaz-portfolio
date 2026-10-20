/*
 * File: src/components/About/About.jsx
 * Description: About section with profile image and developer principles.
 */

import { motion } from "framer-motion";
import "./About.css";
import maazImage from "../../assets/images/maaz-ali.jpg";

const principles = [
  {
    number: "01",
    title: "FULL-STACK",
    description:
      "Modern interfaces, powerful APIs and complete application architecture.",
  },
  {
    number: "02",
    title: "SYSTEMS",
    description:
      "Structured databases, business logic and scalable software solutions.",
  },
  {
    number: "03",
    title: "INTELLIGENCE",
    description:
      "AI, OCR and automation integrated into practical digital products.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-header">

        <div className="about-section-label">
          <span>02</span>
          <i />
          <strong>WHO I AM</strong>
        </div>

        <div className="about-heading">

          <motion.p
            className="about-kicker"
            {...reveal}
          >
            BEYOND THE CODE
          </motion.p>

          <motion.h2
            {...reveal}
            transition={{ duration: 0.8 }}
          >
            I DON&apos;T JUST
            <br />
            <span>WRITE CODE.</span>
          </motion.h2>

          <motion.h3
            {...reveal}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I BUILD SYSTEMS.
          </motion.h3>

          <motion.p
            className="about-description"
            {...reveal}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            I&apos;m a full-stack developer focused on building modern
            digital experiences, scalable applications and intelligent
            systems that solve real-world problems.
          </motion.p>

        </div>
      </div>

      <div className="about-body">

        {/* PROFILE */}

        <motion.div
          className="about-profile"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-profile-image">

            <img
              src={maazImage}
              alt="Maaz Ali - Full-Stack Developer"
            />

            <div className="about-profile-overlay" />

            <div className="about-profile-corner about-profile-corner-top" />
            <div className="about-profile-corner about-profile-corner-bottom" />

          </div>

          <div className="about-profile-info">

            <div>
              <span>NAME</span>
              <strong>MAAZ ALI</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>FULL-STACK DEVELOPER</strong>
            </div>

          </div>
        </motion.div>

        {/* CONTENT */}

        <div className="about-content">

          <motion.div
            className="about-quote"
            {...reveal}
            transition={{ duration: 0.8 }}
          >
            <span className="quote-mark">“</span>

            <p>
              Good software is not only about
              <br />
              how it looks. It&apos;s about how
              <br />
              intelligently everything works
              <br />
              behind the screen.
            </p>

            <div className="quote-line" />
          </motion.div>

          <div className="about-principles">

            {principles.map((item, index) => (
              <motion.article
                className="about-principle"
                key={item.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="principle-number">
                  {item.number}
                </div>

                <div className="principle-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>

                <div className="principle-arrow">
                  ↗
                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </div>

      <motion.div
        className="about-bottom-line"
        initial={{ opacity: 0, scaleX: 0.7 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

    </section>
  );
};

export default About;