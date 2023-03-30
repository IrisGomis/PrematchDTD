// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Buscador() {
//   return (
//     <div className="mx-auto w-1/3 flex items-center rounded-xl bg-gray-100 p-2">
//       <input
//         type="text"
//         placeholder="Buscar personas, documentos y más"
//         className="w-full rounded-xl p-2 focus:outline-none"
//       />
//       <button className="rounded-xl p-2">
//         <FontAwesomeIcon icon={faSearch} />
//       </button>
//     </div>
//   );
// }

// export default Buscador;

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Buscador() {
  return (
    <div className="mx-auto w-1/3 flex items-center rounded-full bg-gray-300 p-0.5">
      
      <input type="text" placeholder="Buscar personas, documentos y más" className="bg-gray-300 text-white py-2 px-4 w-full rounded-full focus:outline-none placeholder-white"/>
      <FontAwesomeIcon icon={faSearch} className="text-white mr-2 text-2xl" />
    </div>
  );
}

export default Buscador;
