import React, {Component} from 'react'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      user: '',
      pass: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  changeUser(val){
    this.setState({user: val})
  }
  changePass(val){
    this.setState({pass: val})
  }
  handleClick(val){
    window.alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
  }

  render() {
    return (
      <div className="App">
      <input placeholder='Username' onChange={(e)=> this.changeUser(e.target.value)}></input>
      <input placeholder='Password' onChange={(e)=> this.changePass(e.target.value)}></input>
      <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}