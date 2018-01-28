//VIDEO PAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function mSwiperInit() {
  var mainSwiper = new Swiper('.mainHeroContainer', {
    direction: 'vertical',
    pagination: {
      el: '.mainHeroPagination',
      clickable: true
    },
    // mousewheel: {
    //   invert: false,
    //   releaseOnEdges: true,
    //   eventsTarget: 'mainHeroContainer'
    // },
    clicks: {
      slideToClickedSlide: true
    }
  });
  mainSwiper.on('slideChangeTransitionStart', function() {
    var activeIndex = mainSwiper.activeIndex;
    var nextIndex = mainSwiper.activeIndex + 1;
    var prevIndex = mainSwiper.previousIndex;
    var arrayLength = mainSwiper.slides.length;

    $('.mainHeroSlide:eq(' + nextIndex + ')').removeClass('animate-up');

    // console.log(activeIndex,  nextIndex, trans);

  });
  mainSwiper.on('transitionStart', function() {
    var activeIndex = mainSwiper.activeIndex;
    var nextIndex = mainSwiper.activeIndex + 1;
    var prevIndex = mainSwiper.previousIndex;
    var arrayLength = mainSwiper.slides.length;

    $('.mainHeroSlide:eq(' + activeIndex + ')').addClass('animate-up');
    //$('.mainHeroSlide:eq('+nextIndex+')').removeClass('animate-up');
    //$('.mainHeroSlide:eq('+activeIndex+')').addClass('animate-up');
    //$('.mainHeroSlide:eq('+prevIndex+')').removeClass('animate-up');
  });
  var scrollTime = false;
  $('.mainHero-wrapper').on('mousewheel', function(e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      console.log('scrolling up !');
      scrollTime = !scrollTime
      if (scrollTime) {
        mainSwiper.slideNext(function() {});
      }
    } else {
      scrollTime = !scrollTime
      console.log('scrolling down !');
      if (scrollTime) {
        mainSwiper.slidePrev(function() {});
      }
    }
  });

  return mainSwiper;

}

module.exports = mSwiperInit;
