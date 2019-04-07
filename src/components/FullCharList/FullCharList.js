import React, { Component } from 'react';
import { Consumer } from '../../context';
import Character from '../Character/Character';
import './fullcharlist.css';

class FullCharList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { failAnimation, characters } = value;
          return (
            <div className="container mt-5">
              <div className={failAnimation ? 'shakeDiv row' : 'row'}>
                {characters.map(char => (
                  <Character key={char.id} character={char} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default FullCharList;
