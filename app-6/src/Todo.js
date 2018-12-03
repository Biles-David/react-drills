import React, {Components} from 'react'

const Todo = props => {
  return (
    <div>
      {props.list.map((itm)=> <h2>{itm}</h2>)}
    </div>
  )
}

export default Todo;