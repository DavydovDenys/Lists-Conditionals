import React from "react";
import './ValidationComponent.css'


const validationComponent = (props) => {
  let text = null
  if (props.textLength >= 5)  {
    text = (
      <div>
        <p>Text long enough</p>
      </div>
    );
  } else {
    text = (
      <div>
        <p>Text too short</p>
      </div>
    );
  }

  return (
    <div className='Person'>
      <p>{props.textLength}</p>
      {text}
    </div>
  )
}

export default validationComponent;