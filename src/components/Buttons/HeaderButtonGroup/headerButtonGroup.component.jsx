import "./headerButtonGroup.style.css";

import { BtnDarkMode } from "./../btnDarkMode/btnDarkMode.component";
import { BtnCTA } from "../btnCTA/btnContact.component";

export function HeaderButtonGroup() {
  return (
    <div className="header-buttons">
      <BtnDarkMode />
      <BtnCTA text={"Contact me"} />
    </div>
  );
}
