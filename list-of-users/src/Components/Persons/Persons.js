import React from 'react';
import Person from '../Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
            return (
                <Person 
                    key={person.key}
                    name={person.name}
                    age={person.age}
                    delete={() => props.delete(person.key)}
                    changename={(event) => {props.changename(event, person.key)}}
                />
            ); 
        });  
};

export default persons;