import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'


function ChildC() {
  const {theme, setTheme} = useContext(ThemeContext)
  function hendelClick() {
    {theme === 'light' ? setTheme('dark') : setTheme('light')}
  }
  return (
    <div>
      <button onClick={hendelClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC