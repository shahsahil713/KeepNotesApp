import React from "react";
import logo from "./images/logo.png";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copyright &copy; {year}</p>
      </footer>
    </>
  );
};

export default Footer;
