import { getEvento, deleteEvento } from "../../../service/EventService";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuEvent from "./MenuEvent";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MolTableEventShowDelete() {
  
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvento()
      .then((response) => {
        setEvent(response.data);
        setSelectedEvent(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedEvent.length > 0 && selectedEvent.length < event.length;
    setChecked(selectedEvent.length === event.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedEvent, event]);
  
  function toggleAll() {
    if (selectedEvent.length === 0) {
      return;
    }
    setSelectedEvent(checked || indeterminate ? [] : selectedEvent)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  function handleDelete() {
    if (selectedEvent.length === 0) {
      console.warn("No events selected to delete");
      return;
    }

    // Create an array of promises to delete each selected event
    const deletePromises = selectedEvent.map((event) =>
      deleteEvento(event.id)
    );

    // Delete all events in parallel
    Promise.all(deletePromises)
      .then((responses) => {
        console.log("Events deleted successfully!");
        // Remove all deleted events from the event state
        const deletedIds = selectedEvent.map((event) => event.id);
        setEvent(event.filter((e) => !deletedIds.includes(e.id)));
        // Clear the selectedEvent state
        setSelectedEvent([]);
        setChecked(false);
        setIndeterminate(false);
      })
      .catch((error) => {
        console.error(`Error deleting events: ${error.message}`);
      });
  }
  return (
    <>
    <MenuEvent/>
    <div className="bg-stone6 w-screen max-w-screen-xl rounded-xl p-20 m-20 text-white">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl text-orange font-semibold leading-7">Lista de eventos</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
            className="text-sm text-stone2 my-10 mx-10 px-6 py-1.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/eventcreate">Crear Evento</a>
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedEvent.length > 0 && (
                <div className="block left-14 top-0 h-12 items-center space-x-3 sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                     onClick={() => handleDelete(selectedEvent[0].id)}
                  >
                    Eliminar
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Evento
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                     Fecha
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Link enlace evento
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Max-Entrevistas
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Min-Entrevistas
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      <span className="sr-only">Editar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {event.map((e) => (
                    <tr key={e.id} className="hover:bg-gray-50">
                      <td className="px-7 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          name={e.id}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          checked={selectedEvent.some((ev) => ev.id === e.id)}
                          onChange={(event) => {
                            const isChecked = event.target.checked;
                            setSelectedEvent((prevState) => {
                              if (isChecked) {
                                return [...prevState, e];
                              } else {
                                return prevState.filter((ev) => ev.id !== e.id);
                              }
                            });
                          }}
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedEvent.includes(e.id) ? 'text-orange' : 'text-white'
                        )}
                      >
                        {e.name}
                      </td>
                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.name}</td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.date}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.url}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.max}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.min}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          to={`/eventedit/${e.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}






















