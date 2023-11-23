import EventDescriptionHero from "../EventDescription/EventDescriptionHero";
import EventDescriptionMap from "../EventDescription/EventDescriptionMap";
// import React, { useState, useEffect } from "react";

function EventDescription({id}) {
console.log (id);
  return (
    <div>
      <EventDescriptionHero />
      <EventDescriptionMap />
    </div>
  );
}

export default EventDescription;
