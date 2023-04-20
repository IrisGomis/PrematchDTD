// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// export default function Search() {
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const getSearch = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/match");
//         if (Array.isArray(response.data)) {
//           setSearchResults(response.data);
//         } else {
//           setSearchResults([]);
//         }
//       } catch (error) {
//         console.error(error);
//         setSearchResults([]);
//       }
//     };
      
//     getSearch();
//   }, []);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearch(searchTerm);
//     const searchFiltered = searchResults.filter((match) => {
//       return (
//         match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         match.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });
//     setSearchResults(searchFiltered);
//   };
  
//   return (
//     <div className="col-md-4">
//       <input
//         type="text"
//         className="form-control search"
//         placeholder="Buscar producto..."
//         value={search}
//         onChange={handleSearch}
//       />
//       {searchResults.length > 0 ? (
//         searchResults.map((match) => (
//           <div key={match.id}>{match.name}</div>
//         ))
//       ) : (
//         <div>No hay resultados de búsqueda.</div>
//       )}
//     </div>
//   );
// }
