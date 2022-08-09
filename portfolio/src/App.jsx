import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { gsap } from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Style
// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/Portfolio";

// Component

import SectionHeader from "./components/Header/SectionHeader";
import HomeMadeBySophie from "./pages/HomeMadeBySophie";
import NewsRoom from "./pages/NewsRoom";
import Xplore from './pages/Xplore'

const route = [
  { path: "/", name: "Home", Component: Home },
  { path: "/HomeMadeBySophie", name: "HomeMadeBySophie", Component: HomeMadeBySophie },
  { path: "/AboutPage", name: "About", Component: AboutPage },
  { path: "/NewsRoom", name: "NewsRoom", Component: NewsRoom },
  { path: "/Xplore", name: "Xplore", Component: Xplore }
];

function App() {
  return (
    <div>
      <Router>
      <SectionHeader />
        <Routes>
          {route.map(({ path, name, Component }) => (
            <Route key={name} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
