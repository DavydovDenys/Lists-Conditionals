import React from "react";
import 'Person.css/'


const person = (props) => {
  return (
    <div className='Person'>
      <p></p>
      <p></p>
      <input onChange={props} type="text"/>
    </div>
  )
}

export default person;