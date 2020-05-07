import React, { useState } from 'react';
import './App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';
import Radium, { StyleRoot } from '../../../node_modules/radium';
import AuthContext from '../../context/auth-context';

const App = props => {
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
    showPersons =  <Persons
          persons={personsState.persons}
          change={changeHandler}
          delete={deleteHandler} />
  }

  return (
    <StyleRoot>
      <div className="App">
        <AuthContext.Provider >
          <Cockpit
            willShow={personsState.willShow}
            buttonhandler={buttonHandler}
            buttonvalue={personsState.buttonValue}
          />
          {showPersons}
        </AuthContext.Provider>
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
