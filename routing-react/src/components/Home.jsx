import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {

  const navigate = useNavigate();
  const heldelClick = () => {
    navigate('/about');
  }
  return (
    <div>
      Home Page
      <button onClick={heldelClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home