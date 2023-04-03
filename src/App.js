import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import Tabla from './components/molecule/Tabla';
//import EditEvent from './components/molecule/EditEvent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MolForm from './components/molecule/MolForm';
import Editor from './components/molecule/Editor';
import MolTableEvent from './components/molecule/MolTableEvent';



function App() {
  return (
    <div className="App">
      <div className="App-header">
        <MolTableEvent/>
        <Router>
        <Routes>
        <Route path="/" element={<MolForm />} />
        <Route path="/table" element={<Tabla />} />
        <Route path="/edit/:eventId" element={<Editor />} />
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
