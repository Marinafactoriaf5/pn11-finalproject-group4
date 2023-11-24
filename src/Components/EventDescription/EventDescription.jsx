import EventDescriptionHero from "../EventDescription/EventDescriptionHero";
import EventDescriptionMap from "../EventDescription/EventDescriptionMap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventDescription.css";

function EventDescription() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => {
        const event = data.events.find((event) => event.id === parseInt(id));
        if (event) {
          setEventData(event);
        } else {
          setError(new Error("Event not found"));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <EventDescriptionHero />
      <img className="eventBackground" src={eventData.picture} />
      <div className="eventData">
        <h1 className="eventTitle">{eventData.name}</h1>
        <p className="eventDay">{eventData.schedule.day}</p>
        <p className="eventTime">{eventData.schedule.time}</p>
        <p className="eventDescription"><h4>Descripción</h4>{eventData.description}</p>
        <button className="eventPrice">{eventData.price}</button>
      </div>
      <EventDescriptionMap />
    </div>
  );
}
export default EventDescription;
