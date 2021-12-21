import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";
import { useGetStyle } from "@src/hooks";

interface HeaderProps {
  staticContext: any;
}
const Header: React.FC<HeaderProps> = (props) => {
  useGetStyle(props.staticContext, styles);
  return (
    <div className={styles.green}>
      <div>header</div>
      <Link to="/">home</Link>
      <br />
      <Link to="/about">about</Link>
    </div>
  );
};

export default Header;
