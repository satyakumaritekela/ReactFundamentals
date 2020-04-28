import React from '../../../../node_modules/react';
import Radium from '../../../../node_modules/radium';
import './Person.css'

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    const ipStyle = {
        width: '60%'
    }
    return (
        <div className="Person" style={style}>
            <p>I'm {props.name}...! I am still {props.age} years old..</p>
            <p>{props.children}</p>
            <input style={ipStyle} type="text" onChange={props.change} value={props.name}></input>
            <button onClick={props.deleteHandler}>Delete</button>
        </div>
    )
}

export default Radium(Person);