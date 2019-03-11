import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'am {props.name} and I'am {props.age} years old</p>
            <p>{props.name} is {props.children}</p>
            <input type='text' onChange={props.change} />
        </div>
    );
};

export default person;