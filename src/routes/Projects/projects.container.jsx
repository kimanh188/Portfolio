import { ProjectsView } from "./view/projects.view.jsx";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function ProjectsContainer() {
  const { isDarkMode } = useContext(DarkModeContext);

  return <ProjectsView isDarkMode={isDarkMode} />;
}
