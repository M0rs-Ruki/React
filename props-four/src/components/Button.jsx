
import React from 'react'

function Button(props) {
  return (
    <div>
        <p>{props.children}</p>
        <button onClick={props.incrementCount}>
            {props.name}
        </button>
    </div>
  )
}

export default Button