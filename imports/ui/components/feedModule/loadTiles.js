import React from 'react';

//Load YT VideoSlide

function LoadTiles() {
  let tiles = [
    {
      _id: 1,
      color: 'blue',
      zindex: 1
    }, {
      _id: 2,
      color: '#ffffff',
      zindex: 2
    }, {
      _id: 3,
      color: 'black',
      zindex: 3
    }, {
      _id: 4,
      color: 'black',
      zindex: 4
    }, {
      _id: 5,
      color: '#ffffff',
      zindex: 5
    }
  ];

  let renderTiles = tiles.slice(1).map((item) => (
      <div className="feed-tile arrow_box" key={item._id}style={{background: item.color}}>
      </div>
  ));

  return renderTiles;
}

module.exports = LoadTiles;
