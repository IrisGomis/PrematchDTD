import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Buscador() {
  return (
    <div className="flex items-center rounded-lg bg-gray-100 p-2">
      <input
        type="text"
        placeholder="Buscar personas, documentos y más"
        className="w-full rounded-lg p-2 focus:outline-none"
      />
      <button className="bg-white rounded-lg p-2">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Buscador;
