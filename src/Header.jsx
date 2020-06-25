import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img alt="logo" src={logo} width="70" height="50" />
        <h3>Keep Notes</h3>
      </div>
    </>
  );
};

export default Header;
