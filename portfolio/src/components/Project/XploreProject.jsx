import React from 'react';

// Styles
import './projects.css'

// Atoms Components
import Technology from './atoms/Technology';
import ImgLarge from './atoms/ImgLarge';
import ImgMedium from './atoms/ImgMedium'

// Assets
import HedaerImg from '../../assets/Xplore/xplore/longscroll-article.webp';
import SubImg from '../../assets/Xplore/xplore/hand2.webp';
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

const XploreProject = () => {

let data = 'Skecth / Illustrator / Indesign'
  return (
    <div className='projects-body'>
    <ImgLarge url={HedaerImg} />
    <TextContext 
      firstText="During my end of year project, we were mandated to think and create an editorial support with the theme of 'Hors-Champ' Outer Sight"
      secondText="I choosed to work on a native app, a Xplore is a science app, which treats subjects such as design about cosmology and astronomy"
      technology={<Technology />}

    />
    <ImgLarge url={SubImg} />
    <div className="text-header-container">
      <h1 className="text-header-h1">
        Where Great Minds Meet
      </h1>
      <p className="text-header-h1-span">
        <span className="accent">
          Being Green is simply not enough anymore.
        </span>
        In today's market, beauty is a focus point, customers will engaged if
        you can provide both beauty and consciousness.
      </p>
      <p className="text-header-h1-span">
        <span className="accent">Glamourize being organic.</span> Costumers
        usually feel like they should sacrifice to go with natural products,
        Showing that it is not because we're ethical that we should'nt be
        glamour and aim for broader things.
      </p>
    </div>
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

export default XploreProject