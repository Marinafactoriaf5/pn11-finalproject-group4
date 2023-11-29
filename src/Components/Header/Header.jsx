import React from "react";
import "./Header.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/home" className="logo">
        <Logo />
      </Link>
      <Link to="/loginPage" className="navLogin">
        <FontAwesomeIcon icon={faUser} />
        {/* {isLoggedIn ? 'Logout' : 'Login'} */}
      </Link>
    </header>
  );
}

export default Header;



