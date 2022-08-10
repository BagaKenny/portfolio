import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";


// Style
// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

// Component

import SectionHeader from "./components/Header/SectionHeader";
import HomeMadeBySophie from "./pages/HomeMadeBySophie";
import Xplore from './pages/Xplore'

const route = [
  { path: "/", name: "Home", Component: Home },
  { path: "/HomeMadeBySophie", name: "HomeMadeBySophie", Component: HomeMadeBySophie },
  { path: "/AboutPage", name: "About", Component: AboutPage },
  { path: "/Xplore", name: "Xplore", Component: Xplore }
];

function App() {

  const location = useLocation();
  
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
