import './searchBar.css'
import SearchBtn from "../../assets/searchBtn.svg";
import React, { useState, useRef, useEffect } from 'react';


function SearchBar({ handleSearch }) {
    const [searchActive, setSearchActive] = useState(false);
    const searchInputRef = useRef();

    const toggleSearch = () => {
        setSearchActive(!searchActive);
      };
    
      const handleClickOutside = (event) => {
        if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
          setSearchActive(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []); // Funcion de barra dinámica

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className={`searchBar ${searchActive ? "active" : ""}`}>
            <form >
                <label htmlFor="searchInput" className="searchInputWrapper">
                    <input
                        onSubmit={handleFormSubmit}
                        id="searchInput"
                        className="searchInput"
                        type="text"
                        aria-labelledby="searchDiv"
                        placeholder="Type to search"
                        onChange={handleSearch}
                    />
                    <span className="searchIcon" onClick={toggleSearch} >
                        <img src={SearchBtn} alt="Search" />
                    </span>
                </label>
            </form>
        </div>
    )
}

export default SearchBar;