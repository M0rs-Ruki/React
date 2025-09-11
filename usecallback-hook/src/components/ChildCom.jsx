import React from 'react'

const ChildCom = React.memo(
    (props) => {
        console.log("Child Component Re-Rendered")
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    })

export default ChildCom

// React.memo --> wrap --> component --> 
// component will re-rander when props will change other wilse it will not re-render

// if we are sending the finction then (memo) wont be able to save
// fom re-render