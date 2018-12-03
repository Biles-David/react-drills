import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  handleChange(e){
    this.setState({text: e})
  }
  render() {
    return (
      <div className="App">
        <input className="inputBox" onChange={(e) => this.handleChange(e.target.value)}></input>
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default App;