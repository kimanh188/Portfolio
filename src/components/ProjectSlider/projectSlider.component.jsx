import "./projectSlider.style.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Project1 } from "./ProjectCard/project1.component";
import { Project2 } from "./ProjectCard/project2.component";
import { Project3 } from "./ProjectCard/project3.component";
import { Project4 } from "./ProjectCard/project4.component";
import { Project5 } from "./ProjectCard/project5.component";
import { Project6 } from "./ProjectCard/project6.component.jsx";

export function ProjectSlider() {
  //react-multi-carousel:
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="project-slider">
      <Carousel showDots={true} responsive={responsive}>
        <Project6 />
        <Project1 />
        <Project3 />
        <Project2 />
        <Project4 />
        <Project5 />
      </Carousel>
    </div>
  );
}
