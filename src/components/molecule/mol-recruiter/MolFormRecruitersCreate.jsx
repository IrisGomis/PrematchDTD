import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecruiters } from "../../../service/RecruitersService";
import Swal from "sweetalert2";

export default function MolFormRecruitersCreate() {
  const [name, setName] = useState("");
  const [charge, setCharge] = useState("");
  const [remote, setRemote] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("charge", charge);
      formData.append("remote", remote);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("linkedin", linkedin);

      const { data } = await createRecruiters(formData);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu recruiter se ha creado con éxito!",
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
        title: "Ha habido un problema, ¡prueba de nuevo!",
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
                  Nombre <span className="text-orange">*</span>
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
                <label htmlFor="date">Cargo</label>
                <input
                  type="text"
                  title="charge"
                  id="charge"
                  value={charge}
                  onChange={(event) => setCharge(event.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="default-input">LinkedIn</label>
                <input
                  type="url"
                  id="linkendin"
                  value={linkedin}
                  onChange={(event) => setLinkedin(event.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="default-input">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                >
                  Teléfono <span className="text-orange">*</span>
                </label>
                <input
                  type="phone"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="url">Remote</label>
                <input
                  type='checkbox'
                  id="remote"
                  onChange={(event) => setRemote(event.target.value)}
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
