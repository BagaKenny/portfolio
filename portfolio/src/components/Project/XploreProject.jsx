import React from "react";

// Styles
import "./projects.css";

// Atoms Components
import Technology from "./atoms/Technology";
import ImgLarge from "./atoms/ImgLarge";
import ImgMedium from "./atoms/ImgMedium";

// Assets
import HedaerImg from "../../assets/Xplore/xplore/longscroll-article.webp";
import SubImg from "../../assets/Xplore/xplore/hand2.webp";
import VideoMedium from "../../assets/Xplore/demo.mp4";
import SaleMockup from "../../assets/Xplore/xplore/superpose.webp";
import BuyMockup from "../../assets/hmbs/Buy-page.webp";
import FullPage from "../../assets/Xplore/xplore/laptop.webp"
import Sketch from "../../assets/Xplore/sketching.png";
import Theme from '../../assets/Xplore/theme.png'
import CityPoster from "../../assets/Xplore/xplore/9screens.webp";

// Data
import Data from "../utils/data.json";

// Components
import TextContext from "./atoms/TextContext";
import TextHeader from "./atoms/TextHeader";
import Video from "./atoms/Video";
import Ending from "./atoms/Ending";
import TextLearn from "./atoms/TextLearn";

const XploreProject = () => {
  let data = "Skecth / Illustrator / Indesign";
  return (
    <div className="projects-body">
      <ImgLarge url={HedaerImg} />
      <TextContext
        firstText={Data[0].presentaion}
        secondText="I choosed to work on a native app, a Xplore is a science app, which treats subjects such as design about cosmology and astronomy"
        technology={<Technology />}
      />
      <ImgLarge url={SubImg} />
      <div className="text-header-container">
        <h1 className="text-header-h1">Where Great Minds Meet</h1>
        <p className="text-header-h1-span">
          <span className="accent">
            Xplore, a pragmatic way of seeing the unseen
          </span>{" "}
          <br />
          On Xplore, my main goal was to modernize the way we discovering things and sharing our passion with people who love what we love. Achieving this goal is highly dependent on the ability to communicate the brand identity with consistency, accuracy, confidence and purpose.
        </p>
        <p className="text-header-h1-span">
          <span className="accent">In 93% of the user interviews, people say using auditive or visual media for education and 63% others said being bored reading science.</span> <br />
          With the articles pages as the main touch points, I set up the app's architecture based on the two main use-cases: 'I don't want to be bored' or 'I use primarly youtube or podcast for education.
        </p>
      </div>
      <div className="video-container">
        <ImgMedium url={CityPoster} />
        <h1 className="text-header-h1 white">We are Scientists</h1>
      </div>
      <div className="video-container flex">
        <h1 className="text-header-h1 white">The PROTOTYPE</h1>
        <Video url={VideoMedium}/>
      </div>
      <div className="project-presentation-container concept">
        <TextContext firstText='One of the most exiting things about building a new product is being able to experiment and take risks without too much to loose' />
      </div>
      <div className="mockup-container sketch">
        <ImgMedium url={Sketch} />
      </div>
      <div className="mockup-container theme">
        <ImgMedium url={Theme} />
      </div>
      <div className="mockup-container-buy">
      <TextContext firstText='The next big challenge was figuring out the most meaningful logic to organize future hundreds of themes available for each article, which I have achieve through hashtags and buttons' />
        <ImgLarge url={SaleMockup} />
      </div>
      <div className="text-header-container">
      <h1 className="text-header-1">
        Learn by having fun is better
      </h1>
      <p className="text-header-h1-span">
        <span className="accent">
        "New study in mice shows how the brain learns to reproduce patterns of brain activity that lead to reward; provides insights for treating addiction and obsessive-compulsive disorder."
        </span> <br />
        Finally, in Xplore going further than just showcasing information was a crucial part, podcast and community was a way to introduce fun in learning new and complex things.
        Believing reading question everyday man and women, and speaking the "same language", going away from that educational tone encourages engagement for the costumers
      </p>
    </div>
      <div className="mockup-container-buy white"></div>
      <ImgLarge url={FullPage} />
      <div className='text-context-container lesson-learn'>
    <h1>
      What I've learned
    </h1>
     <ul className='text-learn-list'>
     <li>This was my first time doing survey and going really far in user research, it was intimidating at first but finally it went well </li>
      <li>People gets confused when they're too many functionalities, the focus should be about what I'm trying to tell with my keeping and selling them first and then think about some bonus functionalities after wards </li>
      <li>During this period, I went to spend a day in a UX company, it was really interesting seeing their workflows, patterns and environnemnet </li>
     </ul>
    </div>
    </div>
  );
};

export default XploreProject;
