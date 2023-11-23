import "./EventPage.css";

import Header from "../../Components/Header/Header";
import React from "react";
import EventDescription from "../../Components/EventDescription/EventDescription";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventPage() {
  const { id } = useParams();
  
  console.log (id);

 /*  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const EventDescription = eventData.events.filter(
    (event) => event.id === ""
  );
  console.log(eventData); */

  return  (
    <div>
      <Header />
      <EventDescription event={id} />
    </div>
  );
}
export default EventPage;



