import React from 'react';

function reveal() {
  $(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

      /* Check the location of each desired element */
      $('.hideme').each(function(i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() ;
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 1000;

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {

          $(this).css({'opacity': '1', top: '0'});

        } else {
          $(this).css({'opacity': '0', top: '80px'});
        }

      });

    });

    //scroll hover tiles
    $('.feed-tile:nth-child(1).arrow_box .content-wrapper, .feed-tile:nth-child(4).arrow_box .content-wrapper').on('mouseenter', function() {
      $(this).parent().next().find('.content-wrapper').addClass('fixes');
      $(this).parent().prev().find('.content-wrapper').addClass('fixes');
    });
    $('.feed-tile:nth-child(1).arrow_box .content-wrapper, .feed-tile:nth-child(4).arrow_box .content-wrapper').on('mouseleave', function() {
      $(this).parent().next().find('.content-wrapper').removeClass('fixes');
      $(this).parent().prev().find('.content-wrapper').removeClass('fixes');
    });

  });
}

module.exports = reveal;
