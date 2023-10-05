import "./../projects.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { ProjectSlider } from "../../../components/ProjectSlider/projectSlider.component";

import { Project1 } from "./../../../components/ProjectSlider/ProjectCard/project1.component";
import { Project2 } from "./../../../components/ProjectSlider/ProjectCard/project2.component";
import { Project3 } from "./../../../components/ProjectSlider/ProjectCard/project3.component";
import { Project4 } from "./../../../components/ProjectSlider/ProjectCard/project4.component";
import { Project5 } from "./../../../components/ProjectSlider/ProjectCard/project5.component";

export function ProjectsView({ isDarkMode }) {
  return (
    <>
      <section className={`projects-section ${isDarkMode ? "dark" : ""}`}>
        <HeaderButtonGroup />
        <div className="projects-section-content">
          <h1 className="project-section-title">Projects</h1>
          <p className="project-section-text">
            Here is a selection of stuff I&apos;ve built:
          </p>

          <ProjectSlider />

          <div className="project-cards-container-desktop">
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
            <Project5 />
          </div>
        </div>
      </section>
    </>
  );
}
