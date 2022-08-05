import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { gsap, Power2 } from "gsap";
// CSS

import "./home.css";

const Main = () => {
  let tl = new gsap.timeline();
  let ease = Power2.easeInOut();
  let index = useRef(null);
  let index2 = useRef(null);
  let index3 = useRef(null);
  let index4 = useRef(null);
  let index5 = useRef(null);
  let index6 = useRef(null);
  let index7 = useRef(null);
  let index8 = useRef(null);
  let index9 = useRef(null);

  useEffect(() => {
    tl.to(index2, 1, {
      opacity: 1,
      y: "-30",
    });

    tl.to(
      [index, index2, index3, index4, index5, index6, index7, index8, index9],
      0.5,
      {
        opacity: 1,
        y: "0",
        stagger: {
          amount: 1,
        },
        ease: ease,
      }
    );
  }, []);

  return (
    <div className="main-container">
      <h4 ref={(el) => (index2 = el)}>INDEX</h4>

      <div className="block-content">
        <h2 className="index">
          <span ref={(el) => (index = el)} className="link-container">
            Portfolio 2022{" "}
            <div ref={(el) => (index = el)} className="specialisation">
              (UI/UX/FRONT) /
            </div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index3 = el)} className="link-container">
            NewsRoom 2021 <div className="specialisation">(UI/UX) /</div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index4 = el)} className="link-container">
            SICCH 2021 <div className="specialisation">(UI/UX) /</div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index5 = el)} className="link-container">
            Jordan Shoes 2021 <div className="specialisation">(UI/UX) /</div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index6 = el)} className="link-container">
            DashBoard 2022 <div className="specialisation">(FRONT) /</div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index7 = el)} className="link-container">
            Landing Pages 2022 <div className="specialisation">(FRONT) /</div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index8 = el)} className="link-container">
            ToDo List 2022 <div className="specialisation">(FRONT) /</div>
          </span>
        </h2>

        <h2 className="index">
          <span ref={(el) => (index9 = el)} className="link-container">
            Pomodoro 2022 <div className="specialisation">(FRONT) /</div>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Main;
