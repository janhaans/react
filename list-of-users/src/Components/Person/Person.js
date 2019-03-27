import React from 'react';
import styles from './Person.module.css';

const person = (props) => (
    <div className={styles.Person}>
        <p>Hello {props.name}, your age is {props.age}</p> 
        <label>Change Name:  </label>          
        <input type="text" onChange={props.changename} value={props.name}/>
        <button onClick={props.delete}>Delete</button>
    </div>
);

export default person;