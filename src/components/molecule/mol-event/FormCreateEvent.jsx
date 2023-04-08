import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvento } from "../../../service/EventService";
import Swal from "sweetalert2";

export default function FormCreateEvent() {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('date', date);
      formData.append('url', url);
      formData.append('min', min);
      formData.append('max', max);
      

      const { data } = await createEvento(formData);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu emprendimiento se ha creado con éxito!",
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
    <section className="bg-stone3 dark:bg-orange">
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
                  className="block mb-2 text-base font-semibold text-stone8 dark:text-slate-900"
                >
                  Nombre
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="block p-2.5 w-full text-sm text-text-stone8 bg-text-stone3 rounded-lg border border-text-stone3 focus:ring-orange focus:border-orange dark:bg-stone3 dark:border-stone6 dark:placeholder-stone4 dark:text-slate-900 dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Nombre del evento..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-base font-semibold text-stone8 dark:text-slate-900"
                >
                  Fecha del evento
                </label>
                <input
                  type="date"
                  title="date"
                  id="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="block p-2.5 w-full text-sm text-text-stone8 bg-text-stone3 rounded-lg border border-text-stone3 focus:ring-orange focus:border-orange dark:bg-stone3 dark:border-stone6 dark:placeholder-stone4 dark:text-slate-900 dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Nombre de tu servicio o producto..."
                  required
                />
              </div>

              <label
                className="block mb-2 text-base font-semibold text-stone8 dark:text-slate-900"
                htmlFor="user_avatar"
              >
               Canal del evento
              </label>
              <input
                  type="url"
                  title="url"
                  id="url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  className="block p-2.5 w-full text-sm text-text-stone8 bg-text-stone3 rounded-lg border border-text-stone3 focus:ring-orange focus:border-orange dark:bg-stone3 dark:border-stone6 dark:placeholder-stone4 dark:text-slate-900 dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Nombre de tu servicio o producto..."
                  required
                />

              <label
                htmlFor="min"
                className="block mb-2 text-base font-semibold text-stone8 dark:text-slate-900"
              >
                Mínimo de entrevistas
              </label>
              <input
                  type="number"
                  title="min"
                  id="min"
                  value={min}
                  onChange={(event) => setMin(event.target.value)}
                  className="block p-2.5 w-full text-sm text-text-stone8 bg-text-stone3 rounded-lg border border-text-stone3 focus:ring-orange focus:border-orange dark:bg-stone3 dark:border-stone6 dark:placeholder-stone4 dark:text-slate-900 dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Número mínimo..."
                  required
                />
              <div className="mb-6">
                <label
                  htmlFor="max"
                  className="block mb-2 text-base font-semibold text-stone8 dark:text-slate-900"
                >
                  Máximo de entrevistas
                </label>
                <input
                  type="number"
                  title="max"
                  id="max"
                  value={max}
                  onChange={(event) => setMax(event.target.value)}
                  className="block p-2.5 w-full text-sm text-text-stone8 bg-text-stone3 rounded-lg border border-text-stone3 focus:ring-orange focus:border-orange dark:bg-stone3 dark:border-stone6 dark:placeholder-stone4 dark:text-slate-900 dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Número mínimo..."
                  required
                />
              </div>

              <button
                type="submit"
                className="focus:outline-none text-slate-50 bg-stone5 hover:bg-orange focus:ring-4 focus:ring-orangel font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange"
              >
                Registrar Negocio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
