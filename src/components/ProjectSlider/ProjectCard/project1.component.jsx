import { ProjectCard } from "./projectCard.component";

export function Project1() {
  const projectTechIcons1 = ["fa-html5", "fa-css3-alt", "fa-react"];

  return (
    <ProjectCard
      id={"project1"}
      imgSrc={"project1-mockup.png"}
      projectName={"Todo List"}
      projectDescription={
        "A todo list web application - my very first project using React and Vite. By implementing CRUD (Create, Read, Update, Delete) functionality, this Todo List project has strengthened my understanding of React and its core concepts."
      }
      projectTechIcons={projectTechIcons1.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"https://todo-y3ip.onrender.com/"}
      projectSourceLink={"https://github.com/kimanh188/ToDo-App"}
    />
  );
}
