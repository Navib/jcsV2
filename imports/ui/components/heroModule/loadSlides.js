import React from 'react';

//Load YT VideoSlide

function HeroSlides() {
  let ytVids = [
    {
      _id: 1,
      src: 'videos/demoReel.mp4',
      color:'#bab4b4',
      zindex: 1
    }, {
      _id: 2,
      src: 'https://www.youtube.com/embed/e1GSwjLoieM?modestbranding=1&autohide=1&showinfo=0&controls=0',
      color:'#010a10',
      zindex: 2
    }, {
      _id: 3,
      src: 'https://www.youtube.com/embed/OPqSt51kimA?modestbranding=1&autohide=1&showinfo=0&controls=0',
      color:'#084048',
      zindex: 3
    },
    // {
    //   _id: 4,
    //   src: 'https://www.youtube.com/embed/feufY7NFbPo?modestbranding=1&autohide=1&showinfo=0&controls=0',
    //   color:'#2c1d52',
    //   zindex: 4
    // }, {
    //   _id: 5,
    //   src: 'https://player.vimeo.com/video/212488303?&title=0&byline=0&portrait=0',
    //   color:'#4e6a79',
    //   zindex: 5
    // }
  ];

  let jcsVideos = ytVids.map((item) => (
    <div className="swiper-slide mainHeroSlide" key={item._id} style={{background:item.color}}>
      <div className="video-wrapper">
        <video loop controls autoPlay preload="none" className="fullscreen-bg__video embed-responsive-item" id="home-video">
          <source src={item.src} type="video/mp4"/>
        </video>
      </div>
    </div>
  ))

  return jcsVideos;
}

module.exports = HeroSlides;
