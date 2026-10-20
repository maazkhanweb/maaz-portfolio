/*
|--------------------------------------------------------------------------
| File: src/App.jsx
| Description: Main portfolio layout with persistent light/dark theme.
|--------------------------------------------------------------------------
*/

import { useEffect, useState } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import SolarProject from "./components/SolarProject/SolarProject";
import Architecture from "./components/Architecture/Architecture";
import Projects from "./components/Projects/Projects";
import Capabilities from "./components/Capabilities/Capabilities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className={`portfolio ${darkMode ? "dark" : "light"}`}>
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <ScrollIndicator />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="stack">
          <Stack />
        </section>

        <section id="solar-project">
          <SolarProject />
        </section>

        <section id="architecture">
          <Architecture />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="capabilities">
          <Capabilities />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;