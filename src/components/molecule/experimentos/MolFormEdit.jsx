// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getRegions } from "../../../service/RegionsService";
// import { getProvincesById, updateProvinces } from "../../../service/ProvincesService";
// import Swal from "sweetalert2";


// const MolFormEdit = ({ event }) => {
  
  
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [regions, setRegions] = useState([]);
//   const [region_id, setRegion_id] = useState(undefined);
//   const [name, setName] = useState(undefined);
//   const [lat, setLat] = useState(undefined);
//   const [long, setLong] = useState(undefined);
//   const [iso, setIso] = useState(undefined);

 
//   useEffect(() => {
//     const fetchProvincia = async () => {
//       try {
//         const { data } = await getProvincesById(id);
//         setRegion_id(data.region_id);
//         setName(data.name);
//         setLat(data.lat);
//         setLong(data.long);
//         setIso(data.iso);
  
//       } catch (error) {
//         console.log(error);
//       }
    
//     };
//     fetchProvincia();
//   }, [id]);

//   // const handleChange = (event) => {
//   //   setRegion_id(event.target.value);
//   //   setName(event.target.value);
//   //   setLat(event.target.value);
//   //   setLong(event.target.value);
//   //   setIso(event.target.value);

//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if ([region_id, name, lat, long, iso].some((value) => value === undefined)) {
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Debe completar todos los campos",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       return;
//     }
//     try {
//       const eventData = {
//         region_id,
//         name,
//         lat,
//         long,
//         iso,
//       };

//       await updateProvinces(id, eventData);
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Tu región se ha actualizado con éxito!",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       setTimeout(() => {
//         navigate("/provincetable");
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
//     getRegions()
//       .then((response) => {
//         setRegions(response.data);
//       })
//       .catch((error) => console.error(error));
//   }, []);
 
//   return (
//     <>
//       <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
//         <h2 className="text-2xl font-semibold leading-7 text-orange">Editar provincia</h2>

//         <form className="bg-stone6" onSubmit={handleSubmit}>
//           <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
          
//           <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
//               >
//                 Región
//               </label>
//               <select
//                   name="region_id"
//                   id="region_id"
//                   value={region_id} // Cambiar 'regions' por el estado que representa la opción seleccionada
//                   onChange={(event) => setRegion_id(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
//                   className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   {regions.map((e) => (
//                     <option key={e.id} value={e.id}>
//                       {e.name}
//                     </option>
//                   ))}
//                 </select>
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
//                   value={name ?? ""}
//                   handleChange={(event) => setName(event.target.value)}
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
//                   type="numbre"
//                   name="lat"
//                   id="lat"
//                   value={lat ?? ""}
//                   handleChange={(event) => setLat(event.target.value)}
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
//                   type="numbre"
//                   value={long ?? ""}
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
//               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
//                 <input
//                   type="text"
//                   name="iso"
//                   id="iso"
//                   value={iso ?? ""}
//                   onChange={(event) => setIso(event.target.value)}
//                   className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//           </div>

//           <button
//             type="submit"
//             className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
//           >
//           Editar región
//           </button>
//           <button
//             className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
//             type="button"
//           >
//             <a href="/provincetable">Ver Región</a>
//           </button>
//         </form>
        
//       </div>
//     </>
//   );
// }

// export default MolFormEdit;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRegions } from "../../../service/RegionsService";
import { getProvincesById, updateProvinces } from "../../../service/ProvincesService";
import Swal from "sweetalert2";

const MolFormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [regions, setRegions] = useState([]);
  const [provincia, setProvincia] = useState({
    region_id: undefined,
    name: undefined,
    lat: undefined,
    long: undefined,
    iso: "",
  });

  useEffect(() => {
    const fetchProvincia = async () => {
      try {
        const { data } = await getProvincesById(id);
        setProvincia(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvincia();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { region_id, name, lat, long, iso } = provincia;
    if ([region_id, name, lat, long, iso].some((value) => value === undefined)) {
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
      await updateProvinces(id, provincia);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu provincia se ha actualizado con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/provincetable");
      }, 2000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha habido un problema, inténtelo de nuevo!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  useEffect(() => {
    getRegions()
      .then((response) => {
        setRegions(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">Editar provincia</h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Región
              </label>
              <select
                name="region_id"
                id="region_id"
                value={provincia.region_id ?? ""}
                onChange={(event) =>
                  setProvincia({ ...provincia, region_id: event.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-orange focus:border-transparent focus:outline-none sm:text-sm sm:leading-5"
               >
                <option value="" disabled>
                 Seleccionar Región
                 </option>
                 {regions.map((region) => (
                 <option key={region.id} value={region.id}>
                 {region.name}
                 </option>
                 ))}
                 </select>
                 </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="iso"
                  className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
                >
                  ISO
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="iso"
                    id="iso"
                    value={iso ?? ""}
                    onChange={(event) => setIso(event.target.value)}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/provincetable")}
                  className="w-full mr-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange hover:bg-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                  disabled={[region_id, name, lat, long, iso].some(
                    (value) => value === undefined
                  )}
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
      
      );
    };
    
    export default MolFormEdit;