import React, {Component} from 'react'

const List = props => {

  let list = props.list.map((e)=><h3>{e}</h3>)
  
  return (
    <h3>
      {list}
    </h3>
  )
}

export default List;