import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice.js'
import './App.css'

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0)

  function handleIncreClick() {
    dispatch(increment());
  }

  function handleDecrClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
      <button className='button' onClick={handleIncreClick}> + </button>
      <p>Count: {count}</p>
      <button className='button' onClick={handleDecrClick}> - </button>
      <p></p>
      <button className='button' onClick={handleResetClick}>Reset</button>
      <p></p>
      <input
      type='Number'
      value={amount}
      placeholder='Enter amount'
      onChange={(e) => setAmount(e.target.value)}
      />
      <p></p>
      <button className='button' onClick={handleAmountClick}>In by Amount</button>
    </div>
  )
}

export default App
