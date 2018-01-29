import React, { Component } from 'react';
import LoadTiles from './loadTiles';
import LoadFirstTile from './loadFirst';
import slideFeed from './slideFeed';
import reveal from './reveal';

class FeedMasonry extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    slideFeed();
    reveal();

  }

  render(){
    return (
      <div className="feed-container">
        <div className="feed-wrapper hideme">
          <div className="one-one-50">
            {LoadFirstTile(this.props)}
          </div>
          <div className="two-two-50">
            {LoadTiles(this.props)}
          </div>
        </div>
      </div>
    )
  }
}
export default FeedMasonry;
