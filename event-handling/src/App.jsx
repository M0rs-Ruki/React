import { useState } from 'react'

import './App.css'

function App() {

  const handleClick = () => {
    alert("You clicked the button")
  }

  const MouseOver = () => {
    alert("You hovered over the paragraph")
  }

  const heldleChange = (e) => {
    // console.log("In The Input Field The Value Is Changed");
    console.log("Value till Now", e.target.value);
    
  }

  const hadleSubmit = (e) => {
    e.preventDefault();
    // Custom Behaviour
   alert("Shoud We Submit The Form") 
  }

  return (
    <div>

      <button onClick={alert("You clicked the button")}>
        Click Me
      </button>


      {/* <form onSubmit={hadleSubmit}>
        <input type="text" onChange={heldleChange} />
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={MouseOver} >This is a paragraph</p>
      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>
  )
}

export default App
