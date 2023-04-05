import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MolTableEvent from './components/molecule/MolTableEvent';
import MolFormEvent from './components/molecule/MolFormEvent';
import MolFormEventEdit from './components/molecule/MolFormEventEdit';
import Update from './components/molecule/Update';


function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Router>
        <Update/>
        <Routes>
        <Route path="/" element={<MolFormEvent />} />
        <Route path="/table" element={<MolTableEvent />} />
        <Route path="/edit/:eventId" element={<MolFormEventEdit />} />
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
