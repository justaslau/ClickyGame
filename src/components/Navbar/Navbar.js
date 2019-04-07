import React, { Component } from 'react';
import './navbar.css';
import { Consumer } from '../../context';

class Header extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { score, topScore, failAnimation } = value;
          return (
            <div className="navbar">
              <div className="container d-flex flex-wrap justify-content-between">
                <div className="p-1 mt-1">
                  <h3 className="clicky">
                    <i className="far fa-hand-pointer logo-icon mr-2" />
                    <strong>Clicky</strong> <span className="game">Game</span>
                  </h3>
                </div>
                <div
                  className={
                    failAnimation === null
                      ? 'middle-text hidden-md-down p-3 mt-1'
                      : failAnimation === false
                      ? 'middle-text hidden-md-down p-3 mt-1'
                      : 'middle-text hidden-md-down p-3 mt-1 incorrect'
                  }
                >
                  <h4>
                    {failAnimation === null
                      ? 'Click Image to Start'
                      : failAnimation === false
                      ? 'Good job! Keep going!'
                      : 'You did mistake. Try again!'}
                  </h4>
                </div>
                <div className="text-right d-flex p-3 mt-2">
                  <h5 className="mr-3">
                    <strong className="text-success d-flex">
                      Your Score: <span className="score">{`${score}`}</span>
                    </strong>
                  </h5>
                  <h5>
                    <strong className="text-danger d-flex">
                      Top Score: <span className="score">{`${topScore}`}</span>
                    </strong>
                  </h5>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
