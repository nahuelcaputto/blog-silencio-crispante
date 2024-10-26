import React, { useEffect, useState } from "react";
import Projects from "../Projects/projects";
import Relato from "../Relato/Relato";
import { Element } from "react-scroll";

export default function Landing() {
  return (
    <div
      className="bg-black text-white"
      style={{ width: "100%", margin: "auto" }}
    >
      <section>
        <Element name="Home" />
        <div className="presentation">
          <h1>
            Silencio Crispante<strong className="pres-dot">.</strong>
          </h1>
        </div>
      </section>
      <section className="relato-section">
        <Element name="Relato" />
        <Relato />
      </section>
      {/* <section className="projects-section">
        <Element name="Projects" />
        <Projects />
      </section> */}
    </div>
  );
}
