import { useState } from 'react'
import { createContext } from 'react'

import './App.css'
import ChildA from './components/ChildA';

const ThemeContext = createContext('light'); 

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
export { ThemeContext }


