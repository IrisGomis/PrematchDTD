import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import FormularioDos from './components/molecule/FormularioDos';
import Tabla from './components/molecule/Tabla';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FormularioDos/>
       <Tabla/>
      </header>
    </div>
  );
}

export default App;
