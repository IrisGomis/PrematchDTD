import React, { useState } from "react";
import axios from "axios";

function EventForm() {
  const [eventName, setEventName] = useState("");
  const [guests, setGuests] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      eventName: eventName,
      guests: guests.split(",").map((guest) => guest.trim()),
      min: min,
      max:max,
    };
    axios.post("/api/events", data).then((response) => {
      console.log(response.data);
      // limpiar los campos después de enviar la solicitud
      setEventName("");
      setGuests("");
      setMin("");
      setMax("");
    });
  };

  return (
    <form className="bg-stone6" onSubmit={handleSubmit}>
      <div className="flex  my-5 mx-4">
        <label htmlFor="eventName">Nombre del evento:</label>
        <input
         className="text-stone5"
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="guests">Invitados:</label>
        <input
         className="text-stone5"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="min">Mínimo de coders invitados:</label>
        <input
          className="text-stone5"
          id="guests"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="max">Máximo de coders invitados:</label>
        <input
          className="text-stone5"
          id="guests"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button className="my-5 mx-4 bg-orange p-2 rounded-md" type="submit">Crear evento</button>
    </form>
  );
}

export default EventForm;
