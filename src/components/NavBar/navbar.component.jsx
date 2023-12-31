import "./navbar.style.css";

import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

import { Logo } from "./../Logo/logo.component";

export function NavBarWrapper() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <Outlet />
      <nav className={`navBar ${isDarkMode ? "dark" : ""}`}>
        <Logo />

        <div className="navBar-buttons">
          <NavLink
            className={`navbar-icon-item ${isDarkMode ? "dark" : ""}`}
            to={"/"}
          >
            {" "}
            <svg
              className="navbar-icon"
              width="35"
              height="35"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="navbar-icon"
                fill="#80513e"
                d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
              />
              <path
                className="navbar-icon"
                fill="#80513e"
                d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
              />
            </svg>{" "}
            <span className="nav-button-text">Home</span>
          </NavLink>

          <NavLink
            className={`navbar-icon-item ${isDarkMode ? "dark" : ""}`}
            to={"/about"}
          >
            {" "}
            <svg
              className="navbar-icon"
              width="35"
              height="35"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="navbar-icon"
                fill="#80513e"
                d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6ZM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480Z"
              />
            </svg>{" "}
            <span className="nav-button-text">About</span>
          </NavLink>

          <NavLink
            className={`navbar-icon-item ${isDarkMode ? "dark" : ""}`}
            to={"/projects"}
          >
            {" "}
            <svg
              className="navbar-icon"
              width="35"
              height="35"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="navbar-icon"
                fill="#80513e"
                d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5zm4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1zM2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83c.44-2.19 1.68-8.44 1.68-8.44c.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5c0 0-1.59 6.7-1.72 7.33c-.07.37-.22.99-.51 1.42zM15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1z"
              />
            </svg>{" "}
            <span className="nav-button-text">Projects</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
