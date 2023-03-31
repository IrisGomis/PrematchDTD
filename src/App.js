import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import MolForm from './components/molecule/MolForm';
import Tabla from './components/molecule/Tabla';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MolForm/>
       <Tabla/>
      </header>
    </div>
  );
}

export default App;
