import React, { Component } from 'react';
import { Provider } from './context';

import Navbar from './components/Navbar/Navbar';
import FullCharList from './components/FullCharList/FullCharList';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar />
          <FullCharList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
