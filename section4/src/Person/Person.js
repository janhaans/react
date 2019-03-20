import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick={props.delete}>I'am {props.name} and I'am {props.age} years old</p>
        </div>
    );
};

export default person;