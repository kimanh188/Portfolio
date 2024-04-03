// @ts-nocheck
import { ProjectsView } from "./view/projects.view.jsx";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function ProjectsContainer() {
  const projectTechIcons6 = ["fa-react"];
  const projectTechIcons1 = ["fa-html5", "fa-css3-alt", "fa-react"];
  const projectTechIcons2 = ["fa-html5", "fa-css3-alt", "fa-js"];
  const projectTechIcons3 = ["fa-html5", "fa-css3-alt", "fa-js"];
  const projectTechIcons4 = ["fa-html5", "fa-css3-alt", "fa-js"];
  const projectTechIcons5 = ["fa-html5", "fa-css3-alt"];

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <ProjectsView
      isDarkMode={isDarkMode}
      projectTechIcons6={projectTechIcons6}
      projectTechIcons1={projectTechIcons1}
      projectTechIcons2={projectTechIcons2}
      projectTechIcons3={projectTechIcons3}
      projectTechIcons4={projectTechIcons4}
      projectTechIcons5={projectTechIcons5}
    />
  );
}
