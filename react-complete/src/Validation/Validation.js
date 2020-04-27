import React from 'react';

const Validation = (props) => {
    let textMessage = props.inputText.length < 5 ? "Text too short" : "Text long enough";
    return <p>{textMessage}</p>
}

export default Validation;