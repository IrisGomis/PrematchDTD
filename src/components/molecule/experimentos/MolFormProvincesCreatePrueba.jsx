// import React, { useState, useEffect, Fragment } from "react";
// import { createProvinces } from "../../../service/ProvincesService";
// import { getRegions } from "../../../service/RegionsService";
// import Swal from "sweetalert2";
// import { useParams, useNavigate } from "react-router-dom";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// const MolFormProvincesCreate = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selected, setSelected] = useState("");
//   const [region_id, setRegion_id] = useState("");
//   const [nameRegion, setNameRegion] = useState([]);
//   const [name, setName] = useState("");
//   const [lat, setLat] = useState("");
//   const [long, setLong] = useState("");
//   const [iso, setIso] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("region_id", region_id);
//       formData.append("name", name);
//       formData.append("lat", lat);
//       formData.append("long", long);
//       formData.append("iso", iso);

//       const { data } = await createProvinces(formData);
//       console.log(data);
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Tu región se ha añadido con éxito!",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       setTimeout(() => {
//         navigate("/provincecreate");
//       }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
//     } catch (error) {
//       console.log(error);
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Ha habido un problema, prueba de nuevo!",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     }
//   };
  
//   useEffect(() => {
//     const fetchProvincia = async () => {
//       try {
//         const { data } = await getRegions();
//         setRegions(data.provinces); // Cambia el estado para contener todas las regiones
//         setRegion_id(data.region_id);
//         setNameRegion(data.name);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchProvincia();
//   }, [id]);
//   function classNames(...classes) {
//      return classes.filter(Boolean).join(" ");
//    }
 
//   return (
//     <>
//       <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
//         <h2 className="text-2xl font-semibold leading-7 text-orange">Añadir provincia</h2>

//         <form className="bg-stone6" onSubmit={handleSubmit}>
//           <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">

            
//                   {/* <label htmlFor="region_id" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                    
//                   </label>
//                   <div className="mt-2 sm:col-span-2 sm:mt-0">
//                     <select
//                       name="region_id"
//                       id="region_id"
//                       value={nameRegion}
//                       onChange={(event) => setNameRegion(event.target.value)}
//                       autoComplete="given-name"
//                       className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                     >
//                       {nameRegion.map((event) => (
//                         <option key={event.region_id} value={event.nameRegion}>
//                           {event.nameRegion}
//                         </option>
//                       ))}
//                     </select> 
//                      </div>*/}

//               <label
//                 htmlFor="country"
//                 className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
//               >
//                 Regiones
//               </label>
//               <div className="mt-2 sm:col-span-2 sm:mt-0">
//                 <Listbox value={selected} onChange={setSelected}>
//                   {({ open }) => (
//                     <>
                      
//                       <div className="relative mt-2">
//                         <Listbox.Button className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-orange focus:outline-none focus:ring-2 focus:ring-orangel sm:text-sm sm:leading-6">
//                           <span className="block truncate">
//                             {selected.nameRegion}
//                           </span>
//                           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                             <ChevronUpDownIcon
//                               className="h-5 w-5 text-stone4"
//                               aria-hidden="true"
//                             />
//                           </span>
//                         </Listbox.Button>

//                         <Transition
//                           show={open}
//                           as={Fragment}
//                           leave="transition ease-in duration-100"
//                           leaveFrom="opacity-100"
//                           leaveTo="opacity-0"
//                         >
//                           <Listbox.Options className="absolute bg-stone5 z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                             {setNameRegion(event.target.value).map((e) => (
//                               <Listbox.Option
//                                 key={id}
//                                 className={({ active }) =>
//                                   classNames(
//                                     active
//                                       ? "bg-orange text-white"
//                                       : "text-stone6",
//                                     "relative cursor-default select-none py-2 pl-3 pr-9"
//                                   )
//                                 }
//                                 value={nameRegion}
//                               >
//                                 {({ selected, active }) => (
//                                   <>
//                                     <span
//                                       className={classNames(
//                                         selected
//                                           ? "font-semibold"
//                                           : "font-normal",
//                                         "block truncate"
//                                       )}
//                                     >
//                                       {setNameRegion(event.target.value)}
//                                     </span>

//                                     {selected ? (
//                                       <span
//                                         className={classNames(
//                                           active
//                                             ? "text-white"
//                                             : "text-orange",
//                                           "absolute inset-y-0 right-0 flex items-center pr-4"
//                                         )}
//                                       >
//                                         <CheckIcon
//                                           className="h-5 w-5"
//                                           aria-hidden="true"
//                                         />
//                                       </span>
//                                     ) : null}
//                                   </>
//                                 )}
//                               </Listbox.Option>
//                             ))}
//                           </Listbox.Options>
//                         </Transition>
//                       </div>
//                     </>
//                   )}
//                 </Listbox>
//               </div>

                 
            
//           <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
//               >
//                 Región id
//               </label>
//               <div className="mt-2 sm:col-span-2 sm:mt-0">
//                 <input
//                   type="number"
//                   name="region_id"
//                   id="region_id"
//                   value={region_id}
//                   onChange={(event) => setRegion_id(event.target.value)}
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
            
//             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
//               >
//                 Provincia
//               </label>
//               <div className="mt-2 sm:col-span-2 sm:mt-0">
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={name}
//                   onChange={(event) => setName(event.target.value)}
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
//               <label
//                 htmlFor="lat"
//                 className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
//               >
//                 Latitud
//               </label>

//               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
//                 <input
//                   type="number"
//                   name="lat"
//                   id="lat"
//                   value={lat}
//                   onChange={(event) => setLat(event.target.value)}
//                   className="block w-full mr-10 rounded-md border-0 px-2 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
//               <label
//                 htmlFor="long"
//                 className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
//               >
//                 Longitud
//               </label>
//               <div className="mt-2 sm:col-span-2 sm:mt-0">
//                 <input
//                   id="long"
//                   name="long"
//                   type="number"
//                   value={long}
//                   onChange={(event) => setLong(event.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
//               <label
//                 htmlFor="iso"
//                 className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
//               >
//                 ISO
//               </label>
//               <div className="mt-2 sm:col-span-2 sm:mt-0">
//                 <input
//                   id="iso"
//                   name="iso"
//                   type="text"
//                   value={iso}
//                   onChange={(event) => setIso(event.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//           </div>
//           <button
//             type="submit"
//             className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
//           >
//             Añadir provincia
//           </button>
//           <button
//             className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
//             type="button"
//           >
//             <a href="/provincetable">Ver provincia</a>
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default MolFormProvincesCreate;
