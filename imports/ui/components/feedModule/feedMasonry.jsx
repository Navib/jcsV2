import React, { Component } from 'react';
import LoadTiles from './loadTiles';

class FeedMasonry extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }

  render(){
    return (
      <div className="feed-container">
        <div className="feed-wrapper">
          {LoadTiles()}
        </div>
      </div>
    )
  }
}
export default FeedMasonry;
