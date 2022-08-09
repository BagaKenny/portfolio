import React from 'react';

// Styles
import './projects.css'

// Atoms Components
import Technology from './atoms/Technology';
import ImgLarge from './atoms/ImgLarge';
import ImgMedium from './atoms/ImgMedium'

// Assets
import HedaerImg from '../../assets/hmbs/presentation.webp';
import SubImg from '../../assets/hmbs/presentation-ipad.webp';
import VideoMedium from '../../assets/hmbs/HOME MADE BY SOPHIE.webm';
import SaleMockup from '../../assets/hmbs/Mockup.webp';
import BuyMockup from '../../assets/hmbs/Buy-page.webp';
import FullPage from '../../assets/hmbs/wrinkled .webp';
import Skecth from '../../assets/hmbs/skecth.png';
import CityPoster from '../../assets/hmbs/poster.webp';

// Data
import Data from '../utils/data.json'


// Components
import TextContext from './atoms/TextContext';
import TextHeader from './atoms/TextHeader';
import Video from './atoms/Video';
import Ending from './atoms/Ending';
import TextLearn from './atoms/TextLearn';

const Project = () => {

let data = 'Skecth / Illustrator / Indesign'
  return (
    <div className='projects-body'>
    <ImgLarge url={HedaerImg} />
    <TextContext 
      firstText='  During this School project, we were mandated  to conceptualize and create a E-commerce Site to showcase Home Made By Sophie’s Products.'
      secondText='   I worked alone on the design and research to pitch the vision and execution phases. Initially, I coded the landing page in html css and with a little bit of javascript. '
      technology={<Technology />}

    />
    <ImgLarge url={SubImg} />
    <TextHeader />
    <div className='video-container'>
    <Video url={VideoMedium}/>
    <ImgMedium url={CityPoster}/>
    </div>
    <div className='project-presentation-container concept'>
    <TextContext 
      firstText={Data[1].concept}
    />
    </div>
    <div className='mockup-container'>
      <ImgMedium url={SaleMockup}/>
    </div>
    <div className='mockup-container-buy'>
      <ImgMedium url={BuyMockup}/>
    </div>
    <Ending/>
    <div className='mockup-container-buy white'>
    </div>
    <ImgLarge url={FullPage}/>
    <TextLearn />
    </div>
  )
}

export default Project