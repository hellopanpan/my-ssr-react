import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";

const Header = (props) => {
  if (props.staticContext) props.staticContext.css.push(styles._getCss());
  return (
    <div className={styles.green}>
      <div>header</div>
      <Link to="/">home</Link>
      <br />
      <Link to="/about">about{props.name}</Link>
    </div>
  );
};

export default Header;
