import React from "react";


const charComponent = (props) => {

  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return (
    <div onClick={props.delete} style={style}>
      <h1>{props.char}</h1>
    </div>
  )
}

export default charComponent;