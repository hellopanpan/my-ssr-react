import React, { useEffect, useLayoutEffect } from "react";
import Header from "@components/Header/";
import styles from "./style.css";
const Home = (props) => {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss());
  }

  return (
    <div>
      <Header staticContext={props.staticContext}></Header>
      <div className={styles.redText}>Home-test1</div>
    </div>
  );
};

export default Home;
