import React from "react";
import styles from "./layout.module.css";

const layout = (props) => <div className={styles.home}>{props.children}</div>;

export default layout;