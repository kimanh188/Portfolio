// @ts-nocheck
import "./skillsSet.style.css";

import { useContext } from "react";
import { DarkModeContext } from "../../contexts/theme.context";

import htmlIcon from "../../assets/svg-icons/html5.svg";
import cssIcon from "../../assets/svg-icons/css3.svg";
import javaScriptIcon from "../../assets/svg-icons/javascript.svg";
import reactIcon from "../../assets/svg-icons/react.svg";
import bootstrapIcon from "../../assets/svg-icons/bootstrap.svg";
import tailwindIcon from "../../assets/svg-icons/tailwind.svg";
import nextJSIcon from "../../assets/svg-icons/nextjs.svg";
import figmaIcon from "../../assets/svg-icons/figma.svg";
import firebaseIcon from "../../assets/svg-icons/firebase.svg";
import githubIcon from "../../assets/svg-icons/github.svg";
import nodejsIcon from "../../assets/svg-icons/nodejs.svg";
import expressJsIcon from "../../assets/svg-icons/express-js.svg";
import mongodbIcon from "../../assets/svg-icons/mongodb.svg";
import mySQLIcon from "../../assets/svg-icons/mysql.svg";
import mongooseIcon from "../../assets/svg-icons/mongoose.svg";
import vsCodeIcon from "../../assets/svg-icons/vscode.svg";
import typescriptIcon from "../../assets/svg-icons/typescript.svg";

export function SkillsSet() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`tech-skills ${isDarkMode ? "dark" : ""}`}>
      <div className="skillSet front-end">
        <h4 className="skillSet-h4">Front-end</h4>

        <div className="skill-icons-container">
          <img
            className="skill-icon"
            src={htmlIcon}
            alt="html icon"
            title="HTML5"
          />
          <img
            className="skill-icon"
            src={cssIcon}
            alt="css icon"
            title="CSS3"
          />
          <img
            className="skill-icon"
            src={javaScriptIcon}
            alt="javaScript icon"
            title="JavaScript"
          />
          <img
            className="skill-icon"
            src={reactIcon}
            alt="react icon"
            title="React"
          />
          <img
            className="skill-icon"
            src={bootstrapIcon}
            alt="bootstrap
         icon"
            title="Bootstrap"
          />
          <img
            className="skill-icon"
            src={tailwindIcon}
            alt="tailwind
         icon"
            title="Tailwind CSS"
          />

          <img
            className="skill-icon"
            src={nextJSIcon}
            alt="nextJS icon"
            title="Next.js"
          />

          <img
            className="skill-icon"
            src={typescriptIcon}
            alt="typescript icon"
            title="TypeScript"
          />
        </div>
      </div>

      <div className="skillSet back-end">
        <h4 className="skillSet-h4">Back-end</h4>
        <div className="skill-icons-container">
          <img
            className="skill-icon"
            src={nodejsIcon}
            alt="nodejs icon"
            title="NodeJS"
          />
          <img
            className="skill-icon"
            src={expressJsIcon}
            alt="express js icon"
            title="ExpressJS"
          />
          <img
            className="skill-icon"
            src={mongodbIcon}
            alt="mongodb icon"
            title="MongoDB"
          />
          <img
            className="skill-icon"
            src={mySQLIcon}
            alt="mySQL icon"
            title="MySQL"
          />
          <img
            className="skill-icon"
            src={mongooseIcon}
            alt="mongoose icon"
            title="Mongoose"
          />
          <img
            className="skill-icon"
            src={firebaseIcon}
            alt="firebase icon"
            title="Firebase"
          />
        </div>
      </div>

      <div className="skillSet tools">
        <h4 className="skillSet-h4">Other</h4>
        <div className="skill-icons-container">
          <img
            className="skill-icon"
            src={vsCodeIcon}
            alt="vsCode icon"
            title="Visual Studio Code"
          />
          <img
            className="skill-icon"
            src={figmaIcon}
            alt="figma icon"
            title="Figma"
          />
          <img
            className="skill-icon"
            src={githubIcon}
            alt="github icon"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
}
