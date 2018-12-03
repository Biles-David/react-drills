import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      list: ['David','Genesis','Football']
    }
  }
  render() {
    return (
      <div className="App">
      <ul>{this.state.list.map((itm) => <h2>{itm}</h2>)}
      </ul>
      </div>
    );
  }
}

export default App;
