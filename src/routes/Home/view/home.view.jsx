import "./../home.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { NavBarWrapper } from "../../../components/NavBar/navbar.component";
import { Logo } from "../../../components/Logo/logo.component";
import { Introduction } from "../../../components/HomeIntroduction/introduction.component";
import { FlyingCircles } from "../../../components/HomeAnimation/flyingCircles.component";

import { useContext } from "react";
import { DarkModeContext } from "./../../../contexts/theme.context";

export function HomeView() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={`home-section ${isDarkMode ? "dark" : ""}`}>
      <HeaderButtonGroup />

      <div className="home-content">
        <Logo />
        <Introduction />
      </div>
      <FlyingCircles />
      <NavBarWrapper />
    </section>
  );
}
