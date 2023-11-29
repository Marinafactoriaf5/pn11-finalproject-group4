import "./Catalog.css";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import SearchBar from "../Header/SearchBar";
import Filter from "./Filter";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventData, setEventData] = useState({ events: [] });
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (event) => {
    handleSearch(event.target.value);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };
  const dayEvents = eventData.events.filter(
    (event) => event.category === "Day"
  );
  const nightEvents = eventData.events.filter(
    (event) => event.category === "Night"
  );
  const topRatedEvents = eventData.events.filter(
    (event) => event.category === "Top Rated"
  );
  const findedEvents = eventData.events.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.includes(searchTerm)
    );
  });
  if (searchTerm !== "" || filterTerm !== "") {
    return (
      <div className="catalog">
        <Filter handleFilter={handleFilter} setFilterTerm={setFilterTerm} />
        <SearchBar
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          setSearchTerm={setSearchTerm}
        />
        <Carousel category="Search Results" events={findedEvents} />
        <Carousel category="Top Rated Events" events={topRatedEvents} />
        <Carousel category="Day Events" events={dayEvents} />
        <Carousel category="Night Events" events={nightEvents} />
      </div>
    );
  } else {
    return (
      <div className="catalog">
        <Filter handleFilter={handleFilter} setFilterTerm={setFilterTerm} />
        <SearchBar
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          setSearchTerm={setSearchTerm}
        />
        <Carousel category="Top Rated Events" events={topRatedEvents} />
        <Carousel category="Day Events" events={dayEvents} />
        <Carousel category="Night Events" events={nightEvents} />
      </div>
    );
  }
};

export default Catalog;
