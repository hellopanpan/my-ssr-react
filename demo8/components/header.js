import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.css";

const Header = (props) => {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss());
  }
  return (
    <div>
      <h3 className={styles.title}>This is Header</h3>
      <Link to="/">toHome</Link>
      <br />
      <Link to="/about">toAbout</Link>
    </div>
  );
};

export default Header;
