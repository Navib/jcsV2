import React from 'react';

//Load YT VideoSlide

function LoadFirstTile() {
  let tile = [
    {
      _id: 1,
      color: '#989898',
      zindex: 1
    }
  ];

  let renderFirstTiles = tile.slice().map((item) => (
      <div className="feed-tile"  key={item._id} style={{background: item.color}}>
      </div>
  ));

  return renderFirstTiles;
}

module.exports = LoadFirstTile;
