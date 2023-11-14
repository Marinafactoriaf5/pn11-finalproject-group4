import './Header.css';
import Logo from '../../assets/Logo.png'


function Header (){
    return(
     <header>
        <Logo/>
        <input className="searchImput" type="text" aria-labelledby="searchDiv" placeholder=" Type to search " />
        <button className="searchIcon" type="submit"></button>
     </header>   

    )
}

export default Header;