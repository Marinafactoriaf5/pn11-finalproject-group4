import './SearchBar.css'
import SearchBtn from '../../assets/searchBtn.svg';

function SearchBar() {
    const handleSearch = (event) => {
        event.preventDefault();
        // Aquí puedes implementar la lógica de búsqueda
        console.log('Realizar búsqueda');
    };
    return (
        <div>
            <form className="searchBar" onSubmit={handleSearch}>
                <label htmlFor="searchInput" className="searchInputWrapper">
                    <input
                        id="searchInput"
                        className="searchInput"
                        type="text"
                        aria-labelledby="searchDiv"
                        placeholder="Type to search"
                    />
                    <span className="searchIcon" onClick={handleSearch}>
                        <img src={SearchBtn} alt="Search" />
                    </span>
                </label>
            </form>
        </div>
    )
}
export default SearchBar;