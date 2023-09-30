import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext } from "react";
import { DarkModeContext } from "./../../../../contexts/theme.context";

export const BtnDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <DarkModeSwitch
      style={{ margin: "2em" }}
      checked={!isDarkMode}
      onChange={toggleDarkMode}
      size={35}
      moonColor={"#80513E"}
      sunColor={"#EE7D52"}
    />
  );
};
