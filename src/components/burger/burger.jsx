import React from "react";

import BurgerIngredients from "./burger-ingredients/burger-ingredients";

import styles from "./burger.module.css";

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((key) => {
			return [...Array(props.ingredients[key])].map((_, id) => {
				return <BurgerIngredients key={key + id} type={key} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		},[]);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p> Please start adding ingredients </p>;
	}
	return (
		<div className={styles.Burger}>
			<BurgerIngredients type="bread-top" />
			{transformedIngredients}
			<BurgerIngredients type="bread-bottom" />
		</div>
	);
};

export default burger;