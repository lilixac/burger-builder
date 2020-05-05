import React from "react";
import BurgerControl from "./burger-control/burger-control";
import styles from "./burger-controls.module.css";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const burgerControls = (props) => (
	<div className={styles.BuildControls}>
		<p> TOTAL PRICE: {props.price.toFixed(2)} </p>

		{controls.map((control) => (
			<BurgerControl
				key={control.label}
				type={control.type}
				label={control.label}
				addIngredients={() => props.addIngredients(control.type)}
				removeIngredients={() => props.removeIngredients(control.type)}
			/>
		))}
	</div>
);

export default burgerControls;