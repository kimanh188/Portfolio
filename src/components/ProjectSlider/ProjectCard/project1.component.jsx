import { ProjectCard } from "./projectCard.component";

export function Project1() {
  const projectTechIcons1 = ["fa-html5", "fa-css3-alt", "fa-react"];

  return (
    <ProjectCard
      id={"project1"}
      imgSrc={"project1-mockup.png"}
      projectName={"Todo List"}
      projectDescription={
        "A to-do list application - my very first project using React and Vite when I began familiarizing myself with React. This project strengthened my understanding of React and its core concept of components."
      }
      projectTechIcons={projectTechIcons1.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"https://todo-y3ip.onrender.com/"}
      projectSourceLink={"https://github.com/kimanh188/ToDo-App"}
      inProgress={true}
    />
  );
}
