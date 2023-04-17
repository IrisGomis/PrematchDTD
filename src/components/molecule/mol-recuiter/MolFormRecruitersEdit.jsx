import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecruitersById, updateRecruiters } from "../../../service/RecruitersService";
import Swal from "sweetalert2";
import { getCompanies } from "../../../service/CompaniesService";
import { getEvento } from "../../../service/EventService";

const MolFormRecruitersEdit = ({ prop }) => {
 

  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [event_id, setEventId] = useState(undefined);
  const [companies_id, setCompaniesId] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [charge, setCharge] = useState(undefined);
  const [interviews_quantity, setInterviews_quantity] = useState("");
  const [remote, setRemote] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [linkedin, setLinkedin] = useState(undefined);

  useEffect(() => {
    const fetchCoder = async () => {
      try {
        const { data } = await getRecruitersById(id);
        setEventId(data.coder.event_id);
        setCompaniesId(data.coder.event.companies_id);
        setName(data.coder.event.name);
        setRemote(data.coder.remote);
        setEmail(data.coder.email);
        setPhone(data.coder.phone);
        setLinkedin(data.linkedin);
        setInterviews_quantity(data.interviews_quantity);
        setCharge(data.charge);
        console.log(data);
      } catch (error) {
        //console.log(error);
      }
    };
    fetchCoder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();
    if ([event_id, companies_id, name, interviews_quantity, charge, remote, email, phone, linkedin].some((value) => value === undefined)) {
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
      const coderData = {
        event_id,
        companies_id,
        name,
        remote,
        email,
        phone,
        linkedin,
        interviews_quantity,
        charge
      };

      await updateRecruiters(id, coderData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu coder se ha actualizado con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/codercreate");
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

  useEffect(() => {
    getEvento()
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getCompanies()
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

 
  return (
    <>
      <div className="bg-stone6 w-full max-w-screen-lg rounded-xl p-20 m-20">
        <h2 className="text-2xl font-semibold leading-7 text-orange">Editar Recruiter</h2>

        <form className="bg-stone6" onSubmit={handleSubmit}>
          <div className="mt-10 space-y-8 border-b border-orange pb-12 sm:space-y-0 sm:divide-y sm:divide-orange sm:border-t sm:pb-0">

          
            
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="event_id"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
               Evento <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
              <select
                  type="number"
                  name="event_id"
                  id="event_id"
                  value={event_id ?? ""}
                  onChange={(event) => setEventId(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                htmlFor="companies_id"
                className="block text-sm font-medium leading-6 text-white sm:pt-1.5"
              >
               Empresa <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
              <select
                  type="number"
                  name="companies_id"
                  id="companies_id"
                  value={companies_id ?? ""}
                  onChange={(event) => setCompaniesId(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {companies.map((e) => (
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
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
               Nombre <span className="text-orange">*</span>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="name"
                  name="name"
                  type="name"
                  value={name ?? ""}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="nombre"
                  className="block w-full rounded-md border-0 py-1.5  text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                />
              </div>
            </div>
              
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="charge"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Cargo <span className="text-orange">*</span>
              </label>
               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="charge"
                  id="charge"
                  value={charge ?? ""}
                  onChange={(event) => setCharge(event.target.value)}
                  
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
                  value={linkedin ?? ""}
                  onChange={(event) => setLinkedin(event.target.value)}
                  // placeholder="Maximas"
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Email <span className="text-orange">*</span>
              </label>
               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email ?? ""}
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
                Teléfono <span className="text-orange">*</span>
              </label>
               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  value={phone ?? ""}
                  onChange={(event) => setPhone(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="remote"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                En remoto <span className="text-orange">*</span>
              </label>
               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="checkbox"
                  name="remote"
                  id="remoten"
                  value={remote ?? ""}
                  onChange={(event) => setRemote(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="interviews_quantity"
                className="block text-sm font-medium leading-6  text-white sm:pt-1.5"
              >
                Nº entrevistas <span className="text-orange">*</span>
              </label>
               <div className="flex mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="interviews_quantity"
                  id="interviews_quantity"
                  value={interviews_quantity ?? ""}
                  onChange={(event) => setInterviews_quantity(event.target.value)}
                  className="block w-full rounded-md border-0 mr-10 py-1.5 px-2 text-stone6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>

          <button
            type="submit"
            className="text-sm my-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orange to-orangel hover:from-verde hover:to-verdel ..."
          >
            Editar recruiter
          </button>

          <button
            className="text-sm my-10 mx-10 px-24 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
            type="button"
          >
            <a href="/recruiterstable">Ver recruiters</a>
          </button>

        </form>
      </div>
    </>
  );
}

export default MolFormRecruitersEdit;
