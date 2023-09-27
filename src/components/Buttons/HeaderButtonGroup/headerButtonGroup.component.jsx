import "./HeaderButtonGroup.style.css";

import { BtnDarkMode } from "./btnDarkMode/btnDarkMode.component";
import { BtnCTA } from "./btnCTA/btnCTA.component";

export function HeaderButtonGroup() {
  return (
    <div className="header-buttons">
      <BtnDarkMode />
      <BtnCTA />
    </div>
  );
}
