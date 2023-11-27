import React from "react";
import CarouselCard from "./CarouselCard";
import "./Carousel.css";

const Carousel = ({ category, events }) => {
  return (
    <div className="categories">
      <h2 className="categoriesCarouselTitle">{category}</h2>
      <div className="scrollCarousel">
      <div className="categoriesCarousel" key={events.id}>
        {events.map((event) => (
          <CarouselCard event={event} />
        ))}</div>
      </div>
    </div>
  );
};

export default Carousel;
