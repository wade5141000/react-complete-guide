import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>old name: {props.oldName}</p>
            <p>new name: {props.newName}</p>
        </div>
    )
}

export default userOutput;