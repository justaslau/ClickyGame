import React, { Component } from 'react';
import './header.css';
import { Consumer } from '../../../context';

class Header extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { score, topScore } = value;
          return (
            <div>
              <nav className="navbar">
                <div className="col-4">Clicky Game</div>
                <div className="col-4">Click an image to begin!</div>
                <div className="col-4">{`Score: ${score} | Top Score: ${topScore}`}</div>
              </nav>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
