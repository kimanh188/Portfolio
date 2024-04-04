// @ts-nocheck
import { ProjectCard } from "./projectCard.component";

import expressIcon from "../../../assets/svg-icons/express-white.svg";
import reactIcon from "../../../assets/svg-icons/react-white.svg";
import mongoDBIcon from "../../../assets/svg-icons/mongodb-white.svg";
import tailwindIcon from "../../../assets/svg-icons/tailwind-white.svg";

export function Project6() {
  const projectTechIcons6 = [reactIcon, expressIcon, mongoDBIcon, tailwindIcon];

  return (
    <ProjectCard
      id={"project6"}
      imgSrc={"project6-mockup.png"}
      projectName={"Chat App"}
      projectDescription={
        "This basic chat app, built with the MERN Stack, deepened my understanding of React, backend development, and real-time communication. Users can register, securely log in with JWT tokens, and manage profiles. Real-time chat, powered by Socket.IO, enables instant messaging. Styling is done with Tailwind CSS."
      }
      projectDescriptionOptional={""}
      projectTechIcons={projectTechIcons6.map((icon, index) => (
        <img
          key={index}
          className="fa-brands"
          src={icon}
          alt={`Tech Icon ${index}`}
        />
      ))}
      projectLiveLink={"/"}
      liveLinkHidden={true}
      projectSourceLink={"https://github.com/kimanh188/Chat-App"}
      inProgress={false}
    />
  );
}
