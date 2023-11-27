import './SearchBar.css';
import SearchBtn from "../../assets/searchBtn.svg";
import React, { useState, useRef, useEffect } from 'react';

function SearchBar({ handleSearch }) {
    const [searchActive, setSearchActive] = useState(false);
    const searchBarRef = useRef();

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setSearchActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div ref={searchBarRef} className={`searchBar ${searchActive ? "active" : ""}`}>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="searchInput" className="searchInputWrapper">
                    <input
                        id="searchInput"
                        className="searchInput"
                        type="text"
                        aria-labelledby="searchDiv"
                        placeholder="Type to search"
                        onChange={handleSearch}
                    />
                    <span className="searchIcon" onClick={toggleSearch} >
                        <img src={SearchBtn} className="searchImg" alt="Search" />
                    </span>
                </label>
            </form>
        </div>
    )
}

export default SearchBar;
