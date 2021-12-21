import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";
import { useGetStyle } from "@src/hooks";

const Header = (props) => {
  useGetStyle(props.staticContext, styles);
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
