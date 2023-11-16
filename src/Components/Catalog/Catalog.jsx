import React, { useState } from "react";
import "./Catalog.css";
import data from "../../../db.json";
const Catalog = () => {
  const [events] = useState(data.events);
  return (
    <div className="events">
      <article className="heroCatalogDivision"></article>
      <section className="catalog">
        {events.map((event) => (
          <div key={event.nombre} className="catalogCard">
            <img
              className="eventImage"
              src={
                event.imagenes && event.imagenes.length > 0
                  ? event.imagenes[0]
                  : ""
              }
              alt={event.nombre}
            />
            <div className="eventText">
              <h4 className="eventName">{event.nombre}</h4>
              <p className="price">{event.precio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Catalog;
