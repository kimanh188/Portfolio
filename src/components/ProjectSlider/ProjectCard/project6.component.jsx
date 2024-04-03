import { ProjectCard } from "./projectCard.component";

export function Project6() {
  const projectTechIcons6 = ["fa-react"];

  return (
    <ProjectCard
      id={"project6"}
      imgSrc={"project6-mockup.png"}
      projectName={"Chat App"}
      projectDescription={
        "This basic chat app, built with the MERN Stack, deepened my understanding of React, backend development, and real-time communication. Users can register, securely log in with JWT tokens, and manage profiles. Real-time chat, powered by Socket.IO, enables instant messaging. Styling is done with Tailwind CSS."
      }
      projectDescriptionOptional={""}
      projectTechIcons={projectTechIcons6.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"/"}
      liveLinkHidden={true}
      projectSourceLink={"https://github.com/kimanh188/Chat-App"}
      inProgress={false}
    />
  );
}
