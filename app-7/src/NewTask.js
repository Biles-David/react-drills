import React, {Component} from 'react'

class Newtask extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
    }
  }

  handleChange(val){
    this.setState({text: val})
  }

  handleClick(){
    this.props.task(this.state.text)
  }

  render() { 
    return ( 
      <div>
        <input id="clear" placeholder="Enter new Task" onChange={(e)=> this.handleChange(e.target.value)}></input>
        <button onClick={() => this.handleClick(this.state.text)}>Add</button>
      </div>
    );
  }
}

export default Newtask;