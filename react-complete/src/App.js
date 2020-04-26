import React, { useState } from 'react';
import './App.css';
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

  let showPersons = null;

  if (personsState.willShow) {
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
    <div className="App">
      <h1>Generate Person Names by clicking the button...!</h1>
      <button onClick={buttonHandler}>{personsState.buttonValue}</button>
      {showPersons}
    </div>
  );
}

export default app;
