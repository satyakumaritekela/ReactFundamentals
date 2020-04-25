import React from 'react';

const UserInput = (props) => {
    return (
        <input onChange={props.change} value={props.userName}></input>
    )
}

export default UserInput;