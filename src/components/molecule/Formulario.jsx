import React, { useState } from "react";
import axios from "axios";

function EventForm() {
  const [name, setName] = useState("");
  //const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      //guests: guests.split(",").map((guest) => guest.trim()),
      date: date,
      url:url,
      min: min,
      max:max,
    };
    axios.post("http://127.0.0.1:8000/api/events", data).then((response) => {
      console.log(response.data);
      // limpiar los campos después de enviar la solicitud
      setName("");
      //setGuests("");
      setUrl("");
      setDate("");
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
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* <div className="my-5 mx-4">
        <label htmlFor="guests">Invitados:</label>
        <input
         className="text-stone5"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div> */}
      <div className="my-5 mx-4">
        <label htmlFor="min">URL:</label>
        <input
          className="text-stone5"
          id="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="min">Date:</label>
        <input
          className="text-stone5"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="min">Entrevistas mínimas:</label>
        <input
          className="text-stone5"
          id="guests"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="max">Entrevistas máximas:</label>
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
