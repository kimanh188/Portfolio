import "./../projects.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { ProjectSlider } from "../../../components/ProjectSlider/projectSlider.component";

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
        </div>
      </section>
    </>
  );
}
