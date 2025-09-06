
import './App.css'
import Card from './components/Card'
import { useState } from 'react'

function App() {

  // Create State
  // Manage State
  // Change State
  // Sync State with child components
  const [name , setName] = useState("");


  return (
    <div>
      <Card name={name} setName={setName} />
      <p>This is the parent component: {name}</p>
    </div>
  )
}

export default App
