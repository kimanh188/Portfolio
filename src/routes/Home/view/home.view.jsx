import "./../home.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { NavBarWrapper } from "../../../components/NavBar/navbar.component";
import { Logo } from "../../../components/Logo/logo.component";
import { Introduction } from "../../../components/HomeIntroduction/introduction.component";
import { FlyingCircles } from "../../../components/HomeAnimation/flyingCircles.component";

export function HomeView({ isDarkMode }) {
  return (
    <>
      <section className={`home-section-mobile ${isDarkMode ? "dark" : ""}`}>
        <HeaderButtonGroup />

        <div className="home-content">
          <Logo />
          <Introduction />
        </div>

        <NavBarWrapper />
      </section>

      <section className={`home-wrapper-desktop ${isDarkMode ? "dark" : ""}`}>
        <NavBarWrapper />

        <div className="home-section-desktop">
          <HeaderButtonGroup />

          <div className="home-content">
            <Introduction />
          </div>
        </div>
      </section>

      <FlyingCircles />
    </>
  );
}
