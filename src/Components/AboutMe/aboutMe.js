import React from "react";
import profilePic from "../../images/about-img.png";
import "./aboutMe.css";
import CV from "../../CV/Nahuel Caputto CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  AOS.init({
    mirror: false,
    once: false,
    easing: "ease-in-out",
    duration: 600,
  });
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="about-title" data-aos="fade-right">
          sobre mi<strong>.</strong>
        </h1>
        <div className="col-sm-12 col-md-6" data-aos="fade-right">
          <img className="ml-1" src={profilePic} alt="profile-pic" />
        </div>
        <div
          className="about-text col-sm-12 col-md-12 col-lg-6"
          data-aos="fade-left"
        >
          <h3>Full Stack Web Developer Jr</h3>
          <p>
            Me llamo <strong>Nahuel Caputto</strong>, vivo en la ciudad de{" "}
            <strong>Buenos Aires</strong>. Soy un{" "}
            <strong>desarrollador frontend</strong> con mas de 7 años de
            experiencia en el mundo IT.
          </p>
          <a className="down-cv" href={CV} download>
            <strong>Descargar CV</strong>
          </a>
          <div data-aos="fade-left">
            <h2>
              tecnologías<strong>.</strong>
            </h2>
            <p>
              Javascript <strong>|</strong> React <strong>|</strong> React
              Native <strong>|</strong> Redux <strong>|</strong> Node{" "}
              <strong>|</strong> Express
            </p>
            <p>
              Moleculer <strong>|</strong> Sequelize <strong>|</strong> GeneXus{" "}
              <strong>|</strong> PostgreSQL <strong>|</strong> MySQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
