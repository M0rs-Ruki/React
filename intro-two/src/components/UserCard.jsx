import React from 'react'
import "./UserCard.css"

function UserCard(props) {
  return (
    <div className='user-card' style={props.style}>
        <p id='user-name'> {props.name}</p>
        <img id='user-img' src="./src/assets/react.svg" alt="code" />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard