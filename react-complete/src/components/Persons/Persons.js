import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={index}
        name={person.name}
        age={person.age}
        change={(event) => props.change(event, index)}
        deleteHandler={() => props.delete(index)} />
});

export default Persons;