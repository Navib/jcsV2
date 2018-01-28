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
      color: 'purple',
      zindex: 2
    }, {
      _id: 3,
      color: 'green',
      zindex: 3
    }, {
      _id: 4,
      color: 'yellow',
      zindex: 4
    }, {
      _id: 5,
      color: 'black',
      zindex: 5
    }
  ];

  let renderTiles = tiles.map((item) => (<div className="feed-tile" key={item._id} style={{
      background: item.color
    }}>
  </div>))

  return renderTiles;
}

module.exports = LoadTiles;
