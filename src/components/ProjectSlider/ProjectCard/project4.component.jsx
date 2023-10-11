import { ProjectCard } from "./projectCard.component";

export function Project4() {
  const projectTechIcons4 = ["fa-html5", "fa-css3-alt", "fa-js"];

  return (
    <ProjectCard
      id={"project4"}
      imgSrc={"project4-mockup.png"}
      projectName={"Weather App"}
      projectDescription={
        "A simple web app that displays real-time weather data and local time based on the city or location input by users. This project has helped me practice making API calls to retrieve and provide accurate information."
      }
      projectTechIcons={projectTechIcons4.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"https://kimanh188.github.io/WeatherApp/"}
      projectSourceLink={"https://github.com/kimanh188/WeatherApp"}
      inProgress={false}
    />
  );
}
