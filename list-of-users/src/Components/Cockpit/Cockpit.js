import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {

    let style = "";
    if (props.showPersons) {
        style = "Red Button";
    } else {
        style = "Green Button";
    }

    return (
        <div>
            <h1>Hi React!</h1>
            <button onClick={props.toggle} className={style}>Toggle</button>
        </div>
    );
}

export default cockpit;