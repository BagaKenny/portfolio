import React, { useRef, useEffect} from 'react';
import { gsap, Power3} from 'gsap';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Style
import './footer.css'



const Footer = () => {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  let media_link = useRef(null)

  useEffect(() => {
    tl.from(media_link, 1 , {
      opacity: 1,
      delay: 1,
      y: 200,
      stagger: {
          amount: .4
      },
      ease: ease
  })
  })


  return (
    <div className='footer-container'>
    <ul className='media-link' ref={el => media_link = el}>
      <li className='media-link-style'> <a href='https://github.com/BagaKenny' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> GITHUB</a>  </li>
      <li className='media-link-style'> <a href='https://codepen.io/sierra_leone' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> CODEPEN</a> </li>
      <li className='media-link-style'> <a href='https://www.behance.net/kennybsga' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> BEHANCE</a> </li>
      <li className='media-link-style'> <a href='https://www.linkedin.com/in/kenny-junior-baga-52856219a/' rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faArrowRight}/> LINKEDIN</a> </li>
    </ul>
    </div>
  )
}

export default Footer