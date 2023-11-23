import { ProjectCard } from "./projectCard.component";

export function Project5() {
  const projectTechIcons5 = ["fa-html5", "fa-css3-alt"];

  return (
    <ProjectCard
      id={"project5"}
      imgSrc={"project5-mockup.png"}
      projectName={"Huddle Landing Page"}
      projectDescription={
        "A challenge from Frontend Mentor and also my very first project. The goal is to build out the responsive landing page, get it looking as close to the design as possible. Besides coding, I practiced the preparation steps and learnt time management."
      }
      projectDescriptionOptional={""}
      projectTechIcons={projectTechIcons5.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={
        "https://kimanh188.github.io/HuddleLandingPage_Challenge/"
      }
      projectSourceLink={
        "https://github.com/kimanh188/HuddleLandingPage_Challenge"
      }
      inProgress={false}
    />
  );
}
