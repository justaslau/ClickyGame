import React, { Component } from 'react';
import charsFromFile from './characters.json';
import shuffle from 'shuffle-array';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      state.characters.map(char =>
        char.id === action.payload.id ? (char.clicked = true) : char
      );
      return {
        characters: shuffle(state.characters),
        score: ++state.score,
        failAnimation: false,
        topScore: state.topScore < state.score ? state.score : state.topScore
      };

    case 'RESET_SCORE':
      state.characters.map(char => (char.clicked = false));
      return {
        characters: shuffle(state.characters),
        score: 0,
        failAnimation: true
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    characters: shuffle(charsFromFile),
    score: 0,
    topScore: 0,
    failAnimation: null,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
