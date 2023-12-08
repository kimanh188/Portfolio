import { ProjectCard } from "./projectCard.component";

export function Project1() {
  const projectTechIcons1 = ["fa-html5", "fa-css3-alt", "fa-react"];

  return (
    <ProjectCard
      id={"project1"}
      imgSrc={"project1-mockup.png"}
      projectName={"Todo List"}
      projectDescription={
        "This project represents an 'upgraded' version of my very first React project, Todo-App - a CRUD application. Users can not only add, check off, edit, and delete todos but also log in using their Google accounts. This experience significantly bolstered my understanding of React and familiarized me with Firebase."
      }
      projectDescriptionOptional={""}
      projectTechIcons={projectTechIcons1.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"https://todo-app2-alpha.vercel.app/"}
      projectSourceLink={"https://github.com/kimanh188/Todo-App2"}
      inProgress={false}
    />
  );
}
