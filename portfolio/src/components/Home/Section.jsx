import React, {useRef, useEffect} from 'react';
import { gsap, Power2 } from "gsap";
import { Link } from 'react-router-dom';
import './section.css';


const Section = () => {

    let tl = new gsap.timeline();
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
    <div className="home-container" ref={line}>
      <div className="work-items" ref={work_item_h1}>
        <span>
        <Link to='/HomeMadeBySophie'>
          <div className="work-item item-1">
            <h1>HomeMade</h1>
            <span><img src={require('../../assets/hmbs/wrinkled .webp')} alt="" /></span>
            <h1>By </h1>
            <span><img src={require('../../assets/hmbs/poster.webp')} alt="" /></span>
            <h1>Sophie</h1>
            <p>2022</p>
          </div>
          </Link>
        </span>
        <div className="line" ></div>
        <span>
        <Link to="/Xplore">
        <div className="work-item item-6">
            <h1>Xplore App</h1>
            <span><img src={require('../../assets/Xplore/xplore/laptop.webp')} alt="" /></span>
            <h1>UI/UX</h1>
            <span><img src={require('../../assets/Xplore/xplore/longscroll-nobg.webp')} alt="" /></span>
            <p>2022</p>
          </div>
        </Link>
        </span>
       
        <div className="line" ref={line}></div>
        <span>
        <a href='https://bagakenny.github.io/homeplanet/' rel='noreferrer' target="_blank">
          <div className="work-item item-4">
            <h1>Home</h1>
            <span><img src={require('../../assets/Homeplanet/salon.gif')} alt="salon" /></span>
            <h1>Planet</h1>
            <span><img src={require('../../assets/Homeplanet/scroll.gif')} alt="salon" /></span>
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
            <h1>E-Commerce</h1>
            <span><img src={require('../../assets/DashBoard/Dash.png')} alt="" /></span>
            <h1>Website</h1>
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