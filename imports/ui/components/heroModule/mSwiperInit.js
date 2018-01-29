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
    mousewheel: {
      invert: false,
      releaseOnEdges: true,
      eventsTarget: 'mainHeroContainer'
    },
    clicks: {
      slideToClickedSlide: true
    }
  });
  //mSwiperInit
  $('.swiper-slide-active.mainHeroSlide').addClass('animate-up');
  $('body').addClass('stop-scrolling');
  mainSwiper.mousewheel.disable();
  mainSwiper.on('slideChangeTransitionStart', function() {
    var activeIndex = mainSwiper.activeIndex;
    var nextIndex = mainSwiper.activeIndex + 1;
    var prevIndex = mainSwiper.previousIndex;
    var arrayLength = mainSwiper.slides.length;

    $('.mainHeroSlide:eq(' + nextIndex + ')').removeClass('animate-up');

    if (activeIndex === 2) {
      $('body').removeClass('stop-scrolling');
      $('.feed-container').scrollTop(0);
    } else if (activeIndex < 2) {
      $('body').addClass('stop-scrolling');
    }
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
      scrollTime = !scrollTime
      if (scrollTime) {
        mainSwiper.slidePrev(function() {});
      }
    } else {
      scrollTime = !scrollTime
      if (scrollTime) {
        mainSwiper.slideNext(function() {});
      }
    }
  });

  return mainSwiper;

}

module.exports = mSwiperInit;
