import React from 'react'
import SearchBtn from "../../assets/searchBtn.svg";




function SearchBar2({ handleSearch }) {

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div >
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
                    <span className="searchIcon" >
                        <img src={SearchBtn} alt="Search" />
                    </span>
                </label>
            </form>
            {/* <h2>Search Results</h2>
            {searchedEvents.map((event) => (
                <CarouselCard event={event} />
            ))} */}
        </div>
    )
}

export default SearchBar2