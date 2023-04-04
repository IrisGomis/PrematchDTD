import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import MolTableEvent from './components/molecule/MolTableEvent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MolFormEvent from './components/molecule/MolFormEvent';



function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Router>
        <Routes>
        <Route path="/" element={<MolFormEvent />} />
        <Route path="/table" element={<MolTableEvent />} />
        {/* <Route path="/edit/:eventId" element={<Editor />} /> */}
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
