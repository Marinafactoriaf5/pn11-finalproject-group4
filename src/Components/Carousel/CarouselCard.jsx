import "./CarouselCard.css";
import React from "react";
import { Link } from "react-router-dom";


function CarouselCard({ event }) {
  return (
    <Link to={`/event/${event.id}`} key={event.id} className="catalogCard">
      <img
        className="eventImage"
        src={
          event.picture && event.picture.length > 0 ? event.picture[0] : ""
        }
        alt={event.name}
      />
      <div className="eventText">
        <h4 className="eventName">{event.name}</h4>
        <p className="price">{event.price}</p>
      </div>
    </Link>
  );
}

export default CarouselCard;
