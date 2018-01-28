//VIDEO PAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function mSwiperInit() {
  var mainSwiper = new Swiper('.mainHeroContainer', {
    direction: 'vertical',
    pagination: {
      el: '.mainHeroPagination',
      clickable: true,
    },
    mousewheel: {
      invert: false,
      releaseOnEdges: true,
      eventsTarget: 'mainHeroContainer'

    },
  });
  mainSwiper.on('slideChangeTransitionStart', function () {
    console.log('slide changed');
      var activeIndex = mainSwiper.activeIndex;
      var nextIndex = mainSwiper.activeIndex + 1;
      var prevIndex = mainSwiper.previousIndex;
      var arrayLength = mainSwiper.slides.length;

        $('.mainHeroSlide:eq('+nextIndex+')').removeClass('animate-up');
        $('.mainHeroSlide:eq('+activeIndex+')').addClass('animate-up');
      console.log(activeIndex,  nextIndex, trans);

  });
  mainSwiper.on('transitionStart', function() {
    var activeIndex = mainSwiper.activeIndex;
    var nextIndex = mainSwiper.activeIndex + 1;
    var prevIndex = mainSwiper.previousIndex;
    var arrayLength = mainSwiper.slides.length;

    //$('.mainHeroSlide:eq('+prevIndex+')').removeClass('animate-up');
  });


  return mainSwiper;

}

module.exports = mSwiperInit;
