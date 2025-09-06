import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // First -> side-Effect function
  // second -> clean-Up function
  // third -> comma dependency array

  // variation:1
  // runs on every render
  // useEffect(() => {
  //   alert("this will run on every render")
  // })

  // variation:2
  // runs on first render
  // useEffect(() => {
  //   alert("this will run on first render")
  // }, [])

  // variation:3
  // useEffect(() => {
  //   alert("this will run on every count change")
  
  // }, [count])
  
  // variation:4
  // multiple dependency
  // useEffect(() => {
  //   alert("This will run on every Count/Total Change")
  
  // }, [count, total])

  // Variation 5
  // clean-up function
  // useEffect(() => {
  //   alert("The Count has changed")
  
  //   return () => {
  //     alert("Count is unmounted from UI");
  //   }
  // }, [count])
  
  

  
  
  function handelClick() {
    setCount(count + 1)
  }

  function handelClickTotal() {
    setTotal(total + 1)
  }


  return (
    <div>
      <button onClick={handelClick}>
        Update Count
      </button>
      Count: {count}

      <button onClick={handelClickTotal}>
        Update Total
      </button>
      Total: {total}
    </div>
  )
}

export default App
