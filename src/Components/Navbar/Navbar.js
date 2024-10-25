import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import CV from "../../CV/Nahuel Caputto CV.pdf";

export default function App() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  //scrollers
  const homeScroll = () => Scroll.scroller.scrollTo("Home", { offset: -100 });
  const projectsScroll = () =>
    Scroll.scroller.scrollTo("Projects", { offset: 50 });
  const aboutScroll = () => Scroll.scroller.scrollTo("About", { offset: 0 });
  const certificationsScroll = () =>
    Scroll.scroller.scrollTo("Certifications", { offset: 0 });
  const contactScroll = () =>
    Scroll.scroller.scrollTo("Contact", { offset: -350 });

  return (
    <>
      <div className={sidebar ? "navbar" : "navbar sticky-top"}>
        <Link to="#" className="menu-bars">
          <i className="fa fa-bars" aria-hidden="true" onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i class="fa fa-times" aria-hidden="true" />
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/" className="menu-items" onClick={homeScroll}>
              <span>Inicio</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/" className="menu-items" onClick={aboutScroll}>
              <span>Sobre mi</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/" className="menu-items" onClick={projectsScroll}>
              <span>Proyectos</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/" className="menu-items" onClick={certificationsScroll}>
              <span>Certificaciones</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/" className="menu-items" onClick={contactScroll}>
              <span>Contacto</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <a href={CV} download className="menu-items">
              <span>Descargar CV</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
