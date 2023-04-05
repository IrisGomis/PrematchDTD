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
    <h2 className="text-xl font-semibold leading-7 text-white">Editar evento</h2>
   
      <form onSubmit={handleSubmit}>
      <div className="mt-10 my-6 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
        <div className="flex justify-between text-sm ">
          <label className='mr-10 p-3'>Evento</label>
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

        <div className="flex justify-between text-sm">
          <label className='mr-10 p-3'>Fecha</label>
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

        <div  className="flex justify-between text-sm">
          <label className='mr-10 p-3'>Enlace de la reunión</label>
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

        <div  className="flex justify-between text-sm">
          <label className='mr-10 p-3'>Maximo</label>
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

        <div  className="flex justify-between text-sm">
          <label className='mr-10 p-3'>Minimo</label>
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
        <div className='flex justify-between'>
          <button className='text-sm py-3.5 px-12 py-3.5 my-6 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ...' type="submit">
            Actualizar
          </button>
          <button
              type="button"
              className="text-sm px-12 py-3.5 my-6 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
            >
              Crear evento
          </button>
          <button
              className="text-sm px-12 py-3.5 my-6 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
              type="button"
            >
              <a href="/table">Ver Evento</a>
          </button>
        </div>
      </form>      
      </div>
    </>
  );
}

export default PruebaApi;
