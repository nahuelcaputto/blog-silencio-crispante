import React, { useEffect, useState } from "react";
import Projects from "../Projects/projects";
import AboutMe from "../AboutMe/aboutMe";
import Contact from "../Contact/contact";
import AtachBar from "./atachBar";
import Certifications from "../Certifications/certifications";
import { Element } from "react-scroll";
import ToggleDarkMode from "./toggleDarkMode";

export default function Landing() {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setCurrentTheme(theme);
  }, []);

  return (
    <div
      className={`bg-${currentTheme}`}
      style={{ width: "100%", margin: "auto" }}
    >
      <AtachBar />
      <section>
        <Element name="Home" />
        <div className="presentation">
          {/* <ToggleDarkMode
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          /> */}
          <h1>
            Hola<strong className="pres-dot">.</strong>
          </h1>
          <div className="presentation-sub">
            <p>
              mi nombre es <strong>Nahuel</strong>
            </p>
            <p>
              soy un <strong>desarrollador web full stack</strong>
            </p>
            <p>
              de <strong>Buenos Aires</strong> para el mundo
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <Element name="About" />
        <AboutMe />
      </section>
      <section className="projects-section">
        <Element name="Projects" />
        <Projects />
      </section>
      <section className="certifications-section">
        <Element name="Certifications" />
        <Certifications />
      </section>
      <section>
        <Element name="Contact" />
        <Contact />
      </section>
    </div>
  );
}
