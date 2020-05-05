import React from "react";

import styles from "./App.module.css";
import Layout from "./components/layout/layout";
import BurgerBuilder from  './container/burgerbuilder/burgerbuilder';

function App() {
  return (
    <Layout>
      <header className={styles.Appheader}>BURGER BUILDER</header>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;