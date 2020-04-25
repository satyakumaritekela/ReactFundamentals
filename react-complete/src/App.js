import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = props => {

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
      <UserInput change={inputHandler} userName={userDetails.userName}></UserInput>
      <UserOutput userName={userDetails.userName}></UserOutput>
    </div>
  );
}

export default app;
