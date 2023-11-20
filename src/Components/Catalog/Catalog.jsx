import "./Catalog.css";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";

const Catalog = () => {
  const [eventData, setEventData] = useState({ events: [] });

  useEffect(() => {
    fetch('../../../db.json')
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(eventData)
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

  return (
    <div className="catalog">
      <Carousel category="Top Rated Events" events={topRatedEvents} />
      <Carousel category="Day Events" events={dayEvents} />
      <Carousel category="Night Events" events={nightEvents} />
    </div>
  );
};

export default Catalog;
