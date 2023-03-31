import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import Formulario from './components/molecule/Formulario';
import Tabla from './components/molecule/Tabla';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Formulario/>
       <Tabla/>
      </header>
    </div>
  );
}

export default App;
