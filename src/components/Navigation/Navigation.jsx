/*
|--------------------------------------------------------------------------
| File: src/components/Navigation/Navigation.jsx
| Description: Responsive navigation with light/dark theme controls.
|--------------------------------------------------------------------------
*/

import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";

import "./Navigation.css";

const navigationItems = [
  { label: "ABOUT", target: "about" },
  { label: "STACK", target: "stack" },
  { label: "PROJECTS", target: "projects" },
  { label: "CONTACT", target: "contact" },
];

const sections = [
  "home",
  "about",
  "stack",
  "solar-project",
  "architecture",
  "projects",
  "capabilities",
  "contact",
];

const Navigation = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 180;
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && position >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(target);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActiveSection("home");
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <header className="navigation">
      <div className="navigation-inner">
        <button
          type="button"
          className="navigation-logo"
          onClick={handleLogoClick}
          aria-label="Go to homepage"
        >
          <span className="navigation-logo-name">
            MAAZ ALI
          </span>

          <span className="navigation-logo-role">
            PORTFOLIO
          </span>
        </button>

        <nav
          className="navigation-links"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={`navigation-link ${
                activeSection === item.target ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.target);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navigation-actions">
          <div
            className="navigation-theme"
            aria-label="Theme selection"
          >
            <button
              type="button"
              className={`navigation-theme-button ${
                !darkMode ? "active" : ""
              }`}
              onClick={() => setDarkMode(false)}
              aria-label="Switch to light mode"
              title="Light Mode"
            >
              <FiSun />
            </button>

            <button
              type="button"
              className={`navigation-theme-button ${
                darkMode ? "active" : ""
              }`}
              onClick={() => setDarkMode(true)}
              aria-label="Switch to dark mode"
              title="Dark Mode"
            >
              <FiMoon />
            </button>
          </div>

          <a
            href="#contact"
            className="navigation-cta"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
          >
            <span>LET&apos;S TALK</span>
            <FiArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          className="navigation-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`navigation-mobile ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="navigation-mobile-inner">
          <div className="navigation-mobile-heading">
            <span>MAAZ ALI / PORTFOLIO</span>
            <i />
          </div>

          <nav
            className="navigation-mobile-links"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item, index) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={`mobile-link ${
                  activeSection === item.target ? "active" : ""
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.target);
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item.label}</strong>

                <FiArrowUpRight />
              </a>
            ))}
          </nav>

          <div className="navigation-mobile-controls">
            <button
              type="button"
              className={`navigation-theme-button ${
                !darkMode ? "active" : ""
              }`}
              onClick={() => setDarkMode(false)}
              aria-label="Switch to light mode"
            >
              <FiSun />
              <span>LIGHT</span>
            </button>

            <button
              type="button"
              className={`navigation-theme-button ${
                darkMode ? "active" : ""
              }`}
              onClick={() => setDarkMode(true)}
              aria-label="Switch to dark mode"
            >
              <FiMoon />
              <span>DARK</span>
            </button>
          </div>

          <div className="navigation-mobile-footer">
            <span>FULL-STACK DEVELOPER</span>
            <span>REACT / LARAVEL / AI</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;