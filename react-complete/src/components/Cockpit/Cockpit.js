import React from 'react';
import Radium from 'radium';

const Cockpit = (props) => {
    const styleButton = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    if (props.willShow) { 
        styleButton.backgroundColor = 'red';
        styleButton[':hover'] = {
            backgroundColor: '#ff6464',
            color: 'black'
        }
    }
    return (
        <div>
            <h1>Person Manager...!</h1>
            <button
                style={styleButton}
                onClick={props.buttonhandler}>
                {props.buttonvalue}
            </button>
        </div>
    );
};

export default Radium(Cockpit);