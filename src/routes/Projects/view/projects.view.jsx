import "./../projects.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { ProjectSlider } from "../../../components/ProjectSlider/projectSlider.component";
import { ProjectCard } from "../../../components/ProjectSlider/ProjectCard/projectCard.component";

export function ProjectsView({ isDarkMode }) {
  const projectTechIcons1 = ["fa-html5", "fa-css3-alt", "fa-sass"];
  const projectTechIcons2 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];
  const projectTechIcons3 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];
  const projectTechIcons4 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];
  const projectTechIcons5 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];

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
            <ProjectCard
              id={"project1"}
              imgSrc={"project-img-ex.jpg"}
              projectName={"Project Name 1"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              projectTechIcons={projectTechIcons1.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={"https://www.google.com"}
              projectSourceLink={"https://www.google.com"}
            />

            <ProjectCard
              id={"project2"}
              imgSrc={"project-img-ex.jpg"}
              projectName={"Project Name 2"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              projectTechIcons={projectTechIcons2.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={"https://www.google.com"}
              projectSourceLink={"https://www.google.com"}
            />

            <ProjectCard
              id={"project3"}
              imgSrc={"project-img-ex.jpg"}
              projectName={"Project Name 3"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              projectTechIcons={projectTechIcons3.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={"https://www.google.com"}
              projectSourceLink={"https://www.google.com"}
            />

            <ProjectCard
              id={"project4"}
              imgSrc={"project-img-ex.jpg"}
              projectName={"Project Name 4"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              projectTechIcons={projectTechIcons4.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={"https://www.google.com"}
              projectSourceLink={"https://www.google.com"}
            />

            <ProjectCard
              id={"project5"}
              imgSrc={"project-img-ex.jpg"}
              projectName={"Project Name 5"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
              projectTechIcons={projectTechIcons5.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={"https://www.google.com"}
              projectSourceLink={"https://www.google.com"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
