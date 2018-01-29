import React from 'react';
import SingleTile from './json/singleTiles';

function LoadFirstTile(id) {
  let selection = id.props;
  let tile1 = SingleTile.Tile1;
  let tile2 = SingleTile.Tile2;
  let tile3 = SingleTile.Tile3;
  let tile4 = SingleTile.Tile4;

  function detectProps(selection) {

    if (selection === '1') {
      let renderFirstTiles = tile1.map((item) => (<div className="feed-tile" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage: 'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition: 'center center'
          }}>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderFirstTiles;

    } else if (selection === '2') {
      let renderFirstTiles = tile2.map((item) => (<div className="feed-tile" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage: 'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition: 'center center'
          }}>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderFirstTiles;

    } else if (selection === '3') {
      let renderFirstTiles = tile3.map((item) => (<div className="feed-tile" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage: 'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition: 'center center'
          }}>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderFirstTiles;

    } else if (selection === '4') {
      let renderFirstTiles = tile4.map((item) => (<div className="feed-tile" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage: 'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition: 'center center'
          }}>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderFirstTiles;
    }
  }

  return detectProps(selection);

}

module.exports = LoadFirstTile;
