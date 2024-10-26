import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function App() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  //scrollers
  const homeScroll = () => Scroll.scroller.scrollTo("Home", { offset: -100 });
  const projectsScroll = () =>
    Scroll.scroller.scrollTo("Projects", { offset: 50 });
  const relatoScroll = () => Scroll.scroller.scrollTo("Relato", { offset: 0 });
  const certificationsScroll = () =>
    Scroll.scroller.scrollTo("Certifications", { offset: 0 });

  return (
    <>
      <div className={sidebar ? "navbar" : "navbar sticky-top"}>
        <Link to="#" className="menu-bars">
          <i
            className="fa fa-bars text-white"
            aria-hidden="true"
            onClick={showSideBar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i class="fa fa-times text-white bg-navbar" aria-hidden="true" />
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/" className="menu-items text-white" onClick={homeScroll}>
              <span>Inicio</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link
              to="/"
              className="menu-items text-white"
              onClick={relatoScroll}
            >
              <span>Relato</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link
              to="/"
              className="menu-items text-white"
              onClSck={projectsScroll}
            >
              <span>Ensayos</span>
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link
              to="/"
              className="menu-items text-white"
              onClick={certificationsScroll}
            >
              <span>Obra</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
