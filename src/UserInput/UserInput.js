import React from 'react'

const userInput = (props) => {

    const style = {
        margin: '16px'
    }

    return (
        <div style={style}>
            <label>change name:</label>
            <input style={style} type='text' onChange={props.changeName}/>
        </div>
    )
}


export default userInput;