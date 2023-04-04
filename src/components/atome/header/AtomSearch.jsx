import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Buscador() {
  return (
    <div className="mx-auto w-1/2 m-5 h-12 flex items-center rounded-full bg-stone3 p-0.5">
      
      <input type="text" placeholder="Buscar personas, documentos y más" className="bg-stone3 text-white py-2 px-4 w-full rounded-full focus:outline-none placeholder-white"/>
      <FontAwesomeIcon icon={faSearch} className="text-white mr-2 text-2xl" />
    </div>
  );
}

export default Buscador;
