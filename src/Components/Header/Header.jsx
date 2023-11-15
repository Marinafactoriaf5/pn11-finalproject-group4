import './Header.css';
import Logo from '../../assets/logo.png'


function Header (){
    return(
     <header>
        <img src={Logo} className="logo" alt='VIVID'></img>
        <div className='searchBar'>
        <input className="searchInput" type="text" aria-labelledby="searchDiv" placeholder=" Type to search " />
        <button className="searchIcon" type="submit"></button>
        </div>
     </header>   

    )
}

export default Header;