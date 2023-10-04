import { PrivacyView } from "./view/privacyPolicy.view";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function PrivacyContainer() {
  const { isDarkMode } = useContext(DarkModeContext);
  return <PrivacyView isDarkMode={isDarkMode} />;
}
