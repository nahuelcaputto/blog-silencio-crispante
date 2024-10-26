import React from "react";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const projectsObj = require("./projects.json");
  const projects = projectsObj.projects;
  AOS.init({
    mirror: false,
    once: false,
    easing: "ease-in-out",
  });
  return (
    <>
      <h1
        className="projects-title"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        proyectos<strong>.</strong>
      </h1>
      <div className="container m-10">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 card-deck">
          {projects &&
            projects.map((project, i) => (
              <div
                className="col project-card my-2"
                key={i}
                data-aos="zoom-in-up"
                data-aos-duration={500 + i * 200}
              >
                <div className="card shadow">
                  <div className="img-container">
                    <img
                      className="card-img img-fluid"
                      src={project.urlImage}
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body projects-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.descriptionES}</p>
                    <div className="d-flex justify-content-between align-items-end project-buttons">
                      {project.github ? (
                        <a
                          href={project.github}
                          class="btn btn-outline-primary mx-1"
                        >
                          Github
                        </a>
                      ) : (
                        <></>
                      )}
                      {project.urlPage ? (
                        <a
                          href={project.urlPage}
                          class="btn btn-outline-primary mx-1"
                        >
                          Deploy
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
