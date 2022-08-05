import React, {useEffect, useRef}from 'react';
import { gsap, Power2 } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './sectionhead.css'

const SectionHeader = () => {

    let tl = new gsap.timeline();
    let ease = Power2.easeInOut();
    let sub_header = useRef(null);
    let q = gsap.utils.selector(sub_header)

    useEffect(() => {
        tl.from(q(".sub-header"), {
            y: -100,
            duration: .5,
            stagger: {
                amount: .4,
            }
          }
        );
      }, []);

  return (
    <div>
        <header className="header" ref={sub_header}>
      <div className="sub-header sub-header-1" >
        <div>BAGA KENNY JUNIOR</div>
        <div>
         <span className='media-link-style'><a href='https://www.linkedin.com/in/kenny-junior-baga-52856219a/' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> LINKEDIN</a> </span> / <span className='media-link-style'><a href='https://codepen.io/sierra_leone' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> CODEPEN</a></span> / <span className='media-link-style'><a href='https://www.behance.net/kennybsga' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> BEHANCE</a></span>
        </div>
      </div>
      <div className="sub-header sub-header-2">
        <div>WEB DESIGNER</div>
        <div>
          <span className='media-link-style'><a href='https://www.linkedin.com/in/kenny-junior-baga-52856219a/' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> LINKEDIN</a></span>
        </div>
      </div>
      <div className="sub-header sub-header-3">
        <div>&copy;2022</div>
        <div></div>
      </div>
      <div className="sub-header sub-header-4">
        <div>
          <span>ABOUT ME</span>
        </div>
        <div></div>
      </div>
    </header>
    
    </div>
  )
}

export default SectionHeader