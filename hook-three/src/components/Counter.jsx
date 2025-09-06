import React, { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
        <p id='text'>The Nuber of clicks is currently {count}</p>
        <button id='button' onClick={() => setCount(count+1)} >Click Me</button>
    </div>
  )
}

export default Counter