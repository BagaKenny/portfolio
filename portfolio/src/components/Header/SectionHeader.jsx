import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

// GSAP
import { gsap } from "gsap";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Style
import "./sectionhead.css";

const SectionHeader = () => {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () =>{
    setShowLinks(!showLinks)
    console.log(handleShowLinks)
  }

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

  console.log(showLinks)
  
  return (
    <div>
    <header className={`nav ${showLinks ? 'show-nav' : 'hide-nav'}`}>
    <div className="logo"><Link to='/' className='link-style ' > BAGA KENNY JUNIOR </Link></div>
      <button onClick={handleShowLinks} className="nav-bar-burger">
          <span className="burger-bar"></span>
        </button>
      <nav className={`header ${showLinks ? 'show-nav' : 'hide-nav'}`} ref={sub_header} >
        <div className="sub-header sub-header-1">
          <div><Link to='/' className='link-style' > BAGA KENNY JUNIOR </Link></div>
          <div className="links-direction">
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
          <div className="links-direction">
            <span className="media-link-style">
              <a
                href="mailto: kennybagajunior@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faArrowRight} /> kennybagajunior@gmail.com
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
      
      </nav>
      </header>
    </div>
  );
};

export default SectionHeader;
