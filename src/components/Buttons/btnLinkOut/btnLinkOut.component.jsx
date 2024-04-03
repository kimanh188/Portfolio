import "./btnLinkOut.style.css";

import { useContext } from "react";
import { DarkModeContext } from "./../../../contexts/theme.context";

import { Link } from "react-router-dom";

export function BtnLinkOut({ link, text, icon, title, isHidden }) {
  const { isDarkMode } = useContext(DarkModeContext);

  if (isHidden) {
    return null;
  }

  return (
    <Link
      className={`linkOut-btn ${isDarkMode ? "dark" : ""}`}
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {text}
      {icon}
    </Link>
  );
}
