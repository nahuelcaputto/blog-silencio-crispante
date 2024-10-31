import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useExitSectionOpen } from "../../useExitSectionOpen";

export default function App() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const navRef = useRef(document.createElement("nav"));
  const navRefOutside = useRef(document.createElement("div"));

  useExitSectionOpen(
    navRef,
    () => setSideBar(false),
    {
      outside: true,
      escape: true,
    },
    navRefOutside
  );

  const scrollInto = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={sidebar ? "navbar" : "navbar sticky-top"}
        ref={navRefOutside}
      >
        <Link to="#" className="menu-bars">
          <i
            className="fa fa-bars text-white"
            aria-hidden="true"
            onClick={showSideBar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"} ref={navRef}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i class="fa fa-times text-white bg-navbar" aria-hidden="true" />
            </Link>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("intro")}
            >
              <span>Intro</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("closet")}
            >
              <span>Closet</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("pausa")}
            >
              <span>Pausa Poética</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("colegio")}
            >
              <span>Colegio</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("cronica")}
            >
              <span>Crónica del Hombre Gay</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("dedicatoria")}
            >
              <span>Dedicatoria</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("ensayos")}
            >
              <span>Ensayos</span>
            </div>
          </li>
          <li className="navbar-toggle">
            <div
              className="menu-items text-white"
              onClick={() => scrollInto("diario")}
            >
              <span>Diario del Angel Urbano</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
