import React, { Component } from 'react';
import charsFromFile from './characters.json';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return {
        ...state,
        characters: state.characters.map(char =>
          char.id === action.payload.id ? action.payload : char
        ),
        score: ++state.score,
        incrementScore: ++state.incrementScore,
        topScore:
          state.topScore < state.incrementScore
            ? state.incrementScore
            : state.topScore
      };
    case 'RESET_SCORE':
      charsFromFile.map(char => (char.clicked = false));
      return {
        ...state,
        score: 0,
        characters: charsFromFile,
        incrementScore: 0
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    characters: charsFromFile,
    score: 0,
    topScore: 0,
    incrementScore: 0,
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
