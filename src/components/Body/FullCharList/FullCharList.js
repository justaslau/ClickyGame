import React, { Component } from 'react';
import { Consumer } from '../../../context';
import Character from '../Character/Character';

class FullCharList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { characters } = value;
          return (
            <div>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {characters.map(char => (
                <Character key={char.id} character={char} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default FullCharList;
