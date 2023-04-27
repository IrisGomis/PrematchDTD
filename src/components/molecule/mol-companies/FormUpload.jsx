import React, { useState } from 'react';
import { createExcelCompanies } from '../../../service/CompaniesService';

function FormUpload() {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!file) {
      setErrorMessage('Debe seleccionar un archivo');
      return;
    }

    setErrorMessage('');
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    createExcelCompanies(formData, {
      onUploadProgress: progressEvent => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(progress);
      }
    })
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
        <input type="file" id="file" accept=".xlsx, .xls" required={true} onChange={handleFileChange} />
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      </div>
      <button className='bg-orange' type="submit">Cargar datos</button>
    </form>
  );
}

export default FormUpload;