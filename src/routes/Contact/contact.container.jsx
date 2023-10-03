import { ContactView } from "./view/contact.view.jsx";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function ContactContainer() {
  const { isDarkMode } = useContext(DarkModeContext);

  return <ContactView isDarkMode={isDarkMode} />;
}
