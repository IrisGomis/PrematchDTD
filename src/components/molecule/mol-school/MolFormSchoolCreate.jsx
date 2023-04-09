import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRegions } from "../../../service/RegionsService";
import Swal from "sweetalert2";

export default function MolFormRegionsCreate() {
  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [iso, setIso] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("lat", lat);
      formData.append("long", long);
      formData.append("iso", iso);
     

      const { data } = await createRegions(formData);
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
    <section>
      <div>
        <div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
              encType="multipart/form-data"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-title font-semibold text-gray-900 dark:text-slate-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tu nombre..."
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="lat">Latitud</label>
                <input
                  type="number"
                  title="latitud"
                  id="lat"
                  value={lat}
                  onChange={(event) => setLat(event.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="long">Longitud</label>
                <input
                  type="number"
                  title="longitud"
                  id="long"
                  value={long}
                  onChange={(event) => setLong(event.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="iso">ISO</label>
                <input
                  type="number"
                  id="iso"
                  value={iso}
                  onChange={(event) => setIso(event.target.value)}
                  required
                />
              </div>
               <button type="submit">Crear evento</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
