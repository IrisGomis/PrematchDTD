// import React, { useState } from 'react';
// import axios from 'axios';

// function ImportExcel() {
//   const [file, setFile] = useState(null);

//   const handleFileUpload = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);

//     axios.post('/import-excel', formData)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input type="file" onChange={handleFileUpload} />
//       <button type="submit">Importar</button>
//     </form>
//   );
// }

// export default ImportExcel;
