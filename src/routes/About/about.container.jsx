import { AboutView } from "./view/about.view.jsx";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function AboutContainer() {
  const { isDarkMode } = useContext(DarkModeContext);

  return <AboutView isDarkMode={isDarkMode} />;
}
