import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventShareButton from "../EventDescription/ShareButton";
import "./EventDescription.css";
import shareButton from "../../assets/shareButton.png";
import heart from "../../assets/heart.png";

function EventDescription() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

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
  const handleShareButtonClick = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(
      () => {
        console.log("URL copiada con éxito:", currentURL);
        setIsCopied(true);
      },
      (error) => {
        console.error("Error al copiar la URL:", error);
      }
    );
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <img className="eventBackground" src={eventData.picture} />
      <div className="eventData">
        <div className="eventTitleIcons">
          <h1 className="eventTitle">{eventData.name}</h1>
          <img className="eventHeart" src={heart} />
          <img
            className="eventShareIcon"
            src={shareButton}
            onClick={handleShareButtonClick}
          />
        </div>
        {isCopied && <p className="eventShareButtonMessage">¡URL copiada al portapapeles!</p>}
        <a className="eventAddress" href={eventData.map}>
          {eventData.address}
        </a>
        <p className="eventDay">{eventData.schedule.day}</p>
        <p className="eventTime">{eventData.schedule.time}</p>
        <p className="eventDescription">
          <p className="eventDescriptionTitle">Descripción</p>
          {eventData.description}
        </p>
        <button className="eventPrice">{eventData.price}</button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <EventShareButton eventId={eventData.id} />

=======
>>>>>>> devel
=======
      <EventShareButton eventId={eventData.id} />
>>>>>>> 6f53e6732a2ee11da561ca322ee6d32c9405e083
    </div>
  );
}
export default EventDescription;
