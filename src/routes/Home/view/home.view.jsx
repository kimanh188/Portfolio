import "./../home.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { NavBarWrapper } from "../../../components/NavBar/navbar.component";
import { Logo } from "../../../components/Logo/logo.component";
import { Introduction } from "../../../components/HomeIntroduction/introduction.component";
import { FlyingCircles } from "../../../components/HomeAnimation/flyingCircles.component";

export function HomeView() {
  return (
    <section className="home-section">
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
