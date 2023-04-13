import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createCoders } from "../../../service/CodersService";
import { getPromotions } from "../../../service/PromotionsServices";
import { getEvento } from "../../../service/EventService";

const MolFormCodersCreate = () => {
  const [event, setEvent] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [event_id, setEventId] = useState("");
  const [promo_id, setPromoId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [years, setYears] = useState("");
  const [avaliability, setAvaliability] = useState("");
  const [remote, setRemote] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
 
  const navigate = useNavigate();
//console.log(promo_id);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("event_id", event_id);
      formData.append("promo_id", promo_id);
      formData.append("name", name);
      formData.append("gender", gender);
      formData.append("years", years);
      formData.append("avaliability", avaliability);
      formData.append("remote", remote);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("linkedin", linkedin);
      formData.append("github", github);

      const { data } = await createCoders(formData);
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

  useEffect(() => {
    getEvento()
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getPromotions()
      .then((response) => {
        setPromotions(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

 

  return (
    <>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">Añadir coder</h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="event"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Evento
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="event_id"
                  id="event_id"
                  value={event_id} // Cambiar 'regions' por el estado que representa la opción seleccionada
                  onChange={(event) => setEventId(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >


                  {event.map((e) => (
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
                Promoción
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  name="promo_id"
                  id="promo_id"
                  value={promo_id} // Cambiar 'regions' por el estado que representa la opción seleccionada
                  onChange={(event) => setPromoId(event.target.value)} // Cambiar 'setRegions' por el método que actualiza el estado de la opción seleccionada
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >
                  {promotions.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>         

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
                Nombre
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="Name"
                  className="block w-full mr-10 rounded-md border-0 px-2 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Gender
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  autoComplete="url"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="years"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Años
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="years"
                  id="years"
                  value={years}
                  onChange={(event) => setYears(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="avaliability"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Disponibilidad
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="avaliability"
                  id="avaliability"
                  value={avaliability}
                  onChange={(event) => setAvaliability(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="remote"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Remote
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="remote"
                  id="remote"
                  value={remote}
                  onChange={(event) => setRemote(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Email
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Teléfono
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Linkedin
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  value={linkedin}
                  onChange={(event) => setLinkedin(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="github"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                GitHub
              </label>
              <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="github"
                  id="github"
                  value={github}
                  onChange={(event) => setGithub(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
          <button
            type="submit"
            className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
          >
            Añadir coder
          </button>
          <button
            className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/codertable">Ver Coders</a>
          </button>
        </form>
      </div>
    </>
  );
};

export default MolFormCodersCreate;
