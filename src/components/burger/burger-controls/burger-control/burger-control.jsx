import React from "react";
import styles from "./burger-control.module.css";

const burgerControl = (props) => (
	<div className={styles.BuildControl}>
		<button className={styles.More} onClick={props.addIngredients}>
			<span className={styles.span}>+</span>
		</button>
		<div className={styles.Label}> {props.label.toUpperCase()} </div>
		<button className={styles.Less} onClick={props.removeIngredients}>
			<span className={styles.span}>-</span>
		</button>
	</div>
);

export default burgerControl;