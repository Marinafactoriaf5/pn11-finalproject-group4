import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css";
import SearchBtn from "../../assets/searchBtn.svg";



function SearchBar() {
  const [searchActive, setSearchActive] = useState(false);
  const searchInputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
    console.log("Realizar búsqueda");
  };

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
  }, []);

  return (
    <div className={`searchBar ${searchActive ? "active" : ""}`}>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchInput" className="searchInputWrapper">
          <input
            id="searchInput"
            className="searchInput"
            type="text"
            aria-labelledby="searchDiv"
            placeholder="Type to search"
            ref={searchInputRef}
          />
          <span className="searchIcon" onClick={toggleSearch}>
            <img src={SearchBtn} alt="Search" />
          </span>
        </label>
      </form>
    </div>
  );
}

export default SearchBar;

