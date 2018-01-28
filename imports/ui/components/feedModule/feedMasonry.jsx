import React, { Component } from 'react';
import LoadTiles from './loadTiles';
import LoadFirstTile from './loadFirst';
import slideFeed from './slideFeed';

class FeedMasonry extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    slideFeed();
  }

  render(){
    return (
      <div className="feed-container">
        <div className="feed-wrapper">
          <div className="one-one-50">
            {LoadFirstTile()}
          </div>
          <div className="two-two-50">
            {LoadTiles()}
          </div>
        </div>
      </div>
    )
  }
}
export default FeedMasonry;
