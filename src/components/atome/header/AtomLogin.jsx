import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function LoginIcon() {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  }

  return (
    <div className="relative">
      <button onClick={handleButtonClick} className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faUser} className="text-gray-500 text-lg" />
      </button>
      {showOptions && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Mi perfil
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginIcon;
