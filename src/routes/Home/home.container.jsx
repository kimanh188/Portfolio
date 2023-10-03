import { HomeView } from "./view/home.view.jsx";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function HomeContainer() {
  const { isDarkMode } = useContext(DarkModeContext);

  return <HomeView isDarkMode={isDarkMode} />;
}
