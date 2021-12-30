import React from "react";
import { Link } from "react-router-dom";
import useStyles from "isomorphic-style-loader/useStyles";
import styles from "./header.css";

const Header = (props) => {
  useStyles(styles);
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
