import React, { useState } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

const app = props => {
  const [personsState, updatePersonsState] = useState({
    persons: [
      {name: 'Satya', age: 24},
      {name: 'Max', age: 25},
      {name: 'Sumo', age: 28},
    ],
    willShow: false,
    buttonValue: "Show Persons"
  });

  const buttonHandler = () => {
    personsState.willShow ? updatePersonsState({
      buttonValue: "Show Persons",
      willShow: !personsState.willShow
    }) : updatePersonsState({
      persons: [
        {name: 'Satya', age: 24},
        {name: 'Max', age: 25},
        {name: 'Sumo', age: 28},
      ],
      buttonValue: "Hide Persons",
      willShow: !personsState.willShow
    });  
  }

  const deleteHandler = (personIndex) => {
    let persons = [...personsState.persons];
    persons.splice(personIndex, 1)
    updatePersonsState({
      persons: persons,
      buttonValue: personsState.buttonValue,
      willShow: personsState.willShow
    })
  }

  const changeHandler = (event, personIndex) => {
    let persons = [...personsState.persons];

    let person = { ...personsState.persons[personIndex] }
    person.name = event.target.value;

    persons[personIndex] = person;

    updatePersonsState({
      persons: persons,
      buttonValue: personsState.buttonValue,
      willShow: personsState.willShow
    })
  }

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

  let showPersons = null;

  if (personsState.willShow) {
    styleButton.backgroundColor = 'red';
    styleButton[':hover'] = {
      backgroundColor: '#ff6464',
      color: 'black'
    }
    showPersons = personsState.persons.map((person, index) => {
      return <Person
        key={index}
        name={person.name}
        age={person.age}
        change={(event) => {changeHandler(event, index)}}
        deleteHandler={deleteHandler.bind(null, index)}/>
    })
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Generate Person Names by clicking the button...!</h1>
        <button style={styleButton} onClick={buttonHandler}>{personsState.buttonValue}</button>
        {showPersons}
      </div>
    </StyleRoot>
  );
}

export default Radium(app);
