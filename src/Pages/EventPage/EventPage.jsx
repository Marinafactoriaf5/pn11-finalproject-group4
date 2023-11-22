import "./EventPage.css";

import Header from "../../Components/Header/Header";
import React from "react";
import EventDescription from "../../Components/EventDescription/EventDescription";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventPage({params}) {
  const { id } = useParams();
  const eventPath = "event/" + id;

  console.log(params)

  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(eventData);

  return (
    <div>
      <Header />
      <EventDescription event={eventData} />
    </div>
  );
}
export default EventPage;



