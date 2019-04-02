import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Clicky Game!</h1>
          <h2 className="jumbotron-heading">
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
