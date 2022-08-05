import React, { useState, useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";

// Style
import "./about.css";

const About = () => {
  let tl = new gsap.timeline();
  let card = new gsap.timeline({ paused: true, reversed: true });
  let ease = Power2.easeInOut();
  let img = useRef(null);
  let card_side = useRef(null);
  let card_header = useRef(null);
  let card_plus = useRef(null);
  let card_minus = useRef(null);
  let card_paragraph = useRef(null);
  let card_text_below = useRef(null);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    tl.from(img, {
      delay: 0.5,
      opacity: 0,
      y: -100,
      height: 0,
      duration: 1,
      ease: ease,
    });
    tl.from(
      [card_side, card_header],
      {
        opacity: 0,
        y: -50,
        stagger: {
          amount: 0.4,
        },
      },
      "-=.3"
    );

    card.fromTo(
      card_plus,
      {
        display: "block",
      },
      {
        display: "none",
      }
    );
    card.fromTo(
      card_minus,
      {
        display: "none",
      },
      {
        display: "block",
      }
    );

    card.fromTo(
      [card_paragraph, card_text_below],
      {
        opacity: 0,
        y: 20,
      },

      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.4,
        },
      },
      "-=2"
    );
  }, []);

  const handleText = () => (card.reversed() ? card.play() : card.reversed());

  return (
    <div className="about">
      <div className="card-animation">
        <div className="img" ref={(el) => (img = el)}></div>
        <p className="card-header" ref={(el) => (card_header = el)}>
          WEB DESIGNER
        </p>
        <div className="card-text-below" ref={(el) => (card_text_below = el)}>
          <p>Hi I'm Kenny, a newly granduated Designer and Developer</p>
        </div>
        <div className="card-side" ref={(el) => (card_side = el)}>
          <h2>
            Baga <br />
            Kenny Junior
          </h2>
          <div className="card-on" onClick={handleText}>
            <span className="card-plus" ref={(el) => (card_plus = el)}>
              +
            </span>
            <span className="card-minus" ref={(el) => (card_minus = el)}>
              -
            </span>
          </div>
        </div>
        <div className="card-side-text">
          <p className="card-paragraph" ref={(el) => (card_paragraph = el)}>
            I am a 22-year-old Cameroonian living in Switzerland. <br />{" "}
            Graduated in Interactive Media Design, with an interest in design
            and programming. <br />
            Thanks to eikon school, I acquired the skills and autonomy needed to
            design and carry out professional projects. <br />
            My goal is to participate in innovative projects and facilitate the
            lives of different human beings through design and technology..
            <hr />
            <span className="full-page-layout">
              My reason for being as a Dev and Designer, constantly pushes me to
              curiosity, and to meet people from different backgrounds. During
              my 3 years of training, I participated, 1 day out of 5, in an
              internship called eikonWork, where I was able to work with actors
              from various sectors, cultural, humanitarian, events, scientific,
              The projects of this internship n were all related to FrontEnd Dev
              or UX/UI but they allowed me to gain self-confidence, to learn to
              understand real professional projects, and to be in contact with
              customers. I enjoy learning, absorbing the information around me.
              Indeed I consider myself as an empty shell, as an observer. This
              last quality has always been useful to me during my various
              projects and at times when I stagnated.. When I start on a new
              project, what I know is that I don't know. It's important for me
              to educate myself and to remain humble, to do tests, to
              schematize, because in my opinion that's the best way to be
              attentive and meet the demands of a project.
            </span>
            <b>Technology:</b> <br/> 
           <b>UX/UI:</b>  Sketch, Figma, Notion, Photoshop,
            Illustrator, AE, InDesign <b> FrontEnd </b> : HTML CSS JS, Bootstrap,
            ReactJs, Webpack, Git, Redux, FireBase, NPM
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
