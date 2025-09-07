import React from 'react'

function NotFound() {
    const heldelChlick = () => {
        window.history.go(-1);
    }
  return (
    <div>
        <H2>
            404 - Not Found
        </H2>
        <button onClick={heldelChlick}>
            Go Back
        </button>
    </div>
  )
}

export default NotFound