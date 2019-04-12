import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map( ingredient => {
            return [...Array(props.ingredients[ingredient])].map( (_, index) => {
                return <BurgerIngredient key={ingredient+index} type={ingredient}/>;
            });
        })
        .reduce( (acc, cur) => acc.concat(cur), []);

    if (ingredients.length === 0) {
        ingredients = <p>You have forgotten to specify ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

};

export default burger;