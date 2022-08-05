import React, { useRef, useEffect } from 'react';
import { 
    Link } from 'react-router-dom';
import {gsap, Power3} from 'gsap';
import './header.css';


const Header = () => {

    let tl = new gsap.timeline();
    let ease = Power3.easeOut();
    let logo = useRef(null);
    let menu_item1 = useRef(null)
    let menu_item2 = useRef(null)

    useEffect(() => {
        tl.from(logo, 1, {
            opacity: 0,
            y: '100',
        });
        tl.from([menu_item1, menu_item2], 1 , {
            opacity: 0,
            skewY: 10,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    })




  return (
    
    <div className='header'>
    

        <div className='logo' ref= {el => logo = el}>
        <Link to='/' className='link-style'>BAGA KENNY JUNIOR</Link> 
        </div>

        <div className='menu'>
        <div className='menu-item' ref = {el => menu_item1 = el}>
          <Link to='/AboutPage' className='link-style'>ABOUT</Link>      
        </div>
        <div className='menu-item' ref = {el => menu_item2 = el}><Link to='/ExtraPage' className='link-style'>EXTRAS</Link> </div>
        </div>
    </div>
  )
}

export default Header