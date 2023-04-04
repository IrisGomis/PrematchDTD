import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
const event_id = 1;

function PruebaApi() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/api/events/${event_id}`).then((response) => {
      const eventData = response.data.event;
      setName(eventData.name);
      setDate(eventData.date);
      setUrl(eventData.url);
      setMin(eventData.min);
      setMax(eventData.max);
    });
  }, []);

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

  return (
    <>
      <h2>Editar Evento</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formCarCliente">
          <Form.Label>nombre_cliente</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entre el Nombre"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarMarca">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entre la Fecha"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCardPrecio">
          <Form.Label>URL</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entre la URL"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarAutonomia">
          <Form.Label>Maximo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entre el Máximo"
            id="max"
            name="max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarTipo">
          <Form.Label>Minimo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entre el Mínimo"
            id="min"
            name="min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </>
  );
}

export default PruebaApi;
