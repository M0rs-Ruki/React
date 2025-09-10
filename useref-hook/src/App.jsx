import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let val = useRef(0)

  // let btnRef = useRef(null);

  // // it run on every render
  // useEffect(() => {
  //   val.current = val.current + 1
  //   console.log(`This val is changing`);
  //   console.log(val.current);
  // })

  // const randomColor = () => {
  //   let r = Math.floor(Math.random() * 256)
  //   let g = Math.floor(Math.random() * 256)
  //   let b = Math.floor(Math.random() * 256)
  //   return `rgb(${r}, ${g}, ${b})`
  // }

  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor =randomColor();
  // }

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  

  return (
    <div>
      <h1>StopWatch {time} sconds</h1>
      <button onClick={startTimer}>Start</button>
      <p></p>
      <button onClick={stopTimer}>Stop</button>
      <p></p>
      <button onClick={resetTimer}>Reset</button>



      {/* <button ref={btnRef} onClick={() => {setCount(count +1)}}>
        Increment
      </button>
      <p></p>

      <button onClick={changeColor}>
        Change Color
      </button>
      <p></p>

      <div>
        Count is {count}
      </div> */}
    </div>
  )
}

export default App
