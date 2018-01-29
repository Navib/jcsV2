import React from 'react';
import FourTiles from './json/fourTiles';

function LoadTiles(id) {
  let selection = id.props;
  let tiles1 = FourTiles.Tile1;
  let tiles2 = FourTiles.Tile2;
  let tiles3 = FourTiles.Tile3;
  let tiles4 = FourTiles.Tile4;

  function detectProps(selection) {
    if (selection === '1') {
      let renderTiles = tiles1.map((item) => (<div className="feed-tile arrow_box" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage:'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundColor: item.color, backgroundPosition: 'center top'
          }}>
          <p className="content-quote">{item.text}</p>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderTiles;

    } else if (selection === '2') {
      let renderTiles = tiles2.map((item) => (<div className="feed-tile arrow_box" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage:'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundColor: item.color, backgroundPosition: 'center top'
          }}>
          <p className="content-quote">{item.text}</p>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderTiles;

    } else if (selection === '3') {
      let renderTiles = tiles3.map((item) => (<div className="feed-tile arrow_box" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage:'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundColor: item.color, backgroundPosition: 'center top'
          }}>
          <p className="content-quote">{item.text}</p>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderTiles;

    } else if (selection === '4') {
      let renderTiles = tiles4.map((item) => (<div className="feed-tile arrow_box" key={item._id}>
        <div className="content-wrapper" style={{
            backgroundImage:'url('+item.bg_img+')',backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundColor: item.color, backgroundPosition: 'center top'
          }}>
          <p className="content-quote">{item.text}</p>
          <h3>{item.title}</h3>
        </div>
      </div>));

      return renderTiles;
    }
  }

  return detectProps(selection);

}

module.exports = LoadTiles;
