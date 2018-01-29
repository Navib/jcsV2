import React, { Component } from 'react';

class FooterMod extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
  }

  render(){
    return (
      <div className="footer-container">
        <div className="footer-wrapper">
          <h2>Justin C. Schilling</h2>
          <ul className="social-list">
            <li className="social-item">1</li>
            <li className="social-item">2</li>
            <li className="social-item">3</li>
            <li className="social-item">4</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default FooterMod;
