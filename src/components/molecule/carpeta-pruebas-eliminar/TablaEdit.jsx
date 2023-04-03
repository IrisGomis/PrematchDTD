// import axios from "axios";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";

// const API_BASE_URL = "http://127.0.0.1:8000/api";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function TableEvent() {
//   const checkbox = useRef();
//   const [checked, setChecked] = useState(false);
//   const [indeterminate, setIndeterminate] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState([]);
//   const [event, setEvent] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editedEvent, setEditedEvent] = useState(null);
//   const [formState, setFormState] = useState({
//     name: "",
//     url: "",
//     date: "",
//     min: "",
//     max: "",
//   });

//   function handleFormChange(event) {
//     const { name, value } = event.target;
//     setFormState((prevState) => ({ ...prevState, [name]: value }));
//   }

//   useEffect(() => {
//     axios
//       .get(`${API_BASE_URL}/events/`)
//       .then((response) => {
//         setEvent(response.data);
//         setSelectedEvent(response.data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   useLayoutEffect(() => {
//     const isIndeterminate =
//       selectedEvent.length > 0 && selectedEvent.length < event.length;
//     setChecked(selectedEvent.length === event.length);
//     setIndeterminate(isIndeterminate);
//     checkbox.current.indeterminate = isIndeterminate;
//   }, [selectedEvent, event]);

//   function toggleAll() {
//     setSelectedEvent([]);
//     setEditMode(false);
//     setEditedEvent(null);
//     setChecked(false);
//     setIndeterminate(false);
//   }

//   function handleEdit(eventId) {
//     const { name, url, date, min, max } = formState;

//     axios
//       .put(`${API_BASE_URL}/events/${eventId}`, {
//         name,
//         url,
//         date,
//         min,
//         max,
//       })
//       .then((response) => {
//         const updatedEvent = response.data;
//         const updatedEvents = event.map((event) =>
//           event.id === updatedEvent.id ? updatedEvent : event
//         );
//         setEvent(updatedEvents);
//         setSelectedEvent([updatedEvent]);
//       })
//       .catch((error) => {
//         console.error(`Error updating event ${eventId}: ${error.message}`);
//       });
//   }

//   function handleDelete(eventId) {
//     if (selectedEvent.length > 1) {
//       console.error("Cannot delete multiple events at once.");
//       return;
//     }

//     // Make API call to delete event
//     axios
//       .delete(`${API_BASE_URL}/events/${eventId}`)
//       .then((response) => {
//         console.log(`Event ${eventId} deleted successfully!`);
//         setEvent(event.filter((e) => e.id !== eventId));
//       })
//       .catch((error) => {
//         console.error(`Error deleting event ${eventId}: ${error.message}`);
//       });
//   }

//   function handleSelectChange(event) {
//     setEditMode(true);
//     setEditedEvent(event);
//     setFormState(event);
//   }

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 bg-stone4">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-base font-semibold leading-6 text-gray-900">
//             Eventos
//           </h1>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//             type="button"
//             className="block rounded-md bg-orange px-3 py-1.5 text-center text-sm font-semibold
//              leading-6 text-white shadow-sm hover:bg-stone6 focus-visible:outline focus-visible:outline-2
//               focus-visible:outline-offset-2 focus-visible:outline-orange"
//           >
//             Añadir evento
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <div className="relative">
//               {selectedEvent.length > 0 && (
//                 <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
//                   <button
//                     type="button"
//                     className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
//                     onClick={() => handleEdit(selectedEvent[0].id)}
//                   >
//                     Editar
//                   </button>
//                   <button
//                     type="button"
//                     className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
//                     onClick={() => handleDelete(selectedEvent[0].id)}
//                   >
//                     Eliminar
//                   </button>
//                 </div>
//               )}
//               <table className="min-w-full table-fixed divide-y divide-gray-300 mt-6">
//                 <thead>
//                   <tr>
//                     <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
//                       <input
//                         type="checkbox"
//                         className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                         ref={checkbox}
//                         checked={checked}
//                         onChange={toggleAll}
//                       />
//                     </th>
//                     <th
//                       scope="col"
//                       className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 mt-5"
//                     >
//                       Nombre
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Url
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Fecha
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Num-Min-Ent
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Num-Max-Ent
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-3"
//                     >
//                       <span className="sr-only">Editar</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 bg-white">
//                   {event.map((event) => (
//                     <tr
//                       key={event.id}
//                       className={classNames(
//                         selectedEvent.find((e) => e.id === event.id)
//                           ? "bg-gray-100 text-gray-900"
//                           : "text-gray-700",
//                         "whitespace-nowrap"
//                       )}
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <div className="flex items-center">
//                           <input
//                             ref={checkbox}
//                             type="checkbox"
//                             className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                             checked={selectedEvent.find(
//                               (e) => e.id === event.id
//                             )}
//                             onChange={(e) =>
//                               handleSelectChange(e.target.checked, event.id)
//                             }
//                           />
//                           <span className="sr-only">Select</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {editMode && editedEvent?.id === event.id ? (
//                           <input
//                             type="text"
//                             name="name"
//                             id={`name-${event.id}`}
//                             value={formState.name}
//                             onChange={handleFormChange}
//                             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                           />
//                         ) : (
//                           <div className="text-sm font-medium text-gray-900">
//                             {event.name}
//                           </div>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {editMode && editedEvent?.id === event.id ? (
//                           <input
//                             type="text"
//                             name="url"
//                             id={`url-${event.id}`}
//                             value={formState.url}
//                             onChange={handleFormChange}
//                             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                           />
//                         ) : (
//                           <div className="text-sm text-gray-500">
//                             {event.url}
//                           </div>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {editMode && editedEvent?.id === event.id ? (
//                           <input
//                             type="text"
//                             name="date"
//                             id={`Fecha-${event.id}`}
//                             value={formState.date}
//                             onChange={handleFormChange}
//                             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                           />
//                         ) : (
//                           <div className="text-sm text-gray-500">
//                             {event.date}
//                           </div>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {editMode && editedEvent?.id === event.id ? (
//                           <input
//                             type="text"
//                             name="min"
//                             id={`Mínimo-${event.id}`}
//                             value={formState.min}
//                             onChange={handleFormChange}
//                             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                           />
//                         ) : (
//                           <div className="text-sm text-gray-500">
//                             {event.min}
//                           </div>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {editMode && editedEvent?.id === event.id ? (
//                           <input
//                             type="text"
//                             name="max"
//                             id={`Máximo-${event.id}`}
//                             value={formState.max}
//                             onChange={handleFormChange}
//                             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                           />
//                         ) : (
//                           <div className="text-sm text-gray-500">
//                             {event.max}
//                           </div>
//                         )}
//                       </td>
//                       <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 ">
//                         <a
//                           href="#"
//                           className="text-indigo-600 hover:text-indigo-900"
//                         >
//                           Editar<span className="sr-only">, {event.id}</span>
//                         </a>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
