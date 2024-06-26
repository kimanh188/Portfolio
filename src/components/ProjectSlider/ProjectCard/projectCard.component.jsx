import "./projectCard.style.css";

import { useContext } from "react";

import { BtnLinkOut } from "../../Buttons/btnLinkOut/btnLinkOut.component";
import { DarkModeContext } from "./../../../contexts/theme.context";

export function ProjectCard({
  id,
  imgSrc,
  projectName,
  projectDescription,
  projectDescriptionOptional,
  projectTechIcons,
  projectLiveLink,
  projectSourceLink,
  liveLinkHidden,
  inProgress,
}) {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`project-container ${isDarkMode ? "dark" : ""}`} id={id}>
      <div className="project-img-container">
        <img className="project-img" src={imgSrc} alt="project-img" />
      </div>

      <div className="project-overview">
        <div className="project-intro">
          <div className="project-name">
            <h4>{projectName}</h4>
            {inProgress && <span className="in-progress"> in progress</span>}
          </div>

          <p className="project-description">{projectDescription} </p>
          <br />
          <p className="project-description">{projectDescriptionOptional} </p>
        </div>

        <div className="project-used-tech">
          <h5>
            Made with
            {projectTechIcons}
          </h5>
        </div>

        <div className="project-buttons">
          <BtnLinkOut
            link={projectLiveLink}
            text={"See live "}
            icon={
              <i className="btn-icon fa-solid fa-arrow-up-right-from-square"></i>
            }
            title={"Visit the live version of the project."}
            isHidden={liveLinkHidden}
          />

          <BtnLinkOut
            link={projectSourceLink}
            text={"Source Code "}
            icon={<i className="btn-icon fa-brands fa-github"></i>}
            title={"View the project's source code on GitHub."}
            isHidden={false}
          />
        </div>
      </div>
    </div>
  );
}
