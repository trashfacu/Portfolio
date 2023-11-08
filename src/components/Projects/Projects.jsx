import React from "react";
import "./Projects.css"; // Make sure to replace "Projects.css" with your CSS file path
import FolderOpenRoundedIcon from "./FolderOpenRoundedIcon";
import ExternalLinks from "./ExternalLinks";

function Projects() {
  const projects = {
    "Rant My Game": {
      link: "https://github.com/trashfacu/RantMyGameAPI.git",
      open: "Your open link here",
      desc:
        "A Game Review Platform developed for gaming enthusiasts, allowing them to share and explore game reviews. Built using Spring Boot, Hibernate, and MySQL for the Backend with a basic front-end with ReactJS.",
      techStack: "Java, Spring, SQL, Hibernate",
    },
        "Clinica Odontologica": {
      link: "https://github.com/trashfacu/ClinicaOdontologica",
      open: "Your open link here",
      desc:
        "This was a final project, the objective was to simulate a system of high low and modification of a dental office, both shifts, patients and dentists. Using Spring Hibernate JPA for the correct functioning and CRUD operations.",
        techStack: "Java, Spring, SQL, Hibernate"
    },    "Personal Portfolio": {
        link: "https://github.com/trashfacu/Portfolio",
        open: "Your open link here",
        desc: "This same portfolio is created by me. Based on a previous design in Figma. Following a structure both in design and code to make it easy to maintain. It is built with Vanilla JavaScript with intentions to migrate the site to React in the future.",
        techStack: "React, CSS",
      },
  };

  return (
    <section id="id-projects">
      <div className="ProjectsContainer">
        <p className="SectionName">
          <span style={{ color: "#3da57f" }}>/</span> Projects
        </p>
        <div className="ProjectsCardsContainer">
          {Object.keys(projects).map((key, i) => (
            <div key={i} className="ProjectCard">
              <div className="folder-icon">
                <FolderOpenRoundedIcon style={{ fontSize: 35 }}></FolderOpenRoundedIcon>
              </div>
              <ExternalLinks githubLink={projects[key].link} openLink={projects[key].open} />
              <p className="ProjectCardTitle">{key}</p>
              <p className="ProjectCardDescription">{projects[key].desc}</p>
              <p className="ProjectCardFooter">{projects[key].techStack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
