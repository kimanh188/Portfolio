import { ProjectCard } from "./projectCard.component";

export function Project2() {
  const projectTechIcons2 = ["fa-html5", "fa-css3-alt", "fa-js"];

  return (
    <ProjectCard
      id={"project2"}
      imgSrc={"project2-mockup.png"}
      projectName={"Calculator App"}
      projectDescription={
        "A calculator app with a unique feature: a color picker that allows users to customize the app's visual style according to their preferences by selecting from 5 distinct color palettes,. This project not only helped me become acquainted with JavaScript but also allowed me to practice and enhance my skills in CSS."
      }
      projectDescriptionOptional={""}
      projectTechIcons={projectTechIcons2.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"https://kimanh188.github.io/CalculatorApp/"}
      projectSourceLink={"https://github.com/kimanh188/CalculatorApp"}
      inProgress={false}
    />
  );
}
