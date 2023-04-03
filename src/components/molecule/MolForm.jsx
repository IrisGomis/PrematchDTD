import React, { useState } from "react";
import axios from "axios";
// import DatePicker from "../atome/datepickerAtom/DatePicker";

const API_URL = "http://127.0.0.1:8000";


export default function MolForm() {
  const [state, setState] = useState({
    name: "",
    date: "",
    url: "",
    min: "",
    max: "",
  });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setState((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = { name, date, url, min, max };
      axios.post(`${API_URL}/api/events`, data).then((response) => {
        console.log(response.data);
        setState({ name: "", date: "", url: "", min: "", max: "" });
      });
    };

  return (
    <div className="bg-stone4 my-10 rounded-lg p-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-8 space-x-8">
          <div className="border-b border-orange pb-6">
            <div className="mt-5">
              <input
                type="text"
                name="name"
                id="name"
                value={state.name}
                onChange={handleInputChange}
                placeholder="Nombre del evento"
                className="block w-full rounded-md border-0 p-1.5 text-stone8 shadow-sm ring-1 ring-inset ring-stone4 placeholder:text-stone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         <div className="border-b border-orange pb-12">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-start text-stone6 text-sm mr-8 pt-4"
              >
                Fecha de Evento
              </label>
              <div className="mt-2">
              <input
          id="date"
          name="date"
          value={state.date}
          onChange={handleInputChange}
          className="block w-full rounded-md border-0 py-1.5 text-stone8 shadow-sm ring-1 ring-inset ring-strone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-orange pb-12">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-start text-stone6 text-sm mr-8 pt-4"
              >
                URL
              </label>
              <div className="mt-2">
              <input
          id="url"
          name="url"
          value={state.url}
          onChange={handleInputChange}
          className="block w-full rounded-md border-0 py-1.5 text-stone8 shadow-sm ring-1 ring-inset ring-strone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex border-b border-orange pb-12">
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-stone6"
              >
                Mínimo
              </label>
              <div className="my-2 mx-20">
                <input
                  id="min"
                  name="min"
                  value={state.min}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 text-stone8 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-stone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-stone6"
              >
                Máximo
              </label>
              <div className="mt-2">
                <input
                   id="max"
                   name="max"
                   value={state.max}
                   onChange={handleInputChange}
                  className="block w-full rounded-md border-0 text-stone8 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-stone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            
            <button className="rounded-md bg-stone6 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-stone3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone4" type="submit">
           <a href="/table">Ver Evento</a>
          </button>
            <button
              type="submit"
              className="rounded-md bg-orange py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orangel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear evento
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
