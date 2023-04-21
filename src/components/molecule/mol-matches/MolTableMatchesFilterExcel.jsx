import React from 'react';
import { getMatch } from "../../../service/MatchesService";
import { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";



const MolTableMatchesFilterExcel = () => {
    const [match, setMatch] = useState([]);
    useEffect(() => {
        getMatch()
          .then((response) => {
            const matches = response.data.map((match) => ({
              nameEvent: match.nameEvent,
              nameCompany: match.nameCompany,
              nameRecruiter: match.nameRecruiter,
              nameCoder: match.nameCoder,
              afinity: match.afinity,
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
        }
    ]
  return (
    
        <MUIDataTable 
        title={"Lista de Matches"}
        data={match}
        columns={columns}
        />
    );
}

export default MolTableMatchesFilterExcel;