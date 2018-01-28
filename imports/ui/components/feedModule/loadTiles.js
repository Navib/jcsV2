import React from 'react';

//Load YT VideoSlide

function LoadTiles(id) {
  let selection = id.props;

  //Declare variable
  let tiles = [];
  let tiles1 = [
    {
      _id: 2,
      color: '#ffffff',
      zindex: 2,
      title: 'First Feedback'
    }, {
      _id: 3,
      color: 'black',
      zindex: 3,
      title: 'First Feedback'
    }, {
      _id: 4,
      color: 'black',
      zindex: 4,
      title: 'First Feedback'
    }, {
      _id: 5,
      color: '#ffffff',
      zindex: 5,
      title: 'First Feedback'
    }
  ];
  let tiles2 = [
    {
      _id: 2,
      color: '#ffffff',
      zindex: 2
    }, {
      _id: 3,
      color: 'black',
      zindex: 3,
      title: 'Second FeedBack'
    }, {
      _id: 4,
      color: 'black',
      zindex: 4,
      title: 'Second FeedBack'
    }, {
      _id: 5,
      color: '#ffffff',
      zindex: 5,
      title: 'Second FeedBack'
    }
  ];
  function detectProps(selection) {
    console.log(selection);

    if (selection === '1') {
      console.log("pops1");
      let renderTiles = tiles1.map((item) => (<div className="feed-tile arrow_box" key={item._id} style={{
          background: item.color
        }}>
        <h3>{item.title}</h3>
      </div>));

      return renderTiles;

    } else if (selection === '2') {
      console.log("pops2");
      let renderTiles = tiles2.map((item) => (<div className="feed-tile arrow_box" key={item._id} style={{
          background: item.color
        }}>
        <h3>{item.title}</h3>
      </div>));

      return renderTiles;
    }
  }

  return detectProps(selection);

}

module.exports = LoadTiles;
