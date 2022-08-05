import React, {useRef, useEffect} from 'react';
import { gsap, Power2 } from "gsap";
import './section.css';
import SectionHeader from '../Header/SectionHeader';

// Images
import Image from '../../assets/holo.gif';

const Section = () => {

    let tl = new gsap.timeline();
    let ease = Power2.easeInOut();
    let line = useRef(null);
    let work_item_h1 = useRef(null);
    let work_item_p = useRef(null);
    let q = gsap.utils.selector(work_item_h1)
    let v = gsap.utils.selector(work_item_p)
    let d = gsap.utils.selector(line)
    useEffect(() => {
        tl.from(q(".work-item h1, .work-item p"), {
            y: 150,
            duration: .5,
            stagger: {
                amount: 2.5,
            }
          },
          "-=3"
        );
        tl.from(d(".line"), {
            duration: 1,
            width: '0%',
            stagger: {
                amount: 2,
            }
          }
        );

      }, []);





  return (
    <>
    <SectionHeader />
    <div className="container" ref={line}>
      <div className="work-items" ref={work_item_h1}>
        <span>
          <div className="work-item item-1">
            <h1>Portfolio</h1>
            <span><img src={require('../../assets/Portfolio/portfolio.webp')} alt="" /></span>
            <h1>UX</h1>
            <span><img src={require('../../assets/Portfolio/homepage.gif')} alt="" /></span>
            <h1>FrontEnd</h1>
            <p>2022</p>
          </div>
        </span>
        <div className="line" ></div>
        <span>
        
        <div className="work-item item-3">
            <h1>Jordan</h1>
            <span><img src={require('../../assets/Jordan/jordan.webp')} alt="" /></span>
            <h1>Shoes</h1>
            <span><img src={require('../../assets/Jordan/jordan1.webp')} alt="" /></span>
            <h1>(UI/UX)</h1>
            <p>2021</p>
          </div>
          
        </span>
        <div className="line"></div>
        <span>
        <div className="work-item item-2">
            <h1>News</h1>
            <span><img src={Image} alt="" /></span>
            <h1>Room</h1>
            <span><img src="/4.jpg" alt="" /></span>
            <h1>(UI/UX)</h1>
            <p>2021</p>
          </div>
        </span>
        <div className="line"></div>
        <span>
        <a href='https://bagakenny.github.io/gallery/' rel='noreferrer' target="_blank">
          <div className="work-item item-4">
            <h1>Gallery</h1>
            <span><img src={require('../../assets/Gallery/gallery.gif')} alt="" /></span>
            <h1>Front</h1>
            <p>2022</p>
          </div>
          </a>
        </span>
        <div className="line"></div>
        <span>
        <a href='https://bagakenny.github.io/todolist/' rel='noreferrer' target="_blank">
          <div className="work-item item-5">
            <h1>ToDo </h1>
            <span><img src={require('../../assets/ToDo/todo.webp')} alt="" /></span>
            <h1>List X</h1>
            <span><img src="/4.jpg" alt="" /></span>
            <h1>FrontEnd</h1>
            <p>2022</p>
          </div>
          </a>
        </span>
        <div className="line"></div>
        <span>
        <div className="work-item item-6">
            <h1>Xplore App</h1>
            <span><img src={require('../../assets/Xplore/Homepage.webp')} alt="" /></span>
            <h1>UI/UX</h1>
            <p>2022</p>
          </div>
        </span>
        <div className="line" ref={line}></div>
        <span>
        <a href='https://bagakenny.github.io/pomodoro/' rel='noreferrer' target="_blank">
          <div className="work-item item-7">
            <h1>Pomodoro</h1>
            <span><img src={require('../../assets/Pomodoro/pomodoro.gif')} alt="" /></span>
            <h1>App</h1>
            <span><img src="/4.jpg" alt="" /></span>
            <h1>FrontEnd</h1>
            <p>2022</p>
          </div>
          </a>
        </span>
        <div className="line"></div>
        <span>
        <a href='https://bagakenny.github.io/mydashboard/' rel='noreferrer' target="_blank">
        <div className="work-item item-8" ef={work_item_h1}>
            <h1>DashBoard</h1>
            <span><img src={require('../../assets/DashBoard/Dash.png')} alt="" /></span>
            <h1>(FrontEnd)</h1>
            <p>2022</p>
          </div>
          </a>
        </span>
        <div className="line" ></div>
      </div>
    </div>
    </>
  )
}

export default Section