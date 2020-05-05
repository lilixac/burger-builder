import React, { Fragment, Component } from "react";

import Burger from "../../components/burger/burger";
import BurgerControls from "../../components/burger/burger-controls/burger-controls";

const INGREDIENT_PRICES = {
	salad: 30,
	cheese: 30,
	meat: 60,
	bacon: 50,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		price: 20,
	};

	addIngredientHandler = (type) => {
		let oldCount = this.state.ingredients[type];
		let updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const newPrice = INGREDIENT_PRICES[type];
		const updatedPrice = this.state.price + newPrice;
		this.setState({ ingredients: updatedIngredients, price: updatedPrice });
	};

	removeIngredientHandler = (type) => {
		let oldCount = this.state.ingredients[type];
		let updatedCount = oldCount - 1;
		if ( updatedCount < 0 )  {
			return;
		}
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const newPrice = INGREDIENT_PRICES[type];
		const updatedPrice = this.state.price - newPrice;
		this.setState({ ingredients: updatedIngredients, price: updatedPrice });
	};

	render() {
		return (
			<Fragment>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControls
					price={this.state.price}
					addIngredients={this.addIngredientHandler}
					removeIngredients={this.removeIngredientHandler}
				/>
			</Fragment>
		);
	}
}

export default BurgerBuilder;
