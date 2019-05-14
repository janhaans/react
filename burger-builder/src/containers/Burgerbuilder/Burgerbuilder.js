import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 0.2,
    bacon: 0.5,
    cheese: 0.4,
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
        price: 4,
        purchasing: false
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
            let updatedPrice = this.state.price - INGREDIENTS_PRICES[type];
            this.setState({
                ingredients: updatedIngredients,
                price: updatedPrice
            });
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    render() {

        const disabledKeys = {...this.state.ingredients};
        for (let key in disabledKeys) {
            disabledKeys[key] = disabledKeys[key] <= 0;
        }

        const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients)
                .map( ingredient => ingredients[ingredient])
                .reduce( (acc, cur) => acc+cur ,0);
        const purchaseable = sum > 0;
        console.log(sum);
        console.log(purchaseable);

        return (
            <Aux>
                <Modal show={this.state.purchasing}> 
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabledKeys = {disabledKeys}
                    price = {this.state.price}
                    purchaseable = {purchaseable}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        );
    };    
};

export default Burgerbuilder;