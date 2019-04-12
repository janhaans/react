import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.2,
    bacon: 0.5,
    chees: 0.4,
    meat: 1.3
};

class Burgerbuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4
    }

    addIngredient = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]++;
        let updatedPrice = this.state.price + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            price: updatedPrice
        });
    }

    removeIngredient = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type]>0) {
            updatedIngredients[type]--;
            let updatedPrice = this.state.price +INGREDIENTS_PRICES[type];
            this.setState({
                ingredients: updatedIngredients,
                price: updatedPrice
            });
        }
    }

    render() {

        const disabledKeys = {...this.state.ingredients};
        for (let key in disabledKeys) {
            disabledKeys[key] = disabledKeys[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabledKeys = {disabledKeys}
                />
            </Aux>
        );
    };    
};

export default Burgerbuilder;