import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRegionsById, updateRegions } from "../../../service/RegionsService";
import Swal from "sweetalert2";
import MolMenuAdmin from "./MolMenuAdmin";


const MolFormRegionsEdit = ({ event }) => {
 
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [iso, setIso] = useState("");

 
  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const { data } = await getRegionsById(id);
        setName(data.region.name);
        setLat(data.region.lat);
        setLong(data.region.long);
        setIso(data.region.iso);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRegion();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if ([name, lat, long, iso].some((value) => value === undefined)) {
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
        lat,
        long,
        iso,
      };

      await updateRegions(id, eventData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu región se ha actualizado con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/regiontable");
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

 
  return (
    <>
    <MolMenuAdmin/>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">Editar CC AA</h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
          
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                CC AA
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="lat"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Latitud
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="numbre"
                  name="lat"
                  id="lat"
                  value={lat}
                  onChange={(event) => setLat(event.target.value)}
                  className="block w-full mr-10 rounded-md border-0 px-2 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="long"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Longitud
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="long"
                  name="long"
                  type="numbre"
                  value={long}
                  onChange={(event) => setLong(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="iso"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                ISO
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="iso"
                  id="iso"
                  value={iso}
                  onChange={(event) => setIso(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>

          <button
            type="submit"
            className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
          >
          Editar CC AA
          </button>
          <button
            className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/regiontable">Ver CC AA</a>
          </button>
        </form>
        
      </div>
    </>
  );
}

export default MolFormRegionsEdit;
