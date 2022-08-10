import React, { useState, useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";

// Style
import "./about.css";

// Component

import Footer from "../Footer/Footer";


// Assets

import ImgAbout from '../../assets/aboutme.png'
import ImgMedium from "../Project/atoms/ImgMedium";
import TextContext from "../Project/atoms/TextContext";
const About = () => {
  return (
    <div className="about">
    <ImgMedium url={ImgAbout} />
    <p className="about-me-text">
    I am a 22-year-old Web Designer living in Switzerland. Graduated in Interactive Media Design, with an interest in design and programming. <br />
    My goal is to participate in innovative projects and facilitate the lives of different human beings through design and technology..
    </p>
    </div>
  );
};

export default About;
