import React, { useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@components/Header/";
import styles from "./style.css";

interface HomeProps {
  staticContext: { css: any[] };
}
const Home: React.FC<HomeProps> = (props) => {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss());
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Panpan home page</title>
        <meta name="description" content="this is panpan home page" />
      </Helmet>
      <Header staticContext={props.staticContext}></Header>
      <div className={styles.redText}>Home-test1</div>
    </div>
  );
};

export default Home;
