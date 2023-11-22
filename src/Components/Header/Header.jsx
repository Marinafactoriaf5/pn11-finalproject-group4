// Header.jsx

import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";


function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="VIVID" />
      <a className="navLogin" href="loginPage">LoginPage</a>
    </header>
  );
}

export default Header;
