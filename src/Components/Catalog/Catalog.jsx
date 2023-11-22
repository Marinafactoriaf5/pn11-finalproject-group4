import "./Catalog.css";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import SearchBar2 from "../Header/SearchBar2";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventData, setEventData] = useState({ events: [] });
  useEffect(() => {
    fetch('../../../db.json')
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [eventData]);

  const handleInputChange = (event) => {
    handleSearch(event.target.value);
    console.log(searchTerm)
};
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }
  // console.log(eventData)
  const dayEvents = eventData.events.filter(
    (event) => event.category === "Day"
  );
  //   console.log(dayEvents)
  const nightEvents = eventData.events.filter(
    (event) => event.category === "Night"
  );
  const topRatedEvents = eventData.events.filter(
    (event) => event.category === "Top Rated"
  );
  const findedEvents = eventData.events.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.price.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
  )
  if (searchTerm !== "") {
    return (
      <div className="catalog">
        <SearchBar2 handleSearch={handleSearch} handleInputChange={handleInputChange} setSearchTerm={setSearchTerm} />
        <Carousel category="Search Results" events={findedEvents} />
        <Carousel category="Top Rated Events" events={topRatedEvents} />
        <Carousel category="Day Events" events={dayEvents} />
        <Carousel category="Night Events" events={nightEvents} />
      </div>
    );
  }
  else {
    return (
      <div className="catalog">
        <SearchBar2 handleSearch={handleSearch} handleInputChange={handleInputChange} setSearchTerm={setSearchTerm} />
        {/* <Carousel category="Search Results" events={findedEvents} /> */}
        <Carousel category="Top Rated Events" events={topRatedEvents} />
        <Carousel category="Day Events" events={dayEvents} />
        <Carousel category="Night Events" events={nightEvents} />
      </div>
    );
  }

};

export default Catalog;
