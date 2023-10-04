import "./skillsSlider.style.css";

import { useEffect, useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function SkillsSlider() {
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const arrowButtons = document.querySelectorAll(".fa-solid");

    if (!carousel) {
      console.error("Carousel element not found.");
      return; // Exit early if carousel element is not found
    }

    const firstCardElement = carousel.querySelector(".skill-card");

    if (firstCardElement instanceof HTMLElement) {
      const firstCardWidth = firstCardElement.offsetWidth;

      // Add event listeners to the arrow buttons
      arrowButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          carousel.scrollLeft +=
            btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
      });
    } else {
      console.error("The element with class 'skill-card' was not found.");
    }

    let isDragging = false,
      startX,
      startScrollLeft;

    const dragStart = (event) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position
      startX = event.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (event) => {
      if (!isDragging) return;
      // Updates scroll position based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    // Cleanup event listeners when component is unmounted
    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
    };
  }, []);

  return (
    <div className="tech-skills">
      <div className={`carousel-container  ${isDarkMode ? "dark" : ""}`}>
        <i id="left" className="fa-solid fa-angle-left"></i>

        <ul className="carousel">
          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="skill-card__icon"
                fill="#89a44c"
                d="m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178ZM3 2h18l-1.623 18L12 22l-7.377-2L3 2Zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188Z"
              ></path>
            </svg>

            <span className="skill-card__text">HTML 5</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="skill-card__icon"
                fill="#89a44c"
                d="M1.941 1H22.06l-1.098 19.208l-8.96 3.36l-8.962-3.36L1.941 1ZM4.06 3l.902 15.792l7.04 2.64l7.038-2.64L19.941 3H4.06Zm1.423 2H18.33l-.108 1.887l-7.29 3.49h7.09l-.404 7.084L12 19.568l-5.618-2.107l-.114-1.994v-.004l-.075-1.39h2.01l.062 1.284l.04.69L12 17.431l3.696-1.386l.21-3.67H6.09l-.106-1.848L13.355 7H12l-6.255.012L5.482 5Z"
              ></path>
            </svg>

            <span className="skill-card__text">CSS 3</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="skill-card__icon"
                fill="#89a44c"
                d="M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8v-.5Zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5v-4Zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7Z"
              ></path>
            </svg>

            <span className="skill-card__text">JavaScript</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="skill-card__icon" fill="none">
                <g fill="#89a44c" clipPath="url(#akarIconsReactFill0)">
                  <path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689Zm-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387Zm-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952ZM16.97 13c.264.655.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13Zm-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566Zm-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144Zm3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566ZM8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386Zm-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499Zm2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132Zm11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423Zm1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475Z"></path>
                  <path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472Z"></path>
                </g>
                <defs>
                  <clipPath id="akarIconsReactFill0">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </g>
            </svg>

            <span className="skill-card__text">React</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 510 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="skill-card__icon"
                fill="#89a44c"
                d="M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144zm-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684L256.89 493.71z"
              ></path>
            </svg>

            <span className="skill-card__text">Vite</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="skill-card__icon"
                fill="none"
                stroke="#89a44c"
                strokeLinejoin="round"
                d="m2.5 11.5l9-8l1 9l-5 2l-5-3Zm0 0l5-9l2 3m-7 6l1-11l3 3"
              ></path>
            </svg>

            <span className="skill-card__text">Firebase</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                className="skill-card__icon"
                fill="none"
                stroke="#89a44c"
                strokeWidth="1.5"
              >
                <path d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12V2Z"></path>
                <path d="M12 8.666H8.667a3.333 3.333 0 0 0 0 6.667H12V8.666Z"></path>
                <path d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z"></path>
                <path d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12V2Z"></path>
              </g>
            </svg>

            <span className="skill-card__text">Figma</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                className="skill-card__icon"
                fill="none"
                stroke="#89a44c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></path>
                <path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.211 3.211 0 0 0-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 0 0 7 8.464a3.482 3.482 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 0 0-.496.773a2.134 2.134 0 0 0-.13.902V19"></path>
                <path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948"></path>
              </g>
            </svg>

            <span className="skill-card__text">Github</span>
          </li>

          <li className="skill-card">
            <svg
              className="skill-card__icon"
              {...{ draggable: "false" }}
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="skill-card__icon"
                fill="#89a44c"
                d="M1 11v2s2 0 2 4v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1c0-4 2-4 2-4v-2s-2 0-2-4V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1c0 4-2 4-2 4Zm19.674 1a2.37 2.37 0 0 0-.088.086C19.578 13.093 19 14.692 19 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1c0-2.308-.578-3.907-1.586-4.914A3.887 3.887 0 0 0 3.326 12a2.37 2.37 0 0 0 .088-.086C4.422 10.907 5 9.308 5 7V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1c0 2.308.578 3.907 1.586 4.914l.088.086ZM8.5 7v10h5a3 3 0 0 0 1.615-5.529A3 3 0 0 0 12.5 7h-4Zm2 4V9h2a1 1 0 1 1 0 2h-2Zm0 2h3a1 1 0 1 1 0 2h-3v-2Z"
              ></path>
            </svg>

            <span className="skill-card__text">Bootstrap</span>
          </li>
        </ul>
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}
