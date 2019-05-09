import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const list = Object.keys(props.ingredients)
                 .map((ingredient) => (
                    <li key={ingredient}>
                        <span style={{textTransform:"capitalize"}}>{ingredient}</span> = {props.ingredients[ingredient]}
                    </li>)
                 );

    return (
        <Aux>
            <h3>You have ordered</h3>
            <p>Burger with the following ingredients</p>
            <ul>{list}</ul>
        </Aux>
    );
    

}

export default orderSummary;