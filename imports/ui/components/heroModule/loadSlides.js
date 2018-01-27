import React from 'react';

//Load YT VideoSlide

function HeroSlides() {
  let ytVids = [
    {
      _id: 1,
      src: 'https://www.youtube.com/embed/nz73OSS9h1I?modestbranding=1&autohide=1&showinfo=0&controls=0',
      color:'blue',
      zindex: 1
    }, {
      _id: 2,
      src: 'https://www.youtube.com/embed/e1GSwjLoieM?modestbranding=1&autohide=1&showinfo=0&controls=0',
      color:'purple',
      zindex: 2
    }, {
      _id: 3,
      src: 'https://www.youtube.com/embed/OPqSt51kimA?modestbranding=1&autohide=1&showinfo=0&controls=0',
      color:'green',
      zindex: 3
    }, {
      _id: 4,
      src: 'https://www.youtube.com/embed/feufY7NFbPo?modestbranding=1&autohide=1&showinfo=0&controls=0',
      color:'yellow',
      zindex: 4
    }, {
      _id: 5,
      src: 'https://player.vimeo.com/video/212488303?&title=0&byline=0&portrait=0',
      color:'black',
      zindex: 5
    }
  ];

  let jcsVideos = ytVids.map((item) => (
    <div className="swiper-slide mainHeroSlide" key={item._id} style={{background:item.color}}>
      <div className="iframe-title ">{item._id}</div>
    </div>
  ))

  return jcsVideos;
}

module.exports = HeroSlides;
