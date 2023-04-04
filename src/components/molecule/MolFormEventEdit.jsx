import React, { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

function PruebaApi() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [event_id, setEventId] = useState(1);

  useEffect(() => {
    axios.get(`${API_URL}/api/events/${event_id}`).then((response) => {
      const eventData = response.data.event;
      setName(eventData.name);
      setDate(eventData.date);
      setUrl(eventData.url);
      setMin(eventData.min);
      setMax(eventData.max);
    });
  }, [event_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "PUT",
      url: `${API_URL}/api/events/${event_id}`,
      data: {
        name,
        date,
        url,
        min,
        max,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  if (event_id === 0) {
    setEventId(36);
  }

  return (
    <>
    <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
    <h2 className="text-base font-semibold leading-7 text-white">Editar evento</h2>
   
      <form onSubmit={handleSubmit}>
      <div className="mt-10 my-6 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
        <div className="flex justify-between my-6 text-xl">
          <label className='mr-10'>Evento</label>
          <input
            className="w-1/2 bg-stone6 p-3 enabled:hover:border-orange disabled:opacity-75 ..."
            required
            type="text"
            placeholder="Entre el Nombre"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex justify-between my-8 text-xl">
          <label className='mr-10'>Fecha</label>
          <input
          className="w-1/2 bg-stone6 p-3 enabled:hover:border-orange disabled:opacity-75 ..."
            required
            type="text"
            placeholder="Entre la Fecha"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div  className="flex justify-between my-6 text-xl">
          <label className='mr-10'>URL</label>
          <input
          className="w-1/2 bg-stone6 p-3 enabled:hover:border-orange disabled:opacity-75 ..."
            required
            type="text"
            placeholder="Entre la URL"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div  className="flex justify-between my-6 text-xl">
          <label className='mr-10'>Maximo</label>
          <input
            className="w-1/2 bg-stone6 p-3 enabled:hover:border-orange disabled:opacity-75 ..."
            required
            type="text"
            placeholder="Entre el Máximo"
            id="max"
            name="max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>

        <div  className="flex justify-between my-6 text-xl">
          <label className='mr-10'>Minimo</label>
          <input
            className="w-1/2 bg-stone6 p-3 enabled:hover:border-orange disabled:opacity-75 ..."
            required
            type="text"
            placeholder="Entre el Mínimo"
            id="min"
            name="min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        </div>
        <button className='m-6 py-4 px-6' type="submit">
          Actualizar
        </button>
      </form>
      
      </div>
    </>
  );
}

export default PruebaApi;
