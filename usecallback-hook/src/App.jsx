import { useCallback, useState } from 'react'
import './App.css'
import ChildCom from './components/ChildCom'
import ExpensiveCom from './components/ExpensiveCom'

function App() {
  // const [count, setCount] = useState(0)

  // const handleClick =  useCallback(() => {
  //   setCount(count + 1)
  // }, [])

  return (
    <div>
      <ExpensiveCom />
      {/* <button onClick={handleClick}>
        Count On Click: {count}
      </button>
      <p></p>
      <div>
        <ChildCom 
        buttonName='Click Me' 
        handleClick={handleClick}
        />

      </div> */}
    </div>
  )
}

export default App
