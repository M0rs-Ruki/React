
import './App.css'
import Button from './components/Button';
import { useState } from 'react';
// import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>

      <Button incrementCount={handleClick} name="Click Me">
        {count}
      </Button>

      {/* <Card  name ="Mors Code">
      <h1>Best coder in the world</h1>
      <p>And he is a good coder</p>
      <p>thsi is a paragraph</p>
      </Card>
      <Card children="hello jefasdfa">
        dfj;sajflksdfj;lj two children here
      </Card> */}
    </div>
  )
}

export default App
