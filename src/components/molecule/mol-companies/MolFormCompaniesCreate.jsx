import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createCompanies } from "../../../service/CompaniesService";
import { getProvinces } from "../../../service/ProvincesService";

import Swal from "sweetalert2";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const MolFormCompaniesCreate = () => {
  
  // const people = [
  //   { id: 1, name: "Wade Cooper" },
  //   { id: 2, name: "Arlene Mccoy" },
  //   { id: 3, name: "Devon Webb" },
  //   { id: 4, name: "Tom Cook" },
  //   { id: 5, name: "Tanya Fox" },
  //   { id: 6, name: "Hellen Schmidt" },
  //   { id: 7, name: "Caroline Schultz" },
  //   { id: 8, name: "Mason Heaney" },
  //   { id: 9, name: "Claudie Smitham" },
  //   { id: 10, name: "Emil Schaefer" },
  // ];

  // const [selected, setSelected] = useState(people[3]);
  const [name, setName] = useState("");
  const [ubication, setUbication] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [priority, setPriority] = useState("");
  const [province_id, setProvince_id] = useState("");
  const [provinces,setProvinces] = useState ([]);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('ubication', ubication);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('priority', priority);
      formData.append('province_id', 1);
      

      const { data } = await createCompanies(formData);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu empresa se ha añadido con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/companiestable");
      }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Ha habido un problema, prueba de nuevo!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  useEffect(() => {
    getProvinces()
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">Añadir empresa</h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">
            
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Nombre de la empresa <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Inserte nombre de la empresa."
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="company-location"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Dirección de la empresa <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="ubication"
                  id="ubication"
                  value={ubication}
                  onChange={(event) => setUbication(event.target.value)}
                  placeholder="Inserte ubicación de la empresa."
                  autoComplete="given-ubication"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="province" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Provincia de la empresa
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="province_id"
                  id="province_id"
                  value={province_id} // Cambiar 'regions' por el estado que representa la opción seleccionada
                  onChange={(event) => setProvince_id(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {provinces.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="company-email"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Email de la empresa <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Inserte email de la empresa."
                  autoComplete="given-email"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="comany-phone"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Teléfono de la empresa <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Inserte télefono de la empresa."
                  autoComplete="given-phone"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="company-priority" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Prioridad de la empresa
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="priority"
                  id="priority"
                  value={priority} // Cambiar 'regions' por el estado que representa la opción seleccionada
                  onChange={(event) => setPriority(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {priority.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div> */}

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="company-priority"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Prioridad de la empresa <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="priority"
                  id="priority"
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                  placeholder="Inserte prioridad de la empresa."
                  autoComplete="given-priority"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
          <button
            type="submit"
            className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
          >
            Crear empresa
          </button>
          <button
            className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/companiestable">Ver empresas</a>
          </button>
        </form>
      </div>
    </>
  );
};

export default MolFormCompaniesCreate;
