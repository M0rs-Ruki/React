import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  const expensiveTask = (num) => {
    console.log('Inside Expensive Task....')
    for (let i = 0; i < 10000; i++) {
      console.log(i)
    }
    return num * 2;
  }

  let doubleVal = useMemo(() => expensiveTask(input), [input])



  return (
    <div>
      <button onClick={() => setCount(count+ 1)}>
        Increment: {count}
      </button>
      <p></p>
      <input
        type="number" 
        placeholder='Enter a Number' 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <div>
        <h3>Double: {doubleVal}</h3>
      </div>
    </div>
  )
}

export default App
