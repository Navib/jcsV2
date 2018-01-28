import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

import HeroSlides from './loadSlides';
import mSwiperInit from './mSwiperInit';

class MainHero extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    mSwiperInit();
    $('.swiper-slide-active.mainHeroSlide').addClass('animate-up');

  }

  render(){
    return (
      <div className="mainHero-wrapper">
        <div className="swiper-container mainHeroContainer">
          <div className="swiper-wrapper mainHeroWrapper">
            {HeroSlides()}
          </div>
          <div className="swiper-pagination mainHeroPagination"></div>
        </div>
      </div>
    )
  }
}

export default MainHero;
