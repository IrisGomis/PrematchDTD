import React, { useState } from 'react';
import { createExcelCompanies } from '../../../service/CompaniesService';
//Importamos la función createExcelCompanies desde el archivo de utilidades

function FormUploa() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear una instancia de FormData y adjuntar el archivo Excel
    const formData = new FormData();
    formData.append('file', file);

    // Enviar una solicitud POST a la API de Laravel utilizando la función createExcelCompanies
    createExcelCompanies(formData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Archivo Excel:</label>
        <input type="file" id="file" value="" onChange={handleFileChange} />
      </div>
      <button className='bg-orange' type="submit">Cargar datos</button>
    </form>
  );
}

export default FormUploa;