import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA';

// Step1: Create Context
const UserContext = createContext();
// Step2: wrap all the child inside a provider
// Step3: Pass value 
// Step4: consume the value


function App() {

  const [user, setUser] = useState({name:'Mors'})

  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}