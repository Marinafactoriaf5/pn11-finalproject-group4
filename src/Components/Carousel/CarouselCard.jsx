import "./CarouselCard.css";
import React from "react";

function CarouselCard({ event }) {
  return (
    <div key={event.id} className="catalogCard">
      <img
        className="eventImage"
        src={
          event.imagenes && event.imagenes.length > 0 ? event.imagenes[0] : ""
        }
        alt={event.name}
      />
      <div className="eventText">
        <h4 className="eventName">{event.name}</h4>
        <p className="price">{event.price}</p>
      </div>
    </div>
  );
}

export default CarouselCard;
