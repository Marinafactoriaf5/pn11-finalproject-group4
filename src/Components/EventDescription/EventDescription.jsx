import EventDescriptionHero from "../EventDescription/EventDescriptionHero";
import EventDescriptionMap from "../EventDescription/EventDescriptionMap";
// import React, { useState, useEffect } from "react";

function EventDescription() {

  return (
    <div>
      <EventDescriptionHero events={eventData} />
      <EventDescriptionMap events={eventData} />
    </div>
  );
}

export default EventDescription;
