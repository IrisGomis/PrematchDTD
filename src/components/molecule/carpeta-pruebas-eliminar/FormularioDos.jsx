// import React, { useState } from "react";
// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000";

// function EventForm() {
//   const [{ name, date, url, min, max }, setState] = useState({
//     name: "",
//     date: "",
//     url: "",
//     min: "",
//     max: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = { name, date, url, min, max };
//     axios.post(`${API_URL}/api/events`, data).then((response) => {
//       console.log(response.data);
//       // limpiar los campos después de enviar la solicitud
//       setState({ name: "", date: "", url: "", min: "", max: "" });
//     });
//   };

//   return (
//     <form className="bg-stone6" onSubmit={handleSubmit}>
//       <div className="flex  my-5 mx-4">
//         <label htmlFor="eventName">Nombre del evento:</label>
//         <input
//           className="text-stone5"
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="my-5 mx-4">
//         <label htmlFor="url">URL:</label>
//         <input
//           className="text-stone5"
//           id="url"
//           name="url"
//           value={url}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="my-5 mx-4">
//         <label htmlFor="date">Fecha:</label>
//         <input
//           className="text-stone5"
//           id="date"
//           name="date"
//           value={date}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="my-5 mx-4">
//         <label htmlFor="min">Entrevistas mínimas:</label>
//         <input
//           className="text-stone5"
//           id="min"
//           name="min"
//           value={min}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="my-5 mx-4">
//         <label htmlFor="max">Entrevistas máximas:</label>
//         <input
//           className="text-stone5"
//           id="max"
//           name="max"
//           value={max}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button className="my-5 mx-4 bg-orange p-2 rounded-md" type="submit">
//         Crear evento
//       </button>
//       <button className="my-5 mx-4 bg-orange p-2 rounded-md" type="submit">
//         <a href="/table">Ver Evento</a>
//       </button>
//     </form>
//   );
// }

// export default EventForm;
