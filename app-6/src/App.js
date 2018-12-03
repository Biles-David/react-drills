import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:'',
      list:['stuff','Things','Lori']
    }
  }
  handleChange(val){
    this.setState({text: val})
  }
  handleClick(){
    let arr = this.state.list
    arr.push(this.state.text)
    this.setState({list: arr})
  }
  render() {
    return (
      <div className="App">
      <h1>My to-do list:</h1>
      <input onChange={(e)=> this.handleChange(e.target.value)}></input>
      <button onClick={()=>this.handleClick(this.state.text)}>Add</button>
      <Todo list={this.state.list} />
      </div>
    );
  }
}

export default App;
