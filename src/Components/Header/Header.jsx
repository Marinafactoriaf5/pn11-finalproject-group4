// Header.jsx

import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="VIVID" />
      <a className="navLogin" href="loginPage">LoginPage</a>
      <SearchBar />
    </header>
  );
}

export default Header;
