import "./introduction.style.css";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function Introduction() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className="home-text">
        <p className="animation line1">
          <span className={`func-color ${isDarkMode ? "dark" : ""}`}>
            function
          </span>{" "}
          <span className={`funcName-color ${isDarkMode ? "dark" : ""}`}>
            Welcome
          </span>
          <span className={`round-bracket-color ${isDarkMode ? "dark" : ""}`}>
            (){" "}
          </span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"{"}
          </span>
        </p>

        <p className="m-left-1 animation line2">
          <span className={`func-color ${isDarkMode ? "dark" : ""}`}>
            return
          </span>
          <span className={`round-bracket-color ${isDarkMode ? "dark" : ""}`}>
            {" "}
            {"("}
          </span>
        </p>

        <p className="m-left-2 animation line3">
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"<>"}
          </span>
        </p>

        <p className="m-left-3 animation line4">
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"<"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>h1</span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {">"}
          </span>
          <span className={`element-text ${isDarkMode ? "dark" : ""}`}>
            Hello there!
          </span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"</"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>h1</span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {">"}
          </span>
        </p>

        <p className="m-left-3 animation line5">
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"<"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>h2</span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {">"}
          </span>
          <span className={`element-text ${isDarkMode ? "dark" : ""}`}>
            I’m Kim, a <span className="emphasis">web developer</span> .
          </span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"</"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>h2</span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {">"}
          </span>
        </p>

        <p className="m-left-3 animation line6">
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"<"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>p</span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {">"}
          </span>
        </p>

        <p className="m-left-4 animation line7">
          <span className={`element-text ${isDarkMode ? "dark" : ""}`}>
            I enjoy the coding journey.
          </span>
        </p>

        <p className="m-left-4 animation line8">
          {" "}
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"<"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>br </span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"/>"}
          </span>
        </p>

        <p className="m-left-4 animation line9">
          <span className={`element-text ${isDarkMode ? "dark" : ""}`}>
            Welcome to my digital space!
          </span>
        </p>

        <p className="m-left-3 animation line10">
          {" "}
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"</"}
          </span>
          <span className={`element ${isDarkMode ? "dark" : ""}`}>p</span>
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {">"}
          </span>
        </p>

        <p className="m-left-2 animation line11">
          {" "}
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"</>"}
          </span>
        </p>

        <p className="m-left-1 animation line12">
          <span className={`round-bracket-color ${isDarkMode ? "dark" : ""}`}>
            {" "}
            {");"}
          </span>
        </p>

        <p className="animation line13">
          <span className={`bracket-color ${isDarkMode ? "dark" : ""}`}>
            {"}"}
          </span>
        </p>
      </div>
    </>
  );
}
