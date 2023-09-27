import "./../home.style.css";

import { HeaderButtonGroup } from "./../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { NavBarWrapper } from "./../../../components/NavBar/navbar.component";
import { Logo } from "./../../../components/Logo/logo.component";
import { Introduction } from "./../../../components/Introduction/introduction.component";

export function HomeView() {
  return (
    <section className="home-section">
      <HeaderButtonGroup />

      <div className="home-content">
        <Logo />
        <div className="animation-area">
          <Introduction />
          <div className="circles">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <NavBarWrapper />
    </section>
  );
}
