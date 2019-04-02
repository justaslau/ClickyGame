import React, { Component } from 'react';
import Navbar from './components/Header/Navbar/Navbar';
import Jumbotron from './components/Header/Jumbotron/Jumbotron';
import FullCharList from './components/Body/FullCharList/FullCharList';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <FullCharList />
        </div>
      </Provider>
    );
  }
}

export default App;
