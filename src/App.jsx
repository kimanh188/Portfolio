import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";

import { Loader } from "./components/Loader/loader.component.jsx";
import { NavBarWrapper } from "./components/NavBar/navbar.component";
import { HomeContainer } from "./routes/Home/home.container.jsx";
import { AboutContainer } from "./routes/About/about.container.jsx";
import { ProjectsContainer } from "./routes/Projects/projects.container.jsx";
import { ContactContainer } from "./routes/Contact/contact.container.jsx";
import { NotFoundContainer } from "./routes/NotFound/notFound.container.jsx";
import { PrivacyContainer } from "./routes/PrivacyPolicy/privacyPolicy.container";

import { DarkModeProvider } from "./contexts/theme.context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<NavBarWrapper />}>
        <Route path={"/"}>
          <Route index element={<HomeContainer />} />
          <Route path={"/home"} element={<HomeContainer />} />
        </Route>

        <Route path={"/about"} element={<AboutContainer />} />

        <Route path={"/projects"} element={<ProjectsContainer />} />

        <Route path={"/contact"} element={<ContactContainer />} />

        <Route path={"/privacy-policy"} element={<PrivacyContainer />} />
      </Route>

      <Route path={"*"} element={<NotFoundContainer />} />
    </>
  )
);

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const routeChangeHandler = () => {
      setLoading(
        window.location.pathname === "/" || window.location.pathname === "/home"
      );
      setTimeout(() => {
        setLoading(false);
      }, 4500);
    };

    window.addEventListener("popstate", routeChangeHandler);
    routeChangeHandler();

    return () => {
      window.removeEventListener("popstate", routeChangeHandler);
    };
  }, []);

  return (
    <>
      <DarkModeProvider>
        {loading ? <Loader /> : <RouterProvider router={router} />}
      </DarkModeProvider>
    </>
  );
}

export default App;
