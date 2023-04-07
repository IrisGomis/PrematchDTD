
import { createEvent } from "../../../service/EventService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function MolFormEventCreate() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('date', date);
      formData.append('url', url);
      formData.append('max', max);
      formData.append('min', min);

      const { data } = await createEvent(formData);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu evento se ha creado con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha habido un problema, prueba de nuevo!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <section className="bg-stone6 dark:bg-yellow-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-50 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
              encType="multipart/form-data"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-title font-semibold text-gray-900 dark:text-slate-900"
                >
                  Nombre del evento
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tu nombre..."
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-base font-title font-semibold text-gray-900 dark:text-slate-900"
                >
                  Fecha del evento
                </label>
                <input
                  type="datetime"
                  title="date"
                  id="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre de tu servicio o producto..."
                  required=""
                />
              </div>

              <label
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                htmlFor="url"
              >
                Añadir canal del evento
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="Canal delevento"
                id="url"
                type="url"
                onChange={(event) => setUrl(event.target.value)}
              />

              <label
                htmlFor="default-input"
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
              >
                Número de entrevisas máximo
              </label>
              <textarea
                type="number"
                id="max"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Número máximo"
                value={max}
                onChange={(event) => setMax(event.target.value)}
              ></textarea>
              <div className="mb-6">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                >
                  Precio
                </label>
                <input
                  type="number"
                  id="min"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pon el precio de tu producto..."
                  value={min}
                  onChange={(event) => setMin(event.target.value)}
                />
              </div>

              <button
                type="submit"
                className="focus:outline-none text-slate-50 bg-blue-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Crear evento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
