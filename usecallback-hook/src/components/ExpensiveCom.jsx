import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'


function ExpensiveCom() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const previousFunction = useRef(null)

  const expensiveTask = useCallback((num) => {
    console.log('Inside Expensive Task....');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result +=i
    }
    return result;
  }, [count])

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveTask) {
        console.log("Function not Re-Executed");
      } else {
        console.log("Function Re-Executed")
      }

    } else {
      previousFunction.current = expensiveTask
    }
  }, [expensiveTask])
  

  return (
    <div>
        <input
        type='text'
        value={text}
        onChange={(e) => setCount(count + 1)}
        placeholder='Type something'
        />
        <p>Expensive Calculation Result: {expensiveTask()}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
    </div>
  )
}

export default ExpensiveCom