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

/* import "./btnDarkMode.style.css";

export function BtnDarkMode() {
  return (
    <>
      <svg
        className="btn-dark-mode"
        width="35"
        height="35"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#80513E">
          <path
            d="M12.612 3.474a5.006 5.006 0 0 0-2.887 3.55a5.005 5.005 0 0 0 3.85 5.94A5.004 5.004 0 0 0 19 10.47c.245-.447.923-.285.939.224a8.544 8.544 0 0 1-.184 2.047c-.978 4.6-5.493 7.538-10.085 6.562c-4.592-.976-7.521-5.497-6.544-10.097c.92-4.326 4.99-7.22 9.345-6.686c.504.062.605.75.14.954Z"
            opacity=".2"
          />
          <path
            fillRule="evenodd"
            d="M8.275 6.024a5.006 5.006 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.55 8.55 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5.004 5.004 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94Zm-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584a7.627 7.627 0 0 1-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91Z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </>
  );
} */
