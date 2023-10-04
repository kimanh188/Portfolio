import "./../projects.style.css";

import { HeaderButtonGroup } from "../../../components/Buttons/HeaderButtonGroup/headerButtonGroup.component";
import { ProjectSlider } from "../../../components/ProjectSlider/projectSlider.component";
import { ProjectCard } from "../../../components/ProjectSlider/ProjectCard/projectCard.component";

export function ProjectsView({
  isDarkMode,
  projectTechIcons1,
  projectTechIcons2,
  projectTechIcons3,
  projectTechIcons4,
  projectTechIcons5,
}) {
  return (
    <>
      <section className={`projects-section ${isDarkMode ? "dark" : ""}`}>
        <HeaderButtonGroup />
        <div className="projects-section-content">
          <h1 className="project-section-title">Projects</h1>
          <p className="project-section-text">
            Here is a selection of stuff I&apos;ve built:
          </p>

          <ProjectSlider />

          <div className="project-cards-container-desktop">
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

            <ProjectCard
              id={"project2"}
              imgSrc={"project2-mockup.png"}
              projectName={"Calculator App"}
              projectDescription={
                "A functional calculator app with a unique feature: a color picker that empowers users to select from 5 distinct color palettes. This project not only helped me become acquainted with JavaScript but also allowed me to practice and enhance my skills in CSS."
              }
              projectTechIcons={projectTechIcons2.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={"https://kimanh188.github.io/CalculatorApp/"}
              projectSourceLink={"https://github.com/kimanh188/CalculatorApp"}
            />

            <ProjectCard
              id={"project3"}
              imgSrc={"project3-mockup.png"}
              projectName={"Image Search API"}
              projectDescription={
                "A simple yet efficient image search engine using Unsplash API and also my first project using API. Leveraging the extensive image repository of Unsplash, it offers users a platform a platform to search and discover a diverse range of high-quality images."
              }
              projectTechIcons={projectTechIcons3.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={
                "https://kimanh188.github.io/ImageSearch-Unsplash/"
              }
              projectSourceLink={
                "https://github.com/kimanh188/ImageSearch-Unsplash"
              }
            />

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
            />

            <ProjectCard
              id={"project5"}
              imgSrc={"project5-mockup.png"}
              projectName={"Huddle Landing Page"}
              projectDescription={
                "A challenge from Frontend Mentor and also my very first project. The goal is to build out the responsive landing page, get it looking as close to the design as possible. Besides testing myself with coding, I practiced the preparation steps before write any code and learnt time management."
              }
              projectTechIcons={projectTechIcons5.map((iconClass, index) => (
                <i key={index} className={`fa-brands ${iconClass}`} />
              ))}
              projectLiveLink={
                "https://kimanh188.github.io/HuddleLandingPage_Challenge/"
              }
              projectSourceLink={
                "https://github.com/kimanh188/HuddleLandingPage_Challenge"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
