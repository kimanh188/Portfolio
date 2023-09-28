import "./../projects.style.css";

import { HeaderButtonGroup } from "./../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { ProjectCard } from "./../../../components/ProjectCard/projectCard.component";

export function ProjectsView() {
  return (
    <>
      <HeaderButtonGroup />
      <section className="projects">
        <h1 className="project-section-title">Projects</h1>
        <p className="project-section-text">
          Here is a selection of stuff I&apos;ve built:
        </p>

        <ProjectCard />
      </section>
    </>
  );
}
