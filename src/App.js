import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import MolForm from './components/molecule/MolForm';
import Formulario from './components/molecule/Formulario';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MolForm/>
       <Formulario/>
      </header>
    </div>
  );
}

export default App;
