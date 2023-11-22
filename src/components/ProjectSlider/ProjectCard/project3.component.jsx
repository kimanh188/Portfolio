import { ProjectCard } from "./projectCard.component";

export function Project3() {
  const projectTechIcons3 = ["fa-html5", "fa-css3-alt", "fa-js"];

  return (
    <ProjectCard
      id={"project3"}
      imgSrc={"project3-mockup.png"}
      projectName={"Image Search API"}
      projectDescription={
        "A simple yet efficient image search engine using Unsplash API and also my first project using fetch API. Leveraging the extensive image repository of Unsplash, it offers users a platform to search and discover a diverse range of high-quality images."
      }
      projectTechIcons={projectTechIcons3.map((iconClass, index) => (
        <i key={index} className={`fa-brands ${iconClass}`} />
      ))}
      projectLiveLink={"https://image-search-unsplash-sandy.vercel.app"}
      projectSourceLink={"https://github.com/kimanh188/ImageSearch-Unsplash"}
      inProgress={false}
    />
  );
}
