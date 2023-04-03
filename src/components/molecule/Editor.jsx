import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

function EditEvent(props) {
  const { eventId } = useParams();

  const [event, setEvent] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    if (eventId) {
      axios.get(`${API_URL}/events/${eventId}`).then((response) => {
        const { name, date, url, min, max } = response.data;
        setName(name);
        setDate(date);
        setUrl(url);
        setMin(min);
        setMax(max);
        setEvent(response.data);
      });
    }
 
  }, [eventId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'url':
        setUrl(value);
        break;
      case 'min':
        setMin(value);
        break;
      case 'max':
        setMax(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      date,
      url,
      min,
      max,
    };
    if (eventId) {
      axios.put(`${API_URL}/events/${eventId}`, data).then((response) => {
        console.log(response.data);
        setName("");
        setDate("");
        setUrl("");
        setMin("");
        setMax("");
        setEvent(null);
      });
    } else {
      axios.post(`${API_URL}/events`, data).then((response) => {
        console.log(response.data);
        setName("");
        setDate("");
        setUrl("");
        setMin("");
        setMax("");
      });
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    axios.get(`${API_URL}/events/${eventId}`).then((response) => {
      const { name, date, url, min, max } = response.data;
      setName(name);
      setDate(date);
      setUrl(url);
      setMin(min);
      setMax(max);
      setEvent(response.data);
    });
  };

  return (
    <>
    <form className="bg-stone6" onSubmit={handleSubmit}>
      <div className="flex my-5 mx-4">
        <label htmlFor="eventName">Nombre del evento:</label>
        <input
          className="text-stone5"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="url">URL:</label>
        <input
          className="text-stone5"
          id="url"
          name="url"
          value={url}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="date">Fecha:</label>
        <input
          className="text-stone5"
          id="date"
          name="date"
          value={date}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="min">Entrevistas mínimas:</label>
        <input
          className="text-stone8"
          id="min"
          name="min"
          value={min}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-5 mx-4">
        <label htmlFor="max">Entrevistas máximas:</label>
        <input
          className="text-stone8"
          id="max"
          name="max"
          value={max}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center my-10">
          <button
            className="bg-stone2 text-orange px-5 py-2 mx-5 rounded-md"
            onClick={handleEdit}
          >
            Editar
          </button>
      </div>
    </form>
    </>
  );
}

export default EditEvent;
