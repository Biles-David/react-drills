import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'
import List from './List'
import Todo from './Todo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ['Basketball','Homeostasis'],
    }
    this.addToList = this.addToList.bind(this)
  }

  addToList(val){
    let arr = [...this.state.list,val]
    this.setState({list: arr})
  }

  render() {
    return (
      <div className="App">
        <Todo header={"My Todo List"}/>
        <NewTask task={this.addToList}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
