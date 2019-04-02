import React, { Component } from 'react';
import { Consumer } from '../../../context';
import Character from '../Character/Character';
import './fullcharlist.css';

class FullCharList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { animation, characters } = value;
          return (
            <div className={animation ? 'ahashakeheartache' : null}>
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
