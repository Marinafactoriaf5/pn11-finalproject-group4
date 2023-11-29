import React from "react";
import "./Header.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="navContainer">
        <Link to="/" className="Logo">
          <Logo />
        </Link>
        </div>
        <div className="navLogin">
          <Link to="/loginPage">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      
    </header>
  );
}

export default Header;


