import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text:'',
      list: ['Mario','Luigi','Donkey Kong','Toad', 'Peach','Link','Zelda']
    }
  }
  handleChange(val){
    this.setState({text: val})
  }
  render() {
    return (
      <div className="App">
        <input className="inputBox" onChange={(e)=> this.handleChange(e.target.value)}></input>
        <div>
          {this.state.list.filter((e,i)=>this.state.list[i].includes(this.state.text)).map((itm) => <h2>{itm}</h2>)}
        </div>
      </div>
    );
  }
}

export default App;
