import "./btnSocialMedia.style.css";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./../../../contexts/theme.context";

export function BtnSocialMedia({ link, icon, socialMedia }) {
  const titleText = `Go to Kim's ${socialMedia} profile.`;

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Link
      className={`socialMedia-btn ${isDarkMode ? "dark" : ""}`}
      to={link}
      title={titleText}
    >
      {icon}
    </Link>
  );
}
