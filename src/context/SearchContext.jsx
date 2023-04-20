// import React, { createContext, useState, useEffect } from "react";


// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [searchData, setSearchData] = useState(null) // Data original
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/match/search"
//         );
//         if (response.status === 200) {
//           const data = await response.json();
//           setSearchData(data);
//           console.log(data);
//         } else {
//           alert("Hubo un problema de conexión.");
//         }
//       } catch {
//         alert("No pudimos hacer la solicitud.");
//       }
//     }
//     fetchData();

//   }, []);

//   return (
//     <SearchContext.Provider
//       value={{
//         searchData,
//         setSearchData
//       }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// };