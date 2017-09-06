import React, { Component } from 'react';
import Navbar from './components/Navigation/Navbar';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;