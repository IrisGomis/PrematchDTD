import React from 'react';
import { useNavigate } from "react-router-dom";
import { getSchedule, createSchedule } from "../../../service/ScheduleService";
import { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import Swal from "sweetalert2";



const MolTableMatchesFilterExcel = () => {
    const [match, setMatch] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      getSchedule()
          .then((response) => {
            const matches = response.data.map((schedule) => ({
              nameEvent: schedule.nameEvent,
              nameCompany: schedule.nameCompany,
              nameRecruiter: schedule.nameCompany,
              nameCoder: schedule.nameCoder,
              afinity: schedule.afinity,
              interview: schedule.interview, 
            }));
            setMatch(matches);
          })
          .catch((error) => console.error(error));
      }, []);

      const columns = [
        {
            name: "nameEvent",
            label: "EVENTO"
        },
        {
            name: "nameCompany",
            label: "COMPAÑIA"
        },
        {
            name: "nameRecruiter",
            label: "RECRUITER"
        },
        {
            name: "nameCoder",
            label: "CODER"
        },
        {
            name: "afinity",
            label: "AFINIDAD"
        },
        {
            name: "interview",
            lable: "Entrevista"
        }
    ]
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const scheduleCreate = await createSchedule();
          console.log(scheduleCreate);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Tu match se ha creado con éxito!",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {
            navigate("/datematches");
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
    <button
        onClick={handleSubmit}
        type="submit"
        className="text-sm text-white my-10 mx-10 px-12 py-3.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
      >
        Crear match
      </button>
        <MUIDataTable 
        title={"Agenda Evento"}
        data={match}
        columns={columns}
        />
        </>
    );
}

export default MolTableMatchesFilterExcel;