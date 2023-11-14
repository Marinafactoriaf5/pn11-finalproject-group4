import './Header.css';
import Logo from '../../assets/logo.png'


function Header (){
    return(
     <header>
        <img src={Logo}></img>
        <input className="searchImput" type="text" aria-labelledby="searchDiv" placeholder=" Type to search " />
        <button className="searchIcon" type="submit"></button>
     </header>   

    )
}

export default Header;