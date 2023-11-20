import React from "react";
import CarouselCard from "./CarouselCard";
import "./Carousel.css";

const Carousel = ({ category, events }) => {
  return (
    <div>
      <h2>{category}</h2>
      <div className="events">
        <section className="catalog" key={events.category}>
          {events.map((event) => (
            <CarouselCard event={event} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Carousel;
