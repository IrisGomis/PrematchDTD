import React, { useState } from 'react';

function Formulario() {
  const [contacts, setContacts] = useState([{ nombre: '', email: '', telefono: '' }]);

  const agregarContacto = () => {
    setContacts([...contacts, { nombre: '', email: '', telefono: '' }]);
  };

  const handleContactoChange = (index, event) => {
    const nuevosContactos = [...contacts];
    nuevosContactos[index][event.target.name] = event.target.value;
    setContacts(nuevosContactos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puede enviar los datos de contacto al servidor
    console.log(contacts);
  };

  return (
    <form onSubmit={handleSubmit}>
      {contacts.map((contact, index) => (
        <div key={index}>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={contact.nombre} onChange={(e) => handleContactoChange(index, e)} />
          <br />
          <label>Email:</label>
          <input type="email" name="email" value={contact.email} onChange={(e) => handleContactoChange(index, e)} />
          <br />
          <label>Teléfono:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
</label>
          <input type="tel" name="telefono" value={contact.telefono} onChange={(e) => handleContactoChange(index, e)} />
          <br />
          <br />
        </div>
      ))}
      <button type="button" onClick={agregarContacto}>
        Agregar contacto
      </button>
      <br />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
