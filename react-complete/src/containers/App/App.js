import React from 'react';
import './App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';
import Radium, { StyleRoot } from '../../../node_modules/radium';

class App extends React.Component {
  state = {
    persons: [
      {name: 'Satya', age: 24},
      {name: 'Max', age: 25},
      {name: 'Sumo', age: 28},
    ],
    willShow: false,
    buttonValue: "Show Persons"
  };

  buttonHandler = () => {
    this.state.willShow ? this.setState({
      buttonValue: "Show Persons",
      willShow: !this.state.willShow
    }) : this.setState({
      persons: [
        {name: 'Satya', age: 24},
        {name: 'Max', age: 25},
        {name: 'Sumo', age: 28},
      ],
      buttonValue: "Hide Persons",
      willShow: !this.state.willShow
    });  
  }

  deleteHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons,
      buttonValue: this.state.buttonValue,
      willShow: this.state.willShow
    })
  }

  changeHandler = (event, personIndex) => {
    let persons = [...this.state.persons];

    let person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    persons[personIndex] = person;

    this.setState({
      persons: persons,
      buttonValue: this.state.buttonValue,
      willShow: this.state.willShow
    })
  }
  render() {
    let showPersons = null;

    if (this.state.willShow) {
      showPersons =  <Persons
            persons={this.state.persons}
            change={this.changeHandler}
            delete={this.deleteHandler} />
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            willShow={this.state.willShow}
            buttonhandler={this.buttonHandler}
            buttonvalue={this.state.buttonValue}
          />
          {showPersons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
