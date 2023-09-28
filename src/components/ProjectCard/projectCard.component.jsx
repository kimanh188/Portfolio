import "./projectCard.style.css";

import { BtnLinkOut } from "./../Buttons/btnLinkOut/btnLinkOut.component";

export function ProjectCard() {
  return (
    <div className="project-container">
      <div className="project-img-container">
        <img src="project-img-ex.jpg" alt="project-web" />
      </div>

      <div className="project-overview">
        <div className="project-intro">
          <h4 className="project-name">Project Name</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, unde
            qui. Inventore est itaque, ea debitis eligendi blanditiis dolorum.
            Laborum, deleniti. Obcaecati explicabo aspernatur qui earum fuga
            debitis assumenda nesciunt?
          </p>
        </div>

        <div className="project-used-tech">
          <h5>
            Made with
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-sass"></i>
          </h5>
        </div>

        <div className="project-buttons">
          <BtnLinkOut
            link={"/"}
            text={"See live "}
            icon={
              <i className="btn-icon fa-solid fa-arrow-up-right-from-square"></i>
            }
          />

          <BtnLinkOut
            link={"/"}
            text={"Source Code "}
            icon={<i className="btn-icon fa-brands fa-github"></i>}
          />
        </div>
      </div>
    </div>
  );
}
