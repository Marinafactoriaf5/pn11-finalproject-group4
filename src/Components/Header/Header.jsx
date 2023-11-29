import React from "react";
import "./Header.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header>
       <Logo/>
      <a className="navLogin" href="/loginPage">
      <FontAwesomeIcon icon={faUser} />
      {/* {isLoggedIn ? 'Logout' : 'Login'} */}
    </a>
    </header>
  );
}

export default Header;
