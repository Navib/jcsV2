import React from 'react';
import SingleTile from './json/singleTiles';

function LoadFirstTile(id) {
  let selection = id.props;
  let tile1 = SingleTile.Tile1;
  let tile2 = SingleTile.Tile2;

  function detectProps(selection) {

    if (selection === '1') {
      console.log("pops1");
      let renderFirstTiles = tile1.map((item) => (<div className="feed-tile" key={item._id} style={{
          background: item.color
        }}>
        <h3>{item.title}</h3>
      </div>));

      return renderFirstTiles;

    } else if (selection === '2') {
      console.log("pops2");
      let renderFirstTiles = tile2.map((item) => (<div className="feed-tile" key={item._id} style={{
          background: item.color
        }}>
        <h3>{item.title}</h3>
      </div>));

      return renderFirstTiles;
    }
  }

  return detectProps(selection);

}

module.exports = LoadFirstTile;
