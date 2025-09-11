import React, { useState } from 'react'

function Home() {
  const [title, setTitle] = useState("")
  return (
    <div>
      <input
      className='p-2 m-2 bg-gray-100 rounded'
      type='text'
      placeholder='Enter Title here'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button>
        Create My Paste 
      </button>
    </div>
  )
}

export default Home