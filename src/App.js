import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import FormularioDos from './components/molecule/FormularioDos';
import TableEvent from './components/molecule/TableEvent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FormularioDos/>
       <TableEvent/>
      </header>
    </div>
  );
}

export default App;
