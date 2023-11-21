import EventDescriptionHero from "../EventDescription/EventDescriptionHero";
import EventDescriptionMap from "../EventDescription/EventDescriptionMap";
// import React, { useState, useEffect } from "react";

function EventDescription() {
    
//   const [eventData, setEventData] = useState({ events: [] });

//   useEffect(() => {
//     fetch("../../../db.json")
//       .then((response) => response.json())
//       .then((data) => setEventData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   console.log(eventData);

  return (
    <div>
      <EventDescriptionHero events={eventData} />
      <EventDescriptionMap events={eventData} />
    </div>
  );
}

export default EventDescription;
