import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";
import "./logo.style.css";

export function Logo() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`home-logo ${isDarkMode ? "dark" : ""}`}>
      <div className="round-shape">
        <img className="logo-midjourney" src="logo-midjourney.png" alt="logo" />
      </div>
    </div>
  );
}
