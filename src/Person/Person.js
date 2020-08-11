import React from "react";
import './Person.css'


const person = (props) => {
  return (
    <div className='Person'>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p></p>
      <input onChange={props} type="text"/>
    </div>
  )
}

export default person;