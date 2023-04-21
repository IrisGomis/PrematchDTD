import React, { useState, useEffect } from "react";
import { getMatch, createMatch} from "../../../service/MatchesService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MatchCreate = () => {
  const navigate = useNavigate();
 

  const [coder_id, setCoder_id] = useState("");
  const [recruiter_id, setRecruiter_id] = useState("");
  const [afinity, setAfinity] = useState("");
  const [numMatch, setNumMatch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("coder_id", coder_id);
      formData.append("recruiter_id", recruiter_id);
      formData.append("afinity", afinity);
      formData.append("numMatch", numMatch);
      

      const { data } = await createMatch(formData);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu región se ha añadido con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/matchcreate");
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
    <>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">
          Crear match
        </h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="regions"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Región
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="setCoder_id"
                  id="setCoder_id"
                  value={setCoder_id} // Cambiar 'regions' por el estado que representa la opción seleccionada
                  onChange={(event) => setCoder_id(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {coder.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="regions"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Región
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="recruiter_id"
                  id="recruiter_id"
                  value={recruiter_id} // Cambiar 'regions' por el estado que representa la opción seleccionada
                  onChange={(event) => setRecruiter_id(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {recruiter.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="afinity"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Provincia
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="afinity"
                  id="afinity"
                  value={afinity}
                  onChange={(event) => setAfinity(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="afinity"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Provincia
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="afinity"
                  id="afinity"
                  value={afinity}
                  onChange={(event) => setAfinity(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="afinity"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Provincia
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="afinity"
                  id="afinity"
                  value={afinity}
                  onChange={(event) => setAfinity(event.target.value)}
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
                Numero de match
              </label>

              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="numMatch"
                  id="numMatch"
                  value={numMatch}
                  onChange={(event) => setNumMatch(event.target.value)}
                  className="block w-full mr-10 rounded-md border-0 px-2 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           
          </div>
          <button
            type="submit"
            className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
          >
            Crear Match
          </button>
          <button
            className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/matchtable">Ver Match</a>
          </button>
        </form>
      </div>
    </>
  );
};

export default MatchCreate;
