import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = props => {
  /*const [personsState, updatePersonsState] = useState({
    persons: [
      {name: 'Satya', age: 24},
      {name: 'Max', age: 25},
      {name: 'Man', age: 28},
    ]
  });

  const inputHandler = (event) => {
    updatePersonsState({
      persons: [
        {name: event.target.value, age: 24},
        {name: event.target.value, age: 25},
        {name: event.target.value, age: 28},
      ]
    });
  }*/

  const [userDetails, updateUserState] = useState({
   userName : 'Satya'
  });

  const inputHandler = (event) => {
    updateUserState({
      userName: event.target.value
    });
  }

  const style = {
      backgroundColor: 'white'
  }

  return (
    <div className="App" style={style}>
      {/*<h1>Generate Random Names...!</h1>{
        personsState.persons.map((person, index) => {
          return <Person
            key={index}
            name={person.name}
            age={person.age}
            change={inputHandler}>
          </Person>
        })
      }*/}
      <UserInput change={inputHandler} userName={userDetails.userName}></UserInput>
      <UserOutput userName={userDetails.userName}></UserOutput>
    </div>
  );
}

export default app;
