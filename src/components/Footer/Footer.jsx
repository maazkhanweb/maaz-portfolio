/*
 * File: src/components/Footer/Footer.jsx
 * Description: Portfolio footer with navigation and branding.
 */

import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";

const navigation = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["PROJECTS", "projects"],
  ["CONTACT", "contact"],
];

const Footer = () => {
  const scrollTo = (target) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <button
            className="footer-brand-mark"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            M
          </button>

          <div className="footer-brand-text">
            <strong>MAAZ</strong>
            <span>/ PORTFOLIO</span>
          </div>
        </div>

        <nav
          className="footer-navigation"
          aria-label="Footer navigation"
        >
          {navigation.map(([label, target]) => (
            <button
              key={target}
              type="button"
              onClick={() => scrollTo(target)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="footer-top-button"
          onClick={scrollTop}
        >
          <span>BACK TO TOP</span>
          <FiArrowUpRight aria-hidden="true" />
        </button>

      </div>

      <div className="footer-middle">

        <div className="footer-statement">
          <span>REACT</span>
          <i>·</i>
          <span>LARAVEL</span>
          <i>·</i>
          <span>POSTGRESQL</span>
          <i>·</i>
          <span>AI</span>
        </div>

        <p>
          DESIGNING AND BUILDING DIGITAL SYSTEMS
          <br />
          THAT SOLVE REAL PROBLEMS.
        </p>

      </div>

      <div className="footer-bottom">
        <span>© 2026 MAAZ. ALL RIGHTS RESERVED.</span>
        <span>BUILT WITH PURPOSE.</span>
        <span>FULL-STACK DEVELOPER</span>
      </div>

    </footer>
  );
};

export default Footer;