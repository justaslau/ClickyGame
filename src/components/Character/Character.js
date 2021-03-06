import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import './character.css';

class Character extends Component {
  onImageClick = (character, dispatch) => {
    !character.clicked
      ? dispatch({ type: 'INCREASE_SCORE', payload: character })
      : dispatch({ type: 'RESET_SCORE', payload: character });
  };

  render() {
    const { character } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="col-3">
              <img
                className="char"
                alt={`The Simpsons ${character.name}`}
                src={`images/${character.name}.jpg`}
                onClick={this.onImageClick.bind(this, character, dispatch)}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
