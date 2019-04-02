import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../../context';

class Character extends Component {
  onImageClick = (character, dispatch) => {
    if (!character.clicked) {
      character.clicked = true;
      dispatch({ type: 'INCREASE_SCORE', payload: character });
    } else {
      dispatch({ type: 'RESET_SCORE', payload: character });
    }
  };

  render() {
    const { character } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <img
              alt={`The Simpsons ${character.name}`}
              src={`/images/${character.name}.jpg`}
              onClick={this.onImageClick.bind(this, character, dispatch)}
            />
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
