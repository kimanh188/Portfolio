import "./projectSlider.style.css";

import { ProjectCard } from "./ProjectCard/projectCard.component";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function ProjectSlider() {
  const projectTechIcons1 = ["fa-html5", "fa-css3-alt", "fa-sass"];
  const projectTechIcons2 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];
  const projectTechIcons3 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];
  const projectTechIcons4 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];
  const projectTechIcons5 = ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"];

  //react-multi-carousel:
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 701 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 701, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="project-slider">
      <Carousel showDots={true} responsive={responsive}>
        <ProjectCard
          id={"project1"}
          imgSrc={"project-img-ex.jpg"}
          projectName={"Project Name 1"}
          projectDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          projectTechIcons={projectTechIcons1.map((iconClass, index) => (
            <i key={index} className={`fa-brands ${iconClass}`} />
          ))}
          projectLiveLink={"https://www.google.com"}
          projectSourceLink={"https://www.google.com"}
        />

        <ProjectCard
          id={"project2"}
          imgSrc={"project-img-ex.jpg"}
          projectName={"Project Name 2"}
          projectDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          projectTechIcons={projectTechIcons2.map((iconClass, index) => (
            <i key={index} className={`fa-brands ${iconClass}`} />
          ))}
          projectLiveLink={"https://www.google.com"}
          projectSourceLink={"https://www.google.com"}
        />

        <ProjectCard
          id={"project3"}
          imgSrc={"project-img-ex.jpg"}
          projectName={"Project Name 3"}
          projectDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          projectTechIcons={projectTechIcons3.map((iconClass, index) => (
            <i key={index} className={`fa-brands ${iconClass}`} />
          ))}
          projectLiveLink={"https://www.google.com"}
          projectSourceLink={"https://www.google.com"}
        />

        <ProjectCard
          id={"project4"}
          imgSrc={"project-img-ex.jpg"}
          projectName={"Project Name 4"}
          projectDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          projectTechIcons={projectTechIcons4.map((iconClass, index) => (
            <i key={index} className={`fa-brands ${iconClass}`} />
          ))}
          projectLiveLink={"https://www.google.com"}
          projectSourceLink={"https://www.google.com"}
        />

        <ProjectCard
          id={"project5"}
          imgSrc={"project-img-ex.jpg"}
          projectName={"Project Name 5"}
          projectDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          projectTechIcons={projectTechIcons5.map((iconClass, index) => (
            <i key={index} className={`fa-brands ${iconClass}`} />
          ))}
          projectLiveLink={"https://www.google.com"}
          projectSourceLink={"https://www.google.com"}
        />
      </Carousel>
    </div>
  );
}
