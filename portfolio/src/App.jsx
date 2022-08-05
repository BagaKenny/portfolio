import React, {useEffect, useRef} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Routes,
  Link
} from 'react-router-dom';

import { gsap } from 'gsap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Style
import "./components/Header/sectionhead.css";
// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';

// Component

import SectionHeader from './components/Header/SectionHeader';

const route = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/AboutPage', name: 'About', Component: AboutPage},
  {path: '/Portfoliol', name: 'Portfolio', Component: Portfolio},
  {path: '/AboutPage', name: 'About', Component: AboutPage},
]

function App() {
  let tl = new gsap.timeline();
  let sub_header = useRef(null);
  let q = gsap.utils.selector(sub_header);

  useEffect(() => {
    tl.from(q(".sub-header"), {
      y: -100,
      duration: 0.5,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);


  return (
    <div>
    <Router>
    <header className="header" ref={sub_header}>
        <div className="sub-header sub-header-1">
          <div><Link to='/' className='link-style' > BAGA KENNY JUNIOR </Link></div>
          <div>
            <span className="media-link-style">
              <a
                href="https://github.com/BagaKenny"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowRight} /> GITHUB
              </a>{" "}
            </span>{" "}
            /{" "}
            <span className="media-link-style">
              <a
                href="https://codepen.io/sierra_leone"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowRight} /> CODEPEN
              </a>
            </span>{" "}
            /{" "}
            <span className="media-link-style">
              <a
                href="https://www.behance.net/kennybsga"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowRight} /> BEHANCE
              </a>
            </span>
          </div>
        </div>
        <div className="sub-header sub-header-2">
          <div>WEB DESIGNER</div>
          <div>
            <span className="media-link-style">
              <a
                href="https://www.linkedin.com/in/kenny-junior-baga-52856219a/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowRight} /> LINKEDIN
              </a>
            </span>
          </div>
        </div>
        <div className="sub-header sub-header-3">
          <div>&copy;2022</div>
          <div></div>
        </div>
       
        <div className="sub-header sub-header-4">
        
          <div>
          
            <span><Link to='/AboutPage' className='link-style'>ABOUT ME</Link></span>
            
          </div>
          <div></div>
        </div>
        
      </header>
    <Routes>
      {route.map(({path, name, Component}) => (
          <Route key={name} path={path} element={ <Component />}>
          </Route>
      ))}
    </Routes>
    </Router>
    </div>
  )
}

export default App