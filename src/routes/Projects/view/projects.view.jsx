import "./../projects.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { ProjectSlider } from "../../../components/ProjectSlider/projectSlider.component";

import { Project1 } from "./../../../components/ProjectSlider/ProjectCard/project1.component";
import { Project2 } from "./../../../components/ProjectSlider/ProjectCard/project2.component";
import { Project3 } from "./../../../components/ProjectSlider/ProjectCard/project3.component";
import { Project4 } from "./../../../components/ProjectSlider/ProjectCard/project4.component";
import { Project5 } from "./../../../components/ProjectSlider/ProjectCard/project5.component";
import { Project6 } from "./../../../components/ProjectSlider/ProjectCard/project6.component.jsx";

export function ProjectsView({ isDarkMode }) {
  return (
    <>
      <section className={`projects-section ${isDarkMode ? "dark" : ""}`}>
        <HeaderButtonGroup />
        <div className="projects-section-content">
          <h1 className="project-section-title">Projects</h1>
          <p className="project-section-text">
            Here is a selection of my projects. <br />
            For a more detailed overview of my work, including projects in
            progress, please visit my{" "}
            <a
              className="github-link"
              href="https://github.com/kimanh188?tab=repositories"
              target="blank"
            >
              GitHub page
            </a>
            .
          </p>

          <ProjectSlider />

          <div className="project-cards-container-desktop">
            <Project6 />
            <Project1 />
            <Project3 />
            <Project2 />
            <Project4 />
            <Project5 />
          </div>
        </div>
      </section>
    </>
  );
}
