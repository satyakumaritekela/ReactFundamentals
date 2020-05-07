import React from "react";
import Person from "./Person/Person";

class Persons extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons....Should Component Update");
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          change={(event) => this.props.change(event, index)}
          deleteHandler={() => this.props.delete(index)}
        />
      );
    });
  }
}

export default Persons;
