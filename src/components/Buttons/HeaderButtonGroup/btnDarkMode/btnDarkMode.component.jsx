import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

export const BtnDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

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
