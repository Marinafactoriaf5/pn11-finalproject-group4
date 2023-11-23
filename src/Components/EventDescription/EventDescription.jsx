import EventDescriptionHero from "../EventDescription/EventDescriptionHero";
import EventDescriptionMap from "../EventDescription/EventDescriptionMap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventDescription() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(eventData);
  console.log(id);
  return (
    <div>
      <EventDescriptionHero />
      <div className="eventData">
          <h1>{eventData.name}</h1>
      </div>
      <EventDescriptionMap />
    </div>
  );
}

export default EventDescription;
