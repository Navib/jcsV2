import React from 'react';

//Slide Feed Module wrapper
// Developer: Ivan Baena
//

function slideFeed() {
  $('body').on('mousewheel', function(e) {
    //Get Scroll Position
    let scrollPos = $(document).scrollTop();
    //Get Div Height
    let divHeight = $('.feed-wrapper').height();
    //Get screen transform height
    let newHeight = divHeight - scrollPos;
    //Fire Animation
    if (scrollPos > 0) {
      $('body').css({'transform':'translate3d(0, -'+newHeight+'px, 0)'});
    }else if (scrollPos === 0){
      $('body').css({'transform':'translate3d(0, 0, 0)'});
    }
  });
}
module.exports = slideFeed;
