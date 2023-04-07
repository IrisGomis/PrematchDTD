import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MolTableEvent from './components/molecule/mol-event/MolTableEvent';
import MolFormEvent from './components/molecule/mol-event/MolFormEvent';
import MolFormEventEdit from './components/molecule/mol-event/MolFormEventEdit';
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
            <Route path="/edit/:id" element={<MolFormEventEdit />} />
            </Routes>
          </Layout>
      </Router>
      </div>
    </div>
  );
}

export default App;
