import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MolTableEvent from '../components/molecule/mol-event/MolTableEvent';
import MolFormEvent from '../components/molecule/mol-event/MolFormEvent';
import MolFormEventEdit from '../components/molecule/mol-event/MolFormEventEdit';
import Layout from '../components/layout/Layout';
import Home from '../components/views/Home';
import Companies from '../components/views/Companies';
import Statistics from '../components/views/Statistics';
import Admin from '../components/views/Admin';
import Tareas from '../components/views/Taks';
import Schools from '../components/views/Schools';
function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Router>
          <Layout>
            <Routes>
            <Route path="/" element={<MolFormEvent />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/taks" element={<Tareas />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/table" element={<MolTableEvent />} />
            <Route path="/edit/:id" element={<MolFormEventEdit />} />
            </Routes>
          </Layout>
      </Router>
      </div>
    </div>
  );
}

export default App;
