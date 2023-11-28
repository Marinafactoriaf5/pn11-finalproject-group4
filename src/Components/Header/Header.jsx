import React from "react";
import "./Header.css";
import Logo from "./logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <a className="Logo">
       <Logo/>
       </a>
      <a className="navLogin" href="/loginPage">
      <FontAwesomeIcon icon={faUser} />
      {/* {isLoggedIn ? 'Logout' : 'Login'} */}
    </a>
    </header>
  );
}

export default Header;
