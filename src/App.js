import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MolTableEvent from './components/molecule/MolTableEvent';
import MolFormEvent from './components/molecule/MolFormEvent';
import Edit from './components/molecule/Edit';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Router>
          <Layout>
            <Routes>
            <Route path="/" element={<MolFormEvent />} />
            <Route path="/table" element={<MolTableEvent />} />
            <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </Layout>
      </Router>
      </div>
    </div>
  );
}

export default App;
