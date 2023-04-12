import React, { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventoById, updateEvento } from "../../../service/EventService";
import Swal from "sweetalert2";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const MolFormEventEdit = ({ event }) => {
  const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
    { id: 7, name: "Caroline Schultz" },
    { id: 8, name: "Mason Heaney" },
    { id: 9, name: "Claudie Smitham" },
    { id: 10, name: "Emil Schaefer" },
  ];
  const { id } = useParams();
  const navigate = useNavigate();

  const [selected, setSelected] = useState("");
  const [name, setName] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [url, setUrl] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);

 
  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const { data } = await getEventoById(id);
        setName(data.name);
        setDate(data.date);
        setUrl(data.url);
        setMax(data.max);
        setMin(data.min);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvento();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if ([name, date, url, max, min].some((value) => value === undefined)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debe completar todos los campos",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    try {
      const eventData = {
        name,
        date,
        url,
        max,
        min,
      };

      await updateEvento(id, eventData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu evento se ha actualizado con éxito!",
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
        title: "Ha habido un problema, ¡prueba de nuevo!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

 
  return (
    <>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">Editar Evento</h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
          
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Nombre del Evento
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name ?? ""}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Fecha y Hora
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={date ?? ""}
                  onChange={(event) => setDate(event.target.value)}
                  placeholder="Fecha"
                  autoComplete="date"
                  className="block w-full mr-10 rounded-md border-0 px-2 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Enlace de la reunión
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="url"
                  name="url"
                  type="url"
                  value={url ?? ""}
                  onChange={(event) => setUrl(event.target.value)}
                  autoComplete="url"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Asistentes
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      
                      <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-orange focus:outline-none focus:ring-2 focus:ring-orangel sm:text-sm sm:leading-6">
                          <span className="block truncate">
                            {selected.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-stone4"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute bg-stone5 z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person) => (
                              <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "bg-orange text-white"
                                      : "text-stone6",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-orange",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Número de entrevistas
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="max"
                  id="max"
                  value={max ?? ""}
                  onChange={(event) => setMax(event.target.value)}
                  placeholder="Maximas"
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
                <input
                  type="number"
                  name="min"
                  id="min"
                  value={min ?? ""}
                  onChange={(event) => setMin(event.target.value)}
                  placeholder="Mínimas"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
          >
          Editar evento
          </button>
          <button
            className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/eventtable">Ver Evento</a>
          </button>
        </form>
      </div>
    </>
  );
}

export default MolFormEventEdit;
