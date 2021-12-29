import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <Link to="/">toHome</Link>
      <br />
      <Link to="/about">toAbout</Link>
    </div>
  );
};

export default Header;
