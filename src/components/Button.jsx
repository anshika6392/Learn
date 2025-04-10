import React from 'react'

const Button = (props) => {
  return (
    <div>{props.children}
    <button onClick={props.handleClick}>
    {props.text}
    </button>
    <h2>hello</h2>
    
    </div>
    
  )
}

export default Button